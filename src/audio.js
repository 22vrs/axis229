// Musica, efectos de sonido y persistencia de opciones de audio.
// Usa Audio del navegador para poder solapar SFX y controlar volumenes por categoria.

function playCatchSound(scene) {
  if (!soundEffectsEnabled) return;
  if (!scene.catchAudio) {
    scene.catchAudio = new Audio(CATCH_SOUND_PATH);
    scene.catchAudio.baseVolume = 0.45;
  }

  scene.catchAudio.volume = getSoundEffectVolume(scene.catchAudio.baseVolume);
  scene.catchAudio.currentTime = 0;
  scene.catchAudio.play().catch(() => {});
}

function playBoosterSound(scene) {
  playAudioFile(scene, 'boosterAudio', BOOSTER_SOUND_PATH, 0.45);
}

function playBadSound(scene) {
  playAudioFile(scene, 'badAudio', BAD_SOUND_PATH, 0.5);
}

function playButtonSound(scene) {
  playAudioFile(scene, 'buttonAudio', BUTTON_SOUND_PATH, 0.45);
}

function playLevelUpSound(scene) {
  playAudioFile(scene, 'levelUpAudio', LEVEL_UP_SOUND_PATH, 0.55);
}

function playRedWaveSound(scene) {
  playAudioFile(scene, 'redWaveAudio', RED_WAVE_SOUND_PATH, 0.6);
}

function playBossLaserSound(scene) {
  playLoopingAudioFile(scene, 'bossLaserAudio', BOSS_LASER_SOUND_PATH, 0.5);
}

function stopBossLaserSound(scene) {
  stopAudioFile(scene, 'bossLaserAudio');
}

function playShieldBlockSound(scene) {
  playAudioFile(scene, 'shieldBlockAudio', SHIELD_BLOCK_SOUND_PATH, 0.5);
}

function playSpikeDroneSound(scene) {
  playOverlappingAudioFile(scene, 'spikeDroneAudios', SPIKE_DRONE_SOUND_PATH, 0.55);
}

function playSpikeDroneDisableSound(scene) {
  playOverlappingAudioFile(scene, 'spikeDroneDisableAudios', SPIKE_DRONE_DISABLE_SOUND_PATH, 0.55);
}

function playRedNeedleShotSound(scene) {
  playOverlappingAudioFile(scene, 'redNeedleShotAudios', RED_NEEDLE_SHOT_SOUND_PATH, 0.48);
}

function playStreakSuccessSound(scene) {
  playAudioFile(scene, 'streakSuccessAudio', STREAK_SUCCESS_SOUND_PATH, 0.58);
}

function playRegisterPickupSound(scene) {
  playAudioFile(scene, 'registerPickupAudio', REGISTER_PICKUP_SOUND_PATH, 0.55);
}

function playRegisterSpawnSound(scene) {
  playOverlappingAudioFile(scene, 'registerSpawnAudios', REGISTER_SPAWN_SOUND_PATH, 0.5);
}

function playBackgroundMusic(scene) {
  playGameplayMusic(scene);
}

function playGameplayMusic(scene) {
  if (!musicEnabled) return;
  playMusicTrack(scene, 'gameplayMusic', GAMEPLAY_MUSIC_PATH, 0.28);
}

function playMenuMusic(scene) {
  if (!musicEnabled) return;
  playMusicTrack(scene, 'menuMusic', MENU_MUSIC_PATH, 0.25);
}

function restartBackgroundMusic(scene) {
  pausedMusicTime = 0;
  stopCurrentMusic(scene);
  scene.currentMusicKey = null;
  playGameplayMusic(scene);
}

function playPurpleBoosterMusic(scene) {
  if (!musicEnabled) return;
  if (!PURPLE_BOOSTER_MUSIC_PATH) {
    playGameplayMusic(scene);
    return;
  }
  playMusicTrack(scene, 'purpleBoosterMusic', PURPLE_BOOSTER_MUSIC_PATH, 0.32);
}

