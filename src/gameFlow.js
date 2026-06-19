// Flujo de partida: menu, inicio, intro, game over y reseteos generales.
// Coordina cambios grandes de estado sin mezclar la logica interna de cada sistema.

function setUiDepth(scene) {
  [
    scene.menuContainer,
    scene.gameOverContainer,
    scene.rankingContainer,
    scene.pauseOverlay,
    scene.missionsOverlay,
    scene.optionsOverlay,
    scene.upgradeOverlay,
    scene.echoTutorialOverlay,
  ].forEach((item) => {
    if (item) item.setDepth(UI_DEPTH);
  });

  if (scene.shieldBubble) scene.shieldBubble.setDepth(SHIP_DEPTH + 1);
  if (scene.shipEyeGlow) scene.shipEyeGlow.setDepth(SHIP_DEPTH + 1);
  if (scene.shipEyeCore) scene.shipEyeCore.setDepth(SHIP_DEPTH + 2);
  if (scene.echoCompanion) scene.echoCompanion.setDepth(SHIP_DEPTH + 2);
  if (scene.echoEyeGlow) scene.echoEyeGlow.setDepth(SHIP_DEPTH + 3);
  if (scene.echoEyeCore) scene.echoEyeCore.setDepth(SHIP_DEPTH + 4);
}

// --- Control de estados ---

function showMenu() {
  cancelIntroSequence(this);
  clearEchoTutorialTimer(this);
  state = 'menu';
  currentGameMode = 'xy';
  isDraggingShip = false;
  this.xyPauseResumeArmed = false;
  setPauseSettingsVisible(false);
  setXyControlVisible(this, false);
  if (this) this.optionsReturnScreen = null;
  pendingScoreSave = null;
  lastScoreSaved = false;
  this.input.setDefaultCursor('default');
  setPauseOverlayMode(this, 'normal');
  this.tweens.resumeAll();
  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }
  resetTimedBoosters(this);
  resetRedWave(this);
  resetDroneWave(this);
  resetAsteroidWave(this);
  resetPlasmaWave(this);
  resetBossWave(this);
  this.resumeSpawnDelay = null;
  clearGameplayVisuals(this);
  playMenuMusic(this);
  showOverlayScreen(this, 'menu');
  resetCounters.call(this);
  hideEchoCompanion(this);
  setHudVisible(this, false);
}

function showRanking() {
  cancelIntroSequence(this);
  state = 'ranking';
  isDraggingShip = false;
  this.xyPauseResumeArmed = false;
  setPauseSettingsVisible(false);
  setXyControlVisible(this, false);
  this.optionsReturnScreen = null;
  this.input.setDefaultCursor('default');
  playMenuMusic(this);
  hideEchoCompanion(this);
  setHudVisible(this, false);
  showOverlayScreen(this, 'ranking');
  loadRankingInto(this.rankingContainer && this.rankingContainer.list, this.rankingContainer && this.rankingContainer.status, 10);
}

function startGame(options = {}) {
  cancelIntroSequence(this);
  clearEchoTutorialTimer(this);
  currentGameMode = getValidGameMode(options.mode);
  const shouldShowEchoTutorial = currentGameMode === 'xy' && !options.skipEchoTutorial;
  state = shouldShowEchoTutorial ? 'intro' : 'playing';
  isDraggingShip = false;
  this.xyPauseResumeArmed = false;
  setPauseSettingsVisible(false);
  pendingScoreSave = null;
  lastScoreSaved = false;
  this.input.setDefaultCursor('default');
  this.optionsReturnScreen = null;
  setPauseOverlayMode(this, 'normal');
  this.tweens.resumeAll();
  clearGameplayVisuals(this);
  showOverlayScreen(this, null);
  setHudVisible(this, !shouldShowEchoTutorial);
  resetCounters.call(this);
  if (isInfiniteGameMode()) {
    enableInfiniteModeThreats(this);
  }
  updateEchoCompanion(this, 0);
  resetTimedBoosters(this);
  resetRedWave(this);
  resetDroneWave(this);
  resetAsteroidWave(this);
  resetPlasmaWave(this);
  resetBossWave(this);
  this.resumeSpawnDelay = null;
  clearPendingStreakReward(this);
  if (this.finalDamageGameOverEvent) {
    this.finalDamageGameOverEvent.remove(false);
    this.finalDamageGameOverEvent = null;
  }

  setXyControlVisible(this, false);
  if (isXyGameMode()) {
    resetXyShipControl(this);
  } else {
    moveShipTo(this, getGameWidth(this) / 2, getShipY(this));
    updateXyControlFromShip(this);
  }

  if (shouldShowEchoTutorial) {
    startGameIntro(this);
    return;
  }

  beginGameplayAfterEchoTutorial(this);
}

