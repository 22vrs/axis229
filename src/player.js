// Movimiento, controles y presentacion de la nave del jugador.
// Incluye limites, arrastre, inclinacion, escudo visual y fondo espacial.

function isPointerOverShip(scene, pointer) {
  return isGamePointOverShip(scene, pointer.x, pointer.y);
}

function canStartShipDrag(scene, x, y, isResume = false) {
  if (usesXyControlHandle(scene)) {
    return isGamePointOverXyControl(scene, x, y, isResume ? XY_CONTROL_TOUCH_PADDING : 0);
  }

  return isResume
    ? canResumeFromShipPoint(scene, x, y)
    : isGamePointOverShip(scene, x, y);
}

function canResumeFromShipPoint(scene, x, y) {
  return isGamePointOverShip(scene, x, y, SHIP_RESUME_TOUCH_PADDING_X, SHIP_RESUME_TOUCH_PADDING_Y);
}

function startDraggingShipAt(scene, x, y) {
  if (state !== 'playing') return;
  isDraggingShip = true;
  scene.input.setDefaultCursor('grabbing');
  setXyControlActive(scene, true);
  setXyControlVisible(scene, false);
  const position = getDraggedShipPosition(scene, x, y);
  moveShipTo(scene, position.x, position.y);
}

function isGamePointOverShip(scene, x, y, paddingX = 0, paddingY = 0) {
  if (!scene || !scene.ship) return false;

  const halfWidth = getShipWidth(scene) / 2;
  const halfHeight = SHIP_HEIGHT / 2;

  return (
    x >= scene.ship.x - halfWidth - paddingX &&
    x <= scene.ship.x + halfWidth + paddingX &&
    y >= scene.ship.y - halfHeight - paddingY &&
    y <= scene.ship.y + halfHeight + paddingY
  );
}

function isGamePointOverXyControl(scene, x, y, padding = 0) {
  if (!scene || !scene.xyControl || !scene.xyControl.visible) return false;
  const radius = XY_CONTROL_RADIUS + padding;
  const distance = Phaser.Math.Distance.Between(x, y, scene.xyControl.x, scene.xyControl.y);
  return distance <= radius;
}

function bindPausedShipResumeFallback(scene) {
  const container = document.getElementById('game-container');
  if (!container || container.dataset.resumeFallbackBound === '1') return;
  container.dataset.resumeFallbackBound = '1';

  const resumeFromEvent = (event) => {
    if (state !== 'paused') return;
    if (event.target && event.target.closest && event.target.closest('.ui-panel')) return;
    if (scene.optionsOverlay && scene.optionsOverlay.element && scene.optionsOverlay.element.classList.contains('is-visible')) return;

    const point = getGamePointFromClient(scene, event.clientX, event.clientY);
    if (!point) return;
    if (!canHandlePausedResumePointer(scene, point.x, point.y)) return;

    event.preventDefault();
    event.stopPropagation();
    handlePausedResumePointer(scene, point.x, point.y);
  };

  container.addEventListener('pointerdown', resumeFromEvent, { capture: true });
  container.addEventListener('pointermove', (event) => {
    if (!isDraggingShip || state !== 'playing') return;
    const point = getGamePointFromClient(scene, event.clientX, event.clientY);
    if (!point) return;
    const position = getDraggedShipPosition(scene, point.x, point.y);
    moveShipTo(scene, position.x, position.y);
  }, { capture: true });

  window.addEventListener('pointerup', () => pauseIfDraggingShip(scene));
  window.addEventListener('pointercancel', () => pauseIfDraggingShip(scene));
}

function canHandlePausedResumePointer(scene, x, y) {
  if (isFrozenPauseMenuOpen(scene)) return false;
  if (isUpgradePauseOverlayVisible(scene) && !scene.xyPauseResumeArmed) return true;
  return canStartShipDrag(scene, x, y, true);
}

function handlePausedResumePointer(scene, x, y) {
  if (!scene || state !== 'paused') return false;
  if (isFrozenPauseMenuOpen(scene)) return false;

  if (isUpgradePauseOverlayVisible(scene) && !scene.xyPauseResumeArmed) {
    armControlPauseResume(scene);
    return true;
  }

  if (!canStartShipDrag(scene, x, y, true)) return false;

  resumeGame.call(scene);
  startDraggingShipAt(scene, x, y);
  return true;
}

