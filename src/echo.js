// Logica de Echo: companero, ataques de ayuda, dialogos e introduccion.
// Echo toca gameplay y UI, por eso se agrupa para que su comportamiento quede localizable.

function updateEchoCompanion(scene, delta = 0) {
  if (!scene.echoCompanion || !scene.ship) return;

  scene.echoCompanion.setVisible(Boolean(scene.ship.visible !== false));
  setEchoEyeVisible(scene, scene.echoCompanion.visible);
  if (!scene.echoCompanion.visible) return;

  const now = scene.time ? scene.time.now : 0;
  const homePosition = getEchoHomePosition(scene);
  scene.echoCompanion.setScale(ECHO_SIZE / ECHO_TEXTURE_SIZE);
  scene.echoCompanion.setAlpha(isEchoHelpActive() ? 1 : 0.9);
  if (updateEchoAttackMovement(scene, delta, homePosition)) {
    updateEchoEyePosition(scene);
    return;
  }

  if (scene.pendingEchoLevelCelebration) {
    startEchoLevelCelebration(scene);
  }
  if (updateEchoLevelCelebration(scene, now)) {
    setEchoEyeAttacking(scene, false);
    updateEchoEyePosition(scene);
    return;
  }

  scene.echoCompanion.setPosition(homePosition.x, homePosition.y);
  scene.echoCompanion.setRotation(getEchoIdleRotation(scene, now));
  setEchoEyeAttacking(scene, false);
  updateEchoEyePosition(scene);
}

function getEchoHomePosition(scene) {
  const floatOffset = getEchoFloatOffset(scene);
  return {
    x: scene.ship.x + ECHO_HOME_OFFSET_X + floatOffset.x,
    y: scene.ship.y + ECHO_HOME_OFFSET_Y + floatOffset.y,
  };
}

function getEchoIdleRotation(scene, now) {
  const baseRotation = -0.18 + Math.sin(now * 0.0021) * 0.08;
  const spinRotation = updateEchoIdleSpin(scene, now);
  return baseRotation + spinRotation;
}

function updateEchoIdleSpin(scene, now) {
  if (!scene.echoIdleSpin && now >= (scene.nextEchoIdleSpinAt || 0)) {
    scene.echoIdleSpin = {
      start: now,
      duration: Phaser.Math.Between(ECHO_IDLE_SPIN_MIN_DURATION, ECHO_IDLE_SPIN_MAX_DURATION),
      direction: Math.random() < 0.5 ? -1 : 1,
    };
  }

  if (!scene.echoIdleSpin) return 0;

  const spin = scene.echoIdleSpin;
  const progress = Phaser.Math.Clamp((now - spin.start) / spin.duration, 0, 1);
  const easedProgress = easeInOutSine(progress);
  if (progress >= 1) {
    scene.echoIdleSpin = null;
    scheduleNextEchoIdleSpin(scene, now);
    return 0;
  }
  return spin.direction * Math.PI * 2 * easedProgress;
}

function triggerEchoLevelCelebration(scene) {
  if (!scene || !scene.echoCompanion || !scene.ship) return;
  if (scene.echoAttackTarget || scene.echoReturningHome) {
    scene.pendingEchoLevelCelebration = true;
    return;
  }
  startEchoLevelCelebration(scene);
}

function startEchoLevelCelebration(scene) {
  if (!scene || !scene.echoCompanion || !scene.ship) return;
  clearEchoLevelEnergyEffect(scene);
  const now = scene.time ? scene.time.now : 0;
  const angleFromShip = Phaser.Math.Angle.Between(
    scene.ship.x,
    scene.ship.y,
    scene.echoCompanion.x,
    scene.echoCompanion.y
  );

  scene.pendingEchoLevelCelebration = false;
  scene.echoIdleSpin = null;
  scene.echoLevelCelebration = {
    start: now,
    startAngle: angleFromShip,
    startOffsetX: scene.echoCompanion.x - scene.ship.x,
    startOffsetY: scene.echoCompanion.y - scene.ship.y,
    direction: Math.random() < 0.5 ? -1 : 1,
    energyLink: scene.add.graphics()
      .setDepth(SHIP_DEPTH + 1)
      .setBlendMode(Phaser.BlendModes.ADD),
    activationTriggered: false,
  };
}

