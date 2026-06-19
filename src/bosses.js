// Oleadas especiales, jefes y ataques de gran escala.
// Mantener esto fuera del spawner normal ayuda a aislar encuentros con reglas propias.

function activateRedWave(scene, bossConfig = createBossConfig('red')) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  const isScissorSwarm = bossConfig.kind === 'scissors';
  scene.activeRedWave = {
    endsAt: null,
    duration: bossConfig.duration || (isScissorSwarm ? SCISSOR_SWARM_DURATION : RED_WAVE_DURATION),
    isSpawningDamageBoosters: false,
    hasStarted: false,
    hasShownEchoWarning: false,
    isDraining: false,
    spawnKind: isScissorSwarm ? 'scissor' : 'damageBooster',
    bossKind: isScissorSwarm ? 'scissors' : 'red',
    bossName: bossConfig.name || (isScissorSwarm ? 'Enjambre de Escisoras' : 'Enjambre de Obreras'),
  };

  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));

  hideWaveBar(scene);

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  scheduleWaveStart(scene, 'red');
}

function activateReplicatorWave(scene, bossConfig = createBossConfig('replicators')) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activeRedWave = {
    endsAt: null,
    duration: bossConfig.duration || REPLICATOR_WAVE_DURATION,
    isSpawningDamageBoosters: false,
    hasStarted: false,
    hasShownEchoWarning: false,
    isDraining: false,
    spawnKind: 'replicator',
    bossKind: 'replicators',
    bossName: bossConfig.name || 'Replicadores',
  };

  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));
  hideWaveBar(scene);

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  scheduleWaveStart(scene, 'red');
}

function activateCrystallizedWave(scene, bossConfig = createBossConfig('crystallized')) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activeRedWave = {
    endsAt: null,
    duration: bossConfig.duration || CRYSTALLIZED_WAVE_DURATION,
    isSpawningDamageBoosters: false,
    hasStarted: false,
    hasShownEchoWarning: false,
    isDraining: false,
    spawnKind: 'crystallizedOrb',
    bossKind: 'crystallized',
    bossName: bossConfig.name || 'Tormenta Cristalizada',
  };

  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));
  hideWaveBar(scene);

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  scheduleWaveStart(scene, 'red');
}

function clearFallingBoosters(scene) {
  if (!scene.balls) return;
  scene.balls.getChildren().forEach((ball) => {
    if (ball.active && isBoosterKind(ball.getData('kind'))) {
      ball.destroy();
    }
  });
}

function clearAllFallingObjects(scene) {
  if (!scene.balls) return;
  scene.balls.clear(true, true);
  clearPlasmaBars(scene);
}

function updateRedWave(scene) {
  const redWave = scene.activeRedWave;
  if (!redWave) return;
  if (!redWave.hasStarted) return;

  const remaining = Math.max(0, redWave.endsAt - scene.time.now);
  if (remaining > 0) return;

  finishWaveSpawning(scene, redWave, 'red');
}

function activateDroneWave(scene, bossConfig = createBossConfig('drones')) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activeDroneWave = {
    endsAt: null,
    duration: bossConfig.duration || DRONE_WAVE_DURATION,
    isSpawningDrones: false,
    hasStarted: false,
    isDraining: false,
    spawnKind: bossConfig.kind === 'girodrones' ? 'giroDrone' : 'spikeDrone',
    spawnDelay: bossConfig.kind === 'girodrones' ? GIRODRONE_WAVE_SPAWN_DELAY : DRONE_WAVE_SPAWN_DELAY,
    bossKind: bossConfig.kind || 'drones',
    bossName: bossConfig.name || 'Drones',
  };

  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));

  hideWaveBar(scene);

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  scheduleWaveStart(scene, 'drones');
}

function updateDroneWave(scene) {
  const droneWave = scene.activeDroneWave;
  if (!droneWave) return;
  if (!droneWave.hasStarted) return;

  const remaining = Math.max(0, droneWave.endsAt - scene.time.now);
  if (remaining > 0) return;

  finishWaveSpawning(scene, droneWave, 'drones');
}

function activateAsteroidWave(scene, bossConfig = createBossConfig('asteroid')) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activeAsteroidWave = {
    endsAt: null,
    duration: bossConfig.duration || ASTEROID_WAVE_DURATION,
    isSpawningAsteroids: false,
    bossKind: 'asteroid',
    hasStarted: false,
    hasShownEchoWarning: false,
    isDraining: false,
    bossName: bossConfig.name || 'Cinturón',
  };

  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));

  hideWaveBar(scene);

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  scheduleWaveStart(scene, 'asteroid');
}

function activatePlasmaWave(scene, bossConfig = createBossConfig('plasma')) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activePlasmaWave = {
    endsAt: null,
    duration: bossConfig.duration || PLASMA_WAVE_DURATION,
    hasStarted: false,
    hasShownEchoWarning: false,
    isSpawningPlasma: false,
    bossKind: 'plasma',
    isDraining: false,
    bossName: bossConfig.name || 'Marea de Plasma',
  };

  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));

  hideWaveBar(scene);

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  scheduleWaveStart(scene, 'plasma');
}

function hideWaveBar(scene) {
  if (syncActiveTimedBoosterBar(scene)) return;
  setHudBoosterVisible(false);
  updateBoosterBar(scene, 0);
}

function updateAsteroidWave(scene) {
  const asteroidWave = scene.activeAsteroidWave;
  if (!asteroidWave) return;
  if (!asteroidWave.hasStarted) return;

  const remaining = Math.max(0, asteroidWave.endsAt - scene.time.now);
  if (remaining > 0) return;

  finishWaveSpawning(scene, asteroidWave, 'asteroid');
}

function updatePlasmaWave(scene) {
  const plasmaWave = scene.activePlasmaWave;
  if (!plasmaWave) return;
  if (!plasmaWave.hasStarted) return;

  const remaining = Math.max(0, plasmaWave.endsAt - scene.time.now);
  if (remaining > 0) return;

  finishWaveSpawning(scene, plasmaWave, 'plasma');
}

function activateBossWave(scene, bossConfig = createBossConfig('boss')) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activeBossWave = {
    kind: 'boss',
    endsAt: null,
    duration: bossConfig.duration || BOSS_WAVE_DURATION,
    hasStarted: false,
    hasShownEchoWarning: false,
    attacksDone: 0,
    attacksTotal: bossConfig.attacks || BOSS_WAVE_ATTACKS,
    isRetreating: false,
    bossName: bossConfig.name || 'Centinela',
    isTravelEncounter: false,
  };

  hideWaveBar(scene);

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  scheduleWaveStart(scene, 'boss');
}

function activateRedNeedleBossWave(scene, bossConfig = createBossConfig('redNeedleBoss')) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activeBossWave = {
    kind: 'redNeedleBoss',
    endsAt: null,
    duration: bossConfig.duration || BOSS_WAVE_DURATION,
    hasStarted: false,
    hasShownEchoWarning: false,
    attacksDone: 0,
    attacksTotal: bossConfig.attacks || RED_NEEDLE_BOSS_ATTACKS,
    isRetreating: false,
    bossName: bossConfig.name || 'Aguja Roja',
    isTravelEncounter: false,
  };

  hideWaveBar(scene);

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  scheduleWaveStart(scene, 'boss');
}

function activateTroyanoBossWave(scene, bossConfig = createBossConfig('troyanos')) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activeBossWave = {
    kind: 'troyanos',
    endsAt: null,
    duration: bossConfig.duration || 0,
    hasStarted: false,
    hasShownEchoWarning: false,
    spawnedRegisters: 0,
    collectedRegisters: 0,
    registersTotal: bossConfig.registers || TROYANO_BOSS_REGISTER_COUNT,
    isSpawningTroyanos: false,
    isRetreating: false,
    bossName: bossConfig.name || 'Troyanos',
    isTravelEncounter: false,
  };

  hideWaveBar(scene);

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  scheduleWaveStart(scene, 'boss');
}

function activateTravelSentinel(scene) {
  if (scene.activeBossWave || state !== 'playing') return;

  playBackgroundMusic(scene);
  scene.activeBossWave = {
    kind: 'boss',
    endsAt: null,
    duration: 12000,
    hasStarted: false,
    attacksDone: 0,
    attacksTotal: TRAVEL_SENTINEL_ATTACKS,
    isRetreating: false,
    bossName: 'Centinela',
    isTravelEncounter: true,
  };
  scene.nextTravelSentinelEligibleAt = scene.time.now + TRAVEL_SENTINEL_COOLDOWN;
  startBossWave(scene);
}

