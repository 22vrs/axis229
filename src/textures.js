// Generacion procedural de texturas y sprites base.
// Centraliza las formas dibujadas con canvas/graphics para que el gameplay use claves de textura.

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

function createRegisterTexture(scene) {
  if (!scene || !scene.make || !scene.textures) return;
  if (scene.textures.exists('register')) scene.textures.remove('register');

  const graphics = scene.make.graphics({ x: 0, y: 0, add: false });
  const pinColor = 0x77dfff;
  const glowColor = 0x76ffe8;

  graphics.fillStyle(glowColor, 0.16);
  graphics.fillRoundedRect(10, 10, 52, 52, 10);

  graphics.fillStyle(pinColor, 0.9);
  [19, 29, 39, 49].forEach((y) => {
    graphics.fillRoundedRect(7, y, 10, 4, 1.5);
    graphics.fillRoundedRect(55, y, 10, 4, 1.5);
  });
  [19, 29, 39, 49].forEach((x) => {
    graphics.fillRoundedRect(x, 7, 4, 10, 1.5);
    graphics.fillRoundedRect(x, 55, 4, 10, 1.5);
  });

  graphics.fillStyle(0x071827, 1);
  graphics.lineStyle(3, glowColor, 0.95);
  graphics.fillRoundedRect(14, 14, 44, 44, 9);
  graphics.strokeRoundedRect(14, 14, 44, 44, 9);

  graphics.fillStyle(0x176a94, 1);
  graphics.fillRoundedRect(18, 18, 36, 36, 7);
  graphics.fillStyle(0x2ddcff, 0.34);
  graphics.fillRoundedRect(20, 20, 32, 9, 5);
  graphics.fillStyle(0x0b6ea6, 0.82);
  graphics.fillRoundedRect(21, 29, 30, 23, 6);

  graphics.lineStyle(2, 0xd7feff, 0.86);
  graphics.beginPath();
  graphics.moveTo(25, 31);
  graphics.lineTo(33, 31);
  graphics.lineTo(33, 26);
  graphics.moveTo(25, 43);
  graphics.lineTo(33, 43);
  graphics.lineTo(33, 48);
  graphics.moveTo(47, 31);
  graphics.lineTo(39, 31);
  graphics.lineTo(39, 26);
  graphics.moveTo(47, 43);
  graphics.lineTo(39, 43);
  graphics.lineTo(39, 48);
  graphics.moveTo(29, 36);
  graphics.lineTo(43, 36);
  graphics.strokePath();

  graphics.fillStyle(0x7df9ff, 0.18);
  graphics.fillCircle(36, 36, 16);
  graphics.fillStyle(0x053a5c, 1);
  graphics.lineStyle(2, 0xb9fbff, 0.9);
  graphics.fillRoundedRect(25, 25, 22, 22, 5);
  graphics.strokeRoundedRect(25, 25, 22, 22, 5);
  graphics.fillStyle(0x21d8ff, 1);
  graphics.fillRoundedRect(29, 29, 14, 14, 3);
  graphics.fillStyle(0xecfeff, 1);
  graphics.fillCircle(34, 34, 3);
  graphics.lineStyle(2, glowColor, 0.7);
  graphics.beginPath();
  graphics.moveTo(31, 44);
  graphics.lineTo(41, 44);
  graphics.strokePath();

  graphics.generateTexture('register', 72, 72);
  graphics.destroy();
}