function isFrozenPauseMenuOpen(scene) {
  return Boolean(
    scene &&
    scene.pauseOverlay &&
    scene.pauseOverlay.element &&
    scene.pauseOverlay.element.classList.contains('is-visible') &&
    scene.pauseOverlay.element.classList.contains('is-frozen-pause-menu')
  );
}

function isUpgradePauseOverlayVisible(scene) {
  return Boolean(
    scene &&
    scene.pauseOverlay &&
    scene.pauseOverlay.element &&
    scene.pauseOverlay.element.classList.contains('is-visible') &&
    scene.pauseOverlay.element.classList.contains('is-upgrade-pause')
  );
}

function pauseIfDraggingShip(scene) {
  const wasDragging = isDraggingShip;
  isDraggingShip = false;
  setXyControlActive(scene, false);
  hideXyBottomFriction(scene);
  if (state !== 'playing') return;
  scene.input.setDefaultCursor('default');
  if (wasDragging) {
    pauseGame.call(scene);
  }
}

function getGamePointFromClient(scene, clientX, clientY) {
  const canvas = scene && scene.game && scene.game.canvas;
  if (!canvas) return null;

  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return null;

  return {
    x: (clientX - rect.left) * (getGameWidth(scene) / rect.width),
    y: (clientY - rect.top) * (getGameHeight(scene) / rect.height),
  };
}

function update(time, delta) {
  if (state === 'intro') {
    updateSpaceBackground(this, delta, time);
    if (this.ship && this.ship.visible) {
      updateShipPropulsion(this, delta);
      updateShipEyeGlow(this);
    }
    updateEchoEyePosition(this);
    return;
  }
  if (state === 'tutorial') {
    updateSpaceBackground(this, delta, time);
    updateShipPropulsion(this, delta);
    updateShipEyeGlow(this);
    updateEchoCompanion(this, delta);
    return;
  }
  if (state === 'leveling') {
    updateSpaceBackground(this, delta, time);
    updateShipPropulsion(this, delta);
    updateShipEyeGlow(this);
    updateEchoCompanion(this, delta);
    return;
  }
  if (state !== 'playing') return;

  updateGameplayTime(this, delta);
  updateSpaceBackground(this, delta, time);
  updateShipPropulsion(this, delta);
  updateShipTilt(this);
  updateShipEyeGlow(this);
  updateShipLifeIndicator(this);
  updateEchoCompanion(this, delta);
  updateEchoAttacks(this);
  updateEnemyPropulsion(this, delta);
  updateRedNeedles(this);
  updateScissors(this);
  updateRedEnemySway(this, time);
  updateReplicators(this, time, delta);
  updateSpikeDrones(this);
  updateGiroDrones(this, delta);
  updateScoreBooster(this);
  updateShieldBooster(this);
  updateRedWave(this);
  updateDroneWave(this);
  updateAsteroidWave(this);
  updatePlasmaWave(this);
  updatePlasmaBars(this, delta);
  updateBossWave(this);
  recoverGameplaySpawning(this);

  // Comprobar si alguna bola ha llegado al fondo
  this.balls.getChildren().forEach((ball) => {
    if (ball.active && ball.y > getGameHeight(this) + 32) {
      if (isCollectibleBallKind(ball.getData('kind'))) {
        ball.destroy();
        resetEnergyStreak();
        playBadSound(this);
        loseLife(this);
      } else {
        ball.destroy();
      }
    } else if (ball.active && isAsteroidKind(ball.getData('kind'))) {
      wrapAsteroidHorizontally(this, ball);
    }
  });
}