function updateEchoLevelCelebration(scene, now) {
  if (!scene.echoLevelCelebration || !scene.ship) return false;

  const celebration = scene.echoLevelCelebration;
  const progress = Phaser.Math.Clamp((now - celebration.start) / ECHO_LEVEL_ORBIT_DURATION, 0, 1);
  const easedProgress = easeInOutSine(progress);
  const orbitAngle = celebration.startAngle
    + celebration.direction * Math.PI * 2 * ECHO_LEVEL_ORBIT_TURNS * easedProgress;
  const pulse = Math.sin(progress * Math.PI);
  const radiusX = ECHO_LEVEL_ORBIT_RADIUS_X + pulse * 8;
  const radiusY = ECHO_LEVEL_ORBIT_RADIUS_Y + pulse * 6;
  const orbitOffsetX = Math.cos(orbitAngle) * radiusX;
  const orbitOffsetY = Math.sin(orbitAngle) * radiusY;
  const entryProgress = easeInOutSine(Phaser.Math.Clamp(
    progress / ECHO_LEVEL_ORBIT_TRANSITION_RATIO,
    0,
    1
  ));
  const exitProgress = easeInOutSine(Phaser.Math.Clamp(
    (progress - (1 - ECHO_LEVEL_ORBIT_TRANSITION_RATIO)) / ECHO_LEVEL_ORBIT_TRANSITION_RATIO,
    0,
    1
  ));
  const homePosition = getEchoHomePosition(scene);
  const orbitX = scene.ship.x + Phaser.Math.Linear(celebration.startOffsetX, orbitOffsetX, entryProgress);
  const orbitY = scene.ship.y + Phaser.Math.Linear(celebration.startOffsetY, orbitOffsetY, entryProgress);
  const x = Phaser.Math.Linear(orbitX, homePosition.x, exitProgress);
  const y = Phaser.Math.Linear(orbitY, homePosition.y, exitProgress);
  const orbitRotation = orbitAngle + Math.PI / 2 + celebration.direction * Math.PI * 2 * easedProgress;
  const homeRotation = -0.18 + Math.sin(now * 0.0021) * 0.08;
  const rotationDelta = Phaser.Math.Angle.Wrap(homeRotation - orbitRotation);

  scene.echoCompanion.setPosition(x, y);
  scene.echoCompanion.setRotation(orbitRotation + rotationDelta * exitProgress);
  celebration.energyLink.setAlpha(Math.min(entryProgress * 2, 1) * (1 - exitProgress));
  drawEchoEnergyLink(scene, celebration.energyLink, easedProgress);

  if (!celebration.activationTriggered && progress >= 0.66) {
    celebration.activationTriggered = true;
    flashShipEye(scene);
    triggerAxisActivationBurst(scene, celebration);
  }

  if (progress >= 1) {
    clearEchoLevelEnergyEffect(scene);
    scene.echoLevelCelebration = null;
    scheduleNextEchoIdleSpin(scene, now + 900);
  }
  return true;
}

function getEchoLevelUpgradeDelay(scene) {
  if (!scene || !scene.time) return 0;
  if (scene.echoLevelCelebration) {
    const celebrationEnd = scene.echoLevelCelebration.start
      + ECHO_LEVEL_ORBIT_DURATION
      + ECHO_LEVEL_UPGRADE_SETTLE_DELAY;
    return Math.max(0, celebrationEnd - scene.time.now);
  }
  if (scene.pendingEchoLevelCelebration) {
    return ECHO_LEVEL_UPGRADE_SETTLE_DELAY;
  }
  return 0;
}

function resetEchoPersonality(scene) {
  if (!scene) return;
  clearEchoLevelEnergyEffect(scene);
  scene.echoIdleSpin = null;
  scene.echoLevelCelebration = null;
  scene.pendingEchoLevelCelebration = false;
  scheduleNextEchoIdleSpin(scene);
}

function clearEchoLevelEnergyEffect(scene) {
  if (!scene || !scene.echoLevelCelebration) return;
  const celebration = scene.echoLevelCelebration;
  if (celebration.activationBurstTween && celebration.activationBurstTween.stop) {
    celebration.activationBurstTween.stop();
  }
  if (celebration.shipActivationTween && celebration.shipActivationTween.stop) {
    celebration.shipActivationTween.stop();
  }
  if (celebration.energyLink) celebration.energyLink.destroy();
  if (celebration.activationBurst) celebration.activationBurst.destroy();
  celebration.energyLink = null;
  celebration.activationBurst = null;
  if (scene.ship) scene.ship.setScale(SHIP_SCALE);
}

function scheduleNextEchoIdleSpin(scene, fromTime = null) {
  if (!scene) return;
  const now = fromTime === null ? (scene.time ? scene.time.now : 0) : fromTime;
  scene.nextEchoIdleSpinAt = now + Phaser.Math.Between(ECHO_IDLE_SPIN_MIN_DELAY, ECHO_IDLE_SPIN_MAX_DELAY);
}