function startGameIntro(scene) {
  startAxisActivationIntro(scene, () => startEchoTutorial(scene));
}

function startAxisActivationIntro(scene, onComplete) {
  if (!scene || !scene.ship || !scene.echoCompanion) {
    if (onComplete) onComplete();
    return;
  }

  cancelIntroSequence(scene);
  state = 'intro';
  isDraggingShip = false;
  showOverlayScreen(scene, null);
  setHudVisible(scene, false);
  setXyControlVisible(scene, false);
  clearShipTrail(scene);

  const centerX = getGameWidth(scene) / 2;
  const shipHomeY = getShipY(scene);
  const sequence = {
    orbit: { progress: 0 },
    onComplete,
  };
  scene.introSequence = sequence;

  scene.ship
    .setVisible(false)
    .setPosition(centerX - 34, getGameHeight(scene) + SHIP_HEIGHT)
    .setAngle(-7);
  scene.ship.body.reset(scene.ship.x, scene.ship.y);
  scene.shipEyeGlow.setAlpha(0).setScale(0.72).setVisible(false);
  scene.shipEyeCore.setAlpha(0).setScale(0.82).setVisible(false);
  hideEchoCompanion(scene);

  scene.time.delayedCall(INTRO_EMPTY_SPACE_DURATION, () => {
    if (!isIntroSequenceActive(scene, sequence)) return;

    scene.ship.setVisible(true);
    sequence.axisArrivalTween = scene.tweens.add({
      targets: scene.ship,
      x: centerX,
      y: shipHomeY,
      angle: 0,
      duration: INTRO_AXIS_ARRIVAL_DURATION,
      ease: 'Sine.easeInOut',
      onUpdate: () => {
        scene.ship.body.reset(scene.ship.x, scene.ship.y);
        updateShipEyeGlow(scene);
      },
      onComplete: () => startIntroEchoArrival(scene, sequence),
    });
  });
}


function isIntroSequenceActive(scene, sequence) {
  return Boolean(scene && state === 'intro' && scene.introSequence === sequence);
}

function cancelIntroSequence(scene) {
  if (!scene || !scene.introSequence) return;
  const sequence = scene.introSequence;
  [
    sequence.axisArrivalTween,
    sequence.echoArrivalTween,
    sequence.echoOrbitTween,
    sequence.energyLinkFadeTween,
    sequence.activationBurstTween,
    sequence.shipActivationTween,
    sequence.eyeGlowTween,
    sequence.eyeCoreTween,
    sequence.echoSettleTween,
    sequence.echoHopTween,
  ].forEach((tween) => {
    if (tween && tween.stop) tween.stop();
  });
  clearIntroEnergyLink(sequence);
  if (sequence.activationBurst) sequence.activationBurst.destroy();
  if (scene.ship) scene.ship.setScale(SHIP_SCALE);
  if (scene.tweens && sequence.orbit) scene.tweens.killTweensOf(sequence.orbit);
  scene.introSequence = null;
}

