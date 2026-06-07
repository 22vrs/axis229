const GAME_WIDTH = 390;
const GAME_HEIGHT = 700;
const CATCH_SOUND_PATH = 'assets/catch.mp3';
const BOOSTER_SOUND_PATH = 'assets/booster.mp3';
const BAD_SOUND_PATH = 'assets/bad.mp3';
const BUTTON_SOUND_PATH = 'assets/button.mp3';
const LEVEL_UP_SOUND_PATH = 'assets/level-up.mp3';
const RED_WAVE_SOUND_PATH = 'assets/red-wave.mp3';
const BOSS_LASER_SOUND_PATH = 'assets/boss-laser.mp3';
const SHIELD_BLOCK_SOUND_PATH = 'assets/shield-block.mp3';
const SPIKE_DRONE_SOUND_PATH = 'assets/spike-drone.mp3';
const SPIKE_DRONE_DISABLE_SOUND_PATH = 'assets/spike-drone-disable.mp3';
const RED_NEEDLE_SHOT_SOUND_PATH = 'assets/red-needle-shot.mp3';
const STREAK_SUCCESS_SOUND_PATH = 'assets/streak-success.mp3';
const BACKGROUND_MUSIC_PATH = 'assets/background.mp3';
const PURPLE_BOOSTER_MUSIC_PATH = 'assets/purple-booster.mp3';
const SUPABASE_URL = 'https://fqkpwigonxgnsynfdzyw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Up1cBihd6uOftnMkhj3A3w_ZH1q7YOR';
const SUPABASE_RANKING_TABLE = 'ranking';
const SUPABASE_SCORE_COLUMN = 'puntos';
const SUPABASE_STREAK_COLUMN = 'racha';
const DEFAULT_PLAYER_NAME = 'Anónimo';
const INITIAL_SPAWN_DELAY = 1500;
const MIN_SPAWN_DELAY = 600;
const SPAWN_DELAY_EASING = 1.8;
const BASE_GRAVITY = 220;
const MAX_SPEED_MULTIPLIER = 2;
const MAX_BALL_GRAVITY = BASE_GRAVITY * MAX_SPEED_MULTIPLIER;
const SPEED_TARGET_LEVEL = 3;
const STARFIELD_SPEED_RATIO = 0.32;
const MAX_STARFIELD_SPEED_MULTIPLIER = 2.6;
const BOOSTER_GRAVITY_RATIO = 0.8;
const SHIP_SIDE_HIDE_RATIO = 1 / 3;
const SHIP_WIDTH = 156;
const SHIP_HEIGHT = 46;
const SHIP_RADIUS = 8;
const SHIELD_BUBBLE_RADIUS = 82;
const SHIELD_BUBBLE_DIAMETER = SHIELD_BUBBLE_RADIUS * 2;
const TIMED_BOOSTER_DURATION = 10000;
const RED_WAVE_DURATION = 15000;
const RED_WAVE_SPAWN_DELAY = 400;
const RED_WAVE_ENEMY_GRAVITY_RATIO = 0.72;
const RED_WAVE_MIN_ENEMY_SPACING = SHIP_WIDTH + 56;
const RED_WAVE_RECENT_ENEMY_HEIGHT = 230;
const OBRERA_SPAWN_CHANCE = 0.16;
const DRONE_WAVE_DURATION = 15000;
const DRONE_WAVE_SPAWN_DELAY = 680;
const ASTEROID_WAVE_DURATION = 15000;
const ASTEROID_WAVE_SPAWN_DELAY = 760;
const TRAVEL_ASTEROID_CHANCE = 0.1;
const TRAVEL_PLASMA_CHANCE = 0.05;
const SPIKE_DRONE_SPAWN_CHANCE = 0.05;
const SPIKE_DRONE_FOLDED_RADIUS = 18;
const SPIKE_DRONE_EXPANDED_RADIUS = SPIKE_DRONE_FOLDED_RADIUS * 3;
const SPIKE_DRONE_FOLDED_DURATION = 1100;
const SPIKE_DRONE_WARNING_GREEN_DURATION = 1500;
const SPIKE_DRONE_WARNING_RED_DURATION = 500;
const SPIKE_DRONE_WARNING_DURATION = SPIKE_DRONE_WARNING_GREEN_DURATION + SPIKE_DRONE_WARNING_RED_DURATION;
const SPIKE_DRONE_EXPANDED_DURATION = 1000;
const SPIKE_DRONE_GRAVITY_RATIO = 0.68;
const SPIKE_DRONE_TEXTURE_SIZE = 120;
const RED_NEEDLE_SPAWN_CHANCE = 0.05;
const RED_NEEDLE_WIDTH = 76;
const RED_NEEDLE_HEIGHT = 28;
const RED_NEEDLE_SPEED = 118;
const RED_NEEDLE_MAX_SHOTS = 4;
const RED_NEEDLE_LASER_SPEED = 285;
const RED_NEEDLE_LASER_WIDTH = 10;
const RED_NEEDLE_LASER_HEIGHT = 23;
const PLASMA_WAVE_DURATION = 15000;
const PLASMA_WAVE_SPAWN_DELAY = 2100;
const PLASMA_BAR_HEIGHT = 18;
const PLASMA_BAR_GAP_WIDTH = SHIP_WIDTH + 54;
const PLASMA_BAR_VERTICAL_SPEED = 152;
const PLASMA_BAR_GAP_SPEED = 42;
const PLASMA_BAR_SPARK_COUNT = 5;
const PLASMA_BAR_SPARK_STEP = 9;
const PLASMA_BAR_SPARK_AMPLITUDE = 5;
const PLASMA_BAR_OUTER_SPARK_AMPLITUDE = 9;
const PLASMA_BAR_OUTER_SPARK_COUNT_MULTIPLIER = 2;
const BOSS_WAVE_DURATION = 30000;
const BOSS_WAVE_ATTACKS = 7;
const RED_NEEDLE_BOSS_ATTACKS = 6;
const RED_NEEDLE_BOSS_PASS_DURATION = 3400;
const RED_NEEDLE_BOSS_PASS_GAP = 620;
const TRAVEL_SENTINEL_ATTACKS = 2;
const TRAVEL_SENTINEL_CHANCE = 0.018;
const TRAVEL_SENTINEL_COOLDOWN = 26000;
const BOSS_LASER_WARN_DURATION = 1100;
const BOSS_LASER_DURATION = 2000;
const BOSS_ATTACK_GAP = 1500;
const BOSS_WIDTH = 560;
const BOSS_HEIGHT = 220;
const BOSS_LASER_WIDTH = 32;
const WAVE_CLEAR_DELAY = 2200;
const WAVE_POST_DELAY = 900;
const BOSS_CUE_BAND_HEIGHT = 76;
const BOSS_CUE_HOLD_DURATION = 900;
const BOSS_CUE_FADE_IN_DURATION = 260;
const BOSS_CUE_FADE_DURATION = 520;
const BOSS_LASER_MIN_X_GAP = 90;
const BOSS_LASER_CHAIN_MIN_X_GAP = SHIP_WIDTH + 34;
const BOSS_LASER_TRACKING_CHANCE = 0.55;
const BOSS_LASER_TRACKING_JITTER = 18;
const RED_ENEMY_SWAY_SPEED = 0.0042;
const RED_ENEMY_SWAY_MAX_VELOCITY = 24;
const SHIP_MAX_TILT = 24;
const SHIP_TILT_SMOOTHING = 0.16;
const SHIP_TILT_RETURN_SMOOTHING = 0.08;
const SHIP_TILT_VELOCITY_SMOOTHING = 0.22;
const SHIP_TILT_TARGET_SMOOTHING = 0.18;
const SHIP_TILT_SPEED_TO_ANGLE = 18;
const SHIP_TILT_SPEED_ANGLE_BOOST = 8;
const SHIP_TILT_FULL_SPEED = 1.1;
const SHIP_XY_DIRECTION_MAX_TILT = 32;
const SHIP_XY_DIRECTION_VERTICAL_WEIGHT = 0.72;
const SHIP_TILT_IDLE_DELAY = 170;
const SHIP_TRAIL_DURATION = 620;
const SHIP_TRAIL_MAX_POINTS = 38;
const SHIP_TRAIL_MIN_POINT_DISTANCE = 4;
const SHIP_TRAIL_WIDTH = 18;
const SHIP_TRAIL_POSITION_SMOOTHING = 0.34;
const SHIP_TRAIL_CURVE_PASSES = 2;
const SHIP_TRAIL_BLUE_CORE_RATIO = 0.34;
const SHIP_RESUME_TOUCH_PADDING_X = 12;
const SHIP_RESUME_TOUCH_PADDING_Y = 24;
const XY_CONTROL_RADIUS = 34;
const XY_CONTROL_SHIP_OFFSET_Y = 68;
const XY_CONTROL_BOTTOM_MARGIN = 56;
const XY_CONTROL_TOUCH_PADDING = 18;
const XY_BOTTOM_FRICTION_FADE_DURATION = 140;
const XY_EDGE_FRICTION_PARTICLE_COOLDOWN = 55;
const SHIP_LIFE_INDICATOR_CELL_WIDTH = 16;
const SHIP_LIFE_INDICATOR_CELL_HEIGHT = 10;
const SHIP_LIFE_INDICATOR_CELL_GAP = 5;
const SHIP_LIFE_INDICATOR_CURVE_DEPTH = 10;
const SHIP_LIFE_INDICATOR_Y_OFFSET = 42;
const SHIP_LIFE_INDICATOR_VISIBLE_DURATION = 1150;
const SHIP_LIFE_INDICATOR_FADE_DURATION = 260;
const FINAL_DAMAGE_GAME_OVER_DELAY = 1450;
const ENERGY_STREAK_REWARD_TARGET = 50;
const ENERGY_STREAK_REWARD_SCORE = 50;
const ENERGY_STREAK_UPGRADE_DELAY = 900;
const POINT_POPUP_STACK_WINDOW = 260;
const POINT_POPUP_STACK_DISTANCE = 78;
const POINT_POPUP_STACK_OFFSET = 24;
const POINT_POPUP_LIFE_INDICATOR_MARGIN = 26;
const POINT_POPUP_DURATION = 620;
const POINT_POPUP_FADE_DELAY = 390;
const STREAK_POINT_POPUP_DURATION = 1000;
const STREAK_POINT_POPUP_FADE_DELAY = 620;
const STREAK_POINT_POPUP_COLORS = ['#ff4f68', '#ffd84d', '#7dffae', '#76ffe8', '#4da3ff', '#d7a8ff'];
let streakGradientTextureId = 0;
let pointPopupTextureId = 0;
const ASTEROID_WAVE_BIG_ASTEROID_CHANCE = 0.16;
const ASTEROID_GRAVITY_RATIO = 0.9;
const BIG_ASTEROID_GRAVITY_RATIO = 0.72;
const ASTEROID_HORIZONTAL_SPEED_RATIO = 0.45;
const BIG_ASTEROID_HORIZONTAL_SPEED_RATIO = 0.32;
const ASTEROID_WAVE_GRAVITY_RATIO = 0.82;
const ASTEROID_WAVE_HORIZONTAL_SPEED_RATIO = 0.58;
const ASTEROID_WRAP_MARGIN = 28;
const UPGRADE_POINTS_REQUIRED = 10;
const SHIELD_BLOCK_SCORE = 10;
const INITIAL_HEART_CAPACITY = 3;
const MAX_UPGRADE_LEVEL = 5;
const UPGRADE_RESUME_DELAY = 2000;
const MAGNET_BASE_RADIUS_RATIO = 0.14;
const MAGNET_PULL_RATIO = 0.75;
const UPGRADE_BAR_TWEEN_DURATION = 260;
const BOOSTER_CHANCE_PER_LEVEL = 0.02;
const FONT_FAMILY = '"Orbitron", "Rajdhani", "Trebuchet MS", Arial, sans-serif';
const BACKGROUND_FIRST_COLOR = '#112c4d';
const BACKGROUND_SECOND_COLOR = '#461240';
const BACKGROUND_FIRST_COLOR_RATIO = 1 / 1.5;
const BACKGROUND_GRADIENT_FADE_RATIO = 0.50;
const FALLING_OBJECT_DEPTH = 4;
const SHIP_DEPTH = 12;
const FX_DEPTH = 30;
const UI_DEPTH = 1000;
const STARFIELD_TEXTURE_WIDTH = 512;
const STARFIELD_TEXTURE_HEIGHT = 1024;
const STARFIELD_LAYERS = [
  { key: 'starsFar', count: 80, color: 0x9fc7ff, minRadius: 0.35, maxRadius: 0.9, alpha: 0.42, speedY: 12, speedX: 2 },
  { key: 'starsMid', count: 54, color: 0xffffff, minRadius: 0.45, maxRadius: 1.2, alpha: 0.58, speedY: 24, speedX: -3 },
  { key: 'starsNear', count: 24, color: 0xffffff, minRadius: 0.8, maxRadius: 1.7, alpha: 0.72, speedY: 42, speedX: 5 },
];
const HUD_TOP = 20;
const HUD_HEIGHT = 70;
const BOOSTER_BAR_Y = HUD_TOP + HUD_HEIGHT + 12;
const RED_NEEDLE_Y = BOOSTER_BAR_Y + 120;
const UPGRADE_ICON_Y = BOOSTER_BAR_Y + 18;

const config = {
  type: Phaser.AUTO,
  parent: 'game-container',
  backgroundColor: BACKGROUND_SECOND_COLOR,
  resolution: Math.min(2, window.devicePixelRatio || 1),
  render: {
    antialias: true,
    antialiasGL: true,
    pixelArt: false,
    roundPixels: false,
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }, // CORRECCION: gravedad global a 0, cada bola tiene la suya propia
      debug: false,
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

let game = null;
let score = 0;
let ballsCaught = 0;
let energyStreak = 0;
let maxEnergyStreak = 0;
let currentGravity = BASE_GRAVITY;
let currentBoosterGravity = Math.round(BASE_GRAVITY * BOOSTER_GRAVITY_RATIO);
let currentSpawnDelay = INITIAL_SPAWN_DELAY;
let maxLives = INITIAL_HEART_CAPACITY;
let lives = INITIAL_HEART_CAPACITY;
let nextUpgradeScore = UPGRADE_POINTS_REQUIRED;
let levelProgressScore = 0;
let playerLevel = 1;
let magnetLevel = 0;
let lifeBoosterLevel = 0;
let shieldBoosterLevel = 0;
let scoreBoosterLevel = 0;
let energyRefinerLevel = 0;
let state = 'menu';
let spawnEvent = null;
let gameScene = null;
let scoreMultiplier = 1;
let isDraggingShip = false;
let pausedMusicTime = 0;
let enemyTrailTimer = 0;
let energyRefinerLevelBonus = 0;
let hud = null;
let supabaseClient = null;
let pendingScoreSave = null;
let lastScoreSaved = false;
let currentGameMode = 'xy';
let soundEffectsEnabled = true;
let musicEnabled = true;

loadAudioSettings();

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
  window.addEventListener('resize', updateUiScale);
  return hud;
}

function updateUiScale() {
  const container = document.getElementById('game-container');
  if (!container) return;
  container.style.setProperty('--ui-scale', container.clientWidth / GAME_WIDTH);
}

