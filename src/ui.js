// Pantallas DOM y navegacion de overlays.
// Este modulo crea menus, pausa, opciones basicas y utilidades compartidas por las pantallas.

function updateSpaceBackground(scene, delta, time = 0) {
  if (!scene.starfieldLayers) return;

  const seconds = delta / 1000;
  const speedMultiplier = getStarfieldSpeedMultiplier();
  scene.starfieldLayers.forEach((starLayer) => {
    starLayer.tile.tilePositionX += starLayer.baseSpeedX * speedMultiplier * seconds;
    starLayer.tile.tilePositionY -= starLayer.baseSpeedY * speedMultiplier * seconds;
  });
}

function getStarfieldSpeedMultiplier() {
  const ballSpeedMultiplier = currentGravity / BASE_GRAVITY;
  const visualSpeed = 1 + (ballSpeedMultiplier - 1) * STARFIELD_SPEED_RATIO;
  return Math.min(MAX_STARFIELD_SPEED_MULTIPLIER, visualSpeed);
}

function layoutScene(scene) {
  const width = getGameWidth(scene);
  const height = getGameHeight(scene);
  const centerX = width / 2;
  const centerY = height / 2;
  scene.physics.world.setBounds(0, 0, width, height);
  createBackground(scene);

  if (scene.menuContainer) {
    scene.menuContainer.setPosition(centerX, centerY);
  }

  if (scene.gameOverContainer) {
    scene.gameOverContainer.setPosition(centerX, centerY);
  }

  if (scene.rankingContainer) {
    scene.rankingContainer.setPosition(centerX, centerY);
  }

  updateHud(scene);

  if (scene.ship) {
    refreshShipSize(scene);
    const position = clampShipPosition(scene, scene.ship.x || centerX, scene.ship.y || getShipY(scene));
    moveShipTo(scene, position.x, position.y);
  }

  if (scene.pauseOverlay) {
    scene.pauseOverlay.setPosition(centerX, centerY);
  }

  if (scene.upgradeOverlay) {
    scene.upgradeOverlay.setPosition(centerX, centerY);
  }

}

// --- Menu principal ---

function createMenu(scene) {
  const overlay = createDomOverlay('menu-overlay', true);
  bindScreenClick('menu', 'play-button', () => {
    playButtonSound(scene);
    startGame.call(scene);
  });
  bindScreenClick('menu', 'xy-infinite-mode-button', () => {
    playButtonSound(scene);
    startGame.call(scene, { mode: 'xyInfinite' });
  });
  bindScreenClick('menu', 'boss-only-mode-button', () => {
    playButtonSound(scene);
    startGame.call(scene, { mode: 'xyBossOnly' });
  });
  bindScreenClick('menu', 'ranking-button', () => {
    playButtonSound(scene);
    showRanking.call(scene);
  });
  bindScreenClick('menu', 'menu-options-button', () => {
    playButtonSound(scene);
    showOptionsOverlay(scene, 'menu');
  });
  return overlay;
}

// --- Game Over ---

function createGameOver(scene) {
  const overlay = createDomOverlay('gameover-overlay', false);
  const finalScore = document.getElementById('final-score');
  const scoreForm = document.getElementById('score-form');
  const playerNameInput = document.getElementById('player-name');
  const saveScoreButton = document.getElementById('save-score-button');
  const scoreStatus = document.getElementById('score-status');
  const topRankingList = document.getElementById('gameover-ranking-list');
  const rankingBlock = topRankingList ? topRankingList.closest('.ranking-block') : null;
  const retryButton = document.getElementById('retry-button');
  const menuButton = document.getElementById('menu-button');

  if (scoreForm) {
    scoreForm.addEventListener('submit', (event) => {
      event.preventDefault();
      savePendingScore(scene);
    });
  }
  if (retryButton) {
    retryButton.addEventListener('click', () => {
      playButtonSound(scene);
      startGame.call(scene, { mode: currentGameMode });
    });
  }
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      playButtonSound(scene);
      showMenu.call(scene);
    });
  }

  overlay.finalScore = {
    setText: (text) => {
      if (finalScore) finalScore.textContent = text;
    },
  };
  overlay.scoreForm = scoreForm;
  overlay.playerNameInput = playerNameInput;
  overlay.saveScoreButton = saveScoreButton;
  overlay.scoreStatus = scoreStatus;
  overlay.topRankingList = topRankingList;
  overlay.rankingBlock = rankingBlock;
  return overlay;
}