function moveShipTo(scene, x, y = scene.ship ? scene.ship.y : getShipY(scene)) {
  const previousX = scene.ship.x;
  const previousY = scene.ship.y;
  const deltaX = x - previousX;
  const deltaY = y - previousY;
  const now = scene.time ? scene.time.now : 0;
  const elapsedSinceLastMove = scene.lastShipMoveAt ? Math.max(16, now - scene.lastShipMoveAt) : 16;
  scene.previousShipPosition = { x: previousX, y: previousY, at: now };
  scene.ship.setPosition(x, y);
  scene.ship.body.reset(x, y);
  if ((Math.abs(deltaX) > 0.4 || Math.abs(deltaY) > 0.4) && state === 'playing') {
    const horizontalVelocity = deltaX / elapsedSinceLastMove;
    const verticalVelocity = deltaY / elapsedSinceLastMove;
    scene.shipTiltVelocityX = Phaser.Math.Linear(
      scene.shipTiltVelocityX || 0,
      horizontalVelocity,
      SHIP_TILT_VELOCITY_SMOOTHING
    );
    scene.shipTiltVelocityY = Phaser.Math.Linear(
      scene.shipTiltVelocityY || 0,
      verticalVelocity,
      SHIP_TILT_VELOCITY_SMOOTHING
    );
    const rawTargetAngle = getShipMovementTargetAngle(scene);
    scene.shipTargetAngle = Phaser.Math.Linear(
      scene.shipTargetAngle || 0,
      rawTargetAngle,
      SHIP_TILT_TARGET_SMOOTHING
    );
    scene.lastShipMoveAt = now;
  }
  updateShieldBubble(scene);
  updateEchoCompanion(scene, 0);
  updateShipEyeGlow(scene);
  updateShipLifeIndicator(scene);
  if (usesXyControlHandle(scene) && scene.xyControl && scene.xyControl.visible && !isDraggingShip) {
    updateXyControlFromShip(scene);
  }
}

function updateShipEyeGlow(scene) {
  if (!scene || !scene.ship || !scene.shipEyeGlow || !scene.shipEyeCore) return;

  const angle = Phaser.Math.DegToRad(scene.ship.angle || 0);
  const offsetX = SHIP_EYE_LOCAL_X * SHIP_SCALE;
  const offsetY = SHIP_EYE_LOCAL_Y * SHIP_SCALE;
  const rotatedX = (Math.cos(angle) * offsetX) - (Math.sin(angle) * offsetY);
  const rotatedY = (Math.sin(angle) * offsetX) + (Math.cos(angle) * offsetY);
  const x = scene.ship.x + rotatedX;
  const y = scene.ship.y + rotatedY;
  const visible = Boolean(scene.ship.visible !== false && (scene.shipEyeGlow.alpha > 0 || scene.shipEyeCore.alpha > 0));

  [scene.shipEyeGlow, scene.shipEyeCore].forEach((eyePart) => {
    eyePart.setPosition(x, y);
    eyePart.setRotation(scene.ship.rotation || 0);
    eyePart.setVisible(visible);
  });
}

function flashShipEye(scene) {
  if (!scene || !scene.shipEyeGlow || !scene.shipEyeCore || !scene.tweens) return;

  scene.tweens.killTweensOf([scene.shipEyeGlow, scene.shipEyeCore]);
  updateShipEyeGlow(scene);
  scene.shipEyeGlow
    .setFillStyle(0xffd84d, 1)
    .setAlpha(0.42)
    .setScale(0.72)
    .setVisible(true);
  scene.shipEyeCore
    .setFillStyle(0xffffb8, 1)
    .setAlpha(0.95)
    .setScale(0.82)
    .setVisible(true);

  scene.tweens.add({
    targets: scene.shipEyeGlow,
    alpha: 0,
    scale: 1.24,
    duration: 260,
    ease: 'Sine.easeOut',
    onUpdate: () => updateShipEyeGlow(scene),
    onComplete: () => updateShipEyeGlow(scene),
  });
  scene.tweens.add({
    targets: scene.shipEyeCore,
    alpha: 0,
    scale: 1.08,
    duration: 210,
    ease: 'Sine.easeOut',
    onUpdate: () => updateShipEyeGlow(scene),
    onComplete: () => updateShipEyeGlow(scene),
  });
}

function updateShipTilt(scene) {
  if (!scene.ship) return;

  const now = scene.time ? scene.time.now : 0;
  if (!scene.lastShipMoveAt || now - scene.lastShipMoveAt > SHIP_TILT_IDLE_DELAY) {
    scene.shipTiltVelocityX = Phaser.Math.Linear(scene.shipTiltVelocityX || 0, 0, SHIP_TILT_RETURN_SMOOTHING);
    scene.shipTiltVelocityY = Phaser.Math.Linear(scene.shipTiltVelocityY || 0, 0, SHIP_TILT_RETURN_SMOOTHING);
    scene.shipTargetAngle = Phaser.Math.Linear(scene.shipTargetAngle || 0, 0, SHIP_TILT_RETURN_SMOOTHING);
  }

  const targetAngle = scene.shipTargetAngle || 0;
  const smoothing = Math.abs(targetAngle) < Math.abs(scene.ship.angle || 0)
    ? SHIP_TILT_RETURN_SMOOTHING
    : SHIP_TILT_SMOOTHING;
  scene.ship.setAngle(Phaser.Math.Linear(scene.ship.angle || 0, targetAngle, smoothing));
  if (Math.abs(scene.ship.angle) < 0.05 && Math.abs(targetAngle) < 0.05) {
    scene.ship.setAngle(0);
  }
  updateShipEyeGlow(scene);
}