function activateLevelBoss(scene, bossConfig) {
  if (!bossConfig) return;
  if (bossConfig.kind === 'red' || bossConfig.kind === 'scissors') {
    activateRedWave(scene, bossConfig);
  } else if (bossConfig.kind === 'drones' || bossConfig.kind === 'girodrones') {
    activateDroneWave(scene, bossConfig);
  } else if (bossConfig.kind === 'asteroid') {
    activateAsteroidWave(scene, bossConfig);
  } else if (bossConfig.kind === 'plasma') {
    activatePlasmaWave(scene, bossConfig);
  } else if (bossConfig.kind === 'redNeedleBoss') {
    activateRedNeedleBossWave(scene, bossConfig);
  } else if (bossConfig.kind === 'troyanos') {
    activateTroyanoBossWave(scene, bossConfig);
  } else if (bossConfig.kind === 'replicators') {
    activateReplicatorWave(scene, bossConfig);
  } else if (bossConfig.kind === 'crystallized') {
    activateCrystallizedWave(scene, bossConfig);
  } else if (bossConfig.kind === 'boss') {
    activateBossWave(scene, bossConfig);
  }
}

function updateBossWave(scene) {
  const bossWave = scene.activeBossWave;
  if (!bossWave || !bossWave.hasStarted) return;

  if (bossWave.kind === 'redNeedleBoss') {
    updateRedNeedleBossWave(scene, bossWave);
    return;
  }

  if (bossWave.kind === 'troyanos') {
    updateTroyanoBossWave(scene, bossWave);
    return;
  }

  updateSentinelEyeTracking(scene);
  updateBossLaserTracking(scene);
  updateBossElectricLaserEffects(scene);
  recoverStalledBossWave(scene, bossWave);
  if (scene.activeBossWave !== bossWave) return;

  if (
    (
      (scene.bossLaser && isLaserTouchingShip(scene, scene.bossLaser)) ||
      (scene.bossHorizontalLaser && isLaserTouchingShip(scene, scene.bossHorizontalLaser))
    ) &&
    !isShieldActive(scene)
  ) {
    takeDirectDamage(scene);
  }
}

function recoverStalledBossWave(scene, bossWave) {
  if (state !== 'playing') return;

  if (bossWave.kind === 'redNeedleBoss') {
    if (!scene.bossShip || !scene.bossShip.active) {
      resetBossWave(scene);
      scheduleNextSpawn(scene);
      return;
    }
    if (!bossWave.currentPass && !scene.bossEnterTween && !scene.redNeedleBossPassEvent && !bossWave.isRetreating) {
      if (bossWave.attacksDone >= bossWave.attacksTotal) {
        retreatRedNeedleBoss(scene);
      } else {
        launchRedNeedleBossPass(scene);
      }
    }
    return;
  }

  if (!scene.bossShip || !scene.bossShip.active) {
    resetBossWave(scene);
    scheduleNextSpawn(scene);
    return;
  }

  if (
    scene.bossEnterTween ||
    scene.bossExitTween ||
    scene.bossAttackEvent ||
    scene.bossLaserEvent ||
    scene.bossHorizontalLaserEvent ||
    scene.bossLaserClearEvent ||
    scene.bossLaser ||
    scene.bossHorizontalLaser
  ) {
    return;
  }

  if (bossWave.isRetreating) {
    endWaveAfterPause(scene, 'boss');
    return;
  }

  if (bossWave.attacksDone >= bossWave.attacksTotal) {
    retreatBoss(scene);
    return;
  }

  scheduleBossAttack(scene, BOSS_ATTACK_GAP);
}

function createSentinelShip(scene) {
  const bottomLimit = getXyShipBottomLimit(scene);
  const armTop = -34;
  const armBottom = bottomLimit - SENTINEL_TARGET_Y;
  const armHeight = Math.max(BOSS_HEIGHT, armBottom - armTop);
  const armWidth = 34;
  const armRadius = 8;
  const sideInset = -22;
  const leftArmX = -getGameWidth(scene) / 2 + sideInset;
  const rightArmX = getGameWidth(scene) / 2 - sideInset - armWidth;
  const container = scene.add.container(getGameWidth(scene) / 2, getSentinelHiddenY(scene));
  const arms = scene.make.graphics({ x: 0, y: 0, add: false });

  arms.fillStyle(0x210815, 0.96);
  arms.fillRoundedRect(leftArmX, armTop, armWidth, armHeight, armRadius);
  arms.fillRoundedRect(rightArmX, armTop, armWidth, armHeight, armRadius);

  arms.fillStyle(0x8f172d, 0.96);
  arms.fillRoundedRect(leftArmX + 6, armTop + 12, armWidth - 12, armHeight - 24, 6);
  arms.fillRoundedRect(rightArmX + 6, armTop + 12, armWidth - 12, armHeight - 24, 6);

  arms.fillStyle(0x541020, 1);
  arms.fillRoundedRect(leftArmX + 13, armTop + 34, armWidth - 26, armHeight - 68, 4);
  arms.fillRoundedRect(rightArmX + 13, armTop + 34, armWidth - 26, armHeight - 68, 4);

  arms.fillStyle(0xff4058, 0.68);
  [70, 150, 230, 310, 390, 470].forEach((offset) => {
    if (armTop + offset > armBottom - 14) return;
    arms.fillCircle(leftArmX + armWidth / 2, armTop + offset, 7);
    arms.fillCircle(rightArmX + armWidth / 2, armTop + offset, 7);
  });

  arms.fillStyle(0xffd0d7, 0.58);
  [70, 230, 390].forEach((offset) => {
    if (armTop + offset > armBottom - 14) return;
    arms.fillCircle(leftArmX + armWidth / 2, armTop + offset, 2.5);
    arms.fillCircle(rightArmX + armWidth / 2, armTop + offset, 2.5);
  });

  arms.lineStyle(2, 0xff9aaa, 0.34);
  arms.strokeRoundedRect(leftArmX, armTop, armWidth, armHeight, armRadius);
  arms.strokeRoundedRect(rightArmX, armTop, armWidth, armHeight, armRadius);
  arms.lineStyle(1, 0xffd0d7, 0.22);
  arms.lineBetween(leftArmX + 8, armTop + 18, leftArmX + 8, armBottom - 12);
  arms.lineBetween(rightArmX + armWidth - 8, armTop + 18, rightArmX + armWidth - 8, armBottom - 12);

  const body = scene.add.image(0, 0, 'bossShip').setOrigin(0.5, 0.5);
  const eyeGlow = scene.add.circle(0, 27, 11, 0xffa7b4, 0.92)
    .setBlendMode(Phaser.BlendModes.ADD);
  const eyeCore = scene.add.circle(0, 27, 6, 0xffedf0, 0.98)
    .setBlendMode(Phaser.BlendModes.ADD);
  const eyeHighlight = scene.add.circle(-2, 25, 2.5, 0xffffff, 0.98)
    .setBlendMode(Phaser.BlendModes.ADD);
  container
    .add([arms, body, eyeGlow, eyeCore, eyeHighlight])
    .setDepth(FX_DEPTH + 1)
    .setData('sentinelHiddenY', getSentinelHiddenY(scene))
    .setData('sentinelEyeGlow', eyeGlow)
    .setData('sentinelEyeCore', eyeCore)
    .setData('sentinelEyeHighlight', eyeHighlight);

  return container;
}

function updateSentinelEyeTracking(scene) {
  const sentinel = scene.bossShip;
  if (!sentinel || !sentinel.getData || !scene.ship) return;

  const eyeGlow = sentinel.getData('sentinelEyeGlow');
  const eyeCore = sentinel.getData('sentinelEyeCore');
  const eyeHighlight = sentinel.getData('sentinelEyeHighlight');
  if (!eyeGlow || !eyeCore || !eyeHighlight) return;

  const eyeWorldX = sentinel.x;
  const eyeWorldY = sentinel.y + 27;
  const angle = Phaser.Math.Angle.Between(eyeWorldX, eyeWorldY, scene.ship.x, scene.ship.y);
  const distance = Phaser.Math.Distance.Between(eyeWorldX, eyeWorldY, scene.ship.x, scene.ship.y);
  const trackingStrength = Phaser.Math.Clamp(distance / 180, 0.35, 1);
  const targetX = Math.cos(angle) * 7 * trackingStrength;
  const targetY = Math.sin(angle) * 6 * trackingStrength;
  const nextX = Phaser.Math.Linear(eyeCore.x, targetX, 0.16);
  const nextY = Phaser.Math.Linear(eyeCore.y - 27, targetY, 0.16);

  eyeGlow.setPosition(nextX * 0.42, 27 + nextY * 0.42);
  eyeCore.setPosition(nextX, 27 + nextY);
  eyeHighlight.setPosition(nextX - 2, 27 + nextY - 2);
}

function getSentinelHiddenY(scene) {
  return -(getXyShipBottomLimit(scene) - SENTINEL_TARGET_Y + 70);
}

function startBossWave(scene) {
  const bossWave = scene.activeBossWave;
  if (!bossWave || bossWave.hasStarted) return;

  if (bossWave.kind === 'redNeedleBoss') {
    startRedNeedleBossWave(scene, bossWave);
    return;
  }

  if (bossWave.kind === 'troyanos') {
    startTroyanoBossWave(scene, bossWave);
    return;
  }

  scene.waveStartEvent = null;
  bossWave.hasStarted = true;
  bossWave.endsAt = scene.time.now + bossWave.duration;
  bossWave.attacksDone = 0;

  hideWaveBar(scene);
  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));

  scene.bossShip = createSentinelShip(scene);

  scene.bossEnterTween = scene.tweens.add({
    targets: scene.bossShip,
    y: SENTINEL_TARGET_Y,
    duration: 1100,
    ease: 'Sine.easeOut',
    onComplete: () => {
      scene.bossEnterTween = null;
      scheduleBossAttack(scene, BOSS_ATTACK_GAP);
    },
  });
}