function easeInOutSine(progress) {
  return -(Math.cos(Math.PI * progress) - 1) / 2;
}

function updateEchoAttackMovement(scene, delta, homePosition) {
  const deltaSeconds = Math.max(0.001, delta / 1000);
  const target = scene.echoAttackTarget;
  if (target && target.active) {
    setEchoEyeAttacking(scene, true);
    moveEchoToward(scene, target.x, target.y, ECHO_ATTACK_SPEED * deltaSeconds);
    scene.echoCompanion.setRotation(Phaser.Math.Angle.Between(
      scene.echoCompanion.x,
      scene.echoCompanion.y,
      target.x,
      target.y
    ) + Math.PI / 2);

    if (isEchoOverlappingHostile(scene, target)) {
      target.setData('hasBeenEchoBlocked', true);
      scene.echoAttackTarget = null;
      scene.echoReturningHome = true;
      blockHostileWithEcho(scene, target);
      setEchoEyeAttacking(scene, false);
    }
    return true;
  }

  if (target && !target.active) {
    scene.echoAttackTarget = null;
    scene.echoReturningHome = true;
  }

  if (!scene.echoReturningHome) return false;

  setEchoEyeAttacking(scene, false);
  moveEchoToward(scene, homePosition.x, homePosition.y, ECHO_RETURN_SPEED * deltaSeconds);
  scene.echoCompanion.setRotation(Phaser.Math.Angle.Between(
    scene.echoCompanion.x,
    scene.echoCompanion.y,
    homePosition.x,
    homePosition.y
  ) + Math.PI / 2);

  if (Phaser.Math.Distance.Between(scene.echoCompanion.x, scene.echoCompanion.y, homePosition.x, homePosition.y) <= 2) {
    scene.echoCompanion.setPosition(homePosition.x, homePosition.y);
    scene.echoReturningHome = false;
  }
  return true;
}

function moveEchoToward(scene, x, y, distance) {
  const angle = Phaser.Math.Angle.Between(scene.echoCompanion.x, scene.echoCompanion.y, x, y);
  const remaining = Phaser.Math.Distance.Between(scene.echoCompanion.x, scene.echoCompanion.y, x, y);
  const step = Math.min(distance, remaining);
  scene.echoCompanion.setPosition(
    scene.echoCompanion.x + Math.cos(angle) * step,
    scene.echoCompanion.y + Math.sin(angle) * step
  );
}

function getEchoFloatOffset(scene) {
  if (!scene.echoFloatSeed) {
    scene.echoFloatSeed = Phaser.Math.FloatBetween(0, Math.PI * 2);
    scene.echoFloatSeedAlt = Phaser.Math.FloatBetween(0, Math.PI * 2);
  }

  const time = scene.time ? scene.time.now : 0;
  const primary = time * 0.0017 + scene.echoFloatSeed;
  const secondary = time * 0.0023 + scene.echoFloatSeedAlt;
  return {
    x: Math.sin(primary) * ECHO_FLOAT_RADIUS + Math.sin(secondary * 0.73) * (ECHO_FLOAT_RADIUS * 0.35),
    y: Math.cos(secondary) * ECHO_FLOAT_RADIUS + Math.sin(primary * 0.61) * (ECHO_FLOAT_RADIUS * 0.4),
  };
}

function startEchoEyeAnimation(scene) {
  if (!scene || !scene.tweens || !scene.echoEyeGlow || !scene.echoEyeCore) return;

  scene.tweens.add({
    targets: scene.echoEyeGlow,
    scale: 1.45,
    alpha: 0.04,
    duration: 900,
    yoyo: true,
    repeat: -1,
    ease: 'Sine.easeInOut',
  });
  scene.tweens.add({
    targets: scene.echoEyeCore,
    scale: 1.18,
    alpha: 0.28,
    duration: 520,
    yoyo: true,
    repeat: -1,
    ease: 'Sine.easeInOut',
  });
}

function updateEchoEyePosition(scene) {
  if (!scene.echoCompanion) return;
  [scene.echoEyeGlow, scene.echoEyeCore].forEach((eyePart) => {
    if (!eyePart) return;
    eyePart.setPosition(scene.echoCompanion.x, scene.echoCompanion.y);
    eyePart.setVisible(scene.echoCompanion.visible);
  });
}

function setEchoEyeVisible(scene, visible) {
  [scene.echoEyeGlow, scene.echoEyeCore].forEach((eyePart) => {
    if (eyePart) eyePart.setVisible(visible);
  });
}

function hideEchoCompanion(scene) {
  clearEchoLevelEnergyEffect(scene);
  if (scene.echoCompanion) scene.echoCompanion.setVisible(false);
  setEchoEyeVisible(scene, false);
}