function getShipMovementTargetAngle(scene) {
  const velocityX = scene.shipTiltVelocityX || 0;
  const velocityY = scene.shipTiltVelocityY || 0;

  if (isXyGameMode()) {
    const verticalInfluence = Math.max(0.28, Math.abs(velocityY) * SHIP_XY_DIRECTION_VERTICAL_WEIGHT);
    const directionAngle = Phaser.Math.RadToDeg(Math.atan2(velocityX, verticalInfluence));
    const movementSpeed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
    const speedRatio = Phaser.Math.Clamp(movementSpeed / SHIP_TILT_FULL_SPEED, 0, 1);
    return Phaser.Math.Clamp(
      directionAngle * speedRatio,
      -SHIP_XY_DIRECTION_MAX_TILT,
      SHIP_XY_DIRECTION_MAX_TILT
    );
  }

  const speedRatio = Phaser.Math.Clamp(Math.abs(velocityX) / SHIP_TILT_FULL_SPEED, 0, 1);
  const speedToAngle = SHIP_TILT_SPEED_TO_ANGLE + speedRatio * SHIP_TILT_SPEED_ANGLE_BOOST;
  return Phaser.Math.Clamp(
    velocityX * speedToAngle,
    -SHIP_MAX_TILT,
    SHIP_MAX_TILT
  );
}

function refreshShipSize(scene) {
  scene.ship.setScale(SHIP_SCALE, SHIP_SCALE);
  if (isShieldActive(scene)) {
    scene.ship.body.setSize(SHIELD_BUBBLE_DIAMETER / SHIP_SCALE, SHIELD_BUBBLE_DIAMETER / SHIP_SCALE, true);
    return;
  }

  scene.ship.body.setSize(SHIP_TEXTURE_WIDTH, SHIP_TEXTURE_HEIGHT, true);
}

function setShipTextureForCurrentState(scene) {
  if (!scene.ship) return;

  scene.ship.setTexture('ship');
}

function getGameWidth(scene) {
  return GAME_WIDTH;
}

function getGameHeight(scene) {
  return GAME_HEIGHT;
}

function getShipY(scene) {
  return getGameHeight(scene) - 132;
}

function getShipWidth(scene) {
  return SHIP_WIDTH;
}

function updateShieldBubble(scene) {
  if (!scene.shieldBubble || !scene.ship) return;

  scene.shieldBubble.clear();
  if (!isShieldActive(scene)) {
    scene.shieldBubble.setVisible(false);
    return;
  }

  scene.shieldBubble.setVisible(true);
  for (let i = 0; i < 12; i += 1) {
    const t = i / 11;
    const radius = SHIELD_BUBBLE_RADIUS * (1 - t * 0.58);
    const alpha = 0.018 + t * 0.022;
    scene.shieldBubble.fillStyle(0x4da3ff, alpha);
    scene.shieldBubble.fillCircle(scene.ship.x, scene.ship.y, radius);
  }
  scene.shieldBubble.lineStyle(5, 0x4da3ff, 0.08);
  scene.shieldBubble.strokeCircle(scene.ship.x, scene.ship.y, SHIELD_BUBBLE_RADIUS + 3);
  scene.shieldBubble.lineStyle(3, 0x9fd9ff, 0.34);
  scene.shieldBubble.strokeCircle(scene.ship.x, scene.ship.y, SHIELD_BUBBLE_RADIUS - 2);
  scene.shieldBubble.lineStyle(1, 0xffffff, 0.2);
  scene.shieldBubble.strokeCircle(scene.ship.x, scene.ship.y, SHIELD_BUBBLE_RADIUS - 12);
}


