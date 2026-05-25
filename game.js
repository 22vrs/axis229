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
const BACKGROUND_MUSIC_PATH = 'assets/background.mp3';
const PURPLE_BOOSTER_MUSIC_PATH = 'assets/purple-booster.mp3';
const INITIAL_SPAWN_DELAY = 1700;
const MIN_SPAWN_DELAY = 520;
const SPAWN_DELAY_EASING = 1.8;
const BASE_GRAVITY = 220;
const MAX_SPEED_MULTIPLIER = 2;
const MAX_BALL_GRAVITY = BASE_GRAVITY * MAX_SPEED_MULTIPLIER;
const SPEED_INCREASE_MULTIPLIER = 1.10;
const STARFIELD_SPEED_RATIO = 0.32;
const MAX_STARFIELD_SPEED_MULTIPLIER = 2.6;
const BOOSTER_GRAVITY_RATIO = 0.8;
const SHIP_SIDE_HIDE_RATIO = 1 / 3;
const SHIP_WIDTH = 136;
const SHIP_HEIGHT = 34;
const SHIP_RADIUS = 8;
const SHIELD_BUBBLE_RADIUS = 82;
const SHIELD_BUBBLE_DIAMETER = SHIELD_BUBBLE_RADIUS * 2;
const MIN_TIMED_BOOSTER_DURATION = 5000;
const MAX_TIMED_BOOSTER_DURATION = 15000;
const RED_WAVE_DURATION = 15000;
const RED_WAVE_SPAWN_DELAY = 600;
const RED_WAVE_ENEMY_GRAVITY_RATIO = 0.72;
const RED_WAVE_MIN_ENEMY_SPACING = 185;
const RED_WAVE_RECENT_ENEMY_HEIGHT = 230;
const OBRERA_SPAWN_CHANCE = 0.13;
const CAPPED_SPEED_OBRERA_SPAWN_CHANCE = 0.2;
const ASTEROID_WAVE_DURATION = 15000;
const ASTEROID_WAVE_SPAWN_DELAY = 760;
const TRAVEL_ASTEROID_CHANCE = 0.075;
const CAPPED_SPEED_TRAVEL_ASTEROID_CHANCE = 0.12;
const BOSS_WAVE_DURATION = 30000;
const BOSS_WAVE_ATTACKS = 5;
const TRAVEL_SENTINEL_ATTACKS = 2;
const TRAVEL_SENTINEL_CHANCE = 0.018;
const TRAVEL_SENTINEL_COOLDOWN = 26000;
const BOSS_LASER_WARN_DURATION = 1500;
const BOSS_LASER_DURATION = 2000;
const BOSS_ATTACK_GAP = 2000;
const BOSS_WIDTH = 560;
const BOSS_HEIGHT = 220;
const BOSS_LASER_WIDTH = 32;
const WAVE_CLEAR_DELAY = 2200;
const WAVE_POST_DELAY = 900;
const BOSS_CUE_BAND_HEIGHT = 76;
const BOSS_CUE_DESCEND_DURATION = 4600;
const BOSS_LASER_MIN_X_GAP = 112;
const RED_ENEMY_SWAY_SPEED = 0.0042;
const RED_ENEMY_SWAY_MAX_VELOCITY = 24;
const SHIP_MAX_TILT = 14;
const SHIP_TILT_SMOOTHING = 0.24;
const SHIP_TILT_IDLE_DELAY = 170;
const ASTEROID_WAVE_BIG_ASTEROID_CHANCE = 0.16;
const ASTEROID_GRAVITY_RATIO = 0.9;
const BIG_ASTEROID_GRAVITY_RATIO = 0.72;
const ASTEROID_HORIZONTAL_SPEED_RATIO = 0.45;
const BIG_ASTEROID_HORIZONTAL_SPEED_RATIO = 0.32;
const ASTEROID_WAVE_GRAVITY_RATIO = 0.82;
const ASTEROID_WAVE_HORIZONTAL_SPEED_RATIO = 0.58;
const ASTEROID_WRAP_MARGIN = 28;
const UPGRADE_POINTS_REQUIRED = 20;
const UPGRADE_POINTS_GROWTH = 10;
const INITIAL_HEART_CAPACITY = 5;
const MAX_UPGRADE_LEVEL = 5;
const UPGRADE_RESUME_DELAY = 2000;
const MAGNET_BASE_RADIUS_RATIO = 0.14;
const MAGNET_PULL_RATIO = 0.75;
const UPGRADE_BAR_TWEEN_DURATION = 260;
const SCORE_BOOSTER_CHANCE = 0.07;
const SHIELD_BOOSTER_CHANCE = 0.07;
const LIFE_BOOSTER_CHANCE = 0.025;
const FONT_FAMILY = '"Orbitron", "Rajdhani", "Trebuchet MS", Arial, sans-serif';
const FALLING_OBJECT_DEPTH = 4;
const SHIP_DEPTH = 12;
const FX_DEPTH = 30;
const UI_DEPTH = 1000;
const UI_PANEL_COLOR = 0x09111f;
const UI_PANEL_STROKE = 0x76ffe8;
const UI_MUTED_STROKE = 0x2d4368;
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
const UPGRADE_ICON_Y = BOOSTER_BAR_Y + 18;

