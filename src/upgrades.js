// Mejoras, boosters, puntuacion y feedback asociado.
// Agrupa reglas de progresion y efectos temporales que alteran el poder del jugador.

function isShieldActive(scene) {
  return Boolean(scene.activeShieldBooster);
}

function getTimedBoosterDuration() {
  return TIMED_BOOSTER_DURATION;
}

function getLifeBoosterHealAmount() {
  return 1;
}

function getLifeBoosterChance(level = lifeBoosterLevel) {
  return getBoosterChanceForLevel(level);
}

function getLifeBoosterChancePercent(level = lifeBoosterLevel) {
  return getBoosterChancePercent(level);
}

function getBoosterChanceForLevel(level) {
  return Math.max(0, level) * BOOSTER_CHANCE_PER_LEVEL;
}

function getBoosterChancePercent(level) {
  return Math.round(getBoosterChanceForLevel(level) * 100);
}

function getEchoAttackChancePercent(level = echoHelpLevel) {
  return level > 0 ? Math.round(ECHO_ATTACK_CHANCE * 100) : 0;
}

function canDropLifeBooster() {
  return lifeBoosterLevel > 0 && lives < maxLives;
}

function getEnergyBallValue() {
  if (energyRefinerLevel <= 0) return 1;
  const maxLevelBonus = energyRefinerLevel >= MAX_UPGRADE_LEVEL ? energyRefinerLevelBonus : 0;
  return energyRefinerLevel + 1 + maxLevelBonus;
}

function getEnemyDefeatScore(baseScore) {
  const maxLevelBonus = shieldBoosterLevel >= MAX_UPGRADE_LEVEL ? shieldDefeatLevelBonus : 0;
  return baseScore + maxLevelBonus;
}

function awardEnemyDefeatScore(scene, baseScore, x, y, color) {
  addScore(scene, getEnemyDefeatScore(baseScore), true, { x, y, color });
}

function resetEnergyStreak() {
  if (energyStreak === 0) return;
  energyStreak = 0;
  updateStreakText();
}

function increaseEnergyStreak(scene) {
  energyStreak += 1;
  maxEnergyStreak = Math.max(maxEnergyStreak, energyStreak);
  updateStreakText();
  if (energyStreak % ENERGY_STREAK_REWARD_TARGET !== 0) return;
  awardEnergyStreakReward(scene);
}

function getEnergyStreakRewardScore() {
  return (energyStreak / ENERGY_STREAK_REWARD_TARGET) * ENERGY_STREAK_REWARD_SCORE;
}

function awardEnergyStreakReward(scene) {
  if (!scene || !scene.ship) return;
  const rewardScore = getEnergyStreakRewardScore();
  const shouldDelayUpgrade = state === 'playing'
    && levelProgressScore + rewardScore >= nextUpgradeScore
    && hasAvailableUpgrades();
  const shouldDropRepairKit = canDropLifeBooster();
  playStreakSuccessSound(scene);
  addScore(scene, rewardScore, true, {
    x: scene.ship.x,
    y: scene.ship.y - 28,
    color: '#ffd84d',
  });
  showStreakPointPopup(scene, scene.ship.x, scene.ship.y - 58, 'RACHA!');

  if (shouldDropRepairKit && shouldDelayUpgrade) {
    scene.pendingStreakRepairKit = true;
  } else if (shouldDropRepairKit) {
    spawnForcedFallingKind(scene, 'lifeBooster', Phaser.Math.Clamp(scene.ship.x, 28, getGameWidth(scene) - 28));
  }
}

function addScore(scene, points, animate = true, feedback = null) {
  score += points;
  levelProgressScore += points;
  const currentHud = initHud();
  if (currentHud.score) {
    currentHud.score.textContent = isBossOnlyGameMode() ? getBossOnlyHudName(scene) : score;
  }
  updateUpgradeBar(scene, animate);
  if (feedback && feedback.style === 'streak') {
    showStreakPointPopup(scene, feedback.x, feedback.y, feedback.label || 'RACHA!');
  } else if (feedback) {
    showPointPopup(scene, feedback.x, feedback.y, points, feedback.color, feedback.label, feedback.duration);
  }
}

function showPointPopup(scene, x, y, points, color = '#ffd84d', label = null, duration = POINT_POPUP_DURATION) {
  if (!scene || !scene.add || points <= 0) return;
  const popupPosition = getPointPopupPosition(scene, x, y);

  const text = trackGameplayVisual(scene, createCanvasTextImage(scene, label || '+' + points, {
    fontSize: 18,
    fill: getPointPopupGradientColors(color),
    texturePrefix: 'pointPopupText',
  }).setPosition(popupPosition.x, popupPosition.y).setDepth(UI_DEPTH + 4));

  text.setScale(0.66);
  text.setAlpha(0.84);
  scene.tweens.add({
    targets: text,
    y: popupPosition.y - 50,
    scale: 0.9,
    duration,
    ease: 'Back.easeOut',
  });
  scene.tweens.add({
    targets: text,
    alpha: 0,
    delay: Math.min(POINT_POPUP_FADE_DELAY, Math.max(0, duration - 180)),
    duration: Math.max(180, duration - POINT_POPUP_FADE_DELAY),
    ease: 'Sine.easeIn',
    onComplete: () => {
      removePointPopupSlot(scene, popupPosition.slot);
      removeCanvasTextTexture(scene, text);
      text.destroy();
    },
  });
}

function showStreakPointPopup(scene, x, y, label, colors = STREAK_POINT_POPUP_COLORS) {
  if (!scene || !scene.add) return;
  const popupPosition = getPointPopupPosition(scene, x, y);
  const container = trackGameplayVisual(scene, scene.add.container(popupPosition.x, popupPosition.y));
  container.setDepth(UI_DEPTH + 5);
  container.setScale(0.62);
  container.setAlpha(0.84);

  const streakText = createStreakGradientText(scene, label, colors);
  container.add(streakText);

  scene.tweens.add({
    targets: container,
    y: popupPosition.y - 48,
    scale: 0.88,
    duration: STREAK_POINT_POPUP_DURATION,
    ease: 'Sine.easeOut',
  });

  scene.tweens.add({
    targets: streakText,
    y: -6,
    angle: 2.5,
    scaleX: 1.08,
    scaleY: 0.94,
    duration: 170,
    yoyo: true,
    repeat: 3,
    ease: 'Sine.easeInOut',
  });

  scene.tweens.add({
    targets: container,
    alpha: 0,
    delay: STREAK_POINT_POPUP_FADE_DELAY,
    duration: STREAK_POINT_POPUP_DURATION - STREAK_POINT_POPUP_FADE_DELAY,
    ease: 'Sine.easeIn',
    onComplete: () => {
      removePointPopupSlot(scene, popupPosition.slot);
      if (streakText.textureKey && scene.textures.exists(streakText.textureKey)) {
        scene.textures.remove(streakText.textureKey);
      }
      container.destroy();
    },
  });
}