function updateEchoAttacks(scene) {
  if (!isEchoHelpActive() || !scene.echoCompanion || !scene.echoCompanion.visible) return;
  if (scene.echoAttackTarget || scene.echoReturningHome) return;
  if (scene.echoLevelCelebration || scene.pendingEchoLevelCelebration) return;

  scene.balls.getChildren().forEach((hostile) => {
    if (scene.echoAttackTarget) return;
    if (!hostile.active || !isEchoAttackableKind(hostile.getData('kind'))) return;
    if (hostile.getData('hasBeenEchoBlocked')) return;
    if (!isHostileInsideEchoAttackRadius(scene, hostile)) return;
    if (hostile.getData('hasRolledEchoAttack')) return;

    hostile.setData('hasRolledEchoAttack', true);
    if (Math.random() >= getEchoAttackChance()) return;
    scene.echoAttackTarget = hostile;
    setEchoEyeAttacking(scene, true);
  });
}

function isEchoAttackableKind(kind) {
  return kind === 'damageBooster' ||
    isScissorKind(kind) ||
    kind === 'spikeDrone' ||
    kind === 'giroDrone' ||
    kind === 'redNeedle' ||
    kind === 'replicator' ||
    isAsteroidKind(kind);
}

function isHostileInsideEchoAttackRadius(scene, hostile) {
  return Phaser.Math.Distance.Between(
    scene.ship.x,
    scene.ship.y,
    hostile.x,
    hostile.y
  ) <= ECHO_ATTACK_DETECTION_RADIUS;
}

function getEchoAttackChance() {
  return echoHelpLevel > 0 ? ECHO_ATTACK_CHANCE : 0;
}

function isEchoOverlappingHostile(scene, hostile) {
  const radius = ECHO_COLLISION_RADIUS + getObjectCollisionRadius(hostile);
  return Phaser.Math.Distance.Between(
    scene.echoCompanion.x,
    scene.echoCompanion.y,
    hostile.x,
    hostile.y
  ) <= radius;
}

function blockHostileWithEcho(scene, hostile) {
  if (!hostile || !hostile.active) return;

  const x = hostile.x;
  const y = hostile.y;
  const kind = hostile.getData('kind');
  showAbsorbEffect(scene, x, y, kind, false);
  playShieldBlockSound(scene);
  flashEchoCompanion(scene);
  awardEnemyDefeatScore(scene, SHIELD_BLOCK_SCORE, x, y, ECHO_HELP_COLOR);
  destroyShieldBlockedHostile(scene, hostile);
}

function flashEchoCompanion(scene) {
  if (!scene.echoCompanion || !scene.tweens) return;
  scene.tweens.killTweensOf(scene.echoCompanion);
  scene.echoCompanion.setTint(ECHO_HELP_TINT);
  scene.echoCompanion.setAlpha(1);
  scene.tweens.add({
    targets: scene.echoCompanion,
    alpha: 0.72,
    duration: 80,
    yoyo: true,
    ease: 'Sine.easeOut',
    onComplete: () => {
      if (!scene.echoCompanion) return;
      scene.echoCompanion.clearTint();
      scene.echoCompanion.setAlpha(isEchoHelpActive() ? 1 : 0.9);
    },
  });
}

function setEchoEyeAttacking(scene, isAttacking) {
  if (scene.echoEyeGlow) {
    scene.echoEyeGlow.setFillStyle(isAttacking ? ECHO_EYE_ATTACK_GLOW_COLOR : ECHO_EYE_IDLE_GLOW_COLOR, 0.34);
  }
  if (scene.echoEyeCore) {
    scene.echoEyeCore.setFillStyle(isAttacking ? ECHO_EYE_ATTACK_CORE_COLOR : ECHO_EYE_IDLE_CORE_COLOR, 1);
  }
}

function isEchoHelpActive() {
  return echoHelpLevel > 0;
}


function createEchoTutorialOverlay(scene) {
  const overlay = createDomOverlay('echo-tutorial-overlay', false);
  overlay.text = document.getElementById('echo-dialog-text');
  overlay.progress = document.getElementById('echo-dialog-progress');
  overlay.nextButton = document.getElementById('echo-dialog-next');
  overlay.skipButton = document.getElementById('echo-dialog-skip');
  overlay.panel = overlay.element ? overlay.element.querySelector('.echo-dialog-panel') : null;

  const advance = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    advanceEchoTutorial(scene);
  };

  if (overlay.nextButton) {
    overlay.nextButton.addEventListener('click', advance);
  }
  if (overlay.skipButton) {
    overlay.skipButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (state === 'tutorial') finishEchoTutorial(scene);
    });
  }

  return overlay;
}