const config = {
  type: Phaser.AUTO,
  parent: 'game-container',
  backgroundColor: '#040714',
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
let currentGravity = BASE_GRAVITY;
let currentBoosterGravity = Math.round(BASE_GRAVITY * BOOSTER_GRAVITY_RATIO);
let currentSpawnDelay = INITIAL_SPAWN_DELAY;
let maxLives = INITIAL_HEART_CAPACITY;
let lives = INITIAL_HEART_CAPACITY;
let nextUpgradeScore = UPGRADE_POINTS_REQUIRED;
let levelProgressScore = 0;
let playerLevel = 0;
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
let playerTrailTimer = 0;
let enemyTrailTimer = 0;
let energyRefinerPassiveTimer = 0;

function getLevelRequirement(level) {
  return UPGRADE_POINTS_REQUIRED + Math.max(0, level) * UPGRADE_POINTS_GROWTH;
}

function getBossConfigForLevel(level) {
  if (level === 1) {
    return {
      kind: 'red',
      name: 'Enjambre',
      duration: RED_WAVE_DURATION,
    };
  }
  if (level === 2) {
    return {
      kind: 'boss',
      name: 'Centinela',
      duration: BOSS_WAVE_DURATION,
      attacks: BOSS_WAVE_ATTACKS,
    };
  }
  if (level === 3) {
    return {
      kind: 'asteroid',
      name: 'Cinturón',
      duration: ASTEROID_WAVE_DURATION,
    };
  }
  return null;
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
    hull: 0xb985ff,
    wing: 0x7b45ff,
    cockpit: 0xf5e6ff,
    engine: 0xffb8ef,
  });
  createShipTexture(this, 'blueShip', {
    hull: 0x72c4ff,
    wing: 0x2f7dff,
    cockpit: 0xe7f7ff,
    engine: 0x76ffe8,
  });
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

  this.scorePanel = this.add
    .rectangle(24, HUD_TOP, getGameWidth(this) - 48, HUD_HEIGHT, UI_PANEL_COLOR, 0.68)
    .setOrigin(0, 0)
    .setStrokeStyle(1, UI_MUTED_STROKE, 0.85);
  this.scoreAccent = this.add
    .rectangle(24, HUD_TOP, 3, HUD_HEIGHT, 0xffd84d, 0.95)
    .setOrigin(0, 0);
  this.scoreText = this.add.text(getGameWidth(this) / 2, 28, 'PUNTOS 0', {
    fontFamily: FONT_FAMILY,
    fontSize: '22px',
    fill: '#ffffff',
    fontStyle: 'bold',
  });
  this.scoreText.setOrigin(0, 0);

  this.playerLevelText = this.add.text(24, 24, 'NIVEL 0', {
    fontFamily: FONT_FAMILY,
    fontSize: '13px',
    fill: '#ffd84d',
    fontStyle: 'bold',
  }).setOrigin(0, 0);

  this.levelText = this.add.text(24, getGameHeight(this) - 38, 'VEL 1.00x', {
    fontFamily: FONT_FAMILY,
    fontSize: '12px',
    fill: '#7f93b8',
    fontStyle: 'bold',
  }).setOrigin(0, 0);
  this.boosterLevelText = this.add.text(24, getGameHeight(this) - 22, 'BOOST 0.80x', {
    fontFamily: FONT_FAMILY,
    fontSize: '12px',
    fill: '#7f93b8',
    fontStyle: 'bold',
  }).setOrigin(0, 0);

  this.livesText = this.add.container(getGameWidth(this) / 2, getLivesY(this));
  updateLivesText(this);

  // CORRECCION: usar sprite con fisica para la nave, no rectangle
  this.ship = this.physics.add.image(getGameWidth(this) / 2, getShipY(this), 'ship').setOrigin(0.5, 0.5);
  this.ship.setDepth(SHIP_DEPTH);
  this.ship.body.setImmovable(true);
  this.ship.body.setAllowGravity(false);
  refreshShipSize(this);

  this.energyRefinerModule = this.add.graphics()
    .setDepth(SHIP_DEPTH + 2)
    .setVisible(false);
  updateEnergyRefinerModule(this);

  this.shieldBubble = this.add.graphics()
    .setDepth(SHIP_DEPTH + 1)
    .setVisible(false);
  updateShieldBubble(this);

  this.boosterBarBackground = this.add
    .rectangle(24, BOOSTER_BAR_Y, getGameWidth(this) - 48, 7, 0x050914, 0.78)
    .setOrigin(0, 0.5)
    .setStrokeStyle(1, 0x76ffe8, 0.3)
    .setVisible(false);
  this.boosterBarFill = this.add
    .rectangle(24, BOOSTER_BAR_Y, getGameWidth(this) - 48, 7, 0x76ffe8, 1)
    .setOrigin(0, 0.5)
    .setVisible(false);
  this.upgradeBarBackground = this.add
    .rectangle(24, 8, getGameWidth(this) - 48, 9, 0x050914, 0.8)
    .setOrigin(0, 0.5)
    .setStrokeStyle(1, 0xffd84d, 0.24);
  this.upgradeBarFill = this.add
    .rectangle(24, 8, 0, 9, 0xffd84d, 1)
    .setOrigin(0, 0.5);
  this.upgradeProgressText = this.add.text(getGameWidth(this) / 2, 8, '0/' + getLevelRequirement(0), {
    fontFamily: FONT_FAMILY,
    fontSize: '10px',
    fill: '#ffffff',
    fontStyle: 'bold',
    stroke: '#10162a',
    strokeThickness: 3,
  }).setOrigin(0.5, 0.5);
  this.upgradeStatusContainer = this.add.container(150, 30);
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

  // Menus
  this.menuContainer = createMenu(this);
  this.gameOverContainer = createGameOver(this);
  setUiDepth(this);
  layoutScene(this);

  showMenu.call(this);

  this.scale.on('resize', () => layoutScene(this));

  // Movimiento del ratón
  this.input.on('pointerdown', (pointer) => {
    if (state === 'paused') {
      if (!isPointerOverShip(this, pointer)) return;
      resumeGame.call(this);
    }
    if (state !== 'playing') return;
    if (!isPointerOverShip(this, pointer)) return;
    isDraggingShip = true;
    this.input.setDefaultCursor('grabbing');
    const newX = clampShipX(this, pointer.x);
    moveShipTo(this, newX);
  });

  this.input.on('pointermove', (pointer) => {
    if (state !== 'playing' && state !== 'paused') return;
    if (!isDraggingShip) {
      this.input.setDefaultCursor(isPointerOverShip(this, pointer) ? 'grab' : 'default');
      return;
    }
    if (state !== 'playing') return;

    const newX = clampShipX(this, pointer.x);
    moveShipTo(this, newX);
  });

  this.input.on('pointerup', () => {
    const wasDragging = isDraggingShip;
    isDraggingShip = false;
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
  const left = 4;
  const right = textureWidth - 4;
  const innerLeft = textureWidth * 0.28;
  const innerRight = textureWidth * 0.72;

  graphics.fillStyle(colors.wing, 0.95);
  graphics.fillPoints([
    { x: left, y: 28 },
    { x: innerLeft, y: 8 },
    { x: centerX - 6, y: 18 },
    { x: innerLeft - 8, y: 33 },
  ], true);
  graphics.fillPoints([
    { x: right, y: 28 },
    { x: innerRight, y: 8 },
    { x: centerX + 6, y: 18 },
    { x: innerRight + 8, y: 33 },
  ], true);

  graphics.fillStyle(colors.hull, 1);
  graphics.fillPoints([
    { x: centerX, y: 2 },
    { x: centerX + 34, y: 13 },
    { x: centerX + 24, y: 28 },
    { x: centerX, y: 33 },
    { x: centerX - 24, y: 28 },
    { x: centerX - 34, y: 13 },
  ], true);

  graphics.fillStyle(colors.cockpit, 0.82);
  graphics.fillEllipse(centerX, 15, 24, 12);
  graphics.fillStyle(0x0b1024, 0.32);
  graphics.fillEllipse(centerX, 16, 14, 6);

  graphics.fillStyle(colors.engine, 0.85);
  graphics.fillTriangle(centerX - 13, 29, centerX - 6, 33, centerX - 19, 33);
  graphics.fillTriangle(centerX + 13, 29, centerX + 6, 33, centerX + 19, 33);

  graphics.lineStyle(2, 0xffffff, 0.42);
  graphics.strokePoints([
    { x: centerX, y: 2 },
    { x: centerX + 34, y: 13 },
    { x: centerX + 24, y: 28 },
    { x: centerX, y: 33 },
    { x: centerX - 24, y: 28 },
    { x: centerX - 34, y: 13 },
  ], true);

  graphics.generateTexture(key, textureWidth, SHIP_HEIGHT);
  graphics.destroy();
}

function createEnemyShipTexture(scene) {
  const graphics = scene.make.graphics({ x: 0, y: 0, add: false });

  graphics.fillStyle(0xd61f36, 1);
  graphics.fillPoints([
    { x: 24, y: 46 },
    { x: 4, y: 14 },
    { x: 17, y: 19 },
    { x: 24, y: 2 },
    { x: 31, y: 19 },
    { x: 44, y: 14 },
  ], true);

  graphics.fillStyle(0xff5366, 1);
  graphics.fillPoints([
    { x: 24, y: 8 },
    { x: 36, y: 34 },
    { x: 24, y: 43 },
    { x: 12, y: 34 },
  ], true);

  graphics.fillStyle(0xffedf0, 0.82);
  graphics.fillEllipse(24, 25, 13, 10);
  graphics.fillStyle(0x0b1024, 0.28);
  graphics.fillEllipse(24, 26, 7, 5);

  graphics.fillStyle(0xffb347, 0.9);
  graphics.fillTriangle(15, 9, 20, 2, 9, 4);
  graphics.fillTriangle(33, 9, 28, 2, 39, 4);
  graphics.lineStyle(2, 0xffffff, 0.34);
  graphics.strokePoints([
    { x: 24, y: 8 },
    { x: 36, y: 34 },
    { x: 24, y: 43 },
    { x: 12, y: 34 },
  ], true);

  graphics.generateTexture('enemyShipSmall', 48, 48);
  graphics.destroy();
}

function createBossShipTexture(scene) {
  const graphics = scene.make.graphics({ x: 0, y: 0, add: false });
  const centerX = BOSS_WIDTH / 2;

  graphics.fillStyle(0x45101a, 1);
  graphics.fillPoints([
    { x: centerX, y: 8 },
    { x: BOSS_WIDTH - 10, y: 68 },
    { x: BOSS_WIDTH - 70, y: 165 },
    { x: centerX + 74, y: BOSS_HEIGHT - 12 },
    { x: centerX, y: 172 },
    { x: centerX - 74, y: BOSS_HEIGHT - 12 },
    { x: 70, y: 165 },
    { x: 10, y: 68 },
  ], true);

  graphics.fillStyle(0x8e2032, 1);
  graphics.fillPoints([
    { x: centerX, y: 32 },
    { x: BOSS_WIDTH - 142, y: 76 },
    { x: centerX + 112, y: 150 },
    { x: centerX, y: 132 },
    { x: centerX - 112, y: 150 },
    { x: 142, y: 76 },
  ], true);

  graphics.fillStyle(0xff5366, 0.95);
  graphics.fillCircle(centerX, 112, 44);
  graphics.fillStyle(0x0b1024, 0.35);
  graphics.fillCircle(centerX, 116, 25);
  graphics.fillStyle(0xff8090, 0.8);
  graphics.fillCircle(centerX - 132, 106, 18);
  graphics.fillCircle(centerX + 132, 106, 18);
  graphics.fillStyle(0xffc0ca, 0.9);
  graphics.fillRect(centerX - 22, 155, 44, 44);
  graphics.fillStyle(0xff263c, 0.9);
  graphics.fillTriangle(centerX - 46, 188, centerX, BOSS_HEIGHT - 4, centerX + 46, 188);

  graphics.lineStyle(3, 0xffa0aa, 0.38);
  graphics.strokePoints([
    { x: centerX, y: 8 },
    { x: BOSS_WIDTH - 10, y: 68 },
    { x: BOSS_WIDTH - 70, y: 165 },
    { x: centerX + 74, y: BOSS_HEIGHT - 12 },
    { x: centerX, y: 172 },
    { x: centerX - 74, y: BOSS_HEIGHT - 12 },
    { x: 70, y: 165 },
    { x: 10, y: 68 },
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
  const halfWidth = getShipWidth(scene) / 2;
  const halfHeight = SHIP_HEIGHT / 2;

  return (
    pointer.x >= scene.ship.x - halfWidth &&
    pointer.x <= scene.ship.x + halfWidth &&
    pointer.y >= scene.ship.y - halfHeight &&
    pointer.y <= scene.ship.y + halfHeight
  );
}

function update(time, delta) {
  if (state !== 'playing') return;

  updateSpaceBackground(this, delta, time);
  updateShipPropulsion(this, delta);
  updateShipTilt(this);
  updateEnemyPropulsion(this, delta);
  updateRedEnemySway(this, time);
  updateEnergyRefinerPassive(this, delta);
  updateScoreBooster(this);
  updateShieldBooster(this);
  updateRedWave(this);
  updateAsteroidWave(this);
  updateBossWave(this);
  updateMagnetPull(this);

  // Comprobar si alguna bola ha llegado al fondo
  this.balls.getChildren().forEach((ball) => {
    if (ball.active && ball.y > getGameHeight(this) + 32) {
      if (isCollectibleBallKind(ball.getData('kind'))) {
        ball.destroy();
        if (!isShieldActive(this)) {
          loseLife(this);
        }
        if (state === 'playing') {
          playBadSound(this);
        }
      } else {
        ball.destroy();
      }
    } else if (ball.active && isAsteroidKind(ball.getData('kind'))) {
      wrapAsteroidHorizontally(this, ball);
    }
  });
}

function moveShipTo(scene, x) {
  const y = getShipY(scene);
  const previousX = scene.ship.x;
  const deltaX = x - previousX;
  scene.ship.setPosition(x, y);
  scene.ship.body.reset(x, y);
  if (Math.abs(deltaX) > 0.4 && state === 'playing') {
    scene.shipTargetAngle = Phaser.Math.Clamp(deltaX * 0.75, -SHIP_MAX_TILT, SHIP_MAX_TILT);
    scene.lastShipMoveAt = scene.time ? scene.time.now : 0;
  }
  updateEnergyRefinerModule(scene);
  updateShieldBubble(scene);
}

function updateShipTilt(scene) {
  if (!scene.ship) return;

  const now = scene.time ? scene.time.now : 0;
  if (!scene.lastShipMoveAt || now - scene.lastShipMoveAt > SHIP_TILT_IDLE_DELAY) {
    scene.shipTargetAngle = 0;
  }

  const targetAngle = scene.shipTargetAngle || 0;
  scene.ship.setAngle(Phaser.Math.Linear(scene.ship.angle || 0, targetAngle, SHIP_TILT_SMOOTHING));
  if (Math.abs(scene.ship.angle) < 0.05 && targetAngle === 0) {
    scene.ship.setAngle(0);
  }
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

  if (isWaveCountdownActive(scene)) {
    scene.ship.setTexture('ship');
  } else if (scene.activeScoreBooster) {
    scene.ship.setTexture('purpleShip');
  } else if (scene.activeShieldBooster) {
    scene.ship.setTexture('blueShip');
  } else {
    scene.ship.setTexture('ship');
  }
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
  scene.energyRefinerModule.fillRoundedRect(x - 24, y - 5, 48, 10, 5);
  scene.energyRefinerModule.fillStyle(0xffffff, 0.92);
  scene.energyRefinerModule.fillCircle(x, y, 5 + energyRefinerLevel);
  scene.energyRefinerModule.lineStyle(2, 0xfff0a8, 0.75);
  scene.energyRefinerModule.strokeCircle(x, y, 8 + energyRefinerLevel * 2);
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
    { x, y: y - 15 },
    { x: x + 30, y: y - 9 },
    { x: x + 64, y: y + 11 },
    { x: x + 38, y: y + 16 },
    { x, y: y + 16 },
    { x: x - 38, y: y + 16 },
    { x: x - 64, y: y + 11 },
    { x: x - 30, y: y - 9 },
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

function createBackground(scene) {
  const width = getGameWidth(scene);
  const height = getGameHeight(scene);
  const layer = scene.backgroundLayer || scene.add.container(0, 0);

  layer.removeAll(true);
  layer.add(scene.add.rectangle(0, 0, width, height, 0x040714).setOrigin(0));
  ensureStarfieldTextures(scene);

  scene.starfieldLayers = STARFIELD_LAYERS.map((starLayer) => {
    const tile = scene.add.tileSprite(0, 0, width, height, starLayer.key).setOrigin(0);
    tile.setAlpha(starLayer.alpha);
    tile.setBlendMode(Phaser.BlendModes.ADD);
    layer.add(tile);
    return { tile, baseSpeedX: starLayer.speedX, baseSpeedY: starLayer.speedY };
  });
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

  if (scene.scoreText) {
    scene.scoreText.setPosition(42, 43);
  }

  if (scene.scorePanel) {
    scene.scorePanel.setPosition(24, HUD_TOP).setSize(width - 48, HUD_HEIGHT);
  }

  if (scene.scoreAccent) {
    scene.scoreAccent.setPosition(24, HUD_TOP).setSize(3, HUD_HEIGHT);
  }

  if (scene.playerLevelText) {
    scene.playerLevelText.setPosition(42, 28);
  }

  if (scene.levelText) {
    scene.levelText.setPosition(24, height - 42);
  }

  if (scene.boosterLevelText) {
    scene.boosterLevelText.setPosition(24, height - 26);
  }

  if (scene.livesText) {
    scene.livesText.setPosition(width - 42, 35);
  }

  if (scene.boosterBarBackground && scene.boosterBarFill) {
    const barWidth = width - 48;
    scene.boosterBarBackground.setPosition(24, BOOSTER_BAR_Y).setSize(barWidth, 7);
    scene.boosterBarFill.setPosition(24, BOOSTER_BAR_Y);
    const activeTimedBooster = getActiveCountdown(scene);
    const boosterProgress = activeTimedBooster
      ? Math.max(0, (activeTimedBooster.endsAt - scene.time.now) / activeTimedBooster.duration)
      : 0;
    updateBoosterBar(scene, boosterProgress);
  }

  if (scene.upgradeBarBackground && scene.upgradeBarFill) {
    const barWidth = width - 48;
    scene.upgradeBarBackground.setPosition(24, 8).setSize(barWidth, 9);
    scene.upgradeBarFill.setPosition(24, 8);
    if (scene.upgradeProgressText) {
      scene.upgradeProgressText.setPosition(centerX, 8);
    }
    updateUpgradeBar(scene);
  }

  if (scene.upgradeStatusContainer) {
    scene.upgradeStatusContainer.setPosition(24, UPGRADE_ICON_Y);
    updateUpgradeStatusIcons(scene);
  }

  if (scene.ship) {
    const x = clampShipX(scene, scene.ship.x || centerX);
    refreshShipSize(scene);
    moveShipTo(scene, x);
  }

  if (scene.pauseOverlay) {
    scene.pauseOverlay.setPosition(centerX, centerY);
    fitPanelToContents(scene.pauseOverlay.panelBackground, scene.pauseOverlay.panelItems, 34, 28);
  }

  if (scene.upgradeOverlay) {
    scene.upgradeOverlay.setPosition(centerX, centerY);
    fitPanelToContents(scene.upgradeOverlay.panelBackground, scene.upgradeOverlay.panelItems, 28, 26);
  }

}

// --- Menu principal ---

function createPanelBackground(scene, alpha = 0.94, strokeColor = UI_PANEL_STROKE) {
  return scene.add
    .rectangle(0, 0, 10, 10, UI_PANEL_COLOR, alpha)
    .setStrokeStyle(1, strokeColor, 0.34);
}

function createActionButton(scene, x, y, label, options = {}) {
  const width = options.width || 190;
  const height = options.height || 52;
  const color = options.color || 0x76ffe8;
  const hoverColor = options.hoverColor || 0xa4fff0;
  const textColor = options.textColor || '#08111f';
  const fontSize = options.fontSize || '22px';
  const container = scene.add.container(x, y);
  const shadow = scene.add.rectangle(3, 4, width, height, 0x000000, 0.28);
  const background = scene.add.rectangle(0, 0, width, height, color, 1)
    .setStrokeStyle(1, 0xffffff, 0.42);
  const text = scene.add.text(0, 0, label, {
    fontFamily: FONT_FAMILY,
    fontSize,
    fill: textColor,
    fontStyle: 'bold',
  }).setOrigin(0.5);

  container.add([shadow, background, text]);
  container.setSize(width, height);
  container.setInteractive(
    new Phaser.Geom.Rectangle(-width / 2, -height / 2, width, height),
    Phaser.Geom.Rectangle.Contains
  );
  background.setInteractive({ useHandCursor: true });
  text.setInteractive({ useHandCursor: true });
  container.background = background;
  container.buttonText = text;
  container.baseColor = color;
  container.hoverColor = hoverColor;
  const triggerButton = () => {
    const now = scene.time ? scene.time.now : Date.now();
    if (container.lastTriggeredAt && now - container.lastTriggeredAt < 80) return;
    container.lastTriggeredAt = now;
    playButtonSound(scene);
    container.emit('buttondown');
  };
  container.on('pointerdown', triggerButton);
  container.on('pointerover', () => background.setFillStyle(hoverColor, 1));
  container.on('pointerout', () => background.setFillStyle(color, 1));
  background.on('pointerdown', triggerButton);
  text.on('pointerdown', triggerButton);
  background.on('pointerover', () => container.emit('pointerover'));
  text.on('pointerover', () => container.emit('pointerover'));
  background.on('pointerout', () => container.emit('pointerout'));
  text.on('pointerout', () => container.emit('pointerout'));
  return container;
}

function createMenu(scene) {
  const container = scene.add.container(getGameWidth(scene) / 2, getGameHeight(scene) / 2);

  const background = createPanelBackground(scene, 0.92);
  const eyebrow = scene.add.text(0, -138, 'RECOLECTA Y SOBREVIVE', {
    fontFamily: FONT_FAMILY,
    fontSize: '12px',
    fill: '#76ffe8',
    fontStyle: 'bold',
  }).setOrigin(0.5);

  const title = scene.add
    .text(0, -96, 'HORIZONTE INFINITO', {
      fontFamily: FONT_FAMILY,
      fontSize: '31px',
      fill: '#ffffff',
      fontStyle: 'bold',
      align: 'center',
    })
    .setOrigin(0.5);

  const instructions = scene.add
    .text(0, -12, 'Arrastra la nave, recolecta orbes de energía,\nconsigue mejoras y evita las amenazas.', {
      fontFamily: FONT_FAMILY,
      fontSize: '15px',
      fill: '#b9cdec',
      align: 'center',
      lineSpacing: 7,
    })
    .setOrigin(0.5);

  const playButton = createActionButton(scene, 0, 92, 'Jugar', {
    width: 198,
    height: 54,
    fontSize: '24px',
  });
  playButton.on('buttondown', () => startGame.call(scene));

  container.add([background, eyebrow, title, instructions, playButton]);
  container.setDepth(UI_DEPTH);
  fitPanelToContents(background, [eyebrow, title, instructions, playButton], 34, 32);
  container.panelBackground = background;
  container.panelItems = [eyebrow, title, instructions, playButton];
  return container;
}

// --- Game Over ---

function createGameOver(scene) {
  const container = scene.add.container(getGameWidth(scene) / 2, getGameHeight(scene) / 2).setVisible(false);

  const background = createPanelBackground(scene, 0.94, 0xff5f7a);

  const title = scene.add
    .text(0, -112, 'Misión fallida', {
      fontFamily: FONT_FAMILY,
      fontSize: '28px',
      fill: '#ff8090',
      fontStyle: 'bold',
    })
    .setOrigin(0.5);

  const finalScore = scene.add
    .text(0, -50, 'Puntuación: 0', {
      fontFamily: FONT_FAMILY,
      fontSize: '24px',
      fill: '#ffffff',
      fontStyle: 'bold',
    })
    .setOrigin(0.5);

  const retryButton = createActionButton(scene, 0, 32, 'REINTENTAR', {
    width: 216,
    height: 52,
    fontSize: '22px',
  });
  const menuButton = createActionButton(scene, 0, 104, 'MENU', {
    width: 168,
    height: 44,
    color: 0x263859,
    hoverColor: 0x38527c,
    textColor: '#ffffff',
    fontSize: '18px',
  });

  retryButton.on('buttondown', () => startGame.call(scene));
  menuButton.on('buttondown', () => showMenu.call(scene));

  container.add([background, title, finalScore, retryButton, menuButton]);
  container.setDepth(UI_DEPTH);
  fitPanelToContents(background, [title, finalScore, retryButton, menuButton], 34, 30);
  container.finalScore = finalScore;
  container.panelBackground = background;
  container.panelItems = [title, finalScore, retryButton, menuButton];
  return container;
}

function createPauseOverlay(scene) {
  const container = scene.add.container(getGameWidth(scene) / 2, getGameHeight(scene) / 2).setVisible(false);
  const background = createPanelBackground(scene, 0.9);
  const title = scene.add.text(0, -28, 'PAUSA', {
    fontFamily: FONT_FAMILY,
    fontSize: '36px',
    fill: '#ffffff',
    fontStyle: 'bold',
  }).setOrigin(0.5);
  const instructions = scene.add.text(0, 28, 'Toca la nave para continuar', {
    fontFamily: FONT_FAMILY,
    fontSize: '18px',
    fill: '#b9cdec',
    align: 'center',
  }).setOrigin(0.5);

  container.add([background, title, instructions]);
  container.setDepth(UI_DEPTH);
  fitPanelToContents(background, [title, instructions], 34, 28);
  container.panelBackground = background;
  container.panelItems = [title, instructions];
  return container;
}

function createUpgradeOverlay(scene) {
  const container = scene.add.container(getGameWidth(scene) / 2, getGameHeight(scene) / 2).setVisible(false);
  const background = createPanelBackground(scene, 0.95, 0xffd84d);
  const title = scene.add.text(0, -134, 'MEJORA DISPONIBLE', {
    fontFamily: FONT_FAMILY,
    fontSize: '22px',
    fill: '#ffd84d',
    fontStyle: 'bold',
  }).setOrigin(0.5);

  const firstButton = createUpgradeButton(scene, 0, -52, '', '#76ffe8');
  const secondButton = createUpgradeButton(scene, 0, 62, '', '#ffd84d');

  firstButton.on('pointerdown', () => chooseUpgrade(scene, firstButton.getData('upgradeKind')));
  secondButton.on('pointerdown', () => chooseUpgrade(scene, secondButton.getData('upgradeKind')));

  container.add([background, title, firstButton, secondButton]);
  container.setDepth(UI_DEPTH);
  container.panelBackground = background;
  container.panelItems = [title, firstButton, secondButton];
  container.upgradeButtons = {
    first: firstButton,
    second: secondButton,
  };
  fitPanelToContents(background, container.panelItems, 28, 26);
  return container;
}

function createUpgradeButton(scene, x, y, label, color) {
  const button = scene.add.text(x, y, label, {
    fontFamily: FONT_FAMILY,
    fontSize: '15px',
    fill: '#08111f',
    backgroundColor: color,
    align: 'center',
    fixedWidth: 310,
    fixedHeight: 88,
    wordWrap: { width: 276, useAdvancedWrap: true },
    padding: { x: 18, y: 12 },
  }).setOrigin(0.5).setInteractive({ useHandCursor: true });
  button.setLineSpacing(4);

  button.on('pointerdown', () => playButtonSound(scene));
  button.on('pointerover', () => button.setAlpha(0.86));
  button.on('pointerout', () => button.setAlpha(1));
  return button;
}

function fitPanelToContents(background, items, paddingX, paddingY) {
  const bounds = items.reduce(
    (area, item) => {
      const itemBounds = item.getBounds();
      return {
        left: Math.min(area.left, itemBounds.left),
        right: Math.max(area.right, itemBounds.right),
        top: Math.min(area.top, itemBounds.top),
        bottom: Math.max(area.bottom, itemBounds.bottom),
      };
    },
    { left: Infinity, right: -Infinity, top: Infinity, bottom: -Infinity }
  );

  background.setSize(bounds.right - bounds.left + paddingX * 2, bounds.bottom - bounds.top + paddingY * 2);
}

function fitScorePanel(scene) {
  if (scene.scorePanel) {
    scene.scorePanel.setVisible(true);
    scene.scorePanel.setPosition(24, HUD_TOP);
    scene.scorePanel.setSize(getGameWidth(scene) - 48, HUD_HEIGHT);
  }
  if (scene.scoreAccent) {
    scene.scoreAccent.setVisible(true);
    scene.scoreAccent.setPosition(24, HUD_TOP);
    scene.scoreAccent.setSize(3, HUD_HEIGHT);
  }
}

function setUiDepth(scene) {
  [
    scene.scorePanel,
    scene.scoreAccent,
    scene.scoreText,
    scene.playerLevelText,
    scene.levelText,
    scene.boosterLevelText,
    scene.livesText,
    scene.boosterBarBackground,
    scene.boosterBarFill,
    scene.upgradeBarBackground,
    scene.upgradeBarFill,
    scene.upgradeProgressText,
    scene.upgradeStatusContainer,
    scene.menuContainer,
    scene.gameOverContainer,
    scene.pauseOverlay,
    scene.upgradeOverlay,
  ].forEach((item) => {
    if (item) item.setDepth(UI_DEPTH);
  });

  if (scene.shieldBubble) scene.shieldBubble.setDepth(SHIP_DEPTH + 1);
  if (scene.energyRefinerModule) scene.energyRefinerModule.setDepth(SHIP_DEPTH + 2);
}

function setHudVisible(scene, visible) {
  [
    scene.scorePanel,
    scene.scoreAccent,
    scene.scoreText,
    scene.playerLevelText,
    scene.levelText,
    scene.boosterLevelText,
    scene.upgradeBarBackground,
    scene.upgradeBarFill,
    scene.upgradeProgressText,
    scene.upgradeStatusContainer,
  ].forEach((item) => {
    if (item) item.setVisible(visible);
  });
}

// --- Control de estados ---

function showMenu() {
  state = 'menu';
  isDraggingShip = false;
  this.input.setDefaultCursor('default');
  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }
  resetTimedBoosters(this);
  resetRedWave(this);
  resetAsteroidWave(this);
  resetBossWave(this);
  this.resumeSpawnDelay = null;
  stopBackgroundMusic(this);
  this.balls.clear(true, true);
  this.menuContainer.setVisible(true);
  this.gameOverContainer.setVisible(false);
  this.pauseOverlay.setVisible(false);
  this.upgradeOverlay.setVisible(false);
  this.livesText.setVisible(false);
  resetCounters.call(this);
  setHudVisible(this, false);
}

function startGame() {
  state = 'playing';
  isDraggingShip = false;
  this.input.setDefaultCursor('default');
  this.menuContainer.setVisible(false);
  this.gameOverContainer.setVisible(false);
  this.pauseOverlay.setVisible(false);
  this.upgradeOverlay.setVisible(false);
  setHudVisible(this, true);
  this.livesText.setVisible(true);
  this.balls.clear(true, true);
  resetCounters.call(this);
  resetTimedBoosters(this);
  resetRedWave(this);
  resetAsteroidWave(this);
  resetBossWave(this);
  this.resumeSpawnDelay = null;

  // Reposicionar nave al centro
  const shipX = getGameWidth(this) / 2;
  moveShipTo(this, shipX);

  // Primera bola inmediata, luego spawn periodico
  spawnBall(this);
  scheduleNextSpawn(this);
  restartBackgroundMusic(this);
}

function endGame() {
  if (state !== 'playing') return; // Evitar llamadas dobles
  state = 'gameover';
  isDraggingShip = false;
  this.input.setDefaultCursor('default');

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }
  resetTimedBoosters(this);
  resetRedWave(this);
  resetAsteroidWave(this);
  resetBossWave(this);
  this.resumeSpawnDelay = null;
  stopNonMusicAudio(this);
  playBackgroundMusic(this);
  this.balls.clear(true, true);
  this.livesText.setVisible(false);
  setHudVisible(this, false);
  this.pauseOverlay.setVisible(false);
  this.upgradeOverlay.setVisible(false);
  this.gameOverContainer.finalScore.setText('Puntuación: ' + score);
  fitPanelToContents(
    this.gameOverContainer.panelBackground,
    this.gameOverContainer.panelItems,
    34,
    30
  );
  this.gameOverContainer.setVisible(true);
}

function resetCounters() {
  score = 0;
  ballsCaught = 0;
  currentGravity = BASE_GRAVITY;
  currentBoosterGravity = Math.round(BASE_GRAVITY * BOOSTER_GRAVITY_RATIO);
  currentSpawnDelay = INITIAL_SPAWN_DELAY;
  maxLives = INITIAL_HEART_CAPACITY;
  lives = maxLives;
  levelProgressScore = 0;
  playerLevel = 0;
  nextUpgradeScore = getLevelRequirement(playerLevel);
  magnetLevel = 0;
  lifeBoosterLevel = 0;
  shieldBoosterLevel = 0;
  scoreBoosterLevel = 0;
  energyRefinerLevel = 0;
  playerTrailTimer = 0;
  enemyTrailTimer = 0;
  energyRefinerPassiveTimer = 0;
  this.nextRedWaveEligibleAt = 0;
  this.nextAsteroidWaveEligibleAt = 0;
  this.obreraSpawnsUnlocked = false;
  this.asteroidSpawnsUnlocked = false;
  this.travelSentinelUnlocked = false;
  this.nextTravelSentinelEligibleAt = 0;
  this.pendingBossWave = null;
  resetBossWave(this);
  this.scoreText.setText('PUNTOS 0');
  updatePlayerLevelText(this);
  updateSpeedTexts(this);
  updateUpgradeBar(this);
  updateUpgradeStatusIcons(this);
  updateLivesText(this);
  setShipTextureForCurrentState(this);
  updateEnergyRefinerModule(this);
  fitScorePanel(this);
}

function updateLivesText(scene) {
  if (!scene.livesText) return;

  scene.livesText.removeAll(true);
  const spacing = 22;
  const activeColor = isShieldActive(scene) ? '#4da3ff' : '#4dff88';
  for (let i = 0; i < maxLives; i += 1) {
    const isFull = i < lives;
    const heart = scene.add.text(-((maxLives - 1 - i) * spacing), 0, '\u2665', {
      fontFamily: FONT_FAMILY,
      fontSize: '24px',
      fill: isFull ? activeColor : '#9aa3ad',
      fontStyle: 'bold',
      stroke: '#4dff88',
      strokeThickness: isFull ? 0 : 2,
    }).setOrigin(1, 0);
    heart.setAlpha(isFull ? 1 : 0.42);
    scene.livesText.add(heart);
  }
}

function loseLife(scene) {
  lives = Math.max(0, lives - 1);
  updateLivesText(scene);

  if (lives === 0) {
    endGame.call(scene);
  }
}

function takeDirectDamage(scene) {
  playBadSound(scene);
  flashPlayerShip(scene);
  loseLife(scene);
}

function flashPlayerShip(scene) {
  if (!scene.ship) return;
  scene.tweens.add({
    targets: scene.ship,
    alpha: 0.35,
    duration: 70,
    yoyo: true,
    repeat: 2,
    ease: 'Sine.easeInOut',
    onComplete: () => scene.ship.setAlpha(1),
  });
}

function gainLife(scene) {
  lives = Math.min(maxLives, lives + getLifeBoosterHealAmount());
  updateLivesText(scene);
}

function scheduleNextSpawn(scene, delayOverride = null) {
  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  if (scene.activeRedWave && !scene.activeRedWave.isSpawningDamageBoosters) {
    return;
  }

  if (scene.activeAsteroidWave && !scene.activeAsteroidWave.isSpawningAsteroids) {
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

function isBlockingBossWave(scene) {
  return Boolean(scene.activeBossWave && !scene.activeBossWave.isTravelEncounter && !scene.activeBossWave.isSpawningEnemies);
}

function pauseGame() {
  if (state !== 'playing') return;
  state = 'paused';

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  pauseFallingObjects(this);
  pauseTimedGameplay(this);

  pauseCurrentMusic(this);
  this.pauseOverlay.setVisible(true);
}

function resumeGame() {
  if (state !== 'paused') return;
  state = 'playing';
  this.pauseOverlay.setVisible(false);

  resumeFallingObjects(this);
  resumeTimedGameplay(this);

  scheduleNextSpawn(this, this.resumeSpawnDelay || null);
  this.resumeSpawnDelay = null;
  resumeCurrentMusic(this);
}

function pauseTimedGameplay(scene) {
  scene.tweens.pauseAll();
  [scene.activeScoreBooster, scene.activeShieldBooster, scene.activeRedWave, scene.activeAsteroidWave, scene.activeBossWave]
    .forEach((countdown) => pauseCountdown(scene, countdown));

  [scene.waveStartEvent, scene.waveResumeEvent, scene.bossAttackEvent, scene.bossLaserEvent, scene.bossLaserClearEvent, scene.bossEnemySpawnEvent].forEach((event) => {
    if (event) event.paused = true;
  });
  if (scene.bossEnterTween) scene.bossEnterTween.pause();
  if (scene.bossExitTween) scene.bossExitTween.pause();

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
  [scene.activeScoreBooster, scene.activeShieldBooster, scene.activeRedWave, scene.activeAsteroidWave, scene.activeBossWave]
    .forEach((countdown) => resumeCountdown(scene, countdown));

  [scene.waveStartEvent, scene.waveResumeEvent, scene.bossAttackEvent, scene.bossLaserEvent, scene.bossLaserClearEvent, scene.bossEnemySpawnEvent].forEach((event) => {
    if (event) event.paused = false;
  });
  if (scene.bossEnterTween) scene.bossEnterTween.resume();
  if (scene.bossExitTween) scene.bossExitTween.resume();

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

  if (scene.ship) {
    refreshShipSize(scene);
    moveShipTo(scene, clampShipX(scene, scene.ship.x));
  }

  updateShieldBubble(scene);

  if (scene.boosterBarBackground && scene.boosterBarFill) {
    scene.boosterBarBackground.setVisible(false);
    scene.boosterBarFill.setVisible(false);
    scene.boosterBarFill.setScale(1, 1);
  }
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

function resetAsteroidWave(scene) {
  scene.activeAsteroidWave = null;
  clearWaveTimers(scene);
  clearBossCue(scene);

  if (scene.ship) {
    setShipTextureForCurrentState(scene);
    refreshShipSize(scene);
    moveShipTo(scene, clampShipX(scene, scene.ship.x));
  }

  if (scene.boosterBarBackground && scene.boosterBarFill && !getActiveCountdown(scene)) {
    scene.boosterBarBackground.setVisible(false);
    scene.boosterBarFill.setVisible(false);
    scene.boosterBarFill.setFillStyle(0x76ffe8, 1);
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
  if (scene.activeAsteroidWave && scene.activeAsteroidWave.hasStarted) return scene.activeAsteroidWave;
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

function getTimedBoosterDuration(level) {
  if (level <= 0) return MIN_TIMED_BOOSTER_DURATION;
  const step = (MAX_TIMED_BOOSTER_DURATION - MIN_TIMED_BOOSTER_DURATION) / (MAX_UPGRADE_LEVEL - 1);
  return Math.round(MIN_TIMED_BOOSTER_DURATION + (level - 1) * step);
}

function getLifeBoosterHealAmount() {
  return Math.max(1, lifeBoosterLevel);
}

function getEnergyBallValue() {
  if (energyRefinerLevel <= 0) return 1;
  return Math.min(5, energyRefinerLevel + 1);
}

function addScore(scene, points, animate = true) {
  score += points;
  levelProgressScore += points;
  scene.scoreText.setText('PUNTOS ' + score);
  fitScorePanel(scene);
  updateUpgradeBar(scene, animate);
}

function updateEnergyRefinerPassive(scene, delta) {
  if (energyRefinerLevel < MAX_UPGRADE_LEVEL) return;

  energyRefinerPassiveTimer += delta;
  while (energyRefinerPassiveTimer >= 1000) {
    energyRefinerPassiveTimer -= 1000;
    addScore(scene, 1, false);
  }
  maybeOpenUpgradeChoice(scene);
}

function updateShipPropulsion(scene, delta) {
  if (!scene.ship) return;

  playerTrailTimer += delta;
  if (playerTrailTimer < 70) return;
  playerTrailTimer = 0;

  [-22, 22].forEach((offsetX) => {
    const particle = scene.add.image(
      scene.ship.x + offsetX + Phaser.Math.Between(-3, 3),
      scene.ship.y + 17 + Phaser.Math.Between(-1, 2),
      'goldTrailParticle'
    );
    particle
      .setDepth(SHIP_DEPTH - 1)
      .setTint(0xffd84d)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setScale(Phaser.Math.FloatBetween(0.75, 1.15))
      .setAlpha(0.78);

    scene.tweens.add({
      targets: particle,
      y: particle.y + Phaser.Math.Between(12, 22),
      x: particle.x + Phaser.Math.Between(-5, 5),
      scale: 0.15,
      alpha: 0,
      duration: Phaser.Math.Between(220, 340),
      ease: 'Sine.easeOut',
      onComplete: () => particle.destroy(),
    });
  });
}

function updateEnemyPropulsion(scene, delta) {
  if (!scene.balls) return;

  enemyTrailTimer += delta;
  if (enemyTrailTimer < 90) return;
  enemyTrailTimer = 0;

  scene.balls.getChildren().forEach((enemy) => {
    if (!enemy.active || enemy.getData('kind') !== 'damageBooster') return;

    const particle = scene.add.image(
      enemy.x + Phaser.Math.Between(-4, 4),
      enemy.y - 18 + Phaser.Math.Between(-2, 2),
      'goldTrailParticle'
    );
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
  });
}

function activateScoreBooster(scene) {
  const duration = getTimedBoosterDuration(scoreBoosterLevel);
  scoreMultiplier = 2;
  scene.activeScoreBooster = {
    endsAt: scene.time.now + duration,
    duration,
  };

  setShipTextureForCurrentState(scene);
  applyScoreBoosterBallColor(scene);
  playPurpleBoosterMusic(scene);

  if (scene.boosterBarBackground && scene.boosterBarFill) {
    scene.boosterBarBackground.setVisible(true);
    scene.boosterBarFill.setVisible(true);
    scene.boosterBarFill.setFillStyle(0x9b5cff, 1);
    updateBoosterBar(scene, 1);
  }
}

function activateShieldBooster(scene) {
  const duration = getTimedBoosterDuration(shieldBoosterLevel);
  scene.activeShieldBooster = {
    endsAt: scene.time.now + duration,
    duration,
  };

  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));
  updateShieldBubble(scene);
  updateLivesText(scene);

  if (scene.boosterBarBackground && scene.boosterBarFill) {
    scene.boosterBarBackground.setVisible(true);
    scene.boosterBarFill.setVisible(true);
    scene.boosterBarFill.setFillStyle(0x4da3ff, 1);
    updateBoosterBar(scene, 1);
  }
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
  playBackgroundMusic(scene);
  if (scene.boosterBarBackground && scene.boosterBarFill) {
    scene.boosterBarBackground.setVisible(false);
    scene.boosterBarFill.setVisible(false);
    scene.boosterBarFill.setFillStyle(0x76ffe8, 1);
  }
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
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));
  updateShieldBubble(scene);
  updateLivesText(scene);
  if (scene.boosterBarBackground && scene.boosterBarFill) {
    scene.boosterBarBackground.setVisible(false);
    scene.boosterBarFill.setVisible(false);
    scene.boosterBarFill.setFillStyle(0x76ffe8, 1);
  }
}

function activateRedWave(scene, bossConfig = getBossConfigForLevel(1)) {
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
}

function updateRedWave(scene) {
  const redWave = scene.activeRedWave;
  if (!redWave) return;
  if (!redWave.hasStarted) return;

  const remaining = Math.max(0, redWave.endsAt - scene.time.now);
  if (remaining > 0) return;

  finishWaveSpawning(scene, redWave, 'red');
}

function activateAsteroidWave(scene, bossConfig = getBossConfigForLevel(3)) {
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

function hideWaveBar(scene) {
  if (!scene.boosterBarBackground || !scene.boosterBarFill) return;
  scene.boosterBarBackground.setVisible(false);
  scene.boosterBarFill.setVisible(false);
  scene.boosterBarFill.setFillStyle(0x76ffe8, 1);
}

function updateAsteroidWave(scene) {
  const asteroidWave = scene.activeAsteroidWave;
  if (!asteroidWave) return;
  if (!asteroidWave.hasStarted) return;

  const remaining = Math.max(0, asteroidWave.endsAt - scene.time.now);
  if (remaining > 0) return;

  finishWaveSpawning(scene, asteroidWave, 'asteroid');
}

function activateBossWave(scene, bossConfig = getBossConfigForLevel(2)) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activeBossWave = {
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

function activateTravelSentinel(scene) {
  if (scene.activeBossWave || state !== 'playing') return;

  playBackgroundMusic(scene);
  scene.activeBossWave = {
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
  } else if (bossConfig.kind === 'asteroid') {
    activateAsteroidWave(scene, bossConfig);
  } else if (bossConfig.kind === 'boss') {
    activateBossWave(scene, bossConfig);
  }
}

function updateBossWave(scene) {
  const bossWave = scene.activeBossWave;
  if (!bossWave || !bossWave.hasStarted) return;

  if (scene.bossLaser && !scene.bossLaser.getData('hasDamagedShip') && isLaserTouchingShip(scene, scene.bossLaser)) {
    scene.bossLaser.setData('hasDamagedShip', true);
    if (!isShieldActive(scene)) {
      takeDirectDamage(scene);
    } else {
      playBadSound(scene);
      flashPlayerShip(scene);
    }
  }
}

function startBossWave(scene) {
  const bossWave = scene.activeBossWave;
  if (!bossWave || bossWave.hasStarted) return;

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
  const bossWave = scene.activeBossWave;
  if (!bossWave || !scene.bossShip) return;

  scene.bossAttackEvent = null;
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
  const roomyCandidates = [];

  for (let attempt = 0; attempt < 24; attempt += 1) {
    const x = Phaser.Math.Between(min, max);
    if (blockedX === undefined || Math.abs(x - blockedX) >= BOSS_LASER_MIN_X_GAP) {
      roomyCandidates.push(x);
    }
  }

  if (roomyCandidates.length) {
    return Phaser.Utils.Array.GetRandom(roomyCandidates);
  }

  const leftX = Phaser.Math.Clamp((blockedX || getGameWidth(scene) / 2) - BOSS_LASER_MIN_X_GAP, min, max);
  const rightX = Phaser.Math.Clamp((blockedX || getGameWidth(scene) / 2) + BOSS_LASER_MIN_X_GAP, min, max);
  return Math.abs(leftX - blockedX) > Math.abs(rightX - blockedX) ? leftX : rightX;
}

function showBossLaserWarning(scene, laserX) {
  clearBossWarningParticles(scene);
  scene.bossWarningParticles = [];

  for (let i = 0; i < 34; i += 1) {
    const particle = scene.add.image(
      laserX + Phaser.Math.Between(-15, 15),
      172 + Phaser.Math.Between(-10, 22),
      'goldTrailParticle'
    );
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
  scene.bossLaser.setData('hasDamagedShip', false);
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
  const wave = waveKind === 'red' ? scene.activeRedWave : scene.activeAsteroidWave;
  if (!wave || wave.hasStarted) return;

  wave.hasStarted = true;
  wave.endsAt = scene.time.now + wave.duration;
  if (waveKind === 'red') {
    wave.isSpawningDamageBoosters = true;
  } else {
    wave.isSpawningAsteroids = true;
  }

  setShipTextureForCurrentState(scene);
  refreshShipSize(scene);
  moveShipTo(scene, clampShipX(scene, scene.ship.x));

  hideWaveBar(scene);

  spawnBall(scene);
  scheduleNextSpawn(scene);
}

function showBossCueBand(scene, waveKind, cueKind, onCross) {
  clearBossCue(scene);

  const width = getGameWidth(scene) + 96;
  const height = BOSS_CUE_BAND_HEIGHT;
  const centerX = getGameWidth(scene) / 2;
  const shipY = getShipY(scene);
  const baseColor = cueKind === 'safe' ? 0x26f07a : 0xffd84d;
  const bossName = getWaveBossName(scene, waveKind);
  const container = scene.add.container(centerX, -height);
  const background = scene.add.rectangle(0, 0, width, height, baseColor, 0.24)
    .setStrokeStyle(2, baseColor, 0.7);
  const stripes = scene.add.graphics();
  const labelText = cueKind === 'safe' ? 'CONTINUAR VIAJE' : bossName.toUpperCase();
  const label = scene.add.text(0, 0, labelText, {
    fontFamily: FONT_FAMILY,
    fontSize: '16px',
    fill: cueKind === 'safe' ? '#c7ffdc' : '#fff0a6',
    fontStyle: 'bold',
    stroke: '#050914',
    strokeThickness: 4,
  }).setOrigin(0.5, 0.5);

  stripes.fillStyle(0x050914, 0.48);
  for (let x = -width / 2 - height; x < width / 2 + height; x += 34) {
    stripes.fillPoints([
      { x, y: -height / 2 },
      { x: x + 18, y: -height / 2 },
      { x: x + 18 + height, y: height / 2 },
      { x: x + height, y: height / 2 },
    ], true);
  }

  container.add([background, stripes, label]);
  container.setDepth(FX_DEPTH + 10);
  container.setAlpha(0.92);
  container.setData('hasCrossedShip', false);
  scene.bossCueBand = container;

  scene.bossCueTween = scene.tweens.add({
    targets: container,
    y: shipY,
    duration: BOSS_CUE_DESCEND_DURATION,
    ease: 'Sine.easeInOut',
    onUpdate: () => {
      if (container.getData('hasCrossedShip')) return;
      if (container.y + height / 2 < shipY) return;
      container.setData('hasCrossedShip', true);
      if (cueKind === 'warning') {
        playRedWaveSound(scene);
      }
      if (onCross) onCross();
    },
    onComplete: () => {
      scene.bossCueTween = scene.tweens.add({
        targets: container,
        y: getGameHeight(scene) + height,
        alpha: 0,
        duration: 520,
        ease: 'Sine.easeIn',
        onComplete: () => clearBossCue(scene),
      });
    },
  });
}

function getWaveBossName(scene, waveKind) {
  if (waveKind === 'red' && scene.activeRedWave) return scene.activeRedWave.bossName || 'Enjambre';
  if (waveKind === 'asteroid' && scene.activeAsteroidWave) return scene.activeAsteroidWave.bossName || 'Cinturón';
  if (waveKind === 'boss' && scene.activeBossWave) return scene.activeBossWave.bossName || 'Centinela';
  return 'Jefe';
}

function clearBossCue(scene) {
  if (scene.bossCueTween) {
    scene.bossCueTween.stop();
    scene.bossCueTween = null;
  }
  if (scene.bossCueBand) {
    scene.bossCueBand.destroy();
    scene.bossCueBand = null;
  }
}

function finishWaveSpawning(scene, wave, waveKind) {
  if (wave.isDraining) {
    if (!hasFallingObjects(scene) && !scene.waveResumeEvent) {
      endWaveAfterPause(scene, waveKind);
    }
    return;
  }

  wave.isDraining = true;
  if (waveKind === 'red') {
    wave.isSpawningDamageBoosters = false;
  } else if (waveKind === 'asteroid') {
    wave.isSpawningAsteroids = false;
  }

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  if (!hasFallingObjects(scene)) {
    endWaveAfterPause(scene, waveKind);
  }
}

function endWaveAfterPause(scene, waveKind) {
  const currentWave = waveKind === 'red'
    ? scene.activeRedWave
    : waveKind === 'asteroid'
      ? scene.activeAsteroidWave
      : scene.activeBossWave;
  if (!currentWave) return;

  if (scene.boosterBarBackground && scene.boosterBarFill) {
    scene.boosterBarBackground.setVisible(false);
    scene.boosterBarFill.setVisible(false);
    scene.boosterBarFill.setFillStyle(0x76ffe8, 1);
  }

  if (waveKind === 'red') {
    scene.obreraSpawnsUnlocked = true;
    scene.activeRedWave = null;
  } else if (waveKind === 'asteroid') {
    scene.asteroidSpawnsUnlocked = true;
    scene.activeAsteroidWave = null;
  } else if (waveKind === 'boss') {
    if (currentWave.isTravelEncounter) {
      resetBossWave(scene);
      if (state === 'playing') scheduleNextSpawn(scene);
      return;
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
  return scene.balls
    .getChildren()
    .some((ball) => ball.active && ball.y <= getGameHeight(scene) + 32);
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

function updateBoosterBar(scene, progress) {
  const fullWidth = getGameWidth(scene) - 48;
  const width = Math.max(0, fullWidth * progress);
  scene.boosterBarFill.setSize(width, 7);
}

function updateUpgradeBar(scene, animate = false, onComplete = null) {
  if (!scene.upgradeBarFill) return;

  const fullWidth = getGameWidth(scene) - 48;
  const pointsTowardUpgrade = Phaser.Math.Clamp(levelProgressScore, 0, nextUpgradeScore);
  const width = fullWidth * (pointsTowardUpgrade / nextUpgradeScore);
  updateUpgradeProgressText(scene, pointsTowardUpgrade);

  if (scene.upgradeBarTween) {
    scene.upgradeBarTween.stop();
    scene.upgradeBarTween = null;
  }

  if (!animate) {
    scene.upgradeBarFill.setSize(width, 9);
    updateUpgradeProgressText(scene, pointsTowardUpgrade);
    if (onComplete) onComplete();
    return;
  }

  const tweenState = { width: scene.upgradeBarFill.width || 0 };
  scene.upgradeBarTween = scene.tweens.add({
    targets: tweenState,
    width,
    duration: UPGRADE_BAR_TWEEN_DURATION,
    ease: 'Sine.easeOut',
    onUpdate: () => scene.upgradeBarFill.setSize(tweenState.width, 9),
    onComplete: () => {
      scene.upgradeBarTween = null;
      scene.upgradeBarFill.setSize(width, 9);
      updateUpgradeProgressText(scene, pointsTowardUpgrade);
      if (onComplete) onComplete();
    },
  });
}

function updateUpgradeProgressText(scene, pointsTowardUpgrade = null) {
  if (!scene.upgradeProgressText) return;

  const progress = pointsTowardUpgrade === null
    ? Phaser.Math.Clamp(levelProgressScore, 0, nextUpgradeScore)
    : pointsTowardUpgrade;
  scene.upgradeProgressText.setText(Math.floor(progress) + '/' + nextUpgradeScore);
}

function maybeOpenUpgradeChoice(scene) {
  if (levelProgressScore < nextUpgradeScore || state !== 'playing') return;

  playLevelUpSound(scene);
  advancePlayerLevel(scene);

  while (levelProgressScore >= nextUpgradeScore && !hasAvailableUpgrades()) {
    advancePlayerLevel(scene);
    updateUpgradeBar(scene);
  }

  if (!hasAvailableUpgrades()) return;

  state = 'upgrading';
  isDraggingShip = false;
  scene.input.setDefaultCursor('default');

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  resetTimedBoosters(scene);
  resetRedWave(scene);
  resetAsteroidWave(scene);
  clearAllFallingObjects(scene);
  scene.availableUpgradeChoices = getRandomUpgradeChoices();
  updateUpgradeButtons(scene);
  updateUpgradeBar(scene, true, () => {
    if (state === 'upgrading') {
      scene.upgradeOverlay.setVisible(true);
    }
  });
}

function advancePlayerLevel(scene) {
  levelProgressScore = Math.max(0, levelProgressScore - nextUpgradeScore);
  playerLevel += 1;
  nextUpgradeScore = getLevelRequirement(playerLevel);
  scene.pendingBossWave = getBossConfigForLevel(playerLevel);
  increaseDifficulty(scene);
  updatePlayerLevelText(scene);
}

function getAvailableUpgradeKinds() {
  return ['lifeBooster', 'shieldBooster', 'scoreBooster', 'energyRefiner']
    .filter((upgradeKind) => getUpgradeLevel(upgradeKind) < MAX_UPGRADE_LEVEL);
}

function getRandomUpgradeChoices() {
  return Phaser.Utils.Array.Shuffle(getAvailableUpgradeKinds()).slice(0, 2);
}

function getUpgradeConfig(upgradeKind) {
  if (upgradeKind === 'lifeBooster') {
    return {
      label: 'Booster de vida',
      description: 'Orbes verdes. Nv 1 recupera 1 corazón; Nv 5 recupera 5.',
      color: '#4dff88',
    };
  }
  if (upgradeKind === 'shieldBooster') {
    return {
      label: 'Booster de escudo',
      description: 'Escudos azules. Bloquean daño de obreras, meteoritos y láseres.',
      color: '#4da3ff',
    };
  }
  if (upgradeKind === 'scoreBooster') {
    return {
      label: 'Booster de bonificación',
      description: 'Bonus morado. Los orbes de energía valen x2 durante más tiempo.',
      color: '#9b5cff',
    };
  }
  if (upgradeKind === 'energyRefiner') {
    return {
      label: 'Refinador de energía',
      description: 'Bolas valen 2-5 puntos. Nv 5: +1 punto/seg.',
      color: '#ffd84d',
    };
  }
  return { label: 'Mejora', description: '', color: '#76ffe8' };
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
  updateEnergyRefinerModule(scene);
  scene.upgradeOverlay.setVisible(false);
  scene.availableUpgradeChoices = null;

  if (scene.pendingBossWave) {
    const bossConfig = scene.pendingBossWave;
    scene.pendingBossWave = false;
    state = 'playing';
    activateLevelBoss(scene, bossConfig);
    return;
  }

  if (levelProgressScore >= nextUpgradeScore) {
    state = 'playing';
    maybeOpenUpgradeChoice(scene);
    return;
  }

  state = 'paused';
  scene.resumeSpawnDelay = UPGRADE_RESUME_DELAY;
  scene.pauseOverlay.setVisible(true);
}

function getUpgradeLevel(upgradeKind) {
  if (upgradeKind === 'lifeBooster') return lifeBoosterLevel;
  if (upgradeKind === 'shieldBooster') return shieldBoosterLevel;
  if (upgradeKind === 'scoreBooster') return scoreBoosterLevel;
  if (upgradeKind === 'energyRefiner') return energyRefinerLevel;
  return 0;
}

function updateUpgradeButtons(scene) {
  if (!scene.upgradeOverlay || !scene.upgradeOverlay.upgradeButtons) return;

  const choices = scene.availableUpgradeChoices || getRandomUpgradeChoices();
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
  if (!scene.upgradeStatusContainer) return;

  scene.upgradeStatusContainer.removeAll(true);
  let x = 0;
  if (lifeBoosterLevel > 0) {
    addUpgradeStatusIcon(scene, x, '+', lifeBoosterLevel, 0x4dff88);
    x += 48;
  }
  if (shieldBoosterLevel > 0) {
    addUpgradeStatusIcon(scene, x, 'S', shieldBoosterLevel, 0x4da3ff);
    x += 48;
  }
  if (scoreBoosterLevel > 0) {
    addUpgradeStatusIcon(scene, x, 'x2', scoreBoosterLevel, 0x9b5cff);
    x += 48;
  }
  if (energyRefinerLevel > 0) {
    addUpgradeStatusIcon(scene, x, 'E', energyRefinerLevel, 0xffd84d);
  }
}

function addUpgradeStatusIcon(scene, x, icon, level, color) {
  const square = scene.add.rectangle(x, 0, 44, 42, 0x10162a, 0.78)
    .setOrigin(0, 0)
    .setStrokeStyle(1, color, 0.8);
  const glow = scene.add.circle(x + 22, 14, 10, color, 0.22)
    .setStrokeStyle(1, color, 0.65);
  const iconText = scene.add.text(x + 22, 7, icon, {
    fontFamily: FONT_FAMILY,
    fontSize: icon.length > 1 ? '11px' : '14px',
    fill: '#ffffff',
    fontStyle: 'bold',
  }).setOrigin(0.5, 0);
  const levelText = scene.add.text(x + 22, 27, 'Nv ' + level, {
    fontFamily: FONT_FAMILY,
    fontSize: '10px',
    fill: '#dce7ff',
    fontStyle: 'bold',
  }).setOrigin(0.5, 0);

  scene.upgradeStatusContainer.add([square, glow, iconText, levelText]);
}

function setUpgradeButtonState(button, config, level) {
  const isMaxed = level >= MAX_UPGRADE_LEVEL;
  const nextLevel = Math.min(MAX_UPGRADE_LEVEL, level + 1);
  button.setAlpha(1);
  button.setText(
    config.label + (isMaxed ? ' MAX' : ' Nv. ' + nextLevel + '/' + MAX_UPGRADE_LEVEL) +
    '\n' + config.description
  );
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

  if (isShieldActive(scene) && isShieldBlockedKind(object.getData('kind'))) {
    return getDistanceToShieldCenter(scene, object) <= SHIELD_BUBBLE_RADIUS + getObjectCollisionRadius(object);
  }

  return getDistanceToShipHitbox(scene, object) <= getObjectCollisionRadius(object);
}

function getDistanceToShieldCenter(scene, object) {
  const distanceX = object.x - scene.ship.x;
  const distanceY = object.y - scene.ship.y;
  return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
}

function getObjectCollisionRadius(object) {
  const kind = object.getData('kind');
  if (kind === 'damageBooster') return 11;
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
  const isBooster = isBoosterKind(kind);
  const x = isAsteroidKind(kind)
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
  }
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

function setBallEnergyColor(ball, isPurple) {
  ball.clearTint();
  ball.setTexture(isPurple ? 'purpleBall' : 'goldBall');
  ball.setData('isPurpleEnergy', isPurple);
}

function setFallingObjectBody(object, kind) {
  if (kind === 'damageBooster') {
    object.body.setCircle(11, 13, 13);
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
  if (scene.activeRedWave && scene.activeRedWave.isSpawningDamageBoosters) return 'damageBooster';
  if (scene.activeBossWave && scene.activeBossWave.isSpawningEnemies) return 'damageBooster';
  if (scene.activeAsteroidWave && scene.activeAsteroidWave.isSpawningAsteroids) {
    return Math.random() < ASTEROID_WAVE_BIG_ASTEROID_CHANCE ? 'bigAsteroid' : 'asteroid';
  }

  const threatKind = getNextTravelThreatKind(scene);
  if (threatKind) return threatKind;
  const asteroidKind = getNextAsteroidKind(scene);
  if (asteroidKind) return asteroidKind;
  const boosterKind = getNextBoosterKind(scene);
  if (scene.activeBossWave && scene.activeBossWave.isTravelEncounter) return boosterKind;
  return boosterKind || 'ball';
}

function getNextTravelThreatKind(scene) {
  if (!scene.obreraSpawnsUnlocked || scene.activeRedWave || scene.activeAsteroidWave) return null;

  const chance = currentGravity >= MAX_BALL_GRAVITY
    ? CAPPED_SPEED_OBRERA_SPAWN_CHANCE
    : OBRERA_SPAWN_CHANCE;
  return Math.random() < chance ? 'damageBooster' : null;
}

function shouldStartTravelSentinel(scene) {
  if (!scene.travelSentinelUnlocked || scene.activeBossWave || scene.activeRedWave || scene.activeAsteroidWave) return false;
  if (scene.pendingBossWave || getActiveTimedBooster(scene)) return false;
  if (scene.time.now < scene.nextTravelSentinelEligibleAt) return false;
  if (Math.random() >= TRAVEL_SENTINEL_CHANCE) return false;

  return true;
}

function getNextAsteroidKind(scene) {
  if (!scene.asteroidSpawnsUnlocked || scene.activeRedWave || scene.activeAsteroidWave) return null;

  const chance = currentGravity >= MAX_BALL_GRAVITY
    ? CAPPED_SPEED_TRAVEL_ASTEROID_CHANCE
    : TRAVEL_ASTEROID_CHANCE;
  if (Math.random() >= chance) return null;
  return Math.random() < 0.24 ? 'bigAsteroid' : 'asteroid';
}

function getNextBoosterKind(scene) {
  if (hasFallingBooster(scene)) return null;

  const timedBoosterActive = getActiveTimedBooster(scene);
  const options = [
    { kind: 'scoreBooster', chance: timedBoosterActive || scoreBoosterLevel <= 0 ? 0 : SCORE_BOOSTER_CHANCE },
    { kind: 'shieldBooster', chance: timedBoosterActive || shieldBoosterLevel <= 0 ? 0 : SHIELD_BOOSTER_CHANCE },
    { kind: 'lifeBooster', chance: lifeBoosterLevel > 0 && lives < maxLives ? LIFE_BOOSTER_CHANCE : 0 },
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

function getTextureForKind(kind) {
  if (kind === 'bigAsteroid') return 'bigAsteroid';
  if (isAsteroidKind(kind)) return 'asteroid';
  if (kind === 'damageBooster') return 'enemyShipSmall';
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
  return kind === 'damageBooster' || isAsteroidKind(kind);
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
  currentGravity = Math.min(MAX_BALL_GRAVITY, Math.round(currentGravity * SPEED_INCREASE_MULTIPLIER));
  currentBoosterGravity = Math.round(currentGravity * BOOSTER_GRAVITY_RATIO);

  if (currentGravity > previousGravity) {
    currentSpawnDelay = getSpawnDelayForGravity(currentGravity);
  }

  updateSpeedTexts(scene);
  updateFallingObjectSpeeds(scene);
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
  scene.levelText.setText('VEL ' + multiplier + 'x');
  scene.boosterLevelText.setText('BOOST ' + boosterMultiplier + 'x');
  fitScorePanel(scene);
}

function updatePlayerLevelText(scene) {
  if (!scene.playerLevelText) return;
  scene.playerLevelText.setText('NIVEL ' + playerLevel);
}

function updateFallingObjectSpeeds(scene) {
  scene.balls.getChildren().forEach((ball) => {
    if (!ball.active) return;
    const kind = ball.getData('kind');
    ball.body.setVelocityX(getHorizontalVelocity(kind, scene, ball));
    ball.body.setVelocityY(getFallingVelocity(kind, scene, ball));
  });
}

function getFallingVelocity(kind, scene, object = null) {
  if (object && object.getData('fallVelocity')) {
    return object.getData('fallVelocity');
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
  ball.destroy();

  if (kind === 'damageBooster') {
    showAbsorbEffect(scene, x, y, kind, isPurpleEnergy);
    hitFeedbackShown = true;
    if (!isShieldActive(scene)) {
      takeDirectDamage(scene);
    } else {
      playShieldBlockSound(scene);
      flashPlayerShip(scene);
    }
  } else if (isAsteroidKind(kind)) {
    showAbsorbEffect(scene, x, y, kind, isPurpleEnergy);
    hitFeedbackShown = true;
    if (!isShieldActive(scene)) {
      takeDirectDamage(scene);
    } else {
      playShieldBlockSound(scene);
      flashPlayerShip(scene);
    }
  } else if (kind === 'lifeBooster') {
    gainLife(scene);
  } else if (kind === 'scoreBooster') {
    activateScoreBooster(scene);
  } else if (kind === 'shieldBooster') {
    activateShieldBooster(scene);
  } else {
    addScore(scene, getEnergyBallValue() * scoreMultiplier);
    ballsCaught += 1;
  }

  if (state !== 'playing') return;

  if (!hitFeedbackShown) {
    if (kind === 'damageBooster' || isAsteroidKind(kind)) {
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

function playCatchSound(scene) {
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

function playBackgroundMusic(scene) {
  playMusicTrack(scene, 'backgroundMusic', BACKGROUND_MUSIC_PATH, 0.28);
}

function restartBackgroundMusic(scene) {
  pausedMusicTime = 0;
  stopCurrentMusic(scene);
  scene.currentMusicKey = null;
  playBackgroundMusic(scene);
}

function playPurpleBoosterMusic(scene) {
  playMusicTrack(scene, 'purpleBoosterMusic', PURPLE_BOOSTER_MUSIC_PATH, 0.32);
}

function playMusicTrack(scene, audioKey, path, volume) {
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
  ['catchAudio', 'boosterAudio', 'badAudio', 'buttonAudio', 'levelUpAudio', 'redWaveAudio', 'bossLaserAudio', 'shieldBlockAudio'].forEach((audioKey) => {
    const audio = scene[audioKey];
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  });
}

function stopCurrentMusic(scene) {
  if (!scene.currentMusicKey || !scene[scene.currentMusicKey]) return;

  const music = scene[scene.currentMusicKey];
  music.pause();
  music.currentTime = 0;
}

function pauseCurrentMusic(scene) {
  if (!scene.currentMusicKey || !scene[scene.currentMusicKey]) return;
  const music = scene[scene.currentMusicKey];
  pausedMusicTime = music.currentTime || 0;
  music.pause();
}

function resumeCurrentMusic(scene) {
  if (!scene.currentMusicKey) return;
  const currentKey = scene.currentMusicKey;
  if (currentKey === 'purpleBoosterMusic') {
    playPurpleBoosterMusic(scene);
    return;
  }
  playBackgroundMusic(scene);
}

function playAudioFile(scene, audioKey, path, volume) {
  if (!scene[audioKey]) {
    scene[audioKey] = new Audio(path);
    scene[audioKey].volume = volume;
  }

  scene[audioKey].currentTime = 0;
  scene[audioKey].play().catch(() => {});
}

function playLoopingAudioFile(scene, audioKey, path, volume) {
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

function showAbsorbEffect(scene, x, y, kind, isPurpleEnergy = false) {
  const targetX = scene.ship.x;
  const targetY = scene.ship.y - 4;
  const tint = getAbsorbParticleTint(kind, isPurpleEnergy);
  const particleCount = kind === 'ball' ? 22 : 14;

  for (let i = 0; i < particleCount; i += 1) {
    const particle = scene.add.image(
      x + Phaser.Math.Between(-10, 10),
      y + Phaser.Math.Between(-10, 10),
      'goldTrailParticle'
    );
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

  scene.tweens.add({
    targets: scene.ship,
    alpha: 0.72,
    duration: 70,
    yoyo: true,
    ease: 'Sine.easeOut',
  });
}

function getAbsorbParticleTint(kind, isPurpleEnergy = false) {
  if (kind === 'ball' && isPurpleEnergy) return 0x9b5cff;
  if (isAsteroidKind(kind)) return 0xaeb7c8;
  if (kind === 'damageBooster') return 0xff3b4f;
  if (kind === 'lifeBooster') return 0x4dff88;
  if (kind === 'scoreBooster') return 0x9b5cff;
  if (kind === 'shieldBooster') return 0x4da3ff;
  return 0xffc84d;
}