function createStreakGradientText(scene, label, colors = STREAK_POINT_POPUP_COLORS) {
  const textureKey = 'streakGradientText-' + streakGradientTextureId;
  streakGradientTextureId += 1;
  return createCanvasTextImage(scene, label, {
    fontSize: 22,
    fill: colors,
    textureKey,
  });
}

function createCanvasTextImage(scene, label, options = {}) {
  const fontSize = options.fontSize || 21;
  const strokeThickness = options.strokeThickness || 0;
  const padding = options.padding === undefined ? 10 : options.padding;
  const font = 'bold ' + fontSize + 'px ' + FONT_FAMILY;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(label);
  const textWidth = Math.ceil(metrics.width);
  const textHeight = Math.ceil(fontSize * 1.45);
  canvas.width = textWidth + padding * 2 + strokeThickness * 2;
  canvas.height = textHeight + padding * 2 + strokeThickness * 2;

  context.font = font;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.lineJoin = 'round';

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  if (strokeThickness > 0) {
    context.strokeStyle = options.stroke || '#050914';
    context.lineWidth = strokeThickness;
    context.strokeText(label, centerX, centerY);
  }
  context.fillStyle = Array.isArray(options.fill)
    ? createCanvasTextGradient(context, canvas, options.fill, padding)
    : (options.fill || '#ffd84d');
  context.fillText(label, centerX, centerY);

  const textureKey = options.textureKey || (options.texturePrefix || 'canvasText') + '-' + pointPopupTextureId;
  pointPopupTextureId += 1;
  scene.textures.addCanvas(textureKey, canvas);
  const image = scene.add.image(0, 0, textureKey).setOrigin(0.5);
  image.textureKey = textureKey;
  return image;
}

function createCanvasTextGradient(context, canvas, colors, padding) {
  const gradient = context.createLinearGradient(padding, 0, canvas.width - padding, 0);
  colors.forEach((color, index) => {
    gradient.addColorStop(index / Math.max(1, colors.length - 1), color);
  });
  return gradient;
}

function getPointPopupGradientColors(color) {
  if (!isHexColor(color)) return [color, '#ecf7ff'];
  return [
    mixHexColors(color, '#ffffff', 0.62),
    color,
    mixHexColors(color, '#76ffe8', 0.34),
  ];
}

function isHexColor(color) {
  return typeof color === 'string' && /^#[0-9a-f]{6}$/i.test(color);
}

function mixHexColors(fromHex, toHex, progress) {
  const from = hexToRgb(fromHex);
  const to = hexToRgb(toHex);
  const r = Math.round(Phaser.Math.Linear(from.r, to.r, progress));
  const g = Math.round(Phaser.Math.Linear(from.g, to.g, progress));
  const b = Math.round(Phaser.Math.Linear(from.b, to.b, progress));
  return '#' + [r, g, b].map((value) => value.toString(16).padStart(2, '0')).join('');
}

