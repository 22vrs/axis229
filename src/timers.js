// Vida, pausas, temporizadores y recuperacion de eventos programados.
// Phaser pausa escenas y timers por separado; estas funciones mantienen ambos mundos sincronizados.

function updateLivesText(scene, options = {}) {
  const currentHud = initHud();
  if (!currentHud.lifeBar || !currentHud.lifeCount) return;

  currentHud.lifeBar.innerHTML = '';
  currentHud.lifeBar.style.setProperty('--life-slots', maxLives);
  currentHud.lifeCount.textContent = lives + '/' + maxLives;
  const activeColor = isShieldActive(scene) ? '#4da3ff' : '#ffd84d';
  for (let i = 0; i < maxLives; i += 1) {
    const isFull = i < lives;
    const isLost = options.lostLifeIndex === i;
    const cell = document.createElement('span');
    cell.className = 'hud-life-cell'
      + (isFull ? ' is-full' : '')
      + (isFull && isShieldActive(scene) ? ' is-shielded' : '')
      + (isLost ? ' is-lost' : '');
    cell.style.setProperty('--life-color', activeColor);
    currentHud.lifeBar.appendChild(cell);
  }
}

function loseLife(scene) {
  const previousLives = lives;
  lives = Math.max(0, lives - 1);
  updateLivesText(scene, { lostLifeIndex: lives });
  if (lives < previousLives) {
    showShipLifeChange(scene, previousLives, lives, 'damage');
  }

  if (lives === 0) {
    startFinalDamageGameOver(scene);
  }
}

function startFinalDamageGameOver(scene) {
  if (!scene || scene.finalDamageGameOverEvent) return;
  state = 'dying';
  isDraggingShip = false;
  if (scene.input) scene.input.setDefaultCursor('default');
  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }
  pauseFallingObjects(scene);
  scene.finalDamageGameOverEvent = scene.time.delayedCall(FINAL_DAMAGE_GAME_OVER_DELAY, () => {
    scene.finalDamageGameOverEvent = null;
    endGame.call(scene);
  });
}

function takeDirectDamage(scene) {
  if (isShipDamageInvulnerable(scene)) return false;
  playBadSound(scene);
  flashPlayerShip(scene, true);
  loseLife(scene);
  return true;
}

function isShipDamageInvulnerable(scene) {
  return Boolean(scene && scene.shipDamageTween);
}

function clearShipDamageFeedback(scene, stopDamageTween = true) {
  if (!scene || !scene.ship) return;

  if (scene.shipDamageClearEvent) {
    scene.shipDamageClearEvent.remove(false);
    scene.shipDamageClearEvent = null;
  }
  if (stopDamageTween && scene.shipDamageTween) {
    scene.shipDamageTween.stop();
  }
  scene.shipDamageTween = null;
  scene.ship.clearTint();
  scene.ship.setAlpha(1);
}

function flashPlayerShip(scene, damaged = false) {
  if (!scene.ship) return;

  if (scene.shipAbsorbTween) {
    scene.shipAbsorbTween.stop();
    scene.shipAbsorbTween = null;
    scene.ship.setAlpha(1);
  }
  if (scene.shipDamageTween) {
    clearShipDamageFeedback(scene);
  }
  scene.tweens.add({
    targets: scene.ship,
    alpha: 0.35,
    duration: 70,
    yoyo: true,
    repeat: 2,
    ease: 'Sine.easeInOut',
    onComplete: () => scene.ship.setAlpha(1),
  });
  if (!damaged) return;

  const damageFeedbackDuration = 85 * (4 + 1) * 2;
  scene.ship.setTint(0xff2b3f);
  scene.shipDamageTween = scene.tweens.add({
    targets: scene.ship,
    duration: 85,
    repeat: 4,
    yoyo: true,
    alpha: 0.62,
    ease: 'Sine.easeInOut',
    onRepeat: () => scene.ship.setTint(scene.ship.isTinted ? 0xffffff : 0xff2b3f),
    onYoyo: () => scene.ship.setTint(0xff2b3f),
    onComplete: () => clearShipDamageFeedback(scene, false),
  });
  scene.shipDamageClearEvent = scene.time.delayedCall(damageFeedbackDuration + 40, () => {
    clearShipDamageFeedback(scene);
  });
}