function createRanking(scene) {
  const overlay = createDomOverlay('ranking-overlay', false);
  overlay.list = document.getElementById('ranking-list');
  overlay.status = document.getElementById('ranking-status');

  bindScreenClick('ranking', 'ranking-back-button', () => {
    playButtonSound(scene);
    showMenu.call(scene);
  });

  return overlay;
}

function setOnlyOverlayVisible(scene, visibleOverlay) {
  [
    scene.menuContainer,
    scene.gameOverContainer,
    scene.rankingContainer,
    scene.pauseOverlay,
    scene.optionsOverlay,
    scene.upgradeOverlay,
    scene.echoTutorialOverlay,
  ].forEach((overlay) => {
    if (overlay) overlay.setVisible(overlay === visibleOverlay);
  });
}

function showOverlayScreen(scene, screenName) {
  const overlayByScreen = {
    menu: scene.menuContainer,
    gameover: scene.gameOverContainer,
    ranking: scene.rankingContainer,
    pause: scene.pauseOverlay,
    options: scene.optionsOverlay,
    upgrade: scene.upgradeOverlay,
    tutorial: scene.echoTutorialOverlay,
  };

  setOnlyOverlayVisible(scene, overlayByScreen[screenName] || null);
  setOverlayRootInteractive(screenName && screenName !== 'pause');
}

function setOverlayRootInteractive(isInteractive) {
  const overlayRoot = document.getElementById('ui-overlays');
  if (!overlayRoot) return;
  overlayRoot.classList.toggle('is-interactive', Boolean(isInteractive));
}

function getCurrentOverlayScreen(scene) {
  if (scene && scene.optionsOverlay && scene.optionsOverlay.element && scene.optionsOverlay.element.classList.contains('is-visible')) return 'options';
  if (scene && scene.pauseOverlay && scene.pauseOverlay.element && scene.pauseOverlay.element.classList.contains('is-visible')) return 'pause';
  if (scene && scene.rankingContainer && scene.rankingContainer.element && scene.rankingContainer.element.classList.contains('is-visible')) return 'ranking';
  if (scene && scene.gameOverContainer && scene.gameOverContainer.element && scene.gameOverContainer.element.classList.contains('is-visible')) return 'gameover';
  if (scene && scene.menuContainer && scene.menuContainer.element && scene.menuContainer.element.classList.contains('is-visible')) return 'menu';
  return null;
}


function createPauseOverlay(scene) {
  const overlay = createDomOverlay('pause-overlay', false);
  overlay.title = overlay.element ? overlay.element.querySelector('h2') : null;
  overlay.copy = overlay.element ? overlay.element.querySelector('.ui-copy') : null;
  overlay.panel = overlay.element ? overlay.element.querySelector('.ui-panel') : null;
  bindSingleClick('pause-settings-button', () => {
    if (state !== 'paused') return;
    playButtonSound(scene);
    showFrozenPauseMenu(scene);
  });
  bindScreenClick('pause', 'pause-back-button', () => {
    playButtonSound(scene);
    hideFrozenPauseMenu(scene);
  });
  bindScreenClick('pause', 'pause-surrender-button', () => {
    playButtonSound(scene);
    endGame.call(scene);
  });
  bindScreenClick('pause', 'pause-options-button', () => {
    playButtonSound(scene);
    showOptionsOverlay(scene, 'paused');
  });
  return overlay;
}