function playMusicTrack(scene, audioKey, path, volume) {
  if (!musicEnabled) return;
  if (pageAudioSuspended || document.hidden) return;
  if (scene.currentMusicKey === audioKey && scene[audioKey] && !scene[audioKey].paused && !musicPlaybackBlocked) return;

  if (!scene[audioKey]) {
    scene[audioKey] = new Audio(path);
    scene[audioKey].loop = true;
  }

  const previousMusicKey = scene.currentMusicKey;
  const previousMusic = previousMusicKey && previousMusicKey !== audioKey ? scene[previousMusicKey] : null;
  scene[audioKey].baseVolume = volume;
  scene[audioKey].volume = getMusicVolume(volume);
  scene[audioKey].currentTime = pausedMusicTime > 0 ? pausedMusicTime : 0;
  pausedMusicTime = 0;
  scene[audioKey].play()
    .then(() => {
      if (pageAudioSuspended || document.hidden) {
        pausedMusicTime = scene[audioKey].currentTime || 0;
        scene[audioKey].pause();
        scene.currentMusicKey = audioKey;
        pageAudioWasPlaying = true;
        return;
      }
      if (previousMusic) {
        previousMusic.pause();
        previousMusic.currentTime = 0;
      }
      scene.currentMusicKey = audioKey;
      audioUnlocked = true;
      musicPlaybackBlocked = false;
    })
    .catch(() => {
      musicPlaybackBlocked = true;
    });
}

function bindAudioUnlockListeners(scene) {
  if (audioUnlockListenersBound) return;
  audioUnlockListenersBound = true;

  const unlockAudio = () => {
    if (pageAudioSuspended || document.hidden) return;
    if ((audioUnlocked && !musicPlaybackBlocked) || !musicEnabled) return;
    const targetScene = scene || gameScene;
    if (!targetScene) return;
    playMusicForCurrentState(targetScene);
  };

  ['pointerdown', 'touchstart', 'keydown'].forEach((eventName) => {
    window.addEventListener(eventName, unlockAudio, { capture: true, passive: true });
  });
}

function bindPageAudioPauseListeners(scene) {
  if (pageAudioListenersBound) return;
  pageAudioListenersBound = true;

  const suspendAudio = () => suspendPageAudio(scene || gameScene);
  const resumeAudio = () => {
    if (document.hidden) return;
    resumePageAudio(scene || gameScene);
  };

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      suspendAudio();
    } else {
      resumeAudio();
    }
  });
  window.addEventListener('blur', suspendAudio);
  window.addEventListener('pagehide', suspendAudio);
  window.addEventListener('focus', resumeAudio);
  window.addEventListener('pageshow', resumeAudio);
}

function suspendPageAudio(scene) {
  if (pageAudioSuspended) return;
  pageAudioSuspended = true;
  pageAudioWasPlaying = false;
  const targetScene = scene || gameScene;
  if (!targetScene || !targetScene.currentMusicKey || !targetScene[targetScene.currentMusicKey]) return;

  const music = targetScene[targetScene.currentMusicKey];
  pageAudioWasPlaying = !music.paused;
  if (pageAudioWasPlaying) pauseCurrentMusic(targetScene);
}

function resumePageAudio(scene) {
  if (!pageAudioSuspended) return;
  pageAudioSuspended = false;
  const shouldResumeMusic = pageAudioWasPlaying;
  pageAudioWasPlaying = false;
  if (!shouldResumeMusic || !musicEnabled) return;

  const targetScene = scene || gameScene;
  if (!targetScene) return;
  resumeCurrentMusic(targetScene);
}

function getSoundEffectVolume(baseVolume = 1) {
  return Phaser.Math.Clamp(baseVolume * soundEffectsVolume, 0, 1);
}

function getMusicVolume(baseVolume = 1) {
  return Phaser.Math.Clamp(baseVolume * musicVolume, 0, 1);
}

function applyAudioVolumes(scene) {
  if (!scene) return;

  [
    'catchAudio',
    'boosterAudio',
    'badAudio',
    'buttonAudio',
    'levelUpAudio',
    'redWaveAudio',
    'bossLaserAudio',
    'shieldBlockAudio',
    'streakSuccessAudio',
    'registerPickupAudio',
  ].forEach((audioKey) => {
    const audio = scene[audioKey];
    if (audio) audio.volume = getSoundEffectVolume(audio.baseVolume || 1);
  });

  ['spikeDroneAudios', 'spikeDroneDisableAudios', 'redNeedleShotAudios', 'registerSpawnAudios'].forEach((collectionKey) => {
    const collection = scene[collectionKey];
    if (!collection) return;
    collection.forEach((audio) => {
      audio.volume = getSoundEffectVolume(audio.baseVolume || 1);
    });
  });

  ['menuMusic', 'gameplayMusic', 'purpleBoosterMusic', 'backgroundMusic'].forEach((audioKey) => {
    const audio = scene[audioKey];
    if (audio) audio.volume = getMusicVolume(audio.baseVolume || 1);
  });
}