function gainLife(scene) {
  const previousLives = lives;
  lives = Math.min(maxLives, lives + getLifeBoosterHealAmount());
  updateLivesText(scene);
  if (lives > previousLives) {
    showShipLifeChange(scene, previousLives, lives, 'heal');
  }
}

function expandVitalCapacity(scene) {
  const previousLives = lives;
  maxLives += VITAL_EXPANDER_LIFE_BONUS;
  lives = Math.min(maxLives, lives + VITAL_EXPANDER_LIFE_BONUS);
  updateLivesText(scene);
  if (lives > previousLives) {
    showShipLifeChange(scene, previousLives, lives, 'heal');
  }
}

function showShipLifeChange(scene, previousLives, nextLives, changeKind) {
  if (!scene || !scene.ship || !scene.add) return;

  destroyShipLifeIndicator(scene);

  const cellCount = maxLives;
  const totalWidth = cellCount * SHIP_LIFE_INDICATOR_CELL_WIDTH + (cellCount - 1) * SHIP_LIFE_INDICATOR_CELL_GAP;
  const container = trackGameplayVisual(scene, scene.add.container(0, 0));
  container.setDepth(FX_DEPTH + 4);
  container.setAlpha(0);
  container.lifeCells = [];
  container.isLowLifeWarning = changeKind === 'damage' && nextLives === 1;
  scene.shipLifeIndicator = container;

  for (let i = 0; i < cellCount; i += 1) {
    const cellGeometry = getShipLifeIndicatorCellGeometry(i, totalWidth);
    const cell = createShipLifeIndicatorCell(scene, i, previousLives, nextLives, changeKind, cellGeometry);
    cell.setPosition(cellGeometry.centerX, cellGeometry.centerY);
    container.add(cell);
    container.lifeCells.push(cell);
  }

  updateShipLifeIndicator(scene);

  scene.tweens.add({
    targets: container,
    alpha: 1,
    y: container.y - 5,
    duration: 160,
    ease: 'Sine.easeOut',
  });

  animateShipLifeIndicatorChange(scene, container, previousLives, nextLives, changeKind);

  if (!container.isLowLifeWarning) {
    container.hideEvent = scene.time.delayedCall(SHIP_LIFE_INDICATOR_VISIBLE_DURATION, () => {
      if (scene.shipLifeIndicator !== container || !container.active) return;
      scene.tweens.add({
        targets: container,
        alpha: 0,
        y: container.y - 8,
        duration: SHIP_LIFE_INDICATOR_FADE_DURATION,
        ease: 'Sine.easeIn',
        onComplete: () => destroyShipLifeIndicator(scene, container),
      });
    });
  }
}

function createShipLifeIndicatorCell(scene, index, previousLives, nextLives, changeKind, geometry) {
  const cell = scene.add.container(0, 0);
  const isFilledAfter = index < nextLives;
  const isFilledBefore = index < previousLives;
  const isChanged = changeKind === 'damage'
    ? index >= nextLives && index < previousLives
    : index >= previousLives && index < nextLives;
  const fillColor = isChanged
    ? (changeKind === 'heal' ? LIFE_INDICATOR_HEAL_COLOR : 0xff4f68)
    : (isFilledAfter ? LIFE_INDICATOR_FILL_COLOR : 0x10243a);
  const borderColor = isChanged
    ? (changeKind === 'heal' ? LIFE_INDICATOR_HEAL_BORDER_COLOR : 0xff9aaa)
    : (isFilledAfter ? LIFE_INDICATOR_BORDER_COLOR : 0x33506f);

  const frame = scene.add.graphics();
  frame.fillStyle(0x071121, 0.86);
  frame.fillPoints(geometry.framePoints, true);
  frame.lineStyle(1, borderColor, isFilledAfter || isFilledBefore ? 0.88 : 0.44);
  frame.strokePoints(geometry.framePoints, true);
  cell.add(frame);

  const fill = scene.add.graphics();
  fill.fillStyle(fillColor, isFilledAfter || isFilledBefore ? 0.9 : 0.18);
  fill.fillPoints(geometry.fillPoints, true);
  cell.add(fill);

  cell.fill = fill;
  cell.frame = frame;
  cell.geometry = geometry;
  cell.isChanged = isChanged;
  cell.changeKind = changeKind;
  return cell;
}