function hexToRgb(hex) {
  const value = parseInt(hex.slice(1), 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function removeCanvasTextTexture(scene, image) {
  if (!scene || !image || !image.textureKey || !scene.textures.exists(image.textureKey)) return;
  scene.textures.remove(image.textureKey);
}

function getPointPopupPosition(scene, x, y) {
  const now = scene.time ? scene.time.now : 0;
  if (!scene.pointPopupSlots) scene.pointPopupSlots = [];
  scene.pointPopupSlots = scene.pointPopupSlots.filter((slot) => now - slot.createdAt <= POINT_POPUP_STACK_WINDOW);

  let adjustedY = y;
  if (scene.shipLifeIndicator && scene.shipLifeIndicator.active) {
    const isNearShipIndicator = Math.abs(x - scene.shipLifeIndicator.x) <= POINT_POPUP_STACK_DISTANCE
      && Math.abs(y - scene.shipLifeIndicator.y) <= POINT_POPUP_STACK_DISTANCE;
    if (isNearShipIndicator) {
      adjustedY = Math.min(adjustedY, scene.shipLifeIndicator.y - POINT_POPUP_LIFE_INDICATOR_MARGIN);
    }
  }

  const nearbySlotCount = scene.pointPopupSlots.filter((slot) => (
    Math.abs(slot.x - x) <= POINT_POPUP_STACK_DISTANCE
    && Math.abs(slot.y - adjustedY) <= POINT_POPUP_STACK_DISTANCE
  )).length;
  adjustedY -= nearbySlotCount * POINT_POPUP_STACK_OFFSET;

  const slot = { x, y: adjustedY, createdAt: now };
  scene.pointPopupSlots.push(slot);
  return { x, y: adjustedY, slot };
}

function removePointPopupSlot(scene, slot) {
  if (!scene || !scene.pointPopupSlots || !slot) return;
  scene.pointPopupSlots = scene.pointPopupSlots.filter((currentSlot) => currentSlot !== slot);
}

function updateShipPropulsion(scene, delta) {
  if (!scene.ship || !scene.shipTrail) return;
  if (!scene.shipTrailPoints) scene.shipTrailPoints = [];

  const now = scene.time ? scene.time.now : 0;
  const targetX = scene.ship.x;
  const targetY = scene.ship.y + 14;
  scene.shipTrailAnchorX = scene.shipTrailAnchorX === undefined
    ? targetX
    : Phaser.Math.Linear(scene.shipTrailAnchorX, targetX, SHIP_TRAIL_POSITION_SMOOTHING);
  scene.shipTrailAnchorY = scene.shipTrailAnchorY === undefined
    ? targetY
    : Phaser.Math.Linear(scene.shipTrailAnchorY, targetY, SHIP_TRAIL_POSITION_SMOOTHING);
  const point = {
    x: scene.shipTrailAnchorX,
    y: scene.shipTrailAnchorY,
    createdAt: now,
  };
  const previousPoint = scene.shipTrailPoints && scene.shipTrailPoints[scene.shipTrailPoints.length - 1];
  const hasPreviousEmission = scene.shipTrailLastEmitX !== undefined && scene.shipTrailLastEmitY !== undefined;
  const hasMovedEnough = !hasPreviousEmission
    || Phaser.Math.Distance.Between(
      scene.shipTrailLastEmitX,
      scene.shipTrailLastEmitY,
      point.x,
      point.y
    ) >= SHIP_TRAIL_MIN_POINT_DISTANCE;
  const shouldAddIdlePoint = previousPoint
    && !hasMovedEnough
    && now - previousPoint.createdAt >= SHIP_TRAIL_IDLE_INTERVAL;
  if (previousPoint && !hasMovedEnough) {
    const idleDrift = SHIP_TRAIL_IDLE_SPEED * Math.min(delta || 16, SHIP_TRAIL_IDLE_MAX_DELTA);
    scene.shipTrailPoints.forEach((trailPoint) => {
      trailPoint.y += idleDrift;
    });
  }
  if (
    !previousPoint
    || hasMovedEnough
    || shouldAddIdlePoint
  ) {
    scene.shipTrailPoints.push(point);
    scene.shipTrailLastEmitX = point.x;
    scene.shipTrailLastEmitY = point.y;
  }

  scene.shipTrailPoints = scene.shipTrailPoints
    .filter((trailPoint) => now - trailPoint.createdAt <= SHIP_TRAIL_DURATION)
    .slice(-SHIP_TRAIL_MAX_POINTS);

  drawShipTrail(scene, now);
}

function clearShipTrail(scene) {
  if (!scene) return;
  scene.shipTrailPoints = [];
  scene.shipTrailAnchorX = undefined;
  scene.shipTrailAnchorY = undefined;
  scene.shipTrailLastEmitX = undefined;
  scene.shipTrailLastEmitY = undefined;
  if (scene.shipTrail) scene.shipTrail.clear();
}

function drawShipTrail(scene, now) {
  const graphics = scene.shipTrail;
  const points = smoothShipTrailPoints(scene.shipTrailPoints || []);
  graphics.clear();
  if (points.length < 2) return;

  graphics.setBlendMode(Phaser.BlendModes.ADD);

  for (let i = 1; i < points.length; i += 1) {
    const previousPoint = points[i - 1];
    const currentPoint = points[i];
    const age = now - currentPoint.createdAt;
    const freshness = Phaser.Math.Clamp(1 - age / SHIP_TRAIL_DURATION, 0, 1);
    const positionRatio = i / (points.length - 1);
    const taper = Math.pow(Math.min(freshness, positionRatio), 1.18);
    const width = Math.max(1.1, SHIP_TRAIL_WIDTH * taper);
    const alpha = SHIP_TRAIL_BASE_ALPHA + SHIP_TRAIL_ALPHA_RANGE * taper;
    const blueMix = Phaser.Math.Clamp((positionRatio - (1 - SHIP_TRAIL_BLUE_CORE_RATIO)) / SHIP_TRAIL_BLUE_CORE_RATIO, 0, 1);
    const haloColor = mixRgbColor(0xff9f1c, 0x1269d3, blueMix);
    const bodyColor = mixRgbColor(0xf08a2a, 0x1678c8, blueMix);
    const coreColor = mixRgbColor(0xffc14f, 0x44b8dc, blueMix);

    graphics.lineStyle(width * 1.25, haloColor, alpha * 0.28);
    graphics.lineBetween(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y);
    graphics.fillStyle(haloColor, alpha * 0.22);
    graphics.fillCircle(currentPoint.x, currentPoint.y, width * 0.58);
    graphics.lineStyle(width, bodyColor, alpha);
    graphics.lineBetween(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y);
    graphics.fillStyle(bodyColor, alpha * 0.58);
    graphics.fillCircle(currentPoint.x, currentPoint.y, width * 0.42);
    graphics.lineStyle(Math.max(0.7, width * 0.22), coreColor, alpha * SHIP_TRAIL_CORE_ALPHA_RATIO);
    graphics.lineBetween(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y);
  }
}

function smoothShipTrailPoints(points) {
  if (points.length < 3) return points;
  let smoothedPoints = points;

  for (let pass = 0; pass < SHIP_TRAIL_CURVE_PASSES; pass += 1) {
    const nextPoints = [smoothedPoints[0]];
    for (let i = 0; i < smoothedPoints.length - 1; i += 1) {
      const currentPoint = smoothedPoints[i];
      const nextPoint = smoothedPoints[i + 1];
      nextPoints.push({
        x: Phaser.Math.Linear(currentPoint.x, nextPoint.x, 0.25),
        y: Phaser.Math.Linear(currentPoint.y, nextPoint.y, 0.25),
        createdAt: Phaser.Math.Linear(currentPoint.createdAt, nextPoint.createdAt, 0.25),
      });
      nextPoints.push({
        x: Phaser.Math.Linear(currentPoint.x, nextPoint.x, 0.75),
        y: Phaser.Math.Linear(currentPoint.y, nextPoint.y, 0.75),
        createdAt: Phaser.Math.Linear(currentPoint.createdAt, nextPoint.createdAt, 0.75),
      });
    }
    nextPoints.push(smoothedPoints[smoothedPoints.length - 1]);
    smoothedPoints = nextPoints;
  }

  return smoothedPoints;
}

function mixRgbColor(fromColor, toColor, amount) {
  const mix = Phaser.Math.Clamp(amount, 0, 1);
  const fromRed = (fromColor >> 16) & 255;
  const fromGreen = (fromColor >> 8) & 255;
  const fromBlue = fromColor & 255;
  const toRed = (toColor >> 16) & 255;
  const toGreen = (toColor >> 8) & 255;
  const toBlue = toColor & 255;
  const red = Math.round(Phaser.Math.Linear(fromRed, toRed, mix));
  const green = Math.round(Phaser.Math.Linear(fromGreen, toGreen, mix));
  const blue = Math.round(Phaser.Math.Linear(fromBlue, toBlue, mix));
  return (red << 16) | (green << 8) | blue;
}

function updateEnemyPropulsion(scene, delta) {
  if (!scene.balls) return;

  enemyTrailTimer += delta;
  if (enemyTrailTimer < 90) return;
  enemyTrailTimer = 0;

  scene.balls.getChildren().forEach((enemy) => {
    if (!enemy.active) return;
    if (enemy.getData('kind') === 'damageBooster' || isScissorKind(enemy.getData('kind'))) {
      emitVerticalEnemyTrail(scene, enemy);
    } else if (enemy.getData('kind') === 'redNeedle') {
      emitRedNeedleTrail(scene, enemy, enemy.getData('horizontalVelocity') || RED_NEEDLE_SPEED, 1);
    }
  });

  const bossWave = scene.activeBossWave;
  if (bossWave && bossWave.kind === 'redNeedleBoss' && bossWave.currentPass && scene.bossShip && scene.bossShip.visible) {
    emitRedNeedleTrail(scene, scene.bossShip, bossWave.currentPass.direction * RED_NEEDLE_SPEED, 1.35);
  }
}

function emitVerticalEnemyTrail(scene, enemy) {
  const particle = trackGameplayVisual(scene, scene.add.image(
    enemy.x + Phaser.Math.Between(-4, 4),
    enemy.y - 18 + Phaser.Math.Between(-2, 2),
    'goldTrailParticle'
  ));
  particle
    .setDepth(FALLING_OBJECT_DEPTH - 1)
    .setTint(0xff3b4f)
    .setBlendMode(Phaser.BlendModes.ADD)
    .setScale(Phaser.Math.FloatBetween(0.45, 0.8))
    .setAlpha(0.72);

  scene.tweens.add({
    targets: particle,
    y: particle.y - Phaser.Math.Between(8, 15),
    x: particle.x + Phaser.Math.Between(-3, 3),
    scale: 0.08,
    alpha: 0,
    duration: Phaser.Math.Between(170, 260),
    ease: 'Sine.easeOut',
    onComplete: () => particle.destroy(),
  });
}

function emitRedNeedleTrail(scene, needle, horizontalVelocity, scaleMultiplier = 1) {
  const direction = horizontalVelocity >= 0 ? 1 : -1;
  const rearX = needle.x - direction * (RED_NEEDLE_WIDTH * scaleMultiplier * 0.46);
  const particle = trackGameplayVisual(scene, scene.add.image(
    rearX + Phaser.Math.Between(-3, 3),
    needle.y + Phaser.Math.Between(-5, 5),
    'goldTrailParticle'
  ));
  particle
    .setDepth(FALLING_OBJECT_DEPTH + 1)
    .setTint(0xff263c)
    .setBlendMode(Phaser.BlendModes.ADD)
    .setScale(Phaser.Math.FloatBetween(0.55, 1.05) * scaleMultiplier)
    .setAlpha(0.78);

  scene.tweens.add({
    targets: particle,
    x: particle.x - direction * Phaser.Math.Between(12, 22),
    y: particle.y + Phaser.Math.Between(-5, 5),
    scale: 0.08,
    alpha: 0,
    duration: Phaser.Math.Between(190, 300),
    ease: 'Sine.easeOut',
    onComplete: () => particle.destroy(),
  });
}

function activateScoreBooster(scene) {
  const duration = getTimedBoosterDuration();
  scoreMultiplier = 2;
  scene.activeScoreBooster = {
    endsAt: scene.time.now + duration,
    duration,
    resonanceCount: 0,
    isResonanceActive: false,
  };

  setShipTextureForCurrentState(scene);
  applyScoreBoosterBallColor(scene);
  playPurpleBoosterMusic(scene);

  setHudBoosterVisible(true, '#9b5cff', 'Catalizador de energía');
  updateBoosterBar(scene, 1, true);
}

function activateShieldBooster(scene) {
  const duration = getTimedBoosterDuration();
  scene.activeShieldBooster = {
    endsAt: scene.time.now + duration,
    duration,
  };

  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));
  updateShieldBubble(scene);
  updateLivesText(scene);

  setHudBoosterVisible(true, '#4da3ff', 'Barrera protectora');
  updateBoosterBar(scene, 1, true);
}