function startTroyanoBossWave(scene, bossWave) {
  scene.waveStartEvent = null;
  bossWave.hasStarted = true;
  bossWave.endsAt = null;
  bossWave.spawnedRegisters = 0;
  bossWave.collectedRegisters = 0;
  bossWave.isSpawningTroyanos = true;

  hideWaveBar(scene);
  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));
  spawnNextTroyanoBossPair(scene);
}

function spawnNextTroyanoBossPair(scene) {
  const bossWave = scene.activeBossWave;
  if (!bossWave || bossWave.kind !== 'troyanos' || !bossWave.isSpawningTroyanos || state !== 'playing') return;

  if (bossWave.spawnedRegisters >= bossWave.registersTotal) {
    bossWave.isSpawningTroyanos = false;
    stopBossEnemySpawns(scene);
    return;
  }

  const troyano = createTroyanoLinkedRegister(
    scene,
    { id: 'bossTroyanos', skipTroyanoLink: true },
    [],
    { countForBoss: true }
  );
  if (troyano) bossWave.spawnedRegisters += 1;

  if (bossWave.spawnedRegisters < bossWave.registersTotal) {
    scene.bossEnemySpawnEvent = scene.time.addEvent({
      delay: TROYANO_BOSS_SPAWN_DELAY,
      callback: () => {
        scene.bossEnemySpawnEvent = null;
        spawnNextTroyanoBossPair(scene);
      },
    });
  } else {
    bossWave.isSpawningTroyanos = false;
  }
}

function recordTroyanoBossRegisterCollected(scene) {
  const bossWave = scene && scene.activeBossWave;
  if (!bossWave || bossWave.kind !== 'troyanos') return;
  bossWave.collectedRegisters = Math.min(
    bossWave.registersTotal,
    (bossWave.collectedRegisters || 0) + 1
  );
}

function updateTroyanoBossWave(scene, bossWave) {
  if (bossWave.isRetreating) return;
  if ((bossWave.collectedRegisters || 0) < bossWave.registersTotal) return;
  if (getActiveTroyanos(scene).length > 0) return;

  bossWave.isRetreating = true;
  stopBossEnemySpawns(scene);
  endWaveAfterPause(scene, 'boss');
}

function startRedNeedleBossWave(scene, bossWave) {
  scene.waveStartEvent = null;
  bossWave.hasStarted = true;
  bossWave.endsAt = scene.time.now + bossWave.duration;
  bossWave.attacksDone = 0;
  bossWave.currentPass = null;

  hideWaveBar(scene);
  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));

  scene.bossShip = scene.add.image(-RED_NEEDLE_WIDTH, RED_NEEDLE_Y, 'redNeedleShip')
    .setOrigin(0.5, 0.5)
    .setScale(1.35)
    .setDepth(FX_DEPTH + 1);

  launchRedNeedleBossPass(scene);
}

function updateRedNeedleBossWave(scene, bossWave) {
  recoverStalledBossWave(scene, bossWave);
  if (scene.activeBossWave !== bossWave || bossWave.isRetreating || !bossWave.currentPass || !scene.bossShip) return;

  const pass = bossWave.currentPass;
  while (pass.shotsFired < pass.shots.length) {
    const shot = pass.shots[pass.shotsFired];
    const reachedShot = pass.direction > 0 ? scene.bossShip.x >= shot.x : scene.bossShip.x <= shot.x;
    if (!reachedShot) break;

    fireRedNeedleBossShot(scene, shot);
    pass.shotsFired += 1;
  }

  if (isRedNeedleOverlappingShip(scene, scene.bossShip, 1.35)) {
    handleHostileShipContact(scene, scene.bossShip, scene.bossShip.x, scene.bossShip.y, 'redNeedle');
  }
}

function launchRedNeedleBossPass(scene) {
  const bossWave = scene.activeBossWave;
  if (!bossWave || bossWave.kind !== 'redNeedleBoss' || !scene.bossShip || state !== 'playing') return;

  if (bossWave.attacksDone >= bossWave.attacksTotal) {
    retreatRedNeedleBoss(scene);
    return;
  }

  const width = getGameWidth(scene);
  const margin = RED_NEEDLE_WIDTH * 1.35;
  const direction = bossWave.attacksDone % 2 === 0 ? 1 : -1;
  const startX = direction > 0 ? -margin : width + margin;
  const endX = direction > 0 ? width + margin : -margin;

  scene.bossShip
    .setPosition(startX, RED_NEEDLE_Y)
    .setFlipX(direction < 0)
    .setVisible(true);

  bossWave.currentPass = {
    direction,
    shotsFired: 0,
    shots: getRedNeedleBossShots(scene, bossWave.attacksDone, direction),
  };

  scene.bossEnterTween = scene.tweens.add({
    targets: scene.bossShip,
    x: endX,
    duration: RED_NEEDLE_BOSS_PASS_DURATION,
    ease: 'Linear',
    onComplete: () => {
      scene.bossEnterTween = null;
      bossWave.currentPass = null;
      bossWave.attacksDone += 1;

      if (bossWave.attacksDone >= bossWave.attacksTotal) {
        retreatRedNeedleBoss(scene);
        return;
      }

      scene.redNeedleBossPassEvent = scene.time.addEvent({
        delay: RED_NEEDLE_BOSS_PASS_GAP,
        callback: () => {
          scene.redNeedleBossPassEvent = null;
          launchRedNeedleBossPass(scene);
        },
      });
    },
  });
}

function getRedNeedleBossShots(scene, passIndex, direction) {
  const width = getGameWidth(scene);
  const normal = [0.2, 0.4, 0.6, 0.8].map((ratio) => ({ x: width * ratio, offsets: [0] }));
  const patterns = [
    normal,
    normal,
    [0.25, 0.5, 0.75].map((ratio) => ({ x: width * ratio, offsets: [-22, 22] })),
    [
      { x: width * 0.16, offsets: [-26] },
      { x: width * 0.32, offsets: [22] },
      { x: width * 0.48, offsets: [-18] },
      { x: width * 0.64, offsets: [18] },
      { x: width * 0.8, offsets: [0] },
    ],
    [
      { x: width * 0.14, offsets: [0] },
      { x: width * 0.3, offsets: [0] },
      { x: width * 0.5, offsets: [-34, 34] },
      { x: width * 0.7, offsets: [0] },
      { x: width * 0.86, offsets: [0] },
    ],
    [
      { x: width * 0.18, offsets: [0] },
      { x: width * 0.34, offsets: [-24, 24] },
      { x: width * 0.5, offsets: [0] },
      { x: width * 0.66, offsets: [-24, 24] },
      { x: width * 0.82, offsets: [0] },
    ],
  ];

  const shots = patterns[passIndex] || normal;
  return direction > 0 ? shots : shots.slice().reverse();
}

function fireRedNeedleBossShot(scene, shot) {
  const offsets = shot.offsets || [0];
  offsets.forEach((offset) => {
    const x = Phaser.Math.Clamp(shot.x + offset, RED_NEEDLE_LASER_WIDTH, getGameWidth(scene) - RED_NEEDLE_LASER_WIDTH);
    spawnRedNeedleLaser(scene, x, RED_NEEDLE_Y + RED_NEEDLE_HEIGHT / 2 + 16);
  });
}

function retreatRedNeedleBoss(scene) {
  const bossWave = scene.activeBossWave;
  if (!bossWave || bossWave.isRetreating) return;

  bossWave.isRetreating = true;
  bossWave.currentPass = null;
  if (scene.redNeedleBossPassEvent) {
    scene.redNeedleBossPassEvent.remove(false);
    scene.redNeedleBossPassEvent = null;
  }
  if (scene.bossEnterTween) {
    scene.bossEnterTween.stop();
    scene.bossEnterTween = null;
  }

  if (scene.bossShip) scene.bossShip.destroy();
  scene.bossShip = null;
  endWaveAfterPause(scene, 'boss');
}

function stopBossEnemySpawns(scene) {
  if (!scene.bossEnemySpawnEvent) return;
  scene.bossEnemySpawnEvent.remove(false);
  scene.bossEnemySpawnEvent = null;
}

function scheduleBossAttack(scene, delay = BOSS_ATTACK_GAP) {
  if (!scene.activeBossWave || state !== 'playing') return;

  scene.bossAttackEvent = scene.time.addEvent({
    delay,
    callback: () => beginBossLaserCharge(scene),
  });
}

function beginBossLaserCharge(scene) {
  scene.bossAttackEvent = null;

  const bossWave = scene.activeBossWave;
  if (!bossWave || !scene.bossShip) return;

  const laserX = getNextBossLaserX(scene, bossWave);
  const laserY = getNextBossLaserY(scene, bossWave);
  bossWave.currentLaserX = laserX;
  bossWave.currentLaserY = laserY;
  showBossLaserWarning(scene, laserX);

  scene.bossLaserEvent = scene.time.addEvent({
    delay: BOSS_LASER_WARN_DURATION,
    callback: () => fireBossLaser(scene, laserX, laserY),
  });
}

