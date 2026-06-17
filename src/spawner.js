// Spawn, colisiones y comportamiento de objetos que caen.
// Este sistema decide que aparece, donde aparece y como se resuelve al tocar la nave o el escudo.

function pauseFallingObjects(scene) {
  scene.balls.getChildren().forEach((ball) => {
    if (!ball.active) return;
    if (ball.getData('pausedAngularVelocity') === undefined) {
      ball.setData('pausedAngularVelocity', ball.body.angularVelocity || 0);
      ball.setAngularVelocity(0);
    }
    ball.body.setVelocityX(0);
    ball.body.setVelocityY(0);
  });
}

function resumeFallingObjects(scene) {
  scene.balls.getChildren().forEach((ball) => {
    if (!ball.active) return;
    const kind = ball.getData('kind');
    const pausedAngularVelocity = ball.getData('pausedAngularVelocity');
    if (pausedAngularVelocity !== undefined) {
      ball.setAngularVelocity(pausedAngularVelocity);
      ball.setData('pausedAngularVelocity', undefined);
    }
    ball.body.setVelocityX(getHorizontalVelocity(kind, scene, ball));
    ball.body.setVelocityY(getFallingVelocity(kind, scene, ball));
  });

  if (scene.plasmaBars) {
    scene.plasmaBars.forEach((bar) => {
      if (!bar || !bar.active) return;
      if (bar.pausedGapVelocity !== undefined) {
        bar.gapVelocity = bar.pausedGapVelocity;
        delete bar.pausedGapVelocity;
      }
      delete bar.pausedVelocityY;
    });
  }
}

function getDistanceToShipHitbox(scene, object) {
  const polygon = getShipHitboxPolygon(scene);
  if (isPointInPolygon(object.x, object.y, polygon)) return 0;

  return polygon.reduce((closest, point, index) => {
    const nextPoint = polygon[(index + 1) % polygon.length];
    return Math.min(closest, getPointToSegmentDistance(object.x, object.y, point, nextPoint));
  }, Infinity);
}

function isPreciseShipOverlap(scene, objectA, objectB) {
  const object = getCaughtObject(scene, objectA, objectB);
  if (!object) return false;
  if (object.getData('kind') === 'spikeDrone') {
    const spikeState = object.getData('spikeState');
    if (spikeState === 'disabled' && !isShieldActive(scene)) return false;
    if (spikeState !== 'expanded' && !isSpikeDroneGreenState(spikeState) && !isShieldActive(scene)) return false;
  }
  if (object.getData('kind') === 'giroDrone') return isGiroDroneOverlappingShip(scene, object);
  if (object.getData('kind') === 'redNeedle') return isRedNeedleOverlappingShip(scene, object);
  if (object.getData('kind') === 'redNeedleLaser') return isRedNeedleLaserOverlappingShip(scene, object);
  if (object.getData('kind') === 'damageBooster') return isDamageBoosterOverlappingShip(scene, object);
  if (isScissorKind(object.getData('kind'))) return isScissorOverlappingShip(scene, object);
  if (object.getData('kind') === 'replicator') {
    return isRectOverlappingShip(scene, object.x, object.y, REPLICATOR_HITBOX_WIDTH, REPLICATOR_HITBOX_HEIGHT);
  }

  if (isShieldActive(scene) && isShieldBlockedKind(object.getData('kind'))) {
    return getDistanceToShieldCenter(scene, object) <= SHIELD_BUBBLE_RADIUS + getObjectCollisionRadius(object);
  }

  return getDistanceToShipHitbox(scene, object) <= getObjectCollisionRadius(object);
}

function isRedNeedleLaserOverlappingShip(scene, laser) {
  return isRectOverlappingShip(scene, laser.x, laser.y, RED_NEEDLE_LASER_WIDTH, RED_NEEDLE_LASER_HEIGHT);
}

function isRedNeedleOverlappingShip(scene, needle, scale = needle.scaleX || 1) {
  return isRectOverlappingShip(
    scene,
    needle.x,
    needle.y,
    (RED_NEEDLE_WIDTH - 12) * Math.abs(scale),
    (RED_NEEDLE_HEIGHT - 6) * Math.abs(scale)
  );
}

function isDamageBoosterOverlappingShip(scene, enemy) {
  return isRectOverlappingShip(scene, enemy.x, enemy.y, RED_ENEMY_HITBOX_WIDTH, RED_ENEMY_HITBOX_HEIGHT);
}

function isScissorOverlappingShip(scene, enemy) {
  return isRectOverlappingShip(
    scene,
    enemy.x,
    enemy.y,
    isScissorHalfKind(enemy.getData('kind')) ? SCISSOR_HALF_HITBOX_WIDTH : SCISSOR_HITBOX_WIDTH,
    isScissorHalfKind(enemy.getData('kind')) ? SCISSOR_HALF_HITBOX_HEIGHT : SCISSOR_HITBOX_HEIGHT
  );
}

function isGiroDroneOverlappingShip(scene, giroDrone) {
  if (giroDrone.getData('spikeState') === 'disabled') return false;
  const giroState = giroDrone.getData('spikeState');
  if (
    isGiroDroneCoreOverlappingShip(scene, giroDrone) &&
    (isGiroDroneGreenState(giroState) || isGiroDroneOrangeState(giroState))
  ) {
    return true;
  }
  if (giroState === 'expanded' && isGiroDroneDamageHaloOverlappingShip(scene, giroDrone)) return true;

  const satellite = giroDrone.getData('orbitSatellite');
  if (!satellite || satellite.active === false) return false;
  return isGiroDroneDamageHaloOverlappingShip(scene, satellite);
}

function isGiroDroneDamageHaloOverlappingShip(scene, object) {
  if (isShieldActive(scene)) {
    const distance = Phaser.Math.Distance.Between(scene.ship.x, scene.ship.y, object.x, object.y);
    return distance <= SHIELD_BUBBLE_RADIUS + GIRODRONE_DAMAGE_HALO_RADIUS;
  }

  return getDistanceToShipHitbox(scene, object) <= GIRODRONE_DAMAGE_HALO_RADIUS;
}

function isGiroDroneCoreOverlappingShip(scene, giroDrone) {
  if (isShieldActive(scene)) {
    return getDistanceToShieldCenter(scene, giroDrone) <= SHIELD_BUBBLE_RADIUS + GIRODRONE_CORE_RADIUS;
  }

  return getDistanceToShipHitbox(scene, giroDrone) <= GIRODRONE_CORE_RADIUS;
}

function isRectOverlappingShip(scene, x, y, width, height) {
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const left = x - halfWidth;
  const right = x + halfWidth;
  const top = y - halfHeight;
  const bottom = y + halfHeight;

  if (isShieldActive(scene)) {
    const closestX = Phaser.Math.Clamp(scene.ship.x, left, right);
    const closestY = Phaser.Math.Clamp(scene.ship.y, top, bottom);
    const distanceX = scene.ship.x - closestX;
    const distanceY = scene.ship.y - closestY;
    return distanceX * distanceX + distanceY * distanceY <= SHIELD_BUBBLE_RADIUS * SHIELD_BUBBLE_RADIUS;
  }

  const shipPolygon = getShipHitboxPolygon(scene);
  const rectCorners = [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom },
  ];

  return shipPolygon.some((point) => (
    point.x >= left &&
    point.x <= right &&
    point.y >= top &&
    point.y <= bottom
  )) || rectCorners.some((point) => isPointInPolygon(point.x, point.y, shipPolygon)) || (
    x >= scene.ship.x - getShipWidth(scene) / 2 &&
    x <= scene.ship.x + getShipWidth(scene) / 2 &&
    bottom >= scene.ship.y - SHIP_HEIGHT / 2 &&
    top <= scene.ship.y + SHIP_HEIGHT / 2
  );
}

function getDistanceToShieldCenter(scene, object) {
  const distanceX = object.x - scene.ship.x;
  const distanceY = object.y - scene.ship.y;
  return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
}

function getObjectCollisionRadius(object) {
  const kind = object.getData('kind');
  if (kind === 'redNeedle') return RED_NEEDLE_WIDTH / 2;
  if (kind === 'redNeedleLaser') return RED_NEEDLE_LASER_WIDTH / 2;
  if (kind === 'damageBooster') return RED_ENEMY_SHIELD_RADIUS;
  if (kind === 'scissor') return SCISSOR_HITBOX_HEIGHT / 2;
  if (isScissorHalfKind(kind)) return SCISSOR_HALF_HITBOX_HEIGHT / 2;
  if (kind === 'replicator') return REPLICATOR_HITBOX_WIDTH / 2;
  if (kind === 'spikeDrone') return object.getData('collisionRadius') || SPIKE_DRONE_FOLDED_RADIUS;
  if (kind === 'giroDrone') return GIRODRONE_ORBIT_RADIUS + GIRODRONE_SATELLITE_RADIUS;
  if (kind === 'bigAsteroid') return 34;
  if (kind === 'asteroid') return 18;
  if (kind === 'crystallizedOrb') return CRYSTALLIZED_ORB_RADIUS;
  if (isEnergyOrbSpeedKind(kind)) return 16;
  return 15;
}

function isPointInPolygon(x, y, polygon) {
  let isInside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i += 1) {
    const point = polygon[i];
    const previousPoint = polygon[j];
    const intersects = (
      point.y > y !== previousPoint.y > y &&
      x < ((previousPoint.x - point.x) * (y - point.y)) / (previousPoint.y - point.y) + point.x
    );
    if (intersects) isInside = !isInside;
  }
  return isInside;
}

function getPointToSegmentDistance(x, y, pointA, pointB) {
  const segmentX = pointB.x - pointA.x;
  const segmentY = pointB.y - pointA.y;
  const lengthSquared = segmentX * segmentX + segmentY * segmentY;
  if (lengthSquared === 0) {
    const distanceX = x - pointA.x;
    const distanceY = y - pointA.y;
    return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  }

  const t = Phaser.Math.Clamp(
    ((x - pointA.x) * segmentX + (y - pointA.y) * segmentY) / lengthSquared,
    0,
    1
  );
  const closestX = pointA.x + t * segmentX;
  const closestY = pointA.y + t * segmentY;
  const distanceX = x - closestX;
  const distanceY = y - closestY;
  return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
}

// --- Logica de bolas ---

function spawnBall(scene) {
  if (
    isBlockingBossWave(scene) ||
    (hasPendingBossWave(scene) && !getActiveTimedBooster(scene))
  ) return;

  if (shouldStartTravelSentinel(scene)) {
    activateTravelSentinel(scene);
    return;
  }

  const kinds = getNextSpawnKinds(scene);
  if (!kinds.length) return;

  const spawnedObjects = [];
  kinds.forEach((kind) => {
    if (!kind) return;
    if (kind === 'plasmaBar') {
      spawnPlasmaBar(scene);
      return;
    }
    if (kind === 'redNeedle') {
      spawnRedNeedle(scene);
      return;
    }
    if (!canSpawnFallingKindNow(scene, kind)) return;

    const forcedX = spawnedObjects.length > 0 && isEnergyOrbSpeedKind(kind)
      ? findSpawnXAwayFrom(scene, spawnedObjects, PAIRED_SPAWN_MIN_SPACING)
      : null;
    const object = spawnFallingKind(scene, kind, forcedX);
    if (object) spawnedObjects.push(object);
  });
}