function updateScoreBooster(scene) {
  const booster = scene.activeScoreBooster;
  if (!booster) return;

  const remaining = Math.max(0, booster.endsAt - scene.time.now);
  const progress = remaining / booster.duration;
  updateBoosterBar(scene, progress);

  if (remaining > 0) return;

  resetEnergyResonance(scene);
  scene.activeScoreBooster = null;
  scoreMultiplier = 1;
  clearScoreBoosterBallColor(scene);
  setShipTextureForCurrentState(scene);
  playBackgroundMusic(scene);
  setHudBoosterVisible(false);
  updateBoosterBar(scene, 0);
}

function applyScoreBoosterBallColor(scene) {
  if (!scene.balls) return;
  scene.balls.getChildren().forEach((ball) => {
    if (ball.active && ball.getData('kind') === 'ball') setBallEnergyColor(ball, getScoreBoosterOrbColor(scene));
  });
}

function clearScoreBoosterBallColor(scene) {
  if (!scene.balls) return;
  scene.balls.getChildren().forEach((ball) => {
    if (ball.active && ball.getData('kind') === 'ball') setBallEnergyColor(ball, false);
  });
}

function getScoreBoosterOrbColor(scene) {
  return isEnergyResonanceActive(scene) ? 'pink' : 'purple';
}

function isEnergyResonanceUnlocked() {
  return energyResonanceLevel > 0;
}

function isEnergyResonanceActive(scene) {
  return Boolean(scene && scene.activeScoreBooster && scene.activeScoreBooster.isResonanceActive);
}

function resetEnergyResonance(scene) {
  if (!scene || !scene.activeScoreBooster) return;
  scene.activeScoreBooster.resonanceCount = 0;
  scene.activeScoreBooster.isResonanceActive = false;
}

function activateEnergyResonance(scene) {
  if (!scene || !scene.activeScoreBooster || scene.activeScoreBooster.isResonanceActive) return;
  scene.activeScoreBooster.isResonanceActive = true;
  scoreMultiplier = 3;
  applyScoreBoosterBallColor(scene);
  playStreakSuccessSound(scene);
  if (scene.ship) {
    showStreakPointPopup(scene, scene.ship.x, scene.ship.y - 58, 'SINCRONÍA', ENERGY_RESONANCE_POPUP_COLORS);
  }
}

function registerScoreBoosterOrbCatch(scene) {
  const booster = scene && scene.activeScoreBooster;
  if (!booster || !isEnergyResonanceUnlocked()) return;
  if (booster.isResonanceActive) return;

  booster.resonanceCount = (booster.resonanceCount || 0) + 1;

  if (booster.resonanceCount >= ENERGY_RESONANCE_REQUIRED_ORBS) {
    activateEnergyResonance(scene);
  }
}