function beginGameplayAfterEchoTutorial(scene) {
  if (!scene) return;

  state = 'playing';
  showOverlayScreen(scene, null);
  setHudVisible(scene, true);
  setXyControlVisible(scene, true);
  if (isXyGameMode()) {
    resetXyShipControl(scene);
  }

  if (isBossOnlyGameMode()) {
    queueNextBossOnlyWave(scene);
    pauseBeforeFirstGameplaySpawn(scene);
    return;
  }

  if (isInfiniteGameMode()) {
    pauseBeforeFirstGameplaySpawn(scene);
    return;
  }

  // Primera bola inmediata, luego spawn periodico
  spawnBall(scene);
  scheduleNextSpawn(scene);
  restartBackgroundMusic(scene);
}

function pauseBeforeFirstGameplaySpawn(scene) {
  if (!scene) return;

  state = 'paused';
  isDraggingShip = false;
  scene.resumeSpawnDelay = null;
  setPauseOverlayMode(scene, 'normal');
  setXyControlActive(scene, false);
  prepareControlPauseResume(scene);
  showOverlayScreen(scene, null);
  setPauseSettingsVisible(true);
  restartBackgroundMusic(scene);
}

function endGame() {
  if (state !== 'playing' && state !== 'paused' && state !== 'dying') return; // Evitar llamadas dobles
  cancelIntroSequence(this);
  clearEchoTutorialTimer(this);
  state = 'gameover';
  isDraggingShip = false;
  this.xyPauseResumeArmed = false;
  setPauseSettingsVisible(false);
  setXyControlVisible(this, false);
  this.input.setDefaultCursor('default');
  if (this.finalDamageGameOverEvent) {
    this.finalDamageGameOverEvent.remove(false);
    this.finalDamageGameOverEvent = null;
  }

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }
  resetTimedBoosters(this);
  resetRedWave(this);
  resetDroneWave(this);
  resetAsteroidWave(this);
  resetPlasmaWave(this);
  resetBossWave(this);
  this.resumeSpawnDelay = null;
  clearPendingStreakReward(this);
  stopNonMusicAudio(this);
  clearGameplayVisuals(this);
  hideEchoCompanion(this);
  playMenuMusic(this);
  setHudVisible(this, false);
  showOverlayScreen(this, 'gameover');
  updateGameOverReviveButton(this);
  if (isBossOnlyGameMode()) {
    this.gameOverContainer.finalScore.setText('Solo Jefes - Jefes superados: ' + Math.max(0, this.bossOnlyBossNumber - 1));
    prepareUnrankedGameOver(this);
  } else if (isXyInfiniteGameMode()) {
    this.gameOverContainer.finalScore.setText('Modo Infinito - Puntuación: ' + score);
    prepareUnrankedGameOver(this);
  } else {
    this.gameOverContainer.finalScore.setText('Puntuación: ' + score);
    prepareGameOverScore(this);
    loadRankingInto(this.gameOverContainer.topRankingList, null, 3);
  }
}

function canReviveFromBossCheckpoint() {
  return Boolean(bossReviveCheckpoint && bossReviveCheckpoint.bossConfig);
}

function getBossReviveCost() {
  return BOSS_REVIVE_REGISTER_COST * (bossReviveRegisterPayments + 1);
}

function canAffordBossRevive() {
  return canReviveFromBossCheckpoint() && registers >= getBossReviveCost();
}

function updateGameOverReviveButton(scene) {
  const overlay = scene && scene.gameOverContainer;
  if (!overlay) return;

  const reviveButton = overlay.reviveButton;
  const hasCheckpoint = canReviveFromBossCheckpoint();
  const canAfford = canAffordBossRevive();

  if (reviveButton) {
    reviveButton.hidden = !hasCheckpoint;
    reviveButton.disabled = !canAfford;
    reviveButton.classList.toggle('is-disabled', !canAfford);
    reviveButton.classList.add('ui-button-stacked');
    reviveButton.replaceChildren();
    if (canAfford) {
      const title = document.createElement('span');
      title.className = 'revive-button-title';
      title.textContent = 'REAPARECER';
      reviveButton.append(title, createRegisterCostContent(getBossReviveCost(), 'revive-cost-main'));
    } else {
      const title = document.createElement('span');
      title.className = 'revive-button-title';
      title.textContent = 'REAPARECER';
      const subtitle = document.createElement('small');
      subtitle.textContent = 'No tienes suficientes registros';
      reviveButton.append(title, subtitle);
    }
  }
}