function spawnForcedFallingKind(scene, kind, x = null) {
  if (!scene || !scene.balls) return null;
  if (kind === 'lifeBooster' && !canDropLifeBooster()) return null;
  if (!canSpawnFallingKindNow(scene, kind)) return null;
  return spawnFallingKind(scene, kind, x);
}

function canSpawnFallingKindNow(scene, kind) {
  if (!isSpawnLimitedHostileKind(kind)) return true;
  const hostileObjects = getActiveSpawnLimitedHostiles(scene);
  if (hostileObjects.length >= MAX_ACTIVE_HOSTILE_SPAWNS) return false;
  const topHostiles = hostileObjects.filter((object) => object.y < TOP_HOSTILE_SPAWN_ZONE_HEIGHT);
  return topHostiles.length < MAX_ACTIVE_TOP_HOSTILE_SPAWNS;
}

function getActiveSpawnLimitedHostiles(scene) {
  if (!scene || !scene.balls) return [];
  return scene.balls.getChildren().filter((object) => (
    object.active &&
    object.getData &&
    isSpawnLimitedHostileKind(object.getData('kind'))
  ));
}

function isSpawnLimitedHostileKind(kind) {
  return kind === 'damageBooster' ||
    isScissorKind(kind) ||
    kind === 'replicator' ||
    kind === 'spikeDrone' ||
    kind === 'giroDrone' ||
    kind === 'crystallizedOrb' ||
    isAsteroidKind(kind);
}

function spawnFallingKind(scene, kind, forcedX = null) {
  const isBooster = isBoosterKind(kind);
  const x = forcedX !== null ? forcedX : isAsteroidKind(kind)
    ? findAsteroidSpawnX(scene)
    : kind === 'damageBooster' || kind === 'scissor'
    ? findRedWaveEnemySpawnX(scene)
    : kind === 'replicator' && scene.activeRedWave && scene.activeRedWave.bossKind === 'replicators'
      ? findReplicatorWaveSpawnX(scene)
    : kind === 'giroDrone'
      ? findGiroDroneSpawnX(scene)
    : isBooster
      ? findBoosterSpawnX(scene)
      : findSpawnX(scene);
  const texture = getTextureForKind(kind);
  const spawnY = kind === 'bigAsteroid'
    ? -54
    : kind === 'replicator'
      ? -SHIP_HEIGHT
      : kind === 'scissor'
        ? -SCISSOR_TEXTURE_HEIGHT / 2
        : -20;

  // Crear desde el grupo para evitar conflictos
  const ball = scene.balls.create(x, spawnY, texture);

  ball.setData('kind', kind);
  ball.setOrigin(0.5);
  ball.setDepth(FALLING_OBJECT_DEPTH);
  setFallingObjectBody(ball, kind);
  ball.body.setBounce(0, 0);
  ball.body.setAllowGravity(false);
  ball.body.setCollideWorldBounds(false);
  ball.body.setVelocityX(getHorizontalVelocity(kind, scene, ball));
  ball.body.setVelocityY(getFallingVelocity(kind, scene, ball));

  if (kind === 'ball') {
    setBallEnergyColor(ball, scene.activeScoreBooster ? getScoreBoosterOrbColor(scene) : 'gold');
    attachEnergyOrbOverlay(scene, ball, getEnergyOrbWispPalette(kind));
  } else if (kind === 'contaminatedOrb') {
    attachEnergyOrbOverlay(scene, ball, getEnergyOrbWispPalette(kind));
  } else if (kind === 'crystallizedOrb') {
    setBallEnergyColorData(ball, 'gold');
    attachEnergyOrbOverlay(scene, ball, getEnergyOrbWispPalette(kind, getEnergyOrbColor(ball)));
  } else if (isAsteroidKind(kind)) {
    ball.setAngularVelocity(Phaser.Math.Between(-110, 110));
  } else if (kind === 'damageBooster' || kind === 'scissor') {
    setupRedEnemySway(ball);
    if (kind === 'scissor') {
      ball.setData('displayName', 'Escisora');
      ball.setData('splitY', getGameHeight(scene) * SCISSOR_SPLIT_Y_RATIO);
    }
  } else if (kind === 'replicator') {
    setupReplicator(scene, ball);
  } else if (kind === 'spikeDrone') {
    setupSpikeDrone(scene, ball);
  } else if (kind === 'giroDrone') {
    setupGiroDrone(scene, ball);
  }

  return ball;
}

function spawnRedNeedle(scene) {
  if (hasActiveRedNeedle(scene)) return;

  const direction = Math.random() < 0.5 ? 1 : -1;
  const startX = direction > 0 ? -RED_NEEDLE_WIDTH / 2 - 8 : getGameWidth(scene) + RED_NEEDLE_WIDTH / 2 + 8;
  const needle = scene.balls.create(startX, RED_NEEDLE_Y, 'redNeedleShip');
  needle.setData('kind', 'redNeedle');
  needle.setData('displayName', 'Aguja Roja');
  needle.setData('horizontalVelocity', RED_NEEDLE_SPEED * direction);
  needle.setData('shotsFired', 0);
  needle.setData('shotTargets', getRedNeedleShotTargets(scene, direction));
  needle.setOrigin(0.5);
  needle.setDepth(FALLING_OBJECT_DEPTH + 2);
  needle.setFlipX(direction < 0);
  setFallingObjectBody(needle, 'redNeedle');
  needle.body.setAllowGravity(false);
  needle.body.setCollideWorldBounds(false);
  needle.body.setVelocityX(RED_NEEDLE_SPEED * direction);
  needle.body.setVelocityY(0);
}

function updateRedNeedles(scene) {
  if (!scene.balls) return;

  scene.balls.getChildren().forEach((needle) => {
    if (!needle.active || needle.getData('kind') !== 'redNeedle') return;
    if (!needle.body) return;

    const horizontalVelocity = needle.getData('horizontalVelocity') || RED_NEEDLE_SPEED;
    needle.body.setVelocityX(horizontalVelocity);
    needle.body.setVelocityY(0);

    const shotsFired = needle.getData('shotsFired') || 0;
    const shotTargets = needle.getData('shotTargets') || [];
    const nextShotX = shotTargets[shotsFired];
    const hasReachedShotX = horizontalVelocity > 0 ? needle.x >= nextShotX : needle.x <= nextShotX;
    if (shotsFired < RED_NEEDLE_MAX_SHOTS && hasReachedShotX && isRedNeedleInsideScreen(scene, needle)) {
      spawnRedNeedleLaser(scene, needle.x, needle.y + RED_NEEDLE_HEIGHT / 2 + 10);
      needle.setData('shotsFired', shotsFired + 1);
    }

    const margin = RED_NEEDLE_WIDTH;
    if ((horizontalVelocity > 0 && needle.x > getGameWidth(scene) + margin) || (horizontalVelocity < 0 && needle.x < -margin)) {
      needle.destroy();
    }
  });
}

function getRedNeedleShotTargets(scene, direction) {
  const width = getGameWidth(scene);
  const targets = [];
  for (let i = 1; i <= RED_NEEDLE_MAX_SHOTS; i += 1) {
    targets.push(width * (i / (RED_NEEDLE_MAX_SHOTS + 1)));
  }
  return direction > 0 ? targets : targets.reverse();
}

function isRedNeedleInsideScreen(scene, needle) {
  const halfWidth = RED_NEEDLE_WIDTH / 2;
  return needle.x >= halfWidth && needle.x <= getGameWidth(scene) - halfWidth;
}

function spawnRedNeedleLaser(scene, x, y) {
  const laser = scene.balls.create(x, y, 'redNeedleLaser');
  laser.setData('kind', 'redNeedleLaser');
  laser.setOrigin(0.5);
  laser.setDepth(FALLING_OBJECT_DEPTH + 1);
  setFallingObjectBody(laser, 'redNeedleLaser');
  laser.body.setAllowGravity(false);
  laser.body.setCollideWorldBounds(false);
  laser.body.setVelocityX(0);
  laser.body.setVelocityY(RED_NEEDLE_LASER_SPEED);
  playRedNeedleShotSound(scene);
}

function updateScissors(scene) {
  if (!scene.balls) return;

  scene.balls.getChildren().forEach((scissor) => {
    if (!scissor.active || !scissor.body) return;
    const kind = scissor.getData('kind');

    if (kind === 'scissor') {
      scissor.body.setVelocityY(getFallingVelocity('scissor', scene, scissor));
      if (scissor.y >= (scissor.getData('splitY') || getGameHeight(scene) * SCISSOR_SPLIT_Y_RATIO)) {
        splitScissor(scene, scissor);
      }
      return;
    }

    if (!isScissorHalfKind(kind)) return;
    const horizontalVelocity = scissor.getData('horizontalVelocity') || (kind === 'scissorLeft' ? -SCISSOR_HALF_HORIZONTAL_SPEED : SCISSOR_HALF_HORIZONTAL_SPEED);
    scissor.body.setVelocityX(horizontalVelocity);
    scissor.body.setVelocityY(getFallingVelocity(kind, scene, scissor));
    scissor.setRotation(0);

    const margin = SCISSOR_HALF_TEXTURE_WIDTH;
    if (
      scissor.x < -margin ||
      scissor.x > getGameWidth(scene) + margin ||
      scissor.y > getGameHeight(scene) + SCISSOR_TEXTURE_HEIGHT
    ) {
      scissor.destroy();
    }
  });
}

function splitScissor(scene, scissor) {
  if (!scissor || !scissor.active || scissor.getData('hasSplit')) return;

  const x = scissor.x;
  const y = scissor.y;
  const velocityY = getFallingVelocity('scissor', scene, scissor);
  scissor.setData('hasSplit', true);
  createScissorHalf(scene, 'scissorLeft', x - SCISSOR_HALF_TEXTURE_WIDTH / 2, y, -SCISSOR_HALF_HORIZONTAL_SPEED, velocityY);
  createScissorHalf(scene, 'scissorRight', x + SCISSOR_HALF_TEXTURE_WIDTH / 2, y, SCISSOR_HALF_HORIZONTAL_SPEED, velocityY);
  emitScissorSplitBurst(scene, x, y);
  scissor.destroy();
}

function createScissorHalf(scene, kind, x, y, velocityX, velocityY) {
  const half = scene.balls.create(x, y, getTextureForKind(kind));
  half.setData('kind', kind);
  half.setData('displayName', 'Escisora');
  half.setData('horizontalVelocity', velocityX);
  half.setData('fallVelocity', velocityY);
  half.setOrigin(0.5);
  half.setDepth(FALLING_OBJECT_DEPTH);
  half.setRotation(0);
  setFallingObjectBody(half, kind);
  half.body.setBounce(0, 0);
  half.body.setAllowGravity(false);
  half.body.setCollideWorldBounds(false);
  half.body.setVelocityX(velocityX);
  half.body.setVelocityY(velocityY);
  return half;
}