function startEchoTutorial(scene) {
  startEchoDialog(scene, ECHO_TUTORIAL_LINES, () => pauseBeforeFirstGameplaySpawn(scene));
}

function startEchoDialog(scene, lines, onComplete) {
  if (!scene || !scene.echoTutorialOverlay) {
    if (onComplete) onComplete();
    return;
  }

  state = 'tutorial';
  isDraggingShip = false;
  scene.echoTutorialLines = lines;
  scene.echoTutorialOnComplete = onComplete;
  scene.echoTutorialIndex = 0;
  scene.echoTutorialTimer = null;
  scene.echoTutorialTyping = false;
  scene.echoTutorialFullLine = '';
  setXyControlVisible(scene, false);
  setHudVisible(scene, false);
  updateEchoCompanion(scene, 0);
  showOverlayScreen(scene, 'tutorial');
  renderEchoTutorialLine(scene);
}

function renderEchoTutorialLine(scene) {
  const overlay = scene && scene.echoTutorialOverlay;
  if (!overlay) return;

  const lines = scene.echoTutorialLines || ECHO_TUTORIAL_LINES;
  const index = Phaser.Math.Clamp(scene.echoTutorialIndex || 0, 0, lines.length - 1);
  const line = lines[index];
  clearEchoTutorialTimer(scene);
  scene.echoTutorialFullLine = line;
  scene.echoTutorialTyping = true;
  let characterIndex = 0;
  scene.echoTutorialCharacters = prepareEchoTutorialText(overlay.text, line);
  if (overlay.progress) overlay.progress.textContent = (index + 1) + '/' + lines.length;
  if (overlay.nextButton) overlay.nextButton.textContent = index >= lines.length - 1 ? 'CERRAR TRANSMISION' : 'CONTINUAR';

  scene.echoTutorialTimer = scene.time.addEvent({
    delay: ECHO_DIALOG_CHARACTER_DELAY,
    loop: true,
    callback: () => {
      if (state !== 'tutorial' || characterIndex >= scene.echoTutorialCharacters.length) {
        completeEchoTutorialLine(scene);
        return;
      }

      const characterEntry = scene.echoTutorialCharacters[characterIndex];
      characterIndex += 1;
      if (characterEntry.element) characterEntry.element.classList.remove('is-pending');
      if (/\S/.test(characterEntry.character)) playEchoDialogBeep();

      if (characterIndex >= scene.echoTutorialCharacters.length) completeEchoTutorialLine(scene);
    },
  });
}

function prepareEchoTutorialText(textElement, line) {
  if (!textElement) return [];

  textElement.replaceChildren();
  const characters = [];
  const tokens = line.match(/\s+|\S+/g) || [];

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      textElement.appendChild(document.createTextNode(token));
      Array.from(token).forEach((character) => {
        characters.push({ character, element: null });
      });
      return;
    }

    const word = document.createElement('span');
    word.className = 'echo-dialog-word';
    Array.from(token).forEach((character) => {
      const characterElement = document.createElement('span');
      characterElement.className = 'echo-dialog-character is-pending';
      characterElement.textContent = character;
      word.appendChild(characterElement);
      characters.push({ character, element: characterElement });
    });
    textElement.appendChild(word);
  });

  return characters;
}

function advanceEchoTutorial(scene) {
  if (!scene || state !== 'tutorial') return;
  if (scene.echoTutorialTyping) {
    completeEchoTutorialLine(scene);
    return;
  }
  clearEchoTutorialTimer(scene);

  scene.echoTutorialIndex = (scene.echoTutorialIndex || 0) + 1;
  const lines = scene.echoTutorialLines || ECHO_TUTORIAL_LINES;
  if (scene.echoTutorialIndex >= lines.length) {
    finishEchoTutorial(scene);
    return;
  }
  renderEchoTutorialLine(scene);
}

function finishEchoTutorial(scene) {
  clearEchoTutorialTimer(scene);
  scene.echoTutorialTyping = false;
  const onComplete = scene.echoTutorialOnComplete;
  scene.echoTutorialLines = null;
  scene.echoTutorialOnComplete = null;
  showOverlayScreen(scene, null);
  setHudVisible(scene, true);
  if (onComplete) onComplete();
}

function completeEchoTutorialLine(scene) {
  if (!scene) return;
  clearEchoTutorialTimer(scene);
  scene.echoTutorialTyping = false;
  const overlay = scene.echoTutorialOverlay;
  if (overlay && overlay.text) {
    overlay.text.querySelectorAll('.echo-dialog-character.is-pending').forEach((characterElement) => {
      characterElement.classList.remove('is-pending');
    });
  }
}