function getShipHitboxPolygon(scene) {
  const x = scene.ship.x;
  const y = scene.ship.y;
  return [
    { x, y: y - 18 },
    { x: x + 40, y: y - 10 },
    { x: x + 67, y: y + 5 },
    { x: x + 44, y: y + 16 },
    { x: x + 15, y: y + 19 },
    { x: x - 15, y: y + 19 },
    { x: x - 44, y: y + 16 },
    { x: x - 67, y: y + 5 },
    { x: x - 40, y: y - 10 },
  ];
}

function getLivesY(scene) {
  return 72;
}

function clampShipX(scene, x) {
  const shipWidth = getShipWidth(scene);
  const halfShipWidth = shipWidth / 2;
  const hiddenWidth = shipWidth * SHIP_SIDE_HIDE_RATIO;
  const centerX = getGameWidth(scene) / 2;
  const minX = halfShipWidth - hiddenWidth;
  const maxX = getGameWidth(scene) - minX;
  if (minX >= maxX) return centerX;
  return Phaser.Math.Clamp(x, minX, maxX);
}

function clampShipY(scene, y) {
  const halfShipHeight = SHIP_HEIGHT / 2;
  const centerY = getGameHeight(scene) / 2;
  const minY = halfShipHeight;
  const maxY = getGameHeight(scene) - halfShipHeight;
  if (minY >= maxY) return centerY;
  return Phaser.Math.Clamp(y, minY, maxY);
}

function clampShipPosition(scene, x, y) {
  return {
    x: clampShipX(scene, x),
    y: clampShipY(scene, y),
  };
}

function getXyControlHomePosition(scene) {
  return {
    x: getGameWidth(scene) / 2,
    y: getGameHeight(scene) - XY_CONTROL_BOTTOM_MARGIN,
  };
}

function getXyShipTopLimit(scene) {
  return RED_NEEDLE_Y;
}

function getXyControlTopLimit(scene) {
  return getXyShipTopLimit(scene) + XY_CONTROL_SHIP_OFFSET_Y;
}

function getXyControlBottomLimit(scene) {
  return getGameHeight(scene) - XY_CONTROL_RADIUS - 10;
}

function getXyShipBottomLimit(scene) {
  return getXyControlBottomLimit(scene) - XY_CONTROL_SHIP_OFFSET_Y;
}

function clampXyControlPosition(scene, x, y) {
  const minY = getXyControlTopLimit(scene);
  const maxY = getXyControlBottomLimit(scene);
  const controlY = Phaser.Math.Clamp(y, minY, Math.max(minY, maxY));
  const shipPosition = clampShipPosition(scene, x, controlY - XY_CONTROL_SHIP_OFFSET_Y);

  return {
    x: shipPosition.x,
    y: shipPosition.y + XY_CONTROL_SHIP_OFFSET_Y,
  };
}

function moveXyControlTo(scene, x, y) {
  if (!scene || !scene.xyControl) return;
  scene.xyControl.setPosition(x, y);
  if (scene.xyControlPulse) scene.xyControlPulse.setPosition(x, y);
}

function updateXyControlFromShip(scene) {
  if (!scene || !scene.ship || !scene.xyControl) return;
  moveXyControlTo(scene, scene.ship.x, scene.ship.y + XY_CONTROL_SHIP_OFFSET_Y);
}

function setXyControlVisible(scene, visible) {
  if (!scene || !scene.xyControl) return;
  scene.xyControl.setVisible(Boolean(visible));
  if (scene.xyControlPulse) scene.xyControlPulse.setVisible(Boolean(visible));
}

function setXyControlActive(scene, active) {
  if (!scene || !scene.xyControl) return;
  scene.xyControl.setScale(active ? 0.92 : 1);
  scene.xyControl.setAlpha(0.78);
  if (scene.xyControlPulse) scene.xyControlPulse.setAlpha(0.1);
}

function usesXyControlHandle(scene) {
  return Boolean(scene && scene.xyControl && scene.xyControl.visible);
}

function prepareXyPauseResume(scene) {
  if (!scene || !isXyGameMode()) return;
  scene.xyPauseResumeArmed = false;
  setXyControlVisible(scene, true);
  updateXyControlFromShip(scene);
}

