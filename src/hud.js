// HUD y helpers de modo de juego visibles durante la partida.
// Aqui viven las actualizaciones de marcadores y nombres que consultan varios sistemas.

function initHud() {
  if (hud) return hud;

  hud = {
    root: document.getElementById('hud'),
    level: document.getElementById('hud-level'),
    score: document.getElementById('hud-score'),
    streak: document.getElementById('hud-streak'),
    registers: document.getElementById('hud-registers'),
    time: document.getElementById('hud-time'),
    progressText: document.getElementById('hud-progress-text'),
    progressFill: document.getElementById('hud-progress-fill'),
    lifeCount: document.getElementById('hud-life-count'),
    lifeBar: document.getElementById('hud-life-bar'),
    upgrades: document.getElementById('hud-upgrades'),
    pauseSettingsButton: document.getElementById('pause-settings-button'),
    booster: document.getElementById('hud-booster'),
    boosterLabel: document.getElementById('hud-booster-label'),
    boosterFill: document.getElementById('hud-booster-fill'),
    missionPopup: document.getElementById('mission-complete-popup'),
    speed: document.getElementById('hud-speed'),
    boostSpeed: document.getElementById('hud-boost-speed'),
  };

  updateUiScale();
  bindUiScaleResize();
  return hud;
}

function bindUiScaleResize() {
  if (uiScaleResizeBound) return;
  uiScaleResizeBound = true;
  window.addEventListener('resize', updateUiScale);
}

function updateUiScale() {
  const container = document.getElementById('game-container');
  if (!container) return;
  const nextScale = container.clientWidth / GAME_WIDTH;
  if (!Number.isFinite(nextScale) || nextScale <= 0) return;
  container.style.setProperty('--ui-scale', nextScale);
}

function revealGameContainer() {
  const container = document.getElementById('game-container');
  if (!container) return;
  updateUiScale();
  container.classList.add('is-ready');
}

function hideGameContainerUntilReady() {
  const container = document.getElementById('game-container');
  if (!container) return;
  container.classList.remove('is-ready');
}

function setHudVisible(scene, visible) {
  const currentHud = initHud();
  if (!currentHud.root) return;
  currentHud.root.classList.toggle('is-visible', visible);
  currentHud.root.classList.toggle('is-boss-only', isBossOnlyGameMode());
  const levelContainer = currentHud.level && currentHud.level.closest('.hud-level');
  const scoreContainer = currentHud.score && currentHud.score.closest('.hud-score');
  const levelLabel = levelContainer && levelContainer.querySelector('.hud-label');
  const scoreLabel = scoreContainer && scoreContainer.querySelector('.hud-label');
  if (levelLabel) levelLabel.textContent = isBossOnlyGameMode() ? 'JEFE' : 'NIVEL';
  if (scoreLabel) scoreLabel.textContent = isBossOnlyGameMode() ? 'TIPO' : 'PUNTOS';
  if (!visible) setPauseSettingsVisible(false);
  updateHud(scene);
}

function setPauseSettingsVisible(visible) {
  const currentHud = initHud();
  if (!currentHud.root) return;
  currentHud.root.classList.toggle('is-pause-settings-visible', Boolean(visible));
  setHudUpgradeChipsReadable(currentHud, visible);
  setMissionCompletePopupReadable(currentHud, visible);
  if (currentHud.pauseSettingsButton) {
    currentHud.pauseSettingsButton.setAttribute('aria-hidden', visible ? 'false' : 'true');
  }
}

function setHudUpgradeChipsReadable(currentHud, readable) {
  if (!currentHud || !currentHud.root) return;
  currentHud.root.classList.toggle('is-paused-upgrades-readable', Boolean(readable));
  if (!currentHud.upgrades) return;
  currentHud.upgrades.querySelectorAll('.hud-upgrade-chip').forEach((chip) => {
    chip.setAttribute('tabindex', readable ? '0' : '-1');
  });
}

function updateHud(scene = gameScene) {
  const currentHud = initHud();
  if (!currentHud.root) return;

  updatePlayerLevelText(scene);
  currentHud.score.textContent = isBossOnlyGameMode() ? getBossOnlyHudName(scene) : score;
  updateStreakText();
  updateRegistersText();
  updateGameplayTimeText();
  updateSpeedTexts(scene);
  updateUpgradeBar(scene);
  updateLivesText(scene);
  updateUpgradeStatusIcons(scene);
}