function emitScissorSplitBurst(scene, x, y) {
  for (let i = 0; i < 18; i += 1) {
    const side = i % 2 === 0 ? -1 : 1;
    const particle = trackGameplayVisual(scene, scene.add.image(
      x + Phaser.Math.Between(-3, 3),
      y + Phaser.Math.Between(-20, 20),
      'goldTrailParticle'
    ));
    particle
      .setDepth(FX_DEPTH)
      .setTint(i % 4 === 0 ? 0xffd7df : i % 3 === 0 ? 0xff8a9a : 0xff263c)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setScale(Phaser.Math.FloatBetween(0.35, 0.75))
      .setAlpha(0.92);

    scene.tweens.add({
      targets: particle,
      x: particle.x + side * Phaser.Math.Between(12, 42),
      y: particle.y + Phaser.Math.Between(-18, 18),
      scale: 0.08,
      alpha: 0,
      duration: Phaser.Math.Between(120, 260),
      ease: 'Sine.easeOut',
      onComplete: () => particle.destroy(),
    });
  }
}

function setupRedEnemySway(enemy) {
  enemy.setData('swayPhase', Phaser.Math.FloatBetween(0, Math.PI * 2));
  enemy.setData('swaySpeed', Phaser.Math.FloatBetween(RED_ENEMY_SWAY_SPEED * 0.85, RED_ENEMY_SWAY_SPEED * 1.15));
  enemy.setData('swayVelocity', Phaser.Math.FloatBetween(RED_ENEMY_SWAY_MAX_VELOCITY * 0.65, RED_ENEMY_SWAY_MAX_VELOCITY));
}

function setupReplicator(scene, replicator) {
  const isReplicatorWave = Boolean(scene.activeRedWave && scene.activeRedWave.bossKind === 'replicators');
  const previousReplicator = isReplicatorWave
    ? getLastActiveReplicator(scene, replicator)
    : null;
  replicator
    .setScale(REPLICATOR_SCALE)
    .setFlipY(true)
    .setAlpha(0.9)
    .setTint(0xdffcff);
  replicator.setData('displayName', 'Replicador');
  replicator.setData(
    'followDelay',
    isReplicatorWave
      ? REPLICATOR_CHAIN_FOLLOW_DELAY
      : Phaser.Math.Between(REPLICATOR_FOLLOW_DELAY_MIN, REPLICATOR_FOLLOW_DELAY_MAX)
  );
  replicator.setData('nextGlitchAt', 0);
  replicator.setData('followTarget', previousReplicator);
  replicator.setData('lastFollowTargetX', previousReplicator ? previousReplicator.x : scene.ship.x);
  replicator.setData('movementHistory', []);

  const chromaticGhosts = [
    scene.add.image(replicator.x, replicator.y, 'ship')
      .setOrigin(0.5)
      .setScale(REPLICATOR_SCALE)
      .setFlipY(true)
      .setTint(0xff00b8)
      .setAlpha(0.3)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setDepth(FALLING_OBJECT_DEPTH - 1),
    scene.add.image(replicator.x, replicator.y, 'ship')
      .setOrigin(0.5)
      .setScale(REPLICATOR_SCALE)
      .setFlipY(true)
      .setTint(0x00f5ff)
      .setAlpha(0.3)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setDepth(FALLING_OBJECT_DEPTH - 1),
  ];

  const sliceColors = [0xff00b8, 0x00f5ff, 0x78ff00];
  const glitchSlices = Array.from({ length: REPLICATOR_GLITCH_SLICE_COUNT }, (_, index) => {
    const sliceHeight = Phaser.Math.Between(3, 8);
    const sliceY = Phaser.Math.Between(0, SHIP_TEXTURE_HEIGHT - sliceHeight);
    return scene.add.image(replicator.x, replicator.y, 'ship')
      .setOrigin(0.5)
      .setScale(REPLICATOR_SCALE)
      .setFlipY(true)
      .setCrop(0, sliceY, SHIP_TEXTURE_WIDTH, sliceHeight)
      .setTint(sliceColors[index % sliceColors.length])
      .setAlpha(0)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setDepth(FALLING_OBJECT_DEPTH + 1);
  });

  const glitchPixels = Array.from({ length: REPLICATOR_GLITCH_PIXEL_COUNT }, (_, index) => (
    scene.add.rectangle(replicator.x, replicator.y, 4, 2, sliceColors[index % sliceColors.length], 0)
      .setOrigin(0.5)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setDepth(FALLING_OBJECT_DEPTH + 1)
  ));

  const glitchParts = [...chromaticGhosts, ...glitchSlices, ...glitchPixels];
  const trail = scene.add.graphics()
    .setDepth(FALLING_OBJECT_DEPTH - 2)
    .setBlendMode(Phaser.BlendModes.ADD);
  replicator.setData('chromaticGhosts', chromaticGhosts);
  replicator.setData('glitchSlices', glitchSlices);
  replicator.setData('glitchPixels', glitchPixels);
  replicator.setData('trail', trail);
  replicator.setData('trailPoints', []);
  replicator.once('destroy', () => {
    glitchParts.forEach((part) => part.destroy());
    trail.destroy();
  });
}

function findReplicatorWaveSpawnX(scene) {
  const previousReplicator = getLastActiveReplicator(scene);
  return previousReplicator ? previousReplicator.x : findSpawnX(scene);
}

function getLastActiveReplicator(scene, excludedReplicator = null) {
  const replicators = scene.balls.getChildren().filter((object) => (
    object !== excludedReplicator &&
    object.active &&
    object.getData('kind') === 'replicator'
  ));
  return replicators[replicators.length - 1] || null;
}

function updateReplicators(scene, time, delta) {
  if (!scene.ship || !scene.balls) return;
  if (!scene.replicatorShipHistory) scene.replicatorShipHistory = [];
  scene.replicatorShipHistory.push({ time, x: scene.ship.x });
  scene.replicatorShipHistory = scene.replicatorShipHistory.filter((sample) => time - sample.time <= REPLICATOR_FOLLOW_DELAY_MAX + 100);

  const replicators = scene.balls.getChildren().filter((object) => (
    object.active &&
    object.getData('kind') === 'replicator' &&
    object.body
  ));
  replicators.forEach((replicator) => {
    const history = replicator.getData('movementHistory') || [];
    history.push({ time, x: replicator.x });
    replicator.setData(
      'movementHistory',
      history.filter((sample) => time - sample.time <= REPLICATOR_FOLLOW_DELAY_MAX + 100)
    );
  });

  replicators.forEach((replicator) => {
    const delay = replicator.getData('followDelay') || REPLICATOR_FOLLOW_DELAY_MIN;
    const targetTime = time - delay;
    const followTarget = replicator.getData('followTarget');
    const isFollowingReplicator = Boolean(followTarget);
    const sourceHistory = isFollowingReplicator && followTarget.active
      ? followTarget.getData('movementHistory') || []
      : scene.replicatorShipHistory;
    const sampledX = getReplicatorHistoryX(sourceHistory, targetTime);
    const targetX = Number.isFinite(sampledX) ? sampledX : scene.ship.x;
    if (Number.isFinite(targetX)) replicator.setData('lastFollowTargetX', targetX);
    const distanceX = targetX - replicator.x;
    const maxVelocity = Math.min(REPLICATOR_FOLLOW_SPEED, Math.abs(distanceX) * 4.2);
    replicator.body.setVelocityX(Math.sign(distanceX) * maxVelocity);
    replicator.body.setVelocityY(getFallingVelocity('replicator', scene, replicator));

    if (time >= (replicator.getData('nextGlitchAt') || 0)) {
      replicator.setData('nextGlitchAt', time + Phaser.Math.Between(REPLICATOR_GLITCH_INTERVAL, REPLICATOR_GLITCH_INTERVAL + 55));
      refreshReplicatorGlitch(replicator);
    }

    positionReplicatorGlitch(replicator);
    updateReplicatorTrail(scene, replicator, time, delta);
  });
}

function getReplicatorHistoryX(history, targetTime) {
  if (!history.length) return null;
  if (targetTime <= history[0].time) return history[0].x;

  for (let index = 1; index < history.length; index += 1) {
    const currentSample = history[index];
    if (currentSample.time < targetTime) continue;
    const previousSample = history[index - 1];
    const duration = Math.max(1, currentSample.time - previousSample.time);
    const progress = Phaser.Math.Clamp((targetTime - previousSample.time) / duration, 0, 1);
    return Phaser.Math.Linear(previousSample.x, currentSample.x, progress);
  }

  return history[history.length - 1].x;
}

function updateReplicatorTrail(scene, replicator, time, delta) {
  const trail = replicator.getData('trail');
  if (!trail) return;

  const targetX = replicator.x;
  const targetY = replicator.y - 14;
  const anchorX = replicator.getData('trailAnchorX');
  const anchorY = replicator.getData('trailAnchorY');
  const smoothedX = anchorX === undefined
    ? targetX
    : Phaser.Math.Linear(anchorX, targetX, SHIP_TRAIL_POSITION_SMOOTHING);
  const smoothedY = anchorY === undefined
    ? targetY
    : Phaser.Math.Linear(anchorY, targetY, SHIP_TRAIL_POSITION_SMOOTHING);
  replicator.setData('trailAnchorX', smoothedX);
  replicator.setData('trailAnchorY', smoothedY);

  let points = replicator.getData('trailPoints') || [];
  const previousPoint = points[points.length - 1];
  const movedEnough = !previousPoint || Phaser.Math.Distance.Between(
    previousPoint.x,
    previousPoint.y,
    smoothedX,
    smoothedY
  ) >= SHIP_TRAIL_MIN_POINT_DISTANCE;

  if (movedEnough || !previousPoint || time - previousPoint.createdAt >= SHIP_TRAIL_IDLE_INTERVAL) {
    points.push({ x: smoothedX, y: smoothedY, createdAt: time });
  } else {
    const fallRatio = getFallingVelocity('replicator', scene, replicator) / BASE_GRAVITY;
    const drift = fallRatio * SHIP_TRAIL_IDLE_SPEED * Math.min(delta || 16, SHIP_TRAIL_IDLE_MAX_DELTA);
    points.forEach((point) => {
      point.y -= drift;
    });
  }

  points = points
    .filter((point) => time - point.createdAt <= REPLICATOR_TRAIL_DURATION)
    .slice(-REPLICATOR_TRAIL_MAX_POINTS);
  replicator.setData('trailPoints', points);
  drawReplicatorTrail(trail, points, time);
}