function prepareControlPauseResume(scene) {
  if (!scene) return;
  if (isXyGameMode()) {
    prepareXyPauseResume(scene);
    return;
  }

  scene.xyPauseResumeArmed = false;
  setXyControlVisible(scene, true);
  updateXyControlFromShip(scene);
}

function armControlPauseResume(scene) {
  if (!scene) return;
  scene.xyPauseResumeArmed = true;
  showOverlayScreen(scene, null);
  updateXyControlFromShip(scene);
  setXyControlActive(scene, false);
  if (scene.input) scene.input.setDefaultCursor('default');
}

function showXyBottomFriction(scene, x) {
  showXyEdgeFriction(scene, x, 'bottom');
}

function showXyTopFriction(scene, x) {
  showXyEdgeFriction(scene, x, 'top');
}

function showXyEdgeFriction(scene, x, edge) {
  if (!scene || !scene.xyBottomFriction || !isXyGameMode()) return;
  const isTopEdge = edge === 'top';
  const wallY = isTopEdge
    ? getXyShipTopLimit(scene) - SHIP_HEIGHT / 2 - 3
    : getXyShipBottomLimit(scene) + SHIP_HEIGHT / 2 + 3;
  const direction = isTopEdge ? -1 : 1;
  const halfWidth = Math.min(74, getShipWidth(scene) * 0.56);
  const centerX = x;
  const graphics = scene.xyBottomFriction;

  if (scene.xyBottomFrictionTween) {
    scene.xyBottomFrictionTween.stop();
    scene.xyBottomFrictionTween = null;
  }

  graphics.clear();
  graphics.setPosition(centerX, wallY);
  graphics.setVisible(true);
  graphics.setAlpha(1);
  graphics.setScale(1, 1);

  graphics.fillStyle(0x4da3ff, 0.12);
  graphics.fillEllipse(0, 6 * direction, halfWidth * 1.85, 24);
  graphics.fillStyle(0x76ffe8, 0.1);
  graphics.fillEllipse(0, 12 * direction, halfWidth * 1.25, 12);

  scene.xyBottomFrictionTween = scene.tweens.add({
    targets: graphics,
    alpha: 0.24,
    scaleX: 1.08,
    scaleY: 0.96,
    duration: XY_BOTTOM_FRICTION_FADE_DURATION,
    ease: 'Sine.easeOut',
  });

  emitXyEdgeFrictionParticles(scene, centerX, wallY, halfWidth, direction);
}

function hideXyBottomFriction(scene) {
  if (!scene || !scene.xyBottomFriction) return;
  if (scene.xyBottomFrictionTween) {
    scene.xyBottomFrictionTween.stop();
    scene.xyBottomFrictionTween = null;
  }
  scene.xyBottomFriction.clear();
  scene.xyBottomFriction.setVisible(false);
  scene.xyBottomFriction.setAlpha(1);
  scene.xyBottomFriction.setScale(1, 1);
}

function emitXyEdgeFrictionParticles(scene, centerX, wallY, halfWidth, direction) {
  if (!scene || !scene.add || !scene.tweens) return;
  const now = scene.time ? scene.time.now : 0;
  if (scene.nextXyEdgeFrictionParticleAt && now < scene.nextXyEdgeFrictionParticleAt) return;
  scene.nextXyEdgeFrictionParticleAt = now + XY_EDGE_FRICTION_PARTICLE_COOLDOWN;

  for (let i = 0; i < 4; i += 1) {
    const particle = trackGameplayVisual(scene, scene.add.image(
      centerX + Phaser.Math.Between(-halfWidth, halfWidth),
      wallY + Phaser.Math.Between(-2, 5) * direction,
      'goldTrailParticle'
    ));
    const driftX = Phaser.Math.Between(-16, 16);
    const driftY = Phaser.Math.Between(12, 28) * -direction;

    particle
      .setDepth(FX_DEPTH + 5)
      .setTint(i % 2 === 0 ? 0x76ffe8 : 0x4da3ff)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setScale(Phaser.Math.FloatBetween(0.7, 1.4))
      .setAlpha(0.85);

    scene.tweens.add({
      targets: particle,
      x: particle.x + driftX,
      y: particle.y + driftY,
      scale: 0.15,
      alpha: 0,
      duration: Phaser.Math.Between(180, 280),
      ease: 'Sine.easeOut',
      onComplete: () => particle.destroy(),
    });
  }
}