function clearEchoTutorialTimer(scene) {
  if (scene && scene.echoTutorialTimer) {
    scene.echoTutorialTimer.remove(false);
    scene.echoTutorialTimer = null;
  }
}

function playEchoDialogBeep() {
  if (!soundEffectsEnabled || soundEffectsVolume <= 0) return;

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  if (!echoDialogAudioContext) echoDialogAudioContext = new AudioContextClass();
  if (echoDialogAudioContext.state === 'suspended') {
    echoDialogAudioContext.resume().catch(() => {});
    return;
  }

  const now = echoDialogAudioContext.currentTime;
  const oscillator = echoDialogAudioContext.createOscillator();
  const gain = echoDialogAudioContext.createGain();
  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(620 + Math.random() * 55, now);
  gain.gain.setValueAtTime(0.025 * soundEffectsVolume, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + ECHO_DIALOG_BEEP_DURATION);
  oscillator.connect(gain);
  gain.connect(echoDialogAudioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + ECHO_DIALOG_BEEP_DURATION);
}

function startIntroEchoArrival(scene, sequence) {
  if (!isIntroSequenceActive(scene, sequence)) return;

  const orbitRadiusX = ECHO_LEVEL_ORBIT_RADIUS_X + 10;
  const orbitRadiusY = ECHO_LEVEL_ORBIT_RADIUS_Y + 8;
  const startAngle = Math.PI / 2;
  scene.echoCompanion
    .setVisible(true)
    .setAlpha(0.9)
    .setScale(ECHO_SIZE / ECHO_TEXTURE_SIZE)
    .setPosition(scene.ship.x, getGameHeight(scene) + ECHO_SIZE * 2)
    .setRotation(0);
  setEchoEyeVisible(scene, true);
  updateEchoEyePosition(scene);

  sequence.echoArrivalTween = scene.tweens.add({
    targets: scene.echoCompanion,
    x: scene.ship.x + Math.cos(startAngle) * orbitRadiusX,
    y: scene.ship.y + Math.sin(startAngle) * orbitRadiusY,
    duration: INTRO_ECHO_ARRIVAL_DURATION,
    ease: 'Sine.easeOut',
    onUpdate: () => updateEchoEyePosition(scene),
    onComplete: () => startIntroEchoOrbit(scene, sequence, startAngle, orbitRadiusX, orbitRadiusY),
  });
}

function startIntroEchoOrbit(scene, sequence, startAngle, radiusX, radiusY) {
  if (!isIntroSequenceActive(scene, sequence)) return;

  playLevelUpSound(scene);
  sequence.energyLink = scene.add.graphics()
    .setDepth(SHIP_DEPTH + 1)
    .setBlendMode(Phaser.BlendModes.ADD);
  sequence.orbit.progress = 0;
  sequence.echoOrbitTween = scene.tweens.add({
    targets: sequence.orbit,
    progress: 1,
    duration: INTRO_ECHO_ORBIT_DURATION,
    ease: 'Sine.easeInOut',
    onUpdate: () => {
      const progress = sequence.orbit.progress;
      const angle = startAngle + Math.PI * 2 * INTRO_ECHO_ORBIT_TURNS * progress;
      scene.echoCompanion.setPosition(
        scene.ship.x + Math.cos(angle) * radiusX,
        scene.ship.y + Math.sin(angle) * radiusY
      );
      scene.echoCompanion.setRotation(angle + Math.PI / 2 + Math.PI * 4 * progress);
      updateEchoEyePosition(scene);
      drawIntroEnergyLink(scene, sequence);
    },
    onComplete: () => illuminateAxisEyeForIntro(scene, sequence),
  });
}

function drawIntroEnergyLink(scene, sequence) {
  if (!sequence.energyLink || !scene.ship || !scene.echoCompanion) return;
  drawEchoEnergyLink(scene, sequence.energyLink, sequence.orbit.progress);
}