function getBossOnlyHudName(scene) {
  if (!scene) return createBossConfig(BOSS_ONLY_BOSS_KINDS[0]).name;
  if (!scene.bossOnlyTypeRevealed) return '???';

  const activeWave = scene.activeRedWave ||
    scene.activeDroneWave ||
    scene.activeAsteroidWave ||
    scene.activePlasmaWave ||
    (scene.activeBossWave && !scene.activeBossWave.isTravelEncounter ? scene.activeBossWave : null);
  if (activeWave && activeWave.bossName) return activeWave.bossName;

  const pendingBoss = scene.pendingBossWave ||
    (scene.pendingBossWaves && scene.pendingBossWaves.length ? scene.pendingBossWaves[0] : null);
  if (pendingBoss && pendingBoss.name) return pendingBoss.name;

  const bossNumber = Math.max(0, (scene.bossOnlyBossNumber || 1) - 1);
  return createBossConfig(BOSS_ONLY_BOSS_KINDS[bossNumber % BOSS_ONLY_BOSS_KINDS.length]).name;
}

function updateRegistersText() {
  const currentHud = initHud();
  if (!currentHud.registers) return;
  currentHud.registers.replaceChildren();
  const value = document.createElement('span');
  value.textContent = registers;
  currentHud.registers.append(value, createRegisterHudIcon());
}

function updateGameplayTime(scene, delta) {
  if (state !== 'playing' || !isDraggingShip) return;
  const safeDelta = Number.isFinite(delta) ? Math.max(0, Math.min(delta, 100)) : 0;
  if (safeDelta <= 0) return;
  const previousSecond = Math.floor(gameplayTimeMs / 1000);
  gameplayTimeMs += safeDelta;
  const nextSecond = Math.floor(gameplayTimeMs / 1000);
  if (nextSecond !== previousSecond) updateGameplayTimeText(scene);
}

function updateGameplayTimeText() {
  const currentHud = initHud();
  if (!currentHud.time) return;
  currentHud.time.textContent = formatGameplayTime(gameplayTimeMs);
}

function formatGameplayTime(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
}

function createRegisterHudIcon() {
  const icon = document.createElement('img');
  icon.className = 'register-inline-icon hud-register-icon';
  icon.src = REGISTER_IMAGE_PATH;
  icon.alt = '';
  icon.setAttribute('aria-hidden', 'true');
  return icon;
}

function getRegisterMissions() {
  return getMasteryRegisterMissions()
    .concat(getBossRegisterMissions())
    .concat(getEnemyRegisterMissions(), getUpgradeRegisterMissions(), getLevelRegisterMissions(), getStreakRegisterMissions());
}

function getMasteryRegisterMissions() {
  return [
    { id: 'mastery_lives_lost_5', category: 'mastery', target: 'masteryLivesLost', name: 'Pierde 5 vidas', goal: 5, reward: 1 },
    { id: 'mastery_lives_lost_10', category: 'mastery', target: 'masteryLivesLost', name: 'Pierde 10 vidas', goal: 10, reward: 2 },
    { id: 'mastery_lives_lost_15', category: 'mastery', target: 'masteryLivesLost', name: 'Pierde 15 vidas', goal: 15, reward: 5 },
    { id: 'mastery_orbs_lost_5', category: 'mastery', target: 'masteryOrbsLost', name: 'Pierde 5 orbes', goal: 5, reward: 1 },
    { id: 'mastery_orbs_lost_10', category: 'mastery', target: 'masteryOrbsLost', name: 'Pierde 10 orbes', goal: 10, reward: 2 },
    { id: 'mastery_orbs_lost_15', category: 'mastery', target: 'masteryOrbsLost', name: 'Pierde 15 orbes', goal: 15, reward: 5 },
    { id: 'mastery_registers_active_5', category: 'mastery', target: 'masteryActiveRegisters', name: 'Acumula 5 registros', goal: 5, reward: 1 },
    { id: 'mastery_registers_active_10', category: 'mastery', target: 'masteryActiveRegisters', name: 'Acumula 10 registros', goal: 10, reward: 2 },
    { id: 'mastery_registers_active_15', category: 'mastery', target: 'masteryActiveRegisters', name: 'Acumula 15 registros', goal: 15, reward: 5 },
    { id: 'mastery_still_4', category: 'mastery', target: 'masteryStillSeconds', name: 'No te muevas durante 4 segundos seguidos', goal: 4, reward: 1 },
    { id: 'mastery_still_7', category: 'mastery', target: 'masteryStillSeconds', name: 'No te muevas durante 7 segundos seguidos', goal: 7, reward: 2 },
    { id: 'mastery_still_10', category: 'mastery', target: 'masteryStillSeconds', name: 'No te muevas durante 10 segundos seguidos', goal: 10, reward: 5 },
  ];
}

