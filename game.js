// Punto de entrada del juego.
// Los modulos anteriores declaran la logica; este archivo solo configura Phaser y arranca cuando el DOM esta listo.

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
      fixedStep: false,
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

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

bootGame();