function drawEchoEnergyLink(scene, graphics, progress) {
  if (!graphics || !scene.ship || !scene.echoCompanion) return;
  const angle = Phaser.Math.DegToRad(scene.ship.angle || 0);
  const eyeOffsetX = SHIP_EYE_LOCAL_X * SHIP_SCALE;
  const eyeOffsetY = SHIP_EYE_LOCAL_Y * SHIP_SCALE;
  const targetX = scene.ship.x + Math.cos(angle) * eyeOffsetX - Math.sin(angle) * eyeOffsetY;
  const targetY = scene.ship.y + Math.sin(angle) * eyeOffsetX + Math.cos(angle) * eyeOffsetY;
  const sourceX = scene.echoCompanion.x;
  const sourceY = scene.echoCompanion.y;
  const charge = Phaser.Math.Easing.Sine.InOut(progress);
  const pulse = 0.5 + Math.sin(progress * Math.PI * 14) * 0.5;
  const linkAngle = Phaser.Math.Angle.Between(sourceX, sourceY, targetX, targetY);
  const perpendicularX = Math.cos(linkAngle + Math.PI / 2);
  const perpendicularY = Math.sin(linkAngle + Math.PI / 2);

  graphics.clear();
  graphics.lineStyle(10 + charge * 7 + pulse * 3, 0xffb52e, 0.06 + charge * 0.08);
  graphics.lineBetween(sourceX, sourceY, targetX, targetY);

  [4, 1.5].forEach((width, layerIndex) => {
    graphics.lineStyle(
      width,
      layerIndex === 0 ? 0xffe16b : 0xffffff,
      layerIndex === 0 ? 0.48 + charge * 0.22 : 0.82 + pulse * 0.18
    );
    graphics.beginPath();
    graphics.moveTo(sourceX, sourceY);
    for (let pointIndex = 1; pointIndex <= 12; pointIndex += 1) {
      const travel = pointIndex / 12;
      const jitter = Math.sin(progress * 54 + pointIndex * 2.7 + layerIndex) * (2.4 + charge * 2);
      graphics.lineTo(
        Phaser.Math.Linear(sourceX, targetX, travel) + perpendicularX * jitter * Math.sin(Math.PI * travel),
        Phaser.Math.Linear(sourceY, targetY, travel) + perpendicularY * jitter * Math.sin(Math.PI * travel)
      );
    }
    graphics.strokePath();
  });

  const particleCount = 4 + Math.floor(charge * 4);
  for (let index = 0; index < particleCount; index += 1) {
    const travel = (progress * (5 + charge * 3) + index / particleCount) % 1;
    const x = Phaser.Math.Linear(sourceX, targetX, travel);
    const y = Phaser.Math.Linear(sourceY, targetY, travel);
    const sparkSize = 1.4 + travel * 1.8 + pulse * 0.5;
    graphics.fillStyle(0xffd84d, 0.2 + travel * 0.35);
    graphics.fillCircle(x, y, sparkSize * 2.4);
    graphics.fillStyle(0xffffff, 0.75 + travel * 0.25);
    graphics.fillCircle(x, y, sparkSize);
  }

  graphics.lineStyle(1.5 + pulse, 0xffe16b, 0.22 + charge * 0.45);
  graphics.strokeCircle(targetX, targetY, 7 + charge * 17 + pulse * 3);
  graphics.lineStyle(1, 0xffffff, 0.16 + charge * 0.35);
  graphics.strokeCircle(targetX, targetY, 13 + charge * 23 - pulse * 3);
  graphics.fillStyle(0xffd84d, 0.08 + charge * 0.12);
  graphics.fillCircle(targetX, targetY, 10 + charge * 8);

  graphics.fillStyle(0xffd84d, 0.08 + pulse * 0.06);
  graphics.fillCircle(sourceX, sourceY, 10 + charge * 5);
}

function fadeIntroEnergyLink(scene, sequence) {
  if (!sequence.energyLink) return;

  sequence.energyLinkFadeTween = scene.tweens.add({
    targets: sequence.energyLink,
    alpha: 0,
    duration: INTRO_ENERGY_LINK_FADE_DURATION,
    ease: 'Sine.easeOut',
    onComplete: () => clearIntroEnergyLink(sequence),
  });
}

function clearIntroEnergyLink(sequence) {
  if (!sequence || !sequence.energyLink) return;
  sequence.energyLink.destroy();
  sequence.energyLink = null;
}