function getBossRegisterMissions() {
  return STORY_BOSS_KINDS.map((kind) => {
    const bossConfig = createBossConfig(kind);
    return {
      id: kind,
      category: 'bosses',
      bossKind: kind,
      name: 'Sobrevive a ' + bossConfig.name,
      reward: 2,
    };
  });
}

function setMissionCompletePopupReadable(currentHud, readable) {
  if (!currentHud || !currentHud.root) return;
  currentHud.root.classList.toggle('is-mission-popup-readable', Boolean(readable));
  if (!currentHud.missionPopup) return;
  syncMissionCompletePopupStack(currentHud.missionPopup, readable);
}

function getEnemyRegisterMissions() {
  return [
    { id: 'enemy_contaminated_orbs_10', category: 'enemies', target: 'contaminatedOrb', name: 'Derrota a 10 Orbes Contaminados', goal: 10, reward: 1 },
    { id: 'enemy_obreras_10', category: 'enemies', target: 'obrera', name: 'Derrota a 10 Obreras', goal: 10, reward: 1 },
    { id: 'enemy_escisoras_10', category: 'enemies', target: 'scissor', name: 'Derrota a 10 Escisoras', goal: 10, reward: 1 },
    { id: 'enemy_drones_10', category: 'enemies', target: 'spikeDrone', name: 'Derrota a 10 Drones', goal: 10, reward: 1 },
    { id: 'enemy_girodrones_10', category: 'enemies', target: 'giroDrone', name: 'Derrota a 10 Girodrones', goal: 10, reward: 1 },
    { id: 'enemy_red_needles_10', category: 'enemies', target: 'redNeedle', name: 'Derrota a 10 Agujas Rojas', goal: 10, reward: 1 },
    { id: 'enemy_asteroids_10', category: 'enemies', target: 'asteroid', name: 'Derrota a 10 Asteroides', goal: 10, reward: 1 },
    { id: 'enemy_replicators_10', category: 'enemies', target: 'replicator', name: 'Derrota a 10 Replicadores', goal: 10, reward: 1 },
    { id: 'enemy_plasma_gaps_10', category: 'enemies', target: 'plasmaGap', name: 'Atraviesa 10 Barras de Plasma', goal: 10, reward: 1 },
    { id: 'enemy_travel_sentinels_10', category: 'enemies', target: 'travelSentinel', name: 'Sobrevive a 10 Centinelas', goal: 10, reward: 1 },
    { id: 'enemy_crystallized_orbs_10', category: 'enemies', target: 'crystallizedOrb', name: 'Recoge 10 Orbes Cristalizados', goal: 10, reward: 1 },
    { id: 'enemy_troyanos_10', category: 'enemies', target: 'troyano', name: 'Derrota a 10 Troyanos', goal: 10, reward: 1 },
  ];
}