function drawReplicatorTrail(graphics, trailPoints, time) {
  const points = smoothShipTrailPoints(trailPoints);
  graphics.clear();
  if (points.length < 2) return;

  for (let i = 1; i < points.length; i += 1) {
    const previousPoint = points[i - 1];
    const currentPoint = points[i];
    const age = time - currentPoint.createdAt;
    const freshness = Phaser.Math.Clamp(1 - age / REPLICATOR_TRAIL_DURATION, 0, 1);
    const positionRatio = i / (points.length - 1);
    const taper = Math.pow(Math.min(freshness, positionRatio), 1.18);
    const width = Math.max(0.8, SHIP_TRAIL_WIDTH * REPLICATOR_SCALE * taper);
    const alpha = SHIP_TRAIL_BASE_ALPHA + SHIP_TRAIL_ALPHA_RANGE * taper;
    const blueMix = Phaser.Math.Clamp((positionRatio - (1 - SHIP_TRAIL_BLUE_CORE_RATIO)) / SHIP_TRAIL_BLUE_CORE_RATIO, 0, 1);
    const haloColor = mixRgbColor(0xff9f1c, 0x1269d3, blueMix);
    const bodyColor = mixRgbColor(0xf08a2a, 0x1678c8, blueMix);
    const coreColor = mixRgbColor(0xffc14f, 0x44b8dc, blueMix);

    graphics.lineStyle(width * 1.25, haloColor, alpha * 0.28);
    graphics.lineBetween(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y);
    graphics.lineStyle(width, bodyColor, alpha);
    graphics.lineBetween(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y);
    graphics.lineStyle(Math.max(0.6, width * 0.22), coreColor, alpha * SHIP_TRAIL_CORE_ALPHA_RATIO);
    graphics.lineBetween(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y);
  }
}

function refreshReplicatorGlitch(replicator) {
  replicator.setAlpha(Phaser.Math.FloatBetween(0.82, 0.96));

  const chromaticGhosts = replicator.getData('chromaticGhosts') || [];
  chromaticGhosts.forEach((ghost, index) => {
    const direction = index === 0 ? -1 : 1;
    ghost.setData('glitchOffsetX', direction * Phaser.Math.Between(3, 8));
    ghost.setData('glitchOffsetY', Phaser.Math.Between(-2, 2));
    ghost.setAlpha(Phaser.Math.FloatBetween(0.18, 0.38));
  });

  const glitchSlices = replicator.getData('glitchSlices') || [];
  glitchSlices.forEach((slice) => {
    const sliceHeight = Phaser.Math.Between(2, 7);
    const sliceY = Phaser.Math.Between(0, SHIP_TEXTURE_HEIGHT - sliceHeight);
    slice.setCrop(0, sliceY, SHIP_TEXTURE_WIDTH, sliceHeight);
    slice.setData('glitchOffsetX', Phaser.Math.Between(-18, 18));
    slice.setData('glitchOffsetY', 0);
    slice.setAlpha(Math.random() < 0.78 ? Phaser.Math.FloatBetween(0.24, 0.62) : 0);
  });

  const glitchPixels = replicator.getData('glitchPixels') || [];
  glitchPixels.forEach((pixel) => {
    const side = Math.random() < 0.5 ? -1 : 1;
    pixel.setData('glitchOffsetX', side * Phaser.Math.Between(28, 72));
    pixel.setData('glitchOffsetY', Phaser.Math.Between(-22, 22));
    pixel.setDisplaySize(Phaser.Math.Between(2, 12), Phaser.Math.Between(1, 3));
    pixel.setAlpha(Math.random() < 0.65 ? Phaser.Math.FloatBetween(0.28, 0.8) : 0);
  });
}

function positionReplicatorGlitch(replicator) {
  const chromaticGhosts = replicator.getData('chromaticGhosts') || [];
  const glitchSlices = replicator.getData('glitchSlices') || [];
  const glitchPixels = replicator.getData('glitchPixels') || [];
  [...chromaticGhosts, ...glitchSlices, ...glitchPixels].forEach((part) => {
    part.setPosition(
      replicator.x + (part.getData('glitchOffsetX') || 0),
      replicator.y + (part.getData('glitchOffsetY') || 0)
    );
  });
}

function updateRedEnemySway(scene, time) {
  const min = 34;
  const max = Math.max(min, getGameWidth(scene) - 34);
  scene.balls.getChildren().forEach((enemy) => {
    const kind = enemy.getData('kind');
    if (!enemy.active || (kind !== 'damageBooster' && kind !== 'scissor')) return;
    if (!enemy.body) return;

    const phase = enemy.getData('swayPhase') || 0;
    const speed = enemy.getData('swaySpeed') || RED_ENEMY_SWAY_SPEED;
    const swayVelocity = enemy.getData('swayVelocity') || RED_ENEMY_SWAY_MAX_VELOCITY;
    let velocityX = Math.sin(time * speed + phase) * swayVelocity;

    if (enemy.x < min) {
      velocityX = Math.abs(velocityX);
    } else if (enemy.x > max) {
      velocityX = -Math.abs(velocityX);
    }

    enemy.body.setVelocityX(velocityX);
    enemy.body.setVelocityY(getFallingVelocity(kind, scene, enemy));
  });
}

function setupSpikeDrone(scene, drone) {
  const phase = Phaser.Math.Between(0, SPIKE_DRONE_FOLDED_DURATION + SPIKE_DRONE_WARNING_DURATION + SPIKE_DRONE_EXPANDED_DURATION);
  const stateConfig = getSpikeDroneStateFromPhase(phase);

  drone.setAngularVelocity(Phaser.Math.Between(-45, 45));
  applySpikeDroneState(drone, stateConfig.state, scene);
  drone.setData('nextSpikeStateAt', scene.time.now + stateConfig.remaining);
}

function getSpikeDroneStateFromPhase(phase) {
  if (phase < SPIKE_DRONE_FOLDED_DURATION) {
    return {
      state: 'folded',
      remaining: SPIKE_DRONE_FOLDED_DURATION - phase,
    };
  }

  const warningPhase = phase - SPIKE_DRONE_FOLDED_DURATION;
  if (warningPhase < SPIKE_DRONE_WARNING_DURATION) {
    if (warningPhase < SPIKE_DRONE_WARNING_GREEN_DURATION) {
      return {
        state: 'warningGreen',
        remaining: SPIKE_DRONE_WARNING_GREEN_DURATION - warningPhase,
      };
    }

    return {
      state: 'warningRed',
      remaining: SPIKE_DRONE_WARNING_DURATION - warningPhase,
    };
  }

  const expandedPhase = warningPhase - SPIKE_DRONE_WARNING_DURATION;
  return {
    state: 'expanded',
    remaining: SPIKE_DRONE_EXPANDED_DURATION - expandedPhase,
  };
}

function updateSpikeDrones(scene) {
  scene.balls.getChildren().forEach((drone) => {
    if (!drone.active || drone.getData('kind') !== 'spikeDrone') return;
    if (!drone.body) return;

    drone.body.setVelocityX(0);
    drone.body.setVelocityY(getFallingVelocity('spikeDrone', scene, drone));

    const nextStateAt = drone.getData('nextSpikeStateAt') || 0;
    if (scene.time.now < nextStateAt) return;

    const stateName = drone.getData('spikeState') || 'folded';
    if (stateName === 'disabled') return;
    if (stateName === 'folded') {
      applySpikeDroneState(drone, 'warningGreen', scene);
      drone.setData('nextSpikeStateAt', scene.time.now + SPIKE_DRONE_WARNING_GREEN_DURATION);
    } else if (stateName === 'warningGreen') {
      applySpikeDroneState(drone, 'warningRed', scene);
      drone.setData('nextSpikeStateAt', scene.time.now + SPIKE_DRONE_WARNING_RED_DURATION);
    } else if (stateName === 'warningRed') {
      applySpikeDroneState(drone, 'expanded', scene);
      playSpikeDroneSound(scene);
      drone.setData('nextSpikeStateAt', scene.time.now + SPIKE_DRONE_EXPANDED_DURATION);
    } else {
      applySpikeDroneState(drone, 'folded', scene);
      drone.setData('nextSpikeStateAt', scene.time.now + SPIKE_DRONE_FOLDED_DURATION);
    }
  });
}

function setupGiroDrone(scene, giroDrone) {
  const direction = Math.random() < 0.5 ? -1 : 1;
  const phase = Phaser.Math.Between(0, SPIKE_DRONE_FOLDED_DURATION + SPIKE_DRONE_WARNING_DURATION + SPIKE_DRONE_EXPANDED_DURATION);
  const stateConfig = getSpikeDroneStateFromPhase(phase);
  const coreEnergy = trackGameplayVisual(scene, scene.add.graphics().setDepth(FALLING_OBJECT_DEPTH + 2));
  const energy = trackGameplayVisual(scene, scene.add.graphics().setDepth(FALLING_OBJECT_DEPTH + 2));
  const satellite = trackGameplayVisual(scene, scene.add.image(giroDrone.x, giroDrone.y, 'giroDroneSatelliteRed'))
    .setOrigin(0.5)
    .setDepth(FALLING_OBJECT_DEPTH + 1)
    .setScale(GIRODRONE_SCALE);

  giroDrone.setScale(GIRODRONE_SCALE);
  giroDrone.setAngularVelocity(0);
  giroDrone.setData('displayName', 'Girodron');
  giroDrone.setData('collisionRadius', GIRODRONE_CORE_RADIUS);
  giroDrone.setData('coreEnergy', coreEnergy);
  giroDrone.setData('orbitSatellite', satellite);
  giroDrone.setData('orbitEnergy', energy);
  giroDrone.setData('orbitAngle', Phaser.Math.FloatBetween(0, Math.PI * 2));
  giroDrone.setData('orbitDirection', direction);
  giroDrone.setData('orbitRadius', GIRODRONE_ORBIT_RADIUS);
  applyGiroDroneCoreState(giroDrone, stateConfig.state, scene);
  giroDrone.setData('nextSpikeStateAt', scene.time.now + stateConfig.remaining);
  setFallingObjectBody(giroDrone, 'giroDrone');
  updateGiroDroneVisuals(giroDrone, scene.time.now);

  giroDrone.once('destroy', () => {
    if (satellite && satellite.active !== false) satellite.destroy();
    if (energy && energy.active !== false) energy.destroy();
    if (coreEnergy && coreEnergy.active !== false) coreEnergy.destroy();
  });
}

function updateGiroDrones(scene, delta) {
  scene.balls.getChildren().forEach((giroDrone) => {
    if (!giroDrone.active || giroDrone.getData('kind') !== 'giroDrone') return;
    if (!giroDrone.body) return;

    giroDrone.body.setVelocityX(0);
    giroDrone.body.setVelocityY(getFallingVelocity('giroDrone', scene, giroDrone));

    const stateName = giroDrone.getData('spikeState') || 'folded';
    if (stateName !== 'disabled') {
      const angle = (giroDrone.getData('orbitAngle') || 0) +
        (delta || 16) * GIRODRONE_ORBIT_SPEED * (giroDrone.getData('orbitDirection') || 1);
      giroDrone.setData('orbitAngle', angle);
    }

    const nextStateAt = giroDrone.getData('nextSpikeStateAt') || 0;
    if (stateName !== 'disabled' && scene.time.now >= nextStateAt) {
      if (stateName === 'folded') {
        applyGiroDroneCoreState(giroDrone, 'warningGreen', scene);
        giroDrone.setData('nextSpikeStateAt', scene.time.now + SPIKE_DRONE_WARNING_GREEN_DURATION);
      } else if (stateName === 'warningGreen') {
        applyGiroDroneCoreState(giroDrone, 'warningRed', scene);
        giroDrone.setData('nextSpikeStateAt', scene.time.now + SPIKE_DRONE_WARNING_RED_DURATION);
      } else if (stateName === 'warningRed') {
        applyGiroDroneCoreState(giroDrone, 'expanded', scene);
        playSpikeDroneSound(scene);
        giroDrone.setData('nextSpikeStateAt', scene.time.now + SPIKE_DRONE_EXPANDED_DURATION);
      } else {
        applyGiroDroneCoreState(giroDrone, 'folded', scene);
        giroDrone.setData('nextSpikeStateAt', scene.time.now + SPIKE_DRONE_FOLDED_DURATION);
      }
    }

    updateGiroDroneVisuals(giroDrone, scene.time.now);
  });
}