function setPauseOverlayMode(scene, mode = 'normal') {
  if (!scene.pauseOverlay || !scene.pauseOverlay.element) return;

  const isUpgradePause = mode === 'upgrade';
  const isUpgradeDetailPause = mode === 'upgrade-detail';
  scene.pauseOverlay.element.classList.toggle('is-upgrade-pause', isUpgradePause);
  scene.pauseOverlay.element.classList.toggle('is-upgrade-detail-pause', isUpgradeDetailPause);
  scene.pauseOverlay.element.classList.remove('is-frozen-pause-menu');
  if (scene.pauseOverlay.panel) {
    scene.pauseOverlay.panel.classList.toggle('ui-panel-upgrade-pause', isUpgradePause);
    scene.pauseOverlay.panel.classList.toggle('ui-panel-upgrade-detail', isUpgradeDetailPause);
  }
  if (scene.pauseOverlay.title) {
    scene.pauseOverlay.title.textContent = 'PAUSA';
  }
  if (scene.pauseOverlay.copy) {
    scene.pauseOverlay.copy.textContent = '';
  }
}

function showFrozenPauseMenu(scene) {
  if (!scene || state !== 'paused') return;
  setPauseOverlayMode(scene, 'normal');
  setXyControlActive(scene, false);
  setXyControlVisible(scene, false);
  if (scene.pauseOverlay && scene.pauseOverlay.element) {
    scene.pauseOverlay.element.classList.add('is-frozen-pause-menu');
  }
  setPauseSettingsVisible(false);
  showOverlayScreen(scene, 'pause');
}

function hideFrozenPauseMenu(scene) {
  if (!scene || state !== 'paused') return;
  if (scene.pauseOverlay && scene.pauseOverlay.element) {
    scene.pauseOverlay.element.classList.remove('is-frozen-pause-menu');
  }
  setPauseOverlayMode(scene, 'normal');
  prepareControlPauseResume(scene);
  showOverlayScreen(scene, null);
  setPauseSettingsVisible(true);
}

function showPausedUpgradeDetails(scene, upgradeKind) {
  if (!scene || state !== 'paused') return;
  const config = getUpgradeConfig(upgradeKind);
  if (!config) return;

  setPauseOverlayMode(scene, 'upgrade-detail');
  setXyControlActive(scene, false);
  setXyControlVisible(scene, false);
  setPauseSettingsVisible(false);
  if (scene.pauseOverlay.title) scene.pauseOverlay.title.textContent = config.label;
  if (scene.pauseOverlay.copy) scene.pauseOverlay.copy.textContent = getPausedUpgradeDescription(upgradeKind, config);
  showOverlayScreen(scene, 'pause');
}

function createUpgradeOverlay(scene) {
  const overlay = createDomOverlay('upgrade-overlay', false);
  overlay.upgradeButtons = {
    first: createDomUpgradeButton(scene, 'upgrade-first'),
    second: createDomUpgradeButton(scene, 'upgrade-second'),
  };
  return overlay;
}


function createOptionsOverlay(scene) {
  const overlay = createDomOverlay('options-overlay', false);
  const toggleSfxButton = bindScreenClick('options', 'toggle-sfx-button', () => {
    soundEffectsEnabled = !soundEffectsEnabled;
    saveAudioSettings();
    updateAudioOptionButtons(scene);
    if (soundEffectsEnabled) playButtonSound(scene);
  });

  const toggleMusicButton = bindScreenClick('options', 'toggle-music-button', () => {
    musicEnabled = !musicEnabled;
    saveAudioSettings();
    updateAudioOptionButtons(scene);
    if (!musicEnabled) {
      stopCurrentMusic(scene);
    } else if (scene.optionsReturnScreen === 'pause' || state === 'playing' || state === 'paused') {
      resumeCurrentMusic(scene);
    } else {
      playMusicForCurrentState(scene);
    }
  });

  const sfxVolumeSlider = bindVolumeSlider('sfx-volume-slider', (value) => {
    soundEffectsVolume = value;
    saveAudioSettings();
    applyAudioVolumes(scene);
    updateAudioOptionButtons(scene);
  });

  const musicVolumeSlider = bindVolumeSlider('music-volume-slider', (value) => {
    musicVolume = value;
    saveAudioSettings();
    applyAudioVolumes(scene);
    updateAudioOptionButtons(scene);
    if (musicEnabled) playMusicForCurrentState(scene);
  });

  bindScreenClick('options', 'options-back-button', () => {
    if (soundEffectsEnabled) playButtonSound(scene);
    hideOptionsOverlay(scene);
  });

  overlay.toggleSfxButton = toggleSfxButton;
  overlay.toggleMusicButton = toggleMusicButton;
  overlay.sfxVolumeSlider = sfxVolumeSlider;
  overlay.musicVolumeSlider = musicVolumeSlider;
  overlay.sfxVolumeValue = document.getElementById('sfx-volume-value');
  overlay.musicVolumeValue = document.getElementById('music-volume-value');
  return overlay;
}