function getUpgradeRegisterMissions() {
  return [
    { id: 'upgrade_unlock_energy_refiner', category: 'upgrades', target: 'upgradeUnlock:energyRefiner', name: 'Desbloquea Refinador de energía', reward: 1 },
    { id: 'upgrade_unlock_energy_purifier', category: 'upgrades', target: 'upgradeUnlock:energyPurifier', name: 'Desbloquea Purificador de energía', reward: 1 },
    { id: 'upgrade_unlock_score_booster', category: 'upgrades', target: 'upgradeUnlock:scoreBooster', name: 'Desbloquea Catalizador de energía', reward: 1 },
    { id: 'upgrade_unlock_energy_resonance', category: 'upgrades', target: 'upgradeUnlock:energyResonance', name: 'Desbloquea Resonancia energética', reward: 1 },
    { id: 'upgrade_unlock_shield_booster', category: 'upgrades', target: 'upgradeUnlock:shieldBooster', name: 'Desbloquea Barrera protectora', reward: 1 },
    { id: 'upgrade_unlock_echo_help', category: 'upgrades', target: 'upgradeUnlock:echoHelp', name: 'Desbloquea Ayuda de Echo', reward: 1 },
    { id: 'upgrade_unlock_life_booster', category: 'upgrades', target: 'upgradeUnlock:lifeBooster', name: 'Desbloquea Kit de reparación', reward: 1 },
    { id: 'upgrade_unlock_vital_expander', category: 'upgrades', target: 'upgradeUnlock:vitalExpander', name: 'Desbloquea Expansor vital', reward: 1 },
    { id: 'upgrade_max_energy_refiner', category: 'upgrades', target: 'upgradeMax:energyRefiner', name: 'Maximiza Refinador de energía', reward: 2 },
    { id: 'upgrade_max_score_booster', category: 'upgrades', target: 'upgradeMax:scoreBooster', name: 'Maximiza Catalizador de energía', reward: 2 },
    { id: 'upgrade_max_shield_booster', category: 'upgrades', target: 'upgradeMax:shieldBooster', name: 'Maximiza Barrera protectora', reward: 2 },
    { id: 'upgrade_max_life_booster', category: 'upgrades', target: 'upgradeMax:lifeBooster', name: 'Maximiza Kit de reparación', reward: 2 },
  ];
}

function getLevelRegisterMissions() {
  return [
    { id: 'level_5', category: 'levels', level: 5, name: 'Alcanza el nivel 5', reward: 1 },
    { id: 'level_10', category: 'levels', level: 10, name: 'Alcanza el nivel 10', reward: 1 },
    { id: 'level_15', category: 'levels', level: 15, name: 'Alcanza el nivel 15', reward: 1 },
    { id: 'level_20', category: 'levels', level: 20, name: 'Alcanza el nivel 20', reward: 1 },
    { id: 'level_25', category: 'levels', level: 25, name: 'Alcanza el nivel 25', reward: 1 },
    { id: 'level_30', category: 'levels', level: 30, name: 'Alcanza el nivel 30', reward: 1 },
    { id: 'level_35', category: 'levels', level: 35, name: 'Alcanza el nivel 35', reward: 1 },
    { id: 'level_40', category: 'levels', level: 40, name: 'Alcanza el nivel 40', reward: 1 },
    { id: 'level_45', category: 'levels', level: 45, name: 'Alcanza el nivel 45', reward: 1 },
    { id: 'level_50', category: 'levels', level: 50, name: 'Alcanza el nivel 50', reward: 1 },
  ];
}

function getStreakRegisterMissions() {
  return [
    { id: 'streak_50', category: 'streaks', streak: 50, name: 'Racha de 50', reward: 1 },
    { id: 'streak_100', category: 'streaks', streak: 100, name: 'Racha de 100', reward: 1 },
    { id: 'streak_150', category: 'streaks', streak: 150, name: 'Racha de 150', reward: 1 },
    { id: 'streak_200', category: 'streaks', streak: 200, name: 'Racha de 200', reward: 1 },
    { id: 'streak_250', category: 'streaks', streak: 250, name: 'Racha de 250', reward: 1 },
    { id: 'streak_300', category: 'streaks', streak: 300, name: 'Racha de 300', reward: 1 },
    { id: 'streak_350', category: 'streaks', streak: 350, name: 'Racha de 350', reward: 1 },
    { id: 'streak_400', category: 'streaks', streak: 400, name: 'Racha de 400', reward: 1 },
    { id: 'streak_450', category: 'streaks', streak: 450, name: 'Racha de 450', reward: 1 },
    { id: 'streak_500', category: 'streaks', streak: 500, name: 'Racha de 500', reward: 1 },
  ];
}

function getRegisterMissionByBossKind(bossKind) {
  return getRegisterMissions().find((mission) => mission.bossKind === bossKind) || null;
}

function getRegisterMissionByTarget(target) {
  return getRegisterMissions().find((mission) => mission.target === target) || null;
}

function getRegisterMissionsByTarget(target) {
  return getRegisterMissions().filter((mission) => mission.target === target);
}