function updateGiroDroneVisuals(giroDrone, time = 0) {
  updateGiroDroneCoreEnergy(giroDrone, time);
  updateGiroDroneSatellite(giroDrone, time);
}

function updateGiroDroneCoreEnergy(giroDrone, time = 0) {
  const energy = giroDrone.getData('coreEnergy');
  if (!energy || energy.active === false) return;
  energy.clear();
  if (giroDrone.getData('spikeState') !== 'expanded') return;
  drawGiroDroneRedEnergy(energy, giroDrone.x, giroDrone.y, time, GIRODRONE_DAMAGE_HALO_RADIUS, GIRODRONE_CORE_ENERGY_PARTICLE_COUNT);
}

function updateGiroDroneSatellite(giroDrone, time = 0) {
  const satellite = giroDrone.getData('orbitSatellite');
  if (!satellite || satellite.active === false) return;

  const energy = giroDrone.getData('orbitEnergy');
  const disabled = giroDrone.getData('spikeState') === 'disabled';
  const angle = giroDrone.getData('orbitAngle') || 0;
  const radius = giroDrone.getData('orbitRadius') || GIRODRONE_ORBIT_RADIUS;
  giroDrone.setAngle(0);
  satellite
    .setTexture(disabled ? 'giroDroneDisabled' : 'giroDroneSatelliteRed')
    .setAlpha(1)
    .setScale(GIRODRONE_SCALE)
    .setAngle(0)
    .setPosition(
      giroDrone.x + Math.cos(angle) * radius,
      giroDrone.y + Math.sin(angle) * radius
    );

  if (!energy || energy.active === false) return;
  energy.clear();
  if (disabled) return;
  drawGiroDroneRedEnergy(energy, satellite.x, satellite.y, time, GIRODRONE_DAMAGE_HALO_RADIUS, GIRODRONE_ENERGY_PARTICLE_COUNT);
}

function drawGiroDroneRedEnergy(graphics, x, y, time = 0, haloRadius = GIRODRONE_DAMAGE_HALO_RADIUS, particleCount = GIRODRONE_ENERGY_PARTICLE_COUNT) {
  const pulse = (Math.sin(time * 0.006) + 1) / 2;
  graphics.fillStyle(0xff3045, 0.07 + pulse * 0.05);
  graphics.fillCircle(x, y, haloRadius + pulse * 3);
  graphics.lineStyle(1.5, 0xff3045, 0.18 + pulse * 0.16);
  graphics.strokeCircle(x, y, haloRadius - 3 + pulse * 2);

  for (let i = 0; i < particleCount; i += 1) {
    const phase = time * 0.0026 + i * ((Math.PI * 2) / particleCount);
    const orbit = haloRadius - 4 + ((i % 3) * 3) + Math.sin(time * 0.004 + i) * 2;
    const particleX = x + Math.cos(phase) * orbit;
    const particleY = y + Math.sin(phase * 1.17) * orbit;
    const alpha = 0.42 + 0.26 * Math.sin(time * 0.005 + i);
    graphics.fillStyle(i % 3 === 0 ? 0xffc1c8 : 0xff3045, Phaser.Math.Clamp(alpha, 0.18, 0.72));
    graphics.fillCircle(particleX, particleY, i % 3 === 0 ? 2.2 : 1.5);
  }
}

function applyGiroDroneCoreState(giroDrone, stateName, scene) {
  giroDrone.setData('spikeState', stateName);
  if (stateName === 'warningGreen') {
    giroDrone.setTexture('giroDroneCoreOrange');
  } else if (stateName === 'warningRed') {
    giroDrone.setTexture('giroDroneCoreRedWarning');
  } else if (stateName === 'expanded') {
    giroDrone.setTexture('giroDroneCoreRed');
  } else if (stateName === 'disabled') {
    giroDrone.setTexture('giroDroneDisabled');
  } else {
    giroDrone.setTexture('giroDroneCoreGreen');
  }
  giroDrone.setScale(GIRODRONE_SCALE);
  giroDrone.setData('collisionRadius', GIRODRONE_CORE_RADIUS);
  setFallingObjectBody(giroDrone, 'giroDrone');
  if (giroDrone.body && scene) {
    giroDrone.body.setVelocityX(0);
    giroDrone.body.setVelocityY(getFallingVelocity('giroDrone', scene, giroDrone));
  }
}

function isGiroDroneGreenState(stateName) {
  return stateName === 'folded';
}

function isGiroDroneOrangeState(stateName) {
  return stateName === 'warningGreen';
}

function isGiroDroneRedState(stateName) {
  return stateName === 'warningRed' || stateName === 'expanded';
}

function applySpikeDroneState(drone, stateName, scene) {
  drone.setData('spikeState', stateName);
  if (stateName === 'warningGreen') {
    drone.setTexture('spikeDroneWarningGreen');
    drone.setData('collisionRadius', SPIKE_DRONE_FOLDED_RADIUS);
  } else if (stateName === 'warningRed') {
    drone.setTexture('spikeDroneWarningRed');
    drone.setData('collisionRadius', SPIKE_DRONE_FOLDED_RADIUS);
  } else if (stateName === 'expanded') {
    drone.setTexture('spikeDroneExpanded');
    drone.setData('collisionRadius', SPIKE_DRONE_EXPANDED_RADIUS);
  } else if (stateName === 'disabled') {
    drone.setTexture('spikeDroneDisabled');
    drone.setData('collisionRadius', SPIKE_DRONE_FOLDED_RADIUS);
  } else {
    drone.setTexture('spikeDrone');
    drone.setData('collisionRadius', SPIKE_DRONE_FOLDED_RADIUS);
  }
  setFallingObjectBody(drone, 'spikeDrone');
  if (drone.body && scene) {
    drone.body.setVelocityX(0);
    drone.body.setVelocityY(getFallingVelocity('spikeDrone', scene, drone));
  }
}

function disableSpikeDrone(scene, drone) {
  const shouldReward = !drone.getData('disableRewardGranted');
  drone.setData('disableRewardGranted', true);
  applySpikeDroneState(drone, 'disabled', scene);
  drone.setData('nextSpikeStateAt', undefined);
  drone.setData('pausedSpikeRemaining', undefined);
  drone.setAngularVelocity(0);
  playSpikeDroneDisableSound(scene);
  if (shouldReward) {
    awardEnemyDefeatScore(scene, SPIKE_DRONE_DISABLE_SCORE, drone.x, drone.y, '#ffd84d');
  }
}

function disableGiroDrone(scene, giroDrone) {
  const shouldReward = !giroDrone.getData('disableRewardGranted');
  giroDrone.setData('disableRewardGranted', true);
  applyGiroDroneCoreState(giroDrone, 'disabled', scene);
  giroDrone.setData('collisionRadius', GIRODRONE_CORE_RADIUS);
  giroDrone.setData('nextSpikeStateAt', undefined);
  giroDrone.setData('pausedSpikeRemaining', undefined);
  giroDrone.setAngularVelocity(0);
  updateGiroDroneVisuals(giroDrone, scene.time.now);
  playSpikeDroneDisableSound(scene);
  if (shouldReward) {
    awardEnemyDefeatScore(scene, GIRODRONE_DISABLE_SCORE, giroDrone.x, giroDrone.y, '#ffd84d');
  }
}

function isSpikeDroneGreenState(stateName) {
  return stateName === 'folded';
}

function pauseSpikeDrones(scene) {
  if (!scene.balls) return;
  scene.balls.getChildren().forEach((drone) => {
    if (!drone.active || (drone.getData('kind') !== 'spikeDrone' && drone.getData('kind') !== 'giroDrone')) return;
    const nextStateAt = drone.getData('nextSpikeStateAt');
    if (nextStateAt === undefined) return;
    drone.setData('pausedSpikeRemaining', Math.max(0, nextStateAt - scene.time.now));
  });
}

function resumeSpikeDrones(scene) {
  if (!scene.balls) return;
  scene.balls.getChildren().forEach((drone) => {
    if (!drone.active || (drone.getData('kind') !== 'spikeDrone' && drone.getData('kind') !== 'giroDrone')) return;
    const remaining = drone.getData('pausedSpikeRemaining');
    if (remaining === undefined) return;
    drone.setData('nextSpikeStateAt', scene.time.now + remaining);
    drone.setData('pausedSpikeRemaining', undefined);
  });
}

function setBallEnergyColor(ball, isPurple) {
  ball.clearTint();
  const color = normalizeEnergyOrbColor(isPurple);
  const texture = color === 'pink' ? 'pinkBall' : color === 'purple' ? 'purpleBall' : 'goldBall';
  ball.setTexture(texture);
  ball.setData('energyColor', color);
  ball.setData('isPurpleEnergy', color !== 'gold');
  ball.setData('isPinkEnergy', color === 'pink');
}

function setBallEnergyColorData(ball, color) {
  const normalizedColor = normalizeEnergyOrbColor(color);
  ball.setData('energyColor', normalizedColor);
  ball.setData('isPurpleEnergy', normalizedColor !== 'gold');
  ball.setData('isPinkEnergy', normalizedColor === 'pink');
}

function normalizeEnergyOrbColor(color) {
  if (color === 'pink' || color === 'purple' || color === 'gold') return color;
  return color ? 'purple' : 'gold';
}

function getEnergyOrbColor(orb) {
  if (!orb || !orb.getData) return 'gold';
  return normalizeEnergyOrbColor(orb.getData('energyColor') || (orb.getData('isPurpleEnergy') ? 'purple' : 'gold'));
}