function setHudVisible(scene, visible) {
  const currentHud = initHud();
  if (!currentHud.root) return;
  currentHud.root.classList.toggle('is-visible', visible);
  if (!visible) setPauseSettingsVisible(false);
  updateHud(scene);
}

function setPauseSettingsVisible(visible) {
  const currentHud = initHud();
  if (!currentHud.root) return;
  currentHud.root.classList.toggle('is-pause-settings-visible', Boolean(visible));
  if (currentHud.pauseSettingsButton) {
    currentHud.pauseSettingsButton.setAttribute('aria-hidden', visible ? 'false' : 'true');
  }
}

function updateHud(scene = gameScene) {
  const currentHud = initHud();
  if (!currentHud.root) return;

  currentHud.level.textContent = playerLevel;
  currentHud.score.textContent = score;
  updateStreakText();
  updateSpeedTexts(scene);
  updateUpgradeBar(scene);
  updateLivesText(scene);
  updateUpgradeStatusIcons(scene);
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

function getBossConfigForLevel(level) {
  const bossIndex = getBossIndexForLevel(level);
  if (bossIndex === -1) return null;

  const bossKinds = ['red', 'boss', 'asteroid', 'plasma', 'drones', 'redNeedleBoss'];
  const bossKind = isInfiniteGameMode()
    ? (bossIndex === 0 ? 'drones' : bossKinds[Math.floor(Math.random() * bossKinds.length)])
    : bossKinds[bossIndex % bossKinds.length];
  return createBossConfig(bossKind);
}

function createBossConfig(kind) {
  if (kind === 'red') {
    return {
      kind: 'red',
      name: 'Enjambre',
      duration: RED_WAVE_DURATION,
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
  return ['xy', 'xyInfinite'].includes(mode) ? mode : 'xy';
}

function isInfiniteGameMode() {
  return currentGameMode === 'xyInfinite';
}

function isXyGameMode() {
  return currentGameMode === 'xy' || currentGameMode === 'xyInfinite';
}

function isXyInfiniteGameMode() {
  return currentGameMode === 'xyInfinite';
}

bootGame();

function bootGame() {
  waitForGameFonts().finally(() => {
    game = new Phaser.Game(config);
  });
}

function waitForGameFonts() {
  if (!document.fonts || !document.fonts.load) {
    return Promise.resolve();
  }

  return Promise.all([
    document.fonts.load('700 30px Orbitron'),
    document.fonts.load('500 18px Rajdhani'),
    document.fonts.ready,
  ]);
}

function preload() {}

function create() {
  gameScene = this;
  this.physics.world.setBounds(0, 0, getGameWidth(this), getGameHeight(this));
  bindUiEventGuards();
  bindPausedShipResumeFallback(this);

  this.backgroundLayer = this.add.container(0, 0);
  createBackground(this);

  createEnergyBallTexture(this, 'goldBall', {
    outer: 0xff9f2a,
    mid: 0xffd76a,
    core: 0xffffd2,
    ring: 0xfff0a8,
  });
  createEnergyBallTexture(this, 'purpleBall', {
    outer: 0x6f38ff,
    mid: 0x9b5cff,
    core: 0xf0d7ff,
    ring: 0xd5a9ff,
  });
  const particleGraphics = this.make.graphics({ x: 0, y: 0, add: false });
  particleGraphics.fillStyle(0xffd76a, 1);
  particleGraphics.fillCircle(3, 3, 3);
  particleGraphics.generateTexture('goldTrailParticle', 6, 6);
  particleGraphics.destroy();

  // Textura del booster negativo
  const damageGraphics = this.make.graphics({ x: 0, y: 0, add: false });
  damageGraphics.fillStyle(0xff3b4f, 1);
  damageGraphics.fillPoints([
    { x: 18, y: 36 },
    { x: 36, y: 0 },
    { x: 0, y: 0 },
  ], true);
  damageGraphics.fillStyle(0xffffff, 0.55);
  damageGraphics.fillPoints([
    { x: 18, y: 27 },
    { x: 25, y: 8 },
    { x: 11, y: 8 },
  ], true);
  damageGraphics.generateTexture('damageBooster', 36, 36);
  damageGraphics.destroy();
  createEnemyShipTexture(this);
  createRedNeedleTextures(this);
  createSpikeDroneTextures(this);
  createBossShipTexture(this);
  createAsteroidTexture(this);
  createBigAsteroidTexture(this);

  // Textura del booster de vida
  const lifeGraphics = this.make.graphics({ x: 0, y: 0, add: false });
  lifeGraphics.fillStyle(0x4dff88, 1);
  lifeGraphics.fillPoints([
    { x: 18, y: 0 },
    { x: 36, y: 18 },
    { x: 18, y: 36 },
    { x: 0, y: 18 },
  ], true);
  lifeGraphics.fillStyle(0xffffff, 0.85);
  lifeGraphics.fillRect(15, 9, 6, 18);
  lifeGraphics.fillRect(9, 15, 18, 6);
  lifeGraphics.generateTexture('lifeBooster', 36, 36);
  lifeGraphics.destroy();

  // Textura del booster de puntuacion
  const scoreGraphics = this.make.graphics({ x: 0, y: 0, add: false });
  scoreGraphics.fillStyle(0x9b5cff, 1);
  scoreGraphics.fillPoints([
    { x: 18, y: 0 },
    { x: 36, y: 18 },
    { x: 18, y: 36 },
    { x: 0, y: 18 },
  ], true);
  scoreGraphics.fillStyle(0xffffff, 0.85);
  scoreGraphics.fillPoints([
    { x: 18, y: 7 },
    { x: 25, y: 18 },
    { x: 18, y: 29 },
    { x: 11, y: 18 },
  ], true);
  scoreGraphics.generateTexture('scoreBooster', 36, 36);
  scoreGraphics.destroy();

  createShipTexture(this, 'ship', {
    hull: 0xb8bec8,
    wing: 0x6f7784,
    cockpit: 0xf1f4f8,
    engine: 0xd6dbe3,
  });
  createShipTexture(this, 'purpleShip', {
    hull: 0xb8bec8,
    wing: 0x6f7784,
    wingAccent: 0x8f55ff,
    cockpit: 0xf1f4f8,
    engine: 0xd8a8ff,
  });
  createShipTexture(this, 'greenShip', {
    hull: 0xb8bec8,
    hullSideAccent: 0x4dff88,
    wing: 0x6f7784,
    cockpit: 0xf1f4f8,
    engine: 0xd6dbe3,
  });
  createShipTexture(this, 'greenPurpleShip', {
    hull: 0xb8bec8,
    hullSideAccent: 0x4dff88,
    wing: 0x6f7784,
    wingAccent: 0x8f55ff,
    cockpit: 0xf1f4f8,
    engine: 0xd8a8ff,
  });
  createShipTexture(this, 'blueShip', {
    hull: 0xb8bec8,
    hullAccent: 0x66bfff,
    wing: 0x6f7784,
    cockpit: 0xe7f7ff,
    engine: 0xd6dbe3,
  });
  createShipTexture(this, 'blueGreenShip', {
    hull: 0xb8bec8,
    hullAccent: 0x66bfff,
    hullSideAccent: 0x4dff88,
    wing: 0x6f7784,
    cockpit: 0xe7f7ff,
    engine: 0xd6dbe3,
  });
  createShipTexture(this, 'bluePurpleShip', {
    hull: 0xb8bec8,
    hullAccent: 0x66bfff,
    wing: 0x6f7784,
    wingAccent: 0x8f55ff,
    cockpit: 0xe7f7ff,
    engine: 0xd8a8ff,
  });
  createShipTexture(this, 'blueGreenPurpleShip', {
    hull: 0xb8bec8,
    hullAccent: 0x66bfff,
    hullSideAccent: 0x4dff88,
    wing: 0x6f7784,
    wingAccent: 0x8f55ff,
    cockpit: 0xe7f7ff,
    engine: 0xd8a8ff,
  });
  createXyControlTexture(this);
  createShipTexture(this, 'redShip', {
    hull: 0xff5366,
    wing: 0xd61f36,
    cockpit: 0xffedf0,
    engine: 0xffb347,
  });

  const shieldGraphics = this.make.graphics({ x: 0, y: 0, add: false });
  shieldGraphics.fillStyle(0x4da3ff, 1);
  shieldGraphics.fillPoints([
    { x: 18, y: 0 },
    { x: 36, y: 18 },
    { x: 18, y: 36 },
    { x: 0, y: 18 },
  ], true);
  shieldGraphics.fillStyle(0xffffff, 0.8);
  shieldGraphics.fillCircle(18, 18, 8);
  shieldGraphics.generateTexture('shieldBooster', 36, 36);
  shieldGraphics.destroy();

  initHud();
  updateHud();

  // CORRECCION: usar sprite con fisica para la nave, no rectangle
  this.ship = this.physics.add.image(getGameWidth(this) / 2, getShipY(this), 'ship').setOrigin(0.5, 0.5);
  this.ship.setDepth(SHIP_DEPTH);
  this.ship.body.setImmovable(true);
  this.ship.body.setAllowGravity(false);
  refreshShipSize(this);

  this.shipTrail = this.add.graphics().setDepth(SHIP_DEPTH - 1);
  this.shipTrailPoints = [];

  this.xyControl = this.add.image(0, 0, 'xyControl')
    .setDepth(SHIP_DEPTH - 1)
    .setVisible(false)
    .setAlpha(0.78);
  this.xyControlPulse = this.add.circle(0, 0, XY_CONTROL_RADIUS + 10, 0x4da3ff, 0.12)
    .setDepth(SHIP_DEPTH - 2)
    .setVisible(false);
  this.xyBottomFriction = this.add.graphics()
    .setDepth(SHIP_DEPTH + 3)
    .setVisible(false);

  this.energyRefinerModule = this.add.graphics()
    .setDepth(SHIP_DEPTH + 2)
    .setVisible(false);
  updateShipEquipmentModules(this);

  this.shieldBubble = this.add.graphics()
    .setDepth(SHIP_DEPTH + 1)
    .setVisible(false);
  updateShieldBubble(this);

  setUiDepth(this);

  // Grupo de bolas
  this.balls = this.physics.add.group();

  // Overlap entre bolas y nave
  this.physics.add.overlap(
    this.balls,
    this.ship,
    (objectA, objectB) => catchBall(getCaughtObject(this, objectA, objectB), this),
    (objectA, objectB) => isPreciseShipOverlap(this, objectA, objectB),
    this
  );

  this.pauseOverlay = createPauseOverlay(this);
  this.upgradeOverlay = createUpgradeOverlay(this);
  this.optionsOverlay = createOptionsOverlay(this);

  // Menus
  this.menuContainer = createMenu(this);
  this.gameOverContainer = createGameOver(this);
  this.rankingContainer = createRanking(this);
  updateAudioOptionButtons(this);
  setUiDepth(this);
  layoutScene(this);

  showMenu.call(this);

  this.scale.on('resize', () => {
    updateUiScale();
    layoutScene(this);
  });

  // Movimiento del ratón
  this.input.on('pointerdown', (pointer) => {
    if (state === 'paused') {
      if (this.optionsOverlay && this.optionsOverlay.element && this.optionsOverlay.element.classList.contains('is-visible')) return;
      handlePausedResumePointer(this, pointer.x, pointer.y);
      return;
    }
    if (state !== 'playing') return;
    if (!canStartShipDrag(this, pointer.x, pointer.y, false)) return;
    startDraggingShipAt(this, pointer.x, pointer.y);
  });

  this.input.on('pointermove', (pointer) => {
    if (state !== 'playing' && state !== 'paused') return;
    if (state === 'paused' && (
      isFrozenPauseMenuOpen(this) ||
      (this.optionsOverlay && this.optionsOverlay.element && this.optionsOverlay.element.classList.contains('is-visible'))
    )) {
      this.input.setDefaultCursor('default');
      return;
    }
    if (!isDraggingShip) {
      this.input.setDefaultCursor(canStartShipDrag(this, pointer.x, pointer.y, state === 'paused') ? 'grab' : 'default');
      return;
    }
    if (state !== 'playing') return;

    const position = getDraggedShipPosition(this, pointer.x, pointer.y);
    moveShipTo(this, position.x, position.y);
  });

  this.input.on('pointerup', () => {
    const wasDragging = isDraggingShip;
    isDraggingShip = false;
    setXyControlActive(this, false);
    hideXyBottomFriction(this);
    if (state === 'playing') {
      this.input.setDefaultCursor('default');
      if (wasDragging) {
        pauseGame.call(this);
      }
    }
  });

  this.input.on('pointerout', () => {
    const wasDragging = isDraggingShip;
    isDraggingShip = false;
    setXyControlActive(this, false);
    hideXyBottomFriction(this);
    if (state === 'playing') {
      this.input.setDefaultCursor('default');
      if (wasDragging) {
        pauseGame.call(this);
      }
    }
  });
}

function createEnergyBallTexture(scene, ballKey, colors) {
  const ballGraphics = scene.make.graphics({ x: 0, y: 0, add: false });
  ballGraphics.fillStyle(colors.outer, 0.05);
  ballGraphics.fillCircle(22, 22, 21);
  ballGraphics.fillStyle(colors.mid, 0.09);
  ballGraphics.fillCircle(22, 22, 17);
  ballGraphics.fillStyle(colors.core, 0.13);
  ballGraphics.fillCircle(22, 22, 12);
  ballGraphics.lineStyle(1, colors.ring, 0.2);
  ballGraphics.strokeCircle(22, 22, 16);
  ballGraphics.fillStyle(colors.outer, 0.46);
  ballGraphics.fillCircle(22, 22, 14);
  ballGraphics.fillStyle(colors.mid, 0.86);
  ballGraphics.fillCircle(22, 22, 10);
  ballGraphics.fillStyle(colors.core, 0.96);
  ballGraphics.fillCircle(22, 22, 5);
  ballGraphics.lineStyle(2, colors.ring, 0.65);
  ballGraphics.strokeCircle(22, 22, 12);
  ballGraphics.lineStyle(1, 0xffffff, 0.42);
  ballGraphics.strokeCircle(22, 22, 7);
  ballGraphics.generateTexture(ballKey, 44, 44);
  ballGraphics.destroy();
}

function createShipTexture(scene, key, colors, textureWidth = SHIP_WIDTH) {
  const graphics = scene.make.graphics({ x: 0, y: 0, add: false });
  const centerX = textureWidth / 2;
  const centerY = SHIP_HEIGHT / 2;
  const left = 2;
  const right = textureWidth - 2;
  const hullTop = 3;
  const hullBottom = SHIP_HEIGHT - 7;
  const darkPlate = 0x252a31;
  const shadowPlate = 0x414852;
  const midPlate = 0x8d96a2;
  const lightPlate = 0xd6dbe3;
  const palePlate = 0xf1f4f8;
  const panelLine = 0x1e232a;
  const glassDark = 0x263341;
  const glassLight = colors.cockpit || 0xe7f7ff;
  const accent = colors.hullAccent || colors.wingAccent || colors.hullSideAccent || 0x9aa3af;

  graphics.fillStyle(0x10151c, 0.7);
  graphics.fillPoints([
    { x: left + 5, y: 30 },
    { x: 41, y: 4 },
    { x: centerX - 18, y: 14 },
    { x: centerX - 20, y: 34 },
    { x: 44, y: SHIP_HEIGHT - 4 },
  ], true);
  graphics.fillPoints([
    { x: right - 5, y: 30 },
    { x: textureWidth - 41, y: 4 },
    { x: centerX + 18, y: 14 },
    { x: centerX + 20, y: 34 },
    { x: textureWidth - 44, y: SHIP_HEIGHT - 4 },
  ], true);

  graphics.fillStyle(colors.wing, 1);
  graphics.fillPoints([
    { x: left, y: 28 },
    { x: 42, y: 7 },
    { x: centerX - 25, y: 18 },
    { x: centerX - 33, y: 34 },
    { x: 25, y: 40 },
  ], true);
  graphics.fillPoints([
    { x: right, y: 28 },
    { x: textureWidth - 42, y: 7 },
    { x: centerX + 25, y: 18 },
    { x: centerX + 33, y: 34 },
    { x: textureWidth - 25, y: 40 },
  ], true);

  graphics.fillStyle(lightPlate, 0.92);
  graphics.fillPoints([
    { x: left + 6, y: 25 },
    { x: 43, y: 10 },
    { x: centerX - 35, y: 18 },
    { x: 25, y: 34 },
  ], true);
  graphics.fillPoints([
    { x: right - 6, y: 25 },
    { x: textureWidth - 43, y: 10 },
    { x: centerX + 35, y: 18 },
    { x: textureWidth - 25, y: 34 },
  ], true);

  graphics.fillStyle(darkPlate, 1);
  graphics.fillTriangle(23, 27, 52, 16, 45, 30);
  graphics.fillTriangle(textureWidth - 23, 27, textureWidth - 52, 16, textureWidth - 45, 30);
  graphics.fillStyle(palePlate, 0.92);
  for (let i = 0; i < 5; i += 1) {
    graphics.fillRect(28 + i * 4, 25 + i * 0.4, 13, 2);
    graphics.fillRect(textureWidth - 41 - i * 4, 25 + i * 0.4, 13, 2);
  }

  if (colors.wingAccent) {
    graphics.fillStyle(colors.wingAccent, 1);
    graphics.fillPoints([
      { x: 18, y: 31 },
      { x: 52, y: 19 },
      { x: centerX - 39, y: 25 },
      { x: 33, y: 35 },
    ], true);
    graphics.fillPoints([
      { x: textureWidth - 18, y: 31 },
      { x: textureWidth - 52, y: 19 },
      { x: centerX + 39, y: 25 },
      { x: textureWidth - 33, y: 35 },
    ], true);
  }

  graphics.fillStyle(colors.hull, 1);
  graphics.fillPoints([
    { x: centerX, y: hullTop },
    { x: centerX + 44, y: 14 },
    { x: centerX + 38, y: 35 },
    { x: centerX + 17, y: hullBottom },
    { x: centerX - 17, y: hullBottom },
    { x: centerX - 38, y: 35 },
    { x: centerX - 44, y: 14 },
  ], true);

  graphics.fillStyle(lightPlate, 1);
  graphics.fillPoints([
    { x: centerX, y: hullTop + 1 },
    { x: centerX + 26, y: 12 },
    { x: centerX + 12, y: 18 },
    { x: centerX, y: 12 },
    { x: centerX - 12, y: 18 },
    { x: centerX - 26, y: 12 },
  ], true);

  graphics.fillStyle(midPlate, 1);
  graphics.fillPoints([
    { x: centerX - 42, y: 15 },
    { x: centerX - 16, y: 20 },
    { x: centerX - 19, y: 35 },
    { x: centerX - 38, y: 32 },
  ], true);
  graphics.fillPoints([
    { x: centerX + 42, y: 15 },
    { x: centerX + 16, y: 20 },
    { x: centerX + 19, y: 35 },
    { x: centerX + 38, y: 32 },
  ], true);

  if (colors.hullAccent) {
    graphics.fillStyle(colors.hullAccent, 1);
    graphics.fillPoints([
      { x: centerX, y: 7 },
      { x: centerX + 16, y: 16 },
      { x: centerX + 11, y: 34 },
      { x: centerX, y: 38 },
      { x: centerX - 11, y: 34 },
      { x: centerX - 16, y: 16 },
    ], true);
  }

  if (colors.hullSideAccent) {
    graphics.fillStyle(colors.hullSideAccent, 1);
    graphics.fillRoundedRect(centerX - 40, 18, 14, 5, 2);
    graphics.fillRoundedRect(centerX + 26, 18, 14, 5, 2);
    graphics.fillStyle(colors.hullSideAccent, 1);
    graphics.fillRoundedRect(centerX - 34, 29, 11, 4, 1);
    graphics.fillRoundedRect(centerX + 23, 29, 11, 4, 1);
  }

  graphics.lineStyle(1, panelLine, 0.42);
  graphics.strokePoints([
    { x: centerX, y: hullTop },
    { x: centerX + 44, y: 14 },
    { x: centerX + 38, y: 35 },
    { x: centerX + 17, y: hullBottom },
    { x: centerX - 17, y: hullBottom },
    { x: centerX - 38, y: 35 },
    { x: centerX - 44, y: 14 },
  ], true);
  graphics.strokeLineShape(new Phaser.Geom.Line(centerX, hullTop + 2, centerX, hullBottom - 1));
  graphics.strokeLineShape(new Phaser.Geom.Line(centerX - 40, 15, centerX - 18, 35));
  graphics.strokeLineShape(new Phaser.Geom.Line(centerX + 40, 15, centerX + 18, 35));

  graphics.fillStyle(0x161a1f, 1);
  graphics.fillEllipse(centerX, centerY - 1, 30, 30);
  graphics.fillStyle(shadowPlate, 1);
  graphics.fillEllipse(centerX, centerY - 1, 24, 24);
  graphics.fillStyle(glassDark, 1);
  graphics.fillEllipse(centerX, centerY - 1, 17, 17);
  graphics.fillStyle(glassLight, 0.9);
  graphics.fillEllipse(centerX - 4, centerY - 5, 8, 7);
  graphics.fillStyle(0x071016, 0.78);
  graphics.fillEllipse(centerX + 2, centerY + 1, 10, 12);
  graphics.lineStyle(2, palePlate, 0.46);
  graphics.strokeCircle(centerX, centerY - 1, 14);
  graphics.lineStyle(2, darkPlate, 0.8);
  graphics.strokeCircle(centerX, centerY - 1, 20);

  graphics.fillStyle(0x1a1f25, 1);
  graphics.fillRoundedRect(centerX - 14, 31, 28, 9, 2);
  graphics.fillStyle(0x090c10, 0.9);
  for (let i = 0; i < 6; i += 1) {
    graphics.fillRect(centerX - 11 + i * 4, 33, 2, 5);
  }
  graphics.lineStyle(1, accent, 0.45);
  graphics.strokeRoundedRect(centerX - 14, 31, 28, 9, 2);

  graphics.fillStyle(0x303743, 1);
  graphics.fillRoundedRect(centerX - 35, 35, 18, 7, 2);
  graphics.fillRoundedRect(centerX + 17, 35, 18, 7, 2);
  graphics.fillStyle(colors.engine, 1);
  graphics.fillTriangle(centerX - 26, 38, centerX - 16, SHIP_HEIGHT, centerX - 36, SHIP_HEIGHT);
  graphics.fillTriangle(centerX + 26, 38, centerX + 16, SHIP_HEIGHT, centerX + 36, SHIP_HEIGHT);

  graphics.lineStyle(1, 0xffffff, 0.35);
  graphics.strokePoints([
    { x: left, y: 28 },
    { x: 42, y: 7 },
    { x: centerX - 25, y: 18 },
    { x: centerX - 33, y: 34 },
    { x: 25, y: 40 },
  ], true);
  graphics.strokePoints([
    { x: right, y: 28 },
    { x: textureWidth - 42, y: 7 },
    { x: centerX + 25, y: 18 },
    { x: centerX + 33, y: 34 },
    { x: textureWidth - 25, y: 40 },
  ], true);

  graphics.generateTexture(key, textureWidth, SHIP_HEIGHT);
  graphics.destroy();
}

function createXyControlTexture(scene) {
  const size = XY_CONTROL_RADIUS * 2 + 18;
  const center = size / 2;
  const graphics = scene.make.graphics({ x: 0, y: 0, add: false });

  graphics.fillStyle(0x4da3ff, 0.14);
  graphics.fillCircle(center, center, XY_CONTROL_RADIUS + 8);
  graphics.fillStyle(0x115dca, 0.86);
  graphics.fillCircle(center, center, XY_CONTROL_RADIUS);
  graphics.fillStyle(0x63ddff, 0.92);
  graphics.fillCircle(center - 3, center - 4, XY_CONTROL_RADIUS - 9);
  graphics.fillStyle(0xe7f7ff, 0.2);
  graphics.fillCircle(center - 10, center - 14, 9);
  graphics.lineStyle(3, 0xffffff, 0.62);
  graphics.strokeCircle(center, center, XY_CONTROL_RADIUS - 4);
  graphics.lineStyle(3, 0x072f77, 0.52);
  graphics.beginPath();
  graphics.arc(center, center + 1, 16, Phaser.Math.DegToRad(218), Phaser.Math.DegToRad(495), false);
  graphics.strokePath();
  graphics.beginPath();
  graphics.arc(center, center + 1, 10, Phaser.Math.DegToRad(230), Phaser.Math.DegToRad(482), false);
  graphics.strokePath();
  graphics.beginPath();
  graphics.arc(center, center + 1, 22, Phaser.Math.DegToRad(206), Phaser.Math.DegToRad(506), false);
  graphics.strokePath();
  graphics.lineStyle(2, 0x031d53, 0.46);
  graphics.beginPath();
  graphics.arc(center, center + 1, 5, Phaser.Math.DegToRad(250), Phaser.Math.DegToRad(450), false);
  graphics.strokePath();

  graphics.generateTexture('xyControl', size, size);
  graphics.destroy();
}

function createEnemyShipTexture(scene) {
  const graphics = scene.make.graphics({ x: 0, y: 0, add: false });

  graphics.fillStyle(0x6b0f1b, 1);
  graphics.fillPoints([
    { x: 24, y: 46 },
    { x: 5, y: 36 },
    { x: 12, y: 18 },
    { x: 3, y: 9 },
    { x: 19, y: 13 },
    { x: 24, y: 2 },
    { x: 29, y: 13 },
    { x: 45, y: 9 },
    { x: 36, y: 18 },
    { x: 43, y: 36 },
  ], true);

  graphics.fillStyle(0xf23b4f, 1);
  graphics.fillPoints([
    { x: 24, y: 6 },
    { x: 34, y: 27 },
    { x: 30, y: 40 },
    { x: 24, y: 44 },
    { x: 18, y: 40 },
    { x: 14, y: 27 },
  ], true);

  graphics.fillStyle(0xff8090, 0.78);
  graphics.fillTriangle(12, 19, 4, 29, 16, 28);
  graphics.fillTriangle(36, 19, 44, 29, 32, 28);

  graphics.fillStyle(0xffedf0, 0.88);
  graphics.fillEllipse(24, 24, 12, 15);
  graphics.fillStyle(0x250711, 0.42);
  graphics.fillEllipse(24, 25, 6, 9);

  graphics.fillStyle(0xffc15a, 0.95);
  graphics.fillTriangle(18, 39, 22, 47, 13, 44);
  graphics.fillTriangle(30, 39, 26, 47, 35, 44);
  graphics.lineStyle(2, 0xffc0ca, 0.42);
  graphics.strokePoints([
    { x: 24, y: 6 },
    { x: 34, y: 27 },
    { x: 30, y: 40 },
    { x: 24, y: 44 },
    { x: 18, y: 40 },
    { x: 14, y: 27 },
  ], true);

  graphics.generateTexture('enemyShipSmall', 48, 48);
  graphics.destroy();
}

function createRedNeedleTextures(scene) {
  const shipGraphics = scene.make.graphics({ x: 0, y: 0, add: false });
  const centerY = RED_NEEDLE_HEIGHT / 2;

  shipGraphics.fillStyle(0x21030a, 1);
  shipGraphics.fillPoints([
    { x: 2, y: centerY },
    { x: 14, y: 2 },
    { x: 28, y: 7 },
    { x: 38, y: 0 },
    { x: 64, y: 6 },
    { x: 75, y: centerY },
    { x: 64, y: 22 },
    { x: 38, y: 28 },
    { x: 28, y: 21 },
    { x: 14, y: 26 },
  ], true);
  shipGraphics.fillStyle(0x7d0918, 1);
  shipGraphics.fillTriangle(0, centerY, 18, 7, 18, 21);
  shipGraphics.fillStyle(0xf01e36, 1);
  shipGraphics.fillPoints([
    { x: 9, y: centerY },
    { x: 28, y: 9 },
    { x: 55, y: 8 },
    { x: 69, y: centerY },
    { x: 55, y: 20 },
    { x: 28, y: 19 },
  ], true);
  shipGraphics.fillStyle(0x120107, 0.9);
  shipGraphics.fillTriangle(23, 8, 37, centerY, 23, 20);
  shipGraphics.fillTriangle(58, 7, 69, centerY, 58, 21);
  shipGraphics.fillStyle(0xffccd4, 0.95);
  shipGraphics.fillEllipse(44, centerY, 18, 8);
  shipGraphics.fillStyle(0x0b0205, 0.62);
  shipGraphics.fillEllipse(47, centerY, 10, 4);
  shipGraphics.fillStyle(0xff263c, 0.9);
  shipGraphics.fillRoundedRect(30, 12, 18, 4, 1);
  shipGraphics.fillStyle(0xff6f31, 0.95);
  shipGraphics.fillTriangle(68, 8, 76, centerY, 68, 20);
  shipGraphics.lineStyle(2, 0xff8593, 0.5);
  shipGraphics.strokePoints([
    { x: 2, y: centerY },
    { x: 14, y: 2 },
    { x: 28, y: 7 },
    { x: 38, y: 0 },
    { x: 64, y: 6 },
    { x: 75, y: centerY },
    { x: 64, y: 22 },
    { x: 38, y: 28 },
    { x: 28, y: 21 },
    { x: 14, y: 26 },
  ], true);
  shipGraphics.generateTexture('redNeedleShip', RED_NEEDLE_WIDTH, RED_NEEDLE_HEIGHT);
  shipGraphics.destroy();

  const laserGraphics = scene.make.graphics({ x: 0, y: 0, add: false });
  laserGraphics.fillStyle(0xff263c, 0.28);
  laserGraphics.fillRoundedRect(0, 0, RED_NEEDLE_LASER_WIDTH, RED_NEEDLE_LASER_HEIGHT, 4);
  laserGraphics.fillStyle(0xff263c, 0.82);
  laserGraphics.fillRoundedRect(2, 3, RED_NEEDLE_LASER_WIDTH - 4, RED_NEEDLE_LASER_HEIGHT - 6, 3);
  laserGraphics.fillStyle(0xffedf0, 0.9);
  laserGraphics.fillRoundedRect(4, 6, RED_NEEDLE_LASER_WIDTH - 8, RED_NEEDLE_LASER_HEIGHT - 12, 2);
  laserGraphics.generateTexture('redNeedleLaser', RED_NEEDLE_LASER_WIDTH, RED_NEEDLE_LASER_HEIGHT);
  laserGraphics.destroy();
}

function createSpikeDroneTextures(scene) {
  createSpikeDroneTexture(scene, 'spikeDrone', 'folded');
  createSpikeDroneTexture(scene, 'spikeDroneWarningGreen', 'warningGreen');
  createSpikeDroneTexture(scene, 'spikeDroneWarningRed', 'warningRed');
  createSpikeDroneTexture(scene, 'spikeDroneExpanded', 'expanded');
  createSpikeDroneTexture(scene, 'spikeDroneDisabled', 'disabled');
}

function createSpikeDroneTexture(scene, key, mode) {
  const graphics = scene.make.graphics({ x: 0, y: 0, add: false });
  const center = SPIKE_DRONE_TEXTURE_SIZE / 2;
  const expanded = mode === 'expanded';
  const warningGreen = mode === 'warningGreen';
  const warningRed = mode === 'warningRed';
  const disabled = mode === 'disabled';
  const warning = warningGreen || warningRed;
  const spikeInnerRadius = 24;
  const spikeOuterRadius = 58;

  if (expanded) {
    for (let i = 0; i < 8; i += 1) {
      const angle = -Math.PI / 2 + i * (Math.PI / 4);
      const sideA = angle - 0.2;
      const sideB = angle + 0.2;
      graphics.fillStyle(0x57121b, 1);
      graphics.fillPoints([
        {
          x: center + Math.cos(sideA) * spikeInnerRadius,
          y: center + Math.sin(sideA) * spikeInnerRadius,
        },
        {
          x: center + Math.cos(angle) * spikeOuterRadius,
          y: center + Math.sin(angle) * spikeOuterRadius,
        },
        {
          x: center + Math.cos(sideB) * spikeInnerRadius,
          y: center + Math.sin(sideB) * spikeInnerRadius,
        },
      ], true);
      graphics.fillStyle(0xff3045, 0.95);
      graphics.fillPoints([
        {
          x: center + Math.cos(angle - 0.13) * (spikeInnerRadius + 3),
          y: center + Math.sin(angle - 0.13) * (spikeInnerRadius + 3),
        },
        {
          x: center + Math.cos(angle) * (spikeOuterRadius - 3),
          y: center + Math.sin(angle) * (spikeOuterRadius - 3),
        },
        {
          x: center + Math.cos(angle + 0.13) * (spikeInnerRadius + 3),
          y: center + Math.sin(angle + 0.13) * (spikeInnerRadius + 3),
        },
      ], true);
    }
  }

  graphics.fillStyle(disabled ? 0x2d323a : 0x141b2a, 1);
  graphics.fillCircle(center, center, 20);
  graphics.fillStyle(disabled ? 0x767d88 : 0x596272, 1);
  graphics.fillCircle(center, center, 17);
  graphics.fillStyle(disabled ? 0x3f4650 : 0x252d3d, 1);
  graphics.fillCircle(center, center, 13);
  graphics.lineStyle(2, disabled ? 0xc3c8d0 : 0xaeb8c9, disabled ? 0.42 : 0.62);
  graphics.strokeCircle(center, center, 18);

  graphics.lineStyle(1, disabled ? 0x1f242b : 0x111827, disabled ? 0.75 : 0.55);
  graphics.beginPath();
  graphics.moveTo(center - 14, center);
  graphics.lineTo(center + 14, center);
  graphics.moveTo(center, center - 14);
  graphics.lineTo(center, center + 14);
  graphics.strokePath();

  const safeLight = !warning && !expanded && !disabled;
  const activeLightColor = warningGreen ? 0xff8f2a : safeLight ? 0x4dff88 : 0xff1f32;
  const lightColor = disabled ? 0x9aa3af : warning || expanded || safeLight ? activeLightColor : 0x263142;
  const lightAlpha = disabled ? 0.7 : warning || expanded || safeLight ? 1 : 0.86;
  const lightGlowRadius = safeLight || expanded ? 14 : warning ? 10 : 10;
  const lightCoreRadius = safeLight || expanded ? 7 : warning ? 5 : 5;
  if (warningGreen) {
    graphics.fillStyle(0x263142, 0.82);
    graphics.fillCircle(center, center, 7);
  }
  if (warning || expanded || safeLight) {
    graphics.fillStyle(activeLightColor, warningGreen || safeLight ? 0.16 : 0.18);
    graphics.fillCircle(center, center, lightGlowRadius);
  }
  graphics.fillStyle(lightColor, lightAlpha);
  graphics.fillCircle(center, center, lightCoreRadius);
  graphics.fillStyle(0xffffff, disabled ? 0.28 : warning || expanded || safeLight ? 0.78 : 0.18);
  graphics.fillCircle(center - 2, center - 2, warning ? 1.5 : 2);

  if (expanded) {
    graphics.lineStyle(2, 0xef4455, 0.5);
    graphics.strokeCircle(center, center, 25);
  }

  graphics.generateTexture(key, SPIKE_DRONE_TEXTURE_SIZE, SPIKE_DRONE_TEXTURE_SIZE);
  graphics.destroy();
}

function createBossShipTexture(scene) {
  const graphics = scene.make.graphics({ x: 0, y: 0, add: false });
  const centerX = BOSS_WIDTH / 2;

  graphics.fillStyle(0x220814, 1);
  graphics.fillPoints([
    { x: centerX, y: 8 },
    { x: BOSS_WIDTH - 16, y: 58 },
    { x: BOSS_WIDTH - 118, y: 112 },
    { x: BOSS_WIDTH - 72, y: 176 },
    { x: centerX + 74, y: 154 },
    { x: centerX + 42, y: BOSS_HEIGHT - 10 },
    { x: centerX, y: 184 },
    { x: centerX - 42, y: BOSS_HEIGHT - 10 },
    { x: centerX - 74, y: 154 },
    { x: 72, y: 176 },
    { x: 118, y: 112 },
    { x: 16, y: 58 },
  ], true);

  graphics.fillStyle(0x7a1426, 1);
  graphics.fillPoints([
    { x: centerX, y: 30 },
    { x: centerX + 174, y: 72 },
    { x: centerX + 108, y: 142 },
    { x: centerX + 32, y: 128 },
    { x: centerX, y: 156 },
    { x: centerX - 32, y: 128 },
    { x: centerX - 108, y: 142 },
    { x: centerX - 174, y: 72 },
  ], true);

  graphics.fillStyle(0xd82842, 0.92);
  graphics.fillPoints([
    { x: centerX, y: 54 },
    { x: centerX + 62, y: 100 },
    { x: centerX + 30, y: 154 },
    { x: centerX, y: 170 },
    { x: centerX - 30, y: 154 },
    { x: centerX - 62, y: 100 },
  ], true);

  graphics.fillStyle(0xff8090, 0.68);
  graphics.fillEllipse(centerX, 108, 78, 58);
  graphics.fillStyle(0x090d1b, 0.55);
  graphics.fillEllipse(centerX, 112, 43, 32);
  graphics.fillStyle(0xffd0d7, 0.92);
  graphics.fillCircle(centerX, 108, 12);

  graphics.fillStyle(0xff4058, 0.74);
  graphics.fillCircle(centerX - 155, 96, 16);
  graphics.fillCircle(centerX + 155, 96, 16);
  graphics.fillStyle(0xffa0aa, 0.8);
  graphics.fillRect(centerX - 185, 129, 74, 10);
  graphics.fillRect(centerX + 111, 129, 74, 10);

  graphics.fillStyle(0x0b1024, 0.86);
  graphics.fillRect(centerX - 18, 150, 36, 50);
  graphics.fillStyle(0xff263c, 0.96);
  graphics.fillTriangle(centerX - 34, 178, centerX, BOSS_HEIGHT - 5, centerX + 34, 178);

  graphics.fillStyle(0xffb347, 0.9);
  graphics.fillTriangle(centerX - 96, 165, centerX - 70, BOSS_HEIGHT - 8, centerX - 118, 185);
  graphics.fillTriangle(centerX + 96, 165, centerX + 70, BOSS_HEIGHT - 8, centerX + 118, 185);

  graphics.lineStyle(3, 0xffa0aa, 0.42);
  graphics.strokePoints([
    { x: centerX, y: 8 },
    { x: BOSS_WIDTH - 16, y: 58 },
    { x: BOSS_WIDTH - 118, y: 112 },
    { x: BOSS_WIDTH - 72, y: 176 },
    { x: centerX + 74, y: 154 },
    { x: centerX + 42, y: BOSS_HEIGHT - 10 },
    { x: centerX, y: 184 },
    { x: centerX - 42, y: BOSS_HEIGHT - 10 },
    { x: centerX - 74, y: 154 },
    { x: 72, y: 176 },
    { x: 118, y: 112 },
    { x: 16, y: 58 },
  ], true);

  graphics.generateTexture('bossShip', BOSS_WIDTH, BOSS_HEIGHT);
  graphics.destroy();
}

function createAsteroidTexture(scene) {
  const graphics = scene.make.graphics({ x: 0, y: 0, add: false });

  graphics.fillStyle(0x5b6170, 1);
  graphics.fillPoints([
    { x: 24, y: 2 },
    { x: 38, y: 7 },
    { x: 46, y: 21 },
    { x: 42, y: 36 },
    { x: 29, y: 46 },
    { x: 13, y: 43 },
    { x: 3, y: 30 },
    { x: 7, y: 13 },
  ], true);

  graphics.fillStyle(0x7d8494, 0.9);
  graphics.fillPoints([
    { x: 24, y: 6 },
    { x: 35, y: 11 },
    { x: 40, y: 22 },
    { x: 32, y: 29 },
    { x: 18, y: 27 },
    { x: 10, y: 17 },
  ], true);

  graphics.fillStyle(0x2f3441, 0.72);
  graphics.fillCircle(15, 18, 5);
  graphics.fillCircle(31, 31, 6);
  graphics.fillCircle(30, 14, 3);
  graphics.fillStyle(0xffffff, 0.2);
  graphics.fillCircle(19, 13, 2);
  graphics.fillCircle(24, 35, 2);
  graphics.lineStyle(2, 0xd7deec, 0.35);
  graphics.strokePoints([
    { x: 24, y: 2 },
    { x: 38, y: 7 },
    { x: 46, y: 21 },
    { x: 42, y: 36 },
    { x: 29, y: 46 },
    { x: 13, y: 43 },
    { x: 3, y: 30 },
    { x: 7, y: 13 },
  ], true);

  graphics.generateTexture('asteroid', 48, 48);
  graphics.destroy();
}

function createBigAsteroidTexture(scene) {
  const graphics = scene.make.graphics({ x: 0, y: 0, add: false });

  const outline = [
    { x: 48, y: 3 },
    { x: 72, y: 9 },
    { x: 91, y: 32 },
    { x: 86, y: 62 },
    { x: 65, y: 88 },
    { x: 35, y: 93 },
    { x: 10, y: 74 },
    { x: 4, y: 43 },
    { x: 17, y: 16 },
  ];
  const inner = [
    { x: 48, y: 10 },
    { x: 68, y: 17 },
    { x: 80, y: 36 },
    { x: 70, y: 58 },
    { x: 50, y: 72 },
    { x: 28, y: 67 },
    { x: 15, y: 46 },
    { x: 24, y: 22 },
  ];

  graphics.fillStyle(0x4b5060, 1);
  graphics.fillPoints(outline, true);
  graphics.fillStyle(0x747b8c, 0.92);
  graphics.fillPoints(inner, true);
  graphics.fillStyle(0x9aa2b4, 0.45);
  graphics.fillPoints([
    { x: 45, y: 15 },
    { x: 62, y: 21 },
    { x: 56, y: 34 },
    { x: 37, y: 30 },
  ], true);

  graphics.fillStyle(0x272c38, 0.76);
  graphics.fillCircle(28, 38, 9);
  graphics.fillCircle(61, 54, 12);
  graphics.fillCircle(55, 23, 5);
  graphics.fillCircle(34, 73, 7);
  graphics.fillCircle(76, 39, 6);
  graphics.fillStyle(0xffffff, 0.18);
  graphics.fillCircle(36, 24, 3);
  graphics.fillCircle(49, 67, 3);
  graphics.fillCircle(70, 24, 2);
  graphics.lineStyle(3, 0xd7deec, 0.34);
  graphics.strokePoints(outline, true);
  graphics.lineStyle(1, 0xffffff, 0.2);
  graphics.strokeCircle(28, 38, 9);
  graphics.strokeCircle(61, 54, 12);

  graphics.generateTexture('bigAsteroid', 96, 96);
  graphics.destroy();
}

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
  if (state !== 'playing') return;

  updateSpaceBackground(this, delta, time);
  updateShipPropulsion(this, delta);
  updateShipTilt(this);
  updateShipLifeIndicator(this);
  updateEnemyPropulsion(this, delta);
  updateRedNeedles(this);
  updateRedEnemySway(this, time);
  updateSpikeDrones(this);
  updateScoreBooster(this);
  updateShieldBooster(this);
  updateRedWave(this);
  updateDroneWave(this);
  updateAsteroidWave(this);
  updatePlasmaWave(this);
  updatePlasmaBars(this, delta);
  updateBossWave(this);
  updateMagnetPull(this);
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
  updateShipEquipmentModules(scene);
  updateShieldBubble(scene);
  updateShipLifeIndicator(scene);
  if (usesXyControlHandle(scene) && scene.xyControl && scene.xyControl.visible && !isDraggingShip) {
    updateXyControlFromShip(scene);
  }
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
  const width = getShipWidth(scene);
  scene.ship.setScale(1, 1);
  if (isShieldActive(scene)) {
    scene.ship.body.setSize(SHIELD_BUBBLE_DIAMETER, SHIELD_BUBBLE_DIAMETER, true);
    return;
  }

  scene.ship.body.setSize(width, SHIP_HEIGHT, true);
}

function setShipTextureForCurrentState(scene) {
  if (!scene.ship) return;

  const hasLifeBooster = lifeBoosterLevel > 0;
  const hasShieldBooster = shieldBoosterLevel > 0;
  const hasScoreBooster = scoreBoosterLevel > 0;

  if (hasShieldBooster && hasScoreBooster) {
    scene.ship.setTexture(hasLifeBooster ? 'blueGreenPurpleShip' : 'bluePurpleShip');
  } else if (hasScoreBooster) {
    scene.ship.setTexture(hasLifeBooster ? 'greenPurpleShip' : 'purpleShip');
  } else if (hasShieldBooster) {
    scene.ship.setTexture(hasLifeBooster ? 'blueGreenShip' : 'blueShip');
  } else {
    scene.ship.setTexture(hasLifeBooster ? 'greenShip' : 'ship');
  }
}

function updateShipEquipmentModules(scene) {
  updateEnergyRefinerModule(scene);
}

function updateEnergyRefinerModule(scene) {
  if (!scene.energyRefinerModule || !scene.ship) return;

  scene.energyRefinerModule.clear();
  if (energyRefinerLevel <= 0) {
    scene.energyRefinerModule.setVisible(false);
    return;
  }

  const x = scene.ship.x;
  const y = scene.ship.y;
  scene.energyRefinerModule.setVisible(true);
  scene.energyRefinerModule.fillStyle(0xffd84d, 0.95);
  scene.energyRefinerModule.fillRoundedRect(x - 18, y - 4, 36, 8, 4);
  scene.energyRefinerModule.fillStyle(0xffffff, 0.92);
  scene.energyRefinerModule.fillCircle(x, y, 3 + energyRefinerLevel);
  scene.energyRefinerModule.lineStyle(2, 0xfff0a8, 0.75);
  scene.energyRefinerModule.strokeCircle(x, y, 6 + energyRefinerLevel * 1.5);
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
  scene.shieldBubble.fillStyle(0x4da3ff, 0.14);
  scene.shieldBubble.fillCircle(scene.ship.x, scene.ship.y, SHIELD_BUBBLE_RADIUS);
  scene.shieldBubble.lineStyle(3, 0x9fd9ff, 0.58);
  scene.shieldBubble.strokeCircle(scene.ship.x, scene.ship.y, SHIELD_BUBBLE_RADIUS);
  scene.shieldBubble.lineStyle(1, 0xffffff, 0.32);
  scene.shieldBubble.strokeCircle(scene.ship.x, scene.ship.y, SHIELD_BUBBLE_RADIUS - 10);
}

function getShipHitboxPolygon(scene) {
  const x = scene.ship.x;
  const y = scene.ship.y;
  return [
    { x, y: y - 20 },
    { x: x + 44, y: y - 12 },
    { x: x + 74, y: y + 6 },
    { x: x + 48, y: y + 18 },
    { x: x + 16, y: y + 21 },
    { x: x - 16, y: y + 21 },
    { x: x - 48, y: y + 18 },
    { x: x - 74, y: y + 6 },
    { x: x - 44, y: y - 12 },
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

function getSupabaseClient() {
  const configured = SUPABASE_URL &&
    SUPABASE_ANON_KEY &&
    !SUPABASE_URL.includes('PEGA_AQUI') &&
    !SUPABASE_ANON_KEY.includes('PEGA_AQUI');

  if (!configured || !window.supabase || !window.supabase.createClient) return null;
  if (!supabaseClient) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return supabaseClient;
}

function setStatus(element, message, kind = '') {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle('is-error', kind === 'error');
  element.classList.toggle('is-success', kind === 'success');
}

function prepareGameOverScore(scene) {
  pendingScoreSave = {
    score,
    level: playerLevel,
    streak: maxEnergyStreak,
  };
  lastScoreSaved = false;

  const overlay = scene.gameOverContainer;
  if (!overlay) return;
  if (overlay.scoreForm) overlay.scoreForm.hidden = false;
  if (overlay.rankingBlock) overlay.rankingBlock.hidden = false;
  if (overlay.playerNameInput) {
    overlay.playerNameInput.value = '';
    overlay.playerNameInput.disabled = false;
  }
  if (overlay.saveScoreButton) overlay.saveScoreButton.disabled = false;
  const hasClient = Boolean(getSupabaseClient());
  setStatus(overlay.scoreStatus, hasClient ? '' : 'Configura Supabase en game.js para guardar el ranking.', hasClient ? '' : 'error');
}

async function savePendingScore(scene) {
  const overlay = scene.gameOverContainer;
  const client = getSupabaseClient();
  const rawName = overlay && overlay.playerNameInput ? overlay.playerNameInput.value : '';
  const playerName = rawName.trim().replace(/\s+/g, ' ').slice(0, 18) || DEFAULT_PLAYER_NAME;

  if (!pendingScoreSave || lastScoreSaved) return;
  if (!client) {
    setStatus(overlay && overlay.scoreStatus, 'Faltan SUPABASE_URL y SUPABASE_ANON_KEY en game.js.', 'error');
    return;
  }

  if (overlay && overlay.saveScoreButton) overlay.saveScoreButton.disabled = true;
  setStatus(overlay && overlay.scoreStatus, 'Guardando...');

  const payload = {
    nombre: playerName,
    nivel: pendingScoreSave.level,
    [SUPABASE_SCORE_COLUMN]: pendingScoreSave.score,
    [SUPABASE_STREAK_COLUMN]: pendingScoreSave.streak,
  };
  const { error } = await client.from(SUPABASE_RANKING_TABLE).insert(payload);

  if (error) {
    if (overlay && overlay.saveScoreButton) overlay.saveScoreButton.disabled = false;
    setStatus(overlay && overlay.scoreStatus, 'No se pudo guardar: ' + error.message, 'error');
    return;
  }

  lastScoreSaved = true;
  pendingScoreSave = null;
  if (overlay && overlay.playerNameInput) overlay.playerNameInput.disabled = true;
  if (overlay && overlay.scoreForm) overlay.scoreForm.hidden = true;
  setStatus(overlay && overlay.scoreStatus, 'Puntuacion guardada.', 'success');
  loadRankingInto(overlay && overlay.topRankingList, null, 3);
}

async function loadRankingInto(listElement, statusElement, limit = null) {
  if (!listElement) return;
  const client = getSupabaseClient();
  renderRanking(listElement, []);

  if (!client) {
    setStatus(statusElement, 'Configura Supabase en game.js para ver el ranking.', 'error');
    return;
  }

  setStatus(statusElement, 'Cargando...');
  let query = client
    .from(SUPABASE_RANKING_TABLE)
    .select('*')
    .order(SUPABASE_SCORE_COLUMN, { ascending: false })
    .order('created_at', { ascending: true });

  if (limit) query = query.limit(limit);

  const { data, error } = await query;
  if (error) {
    renderRanking(listElement, []);
    setStatus(statusElement, 'No se pudo cargar el ranking: ' + error.message, 'error');
    return;
  }

  renderRanking(listElement, data || []);
  setStatus(statusElement, data && data.length ? '' : 'Todavia no hay puntuaciones.');
}

function renderRanking(listElement, rows) {
  listElement.replaceChildren();

  if (!rows.length) {
    const empty = document.createElement('li');
    empty.className = 'ranking-empty';
    empty.textContent = 'Sin puntuaciones';
    listElement.append(empty);
    return;
  }

  rows.forEach((row, index) => {
    const item = document.createElement('li');
    const position = document.createElement('span');
    const player = document.createElement('span');
    const name = document.createElement('span');
    const meta = document.createElement('span');
    const points = document.createElement('span');
    const scoreValue = Number(row[SUPABASE_SCORE_COLUMN] || 0);
    const streakValue = Number(row[SUPABASE_STREAK_COLUMN] || 0);
    const levelValue = Number(row.nivel || 0);

    item.className = 'ranking-item';
    position.className = 'ranking-position';
    player.className = 'ranking-player';
    name.className = 'ranking-name';
    meta.className = 'ranking-meta';
    points.className = 'ranking-score';

    position.textContent = '#' + (index + 1);
    name.textContent = row.nombre || 'Jugador';
    meta.textContent = 'Nivel ' + levelValue + ' - Racha ' + streakValue;
    points.textContent = scoreValue;

    player.append(name, meta);
    item.append(position, player, points);
    listElement.append(item);
  });
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
  scene.pauseOverlay.element.classList.toggle('is-upgrade-pause', isUpgradePause);
  scene.pauseOverlay.element.classList.remove('is-frozen-pause-menu');
  if (scene.pauseOverlay.panel) {
    scene.pauseOverlay.panel.classList.toggle('ui-panel-upgrade-pause', isUpgradePause);
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
  prepareControlPauseResume(scene);
  showOverlayScreen(scene, null);
  setPauseSettingsVisible(true);
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
      playBackgroundMusic(scene);
    }
  });

  bindScreenClick('options', 'options-back-button', () => {
    if (soundEffectsEnabled) playButtonSound(scene);
    hideOptionsOverlay(scene);
  });

  overlay.toggleSfxButton = toggleSfxButton;
  overlay.toggleMusicButton = toggleMusicButton;
  return overlay;
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

function setUiDepth(scene) {
  [
    scene.menuContainer,
    scene.gameOverContainer,
    scene.rankingContainer,
    scene.pauseOverlay,
    scene.optionsOverlay,
    scene.upgradeOverlay,
  ].forEach((item) => {
    if (item) item.setDepth(UI_DEPTH);
  });

  if (scene.shieldBubble) scene.shieldBubble.setDepth(SHIP_DEPTH + 1);
  if (scene.energyRefinerModule) scene.energyRefinerModule.setDepth(SHIP_DEPTH + 2);
}

// --- Control de estados ---

function showMenu() {
  state = 'menu';
  currentGameMode = 'xy';
  isDraggingShip = false;
  this.xyPauseResumeArmed = false;
  setPauseSettingsVisible(false);
  setXyControlVisible(this, false);
  if (this) this.optionsReturnScreen = null;
  pendingScoreSave = null;
  lastScoreSaved = false;
  this.input.setDefaultCursor('default');
  setPauseOverlayMode(this, 'normal');
  this.tweens.resumeAll();
  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }
  resetTimedBoosters(this);
  resetRedWave(this);
  resetDroneWave(this);
  resetAsteroidWave(this);
  resetPlasmaWave(this);
  resetBossWave(this);
  this.resumeSpawnDelay = null;
  clearGameplayVisuals(this);
  stopBackgroundMusic(this);
  showOverlayScreen(this, 'menu');
  resetCounters.call(this);
  setHudVisible(this, false);
}

function showRanking() {
  state = 'ranking';
  isDraggingShip = false;
  this.xyPauseResumeArmed = false;
  setPauseSettingsVisible(false);
  setXyControlVisible(this, false);
  this.optionsReturnScreen = null;
  this.input.setDefaultCursor('default');
  stopBackgroundMusic(this);
  setHudVisible(this, false);
  showOverlayScreen(this, 'ranking');
  loadRankingInto(this.rankingContainer && this.rankingContainer.list, this.rankingContainer && this.rankingContainer.status, 10);
}

function startGame(options = {}) {
  state = 'playing';
  currentGameMode = getValidGameMode(options.mode);
  isDraggingShip = false;
  this.xyPauseResumeArmed = false;
  setPauseSettingsVisible(false);
  pendingScoreSave = null;
  lastScoreSaved = false;
  this.input.setDefaultCursor('default');
  this.optionsReturnScreen = null;
  setPauseOverlayMode(this, 'normal');
  this.tweens.resumeAll();
  clearGameplayVisuals(this);
  showOverlayScreen(this, null);
  setHudVisible(this, true);
  resetCounters.call(this);
  if (isInfiniteGameMode()) {
    enableInfiniteModeThreats(this);
  }
  resetTimedBoosters(this);
  resetRedWave(this);
  resetDroneWave(this);
  resetAsteroidWave(this);
  resetPlasmaWave(this);
  resetBossWave(this);
  this.resumeSpawnDelay = null;
  clearPendingStreakReward(this);
  if (this.finalDamageGameOverEvent) {
    this.finalDamageGameOverEvent.remove(false);
    this.finalDamageGameOverEvent = null;
  }

  setXyControlVisible(this, true);
  if (isXyGameMode()) {
    resetXyShipControl(this);
  } else {
    moveShipTo(this, getGameWidth(this) / 2, getShipY(this));
    updateXyControlFromShip(this);
  }

  // Primera bola inmediata, luego spawn periodico
  spawnBall(this);
  scheduleNextSpawn(this);
  restartBackgroundMusic(this);
}

function endGame() {
  if (state !== 'playing' && state !== 'paused' && state !== 'dying') return; // Evitar llamadas dobles
  state = 'gameover';
  isDraggingShip = false;
  this.xyPauseResumeArmed = false;
  setPauseSettingsVisible(false);
  setXyControlVisible(this, false);
  this.input.setDefaultCursor('default');
  if (this.finalDamageGameOverEvent) {
    this.finalDamageGameOverEvent.remove(false);
    this.finalDamageGameOverEvent = null;
  }

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }
  resetTimedBoosters(this);
  resetRedWave(this);
  resetDroneWave(this);
  resetAsteroidWave(this);
  resetPlasmaWave(this);
  resetBossWave(this);
  this.resumeSpawnDelay = null;
  clearPendingStreakReward(this);
  stopNonMusicAudio(this);
  clearGameplayVisuals(this);
  playBackgroundMusic(this);
  setHudVisible(this, false);
  showOverlayScreen(this, 'gameover');
  if (isXyInfiniteGameMode()) {
    this.gameOverContainer.finalScore.setText('Modo Infinito - Puntuación: ' + score);
    prepareUnrankedGameOver(this);
  } else {
    this.gameOverContainer.finalScore.setText('Modo X-Y - Puntuación: ' + score);
    prepareGameOverScore(this);
    loadRankingInto(this.gameOverContainer.topRankingList, null, 3);
  }
}

function enableInfiniteModeThreats(scene) {
  scene.obreraSpawnsUnlocked = true;
  scene.droneSpawnsUnlocked = true;
  scene.asteroidSpawnsUnlocked = true;
  scene.plasmaSpawnsUnlocked = true;
  scene.redNeedleSpawnsUnlocked = true;
  scene.travelSentinelUnlocked = true;
  scene.nextTravelSentinelEligibleAt = 0;
}

function prepareUnrankedGameOver(scene, message = '') {
  pendingScoreSave = null;
  lastScoreSaved = false;

  const overlay = scene.gameOverContainer;
  if (!overlay) return;
  if (overlay.scoreForm) overlay.scoreForm.hidden = true;
  if (overlay.rankingBlock) overlay.rankingBlock.hidden = true;
  if (overlay.playerNameInput) overlay.playerNameInput.disabled = true;
  if (overlay.saveScoreButton) overlay.saveScoreButton.disabled = true;
  setStatus(overlay.scoreStatus, message);
}

function resetCounters() {
  score = 0;
  ballsCaught = 0;
  energyStreak = 0;
  maxEnergyStreak = 0;
  currentGravity = BASE_GRAVITY;
  currentBoosterGravity = Math.round(BASE_GRAVITY * BOOSTER_GRAVITY_RATIO);
  currentSpawnDelay = INITIAL_SPAWN_DELAY;
  maxLives = INITIAL_HEART_CAPACITY;
  lives = maxLives;
  levelProgressScore = 0;
  playerLevel = 1;
  nextUpgradeScore = getLevelRequirement(playerLevel);
  magnetLevel = 0;
  lifeBoosterLevel = 0;
  shieldBoosterLevel = 0;
  scoreBoosterLevel = 0;
  energyRefinerLevel = 0;
  energyRefinerLevelBonus = 0;
  enemyTrailTimer = 0;
  clearShipTrail(this);
  this.nextRedWaveEligibleAt = 0;
  this.nextAsteroidWaveEligibleAt = 0;
  this.obreraSpawnsUnlocked = false;
  this.droneSpawnsUnlocked = false;
  this.asteroidSpawnsUnlocked = false;
  this.plasmaSpawnsUnlocked = false;
  this.redNeedleSpawnsUnlocked = false;
  this.travelSentinelUnlocked = false;
  this.nextTravelSentinelEligibleAt = 0;
  this.pendingBossWave = null;
  resetBossWave(this);
  updatePlayerLevelText(this);
  updateStreakText();
  updateSpeedTexts(this);
  updateUpgradeBar(this);
  updateUpgradeStatusIcons(this);
  updateLivesText(this);
  setShipTextureForCurrentState(this);
  updateShipEquipmentModules(this);
}

function trackGameplayVisual(scene, object) {
  if (!scene || !object) return object;
  if (!scene.gameplayVisuals) scene.gameplayVisuals = new Set();
  scene.gameplayVisuals.add(object);
  object.once && object.once('destroy', () => {
    if (scene.gameplayVisuals) scene.gameplayVisuals.delete(object);
  });
  return object;
}

function clearGameplayVisuals(scene) {
  if (!scene) return;

  clearAllFallingObjects(scene);
  clearPlasmaBars(scene);
  clearBossWarningParticles(scene);
  clearBossLaser(scene);
  destroyShipLifeIndicator(scene);

  if (scene.gameplayVisuals) {
    scene.gameplayVisuals.forEach((object) => {
      if (!object) return;
      if (scene.tweens && object.active !== false) scene.tweens.killTweensOf(object);
      if (object.destroy) object.destroy();
    });
    scene.gameplayVisuals.clear();
  }
  scene.shipLifeIndicator = null;
  scene.pointPopupSlots = [];
  clearShipTrail(scene);

  if (scene.ship) {
    scene.tweens.killTweensOf(scene.ship);
    scene.ship.clearTint();
    scene.ship.setAlpha(1);
    setShipTextureForCurrentState(scene);
    refreshShipSize(scene);
    moveShipTo(scene, getGameWidth(scene) / 2, getShipY(scene));
  }

  if (scene.shieldBubble) scene.shieldBubble.setVisible(false);
  if (scene.energyRefinerModule) scene.energyRefinerModule.setVisible(false);
  hideXyBottomFriction(scene);
}

function updateLivesText(scene, options = {}) {
  const currentHud = initHud();
  if (!currentHud.lifeBar || !currentHud.lifeCount) return;

  currentHud.lifeBar.innerHTML = '';
  currentHud.lifeCount.textContent = lives + '/' + maxLives;
  const activeColor = isShieldActive(scene) ? '#4da3ff' : '#4dff88';
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

function flashPlayerShip(scene, damaged = false) {
  if (!scene.ship) return;
  if (scene.shipAbsorbTween) {
    scene.shipAbsorbTween.stop();
    scene.shipAbsorbTween = null;
    scene.ship.setAlpha(1);
  }
  if (scene.shipDamageTween) {
    scene.shipDamageTween.stop();
    scene.shipDamageTween = null;
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
    onComplete: () => {
      scene.shipDamageTween = null;
      scene.ship.clearTint();
      scene.ship.setAlpha(1);
    },
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
    ? (changeKind === 'heal' ? 0x7dffae : 0xff4f68)
    : (isFilledAfter ? 0x4dff88 : 0x10243a);
  const borderColor = isChanged
    ? (changeKind === 'heal' ? 0xb5ffcf : 0xff9aaa)
    : (isFilledAfter ? 0x8dffb2 : 0x33506f);

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
  cell.frame.lineStyle(1, 0x8dffb2, 0.88);
  cell.frame.strokePoints(cell.geometry.framePoints, true);
  cell.fill.clear();
  cell.fill.fillStyle(0x4dff88, 0.9);
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
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  pauseFallingObjects(this);
  pauseTimedGameplay(this);
  showOverlayScreen(this, null);
  setPauseSettingsVisible(true);
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

  resumeFallingObjects(this);
  resumeTimedGameplay(this);
  releasePendingStreakRepairKit(this);

  resumeGameplaySpawning(this, this.resumeSpawnDelay || null);
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

  [scene.waveStartEvent, scene.waveResumeEvent, scene.bossAttackEvent, scene.bossLaserEvent, scene.bossLaserClearEvent, scene.bossEnemySpawnEvent, scene.redNeedleBossPassEvent, scene.plasmaSpawnEvent, scene.bossCueTween, scene.bossCueClearEvent].forEach((event) => {
    if (event) event.paused = true;
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

  [scene.waveStartEvent, scene.waveResumeEvent, scene.bossAttackEvent, scene.bossLaserEvent, scene.bossLaserClearEvent, scene.bossEnemySpawnEvent, scene.redNeedleBossPassEvent, scene.plasmaSpawnEvent, scene.bossCueTween, scene.bossCueClearEvent].forEach((event) => {
    if (event) event.paused = false;
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
  countdown.pausedRemaining = Math.max(0, countdown.endsAt - scene.time.now);
}

function resumeCountdown(scene, countdown) {
  if (!countdown || countdown.pausedRemaining === undefined) return;
  countdown.endsAt = scene.time.now + countdown.pausedRemaining;
  delete countdown.pausedRemaining;
}

function resetTimedBoosters(scene) {
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
  updateShipEquipmentModules(scene);

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

function canDropLifeBooster() {
  return lifeBoosterLevel > 0 && lives < maxLives;
}

function getEnergyBallValue() {
  if (energyRefinerLevel <= 0) return 1;
  const maxLevelBonus = energyRefinerLevel >= MAX_UPGRADE_LEVEL ? energyRefinerLevelBonus : 0;
  return energyRefinerLevel + 1 + maxLevelBonus;
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

  if (shouldDelayUpgrade) {
    scene.deferUpgradeChoiceUntil = Math.max(
      scene.deferUpgradeChoiceUntil || 0,
      scene.time.now + ENERGY_STREAK_UPGRADE_DELAY
    );
  }

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
  if (currentHud.score) currentHud.score.textContent = score;
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

function showStreakPointPopup(scene, x, y, label) {
  if (!scene || !scene.add) return;
  const popupPosition = getPointPopupPosition(scene, x, y);
  const container = trackGameplayVisual(scene, scene.add.container(popupPosition.x, popupPosition.y));
  container.setDepth(UI_DEPTH + 5);
  container.setScale(0.62);
  container.setAlpha(0.84);

  const streakText = createStreakGradientText(scene, label);
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

function createStreakGradientText(scene, label) {
  const textureKey = 'streakGradientText-' + streakGradientTextureId;
  streakGradientTextureId += 1;
  return createCanvasTextImage(scene, label, {
    fontSize: 22,
    fill: STREAK_POINT_POPUP_COLORS,
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
  if (
    !previousPoint
    || Phaser.Math.Distance.Between(previousPoint.x, previousPoint.y, point.x, point.y) >= SHIP_TRAIL_MIN_POINT_DISTANCE
  ) {
    scene.shipTrailPoints.push(point);
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
    const alpha = 0.06 + 0.44 * taper;
    const blueMix = Phaser.Math.Clamp((positionRatio - (1 - SHIP_TRAIL_BLUE_CORE_RATIO)) / SHIP_TRAIL_BLUE_CORE_RATIO, 0, 1);
    const haloColor = mixRgbColor(0xff9f1c, 0x1269d3, blueMix);
    const bodyColor = mixRgbColor(0xffc22e, 0x1b8be6, blueMix);
    const coreColor = mixRgbColor(0xffe06a, 0x5fd7ff, blueMix);

    graphics.lineStyle(width * 1.25, haloColor, alpha * 0.28);
    graphics.lineBetween(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y);
    graphics.fillStyle(haloColor, alpha * 0.22);
    graphics.fillCircle(currentPoint.x, currentPoint.y, width * 0.58);
    graphics.lineStyle(width, bodyColor, alpha);
    graphics.lineBetween(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y);
    graphics.fillStyle(bodyColor, alpha * 0.58);
    graphics.fillCircle(currentPoint.x, currentPoint.y, width * 0.42);
    graphics.lineStyle(Math.max(0.7, width * 0.22), coreColor, alpha * 0.7);
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
    if (enemy.getData('kind') === 'damageBooster') {
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
  };

  setShipTextureForCurrentState(scene);
  updateShipEquipmentModules(scene);
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
  updateShipEquipmentModules(scene);
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

  scene.activeScoreBooster = null;
  scoreMultiplier = 1;
  clearScoreBoosterBallColor(scene);
  setShipTextureForCurrentState(scene);
  updateShipEquipmentModules(scene);
  playBackgroundMusic(scene);
  setHudBoosterVisible(false);
  updateBoosterBar(scene, 0);
}

function applyScoreBoosterBallColor(scene) {
  if (!scene.balls) return;
  scene.balls.getChildren().forEach((ball) => {
    if (ball.active && ball.getData('kind') === 'ball') setBallEnergyColor(ball, true);
  });
}

function clearScoreBoosterBallColor(scene) {
  if (!scene.balls) return;
  scene.balls.getChildren().forEach((ball) => {
    if (ball.active && ball.getData('kind') === 'ball') setBallEnergyColor(ball, false);
  });
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
  updateShipEquipmentModules(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));
  updateShieldBubble(scene);
  updateLivesText(scene);
  setHudBoosterVisible(false);
  updateBoosterBar(scene, 0);
}

function activateRedWave(scene, bossConfig = getBossConfigForLevel(3)) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activeRedWave = {
    endsAt: null,
    duration: bossConfig.duration || RED_WAVE_DURATION,
    isSpawningDamageBoosters: false,
    hasStarted: false,
    isDraining: false,
    bossName: bossConfig.name || 'Enjambre',
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

function activateAsteroidWave(scene, bossConfig = getBossConfigForLevel(6)) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activeAsteroidWave = {
    endsAt: null,
    duration: bossConfig.duration || ASTEROID_WAVE_DURATION,
    isSpawningAsteroids: false,
    hasStarted: false,
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

function activatePlasmaWave(scene, bossConfig = getBossConfigForLevel(12)) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activePlasmaWave = {
    endsAt: null,
    duration: bossConfig.duration || PLASMA_WAVE_DURATION,
    hasStarted: false,
    isSpawningPlasma: false,
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

function activateBossWave(scene, bossConfig = getBossConfigForLevel(9)) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activeBossWave = {
    kind: 'boss',
    endsAt: null,
    duration: bossConfig.duration || BOSS_WAVE_DURATION,
    hasStarted: false,
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
  if (bossConfig.kind === 'red') {
    activateRedWave(scene, bossConfig);
  } else if (bossConfig.kind === 'drones') {
    activateDroneWave(scene, bossConfig);
  } else if (bossConfig.kind === 'asteroid') {
    activateAsteroidWave(scene, bossConfig);
  } else if (bossConfig.kind === 'plasma') {
    activatePlasmaWave(scene, bossConfig);
  } else if (bossConfig.kind === 'redNeedleBoss') {
    activateRedNeedleBossWave(scene, bossConfig);
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

  recoverStalledBossWave(scene, bossWave);
  if (scene.activeBossWave !== bossWave) return;

  if (scene.bossLaser && isLaserTouchingShip(scene, scene.bossLaser) && !isShieldActive(scene)) {
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
    scene.bossLaserClearEvent ||
    scene.bossLaser
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

function startBossWave(scene) {
  const bossWave = scene.activeBossWave;
  if (!bossWave || bossWave.hasStarted) return;

  if (bossWave.kind === 'redNeedleBoss') {
    startRedNeedleBossWave(scene, bossWave);
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

  scene.bossShip = scene.add.image(getGameWidth(scene) / 2, -BOSS_HEIGHT / 2, 'bossShip')
    .setOrigin(0.5, 0.5)
    .setDepth(FX_DEPTH + 1);

  scene.bossEnterTween = scene.tweens.add({
    targets: scene.bossShip,
    y: 86,
    duration: 1100,
    ease: 'Sine.easeOut',
    onComplete: () => {
      scene.bossEnterTween = null;
      scheduleBossAttack(scene, BOSS_ATTACK_GAP);
    },
  });
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
  bossWave.currentLaserX = laserX;
  showBossLaserWarning(scene, laserX);

  scene.bossLaserEvent = scene.time.addEvent({
    delay: BOSS_LASER_WARN_DURATION,
    callback: () => fireBossLaser(scene, laserX),
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

function showBossLaserWarning(scene, laserX) {
  clearBossWarningParticles(scene);
  scene.bossWarningParticles = [];

  for (let i = 0; i < 34; i += 1) {
    const particle = trackGameplayVisual(scene, scene.add.image(
      laserX + Phaser.Math.Between(-15, 15),
      172 + Phaser.Math.Between(-10, 22),
      'goldTrailParticle'
    ));
    particle
      .setDepth(FX_DEPTH)
      .setTint(0xff263c)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setScale(Phaser.Math.FloatBetween(0.75, 1.7))
      .setAlpha(0.85);

    scene.tweens.add({
      targets: particle,
      x: laserX + Phaser.Math.Between(-5, 5),
      y: 180 + Phaser.Math.Between(-4, 6),
      scale: 0.2,
      alpha: 0.15,
      duration: BOSS_LASER_WARN_DURATION,
      ease: 'Sine.easeIn',
      onComplete: () => particle.destroy(),
    });
    scene.bossWarningParticles.push(particle);
  }
}

function fireBossLaser(scene, laserX) {
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

  const laserHeight = getGameHeight(scene);
  const laserCenterY = laserHeight / 2 + 78;
  scene.bossLaser = scene.add.rectangle(laserX, laserCenterY, BOSS_LASER_WIDTH, laserHeight, 0xff263c, 0.72)
    .setOrigin(0.5, 0.5)
    .setDepth(FX_DEPTH - 2);
  scene.bossLaserCore = scene.add.rectangle(laserX, laserCenterY, 9, laserHeight, 0xffedf0, 0.86)
    .setOrigin(0.5, 0.5)
    .setDepth(FX_DEPTH - 1);
  playBossLaserSound(scene);

  scene.bossLaserClearEvent = scene.time.addEvent({
    delay: BOSS_LASER_DURATION,
    callback: () => finishBossLaserAttack(scene),
  });

  if (bossWave.attacksDone < bossWave.attacksTotal) {
    scheduleBossAttack(scene, BOSS_ATTACK_GAP);
  }
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
  scene.bossExitTween = scene.tweens.add({
    targets: scene.bossShip,
    y: -BOSS_HEIGHT / 2,
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
  showBossCueBand(scene, waveKind, 'warning', () => startWaveAfterCue(scene, waveKind));
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
  if (waveKind === 'red' && scene.activeRedWave) return scene.activeRedWave.bossName || 'Enjambre';
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
    scene.obreraSpawnsUnlocked = true;
    scene.activeRedWave = null;
  } else if (waveKind === 'drones') {
    scene.droneSpawnsUnlocked = true;
    scene.activeDroneWave = null;
  } else if (waveKind === 'asteroid') {
    scene.asteroidSpawnsUnlocked = true;
    scene.activeAsteroidWave = null;
  } else if (waveKind === 'plasma') {
    scene.plasmaSpawnsUnlocked = true;
    scene.activePlasmaWave = null;
  } else if (waveKind === 'boss') {
    if (currentWave.isTravelEncounter) {
      resetBossWave(scene);
      if (state === 'playing') scheduleNextSpawn(scene);
      return;
    }
    if (currentWave.kind === 'redNeedleBoss') {
      scene.redNeedleSpawnsUnlocked = true;
    }
    scene.travelSentinelUnlocked = true;
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

function hasFallingObjects(scene) {
  return hasActivePlasmaBars(scene) || scene.balls
    .getChildren()
    .some((ball) => ball.active && ball.y <= getGameHeight(scene) + 32);
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
  if (!scene.bossWarningParticles) return;
  scene.bossWarningParticles.forEach((particle) => {
    if (particle && particle.active) particle.destroy();
  });
  scene.bossWarningParticles = [];
}

function clearBossLaser(scene) {
  stopBossLaserSound(scene);
  if (scene.bossLaser) {
    scene.bossLaser.destroy();
    scene.bossLaser = null;
  }
  if (scene.bossLaserCore) {
    scene.bossLaserCore.destroy();
    scene.bossLaserCore = null;
  }
}

function isLaserTouchingShip(scene, laser) {
  const halfLaserWidth = BOSS_LASER_WIDTH / 2;
  const shipHalfWidth = getShipWidth(scene) / 2;
  const shipTop = scene.ship.y - SHIP_HEIGHT / 2;
  const shipBottom = scene.ship.y + SHIP_HEIGHT / 2;
  const laserLeft = laser.x - halfLaserWidth;
  const laserRight = laser.x + halfLaserWidth;

  return (
    shipBottom >= 56 &&
    shipTop <= getGameHeight(scene) &&
    scene.ship.x + shipHalfWidth >= laserLeft &&
    scene.ship.x - shipHalfWidth <= laserRight
  );
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
  if (levelProgressScore < nextUpgradeScore || state !== 'playing') return;
  if (scene.deferUpgradeChoiceUntil && scene.time.now < scene.deferUpgradeChoiceUntil) {
    scheduleDeferredUpgradeChoice(scene);
    return;
  }
  scene.deferUpgradeChoiceUntil = 0;

  playLevelUpSound(scene);
  advancePlayerLevel(scene);

  while (levelProgressScore >= nextUpgradeScore && !hasAvailableUpgrades()) {
    advancePlayerLevel(scene);
    updateUpgradeBar(scene);
  }

  if (!hasAvailableUpgrades()) {
    updateUpgradeBar(scene);
    consumePendingBossWave(scene);
    return;
  }

  state = 'upgrading';
  isDraggingShip = false;
  scene.input.setDefaultCursor('default');
  setXyControlActive(scene, false);
  if (isXyGameMode()) updateXyControlFromShip(scene);

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  resetTimedBoosters(scene);
  resetRedWave(scene);
  resetDroneWave(scene);
  resetAsteroidWave(scene);
  clearAllFallingObjects(scene);
  scene.availableUpgradeChoices = getRandomUpgradeChoices();
  updateUpgradeButtons(scene);
  updateUpgradeBar(scene, true, () => {
    if (state === 'upgrading') {
      showOverlayScreen(scene, 'upgrade');
    }
  });
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
  nextUpgradeScore = getLevelRequirement(playerLevel);
  scene.pendingBossWave = getBossConfigForLevel(completedLevel);
  increaseDifficulty(scene);
  updatePlayerLevelText(scene);
}

function getAvailableUpgradeKinds() {
  return ['lifeBooster', 'shieldBooster', 'scoreBooster', 'energyRefiner']
    .filter((upgradeKind) => getUpgradeLevel(upgradeKind) < MAX_UPGRADE_LEVEL);
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
  if (upgradeKind === 'energyRefiner') {
    return {
      label: 'Refinador de energía',
      getDescription: (level) => level < MAX_UPGRADE_LEVEL
        ? 'Los orbes de energía proporcionan ' + (level + 1) + ' puntos.'
        : 'Por cada nivel que superes se suma +1 al valor de los orbes de energía.',
      color: '#ffd84d',
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

function chooseUpgrade(scene, upgradeKind) {
  if (state !== 'upgrading') return;
  if (!upgradeKind) return;
  if (getUpgradeLevel(upgradeKind) >= MAX_UPGRADE_LEVEL) return;

  if (upgradeKind === 'lifeBooster') {
    lifeBoosterLevel += 1;
    updateLivesText(scene);
  } else if (upgradeKind === 'shieldBooster') {
    shieldBoosterLevel += 1;
  } else if (upgradeKind === 'scoreBooster') {
    scoreBoosterLevel += 1;
  } else if (upgradeKind === 'energyRefiner') {
    energyRefinerLevel += 1;
  }

  updateUpgradeBar(scene);
  updateUpgradeStatusIcons(scene);
  setShipTextureForCurrentState(scene);
  updateShipEquipmentModules(scene);
  showOverlayScreen(scene, null);
  scene.availableUpgradeChoices = null;

  if (scene.pendingBossWave) {
    state = 'paused';
    scene.resumeSpawnDelay = null;
    setPauseOverlayMode(scene, 'normal');
    setXyControlActive(scene, false);
    prepareControlPauseResume(scene);
    showOverlayScreen(scene, null);
    setPauseSettingsVisible(true);
    return;
  }

  if (levelProgressScore >= nextUpgradeScore) {
    state = 'playing';
    maybeOpenUpgradeChoice(scene);
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
  if (upgradeKind === 'energyRefiner') return energyRefinerLevel;
  return 0;
}

function consumePendingBossWave(scene) {
  if (!scene || !scene.pendingBossWave || state !== 'playing') return false;
  const bossConfig = scene.pendingBossWave;
  scene.pendingBossWave = false;
  releasePendingStreakRepairKit(scene);
  activateLevelBoss(scene, bossConfig);
  return true;
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
  scene.pendingStreakRepairKit = false;
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
  ['lifeBooster', 'shieldBooster', 'scoreBooster', 'energyRefiner'].forEach((upgradeKind) => {
    const config = getUpgradeConfig(upgradeKind);
    addUpgradeStatusIcon(scene, getUpgradeLevel(upgradeKind), config.color, config.label);
  });
}

function addUpgradeStatusIcon(scene, level, color, label) {
  const currentHud = initHud();
  if (!currentHud.upgrades) return;

  const chip = document.createElement('span');
  chip.className = 'hud-upgrade-chip';
  chip.classList.toggle('is-empty', level <= 0);
  chip.style.setProperty('--chip-color', color);
  chip.setAttribute('aria-label', label + ': ' + (level > 0 ? 'nivel ' + level : 'sin desbloquear'));
  chip.textContent = level > 0 ? 'Nv.' + level : '';
  currentHud.upgrades.appendChild(chip);
}

function setUpgradeButtonState(button, config, level) {
  const isMaxed = level >= MAX_UPGRADE_LEVEL;
  const nextLevel = Math.min(MAX_UPGRADE_LEVEL, level + 1);
  const title = config.label + (isMaxed ? ' MAX' : ' ' + nextLevel);
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

function pauseFallingObjects(scene) {
  scene.balls.getChildren().forEach((ball) => {
    if (!ball.active) return;
    ball.body.setVelocityX(0);
    ball.body.setVelocityY(0);
  });
}

function resumeFallingObjects(scene) {
  scene.balls.getChildren().forEach((ball) => {
    if (!ball.active) return;
    const kind = ball.getData('kind');
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

function updateMagnetPull(scene) {
  if (magnetLevel <= 0) return;

  const pullRadius = getGameWidth(scene) * MAGNET_BASE_RADIUS_RATIO * magnetLevel;
  const pullRatio = MAGNET_PULL_RATIO + magnetLevel * 0.08;
  scene.balls.getChildren().forEach((ball) => {
    if (state !== 'playing') return;
    if (!ball.active || ball.getData('kind') !== 'ball') return;

    const hitboxDistance = getDistanceToShipHitbox(scene, ball);
    if (hitboxDistance <= getObjectCollisionRadius(ball)) {
      catchBall(ball, scene);
      return;
    }

    const distanceX = scene.ship.x - ball.x;
    const distanceY = scene.ship.y - ball.y;
    const centerDistance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (centerDistance > pullRadius || centerDistance === 0) {
      ball.body.setVelocityX(0);
      return;
    }

    const closeness = 1 - centerDistance / pullRadius;
    const pullSpeed = currentGravity * pullRatio * (0.5 + closeness);
    ball.body.setVelocityX((distanceX / centerDistance) * pullSpeed);
  });
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
  if (object.getData('kind') === 'redNeedle') return isRedNeedleOverlappingShip(scene, object);
  if (object.getData('kind') === 'redNeedleLaser') return isRedNeedleLaserOverlappingShip(scene, object);

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
  if (kind === 'damageBooster') return 11;
  if (kind === 'spikeDrone') return object.getData('collisionRadius') || SPIKE_DRONE_FOLDED_RADIUS;
  if (kind === 'bigAsteroid') return 34;
  if (kind === 'asteroid') return 18;
  if (isCollectibleBallKind(kind)) return 16;
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
  if (isBlockingBossWave(scene) || scene.pendingBossWave) return;

  if (shouldStartTravelSentinel(scene)) {
    activateTravelSentinel(scene);
    return;
  }

  const kind = getNextSpawnKind(scene);
  if (!kind) return;
  if (kind === 'plasmaBar') {
    spawnPlasmaBar(scene);
    return;
  }
  if (kind === 'redNeedle') {
    spawnRedNeedle(scene);
    return;
  }
  spawnFallingKind(scene, kind);
}

function spawnForcedFallingKind(scene, kind, x = null) {
  if (!scene || !scene.balls) return null;
  if (kind === 'lifeBooster' && !canDropLifeBooster()) return null;
  return spawnFallingKind(scene, kind, x);
}

function spawnFallingKind(scene, kind, forcedX = null) {
  const isBooster = isBoosterKind(kind);
  const x = forcedX !== null ? forcedX : isAsteroidKind(kind)
    ? findAsteroidSpawnX(scene)
    : kind === 'damageBooster'
    ? findRedWaveEnemySpawnX(scene)
    : isBooster
      ? findBoosterSpawnX(scene)
      : findSpawnX(scene);
  const texture = getTextureForKind(kind);
  const spawnY = kind === 'bigAsteroid' ? -54 : -20;

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
    setBallEnergyColor(ball, Boolean(scene.activeScoreBooster));
  } else if (isAsteroidKind(kind)) {
    ball.setAngularVelocity(Phaser.Math.Between(-110, 110));
  } else if (kind === 'damageBooster') {
    setupRedEnemySway(ball);
  } else if (kind === 'spikeDrone') {
    setupSpikeDrone(scene, ball);
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

function setupRedEnemySway(enemy) {
  enemy.setData('swayPhase', Phaser.Math.FloatBetween(0, Math.PI * 2));
  enemy.setData('swaySpeed', Phaser.Math.FloatBetween(RED_ENEMY_SWAY_SPEED * 0.85, RED_ENEMY_SWAY_SPEED * 1.15));
  enemy.setData('swayVelocity', Phaser.Math.FloatBetween(RED_ENEMY_SWAY_MAX_VELOCITY * 0.65, RED_ENEMY_SWAY_MAX_VELOCITY));
}

function updateRedEnemySway(scene, time) {
  const min = 34;
  const max = Math.max(min, getGameWidth(scene) - 34);
  scene.balls.getChildren().forEach((enemy) => {
    if (!enemy.active || enemy.getData('kind') !== 'damageBooster') return;
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
    enemy.body.setVelocityY(getFallingVelocity('damageBooster', scene, enemy));
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
  applySpikeDroneState(drone, 'disabled', scene);
  drone.setData('nextSpikeStateAt', undefined);
  drone.setData('pausedSpikeRemaining', undefined);
  drone.setAngularVelocity(0);
  playSpikeDroneDisableSound(scene);
}

function isSpikeDroneGreenState(stateName) {
  return stateName === 'folded';
}

function pauseSpikeDrones(scene) {
  if (!scene.balls) return;
  scene.balls.getChildren().forEach((drone) => {
    if (!drone.active || drone.getData('kind') !== 'spikeDrone') return;
    const nextStateAt = drone.getData('nextSpikeStateAt');
    if (nextStateAt === undefined) return;
    drone.setData('pausedSpikeRemaining', Math.max(0, nextStateAt - scene.time.now));
  });
}

function resumeSpikeDrones(scene) {
  if (!scene.balls) return;
  scene.balls.getChildren().forEach((drone) => {
    if (!drone.active || drone.getData('kind') !== 'spikeDrone') return;
    const remaining = drone.getData('pausedSpikeRemaining');
    if (remaining === undefined) return;
    drone.setData('nextSpikeStateAt', scene.time.now + remaining);
    drone.setData('pausedSpikeRemaining', undefined);
  });
}

function setBallEnergyColor(ball, isPurple) {
  ball.clearTint();
  ball.setTexture(isPurple ? 'purpleBall' : 'goldBall');
  ball.setData('isPurpleEnergy', isPurple);
}

function setFallingObjectBody(object, kind) {
  if (kind === 'redNeedle') {
    object.body.setSize(RED_NEEDLE_WIDTH - 12, RED_NEEDLE_HEIGHT - 6, true);
    return;
  }

  if (kind === 'redNeedleLaser') {
    object.body.setSize(RED_NEEDLE_LASER_WIDTH, RED_NEEDLE_LASER_HEIGHT, true);
    return;
  }

  if (kind === 'damageBooster') {
    object.body.setCircle(11, 13, 13);
    return;
  }

  if (kind === 'spikeDrone') {
    const radius = object.getData('collisionRadius') || SPIKE_DRONE_FOLDED_RADIUS;
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

  object.body.setCircle(isCollectibleBallKind(kind) ? 16 : 15, isCollectibleBallKind(kind) ? 6 : 3, isCollectibleBallKind(kind) ? 6 : 3);
}

function getNextSpawnKind(scene) {
  // Durante Marea de Plasma no debe caer ningun orbe/booster.
  // Las barras de plasma se gestionan con su propio scheduler.
  if (scene.activePlasmaWave && scene.activePlasmaWave.isSpawningPlasma) return null;

  if (scene.activeRedWave && scene.activeRedWave.isSpawningDamageBoosters) return 'damageBooster';
  if (scene.activeDroneWave && scene.activeDroneWave.isSpawningDrones) return 'spikeDrone';
  if (scene.activeBossWave && scene.activeBossWave.isSpawningEnemies) return 'damageBooster';
  if (scene.activeAsteroidWave && scene.activeAsteroidWave.isSpawningAsteroids) {
    return Math.random() < ASTEROID_WAVE_BIG_ASTEROID_CHANCE ? 'bigAsteroid' : 'asteroid';
  }

  const threatKind = getNextTravelThreatKind(scene);
  if (threatKind) return threatKind;
  const plasmaKind = getNextPlasmaKind(scene);
  if (plasmaKind) return plasmaKind;
  const asteroidKind = getNextAsteroidKind(scene);
  if (asteroidKind) return asteroidKind;
  const boosterKind = getNextBoosterKind(scene);
  if (scene.activeBossWave && scene.activeBossWave.isTravelEncounter) return boosterKind;
  return boosterKind || 'ball';
}

function getNextTravelThreatKind(scene) {
  const isLevelBossActive = scene.activeBossWave && !scene.activeBossWave.isTravelEncounter;
  if ((!scene.obreraSpawnsUnlocked && !scene.droneSpawnsUnlocked && !scene.redNeedleSpawnsUnlocked) || scene.activeRedWave || scene.activeDroneWave || scene.activeAsteroidWave || scene.activePlasmaWave || isLevelBossActive) return null;

  if (scene.redNeedleSpawnsUnlocked && !hasActiveRedNeedle(scene) && Math.random() < RED_NEEDLE_SPAWN_CHANCE) return 'redNeedle';
  if (scene.droneSpawnsUnlocked && Math.random() < SPIKE_DRONE_SPAWN_CHANCE) return 'spikeDrone';
  if (scene.obreraSpawnsUnlocked && Math.random() < OBRERA_SPAWN_CHANCE) return 'damageBooster';
  return null;
}

function shouldStartTravelSentinel(scene) {
  if (!scene.travelSentinelUnlocked || scene.activeBossWave || scene.activeRedWave || scene.activeDroneWave || scene.activeAsteroidWave || scene.activePlasmaWave) return false;
  if (scene.pendingBossWave || getActiveTimedBooster(scene) || hasActivePlasmaBars(scene)) return false;
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
  const options = [
    { kind: 'scoreBooster', chance: timedBoosterActive || scoreBoosterLevel <= 0 ? 0 : getBoosterChanceForLevel(scoreBoosterLevel) },
    { kind: 'shieldBooster', chance: timedBoosterActive || shieldBoosterLevel <= 0 ? 0 : getBoosterChanceForLevel(shieldBoosterLevel) },
    { kind: 'lifeBooster', chance: canDropLifeBooster() ? getLifeBoosterChance() : 0 },
  ];
  const totalChance = options.reduce((sum, option) => sum + option.chance, 0);
  let roll = Math.random();

  if (roll >= totalChance) return null;

  for (const option of options) {
    if (roll < option.chance) return option.kind;
    roll -= option.chance;
  }

  return null;
}

function hasFallingBooster(scene) {
  return scene.balls
    .getChildren()
    .some((ball) => ball.active && isHelpfulBoosterKind(ball.getData('kind')));
}

function hasFallingAsteroid(scene) {
  return scene.balls
    .getChildren()
    .some((ball) => ball.active && isAsteroidKind(ball.getData('kind')));
}

function countActiveHostileFallingObjects(scene) {
  return scene.balls
    .getChildren()
    .filter((ball) => ball.active && isShieldBlockedKind(ball.getData('kind')))
    .length;
}

function hasActiveRedNeedle(scene) {
  return scene.balls
    .getChildren()
    .some((ball) => ball.active && ball.getData('kind') === 'redNeedle');
}

function getTextureForKind(kind) {
  if (kind === 'redNeedle') return 'redNeedleShip';
  if (kind === 'redNeedleLaser') return 'redNeedleLaser';
  if (kind === 'bigAsteroid') return 'bigAsteroid';
  if (isAsteroidKind(kind)) return 'asteroid';
  if (kind === 'damageBooster') return 'enemyShipSmall';
  if (kind === 'spikeDrone') return 'spikeDrone';
  if (kind === 'lifeBooster') return 'lifeBooster';
  if (kind === 'scoreBooster') return 'scoreBooster';
  if (kind === 'shieldBooster') return 'shieldBooster';
  return 'goldBall';
}

function isBoosterKind(kind) {
  return kind === 'damageBooster' || kind === 'lifeBooster' || kind === 'scoreBooster' || kind === 'shieldBooster';
}

function isHelpfulBoosterKind(kind) {
  return kind === 'lifeBooster' || kind === 'scoreBooster' || kind === 'shieldBooster';
}

function isCollectibleBallKind(kind) {
  return kind === 'ball';
}

function isAsteroidKind(kind) {
  return kind === 'asteroid' || kind === 'bigAsteroid';
}

function isShieldBlockedKind(kind) {
  return kind === 'damageBooster' || kind === 'spikeDrone' || kind === 'redNeedle' || kind === 'redNeedleLaser' || isAsteroidKind(kind);
}

function findSpawnX(scene) {
  const min = 40;
  const max = Math.max(min, getGameWidth(scene) - 40);
  return Phaser.Math.Between(min, max);
}

function findBoosterSpawnX(scene) {
  const min = 28;
  const max = Math.max(min, getGameWidth(scene) - 28);
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
  const min = 34;
  const max = Math.max(min, getGameWidth(scene) - 34);
  const center = getGameWidth(scene) / 2;
  const recentEnemies = scene.balls
    .getChildren()
    .filter((ball) => (
      ball.active &&
      ball.getData('kind') === 'damageBooster' &&
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
  currentBoosterGravity = Math.round(currentGravity * BOOSTER_GRAVITY_RATIO);

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

function resetGameSpeed(scene) {
  currentGravity = BASE_GRAVITY;
  currentBoosterGravity = Math.round(BASE_GRAVITY * BOOSTER_GRAVITY_RATIO);
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
  if (currentHud.level) currentHud.level.textContent = playerLevel;
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

  if (kind === 'spikeDrone') {
    return Math.round(BASE_GRAVITY * SPIKE_DRONE_GRAVITY_RATIO);
  }

  if (kind === 'damageBooster' && scene.activeRedWave) {
    return Math.round(currentGravity * RED_WAVE_ENEMY_GRAVITY_RATIO);
  }

  if (isAsteroidKind(kind)) {
    const normalRatio = scene.activeAsteroidWave ? ASTEROID_WAVE_GRAVITY_RATIO : ASTEROID_GRAVITY_RATIO;
    const ratio = kind === 'bigAsteroid' ? BIG_ASTEROID_GRAVITY_RATIO : normalRatio;
    return Math.round(BASE_GRAVITY * ratio);
  }

  return isCollectibleBallKind(kind) ? currentGravity : currentBoosterGravity;
}

function getHorizontalVelocity(kind, scene, object = null) {
  if (kind === 'redNeedle') {
    return object && object.getData('horizontalVelocity') ? object.getData('horizontalVelocity') : RED_NEEDLE_SPEED;
  }

  if (kind === 'redNeedleLaser') return 0;

  if (!isAsteroidKind(kind)) return 0;

  if (object && object.getData('horizontalVelocity')) {
    return object.getData('horizontalVelocity');
  }

  const direction = Math.random() < 0.5 ? -1 : 1;
  const normalRatio = scene.activeAsteroidWave ? ASTEROID_WAVE_HORIZONTAL_SPEED_RATIO : ASTEROID_HORIZONTAL_SPEED_RATIO;
  const ratio = kind === 'bigAsteroid' ? BIG_ASTEROID_HORIZONTAL_SPEED_RATIO : normalRatio;
  const velocity = Math.round(BASE_GRAVITY * ratio) * direction;
  if (object) object.setData('horizontalVelocity', velocity);
  return velocity;
}

function getCurrentSpawnDelay(scene) {
  if (scene.activePlasmaWave) return PLASMA_WAVE_SPAWN_DELAY;
  if (scene.activeDroneWave) return DRONE_WAVE_SPAWN_DELAY;
  if (scene.activeAsteroidWave) return ASTEROID_WAVE_SPAWN_DELAY;
  return scene.activeRedWave ? RED_WAVE_SPAWN_DELAY : currentSpawnDelay;
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
  const isPurpleEnergy = Boolean(ball.getData('isPurpleEnergy'));
  let hitFeedbackShown = false;
  if (kind === 'spikeDrone') {
    const spikeState = ball.getData('spikeState');
    if (!isShieldActive(scene) && isSpikeDroneGreenState(spikeState)) {
      disableSpikeDrone(scene, ball);
      return;
    }
    if (spikeState !== 'expanded' && !isShieldActive(scene)) return;
  }

  if (isShieldBlockedKind(kind)) {
    handleHostileShipContact(scene, ball, x, y, kind, isPurpleEnergy);
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
    const points = getEnergyBallValue() * scoreMultiplier;
    addScore(scene, points, true, { x, y, color: isPurpleEnergy ? '#d7a8ff' : '#ffd84d' });
    ballsCaught += 1;
    increaseEnergyStreak(scene);
  }

  if (state !== 'playing') return;

  if (!hitFeedbackShown) {
    if (isShieldBlockedKind(kind)) {
      playBadSound(scene);
    } else if (isBoosterKind(kind)) {
      playBoosterSound(scene);
    } else {
      playCatchSound(scene);
    }
  }
  if (!hitFeedbackShown) {
    showAbsorbEffect(scene, x, y, kind, isPurpleEnergy);
  }

  if (kind === 'ball') {
    maybeOpenUpgradeChoice(scene);
  }
}

function handleHostileShipContact(scene, hostile, x, y, kind, isPurpleEnergy = false) {
  if (!isShieldActive(scene) && isShipDamageInvulnerable(scene)) return;
  if (isShieldActive(scene) && hostile && hostile.getData('hasBeenShieldBlocked')) return;

  showAbsorbEffect(scene, x, y, kind, isPurpleEnergy);
  if (!isShieldActive(scene)) {
    takeDirectDamage(scene);
    return;
  }

  if (hostile) hostile.setData('hasBeenShieldBlocked', true);
  playShieldBlockSound(scene);
  flashPlayerShip(scene);
  addScore(scene, SHIELD_BLOCK_SCORE, true, { x, y, color: '#4da3ff' });
  destroyShieldBlockedHostile(scene, hostile);
}

function destroyShieldBlockedHostile(scene, hostile) {
  if (!hostile || !hostile.active) return;
  if (scene && scene.tweens) scene.tweens.killTweensOf(hostile);
  hostile.destroy();
}

function playCatchSound(scene) {
  if (!soundEffectsEnabled) return;
  if (!scene.catchAudio) {
    scene.catchAudio = new Audio(CATCH_SOUND_PATH);
    scene.catchAudio.volume = 0.45;
  }

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

function playBackgroundMusic(scene) {
  if (!musicEnabled) return;
  playMusicTrack(scene, 'backgroundMusic', BACKGROUND_MUSIC_PATH, 0.28);
}

function restartBackgroundMusic(scene) {
  pausedMusicTime = 0;
  stopCurrentMusic(scene);
  scene.currentMusicKey = null;
  playBackgroundMusic(scene);
}

function playPurpleBoosterMusic(scene) {
  if (!musicEnabled) return;
  playMusicTrack(scene, 'purpleBoosterMusic', PURPLE_BOOSTER_MUSIC_PATH, 0.32);
}

function playMusicTrack(scene, audioKey, path, volume) {
  if (!musicEnabled) return;
  if (scene.currentMusicKey === audioKey && scene[audioKey] && !scene[audioKey].paused) return;

  stopCurrentMusic(scene);

  if (!scene[audioKey]) {
    scene[audioKey] = new Audio(path);
    scene[audioKey].loop = true;
    scene[audioKey].volume = volume;
  }

  scene.currentMusicKey = audioKey;
  scene[audioKey].currentTime = pausedMusicTime > 0 ? pausedMusicTime : 0;
  pausedMusicTime = 0;
  scene[audioKey].play().catch(() => {});
}

function stopBackgroundMusic(scene) {
  stopCurrentMusic(scene);
  scene.currentMusicKey = null;
  pausedMusicTime = 0;
}

function stopNonMusicAudio(scene) {
  ['catchAudio', 'boosterAudio', 'badAudio', 'buttonAudio', 'levelUpAudio', 'redWaveAudio', 'bossLaserAudio', 'shieldBlockAudio', 'streakSuccessAudio'].forEach((audioKey) => {
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
  playBackgroundMusic(scene);
}

function playAudioFile(scene, audioKey, path, volume) {
  if (!soundEffectsEnabled) return;
  if (!scene[audioKey]) {
    scene[audioKey] = new Audio(path);
    scene[audioKey].volume = volume;
  }

  scene[audioKey].currentTime = 0;
  scene[audioKey].play().catch(() => {});
}

function playOverlappingAudioFile(scene, audioCollectionKey, path, volume) {
  if (!soundEffectsEnabled) return;
  if (!scene[audioCollectionKey]) scene[audioCollectionKey] = [];

  const audio = new Audio(path);
  audio.volume = volume;
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
    scene[audioKey].volume = volume;
  }

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
}

function loadAudioSettings() {
  try {
    const sfx = window.localStorage.getItem('jueguito_sfx_enabled');
    const music = window.localStorage.getItem('jueguito_music_enabled');
    if (sfx !== null) soundEffectsEnabled = sfx === '1';
    if (music !== null) musicEnabled = music === '1';
  } catch (error) {
    soundEffectsEnabled = true;
    musicEnabled = true;
  }
}

function saveAudioSettings() {
  try {
    window.localStorage.setItem('jueguito_sfx_enabled', soundEffectsEnabled ? '1' : '0');
    window.localStorage.setItem('jueguito_music_enabled', musicEnabled ? '1' : '0');
  } catch (error) {
    // Ignorar si el navegador no permite persistir.
  }
}

function showAbsorbEffect(scene, x, y, kind, isPurpleEnergy = false) {
  const targetX = scene.ship.x;
  const targetY = scene.ship.y - 4;
  const tint = getAbsorbParticleTint(kind, isPurpleEnergy);
  const particleCount = kind === 'ball' ? 22 : 14;

  for (let i = 0; i < particleCount; i += 1) {
    const particle = trackGameplayVisual(scene, scene.add.image(
      x + Phaser.Math.Between(-10, 10),
      y + Phaser.Math.Between(-10, 10),
      'goldTrailParticle'
    ));
    const scale = Phaser.Math.FloatBetween(kind === 'ball' ? 0.75 : 0.55, kind === 'ball' ? 1.55 : 1.1);
    const delay = Phaser.Math.Between(0, 80);

    particle
      .setDepth(FX_DEPTH)
      .setTint(tint)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setScale(scale)
      .setAlpha(0.95);

    scene.tweens.add({
      targets: particle,
      x: targetX + Phaser.Math.Between(-18, 18),
      y: targetY + Phaser.Math.Between(-5, 5),
      scale: 0.1,
      alpha: 0,
      delay,
      duration: Phaser.Math.Between(260, 420),
      ease: 'Cubic.easeIn',
      onComplete: () => particle.destroy(),
    });
  }

  if (scene.shipAbsorbTween) {
    scene.shipAbsorbTween.stop();
    scene.shipAbsorbTween = null;
    scene.ship.setAlpha(1);
  }

  scene.shipAbsorbTween = scene.tweens.add({
    targets: scene.ship,
    alpha: 0.72,
    duration: 70,
    yoyo: true,
    ease: 'Sine.easeOut',
    onComplete: () => {
      scene.shipAbsorbTween = null;
      scene.ship.setAlpha(1);
    },
  });
}

function getAbsorbParticleTint(kind, isPurpleEnergy = false) {
  if (kind === 'ball' && isPurpleEnergy) return 0x9b5cff;
  if (isAsteroidKind(kind)) return 0xaeb7c8;
  if (kind === 'damageBooster') return 0xff3b4f;
  if (kind === 'spikeDrone') return 0xff3045;
  if (kind === 'redNeedle') return 0xff263c;
  if (kind === 'redNeedleLaser') return 0xff263c;
  if (kind === 'lifeBooster') return 0x4dff88;
  if (kind === 'scoreBooster') return 0x9b5cff;
  if (kind === 'shieldBooster') return 0x4da3ff;
  return 0xffc84d;
}