function bindVolumeSlider(id, onInput) {
  const slider = document.getElementById(id);
  if (!slider) return null;

  slider.addEventListener('input', () => {
    onInput(getSliderVolume(slider));
  });
  slider.addEventListener('change', () => {
    onInput(getSliderVolume(slider));
  });
  return slider;
}

function getSliderVolume(slider) {
  const nextVolume = Number(slider.value) / 100;
  return Number.isFinite(nextVolume) ? Phaser.Math.Clamp(nextVolume, 0, 1) : 1;
}

function bindSingleClick(id, handler) {
  const element = document.getElementById(id);
  if (!element) return null;

  const cleanElement = element.cloneNode(true);
  element.replaceWith(cleanElement);
  cleanElement.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    handler(event);
  });
  return cleanElement;
}

function bindScreenClick(screenName, id, handler) {
  return bindSingleClick(id, (event) => {
    if (!isScreenElementVisible(screenName)) return;
    handler(event);
  });
}

function isScreenElementVisible(screenName) {
  const element = document.getElementById(screenName + '-overlay');
  return Boolean(element && element.classList.contains('is-visible'));
}

function createDomOverlay(id, visible = false) {
  const element = document.getElementById(id);
  const overlay = {
    element,
    setVisible(nextVisible) {
      if (this.element) this.element.classList.toggle('is-visible', nextVisible);
      return this;
    },
    setPosition() {
      return this;
    },
    setDepth() {
      return this;
    },
  };
  overlay.setVisible(visible);
  return overlay;
}

function bindUiEventGuards() {
  const overlayRoot = document.getElementById('ui-overlays');
  if (!overlayRoot || overlayRoot.dataset.eventsGuarded === '1') return;
  overlayRoot.dataset.eventsGuarded = '1';

  ['pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'click', 'touchstart', 'touchmove', 'touchend'].forEach((eventName) => {
    overlayRoot.addEventListener(eventName, (event) => {
      if (event.target && event.target.closest('.ui-panel')) {
        event.stopPropagation();
      }
    }, { passive: false });
  });
}

function createDomUpgradeButton(scene, id) {
  const element = document.getElementById(id);
  const data = {};
  const button = {
    element,
    setVisible(visible) {
      if (this.element) this.element.hidden = !visible;
      return this;
    },
    disableInteractive() {
      if (this.element) this.element.disabled = true;
      return this;
    },
    setInteractive() {
      if (this.element) this.element.disabled = false;
      return this;
    },
    setData(key, value) {
      data[key] = value;
      return this;
    },
    getData(key) {
      return data[key];
    },
    setText(text) {
      if (this.element) this.element.textContent = text;
      return this;
    },
    setContent(title, description) {
      if (!this.element) return this;
      this.element.replaceChildren();
      const titleElement = document.createElement('span');
      const descriptionElement = document.createElement('span');
      titleElement.className = 'ui-upgrade-title';
      descriptionElement.className = 'ui-upgrade-description';
      titleElement.textContent = title;
      descriptionElement.textContent = description;
      this.element.append(titleElement, descriptionElement);
      return this;
    },
    setStyle(style) {
      if (!this.element) return this;
      if (style.backgroundColor) this.element.style.setProperty('--upgrade-color', style.backgroundColor);
      if (style.fill) this.element.style.color = style.fill;
      return this;
    },
    setAlpha(alpha) {
      if (this.element) this.element.style.opacity = alpha;
      return this;
    },
  };

  if (element) {
    element.addEventListener('click', () => {
      if (element.disabled) return;
      playButtonSound(scene);
      chooseUpgrade(scene, button.getData('upgradeKind'));
    });
  }

  return button;
}