function setFallingObjectBody(object, kind) {
  if (kind === 'replicator') {
    object.body.setSize(REPLICATOR_HITBOX_WIDTH, REPLICATOR_HITBOX_HEIGHT, true);
    return;
  }

  if (kind === 'redNeedle') {
    object.body.setSize(RED_NEEDLE_WIDTH - 12, RED_NEEDLE_HEIGHT - 6, true);
    return;
  }

  if (kind === 'redNeedleLaser') {
    object.body.setSize(RED_NEEDLE_LASER_WIDTH, RED_NEEDLE_LASER_HEIGHT, true);
    return;
  }

  if (kind === 'damageBooster') {
    object.body.setSize(RED_ENEMY_HITBOX_WIDTH, RED_ENEMY_HITBOX_HEIGHT, true);
    return;
  }

  if (kind === 'scissor') {
    object.body.setSize(SCISSOR_HITBOX_WIDTH, SCISSOR_HITBOX_HEIGHT, true);
    return;
  }

  if (isScissorHalfKind(kind)) {
    object.body.setSize(SCISSOR_HALF_HITBOX_WIDTH, SCISSOR_HALF_HITBOX_HEIGHT, true);
    return;
  }

  if (kind === 'spikeDrone') {
    const radius = object.getData('collisionRadius') || SPIKE_DRONE_FOLDED_RADIUS;
    const offset = SPIKE_DRONE_TEXTURE_SIZE / 2 - radius;
    object.body.setCircle(radius, offset, offset);
    return;
  }

  if (kind === 'giroDrone') {
    const radius = GIRODRONE_ORBIT_RADIUS + GIRODRONE_SATELLITE_RADIUS;
    const offset = SPIKE_DRONE_TEXTURE_SIZE / 2 - radius;
    object.body.setCircle(radius, offset, offset);
    return;
  }

  if (kind === 'bigAsteroid') {
    object.body.setCircle(34, 14, 14);
    return;
  }

  if (kind === 'asteroid') {
    object.body.setCircle(18, 6, 6);
    return;
  }

  if (kind === 'crystallizedOrb') {
    object.body.setCircle(CRYSTALLIZED_ORB_RADIUS, 2, 2);
    return;
  }

  object.body.setCircle(isEnergyOrbSpeedKind(kind) ? 16 : 15, isEnergyOrbSpeedKind(kind) ? 6 : 3, isEnergyOrbSpeedKind(kind) ? 6 : 3);
}

function getNextSpawnKinds(scene) {
  // Durante Marea de Plasma no debe caer ningun orbe/booster.
  // Las barras de plasma se gestionan con su propio scheduler.
  if (scene.activePlasmaWave && scene.activePlasmaWave.isSpawningPlasma) return [];

  if (scene.activeRedWave && scene.activeRedWave.isSpawningDamageBoosters) {
    return [scene.activeRedWave.spawnKind || 'damageBooster'];
  }
  if (scene.activeDroneWave && scene.activeDroneWave.isSpawningDrones) return [scene.activeDroneWave.spawnKind || 'spikeDrone'];
  if (scene.activeBossWave && scene.activeBossWave.isSpawningEnemies) return ['damageBooster'];
  if (scene.activeAsteroidWave && scene.activeAsteroidWave.isSpawningAsteroids) {
    return [Math.random() < ASTEROID_WAVE_BIG_ASTEROID_CHANCE ? 'bigAsteroid' : 'asteroid'];
  }

  if (scene.activeBossWave && scene.activeBossWave.isTravelEncounter) {
    const boosterKind = getNextBoosterKind(scene);
    return boosterKind ? [boosterKind] : [];
  }

  const kinds = [];
  const supplementalKind = getNextSupplementalSpawnKind(scene);
  if (supplementalKind) kinds.push(supplementalKind);
  kinds.push(getNextEnergyOrbKind(scene));
  return kinds;
}

function getNextEnergyOrbKind(scene) {
  if (scene.crystallizedOrbSpawnsUnlocked && Math.random() < CRYSTALLIZED_ORB_CHANCE) {
    return 'crystallizedOrb';
  }
  if (isEnergyPurifierActive()) return 'ball';
  return Math.random() < CONTAMINATED_ORB_CHANCE ? 'contaminatedOrb' : 'ball';
}

function getNextSupplementalSpawnKind(scene) {
  const candidates = [
    { kind: getNextTravelThreatKind(scene), weight: TRAVEL_THREAT_POOL_WEIGHT },
    { kind: getNextPlasmaKind(scene), weight: TRAVEL_HAZARD_POOL_WEIGHT },
    { kind: getNextAsteroidKind(scene), weight: TRAVEL_HAZARD_POOL_WEIGHT },
    { kind: getNextBoosterKind(scene), weight: TRAVEL_BOOSTER_POOL_WEIGHT },
  ].filter((candidate) => candidate.kind);

  return chooseWeightedSpawnCandidate(candidates);
}

function getNextTravelThreatKind(scene) {
  const isLevelBossActive = scene.activeBossWave && !scene.activeBossWave.isTravelEncounter;
  if ((!scene.obreraSpawnsUnlocked && !scene.scissorSpawnsUnlocked && !scene.droneSpawnsUnlocked && !scene.giroDroneSpawnsUnlocked && !scene.redNeedleSpawnsUnlocked && !scene.replicatorSpawnsUnlocked) || scene.activeRedWave || scene.activeDroneWave || scene.activeAsteroidWave || scene.activePlasmaWave || isLevelBossActive) return null;

  return chooseRolledSpawnOption([
    { kind: 'replicator', chance: !isSentinelActive(scene) && scene.replicatorSpawnsUnlocked ? REPLICATOR_SPAWN_CHANCE : 0 },
    { kind: 'redNeedle', chance: scene.redNeedleSpawnsUnlocked && !hasActiveRedNeedle(scene) ? RED_NEEDLE_SPAWN_CHANCE : 0 },
    { kind: 'giroDrone', chance: scene.giroDroneSpawnsUnlocked ? GIRODRONE_SPAWN_CHANCE : 0 },
    { kind: 'spikeDrone', chance: scene.droneSpawnsUnlocked ? SPIKE_DRONE_SPAWN_CHANCE : 0 },
    { kind: 'scissor', chance: scene.scissorSpawnsUnlocked ? SCISSOR_SPAWN_CHANCE : 0 },
    { kind: 'damageBooster', chance: scene.obreraSpawnsUnlocked ? OBRERA_SPAWN_CHANCE : 0 },
  ]);
}

function isSentinelActive(scene) {
  return Boolean(scene.activeBossWave && scene.activeBossWave.kind === 'boss');
}

function shouldStartTravelSentinel(scene) {
  if (!scene.travelSentinelUnlocked || scene.activeBossWave || scene.activeRedWave || scene.activeDroneWave || scene.activeAsteroidWave || scene.activePlasmaWave) return false;
  if (hasPendingBossWave(scene) || getActiveTimedBooster(scene) || hasFallingScoreBooster(scene) || hasActivePlasmaBars(scene)) return false;
  if (scene.time.now < scene.nextTravelSentinelEligibleAt) return false;
  if (Math.random() >= TRAVEL_SENTINEL_CHANCE) return false;

  return true;
}

function getNextAsteroidKind(scene) {
  if (!scene.asteroidSpawnsUnlocked || scene.activeRedWave || scene.activeDroneWave || scene.activeAsteroidWave || scene.activePlasmaWave || scene.activeBossWave) return null;

  if (Math.random() >= TRAVEL_ASTEROID_CHANCE) return null;
  return Math.random() < 0.24 ? 'bigAsteroid' : 'asteroid';
}

function getNextPlasmaKind(scene) {
  if (!scene.plasmaSpawnsUnlocked || scene.activeRedWave || scene.activeDroneWave || scene.activeAsteroidWave || scene.activePlasmaWave || scene.activeBossWave) return null;

  return Math.random() < TRAVEL_PLASMA_CHANCE ? 'plasmaBar' : null;
}

function getNextBoosterKind(scene) {
  if (hasFallingBooster(scene)) return null;

  const timedBoosterActive = getActiveTimedBooster(scene);
  return chooseRolledSpawnOption([
    { kind: 'scoreBooster', chance: timedBoosterActive || isSentinelActive(scene) || scoreBoosterLevel <= 0 ? 0 : getBoosterChanceForLevel(scoreBoosterLevel) },
    { kind: 'shieldBooster', chance: timedBoosterActive || shieldBoosterLevel <= 0 ? 0 : getBoosterChanceForLevel(shieldBoosterLevel) },
    { kind: 'lifeBooster', chance: canDropLifeBooster() ? getLifeBoosterChance() : 0 },
  ]);
}

function chooseRolledSpawnOption(options) {
  const candidates = options
    .filter((option) => option.chance > 0 && Math.random() < option.chance)
    .map((option) => ({ kind: option.kind, weight: option.chance }));

  return chooseWeightedSpawnCandidate(candidates);
}

function chooseWeightedSpawnCandidate(candidates) {
  const totalWeight = candidates.reduce((sum, candidate) => sum + candidate.weight, 0);
  if (totalWeight <= 0) return null;

  let roll = Math.random() * totalWeight;
  for (const candidate of candidates) {
    if (roll < candidate.weight) return candidate.kind;
    roll -= candidate.weight;
  }

  return candidates[candidates.length - 1].kind;
}

function hasFallingBooster(scene) {
  return scene.balls
    .getChildren()
    .some((ball) => ball.active && isHelpfulBoosterKind(ball.getData('kind')));
}

function hasFallingScoreBooster(scene) {
  return scene.balls
    .getChildren()
    .some((ball) => ball.active && ball.getData('kind') === 'scoreBooster');
}

function hasFallingAsteroid(scene) {
  return scene.balls
    .getChildren()
    .some((ball) => ball.active && isAsteroidKind(ball.getData('kind')));
}

function countActiveHostileFallingObjects(scene) {
  return scene.balls
    .getChildren()
    .filter((ball) => ball.active && isHostileContactKind(ball.getData('kind')))
    .length;
}

function hasActiveRedNeedle(scene) {
  return scene.balls
    .getChildren()
    .some((ball) => ball.active && ball.getData('kind') === 'redNeedle');
}

function getTextureForKind(kind) {
  if (kind === 'replicator') return 'ship';
  if (kind === 'redNeedle') return 'redNeedleShip';
  if (kind === 'redNeedleLaser') return 'redNeedleLaser';
  if (kind === 'bigAsteroid') return 'bigAsteroid';
  if (isAsteroidKind(kind)) return 'asteroid';
  if (kind === 'damageBooster') return 'enemyShipSmall';
  if (kind === 'scissor') return 'scissorShip';
  if (kind === 'scissorLeft') return 'scissorShipLeft';
  if (kind === 'scissorRight') return 'scissorShipRight';
  if (kind === 'spikeDrone') return 'spikeDrone';
  if (kind === 'giroDrone') return 'spikeDrone';
  if (kind === 'lifeBooster') return 'lifeBooster';
  if (kind === 'scoreBooster') return 'scoreBooster';
  if (kind === 'shieldBooster') return 'shieldBooster';
  if (kind === 'contaminatedOrb') return 'contaminatedBall';
  if (kind === 'crystallizedOrb') return 'crystallizedOrb';
  return 'goldBall';
}

function isBoosterKind(kind) {
  return kind === 'damageBooster' || kind === 'scissor' || isScissorHalfKind(kind) || kind === 'lifeBooster' || kind === 'scoreBooster' || kind === 'shieldBooster';
}