function getNextBossLaserX(scene, bossWave) {
  const min = 46;
  const max = getGameWidth(scene) - 46;
  const blockedX = bossWave.previousLaserX;
  const playerX = scene.ship ? scene.ship.x : getGameWidth(scene) / 2;
  const requiredGap = Math.max(BOSS_LASER_MIN_X_GAP, BOSS_LASER_CHAIN_MIN_X_GAP);

  if (Phaser.Math.FloatBetween(0, 1) < BOSS_LASER_TRACKING_CHANCE) {
    const trackedX = Phaser.Math.Clamp(
      playerX + Phaser.Math.Between(-BOSS_LASER_TRACKING_JITTER, BOSS_LASER_TRACKING_JITTER),
      min,
      max
    );
    if (blockedX === undefined || Math.abs(trackedX - blockedX) >= BOSS_LASER_MIN_X_GAP) {
      return trackedX;
    }
  }

  const roomyCandidates = [];

  for (let attempt = 0; attempt < 36; attempt += 1) {
    const x = Phaser.Math.Between(min, max);
    const farFromPrevious = blockedX === undefined || Math.abs(x - blockedX) >= requiredGap;
    if (farFromPrevious) {
      roomyCandidates.push(x);
    }
  }

  if (roomyCandidates.length) {
    return Phaser.Utils.Array.GetRandom(roomyCandidates);
  }

  const anchorX = blockedX === undefined ? getGameWidth(scene) / 2 : blockedX;
  const leftX = Phaser.Math.Clamp(anchorX - requiredGap, min, max);
  const rightX = Phaser.Math.Clamp(anchorX + requiredGap, min, max);
  return Math.abs(rightX - playerX) > Math.abs(leftX - playerX) ? rightX : leftX;
}

function getNextBossLaserY(scene, bossWave) {
  const min = getXyShipTopLimit(scene);
  const max = getXyShipBottomLimit(scene);
  const blockedY = bossWave.previousHorizontalLaserY;
  const playerY = scene.ship ? scene.ship.y : getShipY(scene);
  const requiredGap = BOSS_HORIZONTAL_LASER_MIN_Y_GAP;

  if (Phaser.Math.FloatBetween(0, 1) < BOSS_HORIZONTAL_LASER_TRACKING_CHANCE) {
    const trackedY = Phaser.Math.Clamp(
      playerY + Phaser.Math.Between(-BOSS_HORIZONTAL_LASER_TRACKING_JITTER, BOSS_HORIZONTAL_LASER_TRACKING_JITTER),
      min,
      max
    );
    if (blockedY === undefined || Math.abs(trackedY - blockedY) >= requiredGap) {
      return trackedY;
    }
  }

  const roomyCandidates = [];

  for (let attempt = 0; attempt < 30; attempt += 1) {
    const y = Phaser.Math.Between(min, max);
    const farFromPrevious = blockedY === undefined || Math.abs(y - blockedY) >= requiredGap;
    if (farFromPrevious) {
      roomyCandidates.push(y);
    }
  }

  if (roomyCandidates.length) {
    return Phaser.Utils.Array.GetRandom(roomyCandidates);
  }

  const anchorY = blockedY === undefined ? playerY : blockedY;
  const topY = Phaser.Math.Clamp(anchorY - requiredGap, min, max);
  const bottomY = Phaser.Math.Clamp(anchorY + requiredGap, min, max);
  return Math.abs(bottomY - playerY) > Math.abs(topY - playerY) ? bottomY : topY;
}

function showBossLaserWarning(scene, laserX) {
  clearBossWarningParticles(scene);
  const laserTop = getBossVerticalLaserTop(scene);
  const laserLength = getGameHeight(scene) - laserTop;
  createBossLaserWarningEffect(
    scene,
    laserX,
    laserTop + laserLength / 2,
    laserLength
  );
}

function getBossVerticalLaserTop(scene) {
  return Math.max(0, getXyShipTopLimit(scene) - BOSS_LASER_SENTINEL_OVERLAP);
}

function showBossHorizontalLaserWarning(scene, laserY) {
  createBossLaserWarningEffect(
    scene,
    getGameWidth(scene) / 2,
    laserY,
    getGameWidth(scene) - 32,
    true
  );
}

function updateBossLaserTracking(scene) {
  if (!scene.ship || !scene.ship.active) return;

  const frameDelta = scene.game && scene.game.loop ? scene.game.loop.delta : 16;
  const delta = Phaser.Math.Clamp(frameDelta, 0, 50);

  if (scene.bossLaser && scene.bossLaser.active) {
    const nextX = moveValueToward(
      scene.bossLaser.x,
      Phaser.Math.Clamp(scene.ship.x, 46, getGameWidth(scene) - 46),
      BOSS_LASER_TRACK_SPEED * delta / 1000
    );
    setBossVerticalLaserX(scene, nextX);
  }

  if (scene.bossHorizontalLaser && scene.bossHorizontalLaser.active) {
    const nextY = moveValueToward(
      scene.bossHorizontalLaser.y,
      Phaser.Math.Clamp(scene.ship.y, getXyShipTopLimit(scene), getXyShipBottomLimit(scene)),
      BOSS_HORIZONTAL_LASER_TRACK_SPEED * delta / 1000
    );
    setBossHorizontalLaserY(scene, nextY);
  }
}

function moveValueToward(current, target, maxStep) {
  const distance = target - current;
  if (Math.abs(distance) <= maxStep) return target;
  return current + Math.sign(distance) * maxStep;
}

function setBossVerticalLaserX(scene, x) {
  if (scene.bossLaser) scene.bossLaser.x = x;
  if (scene.bossLaserCore) scene.bossLaserCore.x = x;
  if (scene.bossLaserEffect) scene.bossLaserEffect.centerX = x;
}

function setBossHorizontalLaserY(scene, y) {
  if (scene.bossHorizontalLaser) scene.bossHorizontalLaser.y = y;
  if (scene.bossHorizontalLaserCore) scene.bossHorizontalLaserCore.y = y;
  if (scene.bossHorizontalLaserEffect) scene.bossHorizontalLaserEffect.centerY = y;
}

function createBossLaserWarningEffect(scene, centerX, centerY, length, horizontal = false) {
  scene.bossWarningParticles = scene.bossWarningParticles || [];
  scene.bossWarningAnimationEvents = scene.bossWarningAnimationEvents || [];
  const halfLength = length / 2;
  const startedAt = scene.time.now;
  const seed = Phaser.Math.Between(0, 9999);
  const graphics = scene.add.graphics()
    .setDepth(FX_DEPTH - 1)
    .setBlendMode(Phaser.BlendModes.ADD);
  const redrawWarning = () => {
    const elapsed = scene.time.now - startedAt;
    const progress = Phaser.Math.Clamp(elapsed / BOSS_LASER_WARN_DURATION, 0, 1);
    const charge = Phaser.Math.Easing.Cubic.In(progress);
    const pulse = 0.5 + Math.sin(elapsed * (0.012 + charge * 0.015)) * 0.5;
    const railOffset = Phaser.Math.Linear(27, 6, charge);
    const pointCount = Math.max(32, Math.floor(length / 11));
    const strokePath = (points, width, color, alpha) => {
      if (points.length < 2) return;
      graphics.lineStyle(width, color, alpha);
      graphics.beginPath();
      graphics.moveTo(points[0].x, points[0].y);
      points.slice(1).forEach((point) => graphics.lineTo(point.x, point.y));
      graphics.strokePath();
    };

    graphics.clear();

    graphics.lineStyle(24, 0xff0018, 0.025 + charge * 0.11);
    if (horizontal) {
      graphics.lineBetween(centerX - halfLength, centerY, centerX + halfLength, centerY);
    } else {
      graphics.lineBetween(centerX, centerY - halfLength, centerX, centerY + halfLength);
    }
    graphics.lineStyle(3 + charge * 3, 0xff1830, 0.18 + charge * 0.62);
    if (horizontal) {
      graphics.lineBetween(centerX - halfLength, centerY, centerX + halfLength, centerY);
    } else {
      graphics.lineBetween(centerX, centerY - halfLength, centerX, centerY + halfLength);
    }

    [-1, 1].forEach((side) => {
      const points = [];
      for (let point = 0; point <= pointCount; point += 1) {
        const pathProgress = point / pointCount;
        const distance = -halfLength + length * pathProgress;
        const offset = side * (
          railOffset +
          Math.sin(elapsed * 0.007 + seed + pathProgress * Math.PI * 13) * (4.5 - charge * 2)
        );
        points.push(horizontal
          ? { x: centerX + distance, y: centerY + offset }
          : { x: centerX + offset, y: centerY + distance });
      }
      strokePath(points, 5, 0xff001f, 0.08 + charge * 0.24);
      strokePath(points, 1.4, 0xff4a58, 0.34 + charge * 0.54);
    });

    graphics.lineStyle(1.5 + charge * 2.5, 0xffffff, charge * (0.16 + pulse * 0.34));
    if (horizontal) {
      graphics.lineBetween(centerX - halfLength, centerY, centerX + halfLength, centerY);
    } else {
      graphics.lineBetween(centerX, centerY - halfLength, centerX, centerY + halfLength);
    }
  };

  redrawWarning();
  const redrawEvent = scene.time.addEvent({
    delay: 16,
    loop: true,
    callback: redrawWarning,
  });
  scene.bossWarningAnimationEvents.push(redrawEvent);
  scene.bossWarningParticles.push(graphics);

  for (let index = 0; index < 64; index += 1) {
    const along = Phaser.Math.FloatBetween(-halfLength, halfLength);
    const side = Math.random() < 0.5 ? -1 : 1;
    const startOffset = side * Phaser.Math.Between(16, 38);
    const radius = Phaser.Math.FloatBetween(0.8, 2.1);
    const particle = scene.add.circle(
      horizontal ? centerX + along : centerX + startOffset,
      horizontal ? centerY + startOffset : centerY + along,
      radius,
      index % 7 === 0 ? 0xffffff : 0xff1028,
      Phaser.Math.FloatBetween(0.45, 0.9)
    )
      .setDepth(FX_DEPTH)
      .setBlendMode(Phaser.BlendModes.ADD);

    scene.tweens.add({
      targets: particle,
      x: horizontal ? centerX + along : centerX + side * Phaser.Math.Between(2, 6),
      y: horizontal ? centerY + side * Phaser.Math.Between(2, 6) : centerY + along,
      alpha: index % 7 === 0 ? 0.9 : 0.22,
      scale: Phaser.Math.FloatBetween(0.45, 0.8),
      duration: Phaser.Math.Between(620, BOSS_LASER_WARN_DURATION),
      delay: Phaser.Math.Between(0, 180),
      ease: 'Sine.easeIn',
    });
    scene.bossWarningParticles.push(particle);
  }
}