function triggerAxisActivationBurst(scene, sequence) {
  if (!scene || !sequence || !scene.ship) return;

  const angle = Phaser.Math.DegToRad(scene.ship.angle || 0);
  const eyeOffsetX = SHIP_EYE_LOCAL_X * SHIP_SCALE;
  const eyeOffsetY = SHIP_EYE_LOCAL_Y * SHIP_SCALE;
  const x = scene.ship.x + Math.cos(angle) * eyeOffsetX - Math.sin(angle) * eyeOffsetY;
  const y = scene.ship.y + Math.sin(angle) * eyeOffsetX + Math.cos(angle) * eyeOffsetY;

  sequence.activationBurst = scene.add.graphics()
    .setPosition(x, y)
    .setDepth(SHIP_DEPTH + 3)
    .setBlendMode(Phaser.BlendModes.ADD);
  sequence.activationBurst.fillStyle(0xffffff, 0.82);
  sequence.activationBurst.fillCircle(0, 0, 10);
  sequence.activationBurst.lineStyle(3, 0xffd84d, 0.9);
  sequence.activationBurst.strokeCircle(0, 0, 15);
  sequence.activationBurst.lineStyle(1.5, 0xffffff, 0.75);
  sequence.activationBurst.strokeCircle(0, 0, 23);

  sequence.activationBurstTween = scene.tweens.add({
    targets: sequence.activationBurst,
    scaleX: 2.4,
    scaleY: 2.4,
    alpha: 0,
    duration: 480,
    ease: 'Cubic.easeOut',
    onComplete: () => {
      if (sequence.activationBurst) sequence.activationBurst.destroy();
      sequence.activationBurst = null;
    },
  });
  sequence.shipActivationTween = scene.tweens.add({
    targets: scene.ship,
    scaleX: SHIP_SCALE * 1.035,
    scaleY: SHIP_SCALE * 1.035,
    duration: 110,
    yoyo: true,
    ease: 'Sine.easeOut',
    onComplete: () => scene.ship.setScale(SHIP_SCALE),
  });
  if (scene.cameras && scene.cameras.main) {
    scene.cameras.main.shake(100, 0.0015);
  }
}

function illuminateAxisEyeForIntro(scene, sequence) {
  if (!isIntroSequenceActive(scene, sequence)) return;

  setIntroAxisEyeLit(scene);
  triggerAxisActivationBurst(scene, sequence);
  fadeIntroEnergyLink(scene, sequence);

  sequence.eyeGlowTween = scene.tweens.add({
    targets: scene.shipEyeGlow,
    alpha: 0.24,
    scale: 1.16,
    duration: 420,
    yoyo: true,
    repeat: 1,
    ease: 'Sine.easeInOut',
    onUpdate: () => updateShipEyeGlow(scene),
  });
  sequence.eyeCoreTween = scene.tweens.add({
    targets: scene.shipEyeCore,
    alpha: 0.72,
    scale: 1.06,
    duration: 320,
    yoyo: true,
    repeat: 1,
    ease: 'Sine.easeInOut',
    onUpdate: () => updateShipEyeGlow(scene),
  });

  const homePosition = getEchoHomePosition(scene);
  sequence.echoSettleTween = scene.tweens.add({
    targets: scene.echoCompanion,
    x: homePosition.x,
    y: homePosition.y,
    rotation: -0.18,
    duration: 520,
    ease: 'Sine.easeInOut',
    onUpdate: () => {
      updateEchoEyePosition(scene);
      drawIntroEnergyLink(scene, sequence);
    },
    onComplete: () => startIntroEchoHops(scene, sequence),
  });
}

function startIntroEchoHops(scene, sequence) {
  if (!isIntroSequenceActive(scene, sequence)) return;

  sequence.echoHopTween = scene.tweens.add({
    targets: scene.echoCompanion,
    y: scene.echoCompanion.y - INTRO_ECHO_HOP_HEIGHT,
    duration: INTRO_ECHO_HOP_DURATION,
    yoyo: true,
    repeat: 1,
    ease: 'Sine.easeOut',
    onUpdate: () => updateEchoEyePosition(scene),
    onComplete: () => {
      if (!isIntroSequenceActive(scene, sequence)) return;
      scene.time.delayedCall(INTRO_DIALOG_DELAY, () => {
        if (!isIntroSequenceActive(scene, sequence)) return;
        clearIntroAxisEyeLight(scene);
        scene.introSequence = null;
        resetEchoPersonality(scene);
        if (sequence.onComplete) {
          sequence.onComplete();
        } else {
          startEchoTutorial(scene);
        }
      });
    },
  });
}

function setIntroAxisEyeLit(scene) {
  if (!scene || !scene.shipEyeGlow || !scene.shipEyeCore) return;

  scene.shipEyeGlow
    .setFillStyle(0xffd84d, 1)
    .setAlpha(0.42)
    .setScale(1.08)
    .setVisible(true);
  scene.shipEyeCore
    .setFillStyle(0xffffb8, 1)
    .setAlpha(0.95)
    .setScale(1)
    .setVisible(true);
  updateShipEyeGlow(scene);
}

function clearIntroAxisEyeLight(scene) {
  if (!scene || !scene.shipEyeGlow || !scene.shipEyeCore) return;

  scene.tweens.killTweensOf([scene.shipEyeGlow, scene.shipEyeCore]);
  scene.shipEyeGlow.setAlpha(0).setScale(1).setVisible(false);
  scene.shipEyeCore.setAlpha(0).setScale(1).setVisible(false);
  updateShipEyeGlow(scene);
}