function isHelpfulBoosterKind(kind) {
  return kind === 'lifeBooster' || kind === 'scoreBooster' || kind === 'shieldBooster';
}

function isCollectibleBallKind(kind) {
  return kind === 'ball' || kind === 'crystallizedOrb';
}

function isEnergyOrbSpeedKind(kind) {
  return kind === 'ball' || kind === 'contaminatedOrb' || kind === 'crystallizedOrb';
}

function isAsteroidKind(kind) {
  return kind === 'asteroid' || kind === 'bigAsteroid';
}

function isScissorHalfKind(kind) {
  return kind === 'scissorLeft' || kind === 'scissorRight';
}

function isScissorKind(kind) {
  return kind === 'scissor' || isScissorHalfKind(kind);
}

function isShieldBlockedKind(kind) {
  return kind === 'damageBooster' || isScissorKind(kind) || kind === 'replicator' || kind === 'spikeDrone' || kind === 'giroDrone' || kind === 'redNeedle' || kind === 'redNeedleLaser' || kind === 'crystallizedOrb' || isAsteroidKind(kind);
}

function isHostileContactKind(kind) {
  return kind === 'contaminatedOrb' || isShieldBlockedKind(kind);
}

function findSpawnX(scene) {
  const min = 40;
  const max = Math.max(min, getGameWidth(scene) - 40);
  return Phaser.Math.Between(min, max);
}

function findSpawnXAwayFrom(scene, objects, minSpacing) {
  const min = 40;
  const max = Math.max(min, getGameWidth(scene) - 40);
  const activeObjects = objects.filter((object) => object && object.active);

  if (!activeObjects.length) return Phaser.Math.Between(min, max);

  for (let attempt = 0; attempt < 10; attempt += 1) {
    const x = Phaser.Math.Between(min, max);
    if (activeObjects.every((object) => Math.abs(object.x - x) >= minSpacing)) return x;
  }

  const candidates = [min, Math.round((min + max) / 2), max];
  return candidates.reduce((bestX, x) => (
    getClosestSpawnDistance(x, activeObjects) > getClosestSpawnDistance(bestX, activeObjects) ? x : bestX
  ), candidates[0]);
}

function getClosestSpawnDistance(x, objects) {
  return objects.reduce((closest, object) => Math.min(closest, Math.abs(object.x - x)), Infinity);
}

function findBoosterSpawnX(scene) {
  const min = 28;
  const max = Math.max(min, getGameWidth(scene) - 28);
  return Phaser.Math.Between(min, max);
}

function findGiroDroneSpawnX(scene) {
  const margin = Math.min(GIRODRONE_ORBIT_RADIUS + GIRODRONE_SATELLITE_RADIUS + 10, getGameWidth(scene) / 2 - 20);
  const min = margin;
  const max = Math.max(min, getGameWidth(scene) - margin);
  return Phaser.Math.Between(min, max);
}

function findAsteroidSpawnX(scene) {
  const margin = ASTEROID_WRAP_MARGIN;
  const min = -margin;
  const max = getGameWidth(scene) + margin;
  return Phaser.Math.Between(min, max);
}

function wrapAsteroidHorizontally(scene, asteroid) {
  const margin = ASTEROID_WRAP_MARGIN;
  if (asteroid.x < -margin) {
    asteroid.x = getGameWidth(scene) + margin;
    return;
  }

  if (asteroid.x > getGameWidth(scene) + margin) {
    asteroid.x = -margin;
  }
}

function findRedWaveEnemySpawnX(scene) {
  const margin = 34;
  const min = margin;
  const max = Math.max(min, getGameWidth(scene) - margin);
  const center = getGameWidth(scene) / 2;
  const recentEnemies = scene.balls
    .getChildren()
    .filter((ball) => (
      ball.active &&
      (ball.getData('kind') === 'damageBooster' || ball.getData('kind') === 'scissor') &&
      ball.y < RED_WAVE_RECENT_ENEMY_HEIGHT
    ));

  const roomyCandidates = [];
  for (let attempt = 0; attempt < 24; attempt += 1) {
    const x = Phaser.Math.Between(min, max);
    const hasRoom = recentEnemies.every((enemy) => Math.abs(enemy.x - x) >= RED_WAVE_MIN_ENEMY_SPACING);
    if (hasRoom) roomyCandidates.push(x);
  }

  if (roomyCandidates.length) {
    return Phaser.Utils.Array.GetRandom(roomyCandidates);
  }

  const fallbackCandidates = [];
  for (let i = 0; i < 10; i += 1) {
    const t = fallbackCandidates.length / 9;
    const laneX = Phaser.Math.Linear(min, max, t);
    fallbackCandidates.push(Phaser.Math.Clamp(laneX + Phaser.Math.Between(-18, 18), min, max));
  }

  fallbackCandidates.sort((a, b) => {
    const distanceDelta = getClosestEnemyDistance(b, recentEnemies) - getClosestEnemyDistance(a, recentEnemies);
    if (distanceDelta !== 0) return distanceDelta;
    return Math.abs(a - center) - Math.abs(b - center);
  });

  return Phaser.Utils.Array.GetRandom(fallbackCandidates.slice(0, 4));
}

function getClosestEnemyDistance(x, enemies) {
  if (!enemies.length) return Infinity;
  return enemies.reduce((closest, enemy) => Math.min(closest, Math.abs(enemy.x - x)), Infinity);
}

function getCaughtObject(scene, objectA, objectB) {
  if (objectA !== scene.ship && objectA.getData && objectA.getData('kind')) {
    return objectA;
  }

  if (objectB !== scene.ship && objectB.getData && objectB.getData('kind')) {
    return objectB;
  }

  return null;
}

function increaseDifficulty(scene) {
  const previousGravity = currentGravity;
  currentGravity = Math.min(MAX_BALL_GRAVITY, Math.round(BASE_GRAVITY * getSpeedMultiplierForLevel(playerLevel)));
  currentBoosterGravity = getBoosterGravityForCurrentSpeed();

  if (currentGravity > previousGravity) {
    currentSpawnDelay = getSpawnDelayForGravity(currentGravity);
  }

  updateSpeedTexts(scene);
  updateFallingObjectSpeeds(scene);
}

function getSpeedMultiplierForLevel(level) {
  if (level <= 1) return 1;
  if (level >= SPEED_TARGET_LEVEL) return MAX_SPEED_MULTIPLIER;
  const progress = Phaser.Math.Clamp((level - 1) / (SPEED_TARGET_LEVEL - 1), 0, 1);
  return 1 + progress * (MAX_SPEED_MULTIPLIER - 1);
}

function getBoosterGravityForCurrentSpeed() {
  return Math.min(MAX_BOOSTER_GRAVITY, Math.round(currentGravity * BOOSTER_GRAVITY_RATIO));
}

function resetGameSpeed(scene) {
  currentGravity = BASE_GRAVITY;
  currentBoosterGravity = getBoosterGravityForCurrentSpeed();
  currentSpawnDelay = INITIAL_SPAWN_DELAY;
  updateSpeedTexts(scene);
  updateFallingObjectSpeeds(scene);
}

function updateSpeedTexts(scene) {
  const multiplier = (currentGravity / BASE_GRAVITY).toFixed(2);
  const boosterMultiplier = (currentBoosterGravity / BASE_GRAVITY).toFixed(2);
  const currentHud = initHud();
  if (currentHud.speed) currentHud.speed.textContent = 'VEL ' + multiplier + 'x';
  if (currentHud.boostSpeed) currentHud.boostSpeed.textContent = 'BOOST ' + boosterMultiplier + 'x';
}

function updatePlayerLevelText(scene) {
  const currentHud = initHud();
  if (currentHud.level) {
    currentHud.level.textContent = isBossOnlyGameMode()
      ? Math.max(1, (scene && scene.bossOnlyBossNumber) || 1)
      : playerLevel;
  }
}

function updateStreakText() {
  const currentHud = initHud();
  if (currentHud.streak) currentHud.streak.textContent = energyStreak;
}

function updateFallingObjectSpeeds(scene) {
  scene.balls.getChildren().forEach((ball) => {
    if (!ball.active) return;
    const kind = ball.getData('kind');
    ball.body.setVelocityX(getHorizontalVelocity(kind, scene, ball));
    ball.body.setVelocityY(getFallingVelocity(kind, scene, ball));
  });

  if (scene.plasmaBars) {
    scene.plasmaBars.forEach((bar) => {
      if (!bar || !bar.active) return;
      bar.gapVelocity = bar.pausedGapVelocity || bar.gapVelocity || PLASMA_BAR_GAP_SPEED;
      delete bar.pausedVelocityY;
      delete bar.pausedGapVelocity;
    });
  }
}

function getFallingVelocity(kind, scene, object = null) {
  if (object && object.getData('fallVelocity')) {
    return object.getData('fallVelocity');
  }

  if (kind === 'redNeedle') return 0;
  if (kind === 'redNeedleLaser') return RED_NEEDLE_LASER_SPEED;
  if (kind === 'replicator') {
    if (scene.activeRedWave && scene.activeRedWave.bossKind === 'replicators') {
      return getFallingVelocity('damageBooster', scene);
    }
    return Math.round(currentGravity * TRAVEL_REPLICATOR_GRAVITY_RATIO);
  }

  if (kind === 'spikeDrone' || kind === 'giroDrone') {
    return Math.round(currentBoosterGravity * SPIKE_DRONE_GRAVITY_RATIO);
  }

  if ((kind === 'damageBooster' || isScissorKind(kind)) && scene.activeRedWave) {
    return Math.round(currentGravity * RED_WAVE_ENEMY_GRAVITY_RATIO);
  }

  if (isAsteroidKind(kind)) {
    const normalRatio = scene.activeAsteroidWave ? ASTEROID_WAVE_GRAVITY_RATIO : ASTEROID_GRAVITY_RATIO;
    const ratio = kind === 'bigAsteroid' ? BIG_ASTEROID_GRAVITY_RATIO : normalRatio;
    return Math.round(currentBoosterGravity * ratio);
  }

  return isEnergyOrbSpeedKind(kind) ? currentGravity : currentBoosterGravity;
}

function getHorizontalVelocity(kind, scene, object = null) {
  if (kind === 'redNeedle') {
    return object && object.getData('horizontalVelocity') ? object.getData('horizontalVelocity') : RED_NEEDLE_SPEED;
  }

  if (kind === 'redNeedleLaser') return 0;

  if (isScissorHalfKind(kind)) {
    return object && object.getData('horizontalVelocity') ? object.getData('horizontalVelocity') : (kind === 'scissorLeft' ? -SCISSOR_HALF_HORIZONTAL_SPEED : SCISSOR_HALF_HORIZONTAL_SPEED);
  }

  if (!isAsteroidKind(kind)) return 0;

  const storedDirection = object && object.getData('horizontalDirection');
  const storedVelocity = object && object.getData('horizontalVelocity');
  const direction = storedDirection || (storedVelocity ? Math.sign(storedVelocity) : (Math.random() < 0.5 ? -1 : 1));
  const normalRatio = scene.activeAsteroidWave ? ASTEROID_WAVE_HORIZONTAL_SPEED_RATIO : ASTEROID_HORIZONTAL_SPEED_RATIO;
  const ratio = kind === 'bigAsteroid' ? BIG_ASTEROID_HORIZONTAL_SPEED_RATIO : normalRatio;
  const velocity = Math.round(currentBoosterGravity * ratio) * direction;
  if (object) {
    object.setData('horizontalDirection', direction);
    object.setData('horizontalVelocity', velocity);
  }
  return velocity;
}