function createBossElectricLaserEffect(scene, centerX, centerY, length, horizontal = false) {
  const graphics = scene.add.graphics()
    .setDepth(FX_DEPTH)
    .setBlendMode(Phaser.BlendModes.ADD);
  scene.bossLaserEffects = scene.bossLaserEffects || [];
  const effect = {
    graphics,
    centerX,
    centerY,
    length,
    horizontal,
    seed: Phaser.Math.Between(0, 9999),
  };
  scene.bossLaserEffects.push(effect);
  drawBossElectricLaserEffect(effect, scene.time.now);
  return effect;
}

function updateBossElectricLaserEffects(scene) {
  if (!scene.bossLaserEffects) return;
  scene.bossLaserEffects.forEach((effect) => {
    if (effect && effect.graphics && effect.graphics.active) {
      drawBossElectricLaserEffect(effect, scene.time.now);
    }
  });
}

function drawBossElectricLaserEffect(effect, time) {
  const { graphics, centerX, centerY, length, horizontal, seed } = effect;
  const halfLength = length / 2;
  const pulse = 0.5 + Math.sin(time * 0.016 + seed) * 0.5;
  const drawBeamRect = (thickness, color, alpha) => {
    graphics.fillStyle(color, alpha);
    if (horizontal) {
      graphics.fillRect(centerX - halfLength, centerY - thickness / 2, length, thickness);
    } else {
      graphics.fillRect(centerX - thickness / 2, centerY - halfLength, thickness, length);
    }
  };
  const strokePath = (points, width, color, alpha) => {
    if (points.length < 2) return;
    graphics.lineStyle(width, color, alpha);
    graphics.beginPath();
    graphics.moveTo(points[0].x, points[0].y);
    points.slice(1).forEach((point) => graphics.lineTo(point.x, point.y));
    graphics.strokePath();
  };

  graphics.clear();
  drawBeamRect(58, 0xff0018, 0.07 + pulse * 0.05);
  drawBeamRect(40, 0xff001f, 0.13 + pulse * 0.08);
  drawBeamRect(25, 0xff0828, 0.32 + pulse * 0.11);
  drawBeamRect(12, 0xff1830, 0.88 + pulse * 0.1);
  drawBeamRect(4.5 + pulse * 1.5, 0xffffff, 0.98);

  // Continuous edge arcs undulate smoothly instead of changing randomly.
  [-1, 1].forEach((side) => {
    const points = [];
    const pointCount = Math.max(36, Math.floor(length / 10));
    for (let point = 0; point <= pointCount; point += 1) {
      const progress = point / pointCount;
      const along = -halfLength + length * progress;
      const offset = side * (
        14 +
        Math.sin(time * 0.007 + seed + progress * Math.PI * 15) * 5 +
        Math.sin(time * 0.0035 + progress * Math.PI * 6) * 3
      );
      points.push(horizontal
        ? { x: centerX + along, y: centerY + offset }
        : { x: centerX + offset, y: centerY + along });
    }
    strokePath(points, 6, 0xff001f, 0.26);
    strokePath(points, 1.6, 0xff5b68, 0.92);
  });

  const particleCount = horizontal ? 48 : 72;
  for (let particle = 0; particle < particleCount; particle += 1) {
    const direction = particle % 3 === 0 ? -1 : 1;
    const travel = (
      time * (0.00018 + (particle % 5) * 0.000012) * direction +
      particle / particleCount +
      seed * 0.001
    ) % 1;
    const wrappedTravel = travel < 0 ? travel + 1 : travel;
    const along = -halfLength + length * wrappedTravel;
    const side = particle % 2 === 0 ? -1 : 1;
    const offset = side * (
      5 +
      (particle % 4) * 2.8 +
      Math.sin(time * 0.006 + seed + particle * 1.7) * 3
    );
    const radius = 0.7 + (particle % 4) * 0.32 + pulse * 0.25;
    const alpha = 0.28 + (particle % 5) * 0.09;
    const x = horizontal ? centerX + along : centerX + offset;
    const y = horizontal ? centerY + offset : centerY + along;

    graphics.fillStyle(particle % 9 === 0 ? 0xffffff : 0xff1830, alpha);
    graphics.fillCircle(x, y, radius);
    graphics.fillStyle(0xff001f, alpha * 0.18);
    graphics.fillCircle(x, y, radius * 2.4);
  }
}

function fireBossLaser(scene, laserX, laserY) {
  const bossWave = scene.activeBossWave;
  if (!bossWave) return;

  scene.bossLaserEvent = null;
  clearBossWarningParticles(scene);
  if (scene.bossLaserClearEvent) {
    scene.bossLaserClearEvent.remove(false);
    scene.bossLaserClearEvent = null;
  }
  clearBossLaser(scene);
  bossWave.attacksDone += 1;
  bossWave.previousLaserX = laserX;

  const laserTop = getBossVerticalLaserTop(scene);
  const laserHeight = getGameHeight(scene) - laserTop;
  const laserCenterY = laserTop + laserHeight / 2;
  scene.bossLaser = scene.add.rectangle(laserX, laserCenterY, BOSS_LASER_WIDTH, laserHeight, 0xff001f, 0.2)
    .setOrigin(0.5, 0.5)
    .setDepth(FX_DEPTH - 2);
  scene.bossLaserCore = scene.add.rectangle(laserX, laserCenterY, 5, laserHeight, 0xffffff, 0.96)
    .setOrigin(0.5, 0.5)
    .setDepth(FX_DEPTH - 1);
  scene.bossLaserEffect = createBossElectricLaserEffect(scene, laserX, laserCenterY, laserHeight);
  showBossHorizontalLaserWarning(scene, laserY);
  scene.bossHorizontalLaserEvent = scene.time.addEvent({
    delay: BOSS_LASER_WARN_DURATION,
    callback: () => fireBossHorizontalLaser(scene, laserY),
  });
  playBossLaserSound(scene);

  scene.bossLaserClearEvent = scene.time.addEvent({
    delay: BOSS_LASER_DURATION,
    callback: () => finishBossLaserAttack(scene),
  });

  if (bossWave.attacksDone < bossWave.attacksTotal) {
    scheduleBossAttack(scene, BOSS_ATTACK_GAP);
  }
}

function fireBossHorizontalLaser(scene, laserY) {
  const bossWave = scene.activeBossWave;
  if (!bossWave) return;

  scene.bossHorizontalLaserEvent = null;
  clearBossWarningParticles(scene);
  bossWave.previousHorizontalLaserY = laserY;

  const laserWidth = getGameWidth(scene);
  const laserCenterX = laserWidth / 2;
  scene.bossHorizontalLaser = scene.add.rectangle(laserCenterX, laserY, laserWidth, BOSS_HORIZONTAL_LASER_HEIGHT, 0xff001f, 0.2)
    .setOrigin(0.5, 0.5)
    .setDepth(FX_DEPTH - 2);
  scene.bossHorizontalLaserCore = scene.add.rectangle(laserCenterX, laserY, laserWidth, 5, 0xffffff, 0.96)
    .setOrigin(0.5, 0.5)
    .setDepth(FX_DEPTH - 1);
  scene.bossHorizontalLaserEffect = createBossElectricLaserEffect(scene, laserCenterX, laserY, laserWidth, true);
  playBossLaserSound(scene);
}