function updateShieldBooster(scene) {
  const booster = scene.activeShieldBooster;
  if (!booster) return;

  const remaining = Math.max(0, booster.endsAt - scene.time.now);
  const progress = remaining / booster.duration;
  updateBoosterBar(scene, progress);

  if (remaining > 0) return;

  scene.activeShieldBooster = null;
  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));
  updateShieldBubble(scene);
  updateLivesText(scene);
  setHudBoosterVisible(false);
  updateBoosterBar(scene, 0);
}


function updateBoosterBar(scene, progress, immediate = false) {
  const currentHud = initHud();
  if (!currentHud.boosterFill) return;
  if (immediate) {
    currentHud.boosterFill.style.transition = 'none';
    currentHud.boosterFill.style.width = Math.max(0, Math.min(100, progress * 100)) + '%';
    void currentHud.boosterFill.offsetWidth;
    currentHud.boosterFill.style.transition = '';
    return;
  }
  currentHud.boosterFill.style.width = Math.max(0, Math.min(100, progress * 100)) + '%';
}

function updateUpgradeBar(scene, animate = false, onComplete = null) {
  const pointsTowardUpgrade = Phaser.Math.Clamp(levelProgressScore, 0, nextUpgradeScore);
  const percent = nextUpgradeScore > 0 ? (pointsTowardUpgrade / nextUpgradeScore) * 100 : 0;
  const currentHud = initHud();
  if (currentHud.progressFill) currentHud.progressFill.style.width = percent + '%';
  updateUpgradeProgressText(scene, pointsTowardUpgrade);

  if (scene.upgradeBarTween) {
    scene.upgradeBarTween.remove(false);
    scene.upgradeBarTween = null;
  }

  if (onComplete) {
    scene.upgradeBarTween = scene.time.delayedCall(animate ? UPGRADE_BAR_TWEEN_DURATION : 0, () => {
      scene.upgradeBarTween = null;
      onComplete();
    });
  }
}

function updateUpgradeProgressText(scene, pointsTowardUpgrade = null) {
  const progress = pointsTowardUpgrade === null
    ? Phaser.Math.Clamp(levelProgressScore, 0, nextUpgradeScore)
    : pointsTowardUpgrade;
  const currentHud = initHud();
  if (currentHud.progressText) {
    currentHud.progressText.textContent = Math.floor(progress) + '/' + nextUpgradeScore;
  }
}

function maybeOpenUpgradeChoice(scene) {
  if (isBossOnlyGameMode()) return;
  if (state !== 'playing' && state !== 'leveling') return;
  const hasPendingLevelUpgradeChoice = Boolean(scene.pendingLevelUpgradeChoice);
  if (!hasPendingLevelUpgradeChoice && levelProgressScore < nextUpgradeScore) return;

  if (!hasPendingLevelUpgradeChoice) {
    playLevelUpSound(scene);
    advancePlayerLevel(scene);

    while (levelProgressScore >= nextUpgradeScore && !hasAvailableUpgrades()) {
      advancePlayerLevel(scene);
      updateUpgradeBar(scene);
    }

    if (!hasAvailableUpgrades()) {
      scene.levelUpgradeSequenceActive = false;
      state = 'playing';
      updateUpgradeBar(scene);
      resumeFallingObjects(scene);
      resumeTimedGameplay(scene);
      releasePendingStreakRepairKit(scene);
      if (!consumePendingBossWave(scene)) recoverGameplaySpawning(scene);
      return;
    }

    if (!scene.levelUpgradeSequenceActive) {
      scene.levelUpgradeSequenceActive = true;
      triggerEchoLevelCelebration(scene);
    }

    scene.pendingLevelUpgradeChoice = true;
  }

  pauseGameplayForPendingUpgradeChoice(scene);

  const echoLevelUpgradeDelay = getEchoLevelUpgradeDelay(scene);
  if (echoLevelUpgradeDelay > 0 && !scene.deferUpgradeChoiceUntil) {
    scene.deferUpgradeChoiceUntil = scene.time.now + echoLevelUpgradeDelay;
  }
  if (scene.deferUpgradeChoiceUntil && scene.time.now < scene.deferUpgradeChoiceUntil) {
    scheduleDeferredUpgradeChoice(scene);
    return;
  }
  scene.deferUpgradeChoiceUntil = 0;
  if (scene.upgradeChoiceOpening) return;

  scene.upgradeChoiceOpening = true;
  scene.upgradeChoiceOpenEvent = scene.time.delayedCall(UPGRADE_BAR_TWEEN_DURATION, () => {
    scene.upgradeChoiceOpenEvent = null;
    scene.upgradeChoiceOpening = false;
    if (state !== 'playing' && state !== 'leveling') return;

    scene.pendingLevelUpgradeChoice = false;
    state = 'upgrading';
    isDraggingShip = false;
    scene.input.setDefaultCursor('default');
    setXyControlActive(scene, false);
    if (isXyGameMode()) updateXyControlFromShip(scene);

    if (spawnEvent) {
      spawnEvent.remove(false);
      spawnEvent = null;
    }

    pauseFallingObjects(scene);
    pauseTimedGameplay(scene);
    scene.availableUpgradeChoices = getRandomUpgradeChoices();
    updateUpgradeButtons(scene);
    showOverlayScreen(scene, 'upgrade');
  });
}

function pauseGameplayForPendingUpgradeChoice(scene) {
  if (!scene || state !== 'playing') return;
  state = 'leveling';
  isDraggingShip = false;
  if (scene.input) scene.input.setDefaultCursor('default');
  setXyControlActive(scene, false);
  if (isXyGameMode()) updateXyControlFromShip(scene);

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  pauseFallingObjects(scene);
  pauseTimedGameplay(scene);
}

function scheduleDeferredUpgradeChoice(scene) {
  if (!scene || scene.deferredUpgradeChoiceEvent) return;
  const delay = Math.max(0, (scene.deferUpgradeChoiceUntil || scene.time.now) - scene.time.now);
  scene.deferredUpgradeChoiceEvent = scene.time.delayedCall(delay, () => {
    scene.deferredUpgradeChoiceEvent = null;
    maybeOpenUpgradeChoice(scene);
  });
}