function advanceRegisterMissionProgress(scene, target, amount = 1) {
  if (!scene || !target || amount <= 0) return;
  const missions = getRegisterMissionsByTarget(target);
  if (!missions.length) return;
  if (!scene.completedRegisterMissions) scene.completedRegisterMissions = {};
  if (!scene.registerMissionProgress) scene.registerMissionProgress = {};

  missions.forEach((mission) => {
    if (scene.completedRegisterMissions[mission.id]) return;
    const currentProgress = scene.registerMissionProgress[mission.id] || 0;
    const nextProgress = Math.min(mission.goal || 1, currentProgress + amount);
    scene.registerMissionProgress[mission.id] = nextProgress;
    if (nextProgress < (mission.goal || 1)) return;

    scene.completedRegisterMissions[mission.id] = true;
    spawnRegisterReward(scene, mission);
  });
}

function setRegisterMissionProgress(scene, target, progress = 0, preserveHighest = true) {
  if (!scene || !target) return;
  const missions = getRegisterMissionsByTarget(target);
  if (!missions.length) return;
  if (!scene.completedRegisterMissions) scene.completedRegisterMissions = {};
  if (!scene.registerMissionProgress) scene.registerMissionProgress = {};

  missions.forEach((mission) => {
    if (scene.completedRegisterMissions[mission.id]) return;
    const currentProgress = scene.registerMissionProgress[mission.id] || 0;
    const rawProgress = preserveHighest ? Math.max(currentProgress, progress || 0) : progress || 0;
    const nextProgress = Math.min(mission.goal || 1, Math.max(0, rawProgress));
    scene.registerMissionProgress[mission.id] = nextProgress;
    if (nextProgress < (mission.goal || 1)) return;

    scene.completedRegisterMissions[mission.id] = true;
    spawnRegisterReward(scene, mission);
  });
}

function completeRegisterMissionByTarget(scene, target) {
  if (!scene || !target) return;
  const missions = getRegisterMissionsByTarget(target);
  if (!missions.length) return;
  if (!scene.completedRegisterMissions) scene.completedRegisterMissions = {};

  missions.forEach((mission) => {
    if (scene.completedRegisterMissions[mission.id]) return;
    scene.completedRegisterMissions[mission.id] = true;
    spawnRegisterReward(scene, mission);
  });
}

function completeRegisterMission(scene, mission) {
  if (!scene || !mission) return;
  if (!scene.completedRegisterMissions) scene.completedRegisterMissions = {};
  if (scene.completedRegisterMissions[mission.id]) return;

  scene.completedRegisterMissions[mission.id] = true;
  spawnRegisterReward(scene, mission);
}

function showMissionCompletePopup(scene, mission) {
  const currentHud = initHud();
  if (!currentHud.missionPopup || !mission) return;
  renderMissionCompletePopup(currentHud.missionPopup, mission, scene);
}

function resetMissionCompletePopups(scene) {
  const currentHud = initHud();
  if (scene) {
    scene.missionCompletePopupStack = [];
  }
  if (!currentHud.missionPopup) return;
  currentHud.missionPopup.replaceChildren();
  currentHud.missionPopup.classList.remove('is-visible');
  currentHud.missionPopup.setAttribute('aria-hidden', 'true');
}

function dismissMissionCompletePopup(scene) {
  const currentHud = initHud();
  if (!scene || !currentHud.missionPopup || state !== 'paused') return;
  const stack = scene.missionCompletePopupStack || [];
  const card = stack[stack.length - 1];
  if (!card || card.classList.contains('is-dismissing')) return;

  stack.pop();
  card.classList.add('is-dismissing');
  card.classList.remove('is-visible');
  syncMissionCompletePopupStack(currentHud.missionPopup, state === 'paused', true);

  scene.time.addEvent({
    delay: 180,
    callback: () => {
      card.remove();
      if (!stack.length) {
        currentHud.missionPopup.classList.remove('is-visible');
        currentHud.missionPopup.setAttribute('aria-hidden', 'true');
      }
      syncMissionCompletePopupStack(currentHud.missionPopup, state === 'paused');
    },
  });
}