function finishBossLaserAttack(scene) {
  const bossWave = scene.activeBossWave;
  if (!bossWave) return;

  scene.bossLaserClearEvent = null;
  clearBossLaser(scene);

  if (bossWave.attacksDone >= bossWave.attacksTotal) {
    retreatBoss(scene);
  }
}

function retreatBoss(scene) {
  const bossWave = scene.activeBossWave;
  if (!bossWave || bossWave.isRetreating) return;

  bossWave.isRetreating = true;
  const retreatY = scene.bossShip && scene.bossShip.getData
    ? scene.bossShip.getData('sentinelHiddenY') || -BOSS_HEIGHT / 2
    : -BOSS_HEIGHT / 2;
  scene.bossExitTween = scene.tweens.add({
    targets: scene.bossShip,
    y: retreatY,
    duration: 850,
    ease: 'Sine.easeIn',
    onComplete: () => {
      scene.bossExitTween = null;
      endWaveAfterPause(scene, 'boss');
    },
  });
}

function scheduleWaveStart(scene, waveKind) {
  clearWaveTimers(scene);
  waitForWaveObjectsToClear(scene, waveKind);
}

function waitForWaveObjectsToClear(scene, waveKind) {
  if (state !== 'playing' || hasFallingObjects(scene)) {
    scene.waveStartEvent = scene.time.addEvent({
      delay: 250,
      callback: () => waitForWaveObjectsToClear(scene, waveKind),
    });
    return;
  }

  scene.waveStartEvent = scene.time.addEvent({
    delay: WAVE_CLEAR_DELAY,
    callback: () => startWaveCountdown(scene, waveKind),
  });
}

function startWaveCountdown(scene, waveKind) {
  if (state !== 'playing') {
    scene.waveStartEvent = scene.time.addEvent({
      delay: 250,
      callback: () => startWaveCountdown(scene, waveKind),
    });
    return;
  }

  scene.waveStartEvent = null;
  if (
    waveKind === 'red' &&
    scene.activeRedWave &&
    scene.activeRedWave.bossKind === 'scissors' &&
    !scene.activeRedWave.hasShownEchoWarning
  ) {
    scene.activeRedWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_SCISSOR_SWARM_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'red' &&
    scene.activeRedWave &&
    scene.activeRedWave.bossKind === 'crystallized' &&
    !scene.activeRedWave.hasShownEchoWarning
  ) {
    scene.activeRedWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_CRYSTALLIZED_WAVE_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'red' &&
    scene.activeRedWave &&
    scene.activeRedWave.bossKind === 'replicators' &&
    !scene.activeRedWave.hasShownEchoWarning
  ) {
    scene.activeRedWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_REPLICATOR_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (waveKind === 'red' && scene.activeRedWave && !scene.activeRedWave.hasShownEchoWarning) {
    scene.activeRedWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_SWARM_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'drones' &&
    scene.activeDroneWave &&
    scene.activeDroneWave.bossKind === 'girodrones' &&
    !scene.activeDroneWave.hasShownEchoWarning
  ) {
    scene.activeDroneWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_GIRODRONE_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'drones' &&
    scene.activeDroneWave &&
    !scene.activeDroneWave.hasShownEchoWarning
  ) {
    scene.activeDroneWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_DRONE_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'asteroid' &&
    scene.activeAsteroidWave &&
    !scene.activeAsteroidWave.hasShownEchoWarning
  ) {
    scene.activeAsteroidWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_ASTEROID_BELT_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'plasma' &&
    scene.activePlasmaWave &&
    !scene.activePlasmaWave.hasShownEchoWarning
  ) {
    scene.activePlasmaWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_PLASMA_WAVE_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'boss' &&
    scene.activeBossWave &&
    scene.activeBossWave.kind === 'troyanos' &&
    !scene.activeBossWave.hasShownEchoWarning
  ) {
    scene.activeBossWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_TROYANO_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'boss' &&
    scene.activeBossWave &&
    scene.activeBossWave.kind === 'redNeedleBoss' &&
    !scene.activeBossWave.hasShownEchoWarning
  ) {
    scene.activeBossWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_RED_NEEDLE_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'boss' &&
    scene.activeBossWave &&
    scene.activeBossWave.kind === 'boss' &&
    !scene.activeBossWave.hasShownEchoWarning
  ) {
    scene.activeBossWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_SENTINEL_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  showBossCueBand(scene, waveKind, 'warning', () => startWaveAfterCue(scene, waveKind));
}

function pauseBeforeEchoWaveWarning(scene, waveKind) {
  if (!scene) return;

  if (isBossOnlyGameMode()) {
    scene.bossOnlyTypeRevealed = true;
    updateHud(scene);
  }
  state = 'paused';
  isDraggingShip = false;
  scene.pendingEchoWaveWarningKind = waveKind;
  scene.resumeSpawnDelay = null;
  setPauseOverlayMode(scene, 'normal');
  setXyControlActive(scene, false);
  prepareControlPauseResume(scene);
  showOverlayScreen(scene, null);
  setPauseSettingsVisible(true);
}

function startWaveAfterCue(scene, waveKind) {
  if (state !== 'playing') return;

  if (waveKind === 'boss') {
    startBossWave(scene);
    return;
  }
  const wave = waveKind === 'red'
    ? scene.activeRedWave
    : waveKind === 'drones'
      ? scene.activeDroneWave
      : waveKind === 'asteroid'
        ? scene.activeAsteroidWave
        : scene.activePlasmaWave;
  if (!wave || wave.hasStarted) return;

  wave.hasStarted = true;
  wave.endsAt = scene.time.now + wave.duration;
  if (waveKind === 'red') {
    wave.isSpawningDamageBoosters = true;
  } else if (waveKind === 'drones') {
    wave.isSpawningDrones = true;
  } else if (waveKind === 'asteroid') {
    wave.isSpawningAsteroids = true;
  } else if (waveKind === 'plasma') {
    wave.isSpawningPlasma = true;
  }

  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));

  hideWaveBar(scene);

  if (waveKind === 'plasma') {
    spawnPlasmaBar(scene);
    schedulePlasmaSpawn(scene);
    return;
  }

  spawnBall(scene);
  scheduleNextSpawn(scene);
}

function showBossCueBand(scene, waveKind, cueKind, onCross) {
  clearBossCue(scene);

  const element = document.getElementById('boss-cue');
  const label = document.getElementById('boss-cue-label');
  if (!element || !label) {
    if (onCross) onCross();
    return;
  }

  const bossName = getWaveBossName(scene, waveKind);
  const labelText = cueKind === 'safe' ? 'AMENAZA SUPERADA' : bossName.toUpperCase();

  const height = BOSS_CUE_BAND_HEIGHT;
  const targetY = getGameHeight(scene) / 2 - height / 2;

  label.textContent = labelText;
  element.classList.toggle('is-safe', cueKind === 'safe');
  element.classList.add('is-active');
  element.style.height = height + 'px';
  element.style.opacity = '0';
  element.style.transition = 'none';
  scene.bossCueBand = element;
  scene.bossCueMotion = null;
  element.style.transform = 'translateY(' + targetY + 'px)';
  void element.offsetHeight;
  element.style.transition = 'opacity ' + BOSS_CUE_FADE_IN_DURATION + 'ms ease-out';
  element.style.opacity = '0.92';

  scene.bossCueTween = scene.time.delayedCall(BOSS_CUE_FADE_IN_DURATION + BOSS_CUE_HOLD_DURATION, () => {
    scene.bossCueTween = null;
    if (cueKind === 'warning') {
      playRedWaveSound(scene);
    }
    if (onCross) onCross();

    element.style.transition = 'opacity ' + BOSS_CUE_FADE_DURATION + 'ms ease-out';
    element.style.opacity = '0';
    scene.bossCueClearEvent = scene.time.delayedCall(BOSS_CUE_FADE_DURATION, () => {
      scene.bossCueClearEvent = null;
      clearBossCue(scene);
    });
  });
}

function getWaveBossName(scene, waveKind) {
  if (waveKind === 'red' && scene.activeRedWave) return scene.activeRedWave.bossName || 'Enjambre de Obreras';
  if (waveKind === 'drones' && scene.activeDroneWave) return scene.activeDroneWave.bossName || 'Drones';
  if (waveKind === 'asteroid' && scene.activeAsteroidWave) return scene.activeAsteroidWave.bossName || 'Cinturón';
  if (waveKind === 'plasma' && scene.activePlasmaWave) return scene.activePlasmaWave.bossName || 'Marea de Plasma';
  if (waveKind === 'boss' && scene.activeBossWave) return scene.activeBossWave.bossName || 'Centinela';
  return 'Jefe';
}