function setShipLifeIndicatorCellEmpty(cell) {
  if (!cell || !cell.frame || !cell.fill || !cell.geometry) return;
  cell.setAlpha(1);
  cell.setScale(1);
  cell.frame.clear();
  cell.frame.fillStyle(0x071121, 0.86);
  cell.frame.fillPoints(cell.geometry.framePoints, true);
  cell.frame.lineStyle(1, 0x33506f, 0.44);
  cell.frame.strokePoints(cell.geometry.framePoints, true);
  cell.fill.clear();
  cell.fill.fillStyle(0x10243a, 0.18);
  cell.fill.fillPoints(cell.geometry.fillPoints, true);
}

function setShipLifeIndicatorCellFilled(cell) {
  if (!cell || !cell.frame || !cell.fill || !cell.geometry) return;
  cell.setAlpha(1);
  cell.setScale(1);
  cell.frame.clear();
  cell.frame.fillStyle(0x071121, 0.86);
  cell.frame.fillPoints(cell.geometry.framePoints, true);
  cell.frame.lineStyle(1, LIFE_INDICATOR_BORDER_COLOR, 0.88);
  cell.frame.strokePoints(cell.geometry.framePoints, true);
  cell.fill.clear();
  cell.fill.fillStyle(LIFE_INDICATOR_FILL_COLOR, 0.9);
  cell.fill.fillPoints(cell.geometry.fillPoints, true);
}

function getShipLifeIndicatorCellGeometry(index, totalWidth) {
  const leftX = -totalWidth / 2 + index * (SHIP_LIFE_INDICATOR_CELL_WIDTH + SHIP_LIFE_INDICATOR_CELL_GAP);
  const rightX = leftX + SHIP_LIFE_INDICATOR_CELL_WIDTH;
  return createShipLifeIndicatorSegmentGeometry(leftX, rightX, totalWidth, 0);
}

function createShipLifeIndicatorSegmentGeometry(leftX, rightX, totalWidth, inset) {
  const frame = createShipLifeIndicatorSegmentPoints(leftX, rightX, totalWidth, inset);
  const fill = createShipLifeIndicatorSegmentPoints(leftX, rightX, totalWidth, inset + 1.8);
  return {
    centerX: frame.centerX,
    centerY: frame.centerY,
    framePoints: frame.points,
    fillPoints: fill.points.map((point) => ({
      x: point.x + fill.centerX - frame.centerX,
      y: point.y + fill.centerY - frame.centerY,
    })),
  };
}

function createShipLifeIndicatorSegmentPoints(leftX, rightX, totalWidth, inset) {
  const halfWidth = totalWidth / 2;
  const safeHalfWidth = Math.max(1, halfWidth);
  const innerLeftX = leftX + inset;
  const innerRightX = rightX - inset;
  const thickness = Math.max(2, SHIP_LIFE_INDICATOR_CELL_HEIGHT - inset * 2);
  const leftCenter = getShipLifeIndicatorCurvePoint(innerLeftX, safeHalfWidth);
  const rightCenter = getShipLifeIndicatorCurvePoint(innerRightX, safeHalfWidth);
  const leftNormal = getShipLifeIndicatorCurveNormal(innerLeftX, safeHalfWidth);
  const rightNormal = getShipLifeIndicatorCurveNormal(innerRightX, safeHalfWidth);
  const halfThickness = thickness / 2;
  const centerX = (innerLeftX + innerRightX) / 2;
  const centerY = (leftCenter.y + rightCenter.y) / 2;

  return {
    centerX,
    centerY,
    points: [
      { x: leftCenter.x - leftNormal.x * halfThickness - centerX, y: leftCenter.y - leftNormal.y * halfThickness - centerY },
      { x: rightCenter.x - rightNormal.x * halfThickness - centerX, y: rightCenter.y - rightNormal.y * halfThickness - centerY },
      { x: rightCenter.x + rightNormal.x * halfThickness - centerX, y: rightCenter.y + rightNormal.y * halfThickness - centerY },
      { x: leftCenter.x + leftNormal.x * halfThickness - centerX, y: leftCenter.y + leftNormal.y * halfThickness - centerY },
    ],
  };
}