function advancePlayerLevel(scene) {
  const completedLevel = playerLevel;
  levelProgressScore = Math.max(0, levelProgressScore - nextUpgradeScore);
  playerLevel += 1;
  if (energyRefinerLevel >= MAX_UPGRADE_LEVEL) {
    energyRefinerLevelBonus += 1;
  }
  if (shieldBoosterLevel >= MAX_UPGRADE_LEVEL) {
    shieldDefeatLevelBonus += 1;
  }
  nextUpgradeScore = getLevelRequirement(playerLevel);
  queuePendingBossWave(scene, getBossConfigForLevel(completedLevel, scene));
  increaseDifficulty(scene);
  updatePlayerLevelText(scene);
}

function queuePendingBossWave(scene, bossConfig) {
  if (!scene || !bossConfig) return;
  if (!scene.pendingBossWave) {
    scene.pendingBossWave = bossConfig;
    return;
  }
  if (!scene.pendingBossWaves) scene.pendingBossWaves = [];
  scene.pendingBossWaves.push(bossConfig);
}

function getAvailableUpgradeKinds() {
  return ['lifeBooster', 'shieldBooster', 'scoreBooster', 'energyResonance', 'energyRefiner', 'energyPurifier', 'echoHelp', 'vitalExpander']
    .filter((upgradeKind) => canChooseUpgradeKind(upgradeKind));
}

function getRandomUpgradeChoices() {
  const availableKinds = getAvailableUpgradeKinds();
  if (availableKinds.length <= 1) return availableKinds;
  return Phaser.Utils.Array.Shuffle(availableKinds).slice(0, 2);
}

function getUpgradeConfig(upgradeKind) {
  if (upgradeKind === 'lifeBooster') {
    return {
      label: 'Kit de reparación',
      getDescription: (level) => getUpgradeDescriptionLines([
        level === 1 ? 'Desbloquea el Kit de reparación.' : '',
        'Repone 1 vida.',
        'Tasa de aparición ' + getLifeBoosterChancePercent(level) + '%.',
      ]),
      color: '#4dff88',
    };
  }
  if (upgradeKind === 'shieldBooster') {
    return {
      label: 'Barrera protectora',
      getDescription: (level) => getUpgradeDescriptionLines([
        level === 1 ? 'Desbloquea la barrera protectora.' : '',
        'Protege del daño y destruye algunos enemigos durante ' + formatSeconds(getTimedBoosterDuration()) + ' segundos.',
        'Tasa de aparición ' + getBoosterChancePercent(level) + '%.',
        level >= MAX_UPGRADE_LEVEL ? 'Por cada nivel que superes, los enemigos derrotados proporcionan +1 punto.' : '',
      ]),
      color: '#4da3ff',
    };
  }
  if (upgradeKind === 'scoreBooster') {
    return {
      label: 'Catalizador de energía',
      getDescription: (level) => getUpgradeDescriptionLines([
        level === 1 ? 'Desbloquea el catalizador de energía.' : '',
        'Duplica el valor de los orbes durante ' + formatSeconds(getTimedBoosterDuration()) + ' segundos.',
        'Tasa de aparición ' + getBoosterChancePercent(level) + '%.',
      ]),
      color: '#9b5cff',
    };
  }
  if (upgradeKind === 'energyResonance') {
    return {
      label: 'Resonancia energética',
      getDescription: () => getUpgradeDescriptionLines([
        'Tras recoger 3 orbes multiplicados con el catalizador, activa Sincronía.',
        'Durante la Sincronía los orbes rosas suman un multiplicador adicional.',
      ]),
      color: ENERGY_RESONANCE_COLOR,
      maxLevel: 1,
    };
  }
  if (upgradeKind === 'energyRefiner') {
    return {
      label: 'Refinador de energía',
      getDescription: (level) => level < MAX_UPGRADE_LEVEL
        ? 'Los orbes de energía proporcionan ' + (level + 1) + ' puntos.'
        : 'Por cada nivel que superes se suma +1 al valor de los orbes de energía.',
      color: '#ffd84d',
    };
  }
  if (upgradeKind === 'energyPurifier') {
    return {
      label: 'Purificador de energía',
      getDescription: () => 'Los orbes contaminados dejan de aparecer.',
      color: ENERGY_PURIFIER_COLOR,
      maxLevel: 1,
    };
  }
  if (upgradeKind === 'echoHelp') {
    return {
      label: 'Ayuda de Echo',
      getDescription: (level) => getUpgradeDescriptionLines([
        'Echo atacará a algunos enemigos que se acerquen a ti, con una probabilidad del ' + getEchoAttackChancePercent(level) + '%.',
      ]),
      color: ECHO_HELP_COLOR,
      maxLevel: 1,
    };
  }
  if (upgradeKind === 'vitalExpander') {
    return {
      label: 'Expansor vital',
      getDescription: () => 'Aumenta en +' + VITAL_EXPANDER_LIFE_BONUS + ' la capacidad de vida de la nave.',
      color: VITAL_EXPANDER_COLOR,
      maxLevel: 1,
    };
  }
  return { label: 'Mejora', getDescription: () => '', color: '#76ffe8' };
}

function getUpgradeDescriptionLines(lines) {
  return lines.filter(Boolean).join('\n');
}

function formatSeconds(milliseconds) {
  return String(milliseconds / 1000).replace('.', ',');
}

function hasAvailableUpgrades() {
  return getAvailableUpgradeKinds().length > 0;
}

function canChooseUpgradeKind(upgradeKind) {
  if (upgradeKind === 'energyPurifier' && energyRefinerLevel < MAX_UPGRADE_LEVEL) return false;
  if (upgradeKind === 'echoHelp' && shieldBoosterLevel < MAX_UPGRADE_LEVEL) return false;
  if (upgradeKind === 'vitalExpander' && lifeBoosterLevel < MAX_UPGRADE_LEVEL) return false;
  if (upgradeKind === 'energyResonance' && scoreBoosterLevel < MAX_UPGRADE_LEVEL) return false;
  return getUpgradeLevel(upgradeKind) < getUpgradeMaxLevel(upgradeKind);
}

function getUpgradeMaxLevel(upgradeKind) {
  const config = getUpgradeConfig(upgradeKind);
  return config.maxLevel || MAX_UPGRADE_LEVEL;
}