function clearBossCue(scene) {
  if (scene.bossCueTween) {
    scene.bossCueTween.remove(false);
    scene.bossCueTween = null;
  }
  if (scene.bossCueClearEvent) {
    scene.bossCueClearEvent.remove(false);
    scene.bossCueClearEvent = null;
  }
  if (scene.bossCueMoveTween) {
    scene.bossCueMoveTween.remove();
    scene.bossCueMoveTween = null;
  }
  if (scene.bossCueExitTween) {
    scene.bossCueExitTween.remove();
    scene.bossCueExitTween = null;
  }
  if (scene.bossCueBand) {
    scene.bossCueBand.classList.remove('is-active', 'is-safe');
    scene.bossCueBand.style.transition = 'none';
    scene.bossCueBand.style.transform = 'translateY(-100px)';
    scene.bossCueBand.style.opacity = '';
    scene.bossCueBand = null;
  }
  scene.bossCueMotion = null;
}

function finishWaveSpawning(scene, wave, waveKind) {
  if (wave.isDraining) {
    if (!hasFallingObjects(scene) && !hasActivePlasmaBars(scene) && !scene.waveResumeEvent) {
      endWaveAfterPause(scene, waveKind);
    }
    return;
  }

  wave.isDraining = true;
  if (waveKind === 'red') {
    wave.isSpawningDamageBoosters = false;
  } else if (waveKind === 'drones') {
    wave.isSpawningDrones = false;
  } else if (waveKind === 'asteroid') {
    wave.isSpawningAsteroids = false;
  } else if (waveKind === 'plasma') {
    wave.isSpawningPlasma = false;
    if (scene.plasmaSpawnEvent) {
      scene.plasmaSpawnEvent.remove(false);
      scene.plasmaSpawnEvent = null;
    }
  }

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  if (!hasFallingObjects(scene) && !hasActivePlasmaBars(scene)) {
    endWaveAfterPause(scene, waveKind);
  }
}

function endWaveAfterPause(scene, waveKind) {
  const currentWave = waveKind === 'red'
    ? scene.activeRedWave
    : waveKind === 'drones'
      ? scene.activeDroneWave
      : waveKind === 'asteroid'
        ? scene.activeAsteroidWave
        : waveKind === 'plasma'
          ? scene.activePlasmaWave
          : scene.activeBossWave;
  if (!currentWave) return;

  hideWaveBar(scene);

  if (waveKind === 'red') {
    completeRegisterMissionForWave(scene, currentWave);
    if (currentWave.bossKind === 'replicators') {
      scene.replicatorSpawnsUnlocked = true;
    } else if (currentWave.bossKind === 'red') {
      scene.obreraSpawnsUnlocked = true;
    } else if (currentWave.bossKind === 'scissors') {
      scene.scissorSpawnsUnlocked = true;
    } else if (currentWave.bossKind === 'crystallized') {
      scene.crystallizedOrbSpawnsUnlocked = true;
    }
    scene.activeRedWave = null;
  } else if (waveKind === 'drones') {
    completeRegisterMissionForWave(scene, currentWave);
    if (currentWave.bossKind === 'girodrones') {
      scene.giroDroneSpawnsUnlocked = true;
    } else {
      scene.droneSpawnsUnlocked = true;
    }
    scene.activeDroneWave = null;
  } else if (waveKind === 'asteroid') {
    completeRegisterMissionForWave(scene, currentWave);
    scene.asteroidSpawnsUnlocked = true;
    scene.activeAsteroidWave = null;
  } else if (waveKind === 'plasma') {
    completeRegisterMissionForWave(scene, currentWave);
    scene.plasmaSpawnsUnlocked = true;
    scene.activePlasmaWave = null;
  } else if (waveKind === 'boss') {
    if (currentWave.isTravelEncounter) {
      advanceRegisterMissionProgress(scene, 'travelSentinel');
      resetBossWave(scene);
      if (state === 'playing') scheduleNextSpawn(scene);
      return;
    }
    completeRegisterMissionForWave(scene, currentWave);
    if (currentWave.kind === 'troyanos') {
      scene.troyanoSpawnsUnlocked = true;
    }
    if (currentWave.kind === 'redNeedleBoss') {
      scene.redNeedleSpawnsUnlocked = true;
    }
    if (currentWave.kind === 'boss') {
      scene.travelSentinelUnlocked = true;
    }
    resetBossWave(scene);
  }

  hideWaveBar(scene);

  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));

  scene.waveResumeEvent = scene.time.addEvent({
    delay: WAVE_POST_DELAY,
    callback: () => {
      scene.waveResumeEvent = null;
      if (state !== 'playing') return;
      showBossCueBand(scene, waveKind, 'safe', () => {
        if (state === 'playing') scheduleNextSpawn(scene);
      });
    },
  });
}

function completeRegisterMissionForWave(scene, wave) {
  if (!scene || !wave) return;
  const bossKind = wave.bossKind || wave.kind;
  const mission = getRegisterMissionByBossKind(bossKind);
  if (!mission) return;
  if (!scene.completedRegisterMissions) scene.completedRegisterMissions = {};
  if (scene.completedRegisterMissions[mission.id]) return;

  scene.completedRegisterMissions[mission.id] = true;
  spawnRegisterReward(scene, mission);
}

function hasFallingObjects(scene) {
  return hasActivePlasmaBars(scene) || scene.balls
    .getChildren()
    .some((ball) => (
      ball.active &&
      ball.getData('kind') !== 'register' &&
      ball.y <= getGameHeight(scene) + 32
    ));
}

function hasActivePlasmaBars(scene) {
  return Boolean(scene.plasmaBars && scene.plasmaBars.some((bar) => bar && bar.active));
}

function clearPlasmaBars(scene) {
  if (!scene.plasmaBars) {
    scene.plasmaBars = [];
    return;
  }

  scene.plasmaBars.forEach((bar) => {
    if (bar && bar.container) bar.container.destroy();
  });
  scene.plasmaBars = [];
}

function schedulePlasmaSpawn(scene) {
  if (!scene.activePlasmaWave || !scene.activePlasmaWave.isSpawningPlasma || state !== 'playing') return;

  scene.plasmaSpawnEvent = scene.time.addEvent({
    delay: PLASMA_WAVE_SPAWN_DELAY,
    callback: () => {
      scene.plasmaSpawnEvent = null;
      if (!scene.activePlasmaWave || !scene.activePlasmaWave.isSpawningPlasma || state !== 'playing') return;
      spawnPlasmaBar(scene);
      schedulePlasmaSpawn(scene);
    },
  });
}

function spawnPlasmaBar(scene) {
  if (!scene.plasmaBars) scene.plasmaBars = [];

  const width = getGameWidth(scene);
  const gapHalf = PLASMA_BAR_GAP_WIDTH / 2;
  const minGapX = gapHalf + 14;
  const maxGapX = width - gapHalf - 14;
  const gapX = Phaser.Math.Between(minGapX, maxGapX);
  const direction = Math.random() < 0.5 ? -1 : 1;
  const container = scene.add.container(0, -PLASMA_BAR_HEIGHT)
    .setDepth(FX_DEPTH - 1);
  const graphics = scene.add.graphics();
  graphics.setBlendMode(Phaser.BlendModes.ADD);
  container.add(graphics);

  const bar = {
    active: true,
    container,
    graphics,
    gapX,
    gapVelocity: PLASMA_BAR_GAP_SPEED * direction,
    gapHalf,
    height: PLASMA_BAR_HEIGHT,
    sparkSeed: Phaser.Math.Between(0, 9999),
  };

  updatePlasmaBarGeometry(scene, bar);
  scene.plasmaBars.push(bar);
  return bar;
}

function updatePlasmaBars(scene, delta) {
  if (!scene.plasmaBars || !scene.plasmaBars.length) return;

  const width = getGameWidth(scene);
  const shipHalfWidth = getShipWidth(scene) / 2;
  const shipTop = scene.ship.y - SHIP_HEIGHT / 2;
  const shipBottom = scene.ship.y + SHIP_HEIGHT / 2;

  scene.plasmaBars.forEach((bar) => {
    if (!bar || !bar.active) return;

    const previousY = bar.container.y;
    const minGapX = bar.gapHalf + 14;
    const maxGapX = width - bar.gapHalf - 14;
    bar.container.y += PLASMA_BAR_VERTICAL_SPEED * (delta / 1000);
    bar.gapX += bar.gapVelocity * (delta / 1000);

    if (bar.gapX <= minGapX) {
      bar.gapX = minGapX;
      bar.gapVelocity = Math.abs(bar.gapVelocity);
    } else if (bar.gapX >= maxGapX) {
      bar.gapX = maxGapX;
      bar.gapVelocity = -Math.abs(bar.gapVelocity);
    }

    updatePlasmaBarGeometry(scene, bar);
    maybeRecordPlasmaGapPass(scene, bar, previousY, shipHalfWidth);
    maybeDamageShipWithPlasma(scene, bar, shipHalfWidth, shipTop, shipBottom);

    if (bar.container.y > getGameHeight(scene) + bar.height + 24) {
      destroyPlasmaBar(bar);
    }
  });

  scene.plasmaBars = scene.plasmaBars.filter((bar) => bar && bar.active);
  if (scene.activePlasmaWave && scene.activePlasmaWave.isDraining && !hasFallingObjects(scene) && !hasActivePlasmaBars(scene) && !scene.waveResumeEvent) {
    endWaveAfterPause(scene, 'plasma');
  }
}