function renderMissionCompletePopup(element, mission, scene) {
  if (!scene.missionCompletePopupStack) scene.missionCompletePopupStack = [];
  const card = document.createElement('div');
  card.className = 'mission-complete-card';

  const name = document.createElement('span');
  name.className = 'mission-complete-name';
  name.textContent = mission.name || 'Mision completada';

  const status = document.createElement('span');
  status.className = 'mission-complete-status';
  status.textContent = 'COMPLETADO';

  const reward = document.createElement('span');
  reward.className = 'mission-complete-reward';
  reward.append(document.createTextNode('+' + Math.max(1, mission.reward || 1) + ' '));
  reward.append(createRegisterHudIcon());

  const readButton = document.createElement('button');
  readButton.className = 'mission-complete-read-button';
  readButton.type = 'button';
  readButton.textContent = 'LEÍDO';
  readButton.disabled = state !== 'paused';
  let readButtonHandled = false;
  const guardReadButtonEvent = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const handleReadButtonActivate = (event) => {
    guardReadButtonEvent(event);
    if (readButton.disabled || readButtonHandled) return;
    readButtonHandled = true;
    dismissMissionCompletePopup(scene);
  };

  ['pointerdown', 'touchstart'].forEach((eventName) => {
    readButton.addEventListener(eventName, guardReadButtonEvent, { passive: false });
  });
  readButton.addEventListener('pointerup', handleReadButtonActivate, { passive: false });
  readButton.addEventListener('touchend', (event) => {
    if (window.PointerEvent) {
      guardReadButtonEvent(event);
      return;
    }
    handleReadButtonActivate(event);
  }, { passive: false });
  readButton.addEventListener('click', (event) => {
    if (window.PointerEvent && event.detail !== 0) {
      guardReadButtonEvent(event);
      return;
    }
    handleReadButtonActivate(event);
  });

  card.append(name, status, reward, readButton);
  element.append(card);
  scene.missionCompletePopupStack.push(card);
  element.setAttribute('aria-hidden', 'false');
  element.classList.add('is-visible');
  syncMissionCompletePopupStack(element, state === 'paused', true);
  void card.offsetWidth;
  card.classList.add('is-visible');
  scene.time.addEvent({
    delay: 180,
    callback: () => syncMissionCompletePopupStack(element, state === 'paused'),
  });
}

function syncMissionCompletePopupStack(element, readable, revealUnderneath = false) {
  const cards = Array.from(element.querySelectorAll('.mission-complete-card'));
  cards.forEach((card, index) => {
    const isTop = index === cards.length - 1 && !card.classList.contains('is-dismissing');
    card.style.zIndex = String(index + 1);
    card.classList.toggle('is-underneath', !isTop);
    card.classList.toggle('is-revealed-underneath', revealUnderneath && !isTop);
    const button = card.querySelector('.mission-complete-read-button');
    if (button) button.disabled = !readable || !isTop;
  });
}

function recordUpgradeRegisterMissions(scene, upgradeKind, previousLevel, nextLevel) {
  if (!scene || !upgradeKind) return;
  if (previousLevel <= 0 && nextLevel > 0) {
    completeRegisterMissionByTarget(scene, 'upgradeUnlock:' + upgradeKind);
  }
  if (previousLevel < MAX_UPGRADE_LEVEL && nextLevel >= MAX_UPGRADE_LEVEL) {
    completeRegisterMissionByTarget(scene, 'upgradeMax:' + upgradeKind);
  }
}

function recordLevelRegisterMissions(scene, reachedLevel) {
  getLevelRegisterMissions().forEach((mission) => {
    if (reachedLevel >= mission.level) completeRegisterMission(scene, mission);
  });
}

function recordStreakRegisterMissions(scene, reachedStreak) {
  getStreakRegisterMissions().forEach((mission) => {
    if (reachedStreak >= mission.streak) completeRegisterMission(scene, mission);
  });
}

function setHudBoosterVisible(visible, color = '#76ffe8', label = null) {
  const currentHud = initHud();
  if (!currentHud.booster || !currentHud.boosterFill) return;
  currentHud.booster.classList.toggle('is-active', visible);
  currentHud.boosterFill.style.background = 'linear-gradient(90deg, ' + color + ', #ecf7ff)';
  currentHud.boosterFill.style.boxShadow = '0 0 14px ' + color;
  if (currentHud.boosterLabel && label) currentHud.boosterLabel.textContent = label;
}

function getLevelRequirement(level) {
  const progressionLevel = Math.max(0, level - 1);
  if (progressionLevel <= 0) return 10;
  return 10 + progressionLevel * 8 + Math.floor(progressionLevel * progressionLevel * 1.15);
}