function chooseUpgrade(scene, upgradeKind) {
  if (state !== 'upgrading') return;
  if (!upgradeKind) return;
  if (!canChooseUpgradeKind(upgradeKind)) return;

  if (upgradeKind === 'lifeBooster') {
    lifeBoosterLevel += 1;
    updateLivesText(scene);
  } else if (upgradeKind === 'shieldBooster') {
    shieldBoosterLevel += 1;
  } else if (upgradeKind === 'scoreBooster') {
    scoreBoosterLevel += 1;
  } else if (upgradeKind === 'energyResonance') {
    energyResonanceLevel += 1;
  } else if (upgradeKind === 'energyRefiner') {
    energyRefinerLevel += 1;
  } else if (upgradeKind === 'energyPurifier') {
    energyPurifierLevel += 1;
  } else if (upgradeKind === 'echoHelp') {
    echoHelpLevel += 1;
    updateEchoCompanion(scene, 0);
  } else if (upgradeKind === 'vitalExpander') {
    vitalExpanderLevel += 1;
    expandVitalCapacity(scene);
  }

  updateUpgradeBar(scene);
  updateUpgradeStatusIcons(scene);
  setShipTextureForCurrentState(scene);
  showOverlayScreen(scene, null);
  scene.availableUpgradeChoices = null;

  if (levelProgressScore >= nextUpgradeScore) {
    state = 'leveling';
    maybeOpenUpgradeChoice(scene);
    return;
  }

  scene.levelUpgradeSequenceActive = false;

  if (hasPendingBossWave(scene)) {
    state = 'paused';
    scene.resumeSpawnDelay = null;
    setPauseOverlayMode(scene, 'normal');
    setXyControlActive(scene, false);
    prepareControlPauseResume(scene);
    showOverlayScreen(scene, null);
    setPauseSettingsVisible(true);
    return;
  }

  state = 'paused';
  scene.resumeSpawnDelay = UPGRADE_RESUME_DELAY;
  setPauseOverlayMode(scene, 'normal');
  setXyControlActive(scene, false);
  prepareControlPauseResume(scene);
  showOverlayScreen(scene, null);
  setPauseSettingsVisible(true);
}

function getUpgradeLevel(upgradeKind) {
  if (upgradeKind === 'lifeBooster') return lifeBoosterLevel;
  if (upgradeKind === 'shieldBooster') return shieldBoosterLevel;
  if (upgradeKind === 'scoreBooster') return scoreBoosterLevel;
  if (upgradeKind === 'energyResonance') return energyResonanceLevel;
  if (upgradeKind === 'energyRefiner') return energyRefinerLevel;
  if (upgradeKind === 'energyPurifier') return energyPurifierLevel;
  if (upgradeKind === 'echoHelp') return echoHelpLevel;
  if (upgradeKind === 'vitalExpander') return vitalExpanderLevel;
  return 0;
}

function consumePendingBossWave(scene) {
  if (!scene || !hasPendingBossWave(scene) || state !== 'playing') return false;
  if (scene.pendingLevelUpgradeChoice) return false;
  if (
    getActiveTimedBooster(scene) ||
    getActiveWaveCountdown(scene) ||
    scene.waveStartEvent ||
    scene.waveResumeEvent ||
    scene.bossCueTween ||
    hasFallingObjects(scene) ||
    hasActivePlasmaBars(scene)
  ) return false;
  const bossConfig = scene.pendingBossWave || scene.pendingBossWaves.shift();
  scene.pendingBossWave = scene.pendingBossWaves && scene.pendingBossWaves.length
    ? scene.pendingBossWaves.shift()
    : null;
  releasePendingStreakRepairKit(scene);
  activateLevelBoss(scene, bossConfig);
  return true;
}

function hasPendingBossWave(scene) {
  return Boolean(scene && (scene.pendingBossWave || (scene.pendingBossWaves && scene.pendingBossWaves.length)));
}

function releasePendingStreakRepairKit(scene) {
  if (!scene || !scene.pendingStreakRepairKit) return;
  scene.pendingStreakRepairKit = false;
  if (!canDropLifeBooster()) return;
  spawnForcedFallingKind(scene, 'lifeBooster', Phaser.Math.Clamp(scene.ship.x, 28, getGameWidth(scene) - 28));
}

function clearPendingStreakReward(scene) {
  if (!scene) return;
  scene.deferUpgradeChoiceUntil = 0;
  scene.pendingLevelUpgradeChoice = false;
  scene.levelUpgradeSequenceActive = false;
  scene.upgradeChoiceOpening = false;
  scene.pendingStreakRepairKit = false;
  if (scene.upgradeChoiceOpenEvent) {
    scene.upgradeChoiceOpenEvent.remove(false);
    scene.upgradeChoiceOpenEvent = null;
  }
  if (scene.deferredUpgradeChoiceEvent) {
    scene.deferredUpgradeChoiceEvent.remove(false);
    scene.deferredUpgradeChoiceEvent = null;
  }
}

function updateUpgradeButtons(scene) {
  if (!scene.upgradeOverlay || !scene.upgradeOverlay.upgradeButtons) return;

  const availableKinds = getAvailableUpgradeKinds();
  const existingChoices = (scene.availableUpgradeChoices || []).filter((upgradeKind) => availableKinds.includes(upgradeKind));
  const choices = availableKinds.length === 1
    ? [availableKinds[0]]
    : existingChoices.length
      ? existingChoices
      : getRandomUpgradeChoices();
  scene.availableUpgradeChoices = choices;
  const buttons = [scene.upgradeOverlay.upgradeButtons.first, scene.upgradeOverlay.upgradeButtons.second];
  buttons.forEach((button, index) => {
    const upgradeKind = choices[index];
    if (!upgradeKind) {
      button.setVisible(false);
      button.disableInteractive();
      button.setData('upgradeKind', null);
      return;
    }

    button.setVisible(true);
    button.setData('upgradeKind', upgradeKind);
    const config = getUpgradeConfig(upgradeKind);
    setUpgradeButtonState(button, config, getUpgradeLevel(upgradeKind));
  });
}

