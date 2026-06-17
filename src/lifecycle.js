// Ciclo principal de Phaser.
// preload/create/update conectan todos los sistemas definidos en el resto de modulos.

function preload() {
  this.load.svg('ship', PLAYER_SHIP_IMAGE_PATH, {
    width: SHIP_TEXTURE_WIDTH,
    height: SHIP_TEXTURE_HEIGHT,
  });
}

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
  createEnergyBallTexture(this, 'contaminatedBall', {
    outer: 0xff9f2a,
    mid: 0xffd76a,
    core: 0x063719,
    ring: 0xfff0a8,
  });
  createCrystallizedOrbTexture(this);
  createEnergyBallTexture(this, 'purpleBall', {
    outer: 0x6f38ff,
    mid: 0x9b5cff,
    core: 0xf0d7ff,
    ring: 0xd5a9ff,
  });
  createEnergyBallTexture(this, 'pinkBall', {
    outer: 0xff3faa,
    mid: 0xff66c4,
    core: 0xffe0f4,
    ring: 0xffa9dd,
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
  createScissorTextures(this);
  createRedNeedleTextures(this);
  createSpikeDroneTextures(this);
  createGiroDroneTextures(this);
  createBossShipTexture(this);
  createAsteroidTexture(this);
  createBigAsteroidTexture(this);
  createEchoTexture(this);

  if (!this.textures.exists('ship')) {
    createShipTexture(this, 'ship', {
      hull: 0xb8bec8,
      wing: 0x6f7784,
      cockpit: 0xf1f4f8,
      engine: 0xd6dbe3,
    });
  }

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
  this.shipEyeGlow = this.add.circle(0, 0, SHIP_EYE_GLOW_RADIUS, 0xffd84d, 0)
    .setDepth(SHIP_DEPTH + 1)
    .setBlendMode(Phaser.BlendModes.ADD)
    .setVisible(false);
  this.shipEyeCore = this.add.circle(0, 0, SHIP_EYE_CORE_RADIUS, 0xffffb8, 0)
    .setDepth(SHIP_DEPTH + 2)
    .setBlendMode(Phaser.BlendModes.ADD)
    .setVisible(false);
  updateShipEyeGlow(this);

  this.echoCompanion = this.add.image(0, 0, 'echoCompanion')
    .setDepth(SHIP_DEPTH + 2)
    .setVisible(false);
  this.echoEyeGlow = this.add.circle(0, 0, ECHO_EYE_GLOW_RADIUS, 0xffd84d, 0.34)
    .setDepth(SHIP_DEPTH + 3)
    .setBlendMode(Phaser.BlendModes.ADD)
    .setVisible(false);
  this.echoEyeCore = this.add.circle(0, 0, ECHO_EYE_CORE_RADIUS, 0xfff0a8, 1)
    .setDepth(SHIP_DEPTH + 4)
    .setBlendMode(Phaser.BlendModes.ADD)
    .setVisible(false);
  this.echoAttackTarget = null;
  this.echoReturningHome = false;
  resetEchoPersonality(this);
  startEchoEyeAnimation(this);
  updateEchoCompanion(this, 0);

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

  this.shieldBubble = this.add.graphics()
    .setDepth(SHIP_DEPTH + 1)
    .setVisible(false);
  updateShieldBubble(this);

  setUiDepth(this);

  // Grupo de bolas
  this.balls = this.physics.add.group();
  this.events.on(Phaser.Scenes.Events.POST_UPDATE, (time) => {
    if (state === 'playing') updateEnergyOrbOverlays(this, time);
  });

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
  this.echoTutorialOverlay = createEchoTutorialOverlay(this);

  // Menus
  this.menuContainer = createMenu(this);
  this.gameOverContainer = createGameOver(this);
  this.rankingContainer = createRanking(this);
  updateAudioOptionButtons(this);
  bindAudioUnlockListeners(this);
  bindPageAudioPauseListeners(this);
  setUiDepth(this);
  layoutScene(this);

  showMenu.call(this);
  revealGameContainer();

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
