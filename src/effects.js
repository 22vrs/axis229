// Efectos visuales auxiliares compartidos por recoleccion y dano.
// Se deja al final porque depende de helpers definidos en modulos anteriores.

function showAbsorbEffect(scene, x, y, kind, energyOrbColor = 'gold') {
  const targetX = scene.ship.x;
  const targetY = scene.ship.y - 4;
  const tint = getAbsorbParticleTint(kind, energyOrbColor);
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

  if (kind === 'ball') {
    flashShipEye(scene);
    return;
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

function getAbsorbParticleTint(kind, energyOrbColor = 'gold') {
  const normalizedColor = normalizeEnergyOrbColor(energyOrbColor);
  if (kind === 'ball' && normalizedColor === 'pink') return 0xff66c4;
  if (kind === 'ball' && normalizedColor === 'purple') return 0x9b5cff;
  if (isAsteroidKind(kind)) return 0xaeb7c8;
  if (kind === 'contaminatedOrb') return 0x0f7f37;
  if (kind === 'damageBooster') return 0xff3b4f;
  if (isScissorKind(kind)) return 0xff3b4f;
  if (kind === 'spikeDrone') return 0xff3045;
  if (kind === 'giroDrone') return 0xff3045;
  if (kind === 'redNeedle') return 0xff263c;
  if (kind === 'redNeedleLaser') return 0xff263c;
  if (kind === 'lifeBooster') return 0x4dff88;
  if (kind === 'scoreBooster') return 0x9b5cff;
  if (kind === 'shieldBooster') return 0x4da3ff;
  return 0xffc84d;
}