function createRegisterCostContent(amount, className = '') {
  const wrapper = document.createElement('span');
  wrapper.className = className;

  const value = document.createElement('span');
  value.textContent = amount;

  wrapper.append(value, createRegisterInlineIcon());
  return wrapper;
}

function createRegisterInlineIcon() {
  const icon = document.createElement('img');
  icon.className = 'register-inline-icon';
  icon.src = REGISTER_IMAGE_PATH;
  icon.alt = '';
  icon.setAttribute('aria-hidden', 'true');
  return icon;
}

function saveBossReviveCheckpoint(scene, bossConfig) {
  if (!scene || !bossConfig) return;

  bossReviveCheckpoint = {
    mode: currentGameMode,
    bossConfig: cloneBossConfig(bossConfig),
    score,
    ballsCaught,
    energyStreak,
    maxEnergyStreak,
    registers,
    currentGravity,
    currentBoosterGravity,
    currentSpawnDelay,
    maxLives,
    levelProgressScore,
    playerLevel,
    nextUpgradeScore,
    upgrades: {
      lifeBoosterLevel,
      shieldBoosterLevel,
      scoreBoosterLevel,
      energyRefinerLevel,
      energyPurifierLevel,
      echoHelpLevel,
      vitalExpanderLevel,
      energyResonanceLevel,
      energyRefinerLevelBonus,
      shieldDefeatLevelBonus,
    },
    unlocks: {
      obreraSpawnsUnlocked: Boolean(scene.obreraSpawnsUnlocked),
      scissorSpawnsUnlocked: Boolean(scene.scissorSpawnsUnlocked),
      droneSpawnsUnlocked: Boolean(scene.droneSpawnsUnlocked),
      giroDroneSpawnsUnlocked: Boolean(scene.giroDroneSpawnsUnlocked),
      asteroidSpawnsUnlocked: Boolean(scene.asteroidSpawnsUnlocked),
      plasmaSpawnsUnlocked: Boolean(scene.plasmaSpawnsUnlocked),
      redNeedleSpawnsUnlocked: Boolean(scene.redNeedleSpawnsUnlocked),
      replicatorSpawnsUnlocked: Boolean(scene.replicatorSpawnsUnlocked),
      crystallizedOrbSpawnsUnlocked: Boolean(scene.crystallizedOrbSpawnsUnlocked),
      travelSentinelUnlocked: Boolean(scene.travelSentinelUnlocked),
      nextTravelSentinelEligibleAt: scene.nextTravelSentinelEligibleAt || 0,
    },
    infiniteBossBag: scene.infiniteBossBag ? scene.infiniteBossBag.slice() : [],
    bossOnlyBossNumber: scene.bossOnlyBossNumber || 0,
    bossOnlyTypeRevealed: Boolean(scene.bossOnlyTypeRevealed),
    completedRegisterMissions: Object.assign({}, scene.completedRegisterMissions || {}),
    registerMissionProgress: Object.assign({}, scene.registerMissionProgress || {}),
  };
}

function cloneBossConfig(bossConfig) {
  return Object.assign({}, bossConfig);
}