function getShipLifeIndicatorCurvePoint(x, halfWidth) {
  const progress = Phaser.Math.Clamp(x / halfWidth, -1, 1);
  return {
    x,
    y: progress * progress * SHIP_LIFE_INDICATOR_CURVE_DEPTH,
  };
}

function getShipLifeIndicatorCurveNormal(x, halfWidth) {
  const slope = (2 * SHIP_LIFE_INDICATOR_CURVE_DEPTH * x) / (halfWidth * halfWidth);
  const length = Math.sqrt(slope * slope + 1);
  return {
    x: -slope / length,
    y: 1 / length,
  };
}

function animateShipLifeIndicatorChange(scene, container, previousLives, nextLives, changeKind) {
  if (!container || !container.lifeCells) return;

  container.lifeCells.forEach((cell, index) => {
    if (!cell.isChanged) return;

    if (changeKind === 'damage') {
      scene.tweens.add({
        targets: cell,
        alpha: 0.18,
        scaleX: 1.18,
        scaleY: 1.18,
        duration: 110,
        yoyo: true,
        repeat: 3,
        ease: 'Sine.easeInOut',
        onComplete: () => {
          if (!cell.active) return;
          setShipLifeIndicatorCellEmpty(cell);
        },
      });
      return;
    }

    cell.setAlpha(0.18);
    cell.setScale(0.55);
    scene.tweens.add({
      targets: cell,
      alpha: 1,
      scaleX: 1.22,
      scaleY: 1.22,
      delay: (index - previousLives) * 80,
      duration: 180,
      yoyo: true,
      ease: 'Back.easeOut',
      onComplete: () => {
        if (!cell.active) return;
        setShipLifeIndicatorCellFilled(cell);
      },
    });
  });
}

function updateShipLifeIndicator(scene) {
  if (!scene || !scene.shipLifeIndicator || !scene.ship || !scene.shipLifeIndicator.active) return;
  const position = getShipLifeIndicatorPosition(scene);
  scene.shipLifeIndicator.setPosition(position.x, position.y);
}

function getShipLifeIndicatorPosition(scene) {
  const offset = isShieldActive(scene) ? SHIELD_BUBBLE_RADIUS + 18 : SHIP_LIFE_INDICATOR_Y_OFFSET;
  return {
    x: scene.ship.x,
    y: Math.max(HUD_TOP + HUD_HEIGHT + 26, scene.ship.y - offset),
  };
}

function destroyShipLifeIndicator(scene, indicator = null) {
  if (!scene) return;
  const currentIndicator = indicator || scene.shipLifeIndicator;
  if (!currentIndicator) return;
  if (currentIndicator.hideEvent) {
    currentIndicator.hideEvent.remove(false);
    currentIndicator.hideEvent = null;
  }
  if (scene.tweens) {
    scene.tweens.killTweensOf(currentIndicator);
    if (currentIndicator.lifeCells) {
      currentIndicator.lifeCells.forEach((cell) => scene.tweens.killTweensOf(cell));
    }
  }
  if (scene.shipLifeIndicator === currentIndicator) scene.shipLifeIndicator = null;
  if (currentIndicator.destroy) currentIndicator.destroy();
}