function createCrystallizedOrbTexture(scene) {
  createEnergyBallTexture(scene, 'crystallizedBall', {
    outer: 0xff9f2a,
    mid: 0xffd76a,
    core: 0xffffd2,
    ring: 0xfff0a8,
  });

  const source = scene.textures.get('crystallizedBall').getSourceImage();
  const canvasTexture = scene.textures.createCanvas('crystallizedOrb', 44, 44);
  const context = canvasTexture.getContext();
  context.drawImage(source, 0, 0);

  const crystalFacets = [
    { color: '#07539e', points: [[4, 31], [9, 29], [12, 34], [9, 38], [5, 35]] },
    { color: '#0b72c3', points: [[9, 29], [13, 30], [16, 34], [12, 34]] },
    { color: '#179de0', points: [[13, 30], [17, 27], [20, 33], [16, 34]] },
    { color: '#0962b1', points: [[17, 27], [22, 30], [23, 35], [20, 33]] },
    { color: '#1ca9e8', points: [[22, 30], [27, 27], [28, 33], [23, 35]] },
    { color: '#0870bf', points: [[27, 27], [31, 30], [33, 34], [28, 33]] },
    { color: '#20b5ee', points: [[31, 30], [36, 29], [37, 34], [33, 34]] },
    { color: '#075095', points: [[36, 29], [40, 31], [39, 35], [35, 39], [37, 34]] },
    { color: '#0a65b2', points: [[5, 35], [12, 34], [14, 40], [9, 38]] },
    { color: '#0d82ce', points: [[12, 34], [16, 34], [20, 41], [14, 40]] },
    { color: '#06498e', points: [[16, 34], [23, 35], [22, 42], [20, 41]] },
    { color: '#0b70bd', points: [[23, 35], [28, 33], [29, 42], [22, 42]] },
    { color: '#09549d', points: [[28, 33], [33, 34], [35, 39], [29, 42]] },
    { color: '#0d7ac5', points: [[33, 34], [37, 34], [35, 39]] },
  ];

  context.save();
  context.lineJoin = 'round';
  context.fillStyle = '#064383';
  context.beginPath();
  CRYSTALLIZED_ORB_CRYSTAL_SHAPE.forEach(([offsetX, offsetY], index) => {
    const x = offsetX + 22;
    const y = offsetY + 22;
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  });
  context.closePath();
  context.fill();

  crystalFacets.forEach((facet) => {
    context.fillStyle = facet.color;
    context.strokeStyle = '#52bff0';
    context.lineWidth = 0.7;
    context.beginPath();
    facet.points.forEach(([x, y], index) => {
      if (index === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
    context.closePath();
    context.fill();
    context.stroke();
  });

  context.strokeStyle = '#c2f2ff';
  context.lineWidth = 1;
  [[13, 30, 17, 27], [22, 30, 27, 27], [31, 30, 36, 29]].forEach(([x1, y1, x2, y2]) => {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  });
  context.restore();
  canvasTexture.refresh();
  scene.textures.remove('crystallizedBall');
}

function attachEnergyOrbOverlay(scene, orb, palette) {
  if (!scene || !orb) return;
  const overlay = trackGameplayVisual(scene, scene.add.graphics().setDepth(FALLING_OBJECT_DEPTH + 1));
  orb.setData('energyOrbOverlay', overlay);
  orb.setData('energyOrbWispPalette', palette);
  orb.setData('energyOrbWispSeed', Phaser.Math.FloatBetween(0, Math.PI * 2));
  orb.setData('energyOrbWispSpin', Phaser.Math.FloatBetween(0.9, 1.35));
  orb.once('destroy', () => {
    if (overlay && overlay.destroy) overlay.destroy();
  });
}

function updateEnergyOrbOverlays(scene, time) {
  scene.balls.getChildren().forEach((orb) => {
    if (!orb.active || !isEnergyOrbSpeedKind(orb.getData('kind'))) return;
    const overlay = orb.getData('energyOrbOverlay');
    if (!overlay || !overlay.active) return;
    drawEnergyOrbOverlay(overlay, orb, time);
  });
}

function drawEnergyOrbOverlay(overlay, orb, time) {
  const seed = orb.getData('energyOrbWispSeed') || 0;
  const spin = orb.getData('energyOrbWispSpin') || 1;
  const palette = getEnergyOrbWispPalette(orb.getData('kind'), getEnergyOrbColor(orb));
  const t = time * 0.011 * spin + seed;

  overlay.setPosition(orb.x, orb.y);
  overlay.setVisible(orb.visible);
  overlay.clear();
  drawOrbWisp(overlay, 5, palette.shadow, 0.3, 14, 0.9, t, 0.96, 1.5);
  drawOrbWisp(overlay, 3, palette.mid, 0.42, 12, 1.05, t + 2.2, 1, 1.25);
  drawOrbWisp(overlay, 2, palette.bright, 0.42, 10, 1.18, -t * 1.18, 0.92, 1);
  drawOrbWisp(overlay, 2, palette.glow, 0.28, 8, 1.35, t * 1.42 + 1.4, 0.98, 0.75);
}

function getEnergyOrbWispPalette(kind, isPurpleEnergy = false) {
  if (kind === 'contaminatedOrb') {
    return {
      shadow: 0x021208,
      mid: 0x063719,
      bright: 0x0f7f37,
      glow: 0x24a552,
    };
  }

  if (isPurpleEnergy === 'pink') {
    return {
      shadow: 0x7a1459,
      mid: 0xff3faa,
      bright: 0xff8fd6,
      glow: 0xffe0f4,
    };
  }

  if (isPurpleEnergy === true || isPurpleEnergy === 'purple') {
    return {
      shadow: 0x3a1478,
      mid: 0x6f38ff,
      bright: 0xb184ff,
      glow: 0xf0d7ff,
    };
  }

  return {
    shadow: 0x7a4a00,
    mid: 0xb87900,
    bright: 0xffd84d,
    glow: 0xffffb8,
  };
}

function drawOrbWisp(graphics, width, color, alpha, radius, curl, phase, yScale = 1, wobbleAmount = 1.4) {
  graphics.lineStyle(width, color, alpha);
  graphics.beginPath();
  for (let i = 0; i <= 40; i += 1) {
    const progress = i / 40;
    const angle = phase + progress * Math.PI * 2 * curl;
    const wobble = Math.sin(phase * 1.7 + progress * Math.PI * 6) * wobbleAmount;
    const localRadius = radius + wobble;
    const x = Math.cos(angle) * localRadius;
    const y = Math.sin(angle) * localRadius * yScale;
    if (i === 0) {
      graphics.moveTo(x, y);
    } else {
      graphics.lineTo(x, y);
    }
  }
  graphics.strokePath();
}

function createShipTexture(scene, key, colors, textureWidth = SHIP_TEXTURE_WIDTH) {
  const graphics = scene.make.graphics({ x: 0, y: 0, add: false });
  const centerX = textureWidth / 2;
  const centerY = SHIP_TEXTURE_HEIGHT / 2;
  const left = 2;
  const right = textureWidth - 2;
  const hullTop = 3;
  const hullBottom = SHIP_TEXTURE_HEIGHT - 7;
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
    { x: 44, y: SHIP_TEXTURE_HEIGHT - 4 },
  ], true);
  graphics.fillPoints([
    { x: right - 5, y: 30 },
    { x: textureWidth - 41, y: 4 },
    { x: centerX + 18, y: 14 },
    { x: centerX + 20, y: 34 },
    { x: textureWidth - 44, y: SHIP_TEXTURE_HEIGHT - 4 },
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
  graphics.fillEllipse(centerX, centerY - 1, 24, 24);
  graphics.fillStyle(shadowPlate, 1);
  graphics.fillEllipse(centerX, centerY - 1, 19, 19);
  graphics.fillStyle(glassDark, 1);
  graphics.fillEllipse(centerX, centerY - 1, 13, 13);
  graphics.fillStyle(glassLight, 0.9);
  graphics.fillEllipse(centerX - 3, centerY - 4, 6, 5);
  graphics.fillStyle(0x071016, 0.78);
  graphics.fillEllipse(centerX + 1, centerY + 1, 8, 9);
  graphics.lineStyle(2, palePlate, 0.46);
  graphics.strokeCircle(centerX, centerY - 1, 11);
  graphics.lineStyle(2, darkPlate, 0.8);
  graphics.strokeCircle(centerX, centerY - 1, 16);

  graphics.fillStyle(0x303743, 1);
  graphics.fillRoundedRect(centerX - 35, 35, 18, 7, 2);
  graphics.fillRoundedRect(centerX + 17, 35, 18, 7, 2);
  graphics.fillStyle(colors.engine, 1);
  graphics.fillTriangle(centerX - 26, 38, centerX - 16, SHIP_TEXTURE_HEIGHT, centerX - 36, SHIP_TEXTURE_HEIGHT);
  graphics.fillTriangle(centerX + 26, 38, centerX + 16, SHIP_TEXTURE_HEIGHT, centerX + 36, SHIP_TEXTURE_HEIGHT);

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

  graphics.generateTexture(key, textureWidth, SHIP_TEXTURE_HEIGHT);
  graphics.destroy();
}

function createEchoTexture(scene) {
  const graphics = scene.make.graphics({ x: 0, y: 0, add: false });
  const center = ECHO_TEXTURE_SIZE / 2;
  const radius = 31;

  graphics.fillStyle(0x050b12, 0.52);
  graphics.fillEllipse(center + 2, center + 4, 64, 58);
  graphics.fillStyle(0x242b32, 1);
  graphics.fillCircle(center, center, radius + 2);
  graphics.fillStyle(0xcfd1ce, 1);
  graphics.fillCircle(center, center, radius);
  graphics.fillStyle(0xaeb1ae, 0.68);
  graphics.slice(center, center, radius, Phaser.Math.DegToRad(78), Phaser.Math.DegToRad(286), false);
  graphics.fillPath();
  graphics.fillStyle(0xffffff, 0.26);
  graphics.slice(center - 2, center - 2, radius - 2, Phaser.Math.DegToRad(214), Phaser.Math.DegToRad(330), false);
  graphics.fillPath();

  graphics.lineStyle(2, 0x4d555d, 0.7);
  graphics.lineBetween(center, center - radius, center, center - 14);
  graphics.lineBetween(center, center + 14, center, center + radius);

  graphics.fillStyle(0x202830, 1);
  graphics.fillEllipse(8, center, 16, 30);
  graphics.fillEllipse(64, center, 16, 30);
  graphics.fillStyle(0x4a545d, 0.74);
  graphics.fillEllipse(11, center, 7, 23);
  graphics.fillEllipse(61, center, 7, 23);
  graphics.lineStyle(2, 0x10161c, 0.72);
  graphics.strokeEllipse(8, center, 16, 30);
  graphics.strokeEllipse(64, center, 16, 30);
  graphics.fillStyle(0xffd84d, 1);
  graphics.fillRoundedRect(4, 34, 8, 3, 2);
  graphics.fillRoundedRect(60, 34, 8, 3, 2);

  graphics.fillStyle(0x172027, 1);
  graphics.fillCircle(center, center, 22);
  graphics.fillStyle(0x34434a, 1);
  graphics.fillCircle(center, center, 18);
  graphics.fillStyle(0x1b2e34, 1);
  graphics.fillCircle(center, center, 13);
  graphics.lineStyle(5, 0x6b541d, 0.42);
  graphics.strokeCircle(center, center, 9);
  graphics.fillStyle(0x4a3a17, 0.62);
  graphics.fillCircle(center, center, 5);
  graphics.lineStyle(3, 0x071016, 0.7);
  graphics.strokeCircle(center, center, 22);

  graphics.generateTexture('echoCompanion', ECHO_TEXTURE_SIZE, ECHO_TEXTURE_SIZE);
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

  graphics.fillStyle(0x3a0712, 1);
  graphics.fillPoints([
    { x: 24, y: 2 },
    { x: 31, y: 15 },
    { x: 46, y: 8 },
    { x: 38, y: 28 },
    { x: 45, y: 37 },
    { x: 31, y: 34 },
    { x: 27, y: 46 },
    { x: 24, y: 48 },
    { x: 21, y: 46 },
    { x: 17, y: 34 },
    { x: 3, y: 37 },
    { x: 10, y: 28 },
    { x: 2, y: 8 },
    { x: 17, y: 15 },
  ], true);

  graphics.fillStyle(0x8d1725, 1);
  graphics.fillPoints([
    { x: 24, y: 4 },
    { x: 30, y: 19 },
    { x: 26, y: 42 },
    { x: 24, y: 45 },
    { x: 22, y: 42 },
    { x: 18, y: 19 },
  ], true);

  graphics.fillStyle(0xd73346, 1);
  graphics.fillPoints([
    { x: 24, y: 7 },
    { x: 29, y: 21 },
    { x: 27, y: 35 },
    { x: 24, y: 41 },
    { x: 21, y: 35 },
    { x: 19, y: 21 },
  ], true);

  graphics.fillStyle(0x2a030d, 0.78);
  graphics.fillTriangle(17, 10, 21, 18, 14, 17);
  graphics.fillTriangle(31, 10, 27, 18, 34, 17);
  graphics.fillStyle(0xffc05a, 0.95);
  graphics.fillTriangle(17, 9, 20, 0, 13, 5);
  graphics.fillTriangle(31, 9, 28, 0, 35, 5);
  graphics.fillStyle(0x5fb8ff, 0.76);
  graphics.fillTriangle(22, 8, 24, 0, 26, 8);

  graphics.fillStyle(0xb52635, 0.96);
  graphics.fillTriangle(18, 16, 5, 11, 12, 27);
  graphics.fillTriangle(30, 16, 43, 11, 36, 27);
  graphics.fillStyle(0xe0505b, 0.7);
  graphics.fillTriangle(14, 19, 7, 27, 17, 26);
  graphics.fillTriangle(34, 19, 41, 27, 31, 26);

  graphics.fillStyle(0x0d121f, 0.86);
  graphics.fillRoundedRect(10, 18, 7, 3, 1);
  graphics.fillRoundedRect(31, 18, 7, 3, 1);
  graphics.fillStyle(0xff6d3f, 0.92);
  graphics.fillRoundedRect(11, 19, 4, 1, 1);
  graphics.fillRoundedRect(33, 19, 4, 1, 1);

  graphics.fillStyle(0xf26068, 0.72);
  graphics.fillCircle(16, 13, 1.7);
  graphics.fillCircle(32, 13, 1.7);

  graphics.fillStyle(0xb9e8ff, 0.88);
  graphics.fillEllipse(24, 23, 15, 17);
  graphics.fillStyle(0x1d2834, 0.92);
  graphics.fillEllipse(24, 24, 11, 12);
  graphics.fillStyle(0x6ee9ff, 0.46);
  graphics.fillEllipse(22, 22, 6, 5);
  graphics.fillStyle(0x0b0d14, 0.88);
  graphics.fillCircle(24, 24, 4.2);
  graphics.lineStyle(1, 0xf3fbff, 0.55);
  graphics.strokeEllipse(24, 23, 15, 17);
  graphics.lineStyle(1, 0x6ee9ff, 0.48);
  graphics.strokeCircle(24, 24, 6.5);

  graphics.lineStyle(1, 0xffa2ad, 0.44);
  graphics.strokePoints([
    { x: 24, y: 2 },
    { x: 31, y: 15 },
    { x: 46, y: 8 },
    { x: 38, y: 28 },
    { x: 45, y: 37 },
    { x: 31, y: 34 },
    { x: 27, y: 46 },
    { x: 24, y: 48 },
    { x: 21, y: 46 },
    { x: 17, y: 34 },
    { x: 3, y: 37 },
    { x: 10, y: 28 },
    { x: 2, y: 8 },
    { x: 17, y: 15 },
  ], true);

  graphics.generateTexture('enemyShipSmall', 48, 48);
  graphics.destroy();
}

function createScissorTextures(scene) {
  createScissorTexture(scene);
  createScissorHalfTexture(scene, 'scissorShipLeft', 0);
  createScissorHalfTexture(scene, 'scissorShipRight', SCISSOR_TEXTURE_WIDTH - SCISSOR_HALF_TEXTURE_WIDTH);
}

function createScissorTexture(scene) {
  const graphics = scene.make.graphics({ x: 0, y: 0, add: false });
  const sx = SCISSOR_TEXTURE_WIDTH / 64;
  const sy = SCISSOR_TEXTURE_HEIGHT / 72;
  const point = ({ x, y }) => ({ x: x * sx, y: y * sy });
  const points = (items) => items.map(point);
  const tx = (x) => x * sx;
  const ty = (y) => y * sy;

  graphics.fillStyle(0x2a030d, 1);
  graphics.fillPoints(points([
    { x: 31, y: 4 },
    { x: 24, y: 14 },
    { x: 13, y: 16 },
    { x: 1, y: 64 },
    { x: 26, y: 54 },
    { x: 32, y: 70 },
    { x: 32, y: 4 },
  ]), true);
  graphics.fillPoints(points([
    { x: 33, y: 4 },
    { x: 40, y: 14 },
    { x: 51, y: 16 },
    { x: 63, y: 64 },
    { x: 38, y: 54 },
    { x: 32, y: 70 },
    { x: 32, y: 4 },
  ]), true);

  graphics.fillStyle(0x8d1725, 1);
  graphics.fillPoints(points([
    { x: 31, y: 7 },
    { x: 23, y: 19 },
    { x: 13, y: 22 },
    { x: 5, y: 60 },
    { x: 28, y: 50 },
    { x: 32, y: 66 },
    { x: 32, y: 7 },
  ]), true);
  graphics.fillPoints(points([
    { x: 33, y: 7 },
    { x: 41, y: 19 },
    { x: 51, y: 22 },
    { x: 59, y: 60 },
    { x: 36, y: 50 },
    { x: 32, y: 66 },
    { x: 32, y: 7 },
  ]), true);

  graphics.fillStyle(0xd73346, 1);
  graphics.fillTriangle(tx(31), ty(11), tx(24), ty(24), tx(31), ty(60));
  graphics.fillTriangle(tx(17), ty(25), tx(8), ty(58), tx(27), ty(49));
  graphics.fillTriangle(tx(33), ty(11), tx(40), ty(24), tx(33), ty(60));
  graphics.fillTriangle(tx(47), ty(25), tx(56), ty(58), tx(37), ty(49));

  graphics.fillStyle(0xffc05a, 0.95);
  graphics.fillTriangle(tx(18), ty(7), tx(25), ty(0), tx(24), ty(16));
  graphics.fillTriangle(tx(46), ty(7), tx(39), ty(0), tx(40), ty(16));

  graphics.fillStyle(0x151b2a, 0.92);
  graphics.fillRoundedRect(tx(25), ty(8), tx(14), ty(50), 4);
  graphics.fillStyle(0xb9e8ff, 0.9);
  graphics.fillEllipse(tx(32), ty(32), tx(18), ty(18));
  graphics.fillStyle(0x1d2834, 0.94);
  graphics.fillEllipse(tx(32), ty(33), tx(12), ty(12));
  graphics.fillStyle(0x6ee9ff, 0.52);
  graphics.fillEllipse(tx(30), ty(31), tx(7), ty(5));
  graphics.fillStyle(0x0b0d14, 0.88);
  graphics.fillCircle(tx(32), ty(33), tx(4.5));
  graphics.lineStyle(1, 0xf3fbff, 0.55);
  graphics.strokeEllipse(tx(32), ty(32), tx(18), ty(18));

  graphics.fillStyle(0x0d121f, 0.86);
  graphics.fillRoundedRect(tx(13), ty(30), tx(9), ty(4), 1);
  graphics.fillRoundedRect(tx(42), ty(30), tx(9), ty(4), 1);
  graphics.fillStyle(0xff6d3f, 0.92);
  graphics.fillRoundedRect(tx(15), ty(31), tx(5), ty(2), 1);
  graphics.fillRoundedRect(tx(44), ty(31), tx(5), ty(2), 1);
  graphics.fillStyle(0xff8f2a, 0.96);
  graphics.fillRoundedRect(tx(27), ty(56), tx(5), ty(9), 2);
  graphics.fillRoundedRect(tx(32), ty(56), tx(5), ty(9), 2);

  graphics.lineStyle(1, 0xffa2ad, 0.44);
  graphics.strokePoints(points([
    { x: 31, y: 4 },
    { x: 24, y: 14 },
    { x: 13, y: 16 },
    { x: 1, y: 64 },
    { x: 26, y: 54 },
    { x: 32, y: 70 },
    { x: 32, y: 4 },
  ]), true);
  graphics.strokePoints(points([
    { x: 33, y: 4 },
    { x: 40, y: 14 },
    { x: 51, y: 16 },
    { x: 63, y: 64 },
    { x: 38, y: 54 },
    { x: 32, y: 70 },
    { x: 32, y: 4 },
  ]), true);

  graphics.lineStyle(5, 0xff1d32, 0.18);
  graphics.lineBetween(tx(32), ty(7), tx(32), ty(68));
  graphics.lineStyle(3, 0xff3045, 0.36);
  graphics.lineBetween(tx(32), ty(7), tx(32), ty(68));
  graphics.lineStyle(1, 0xff9aaa, 0.82);
  graphics.lineBetween(tx(32), ty(8), tx(32), ty(67));
  SCISSOR_CUT_SPARK_POINTS.forEach((spark, index) => {
    graphics.fillStyle(index % 2 === 0 ? 0xff3045 : 0xffb1bd, spark.alpha);
    graphics.fillCircle(tx(spark.x), ty(spark.y), Math.max(0.7, tx(spark.radius)));
  });
  graphics.lineStyle(1, 0xff3045, 0.72);
  graphics.lineBetween(tx(30.6), ty(20), tx(33.4), ty(23));
  graphics.lineBetween(tx(33.2), ty(35), tx(30.7), ty(38));
  graphics.lineStyle(1, 0x101827, 0.56);
  graphics.lineBetween(tx(32), ty(6), tx(32), ty(69));

  graphics.generateTexture('scissorShip', SCISSOR_TEXTURE_WIDTH, SCISSOR_TEXTURE_HEIGHT);
  graphics.destroy();
}

function createScissorHalfTexture(scene, key, sourceX) {
  const source = scene.textures.get('scissorShip').getSourceImage();
  const texture = scene.textures.createCanvas(key, SCISSOR_HALF_TEXTURE_WIDTH, SCISSOR_TEXTURE_HEIGHT);
  const context = texture.getContext();
  context.drawImage(
    source,
    sourceX,
    0,
    SCISSOR_HALF_TEXTURE_WIDTH,
    SCISSOR_TEXTURE_HEIGHT,
    0,
    0,
    SCISSOR_HALF_TEXTURE_WIDTH,
    SCISSOR_TEXTURE_HEIGHT
  );
  const cutX = key === 'scissorShipLeft' ? SCISSOR_HALF_TEXTURE_WIDTH - 1 : 0;
  const glow = context.createLinearGradient(
    key === 'scissorShipLeft' ? SCISSOR_HALF_TEXTURE_WIDTH - 7 : 0,
    0,
    key === 'scissorShipLeft' ? SCISSOR_HALF_TEXTURE_WIDTH : 7,
    0
  );
  if (key === 'scissorShipLeft') {
    glow.addColorStop(0, 'rgba(255, 29, 50, 0)');
    glow.addColorStop(1, 'rgba(255, 48, 69, 0.55)');
  } else {
    glow.addColorStop(0, 'rgba(255, 48, 69, 0.55)');
    glow.addColorStop(1, 'rgba(255, 29, 50, 0)');
  }
  context.fillStyle = glow;
  context.fillRect(key === 'scissorShipLeft' ? SCISSOR_HALF_TEXTURE_WIDTH - 7 : 0, 4, 7, SCISSOR_TEXTURE_HEIGHT - 8);
  context.strokeStyle = 'rgba(255, 154, 170, 0.92)';
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(cutX + (key === 'scissorShipLeft' ? -0.5 : 0.5), 5);
  context.lineTo(cutX + (key === 'scissorShipLeft' ? -0.5 : 0.5), SCISSOR_TEXTURE_HEIGHT - 5);
  context.stroke();
  const sparks = key === 'scissorShipLeft'
    ? [
      [SCISSOR_HALF_TEXTURE_WIDTH - 4.2, 9, 1.15, 0.85],
      [SCISSOR_HALF_TEXTURE_WIDTH - 1.9, 17, 0.8, 0.7],
      [SCISSOR_HALF_TEXTURE_WIDTH - 3.4, 28, 1.05, 0.82],
      [SCISSOR_HALF_TEXTURE_WIDTH - 1.7, 37, 0.9, 0.72],
    ]
    : [
      [4.2, 12, 1.1, 0.84],
      [1.8, 21, 0.82, 0.7],
      [3.6, 32, 1.15, 0.86],
      [2.1, 42, 0.9, 0.74],
    ];
  sparks.forEach(([x, y, radius, alpha], index) => {
    context.fillStyle = index % 2 === 0
      ? `rgba(255, 48, 69, ${alpha})`
      : `rgba(255, 177, 189, ${alpha})`;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  });
  texture.refresh();
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

function createGiroDroneTextures(scene) {
  createGiroDroneTexture(scene, 'giroDroneCoreGreen', 'green');
  createGiroDroneTexture(scene, 'giroDroneCoreOrange', 'orange');
  createGiroDroneTexture(scene, 'giroDroneCoreRedWarning', 'redWarning');
  createGiroDroneTexture(scene, 'giroDroneCoreRed', 'red');
  createGiroDroneTexture(scene, 'giroDroneSatelliteRed', 'red');
  createGiroDroneTexture(scene, 'giroDroneDisabled', 'disabled');
}

function createGiroDroneTexture(scene, key, mode) {
  const graphics = scene.make.graphics({ x: 0, y: 0, add: false });
  const center = SPIKE_DRONE_TEXTURE_SIZE / 2;
  const disabled = mode === 'disabled';
  const red = mode === 'red';
  const redWarning = mode === 'redWarning';
  const redLight = red || redWarning;
  const orange = mode === 'orange';
  const lightColor = disabled ? 0x9aa3af : redLight ? 0xff1f32 : orange ? 0xff8f2a : 0x4dff88;

  graphics.fillStyle(disabled ? 0x2d323a : 0x141b2a, 1);
  graphics.fillCircle(center, center, 20);
  graphics.fillStyle(disabled ? 0x767d88 : 0x596272, 1);
  graphics.fillCircle(center, center, 17);
  graphics.fillStyle(disabled ? 0x3f4650 : 0x252d3d, 1);
  graphics.fillCircle(center, center, 13);
  graphics.lineStyle(2, disabled ? 0xc3c8d0 : redLight ? 0xff9aaa : 0xaeb8c9, disabled ? 0.42 : 0.62);
  graphics.strokeCircle(center, center, 18);

  graphics.lineStyle(1, disabled ? 0x1f242b : 0x111827, disabled ? 0.75 : 0.55);
  graphics.beginPath();
  graphics.moveTo(center - 14, center);
  graphics.lineTo(center + 14, center);
  graphics.moveTo(center, center - 14);
  graphics.lineTo(center, center + 14);
  graphics.strokePath();

  if (orange) {
    graphics.fillStyle(0x263142, 0.82);
    graphics.fillCircle(center, center, 7);
  }
  const green = mode === 'green';
  const lightGlowRadius = green || red ? 14 : 10;
  const lightCoreRadius = green || red ? 7 : 5;
  graphics.fillStyle(lightColor, disabled ? 0.16 : green ? 0.16 : redLight ? 0.18 : 0.16);
  graphics.fillCircle(center, center, lightGlowRadius);
  graphics.fillStyle(lightColor, disabled ? 0.7 : 1);
  graphics.fillCircle(center, center, lightCoreRadius);
  graphics.fillStyle(0xffffff, disabled ? 0.28 : 0.78);
  graphics.fillCircle(center - 2, center - 2, 1.5);

  if (scene.textures.exists(key)) scene.textures.remove(key);
  graphics.generateTexture(key, SPIKE_DRONE_TEXTURE_SIZE, SPIKE_DRONE_TEXTURE_SIZE);
  graphics.destroy();
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
  const mirrorPoints = (points) => points.map((point) => ({
    x: centerX * 2 - point.x,
    y: point.y,
  }));
  const fillMirrored = (color, alpha, points) => {
    graphics.fillStyle(color, alpha);
    graphics.fillPoints(points, true);
    graphics.fillPoints(mirrorPoints(points), true);
  };

  // Dark silhouette: broad armored crown with long, blade-like lower fins.
  graphics.fillStyle(0x17050d, 1);
  graphics.fillPoints([
    { x: centerX, y: 4 },
    { x: 522, y: 32 },
    { x: 548, y: 72 },
    { x: 501, y: 88 },
    { x: 535, y: 122 },
    { x: 476, y: 113 },
    { x: 504, y: 174 },
    { x: 437, y: 137 },
    { x: 420, y: 210 },
    { x: 356, y: 158 },
    { x: 324, y: 214 },
    { x: centerX, y: 176 },
    { x: 236, y: 214 },
    { x: 204, y: 158 },
    { x: 140, y: 210 },
    { x: 123, y: 137 },
    { x: 56, y: 174 },
    { x: 84, y: 113 },
    { x: 25, y: 122 },
    { x: 59, y: 88 },
    { x: 12, y: 72 },
    { x: 38, y: 32 },
  ], true);

  fillMirrored(0x531020, 1, [
    { x: 18, y: 64 },
    { x: 92, y: 30 },
    { x: 176, y: 45 },
    { x: 215, y: 77 },
    { x: 172, y: 103 },
    { x: 111, y: 84 },
    { x: 56, y: 101 },
  ]);
  fillMirrored(0xa71932, 1, [
    { x: 50, y: 59 },
    { x: 117, y: 37 },
    { x: 181, y: 51 },
    { x: 208, y: 74 },
    { x: 166, y: 87 },
    { x: 111, y: 69 },
  ]);
  fillMirrored(0xe52d49, 0.96, [
    { x: 90, y: 51 },
    { x: 151, y: 48 },
    { x: 204, y: 71 },
    { x: 169, y: 79 },
    { x: 125, y: 66 },
  ]);

  fillMirrored(0x6f1328, 1, [
    { x: 54, y: 104 },
    { x: 112, y: 87 },
    { x: 174, y: 108 },
    { x: 211, y: 139 },
    { x: 171, y: 160 },
    { x: 130, y: 132 },
    { x: 82, y: 139 },
  ]);
  fillMirrored(0xc9203d, 1, [
    { x: 91, y: 105 },
    { x: 132, y: 96 },
    { x: 181, y: 117 },
    { x: 205, y: 138 },
    { x: 171, y: 145 },
    { x: 135, y: 122 },
  ]);
  fillMirrored(0x2b0915, 1, [
    { x: 126, y: 128 },
    { x: 171, y: 151 },
    { x: 144, y: 198 },
    { x: 116, y: 151 },
  ]);
  fillMirrored(0xef304c, 0.94, [
    { x: 154, y: 145 },
    { x: 199, y: 157 },
    { x: 224, y: 194 },
    { x: 190, y: 177 },
  ]);

  // Central armored face and pointed keel.
  graphics.fillStyle(0x3a0b19, 1);
  graphics.fillPoints([
    { x: centerX, y: 18 },
    { x: 363, y: 64 },
    { x: 343, y: 132 },
    { x: 319, y: 173 },
    { x: centerX, y: 211 },
    { x: 241, y: 173 },
    { x: 217, y: 132 },
    { x: 197, y: 64 },
  ], true);
  graphics.fillStyle(0x9b1931, 1);
  graphics.fillPoints([
    { x: centerX, y: 29 },
    { x: 344, y: 67 },
    { x: 324, y: 124 },
    { x: centerX, y: 157 },
    { x: 236, y: 124 },
    { x: 216, y: 67 },
  ], true);
  graphics.fillStyle(0xe32c49, 1);
  graphics.fillPoints([
    { x: centerX, y: 45 },
    { x: 324, y: 78 },
    { x: 309, y: 119 },
    { x: centerX, y: 143 },
    { x: 251, y: 119 },
    { x: 236, y: 78 },
  ], true);
  graphics.fillStyle(0xff5268, 0.72);
  graphics.fillTriangle(centerX, 45, centerX + 42, 78, centerX, 68);
  graphics.fillTriangle(centerX, 45, centerX - 42, 78, centerX, 68);

  graphics.fillStyle(0x250811, 1);
  graphics.fillPoints([
    { x: centerX, y: 61 },
    { x: 307, y: 82 },
    { x: centerX, y: 108 },
    { x: 253, y: 82 },
  ], true);
  graphics.fillStyle(0xf0445d, 1);
  graphics.fillPoints([
    { x: centerX, y: 68 },
    { x: 297, y: 83 },
    { x: centerX, y: 98 },
    { x: 263, y: 83 },
  ], true);
  graphics.fillStyle(0x280914, 1);
  graphics.fillPoints([
    { x: centerX, y: 74 },
    { x: 289, y: 83 },
    { x: centerX, y: 92 },
    { x: 271, y: 83 },
  ], true);

  // Mining laser emitter.
  graphics.fillStyle(0x2b0a17, 1);
  graphics.fillCircle(centerX, 137, 31);
  graphics.fillStyle(0x68162b, 1);
  graphics.fillCircle(centerX, 137, 24);
  graphics.fillStyle(0x120912, 1);
  graphics.fillCircle(centerX, 137, 16);
  graphics.lineStyle(2, 0xff7184, 0.62);
  graphics.strokeCircle(centerX, 137, 27);

  // A single restrained pair of auxiliary emitters.
  [centerX - 151, centerX + 151].forEach((nodeX) => {
    graphics.fillStyle(0x260812, 1);
    graphics.fillCircle(nodeX, 127, 14);
    graphics.fillStyle(0x8f172d, 1);
    graphics.fillCircle(nodeX, 127, 9);
    graphics.fillStyle(0xed4058, 0.86);
    graphics.fillCircle(nodeX - 1, 126, 4);
    graphics.lineStyle(2, 0xff8998, 0.38);
    graphics.strokeCircle(nodeX, 127, 11);
  });

  graphics.fillStyle(0x1f0710, 1);
  graphics.fillPoints([
    { x: centerX - 20, y: 159 },
    { x: centerX, y: 178 },
    { x: centerX + 20, y: 159 },
    { x: centerX + 12, y: 207 },
    { x: centerX, y: BOSS_HEIGHT - 2 },
    { x: centerX - 12, y: 207 },
  ], true);
  graphics.fillStyle(0xf21f3d, 1);
  graphics.fillTriangle(centerX - 11, 174, centerX, BOSS_HEIGHT - 3, centerX + 11, 174);

  graphics.lineStyle(3, 0xff6d80, 0.38);
  graphics.strokePoints([
    { x: centerX, y: 4 },
    { x: 522, y: 32 },
    { x: 548, y: 72 },
    { x: 501, y: 88 },
    { x: 535, y: 122 },
    { x: 476, y: 113 },
    { x: 504, y: 174 },
    { x: 437, y: 137 },
    { x: 420, y: 210 },
    { x: 356, y: 158 },
    { x: 324, y: 214 },
    { x: centerX, y: 176 },
    { x: 236, y: 214 },
    { x: 204, y: 158 },
    { x: 140, y: 210 },
    { x: 123, y: 137 },
    { x: 56, y: 174 },
    { x: 84, y: 113 },
    { x: 25, y: 122 },
    { x: 59, y: 88 },
    { x: 12, y: 72 },
    { x: 38, y: 32 },
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