function stopBackgroundMusic(scene) {
  stopCurrentMusic(scene);
  scene.currentMusicKey = null;
  pausedMusicTime = 0;
}

function stopNonMusicAudio(scene) {
  ['catchAudio', 'boosterAudio', 'badAudio', 'buttonAudio', 'levelUpAudio', 'redWaveAudio', 'bossLaserAudio', 'shieldBlockAudio', 'streakSuccessAudio', 'registerPickupAudio'].forEach((audioKey) => {
    const audio = scene[audioKey];
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  });
  if (scene.spikeDroneAudios) {
    scene.spikeDroneAudios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    scene.spikeDroneAudios = [];
  }
  if (scene.spikeDroneDisableAudios) {
    scene.spikeDroneDisableAudios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    scene.spikeDroneDisableAudios = [];
  }
  if (scene.redNeedleShotAudios) {
    scene.redNeedleShotAudios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    scene.redNeedleShotAudios = [];
  }
  if (scene.registerSpawnAudios) {
    scene.registerSpawnAudios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    scene.registerSpawnAudios = [];
  }
}

function stopCurrentMusic(scene) {
  if (!scene.currentMusicKey || !scene[scene.currentMusicKey]) return;

  const music = scene[scene.currentMusicKey];
  music.pause();
  music.currentTime = 0;
}

function pauseCurrentMusic(scene) {
  if (!musicEnabled) return;
  if (!scene.currentMusicKey || !scene[scene.currentMusicKey]) return;
  const music = scene[scene.currentMusicKey];
  pausedMusicTime = music.currentTime || 0;
  music.pause();
}

function resumeCurrentMusic(scene) {
  if (!musicEnabled) return;
  if (!scene.currentMusicKey) return;
  const currentKey = scene.currentMusicKey;
  if (currentKey === 'purpleBoosterMusic') {
    playPurpleBoosterMusic(scene);
    return;
  }
  if (currentKey === 'menuMusic') {
    playMenuMusic(scene);
    return;
  }
  playGameplayMusic(scene);
}

function playMusicForCurrentState(scene) {
  if (!musicEnabled) return;
  if (state === 'playing' || state === 'paused' || (scene && scene.optionsReturnScreen === 'pause')) {
    resumeCurrentMusic(scene);
    if (!scene.currentMusicKey) playGameplayMusic(scene);
    return;
  }
  playMenuMusic(scene);
}

function playAudioFile(scene, audioKey, path, volume) {
  if (!soundEffectsEnabled) return;
  if (!scene[audioKey]) {
    scene[audioKey] = new Audio(path);
  }

  scene[audioKey].baseVolume = volume;
  scene[audioKey].volume = getSoundEffectVolume(volume);
  scene[audioKey].currentTime = 0;
  scene[audioKey].play().catch(() => {});
}

function playOverlappingAudioFile(scene, audioCollectionKey, path, volume) {
  if (!soundEffectsEnabled) return;
  if (!scene[audioCollectionKey]) scene[audioCollectionKey] = [];

  const audio = new Audio(path);
  audio.baseVolume = volume;
  audio.volume = getSoundEffectVolume(volume);
  scene[audioCollectionKey].push(audio);

  const removeAudio = () => {
    scene[audioCollectionKey] = scene[audioCollectionKey].filter((item) => item !== audio);
  };

  audio.addEventListener('ended', removeAudio, { once: true });
  audio.addEventListener('error', removeAudio, { once: true });
  audio.play().catch(removeAudio);
}

function playLoopingAudioFile(scene, audioKey, path, volume) {
  if (!soundEffectsEnabled) return;
  if (!scene[audioKey]) {
    scene[audioKey] = new Audio(path);
    scene[audioKey].loop = true;
  }

  scene[audioKey].baseVolume = volume;
  scene[audioKey].volume = getSoundEffectVolume(volume);
  scene[audioKey].currentTime = 0;
  scene[audioKey].play().catch(() => {});
}