function getBossConfigForLevel(level, scene = gameScene) {
  const bossIndex = getBossIndexForLevel(level);
  if (bossIndex === -1) return null;

  const bossKind = isInfiniteGameMode()
    ? getNextInfiniteBossKind(scene)
    : STORY_BOSS_KINDS[bossIndex % STORY_BOSS_KINDS.length];
  if (!bossKind) return null;
  return createBossConfig(bossKind);
}

function getNextInfiniteBossKind(scene) {
  if (!scene) return getShuffledBossKinds()[0];
  if (!scene.hasUsedInfiniteFirstTroyanoBoss) {
    scene.hasUsedInfiniteFirstTroyanoBoss = true;
    return 'troyanos';
  }
  if (!scene.infiniteBossBag || !scene.infiniteBossBag.length) {
    scene.infiniteBossBag = getShuffledBossKinds();
  }
  return scene.infiniteBossBag.shift();
}

function getShuffledBossKinds() {
  const bossKinds = STORY_BOSS_KINDS.slice();
  for (let index = bossKinds.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    const currentBossKind = bossKinds[index];
    bossKinds[index] = bossKinds[swapIndex];
    bossKinds[swapIndex] = currentBossKind;
  }
  return bossKinds;
}

function createBossConfig(kind) {
  if (kind === 'troyanos') {
    return {
      kind: 'troyanos',
      name: 'Troyanos',
      registers: TROYANO_BOSS_REGISTER_COUNT,
    };
  }
  if (kind === 'red') {
    return {
      kind: 'red',
      name: 'Enjambre de Obreras',
      duration: RED_WAVE_DURATION,
    };
  }
  if (kind === 'scissors') {
    return {
      kind: 'scissors',
      name: 'Enjambre de Escisoras',
      duration: SCISSOR_SWARM_DURATION,
    };
  }
  if (kind === 'asteroid') {
    return {
      kind: 'asteroid',
      name: 'Cinturón',
      duration: ASTEROID_WAVE_DURATION,
    };
  }
  if (kind === 'drones') {
    return {
      kind: 'drones',
      name: 'Drones',
      duration: DRONE_WAVE_DURATION,
    };
  }
  if (kind === 'girodrones') {
    return {
      kind: 'girodrones',
      name: 'Girodrones',
      duration: GIRODRONE_WAVE_DURATION,
    };
  }
  if (kind === 'replicators') {
    return {
      kind: 'replicators',
      name: 'Replicadores',
      duration: REPLICATOR_WAVE_DURATION,
    };
  }
  if (kind === 'crystallized') {
    return {
      kind: 'crystallized',
      name: 'Tormenta Cristalizada',
      duration: CRYSTALLIZED_WAVE_DURATION,
    };
  }
  if (kind === 'boss') {
    return {
      kind: 'boss',
      name: 'Centinela',
      duration: BOSS_WAVE_DURATION,
      attacks: BOSS_WAVE_ATTACKS,
    };
  }
  if (kind === 'redNeedleBoss') {
    return {
      kind: 'redNeedleBoss',
      name: 'Aguja Roja',
      duration: BOSS_WAVE_DURATION,
      attacks: RED_NEEDLE_BOSS_ATTACKS,
    };
  }
  return {
    kind: 'plasma',
    name: 'Marea de Plasma',
    duration: PLASMA_WAVE_DURATION,
  };
}

function getBossIndexForLevel(level) {
  if (level < 3 || level % 3 !== 0) return -1;
  return Math.floor(level / 3) - 1;
}

function getValidGameMode(mode) {
  return ['xy', 'xyInfinite', 'xyBossOnly'].includes(mode) ? mode : 'xy';
}

function isInfiniteGameMode() {
  return currentGameMode === 'xyInfinite';
}

function isBossOnlyGameMode() {
  return currentGameMode === 'xyBossOnly';
}

function isXyGameMode() {
  return currentGameMode === 'xy' || currentGameMode === 'xyInfinite' || currentGameMode === 'xyBossOnly';
}

function isXyInfiniteGameMode() {
  return currentGameMode === 'xyInfinite';
}

updateUiScale();
bindUiScaleResize();
hideGameContainerUntilReady();