function reviveFromBossCheckpoint() {
  if (!canAffordBossRevive()) return;
  const checkpoint = bossReviveCheckpoint;
  const reviveCost = getBossReviveCost();
  const registersAtDeath = registers;
  const completedRegisterMissionsAtDeath = Object.assign({}, this.completedRegisterMissions || {});
  const registerMissionProgressAtDeath = Object.assign({}, this.registerMissionProgress || {});

  cancelIntroSequence(this);
  clearEchoTutorialTimer(this);
  currentGameMode = getValidGameMode(checkpoint.mode);
  state = 'intro';
  isDraggingShip = false;
  this.xyPauseResumeArmed = false;
  pendingScoreSave = null;
  lastScoreSaved = false;
  this.input.setDefaultCursor('default');
  this.optionsReturnScreen = null;
  setPauseOverlayMode(this, 'normal');
  setPauseSettingsVisible(false);
  setXyControlVisible(this, false);
  this.tweens.resumeAll();

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }
  if (this.finalDamageGameOverEvent) {
    this.finalDamageGameOverEvent.remove(false);
    this.finalDamageGameOverEvent = null;
  }

  resetTimedBoosters(this);
  resetRedWave(this);
  resetDroneWave(this);
  resetAsteroidWave(this);
  resetPlasmaWave(this);
  resetBossWave(this);
  clearPendingStreakReward(this);
  clearGameplayVisuals(this);
  stopNonMusicAudio(this);
  showOverlayScreen(this, null);
  restoreBossReviveCheckpoint(
    this,
    checkpoint,
    reviveCost,
    registersAtDeath,
    completedRegisterMissionsAtDeath,
    registerMissionProgressAtDeath
  );
  bossReviveRegisterPayments += 1;
  hideEchoCompanion(this);
  setHudVisible(this, false);
  playBackgroundMusic(this);

  startAxisActivationIntro(this, () => beginBossReviveEncounter(this, checkpoint));
}

function restoreBossReviveCheckpoint(
  scene,
  checkpoint,
  reviveCost = 0,
  paidRegisters = checkpoint.registers,
  completedRegisterMissionsAtDeath = {},
  registerMissionProgressAtDeath = {}
) {
  score = checkpoint.score;
  ballsCaught = checkpoint.ballsCaught;
  energyStreak = checkpoint.energyStreak;
  maxEnergyStreak = checkpoint.maxEnergyStreak;
  registers = Math.max(0, (paidRegisters || 0) - reviveCost);
  currentGravity = checkpoint.currentGravity;
  currentBoosterGravity = checkpoint.currentBoosterGravity;
  currentSpawnDelay = checkpoint.currentSpawnDelay;
  maxLives = checkpoint.maxLives;
  lives = maxLives;
  levelProgressScore = checkpoint.levelProgressScore;
  playerLevel = checkpoint.playerLevel;
  nextUpgradeScore = checkpoint.nextUpgradeScore;

  lifeBoosterLevel = checkpoint.upgrades.lifeBoosterLevel;
  shieldBoosterLevel = checkpoint.upgrades.shieldBoosterLevel;
  scoreBoosterLevel = checkpoint.upgrades.scoreBoosterLevel;
  energyRefinerLevel = checkpoint.upgrades.energyRefinerLevel;
  energyPurifierLevel = checkpoint.upgrades.energyPurifierLevel;
  echoHelpLevel = checkpoint.upgrades.echoHelpLevel;
  vitalExpanderLevel = checkpoint.upgrades.vitalExpanderLevel;
  energyResonanceLevel = checkpoint.upgrades.energyResonanceLevel;
  energyRefinerLevelBonus = checkpoint.upgrades.energyRefinerLevelBonus;
  shieldDefeatLevelBonus = checkpoint.upgrades.shieldDefeatLevelBonus;

  Object.assign(scene, checkpoint.unlocks);
  scene.pendingBossWave = null;
  scene.pendingBossWaves = [];
  scene.infiniteBossBag = checkpoint.infiniteBossBag.slice();
  scene.bossOnlyBossNumber = checkpoint.bossOnlyBossNumber;
  scene.bossOnlyTypeRevealed = checkpoint.bossOnlyTypeRevealed;
  scene.completedRegisterMissions = Object.assign(
    {},
    checkpoint.completedRegisterMissions || {},
    completedRegisterMissionsAtDeath || {}
  );
  scene.registerMissionProgress = mergeRegisterMissionProgress(
    checkpoint.registerMissionProgress || {},
    registerMissionProgressAtDeath || {}
  );
  scene.resumeSpawnDelay = null;
  scene.pendingEchoWaveWarningKind = null;
  scene.levelUpgradeSequenceActive = false;

  resetEchoPersonality(scene);
  if (scene.echoCompanion) scene.echoCompanion.clearTint();
  setEchoEyeAttacking(scene, false);
  updateHud(scene);
}