function getCurrentSpawnDelay(scene) {
  if (scene.activePlasmaWave) return PLASMA_WAVE_SPAWN_DELAY;
  if (scene.activeDroneWave) return getWaveSpawnDelay(scene, scene.activeDroneWave.spawnDelay || DRONE_WAVE_SPAWN_DELAY, scene.activeDroneWave.spawnKind || 'spikeDrone');
  if (scene.activeAsteroidWave) return getWaveSpawnDelay(scene, ASTEROID_WAVE_SPAWN_DELAY, 'asteroid');
  if (scene.activeRedWave) {
    const spawnKind = scene.activeRedWave.spawnKind || 'damageBooster';
    if (scene.activeRedWave.bossKind === 'replicators') return getWaveSpawnDelay(scene, REPLICATOR_WAVE_SPAWN_DELAY, spawnKind);
    if (scene.activeRedWave.bossKind === 'crystallized') return getWaveSpawnDelay(scene, CRYSTALLIZED_WAVE_SPAWN_DELAY, spawnKind);
    if (scene.activeRedWave.bossKind === 'scissors') return getWaveSpawnDelay(scene, SCISSOR_WAVE_SPAWN_DELAY, spawnKind);
    return getWaveSpawnDelay(scene, RED_WAVE_SPAWN_DELAY, spawnKind);
  }
  return currentSpawnDelay;
}

function getWaveSpawnDelay(scene, baseDelay, kind) {
  const velocity = Math.max(1, Math.abs(getFallingVelocity(kind, scene)));
  const spacingDelay = Math.ceil((WAVE_MIN_VERTICAL_SPAWN_SPACING / velocity) * 1000);
  return Math.max(baseDelay, spacingDelay);
}

function getSpawnDelayForGravity(gravity) {
  const speedProgress = Phaser.Math.Clamp(
    (gravity - BASE_GRAVITY) / (MAX_BALL_GRAVITY - BASE_GRAVITY),
    0,
    1
  );
  const easedRemaining = Math.pow(1 - speedProgress, SPAWN_DELAY_EASING);
  return Math.round(MIN_SPAWN_DELAY + (INITIAL_SPAWN_DELAY - MIN_SPAWN_DELAY) * easedRemaining);
}

function catchBall(ball, scene) {
  if (state !== 'playing' || !ball || !ball.active || ball === scene.ship) return;

  const x = ball.x;
  const y = ball.y;
  const kind = ball.getData('kind');
  const energyOrbColor = getEnergyOrbColor(ball);
  const isPurpleEnergy = energyOrbColor !== 'gold';
  const isPurifiedContaminatedOrb = kind === 'contaminatedOrb' && isEnergyPurifierActive();
  let hitFeedbackShown = false;
  let crystallizedOrbCollected = false;
  if (kind === 'spikeDrone') {
    const spikeState = ball.getData('spikeState');
    if (!isShieldActive(scene) && isSpikeDroneGreenState(spikeState)) {
      disableSpikeDrone(scene, ball);
      return;
    }
    if (spikeState !== 'expanded' && !isShieldActive(scene)) return;
  }
  if (kind === 'giroDrone') {
    const giroState = ball.getData('spikeState');
    if (giroState === 'disabled') return;
    if (!isShieldActive(scene) && isGiroDroneCoreOverlappingShip(scene, ball)) {
      if (isGiroDroneGreenState(giroState)) {
        disableGiroDrone(scene, ball);
        return;
      }
      if (isGiroDroneOrangeState(giroState)) {
        return;
      }
    }
  }

  if (kind === 'crystallizedOrb') {
    if (isCrystallizedOrbDangerousContact(scene, ball)) {
      handleHostileShipContact(scene, ball, x, y, kind, energyOrbColor);
      hitFeedbackShown = true;
    } else {
      collectEnergyOrb(scene, ball, x, y, energyOrbColor);
      crystallizedOrbCollected = true;
    }
  } else if (isPurifiedContaminatedOrb) {
    ball.destroy();
    rewardEnergyOrbCatch(scene, x, y, '#ffd84d', false);
  } else if (isHostileContactKind(kind)) {
    handleHostileShipContact(scene, ball, x, y, kind, energyOrbColor);
    hitFeedbackShown = true;
  } else if (kind === 'lifeBooster') {
    ball.destroy();
    gainLife(scene);
  } else if (kind === 'scoreBooster') {
    ball.destroy();
    activateScoreBooster(scene);
  } else if (kind === 'shieldBooster') {
    ball.destroy();
    activateShieldBooster(scene);
  } else {
    ball.destroy();
    const feedbackColor = energyOrbColor === 'pink' ? ENERGY_RESONANCE_COLOR : isPurpleEnergy ? '#d7a8ff' : '#ffd84d';
    rewardEnergyOrbCatch(scene, x, y, feedbackColor);
  }

  if (state !== 'playing') return;

  if (!hitFeedbackShown) {
    if (isHostileContactKind(kind) && kind !== 'crystallizedOrb' && !isPurifiedContaminatedOrb) {
      playBadSound(scene);
    } else if (isBoosterKind(kind)) {
      playBoosterSound(scene);
    } else {
      playCatchSound(scene);
    }
  }
  if (!hitFeedbackShown) {
    showAbsorbEffect(scene, x, y, isPurifiedContaminatedOrb ? 'ball' : kind, energyOrbColor);
  }

  if (kind === 'ball' || crystallizedOrbCollected || isPurifiedContaminatedOrb) {
    maybeOpenUpgradeChoice(scene);
  }
}

function isCrystallizedOrbDangerousContact(scene, orb) {
  if (isCrystallizedOrbSafeTopApproach(scene, orb)) return false;

  const crystalPolygon = CRYSTALLIZED_ORB_CRYSTAL_SHAPE.map(([offsetX, offsetY]) => ({
    x: orb.x + offsetX,
    y: orb.y + offsetY,
  }));
  return arePolygonsOverlapping(getShipHitboxPolygon(scene), crystalPolygon);
}

function isCrystallizedOrbSafeTopApproach(scene, orb) {
  if (scene.ship.y <= orb.y) return true;

  const previousPosition = scene.previousShipPosition;
  if (!previousPosition) return false;
  const now = scene.time ? scene.time.now : previousPosition.at;
  if (now - previousPosition.at > CRYSTALLIZED_ORB_SAFE_APPROACH_MEMORY) return false;

  const previousOrbY = orb.body && orb.body.prev
    ? orb.body.prev.y + orb.body.halfHeight
    : orb.y;
  return previousPosition.y <= previousOrbY;
}

function arePolygonsOverlapping(firstPolygon, secondPolygon) {
  if (firstPolygon.some((point) => isPointInPolygon(point.x, point.y, secondPolygon))) return true;
  if (secondPolygon.some((point) => isPointInPolygon(point.x, point.y, firstPolygon))) return true;

  return firstPolygon.some((firstPoint, firstIndex) => {
    const firstNextPoint = firstPolygon[(firstIndex + 1) % firstPolygon.length];
    return secondPolygon.some((secondPoint, secondIndex) => {
      const secondNextPoint = secondPolygon[(secondIndex + 1) % secondPolygon.length];
      return areLineSegmentsIntersecting(firstPoint, firstNextPoint, secondPoint, secondNextPoint);
    });
  });
}

function areLineSegmentsIntersecting(firstStart, firstEnd, secondStart, secondEnd) {
  const firstDirectionX = firstEnd.x - firstStart.x;
  const firstDirectionY = firstEnd.y - firstStart.y;
  const secondDirectionX = secondEnd.x - secondStart.x;
  const secondDirectionY = secondEnd.y - secondStart.y;
  const denominator = firstDirectionX * secondDirectionY - firstDirectionY * secondDirectionX;
  if (denominator === 0) return false;

  const startDifferenceX = secondStart.x - firstStart.x;
  const startDifferenceY = secondStart.y - firstStart.y;
  const firstDistance = (startDifferenceX * secondDirectionY - startDifferenceY * secondDirectionX) / denominator;
  const secondDistance = (startDifferenceX * firstDirectionY - startDifferenceY * firstDirectionX) / denominator;
  return firstDistance >= 0 && firstDistance <= 1 && secondDistance >= 0 && secondDistance <= 1;
}

function collectEnergyOrb(scene, orb, x, y, energyOrbColor) {
  orb.destroy();
  const isPurpleEnergy = energyOrbColor !== 'gold';
  const feedbackColor = energyOrbColor === 'pink' ? ENERGY_RESONANCE_COLOR : isPurpleEnergy ? '#d7a8ff' : '#ffd84d';
  rewardEnergyOrbCatch(scene, x, y, feedbackColor);
}

function rewardEnergyOrbCatch(scene, x, y, feedbackColor, registerBoosterCatch = true) {
  if (isBossOnlyGameMode()) return;
  const points = getEnergyBallValue() * scoreMultiplier;
  addScore(scene, points, true, { x, y, color: feedbackColor });
  ballsCaught += 1;
  increaseEnergyStreak(scene);
  if (registerBoosterCatch) registerScoreBoosterOrbCatch(scene);
}

function handleHostileShipContact(scene, hostile, x, y, kind, energyOrbColor = 'gold') {
  const isDangerousEnergyOrb = kind === 'contaminatedOrb' || kind === 'crystallizedOrb';
  if (!isShieldActive(scene) && isShipDamageInvulnerable(scene)) {
    if (isDangerousEnergyOrb && hostile && hostile.active) hostile.destroy();
    return;
  }
  if (isShieldActive(scene) && hostile && hostile.getData('hasBeenShieldBlocked')) return;

  const absorbKind = isDangerousEnergyOrb ? 'ball' : kind;
  const absorbEnergyColor = kind === 'contaminatedOrb' ? 'gold' : energyOrbColor;
  showAbsorbEffect(scene, x, y, absorbKind, absorbEnergyColor);
  if (!isShieldActive(scene) || kind === 'contaminatedOrb') {
    takeDirectDamage(scene);
    if (isDangerousEnergyOrb && hostile && hostile.active) hostile.destroy();
    return;
  }

  if (hostile) hostile.setData('hasBeenShieldBlocked', true);
  playShieldBlockSound(scene);
  flashPlayerShip(scene);
  awardEnemyDefeatScore(scene, SHIELD_BLOCK_SCORE, x, y, '#4da3ff');
  destroyShieldBlockedHostile(scene, hostile);
}

function destroyShieldBlockedHostile(scene, hostile) {
  if (!hostile || !hostile.active) return;
  if (scene && scene.tweens) scene.tweens.killTweensOf(hostile);
  hostile.destroy();
}