function maybeRecordPlasmaGapPass(scene, bar, previousY, shipHalfWidth) {
  if (!scene || !bar || bar.registerMissionCounted) return;
  if (!isNormalTravelMissionContext(scene) || isShieldActive(scene)) return;
  if (previousY >= scene.ship.y || bar.container.y < scene.ship.y) return;

  const shipLeft = scene.ship.x - shipHalfWidth;
  const shipRight = scene.ship.x + shipHalfWidth;
  const gapLeft = bar.gapX - bar.gapHalf;
  const gapRight = bar.gapX + bar.gapHalf;
  if (shipLeft < gapLeft || shipRight > gapRight) return;

  bar.registerMissionCounted = true;
  advanceRegisterMissionProgress(scene, 'plasmaGap');
}

function updatePlasmaBarGeometry(scene, bar) {
  const width = getGameWidth(scene);
  const gapLeft = Phaser.Math.Clamp(bar.gapX - bar.gapHalf, 0, width);
  const gapRight = Phaser.Math.Clamp(bar.gapX + bar.gapHalf, 0, width);
  const rightWidth = Math.max(0, width - gapRight);
  const coreHeight = 4;
  const glowHeight = bar.height + 10;
  const sparkPhase = scene.time.now * 0.018 + bar.sparkSeed;

  bar.graphics.clear();
  drawPlasmaSegment(bar.graphics, 0, gapLeft, bar.height, glowHeight, coreHeight, sparkPhase);
  drawPlasmaSegment(bar.graphics, gapRight, rightWidth, bar.height, glowHeight, coreHeight, sparkPhase + 37);
}

function drawPlasmaSegment(graphics, x, width, height, glowHeight, coreHeight, sparkPhase) {
  if (width <= 1) return;

  graphics.fillStyle(0x4dc9ff, 0.16);
  graphics.fillRect(x, -glowHeight / 2, width, glowHeight);
  graphics.fillStyle(0x1da7ff, 0.52);
  graphics.fillRect(x, -height / 2, width, height);
  graphics.fillStyle(0xbff6ff, 0.88);
  graphics.fillRect(x, -coreHeight / 2, width, coreHeight);
  graphics.lineStyle(1, 0xdffbff, 0.42);
  graphics.lineBetween(x, -height / 2, x + width, -height / 2);
  graphics.lineBetween(x, height / 2, x + width, height / 2);
  drawPlasmaSparks(graphics, x, width, height, sparkPhase);
}

function drawPlasmaSparks(graphics, x, width, height, sparkPhase) {
  if (width < 18) return;

  const sparkCount = Math.min(PLASMA_BAR_SPARK_COUNT, Math.max(1, Math.floor(width / 72)));
  const outerSparkCount = Math.min(
    PLASMA_BAR_SPARK_COUNT * PLASMA_BAR_OUTER_SPARK_COUNT_MULTIPLIER,
    Math.max(2, Math.floor(width / 36))
  );
  for (let i = 0; i < sparkCount; i += 1) {
    const phase = sparkPhase + i * 29.7;
    const flicker = Math.sin(phase * 1.73);
    if (flicker < -0.2) continue;

    const sparkWidth = Phaser.Math.Clamp(width * 0.16, 20, 54);
    const startX = x + Phaser.Math.Clamp(
      ((Math.sin(phase * 0.61) + 1) / 2) * Math.max(1, width - sparkWidth),
      0,
      Math.max(0, width - sparkWidth)
    );
    const pointCount = Math.max(3, Math.floor(sparkWidth / PLASMA_BAR_SPARK_STEP));
    const baseY = (Math.sin(phase * 0.43) * 0.36) * height;
    const alpha = 0.24 + Math.abs(flicker) * 0.34;

    graphics.lineStyle(2, 0x8eeaff, alpha * 0.7);
    drawJaggedSparkLine(graphics, startX, baseY, sparkWidth, pointCount, phase, height, false);
    graphics.lineStyle(1, 0xf2feff, alpha);
    drawJaggedSparkLine(graphics, startX, baseY, sparkWidth, pointCount, phase + 11, height, false);
  }

  for (let i = 0; i < outerSparkCount; i += 1) {
    const phase = sparkPhase + i * 17.3 + 19;
    const flicker = Math.sin(phase * 1.91);
    if (flicker < -0.45) continue;

    const sparkWidth = Phaser.Math.Clamp(width * 0.12, 16, 42);
    const startX = x + Phaser.Math.Clamp(
      ((Math.sin(phase * 0.67) + 1) / 2) * Math.max(1, width - sparkWidth),
      0,
      Math.max(0, width - sparkWidth)
    );
    const pointCount = Math.max(3, Math.floor(sparkWidth / PLASMA_BAR_SPARK_STEP));
    const edgeY = i % 2 === 0 ? -height / 2 : height / 2;
    const outerY = edgeY + (edgeY < 0 ? -3 : 3);
    const alpha = 0.2 + Math.abs(flicker) * 0.32;

    graphics.lineStyle(2, 0x5ed8ff, alpha * 0.55);
    drawJaggedSparkLine(graphics, startX, outerY, sparkWidth, pointCount, phase, height, true);
    graphics.lineStyle(1, 0xf7feff, alpha * 0.85);
    drawJaggedSparkLine(graphics, startX, outerY, sparkWidth, pointCount, phase + 5.7, height, true);
  }
}

function drawJaggedSparkLine(graphics, startX, baseY, sparkWidth, pointCount, phase, height, canArcOutside) {
  graphics.beginPath();
  for (let point = 0; point <= pointCount; point += 1) {
    const progress = point / pointCount;
    const px = startX + sparkWidth * progress;
    const amplitude = canArcOutside ? PLASMA_BAR_OUTER_SPARK_AMPLITUDE : PLASMA_BAR_SPARK_AMPLITUDE;
    const jitter = Math.sin(phase + point * 2.41) * amplitude;
    const minY = canArcOutside ? -height / 2 - 10 : -height / 2 + 3;
    const maxY = canArcOutside ? height / 2 + 10 : height / 2 - 3;
    const py = Phaser.Math.Clamp(baseY + jitter, minY, maxY);

    if (point === 0) {
      graphics.moveTo(px, py);
    } else {
      graphics.lineTo(px, py);
    }
  }
  graphics.strokePath();
}

function maybeDamageShipWithPlasma(scene, bar, shipHalfWidth, shipTop, shipBottom) {
  if (isShieldActive(scene) || isShipDamageInvulnerable(scene)) return;

  const barTop = bar.container.y - bar.height / 2;
  const barBottom = bar.container.y + bar.height / 2;
  if (shipBottom < barTop || shipTop > barBottom) return;

  const shipLeft = scene.ship.x - shipHalfWidth;
  const shipRight = scene.ship.x + shipHalfWidth;
  const gapLeft = bar.gapX - bar.gapHalf;
  const gapRight = bar.gapX + bar.gapHalf;
  const shipInsideGap = shipLeft >= gapLeft && shipRight <= gapRight;
  if (shipInsideGap) return;

  takeDirectDamage(scene);
}

function destroyPlasmaBar(bar) {
  bar.active = false;
  if (bar.container) bar.container.destroy();
}

function clearBossWarningParticles(scene) {
  if (scene.bossWarningAnimationEvents) {
    scene.bossWarningAnimationEvents.forEach((event) => {
      if (event) event.remove(false);
    });
    scene.bossWarningAnimationEvents = [];
  }
  if (!scene.bossWarningParticles) return;
  scene.bossWarningParticles.forEach((particle) => {
    if (!particle) return;
    scene.tweens.killTweensOf(particle);
    if (particle.active) particle.destroy();
  });
  scene.bossWarningParticles = [];
}

function clearBossLaser(scene) {
  stopBossLaserSound(scene);
  if (scene.bossLaserEffects) {
    scene.bossLaserEffects.forEach((effect) => {
      if (!effect) return;
      if (effect.redrawEvent) effect.redrawEvent.remove(false);
      const graphics = effect.graphics || effect;
      scene.tweens.killTweensOf(graphics);
      if (graphics.active) graphics.destroy();
    });
    scene.bossLaserEffects = [];
  }
  scene.bossLaserEffect = null;
  scene.bossHorizontalLaserEffect = null;
  if (scene.bossLaser) {
    scene.bossLaser.destroy();
    scene.bossLaser = null;
  }
  if (scene.bossLaserCore) {
    scene.bossLaserCore.destroy();
    scene.bossLaserCore = null;
  }
  if (scene.bossHorizontalLaser) {
    scene.bossHorizontalLaser.destroy();
    scene.bossHorizontalLaser = null;
  }
  if (scene.bossHorizontalLaserCore) {
    scene.bossHorizontalLaserCore.destroy();
    scene.bossHorizontalLaserCore = null;
  }
}

function isLaserTouchingShip(scene, laser) {
  const width = laser.displayWidth || laser.width || BOSS_LASER_WIDTH;
  const height = laser.displayHeight || laser.height || getGameHeight(scene);
  return isRectOverlappingShip(scene, laser.x, laser.y, width, height);
}