function mergeRegisterMissionProgress(baseProgress = {}, latestProgress = {}) {
  const mergedProgress = Object.assign({}, baseProgress);
  Object.keys(latestProgress).forEach((missionId) => {
    mergedProgress[missionId] = Math.max(mergedProgress[missionId] || 0, latestProgress[missionId] || 0);
  });
  return mergedProgress;
}

function beginBossReviveEncounter(scene, checkpoint) {
  if (!scene || !checkpoint) return;

  state = 'playing';
  showOverlayScreen(scene, null);
  setHudVisible(scene, true);
  setXyControlVisible(scene, true);
  resetXyShipControl(scene);
  lives = maxLives;
  updateLivesText(scene);
  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  updateEchoCompanion(scene, 0);

  const bossConfig = cloneBossConfig(checkpoint.bossConfig);
  const waveKind = getWaveKindForBossConfig(bossConfig);
  activateLevelBoss(scene, bossConfig);
  if (scene.waveStartEvent) {
    scene.waveStartEvent.remove(false);
    scene.waveStartEvent = null;
  }
  startWaveCountdown(scene, waveKind);
}

function getWaveKindForBossConfig(bossConfig) {
  if (!bossConfig) return 'boss';
  if (bossConfig.kind === 'red' || bossConfig.kind === 'scissors' || bossConfig.kind === 'replicators' || bossConfig.kind === 'crystallized') return 'red';
  if (bossConfig.kind === 'drones' || bossConfig.kind === 'girodrones') return 'drones';
  if (bossConfig.kind === 'asteroid') return 'asteroid';
  if (bossConfig.kind === 'plasma') return 'plasma';
  return 'boss';
}

function enableInfiniteModeThreats(scene) {
  scene.obreraSpawnsUnlocked = true;
  scene.scissorSpawnsUnlocked = true;
  scene.droneSpawnsUnlocked = true;
  scene.giroDroneSpawnsUnlocked = true;
  scene.asteroidSpawnsUnlocked = true;
  scene.plasmaSpawnsUnlocked = true;
  scene.redNeedleSpawnsUnlocked = true;
  scene.replicatorSpawnsUnlocked = true;
  scene.crystallizedOrbSpawnsUnlocked = true;
  scene.travelSentinelUnlocked = true;
  scene.nextTravelSentinelEligibleAt = 0;
}

function prepareUnrankedGameOver(scene, message = '') {
  pendingScoreSave = null;
  lastScoreSaved = false;

  const overlay = scene.gameOverContainer;
  if (!overlay) return;
  if (overlay.scoreForm) overlay.scoreForm.hidden = true;
  if (overlay.rankingBlock) overlay.rankingBlock.hidden = true;
  if (overlay.playerNameInput) overlay.playerNameInput.disabled = true;
  if (overlay.saveScoreButton) overlay.saveScoreButton.disabled = true;
  setStatus(overlay.scoreStatus, message);
}