function scheduleNextSpawn(scene, delayOverride = null) {
  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  if (isBossOnlyGameMode() && !hasPendingBossWave(scene) && !hasActiveLevelBossEncounter(scene)) {
    queueNextBossOnlyWave(scene);
  }

  if (consumePendingBossWave(scene)) {
    return;
  }

  if (
    isBossOnlyGameMode() &&
    !scene.activeRedWave &&
    !scene.activeDroneWave &&
    !scene.activeAsteroidWave
  ) return;

  if (scene.activeRedWave && !scene.activeRedWave.isSpawningDamageBoosters) {
    return;
  }

  if (scene.activeDroneWave && !scene.activeDroneWave.isSpawningDrones) {
    return;
  }

  if (scene.activeAsteroidWave && !scene.activeAsteroidWave.isSpawningAsteroids) {
    return;
  }

  if (scene.activePlasmaWave) {
    return;
  }

  if (isBlockingBossWave(scene)) {
    return;
  }

  spawnEvent = scene.time.addEvent({
    delay: delayOverride !== null ? delayOverride : getCurrentSpawnDelay(scene),
    callback: () => {
      if (state !== 'playing') return;
      spawnBall(scene);
      scheduleNextSpawn(scene);
    },
  });
}

function recoverGameplaySpawning(scene) {
  if (state !== 'playing') return;

  if (consumePendingBossWave(scene)) return;
  if (spawnEvent || scene.waveStartEvent || scene.waveResumeEvent || scene.bossCueTween) return;
  if (scene.activePlasmaWave) {
    if (scene.activePlasmaWave.isSpawningPlasma && !scene.plasmaSpawnEvent) {
      schedulePlasmaSpawn(scene);
    }
    return;
  }

  if (scene.activeRedWave && !scene.activeRedWave.isSpawningDamageBoosters) return;
  if (scene.activeDroneWave && !scene.activeDroneWave.isSpawningDrones) return;
  if (scene.activeAsteroidWave && !scene.activeAsteroidWave.isSpawningAsteroids) return;
  if (isBlockingBossWave(scene)) return;

  scheduleNextSpawn(scene);
}

function hasActiveLevelBossEncounter(scene) {
  return Boolean(
    scene.activeRedWave ||
    scene.activeDroneWave ||
    scene.activeAsteroidWave ||
    scene.activePlasmaWave ||
    (scene.activeBossWave && !scene.activeBossWave.isTravelEncounter)
  );
}

function queueNextBossOnlyWave(scene) {
  if (!scene || !isBossOnlyGameMode() || hasPendingBossWave(scene) || hasActiveLevelBossEncounter(scene)) return;
  const bossNumber = scene.bossOnlyBossNumber || 0;
  const bossKind = BOSS_ONLY_BOSS_KINDS[bossNumber % BOSS_ONLY_BOSS_KINDS.length];
  scene.bossOnlyBossNumber = bossNumber + 1;
  scene.bossOnlyTypeRevealed = false;
  queuePendingBossWave(scene, createBossConfig(bossKind));
  updateHud(scene);
}

function isBlockingBossWave(scene) {
  return Boolean(scene.activeBossWave && !scene.activeBossWave.isTravelEncounter && !scene.activeBossWave.isSpawningEnemies);
}