function resetXyShipControl(scene) {
  if (!scene || !scene.ship) return;
  const controlPosition = clampXyControlPosition(
    scene,
    getGameWidth(scene) / 2,
    getXyControlHomePosition(scene).y
  );
  moveShipTo(scene, controlPosition.x, controlPosition.y - XY_CONTROL_SHIP_OFFSET_Y);
  moveXyControlTo(scene, controlPosition.x, controlPosition.y);
}

function getDraggedShipPosition(scene, x, y) {
  if (isXyGameMode()) {
    const controlPosition = clampXyControlPosition(scene, x, y);
    moveXyControlTo(scene, controlPosition.x, controlPosition.y);
    if (y < getXyControlTopLimit(scene) - 2) {
      showXyTopFriction(scene, controlPosition.x);
    } else if (y > getXyControlBottomLimit(scene) + 2) {
      showXyBottomFriction(scene, controlPosition.x);
    } else {
      hideXyBottomFriction(scene);
    }
    return {
      x: controlPosition.x,
      y: controlPosition.y - XY_CONTROL_SHIP_OFFSET_Y,
    };
  }

  const controlX = clampShipX(scene, x);
  moveXyControlTo(scene, controlX, getShipY(scene) + XY_CONTROL_SHIP_OFFSET_Y);
  return {
    x: controlX,
    y: getShipY(scene),
  };
}

function createBackground(scene) {
  const width = getGameWidth(scene);
  const height = getGameHeight(scene);
  const layer = scene.backgroundLayer || scene.add.container(0, 0);

  layer.removeAll(true);
  const gradientKey = createBackgroundGradientTexture(scene, width, height);
  layer.add(scene.add.image(0, 0, gradientKey).setOrigin(0));
  ensureStarfieldTextures(scene);

  scene.starfieldLayers = STARFIELD_LAYERS.map((starLayer) => {
    const tile = scene.add.tileSprite(0, 0, width, height, starLayer.key).setOrigin(0);
    tile.setAlpha(starLayer.alpha);
    tile.setBlendMode(Phaser.BlendModes.ADD);
    layer.add(tile);
    return { tile, baseSpeedX: starLayer.speedX, baseSpeedY: starLayer.speedY };
  });
}

function createBackgroundGradientTexture(scene, width, height) {
  const key = 'backgroundGradient';
  if (scene.textures.exists(key)) {
    scene.textures.remove(key);
  }

  const texture = scene.textures.createCanvas(key, width, height);
  const context = texture.getContext();
  const fadeStart = Phaser.Math.Clamp(BACKGROUND_FIRST_COLOR_RATIO, 0, 1);
  const fadeEnd = Phaser.Math.Clamp(fadeStart + BACKGROUND_GRADIENT_FADE_RATIO, fadeStart, 1);
  const gradient = context.createLinearGradient(0, 0, 0, height);

  gradient.addColorStop(0, BACKGROUND_FIRST_COLOR);
  gradient.addColorStop(fadeStart, BACKGROUND_FIRST_COLOR);
  gradient.addColorStop(fadeEnd, BACKGROUND_SECOND_COLOR);
  gradient.addColorStop(1, BACKGROUND_SECOND_COLOR);

  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
  texture.refresh();
  return key;
}

function ensureStarfieldTextures(scene) {
  STARFIELD_LAYERS.forEach((starLayer) => {
    if (scene.textures.exists(starLayer.key)) return;

    const graphics = scene.make.graphics({ x: 0, y: 0, add: false });
    STARFIELD_LAYERS.forEach((layerConfig) => {
      if (layerConfig.key !== starLayer.key) return;
      graphics.fillStyle(layerConfig.color, 1);
      for (let i = 0; i < layerConfig.count; i += 1) {
        const radius = Phaser.Math.FloatBetween(layerConfig.minRadius, layerConfig.maxRadius);
        graphics.fillCircle(
          Phaser.Math.Between(0, STARFIELD_TEXTURE_WIDTH),
          Phaser.Math.Between(0, STARFIELD_TEXTURE_HEIGHT),
          radius
        );
      }
    });
    graphics.generateTexture(starLayer.key, STARFIELD_TEXTURE_WIDTH, STARFIELD_TEXTURE_HEIGHT);
    graphics.destroy();
  });
}