function resetCounters() {
  bossReviveCheckpoint = null;
  bossReviveRegisterPayments = 0;
  score = 0;
  ballsCaught = 0;
  registers = 0;
  gameplayTimeMs = 0;
  energyStreak = 0;
  maxEnergyStreak = 0;
  currentGravity = MAX_BALL_GRAVITY;
  currentBoosterGravity = getBoosterGravityForCurrentSpeed();
  currentSpawnDelay = INITIAL_SPAWN_DELAY;
  maxLives = INITIAL_HEART_CAPACITY;
  lives = maxLives;
  levelProgressScore = 0;
  playerLevel = 1;
  nextUpgradeScore = getLevelRequirement(playerLevel);
  lifeBoosterLevel = 0;
  shieldBoosterLevel = 0;
  scoreBoosterLevel = 0;
  energyRefinerLevel = 0;
  energyPurifierLevel = 0;
  echoHelpLevel = 0;
  vitalExpanderLevel = 0;
  energyResonanceLevel = 0;
  energyRefinerLevelBonus = 0;
  shieldDefeatLevelBonus = 0;
  enemyTrailTimer = 0;
  this.previousShipPosition = null;
  this.masteryStillnessMs = 0;
  this.masteryStillnessAnchorX = null;
  this.masteryStillnessAnchorY = null;
  this.masteryStillnessLastReportedSecond = 0;
  this.echoAttackTarget = null;
  this.echoReturningHome = false;
  resetEchoPersonality(this);
  if (this.echoCompanion) this.echoCompanion.clearTint();
  setEchoEyeAttacking(this, false);
  clearShipTrail(this);
  this.nextRedWaveEligibleAt = 0;
  this.nextAsteroidWaveEligibleAt = 0;
  this.obreraSpawnsUnlocked = false;
  this.scissorSpawnsUnlocked = false;
  this.droneSpawnsUnlocked = false;
  this.giroDroneSpawnsUnlocked = false;
  this.asteroidSpawnsUnlocked = false;
  this.plasmaSpawnsUnlocked = false;
  this.redNeedleSpawnsUnlocked = false;
  this.replicatorSpawnsUnlocked = false;
  this.crystallizedOrbSpawnsUnlocked = false;
  this.replicatorShipHistory = [];
  this.travelSentinelUnlocked = false;
  this.nextTravelSentinelEligibleAt = 0;
  this.pendingBossWave = null;
  this.pendingBossWaves = [];
  this.infiniteBossBag = [];
  this.bossOnlyBossNumber = 0;
  this.bossOnlyTypeRevealed = false;
  this.levelUpgradeSequenceActive = false;
  this.completedRegisterMissions = {};
  this.registerMissionProgress = {};
  resetMissionCompletePopups(this);
  resetBossWave(this);
  updatePlayerLevelText(this);
  updateStreakText();
  updateRegistersText();
  updateGameplayTimeText();
  updateSpeedTexts(this);
  updateUpgradeBar(this);
  updateUpgradeStatusIcons(this);
  updateLivesText(this);
  setShipTextureForCurrentState(this);
  updateEchoCompanion(this, 0);
}

function trackGameplayVisual(scene, object) {
  if (!scene || !object) return object;
  if (!scene.gameplayVisuals) scene.gameplayVisuals = new Set();
  scene.gameplayVisuals.add(object);
  object.once && object.once('destroy', () => {
    if (scene.gameplayVisuals) scene.gameplayVisuals.delete(object);
  });
  return object;
}

function clearGameplayVisuals(scene) {
  if (!scene) return;

  clearAllFallingObjects(scene);
  clearRegisterRewardQueue(scene);
  clearPlasmaBars(scene);
  clearBossWarningParticles(scene);
  clearBossLaser(scene);
  destroyShipLifeIndicator(scene);

  if (scene.gameplayVisuals) {
    scene.gameplayVisuals.forEach((object) => {
      if (!object) return;
      if (scene.tweens && object.active !== false) scene.tweens.killTweensOf(object);
      if (object.destroy) object.destroy();
    });
    scene.gameplayVisuals.clear();
  }
  scene.shipLifeIndicator = null;
  scene.pointPopupSlots = [];
  clearShipTrail(scene);

  if (scene.ship) {
    scene.tweens.killTweensOf(scene.ship);
    clearShipDamageFeedback(scene);
    setShipTextureForCurrentState(scene);
    refreshShipSize(scene);
    moveShipTo(scene, getGameWidth(scene) / 2, getShipY(scene));
  }
  if (scene.shipEyeGlow && scene.shipEyeCore) {
    scene.tweens.killTweensOf([scene.shipEyeGlow, scene.shipEyeCore]);
    scene.shipEyeGlow.setAlpha(0).setScale(1).setVisible(false);
    scene.shipEyeCore.setAlpha(0).setScale(1).setVisible(false);
    updateShipEyeGlow(scene);
  }

  if (scene.shieldBubble) scene.shieldBubble.setVisible(false);
  if (scene.echoCompanion) {
    scene.tweens.killTweensOf(scene.echoCompanion);
    scene.echoCompanion.clearTint();
    updateEchoCompanion(scene, 0);
  }
  hideXyBottomFriction(scene);
}