function stopAudioFile(scene, audioKey) {
  const audio = scene[audioKey];
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
}

function showOptionsOverlay(scene, returnState) {
  if (!scene.optionsOverlay) return;
  const fallbackScreen = getCurrentOverlayScreen(scene);
  scene.optionsReturnScreen = returnState === 'paused' || returnState === 'pause'
    ? 'pause'
    : (returnState || fallbackScreen || 'menu');
  state = 'options';
  setPauseSettingsVisible(false);
  updateAudioOptionButtons(scene);
  showOverlayScreen(scene, 'options');
}

function hideOptionsOverlay(scene) {
  if (!scene.optionsOverlay) return;
  const returnScreen = scene.optionsReturnScreen || 'menu';
  scene.optionsReturnScreen = null;

  if (returnScreen === 'pause') {
    state = 'paused';
    showFrozenPauseMenu(scene);
    return;
  }

  if (returnScreen === 'ranking') {
    state = 'ranking';
    showOverlayScreen(scene, 'ranking');
    return;
  }

  if (returnScreen === 'gameover') {
    state = 'gameover';
    showOverlayScreen(scene, 'gameover');
    return;
  }

  state = 'menu';
  const currentHud = initHud();
  if (currentHud.root) currentHud.root.classList.remove('is-visible');
  setPauseSettingsVisible(false);
  showOverlayScreen(scene, 'menu');
}

function updateAudioOptionButtons(scene = gameScene) {
  const optionsOverlay = scene && scene.optionsOverlay;
  if (!optionsOverlay) return;
  if (optionsOverlay.toggleSfxButton) {
    optionsOverlay.toggleSfxButton.textContent = 'EFECTOS: ' + (soundEffectsEnabled ? 'ON' : 'OFF');
  }
  if (optionsOverlay.toggleMusicButton) {
    optionsOverlay.toggleMusicButton.textContent = 'MUSICA: ' + (musicEnabled ? 'ON' : 'OFF');
  }
  if (optionsOverlay.sfxVolumeSlider) {
    optionsOverlay.sfxVolumeSlider.value = String(Math.round(soundEffectsVolume * 100));
  }
  if (optionsOverlay.musicVolumeSlider) {
    optionsOverlay.musicVolumeSlider.value = String(Math.round(musicVolume * 100));
  }
  if (optionsOverlay.sfxVolumeValue) {
    optionsOverlay.sfxVolumeValue.textContent = Math.round(soundEffectsVolume * 100) + '%';
  }
  if (optionsOverlay.musicVolumeValue) {
    optionsOverlay.musicVolumeValue.textContent = Math.round(musicVolume * 100) + '%';
  }
}

function loadAudioSettings() {
  try {
    const sfx = window.localStorage.getItem('jueguito_sfx_enabled');
    const music = window.localStorage.getItem('jueguito_music_enabled');
    const sfxVolume = window.localStorage.getItem('jueguito_sfx_volume');
    const musicVolumeValue = window.localStorage.getItem('jueguito_music_volume');
    if (sfx !== null) soundEffectsEnabled = sfx === '1';
    if (music !== null) musicEnabled = music === '1';
    if (sfxVolume !== null) soundEffectsVolume = normalizeStoredVolume(sfxVolume);
    if (musicVolumeValue !== null) musicVolume = normalizeStoredVolume(musicVolumeValue);
  } catch (error) {
    soundEffectsEnabled = true;
    musicEnabled = true;
    soundEffectsVolume = 1;
    musicVolume = 1;
  }
}

function saveAudioSettings() {
  try {
    window.localStorage.setItem('jueguito_sfx_enabled', soundEffectsEnabled ? '1' : '0');
    window.localStorage.setItem('jueguito_music_enabled', musicEnabled ? '1' : '0');
    window.localStorage.setItem('jueguito_sfx_volume', String(soundEffectsVolume));
    window.localStorage.setItem('jueguito_music_volume', String(musicVolume));
  } catch (error) {
    // Ignorar si el navegador no permite persistir.
  }
}

function normalizeStoredVolume(value) {
  const parsedVolume = Number(value);
  return Number.isFinite(parsedVolume) ? Phaser.Math.Clamp(parsedVolume, 0, 1) : 1;
}