function pauseGame() {
  if (state !== 'playing') return;
  state = 'paused';
  isDraggingShip = false;
  setPauseOverlayMode(this, 'normal');
  setXyControlActive(this, false);
  prepareControlPauseResume(this);

  if (spawnEvent) {
    this.resumeSpawnDelay = getTimerEventRemaining(spawnEvent);
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  pauseFallingObjects(this);
  pauseTimedGameplay(this);
  showOverlayScreen(this, null);
  setPauseSettingsVisible(true);
}

function getTimerEventRemaining(event) {
  if (!event) return null;
  if (typeof event.getRemaining === 'function') {
    return Math.max(0, event.getRemaining());
  }
  return Math.max(0, (event.delay || 0) - (event.elapsed || 0));
}

function resumeGame() {
  if (state !== 'paused') return;
  state = 'playing';
  isDraggingShip = false;
  this.xyPauseResumeArmed = false;
  setPauseOverlayMode(this, 'normal');
  setPauseSettingsVisible(false);
  setXyControlVisible(this, true);
  showOverlayScreen(this, null);

  if (this.pendingLevelUpgradeChoice) {
    maybeOpenUpgradeChoice(this);
    return;
  }

  resumeFallingObjects(this);
  resumeTimedGameplay(this);
  releasePendingStreakRepairKit(this);

  if (this.pendingEchoWaveWarningKind) {
    const waveKind = this.pendingEchoWaveWarningKind;
    this.pendingEchoWaveWarningKind = null;
    this.waveStartEvent = this.time.addEvent({
      delay: ECHO_WAVE_WARNING_RESUME_DELAY,
      callback: () => startWaveCountdown(this, waveKind),
    });
  }

  resumeGameplaySpawning(
    this,
    this.resumeSpawnDelay !== null && this.resumeSpawnDelay !== undefined
      ? this.resumeSpawnDelay
      : null
  );
  this.resumeSpawnDelay = null;
}

function resumeGameplaySpawning(scene, delayOverride = null) {
  if (state !== 'playing') return;
  if (scene.waveStartEvent || scene.bossCueTween) return;

  if (scene.activePlasmaWave) {
    if (scene.activePlasmaWave.isSpawningPlasma && !scene.plasmaSpawnEvent) {
      schedulePlasmaSpawn(scene);
    }
    return;
  }

  if (scene.activeRedWave && !scene.activeRedWave.isSpawningDamageBoosters) return;
  if (scene.activeDroneWave && !scene.activeDroneWave.isSpawningDrones) return;
  if (scene.activeAsteroidWave && !scene.activeAsteroidWave.isSpawningAsteroids) return;
  if (isBlockingBossWave(scene)) return;

  if (!spawnEvent) {
    scheduleNextSpawn(scene, delayOverride);
  }
}

function pauseTimedGameplay(scene) {
  scene.tweens.pauseAll();
  pauseSpikeDrones(scene);
  [scene.activeScoreBooster, scene.activeShieldBooster, scene.activeRedWave, scene.activeDroneWave, scene.activeAsteroidWave, scene.activePlasmaWave, scene.activeBossWave]
    .forEach((countdown) => pauseCountdown(scene, countdown));

  [scene.waveStartEvent, scene.waveResumeEvent, scene.bossAttackEvent, scene.bossLaserEvent, scene.bossHorizontalLaserEvent, scene.bossLaserClearEvent, scene.bossEnemySpawnEvent, scene.redNeedleBossPassEvent, scene.plasmaSpawnEvent, scene.bossCueTween, scene.bossCueClearEvent].forEach((event) => {
    if (event) event.paused = true;
  });
  (scene.bossWarningAnimationEvents || []).forEach((event) => {
    if (event) event.paused = true;
  });
  (scene.bossLaserEffects || []).forEach((effect) => {
    if (effect && effect.redrawEvent) effect.redrawEvent.paused = true;
  });
  if (scene.bossEnterTween) scene.bossEnterTween.pause();
  if (scene.bossExitTween) scene.bossExitTween.pause();
  if (scene.bossCueMoveTween) scene.bossCueMoveTween.pause();
  if (scene.bossCueExitTween) scene.bossCueExitTween.pause();

  if (scene.redWaveAudio && !scene.redWaveAudio.paused) {
    scene.wasRedWaveAudioPausedByGame = true;
    scene.redWaveAudio.pause();
  }
  if (scene.bossLaserAudio && !scene.bossLaserAudio.paused) {
    scene.wasBossLaserAudioPausedByGame = true;
    scene.bossLaserAudio.pause();
  }
}

function resumeTimedGameplay(scene) {
  scene.tweens.resumeAll();
  resumeSpikeDrones(scene);
  [scene.activeScoreBooster, scene.activeShieldBooster, scene.activeRedWave, scene.activeDroneWave, scene.activeAsteroidWave, scene.activePlasmaWave, scene.activeBossWave]
    .forEach((countdown) => resumeCountdown(scene, countdown));

  [scene.waveStartEvent, scene.waveResumeEvent, scene.bossAttackEvent, scene.bossLaserEvent, scene.bossHorizontalLaserEvent, scene.bossLaserClearEvent, scene.bossEnemySpawnEvent, scene.redNeedleBossPassEvent, scene.plasmaSpawnEvent, scene.bossCueTween, scene.bossCueClearEvent].forEach((event) => {
    if (event) event.paused = false;
  });
  (scene.bossWarningAnimationEvents || []).forEach((event) => {
    if (event) event.paused = false;
  });
  (scene.bossLaserEffects || []).forEach((effect) => {
    if (effect && effect.redrawEvent) effect.redrawEvent.paused = false;
  });
  if (scene.bossEnterTween) scene.bossEnterTween.resume();
  if (scene.bossExitTween) scene.bossExitTween.resume();
  if (scene.bossCueMoveTween) scene.bossCueMoveTween.resume();
  if (scene.bossCueExitTween) scene.bossCueExitTween.resume();

  if (scene.wasRedWaveAudioPausedByGame && scene.redWaveAudio) {
    scene.redWaveAudio.play().catch(() => {});
  }
  if (scene.wasBossLaserAudioPausedByGame && scene.bossLaserAudio) {
    scene.bossLaserAudio.play().catch(() => {});
  }
  scene.wasRedWaveAudioPausedByGame = false;
  scene.wasBossLaserAudioPausedByGame = false;
}

function pauseCountdown(scene, countdown) {
  if (!countdown || !countdown.endsAt) return;
  if (countdown.pausedRemaining !== undefined) return;
  countdown.pausedRemaining = Math.max(0, countdown.endsAt - scene.time.now);
}

function resumeCountdown(scene, countdown) {
  if (!countdown || countdown.pausedRemaining === undefined) return;
  countdown.endsAt = scene.time.now + countdown.pausedRemaining;
  delete countdown.pausedRemaining;
}

function resetTimedBoosters(scene) {
  resetEnergyResonance(scene);
  scoreMultiplier = 1;
  scene.activeScoreBooster = null;
  scene.activeShieldBooster = null;

  if (scene.shipTween) {
    scene.shipTween.stop();
    scene.shipTween = null;
  }

  if (scene.ship) {
    setShipTextureForCurrentState(scene);
  }

  clearScoreBoosterBallColor(scene);
  updateLivesText(scene);

  if (scene.ship) {
    refreshShipSize(scene);
    moveShipTo(scene, clampShipX(scene, scene.ship.x));
  }

  updateShieldBubble(scene);

  setHudBoosterVisible(false);
  updateBoosterBar(scene, 0);
}

function syncActiveTimedBoosterBar(scene) {
  const scoreBooster = scene.activeScoreBooster;
  const shieldBooster = scene.activeShieldBooster;
  const booster = scoreBooster || shieldBooster;
  if (!booster) return false;

  const remaining = Math.max(0, booster.endsAt - scene.time.now);
  if (remaining <= 0) return false;

  if (scoreBooster) {
    setHudBoosterVisible(true, '#9b5cff', 'Catalizador de energía');
  } else {
    setHudBoosterVisible(true, '#4da3ff', 'Barrera protectora');
  }
  updateBoosterBar(scene, remaining / booster.duration);
  return true;
}

function resetRedWave(scene) {
  scene.activeRedWave = null;
  clearWaveTimers(scene);
  clearBossCue(scene);

  if (scene.ship) {
    setShipTextureForCurrentState(scene);
    refreshShipSize(scene);
    moveShipTo(scene, clampShipX(scene, scene.ship.x));
  }
}

function resetDroneWave(scene) {
  scene.activeDroneWave = null;
  clearWaveTimers(scene);
  clearBossCue(scene);

  if (scene.ship) {
    setShipTextureForCurrentState(scene);
    refreshShipSize(scene);
    moveShipTo(scene, clampShipX(scene, scene.ship.x));
  }
}

function resetAsteroidWave(scene) {
  scene.activeAsteroidWave = null;
  clearWaveTimers(scene);
  clearBossCue(scene);

  if (scene.ship) {
    setShipTextureForCurrentState(scene);
    refreshShipSize(scene);
    moveShipTo(scene, clampShipX(scene, scene.ship.x));
  }

  if (!getActiveCountdown(scene)) {
    setHudBoosterVisible(false);
    updateBoosterBar(scene, 0);
  }
}

function resetPlasmaWave(scene) {
  scene.activePlasmaWave = null;
  if (scene.plasmaSpawnEvent) {
    scene.plasmaSpawnEvent.remove(false);
    scene.plasmaSpawnEvent = null;
  }
  clearPlasmaBars(scene);
  clearWaveTimers(scene);
  clearBossCue(scene);

  if (scene.ship) {
    setShipTextureForCurrentState(scene);
    refreshShipSize(scene);
    moveShipTo(scene, clampShipX(scene, scene.ship.x));
  }
}

function resetBossWave(scene) {
  if (scene.bossAttackEvent) {
    scene.bossAttackEvent.remove(false);
    scene.bossAttackEvent = null;
  }
  if (scene.bossLaserEvent) {
    scene.bossLaserEvent.remove(false);
    scene.bossLaserEvent = null;
  }
  if (scene.bossHorizontalLaserEvent) {
    scene.bossHorizontalLaserEvent.remove(false);
    scene.bossHorizontalLaserEvent = null;
  }
  if (scene.bossLaserClearEvent) {
    scene.bossLaserClearEvent.remove(false);
    scene.bossLaserClearEvent = null;
  }
  if (scene.redNeedleBossPassEvent) {
    scene.redNeedleBossPassEvent.remove(false);
    scene.redNeedleBossPassEvent = null;
  }
  stopBossEnemySpawns(scene);
  if (scene.bossEnterTween) {
    scene.bossEnterTween.stop();
    scene.bossEnterTween = null;
  }
  if (scene.bossExitTween) {
    scene.bossExitTween.stop();
    scene.bossExitTween = null;
  }
  if (scene.bossShip) {
    scene.bossShip.destroy();
    scene.bossShip = null;
  }
  clearBossWarningParticles(scene);
  clearBossLaser(scene);
  clearBossCue(scene);
  scene.activeBossWave = null;
}

function getActiveTimedBooster(scene) {
  return scene.activeScoreBooster || scene.activeShieldBooster;
}

function getActiveCountdown(scene) {
  return getActiveWaveCountdown(scene) || getActiveTimedBooster(scene);
}

function getActiveWaveCountdown(scene) {
  if (scene.activeRedWave && scene.activeRedWave.hasStarted) return scene.activeRedWave;
  if (scene.activeDroneWave && scene.activeDroneWave.hasStarted) return scene.activeDroneWave;
  if (scene.activeAsteroidWave && scene.activeAsteroidWave.hasStarted) return scene.activeAsteroidWave;
  if (scene.activePlasmaWave && scene.activePlasmaWave.hasStarted) return scene.activePlasmaWave;
  if (scene.activeBossWave && scene.activeBossWave.hasStarted) return scene.activeBossWave;
  return null;
}

function isWaveCountdownActive(scene) {
  return Boolean(getActiveWaveCountdown(scene));
}

function clearWaveTimers(scene) {
  if (scene.waveStartEvent) {
    scene.waveStartEvent.remove(false);
    scene.waveStartEvent = null;
  }

  if (scene.waveResumeEvent) {
    scene.waveResumeEvent.remove(false);
    scene.waveResumeEvent = null;
  }
}
