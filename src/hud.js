// HUD y helpers de modo de juego visibles durante la partida.
// Aqui viven las actualizaciones de marcadores y nombres que consultan varios sistemas.

function initHud() {
  if (hud) return hud;

  hud = {
    root: document.getElementById('hud'),
    level: document.getElementById('hud-level'),
    score: document.getElementById('hud-score'),
    streak: document.getElementById('hud-streak'),
    progressText: document.getElementById('hud-progress-text'),
    progressFill: document.getElementById('hud-progress-fill'),
    lifeCount: document.getElementById('hud-life-count'),
    lifeBar: document.getElementById('hud-life-bar'),
    upgrades: document.getElementById('hud-upgrades'),
    pauseSettingsButton: document.getElementById('pause-settings-button'),
    booster: document.getElementById('hud-booster'),
    boosterLabel: document.getElementById('hud-booster-label'),
    boosterFill: document.getElementById('hud-booster-fill'),
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
    : STORY_BOSS_KINDS[bossIndex];
  if (!bossKind) return null;
  return createBossConfig(bossKind);
}

function getNextInfiniteBossKind(scene) {
  if (!scene) return getShuffledBossKinds()[0];
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