function updateUpgradeStatusIcons(scene) {
  const currentHud = initHud();
  if (!currentHud.upgrades) return;

  currentHud.upgrades.innerHTML = '';
  [
    ['energyRefiner', 'energyPurifier'],
    ['scoreBooster', 'energyResonance'],
    ['shieldBooster', 'echoHelp'],
    ['lifeBooster', 'vitalExpander'],
  ].forEach((upgradePair) => {
    const pairElement = document.createElement('span');
    pairElement.className = 'hud-upgrade-pair';
    currentHud.upgrades.appendChild(pairElement);

    upgradePair.forEach((upgradeKind) => {
      const config = getUpgradeConfig(upgradeKind);
      addUpgradeStatusIcon(scene, upgradeKind, getUpgradeLevel(upgradeKind), config.color, config.label, {
        locked: isUpgradeLockedForHud(upgradeKind),
        lockLabel: getUpgradeLockLabel(upgradeKind),
        lockColor: getUpgradeLockColor(upgradeKind),
        maxLevel: getUpgradeMaxLevel(upgradeKind),
        parent: pairElement,
      });
    });
  });
}

function isUpgradeLockedForHud(upgradeKind) {
  if (upgradeKind === 'energyPurifier') return energyRefinerLevel < MAX_UPGRADE_LEVEL;
  if (upgradeKind === 'echoHelp') return shieldBoosterLevel < MAX_UPGRADE_LEVEL;
  if (upgradeKind === 'vitalExpander') return lifeBoosterLevel < MAX_UPGRADE_LEVEL;
  if (upgradeKind === 'energyResonance') return scoreBoosterLevel < MAX_UPGRADE_LEVEL;
  return false;
}

function getUpgradeLockLabel(upgradeKind) {
  if (upgradeKind === 'energyPurifier') return 'requiere Refinador de energía nivel ' + MAX_UPGRADE_LEVEL;
  if (upgradeKind === 'echoHelp') return 'requiere Barrera protectora nivel ' + MAX_UPGRADE_LEVEL;
  if (upgradeKind === 'vitalExpander') return 'requiere Kit de reparación nivel ' + MAX_UPGRADE_LEVEL;
  if (upgradeKind === 'energyResonance') return 'requiere Catalizador de energía nivel ' + MAX_UPGRADE_LEVEL;
  return 'bloqueada';
}

function getUpgradeLockColor(upgradeKind) {
  if (upgradeKind === 'echoHelp') return 'rgba(77, 163, 255, 0.31)';
  if (upgradeKind === 'vitalExpander') return VITAL_EXPANDER_LOCK_COLOR;
  if (upgradeKind === 'energyResonance') return 'rgba(155, 92, 255, 0.31)';
  return 'rgba(255, 216, 77, 0.31)';
}

function addUpgradeStatusIcon(scene, upgradeKind, level, color, label, options = {}) {
  const currentHud = initHud();
  if (!currentHud.upgrades) return;
  const parent = options.parent || currentHud.upgrades;

  const isLocked = Boolean(options.locked);
  const chip = document.createElement('span');
  chip.className = 'hud-upgrade-chip';
  chip.classList.toggle('is-empty', level <= 0);
  chip.classList.toggle('is-locked', isLocked);
  chip.style.setProperty('--chip-color', color);
  if (options.lockColor) chip.style.setProperty('--lock-color', options.lockColor);
  const isMaxed = level > 0 && level >= (options.maxLevel || MAX_UPGRADE_LEVEL);
  const statusLabel = isMaxed ? 'nivel máximo' : (level > 0 ? 'nivel ' + level : 'sin desbloquear');
  chip.setAttribute('aria-label', label + ': ' + (isLocked ? options.lockLabel : statusLabel));
  chip.setAttribute('role', 'button');
  chip.setAttribute('tabindex', currentHud.root && currentHud.root.classList.contains('is-paused-upgrades-readable') ? '0' : '-1');
  chip.dataset.upgradeKind = upgradeKind;
  chip.textContent = isMaxed ? 'MAX' : (level > 0 ? 'Nv.' + level : '');
  ['pointerdown', 'pointerup', 'touchstart', 'touchend'].forEach((eventName) => {
    chip.addEventListener(eventName, (event) => {
      if (state !== 'paused') return;
      event.stopPropagation();
    }, { passive: true });
  });
  chip.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (state !== 'paused') return;
    playButtonSound(scene);
    showPausedUpgradeDetails(scene, upgradeKind);
  });
  chip.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    event.stopPropagation();
    if (state !== 'paused') return;
    playButtonSound(scene);
    showPausedUpgradeDetails(scene, upgradeKind);
  });
  parent.appendChild(chip);
}

function getPausedUpgradeDescription(upgradeKind, config = getUpgradeConfig(upgradeKind)) {
  const level = getUpgradeLevel(upgradeKind);
  const maxLevel = getUpgradeMaxLevel(upgradeKind);
  const isLocked = isUpgradeLockedForHud(upgradeKind);
  const nextLevel = Math.min(maxLevel, level + 1);
  const lines = [];

  if (isLocked) {
    lines.push('Bloqueada: ' + getUpgradeLockLabel(upgradeKind) + '.');
    lines.push('Cuando se desbloquee: ' + config.getDescription(1));
    return getUpgradeDescriptionLines(lines);
  }

  if (level <= 0) {
    lines.push('Sin desbloquear.');
    lines.push('Próxima mejora: ' + config.getDescription(1));
    return getUpgradeDescriptionLines(lines);
  }

  lines.push('Nivel actual ' + level + '/' + maxLevel + '.');
  lines.push(config.getDescription(level));
  if (level >= maxLevel) {
    lines.push('Mejora al nivel máximo.');
  } else {
    lines.push('Siguiente nivel: ' + config.getDescription(nextLevel));
  }
  return getUpgradeDescriptionLines(lines);
}

function isEnergyPurifierActive() {
  return energyPurifierLevel > 0;
}

function setUpgradeButtonState(button, config, level) {
  const maxLevel = config.maxLevel || MAX_UPGRADE_LEVEL;
  const isMaxed = level >= maxLevel;
  const nextLevel = Math.min(maxLevel, level + 1);
  const title = config.label + (isMaxed ? ' MAX' : maxLevel === 1 ? '' : ' ' + nextLevel);
  const description = isMaxed ? 'Mejora al nivel máximo.' : config.getDescription(nextLevel);
  button.setAlpha(1);
  if (button.setContent) {
    button.setContent(title, description);
  } else {
    button.setText(title + '\n' + description);
  }
  button.setStyle({
    backgroundColor: isMaxed ? '#5f6678' : config.color,
    fill: isMaxed ? '#cfd5e1' : '#10162a',
  });
  button.disableInteractive();
  if (!isMaxed) {
    button.setInteractive({ useHandCursor: true });
  }
}
