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
const MENU_MUSIC_PATH = 'assets/menu-music.mp3';
const GAMEPLAY_MUSIC_PATH = 'assets/game-music.mp3';
const PURPLE_BOOSTER_MUSIC_PATH = null;
const PLAYER_SHIP_IMAGE_PATH = 'assets/images/player-ship.svg';
const ECHO_DIALOG_CHARACTER_DELAY = 32;
const ECHO_DIALOG_BEEP_DURATION = 0.018;
const INTRO_EMPTY_SPACE_DURATION = 550;
const INTRO_AXIS_ARRIVAL_DURATION = 1450;
const INTRO_ECHO_ARRIVAL_DURATION = 650;
const INTRO_ECHO_ORBIT_DURATION = 1900;
const INTRO_ECHO_ORBIT_TURNS = 1;
const INTRO_ENERGY_LINK_FADE_DURATION = 260;
const INTRO_ECHO_HOP_HEIGHT = 13;
const INTRO_ECHO_HOP_DURATION = 190;
const INTRO_DIALOG_DELAY = 420;
const SUPABASE_URL = 'https://fqkpwigonxgnsynfdzyw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Up1cBihd6uOftnMkhj3A3w_ZH1q7YOR';
const SUPABASE_RANKING_TABLE = 'ranking';
const SUPABASE_SCORE_COLUMN = 'puntos';
const SUPABASE_STREAK_COLUMN = 'racha';
const DEFAULT_PLAYER_NAME = 'Anónimo';
const INITIAL_SPAWN_DELAY = 1500;
const MIN_SPAWN_DELAY = 600;
const SPAWN_DELAY_EASING = 1.8;
const PAIRED_SPAWN_MIN_SPACING = 96;
const BASE_GRAVITY = 220;
const MAX_SPEED_MULTIPLIER = 2;
const MAX_BALL_GRAVITY = BASE_GRAVITY * MAX_SPEED_MULTIPLIER;
const SPEED_TARGET_LEVEL = 4;
const STARFIELD_SPEED_RATIO = 0.32;
const MAX_STARFIELD_SPEED_MULTIPLIER = 2.6;
const BOOSTER_GRAVITY_RATIO = 0.8;
const MAX_BOOSTER_SPEED_MULTIPLIER = 1.8;
const MAX_BOOSTER_GRAVITY = Math.round(BASE_GRAVITY * MAX_BOOSTER_SPEED_MULTIPLIER);
const SHIP_SIDE_HIDE_RATIO = 1 / 3;
const SHIP_TEXTURE_WIDTH = 156;
const SHIP_TEXTURE_HEIGHT = 46;
const SHIP_SCALE = 142 / SHIP_TEXTURE_WIDTH;
const SHIP_WIDTH = Math.round(SHIP_TEXTURE_WIDTH * SHIP_SCALE);
const SHIP_HEIGHT = Math.round(SHIP_TEXTURE_HEIGHT * SHIP_SCALE);
const SHIP_RADIUS = 8;
const SHIELD_BUBBLE_RADIUS = 82;
const SHIELD_BUBBLE_DIAMETER = SHIELD_BUBBLE_RADIUS * 2;
const TIMED_BOOSTER_DURATION = 10000;
const RED_WAVE_DURATION = 15000;
const RED_WAVE_SPAWN_DELAY = 400;
const RED_WAVE_ENEMY_GRAVITY_RATIO = 0.72;
const RED_WAVE_MIN_ENEMY_SPACING = SHIP_WIDTH + 56;
const RED_WAVE_RECENT_ENEMY_HEIGHT = 230;
const WAVE_MIN_VERTICAL_SPAWN_SPACING = 120;
const MAX_ACTIVE_HOSTILE_SPAWNS = 6;
const MAX_ACTIVE_TOP_HOSTILE_SPAWNS = 2;
const TOP_HOSTILE_SPAWN_ZONE_HEIGHT = 170;
const OBRERA_SPAWN_CHANCE = 0.14;
const SCISSOR_SPAWN_CHANCE = 0.05;
const SCISSOR_SWARM_DURATION = 15000;
const SCISSOR_WAVE_SPAWN_DELAY = 650;
const SCISSOR_SPLIT_Y_RATIO = 0.32;
const SCISSOR_HALF_HORIZONTAL_SPEED = 94;
const SCISSOR_TEXTURE_WIDTH = 48;
const SCISSOR_TEXTURE_HEIGHT = 48;
const SCISSOR_HALF_TEXTURE_WIDTH = SCISSOR_TEXTURE_WIDTH / 2;
const SCISSOR_HITBOX_WIDTH = 30;
const SCISSOR_HITBOX_HEIGHT = 36;
const SCISSOR_HALF_HITBOX_WIDTH = SCISSOR_HITBOX_WIDTH / 2;
const SCISSOR_HALF_HITBOX_HEIGHT = 36;
const SCISSOR_CUT_SPARK_POINTS = [
  { x: 30.4, y: 13, radius: 1.7, alpha: 0.92 },
  { x: 33.6, y: 18, radius: 1.2, alpha: 0.78 },
  { x: 30.8, y: 24, radius: 1.4, alpha: 0.86 },
  { x: 33.1, y: 31, radius: 1.8, alpha: 0.9 },
  { x: 31.2, y: 39, radius: 1.1, alpha: 0.76 },
  { x: 33.4, y: 47, radius: 1.3, alpha: 0.82 },
];
const REPLICATOR_WAVE_DURATION = 15000;
const REPLICATOR_WAVE_SPAWN_DELAY = 900;
const REPLICATOR_SPAWN_CHANCE = 0.02;
const TRAVEL_REPLICATOR_GRAVITY_RATIO = 0.56;
const REPLICATOR_SCALE = SHIP_SCALE * 0.72;
const REPLICATOR_FOLLOW_DELAY_MIN = 70;
const REPLICATOR_FOLLOW_DELAY_MAX = 120;
const REPLICATOR_CHAIN_FOLLOW_DELAY = 90;
const REPLICATOR_FOLLOW_SPEED = 200;
const REPLICATOR_GLITCH_INTERVAL = 90;
const REPLICATOR_GLITCH_SLICE_COUNT = 6;
const REPLICATOR_GLITCH_PIXEL_COUNT = 9;
const REPLICATOR_HITBOX_WIDTH = 96;
const REPLICATOR_HITBOX_HEIGHT = 28;
const DRONE_WAVE_DURATION = 15000;
const DRONE_WAVE_SPAWN_DELAY = 680;
const GIRODRONE_WAVE_DURATION = 15000;
const GIRODRONE_WAVE_SPAWN_DELAY = 920;
const CRYSTALLIZED_WAVE_DURATION = 15000;
const CRYSTALLIZED_WAVE_SPAWN_DELAY = 850;
const CRYSTALLIZED_ORB_CHANCE = 0.05;
const CRYSTALLIZED_ORB_RADIUS = 20;
const CRYSTALLIZED_ORB_CRYSTAL_SHAPE = [
  [-18, 9], [-13, 7], [-9, 8], [-5, 5],
  [0, 8], [5, 5], [9, 8], [14, 7],
  [18, 9], [17, 13], [13, 17], [7, 20],
  [0, 20], [-7, 19], [-13, 16], [-17, 13],
];
const CRYSTALLIZED_ORB_SAFE_APPROACH_MEMORY = 100;
const ASTEROID_WAVE_DURATION = 15000;
const ASTEROID_WAVE_SPAWN_DELAY = 760;
const TRAVEL_ASTEROID_CHANCE = 0.10;
const TRAVEL_PLASMA_CHANCE = 0.04;
const SPIKE_DRONE_SPAWN_CHANCE = 0.07;
const GIRODRONE_SPAWN_CHANCE = 0.05;
const SPIKE_DRONE_FOLDED_RADIUS = 18;
const SPIKE_DRONE_EXPANDED_RADIUS = SPIKE_DRONE_FOLDED_RADIUS * 3;
const SPIKE_DRONE_FOLDED_DURATION = 1100;
const SPIKE_DRONE_WARNING_GREEN_DURATION = 1500;
const SPIKE_DRONE_WARNING_RED_DURATION = 500;
const SPIKE_DRONE_WARNING_DURATION = SPIKE_DRONE_WARNING_GREEN_DURATION + SPIKE_DRONE_WARNING_RED_DURATION;
const SPIKE_DRONE_EXPANDED_DURATION = 1000;
const SPIKE_DRONE_GRAVITY_RATIO = 0.68;
const SPIKE_DRONE_TEXTURE_SIZE = 120;
const GIRODRONE_SCALE = 0.72;
const GIRODRONE_CORE_RADIUS = Math.round(SPIKE_DRONE_FOLDED_RADIUS * GIRODRONE_SCALE);
const GIRODRONE_SATELLITE_RADIUS = GIRODRONE_CORE_RADIUS;
const GIRODRONE_DAMAGE_HALO_RADIUS = 30;
const GIRODRONE_ORBIT_RADIUS = 46;
const GIRODRONE_ORBIT_SPEED = 0.0018;
const GIRODRONE_ENERGY_PARTICLE_COUNT = 9;
const GIRODRONE_CORE_ENERGY_PARTICLE_COUNT = 7;
const GIRODRONE_DISABLE_SCORE = 8;
const RED_NEEDLE_SPAWN_CHANCE = 0.04;
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
const TRAVEL_SENTINEL_CHANCE = 0.015;
const TRAVEL_SENTINEL_COOLDOWN = 26000;
const TRAVEL_THREAT_POOL_WEIGHT = 1;
const TRAVEL_HAZARD_POOL_WEIGHT = 0.9;
const TRAVEL_BOOSTER_POOL_WEIGHT = 0.72;
const BOSS_LASER_WARN_DURATION = 1100;
const BOSS_LASER_DURATION = 2000;
const BOSS_ATTACK_GAP = 1500;
const BOSS_WIDTH = 560;
const BOSS_HEIGHT = 220;
const SENTINEL_TARGET_Y = 112;
const BOSS_LASER_WIDTH = 32;
const BOSS_LASER_SENTINEL_OVERLAP = 96;
const BOSS_HORIZONTAL_LASER_HEIGHT = 30;
const WAVE_CLEAR_DELAY = 2200;
const ECHO_WAVE_WARNING_RESUME_DELAY = 2000;
const WAVE_POST_DELAY = 900;
const BOSS_CUE_BAND_HEIGHT = 76;
const BOSS_CUE_HOLD_DURATION = 900;
const BOSS_CUE_FADE_IN_DURATION = 260;
const BOSS_CUE_FADE_DURATION = 520;
const BOSS_LASER_MIN_X_GAP = 90;
const BOSS_LASER_CHAIN_MIN_X_GAP = SHIP_WIDTH + 34;
const BOSS_LASER_TRACKING_CHANCE = 0.55;
const BOSS_LASER_TRACKING_JITTER = 18;
const BOSS_HORIZONTAL_LASER_MIN_Y_GAP = SHIP_HEIGHT + 32;
const BOSS_HORIZONTAL_LASER_TRACKING_CHANCE = 0.62;
const BOSS_HORIZONTAL_LASER_TRACKING_JITTER = 18;
const RED_ENEMY_SWAY_SPEED = 0.0042;
const RED_ENEMY_SWAY_MAX_VELOCITY = 24;
const RED_ENEMY_HITBOX_WIDTH = 30;
const RED_ENEMY_HITBOX_HEIGHT = 36;
const RED_ENEMY_SHIELD_RADIUS = 16;
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
const SHIP_TRAIL_BASE_ALPHA = 0.035;
const SHIP_TRAIL_ALPHA_RANGE = 0.31;
const SHIP_TRAIL_CORE_ALPHA_RATIO = 0.52;
const SHIP_TRAIL_IDLE_INTERVAL = 55;
const SHIP_TRAIL_IDLE_SPEED = 0.08;
const SHIP_TRAIL_IDLE_MAX_DELTA = 34;
const REPLICATOR_TRAIL_DURATION = Math.round(SHIP_TRAIL_DURATION * 0.5);
const REPLICATOR_TRAIL_MAX_POINTS = Math.round(SHIP_TRAIL_MAX_POINTS * 0.5);
const SHIP_EYE_LOCAL_X = 0;
const SHIP_EYE_LOCAL_Y = -1;
const SHIP_EYE_GLOW_RADIUS = 18;
const SHIP_EYE_CORE_RADIUS = 7;
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
const LIFE_INDICATOR_FILL_COLOR = 0xffd84d;
const LIFE_INDICATOR_HEAL_COLOR = 0xffe169;
const LIFE_INDICATOR_BORDER_COLOR = 0xffe8a3;
const LIFE_INDICATOR_HEAL_BORDER_COLOR = 0xfff0b8;
const FINAL_DAMAGE_GAME_OVER_DELAY = 1450;
const ENERGY_STREAK_REWARD_TARGET = 50;
const ENERGY_STREAK_REWARD_SCORE = 50;
const CONTAMINATED_ORB_CHANCE = 0.2;
const ENERGY_PURIFIER_COLOR = '#d9dee6';
const VITAL_EXPANDER_COLOR = '#ff8a2a';
const VITAL_EXPANDER_LOCK_COLOR = 'rgba(77, 255, 136, 0.31)';
const VITAL_EXPANDER_LIFE_BONUS = 2;
const POINT_POPUP_STACK_WINDOW = 260;
const POINT_POPUP_STACK_DISTANCE = 78;
const POINT_POPUP_STACK_OFFSET = 24;
const POINT_POPUP_LIFE_INDICATOR_MARGIN = 26;
const POINT_POPUP_DURATION = 620;
const POINT_POPUP_FADE_DELAY = 390;
const STREAK_POINT_POPUP_DURATION = 1000;
const STREAK_POINT_POPUP_FADE_DELAY = 620;
const STREAK_POINT_POPUP_COLORS = ['#ff4f68', '#ffd84d', '#7dffae', '#76ffe8', '#4da3ff', '#d7a8ff'];
const ENERGY_RESONANCE_COLOR = '#ff66c4';
const ENERGY_RESONANCE_POPUP_COLORS = ['#ff66c4', '#ff9fdd', '#ffd5f0', '#ff4fb8'];
const ENERGY_RESONANCE_REQUIRED_ORBS = 3;
const ECHO_TEXTURE_SIZE = 72;
const ECHO_SIZE = 28;
const ECHO_HOME_OFFSET_X = -62;
const ECHO_HOME_OFFSET_Y = -54;
const ECHO_ATTACK_DETECTION_RADIUS = 128;
const ECHO_ATTACK_SPEED = 980;
const ECHO_RETURN_SPEED = 620;
const ECHO_ATTACK_CHANCE = 0.3;
const ECHO_HELP_COLOR = '#ff4f4f';
const ECHO_HELP_TINT = 0xff4f4f;
const ECHO_EYE_IDLE_GLOW_COLOR = 0xffd84d;
const ECHO_EYE_IDLE_CORE_COLOR = 0xfff0a8;
const ECHO_EYE_ATTACK_GLOW_COLOR = 0xff2222;
const ECHO_EYE_ATTACK_CORE_COLOR = 0xff6969;
const ECHO_COLLISION_RADIUS = 13;
const ECHO_EYE_GLOW_RADIUS = 6;
const ECHO_EYE_CORE_RADIUS = 2.7;
const ECHO_FLOAT_RADIUS = 7;
const ECHO_IDLE_SPIN_MIN_DELAY = 2800;
const ECHO_IDLE_SPIN_MAX_DELAY = 6800;
const ECHO_IDLE_SPIN_MIN_DURATION = 720;
const ECHO_IDLE_SPIN_MAX_DURATION = 980;
const ECHO_LEVEL_ORBIT_DURATION = 1450;
const ECHO_LEVEL_ORBIT_TURNS = 2;
const ECHO_LEVEL_ORBIT_RADIUS_X = 66;
const ECHO_LEVEL_ORBIT_RADIUS_Y = 48;
const ECHO_LEVEL_ORBIT_TRANSITION_RATIO = 0.18;
const ECHO_LEVEL_UPGRADE_SETTLE_DELAY = 90;
const ECHO_TUTORIAL_LINES = [
  "Iniciando sistema...",
  "Despierta, Axis.\n\nSoy Echo, tu unidad de apoyo.",
  "Nuestra misión es simple: explorar más allá de los límites conocidos del espacio.",
  "Sin embargo, existe una amenaza.\n\nUna anomalía conocida como 'La Corrupción' se ha extendido por el universo durante décadas, contaminando todo lo que encuentra.",
  "Las naves afectadas por ella se vuelven inestables y hostiles.\n\nMantén la distancia.",
  "Para avanzar necesitarás recolectar Orbes de Energía.\n\nSon esenciales para mantener tu integridad operativa.",
  "Atención: algunos orbes están contaminados. Podrás reconocerlos por su núcleo oscuro y las emisiones verdes que los rodean.\n\nNo los recojas.",
  "Hay algo más que debes saber.",
  "Eres la nave número 229 enviada en esta misión.",
  "Las 228 anteriores no regresaron.",
  "Mi base de datos contiene los registros de cada fracaso.",
  "...Las probabilidades de éxito son bajas.",
  "Pero cada expedición ha llegado un poco más lejos que la anterior.",
  "Quizá tú también puedas hacerlo.",
  "Adelante, Axis.\n\n (Mantén pulsado el botón azul para mover la nave)",
];
const ECHO_SWARM_WARNING_LINES = [
  "Atención, Axis. Amenaza detectada.",
  "Se aproxima un Enjambre de Obreras.",
  "Las unidades obreras son antiguas naves mineras corrompidas. Individualmente representan un riesgo bajo.",
  "En grupo son extremadamente peligrosas.",
  "Recomendación: evita cualquier contacto.",
];
const ECHO_SCISSOR_SWARM_WARNING_LINES = [
  "Atención, Axis. Unidades de clase Escisora identificadas.",
  "Estas variantes fueron diseñadas para atravesar fisuras y túneles inaccesibles para una Obrera convencional.",
  "Durante la aproximación se dividirán en dos unidades independientes.",
  "Las trayectorias resultantes pueden dificultar las maniobras evasivas.",
  "Mantente alerta.",
];
const ECHO_REPLICATOR_WARNING_LINES = [
  "Atención, Axis. Formación de Replicadores identificada.",
  "Estas unidades fueron diseñadas para combatir amenazas no catalogadas.",
  "Su protocolo principal consiste en copiar la configuración y el comportamiento del objetivo.",
  "Posteriormente utilizan esa información para anticipar sus movimientos.",
  "La Corrupción ha eliminado los criterios de activación del sistema.",
  "Ahora cualquier nave es considerada hostil.",
  "Cada Replicador intentará seguir tu trayectoria con un breve retraso.",
  "Ten presente que aprenderán de cada maniobra.",
];
const ECHO_DRONE_WARNING_LINES = [
  "Atención, Axis. Identificando unidades de combate autónomas.",
  "Los registros las identifican como Drones.",
  "Originalmente protegían infraestructuras críticas de ataques y sabotajes.",
  "La Corrupción ha alterado sus protocolos de identificación.",
  "Ahora consideran cualquier nave una amenaza.",
  "Mientras su núcleo permanezca en verde, sus defensas estarán inactivas.",
  "Ese es el momento de neutralizarlos.",
  "Cuando cambien a rojo, desplegarán cuchillas energéticas de medio alcance.",
  "Evita el contacto hasta que vuelvan a estabilizarse.",
];
const ECHO_GIRODRONE_WARNING_LINES = [
  "Atención, Axis. Girodrones identificados.",
  "Los registros indican que estas unidades protegían infraestructuras críticas.",
  "El módulo central presenta ciclos periódicos de vulnerabilidad.",
  "El módulo orbital, no.",
  "Cuando el núcleo emita una señal verde, podrás neutralizarlo.",
  "Cuando emita una señal roja, mantén la distancia.",
  "Evita cualquier contacto con los campos energéticos de ambas unidades.",
];
const ECHO_CRYSTALLIZED_WAVE_WARNING_LINES = [
  "Atención, Axis. Detecto una Tormenta Cristalizada.",
  "Los orbes conservan su energía, pero han acumulado hielo y residuos minerales en su cara inferior.",
  "La parte superior permanece estable y puede recogerse con seguridad.",
  "No permitas que la costra inferior impacte contra la nave.",
  "Y no dejes escapar los orbes. Su energía sigue siendo esencial.",
];
const ECHO_SENTINEL_WARNING_LINES = [
  "Atención, Axis. Detecto una unidad de clase Centinela.",
  "Antes de la Corrupción, estas naves servían como plataformas móviles de minería a gran escala.",
  "Las obreras operaban a su alrededor, extrayendo recursos y regresando periódicamente para descargar material y realizar reparaciones.",
  "Sus emisores láser estaban diseñados para fracturar asteroides enteros.",
  "Ahora esos mismos sistemas apuntan a cualquier objetivo cercano.",
  "Mantente alejado de sus haces. No sobrevivirás a un impacto directo.",
];
const ECHO_RED_NEEDLE_WARNING_LINES = [
  "Atención, Axis. Unidad de clase Aguja Roja identificada.",
  "Estas naves fueron desplegadas durante las primeras fases de la expansión de la Corrupción.",
  "Su función consistía en localizar focos de infección y neutralizarlos a larga distancia.",
  "La estrategia resultó ineficaz.",
  "Muchas unidades acabaron siendo corrompidas.",
  "Los protocolos de combate permanecen activos.",
  "Los protocolos de identificación, no.",
  "Evita sus disparos.",
];
const ECHO_ASTEROID_BELT_WARNING_LINES = [
  "Atención, Axis. Entramos en un Cinturón de Asteroides.",
  "Esta región contiene una concentración inusual de fragmentos rocosos.",
  "Antes de la Corrupción, las flotas mineras operaban en zonas como esta.",
  "Ahora solo quedan restos a la deriva.",
  "Evita las colisiones.",
  "Sería una forma particularmente decepcionante de terminar la misión.",
];
const ECHO_PLASMA_WAVE_WARNING_LINES = [
  "Atención, Axis. Detecto una Marea de Plasma.",
  "Las expediciones anteriores registraron este fenómeno únicamente en regiones afectadas por la Corrupción.",
  "Su origen sigue siendo desconocido.",
  "Las corrientes energéticas presentan una única brecha estable, pero esta se desplaza constantemente.",
  "Cruza únicamente a través de ella.",
  "El contacto directo con el plasma provocará daños graves.",
];
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
const STORY_BOSS_KINDS = ['red', 'asteroid', 'scissors', 'redNeedleBoss', 'boss', 'drones', 'plasma', 'girodrones', 'replicators', 'crystallized'];
const BOSS_ONLY_BOSS_KINDS = STORY_BOSS_KINDS.slice();
const SHIELD_BLOCK_SCORE = 10;
const SPIKE_DRONE_DISABLE_SCORE = 5;
const INITIAL_HEART_CAPACITY = 3;
const MAX_UPGRADE_LEVEL = 5;
const UPGRADE_RESUME_DELAY = 2000;
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
      fixedStep: false,
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
let currentBoosterGravity = getBoosterGravityForCurrentSpeed();
let currentSpawnDelay = INITIAL_SPAWN_DELAY;
let maxLives = INITIAL_HEART_CAPACITY;
let lives = INITIAL_HEART_CAPACITY;
let nextUpgradeScore = UPGRADE_POINTS_REQUIRED;
let levelProgressScore = 0;
let playerLevel = 1;
let lifeBoosterLevel = 0;
let shieldBoosterLevel = 0;
let scoreBoosterLevel = 0;
let energyRefinerLevel = 0;
let energyPurifierLevel = 0;
let echoHelpLevel = 0;
let vitalExpanderLevel = 0;
let energyResonanceLevel = 0;
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
let shieldDefeatLevelBonus = 0;
let musicEnabled = true;
let soundEffectsVolume = 1;
let musicVolume = 1;
let audioUnlockListenersBound = false;
let audioUnlocked = false;
let musicPlaybackBlocked = false;
let pageAudioListenersBound = false;
let pageAudioSuspended = false;
let pageAudioWasPlaying = false;
let echoDialogAudioContext = null;
let uiScaleResizeBound = false;

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
  if (state === 'intro') {
    updateSpaceBackground(this, delta, time);
    if (this.ship && this.ship.visible) {
      updateShipPropulsion(this, delta);
      updateShipEyeGlow(this);
    }
    updateEchoEyePosition(this);
    return;
  }
  if (state === 'tutorial') {
    updateSpaceBackground(this, delta, time);
    updateShipPropulsion(this, delta);
    updateShipEyeGlow(this);
    updateEchoCompanion(this, delta);
    return;
  }
  if (state === 'leveling') {
    updateSpaceBackground(this, delta, time);
    updateShipPropulsion(this, delta);
    updateShipEyeGlow(this);
    updateEchoCompanion(this, delta);
    return;
  }
  if (state !== 'playing') return;

  updateSpaceBackground(this, delta, time);
  updateShipPropulsion(this, delta);
  updateShipTilt(this);
  updateShipEyeGlow(this);
  updateShipLifeIndicator(this);
  updateEchoCompanion(this, delta);
  updateEchoAttacks(this);
  updateEnemyPropulsion(this, delta);
  updateRedNeedles(this);
  updateScissors(this);
  updateRedEnemySway(this, time);
  updateReplicators(this, time, delta);
  updateSpikeDrones(this);
  updateGiroDrones(this, delta);
  updateScoreBooster(this);
  updateShieldBooster(this);
  updateRedWave(this);
  updateDroneWave(this);
  updateAsteroidWave(this);
  updatePlasmaWave(this);
  updatePlasmaBars(this, delta);
  updateBossWave(this);
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
  scene.previousShipPosition = { x: previousX, y: previousY, at: now };
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
  updateShieldBubble(scene);
  updateEchoCompanion(scene, 0);
  updateShipEyeGlow(scene);
  updateShipLifeIndicator(scene);
  if (usesXyControlHandle(scene) && scene.xyControl && scene.xyControl.visible && !isDraggingShip) {
    updateXyControlFromShip(scene);
  }
}

function updateShipEyeGlow(scene) {
  if (!scene || !scene.ship || !scene.shipEyeGlow || !scene.shipEyeCore) return;

  const angle = Phaser.Math.DegToRad(scene.ship.angle || 0);
  const offsetX = SHIP_EYE_LOCAL_X * SHIP_SCALE;
  const offsetY = SHIP_EYE_LOCAL_Y * SHIP_SCALE;
  const rotatedX = (Math.cos(angle) * offsetX) - (Math.sin(angle) * offsetY);
  const rotatedY = (Math.sin(angle) * offsetX) + (Math.cos(angle) * offsetY);
  const x = scene.ship.x + rotatedX;
  const y = scene.ship.y + rotatedY;
  const visible = Boolean(scene.ship.visible !== false && (scene.shipEyeGlow.alpha > 0 || scene.shipEyeCore.alpha > 0));

  [scene.shipEyeGlow, scene.shipEyeCore].forEach((eyePart) => {
    eyePart.setPosition(x, y);
    eyePart.setRotation(scene.ship.rotation || 0);
    eyePart.setVisible(visible);
  });
}

function flashShipEye(scene) {
  if (!scene || !scene.shipEyeGlow || !scene.shipEyeCore || !scene.tweens) return;

  scene.tweens.killTweensOf([scene.shipEyeGlow, scene.shipEyeCore]);
  updateShipEyeGlow(scene);
  scene.shipEyeGlow
    .setFillStyle(0xffd84d, 1)
    .setAlpha(0.42)
    .setScale(0.72)
    .setVisible(true);
  scene.shipEyeCore
    .setFillStyle(0xffffb8, 1)
    .setAlpha(0.95)
    .setScale(0.82)
    .setVisible(true);

  scene.tweens.add({
    targets: scene.shipEyeGlow,
    alpha: 0,
    scale: 1.24,
    duration: 260,
    ease: 'Sine.easeOut',
    onUpdate: () => updateShipEyeGlow(scene),
    onComplete: () => updateShipEyeGlow(scene),
  });
  scene.tweens.add({
    targets: scene.shipEyeCore,
    alpha: 0,
    scale: 1.08,
    duration: 210,
    ease: 'Sine.easeOut',
    onUpdate: () => updateShipEyeGlow(scene),
    onComplete: () => updateShipEyeGlow(scene),
  });
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
  updateShipEyeGlow(scene);
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
  scene.ship.setScale(SHIP_SCALE, SHIP_SCALE);
  if (isShieldActive(scene)) {
    scene.ship.body.setSize(SHIELD_BUBBLE_DIAMETER / SHIP_SCALE, SHIELD_BUBBLE_DIAMETER / SHIP_SCALE, true);
    return;
  }

  scene.ship.body.setSize(SHIP_TEXTURE_WIDTH, SHIP_TEXTURE_HEIGHT, true);
}

function setShipTextureForCurrentState(scene) {
  if (!scene.ship) return;

  scene.ship.setTexture('ship');
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
  for (let i = 0; i < 12; i += 1) {
    const t = i / 11;
    const radius = SHIELD_BUBBLE_RADIUS * (1 - t * 0.58);
    const alpha = 0.018 + t * 0.022;
    scene.shieldBubble.fillStyle(0x4da3ff, alpha);
    scene.shieldBubble.fillCircle(scene.ship.x, scene.ship.y, radius);
  }
  scene.shieldBubble.lineStyle(5, 0x4da3ff, 0.08);
  scene.shieldBubble.strokeCircle(scene.ship.x, scene.ship.y, SHIELD_BUBBLE_RADIUS + 3);
  scene.shieldBubble.lineStyle(3, 0x9fd9ff, 0.34);
  scene.shieldBubble.strokeCircle(scene.ship.x, scene.ship.y, SHIELD_BUBBLE_RADIUS - 2);
  scene.shieldBubble.lineStyle(1, 0xffffff, 0.2);
  scene.shieldBubble.strokeCircle(scene.ship.x, scene.ship.y, SHIELD_BUBBLE_RADIUS - 12);
}

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
  return kind === 'damageBooster' || isScissorKind(kind) || kind === 'spikeDrone' || kind === 'giroDrone' || isAsteroidKind(kind);
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

function getShipHitboxPolygon(scene) {
  const x = scene.ship.x;
  const y = scene.ship.y;
  return [
    { x, y: y - 18 },
    { x: x + 40, y: y - 10 },
    { x: x + 67, y: y + 5 },
    { x: x + 44, y: y + 16 },
    { x: x + 15, y: y + 19 },
    { x: x - 15, y: y + 19 },
    { x: x - 44, y: y + 16 },
    { x: x - 67, y: y + 5 },
    { x: x - 40, y: y - 10 },
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

function setUiDepth(scene) {
  [
    scene.menuContainer,
    scene.gameOverContainer,
    scene.rankingContainer,
    scene.pauseOverlay,
    scene.optionsOverlay,
    scene.upgradeOverlay,
    scene.echoTutorialOverlay,
  ].forEach((item) => {
    if (item) item.setDepth(UI_DEPTH);
  });

  if (scene.shieldBubble) scene.shieldBubble.setDepth(SHIP_DEPTH + 1);
  if (scene.shipEyeGlow) scene.shipEyeGlow.setDepth(SHIP_DEPTH + 1);
  if (scene.shipEyeCore) scene.shipEyeCore.setDepth(SHIP_DEPTH + 2);
  if (scene.echoCompanion) scene.echoCompanion.setDepth(SHIP_DEPTH + 2);
  if (scene.echoEyeGlow) scene.echoEyeGlow.setDepth(SHIP_DEPTH + 3);
  if (scene.echoEyeCore) scene.echoEyeCore.setDepth(SHIP_DEPTH + 4);
}

// --- Control de estados ---

function showMenu() {
  cancelIntroSequence(this);
  clearEchoTutorialTimer(this);
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
  playMenuMusic(this);
  showOverlayScreen(this, 'menu');
  resetCounters.call(this);
  hideEchoCompanion(this);
  setHudVisible(this, false);
}

function showRanking() {
  cancelIntroSequence(this);
  state = 'ranking';
  isDraggingShip = false;
  this.xyPauseResumeArmed = false;
  setPauseSettingsVisible(false);
  setXyControlVisible(this, false);
  this.optionsReturnScreen = null;
  this.input.setDefaultCursor('default');
  playMenuMusic(this);
  hideEchoCompanion(this);
  setHudVisible(this, false);
  showOverlayScreen(this, 'ranking');
  loadRankingInto(this.rankingContainer && this.rankingContainer.list, this.rankingContainer && this.rankingContainer.status, 10);
}

function startGame(options = {}) {
  cancelIntroSequence(this);
  clearEchoTutorialTimer(this);
  currentGameMode = getValidGameMode(options.mode);
  const shouldShowEchoTutorial = currentGameMode === 'xy' && !options.skipEchoTutorial;
  state = shouldShowEchoTutorial ? 'intro' : 'playing';
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
  setHudVisible(this, !shouldShowEchoTutorial);
  resetCounters.call(this);
  if (isInfiniteGameMode()) {
    enableInfiniteModeThreats(this);
  }
  updateEchoCompanion(this, 0);
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

  setXyControlVisible(this, false);
  if (isXyGameMode()) {
    resetXyShipControl(this);
  } else {
    moveShipTo(this, getGameWidth(this) / 2, getShipY(this));
    updateXyControlFromShip(this);
  }

  if (shouldShowEchoTutorial) {
    startGameIntro(this);
    return;
  }

  beginGameplayAfterEchoTutorial(this);
}

function startGameIntro(scene) {
  if (!scene || !scene.ship || !scene.echoCompanion) {
    startEchoTutorial(scene);
    return;
  }

  cancelIntroSequence(scene);
  state = 'intro';
  isDraggingShip = false;
  showOverlayScreen(scene, null);
  setHudVisible(scene, false);
  setXyControlVisible(scene, false);
  clearShipTrail(scene);

  const centerX = getGameWidth(scene) / 2;
  const shipHomeY = getShipY(scene);
  const sequence = {
    orbit: { progress: 0 },
  };
  scene.introSequence = sequence;

  scene.ship
    .setVisible(false)
    .setPosition(centerX - 34, getGameHeight(scene) + SHIP_HEIGHT)
    .setAngle(-7);
  scene.ship.body.reset(scene.ship.x, scene.ship.y);
  scene.shipEyeGlow.setAlpha(0).setScale(0.72).setVisible(false);
  scene.shipEyeCore.setAlpha(0).setScale(0.82).setVisible(false);
  hideEchoCompanion(scene);

  scene.time.delayedCall(INTRO_EMPTY_SPACE_DURATION, () => {
    if (!isIntroSequenceActive(scene, sequence)) return;

    scene.ship.setVisible(true);
    sequence.axisArrivalTween = scene.tweens.add({
      targets: scene.ship,
      x: centerX,
      y: shipHomeY,
      angle: 0,
      duration: INTRO_AXIS_ARRIVAL_DURATION,
      ease: 'Sine.easeInOut',
      onUpdate: () => {
        scene.ship.body.reset(scene.ship.x, scene.ship.y);
        updateShipEyeGlow(scene);
      },
      onComplete: () => startIntroEchoArrival(scene, sequence),
    });
  });
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
        startEchoTutorial(scene);
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

function isIntroSequenceActive(scene, sequence) {
  return Boolean(scene && state === 'intro' && scene.introSequence === sequence);
}

function cancelIntroSequence(scene) {
  if (!scene || !scene.introSequence) return;
  const sequence = scene.introSequence;
  [
    sequence.axisArrivalTween,
    sequence.echoArrivalTween,
    sequence.echoOrbitTween,
    sequence.energyLinkFadeTween,
    sequence.activationBurstTween,
    sequence.shipActivationTween,
    sequence.eyeGlowTween,
    sequence.eyeCoreTween,
    sequence.echoSettleTween,
    sequence.echoHopTween,
  ].forEach((tween) => {
    if (tween && tween.stop) tween.stop();
  });
  clearIntroEnergyLink(sequence);
  if (sequence.activationBurst) sequence.activationBurst.destroy();
  if (scene.ship) scene.ship.setScale(SHIP_SCALE);
  if (scene.tweens && sequence.orbit) scene.tweens.killTweensOf(sequence.orbit);
  scene.introSequence = null;
}

function beginGameplayAfterEchoTutorial(scene) {
  if (!scene) return;

  state = 'playing';
  showOverlayScreen(scene, null);
  setHudVisible(scene, true);
  setXyControlVisible(scene, true);
  if (isXyGameMode()) {
    resetXyShipControl(scene);
  }

  if (isBossOnlyGameMode()) {
    queueNextBossOnlyWave(scene);
    pauseBeforeFirstGameplaySpawn(scene);
    return;
  }

  // Primera bola inmediata, luego spawn periodico
  spawnBall(scene);
  scheduleNextSpawn(scene);
  restartBackgroundMusic(scene);
}

function pauseBeforeFirstGameplaySpawn(scene) {
  if (!scene) return;

  state = 'paused';
  isDraggingShip = false;
  scene.resumeSpawnDelay = null;
  setPauseOverlayMode(scene, 'normal');
  setXyControlActive(scene, false);
  prepareControlPauseResume(scene);
  showOverlayScreen(scene, null);
  setPauseSettingsVisible(true);
  restartBackgroundMusic(scene);
}

function endGame() {
  if (state !== 'playing' && state !== 'paused' && state !== 'dying') return; // Evitar llamadas dobles
  cancelIntroSequence(this);
  clearEchoTutorialTimer(this);
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
  hideEchoCompanion(this);
  playMenuMusic(this);
  setHudVisible(this, false);
  showOverlayScreen(this, 'gameover');
  if (isBossOnlyGameMode()) {
    this.gameOverContainer.finalScore.setText('Solo Jefes - Jefes superados: ' + Math.max(0, this.bossOnlyBossNumber - 1));
    prepareUnrankedGameOver(this);
  } else if (isXyInfiniteGameMode()) {
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
  scene.scissorSpawnsUnlocked = true;
  scene.droneSpawnsUnlocked = true;
  scene.giroDroneSpawnsUnlocked = true;
  scene.asteroidSpawnsUnlocked = true;
  scene.plasmaSpawnsUnlocked = true;
  scene.redNeedleSpawnsUnlocked = true;
  scene.replicatorSpawnsUnlocked = true;
  scene.crystallizedOrbSpawnsUnlocked = true;
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
  currentGravity = isBossOnlyGameMode() ? MAX_BALL_GRAVITY : BASE_GRAVITY;
  currentBoosterGravity = getBoosterGravityForCurrentSpeed();
  currentSpawnDelay = isBossOnlyGameMode() ? MIN_SPAWN_DELAY : INITIAL_SPAWN_DELAY;
  maxLives = INITIAL_HEART_CAPACITY;
  lives = maxLives;
  levelProgressScore = 0;
  playerLevel = 1;
  nextUpgradeScore = getLevelRequirement(playerLevel);
  lifeBoosterLevel = 0;
  shieldBoosterLevel = 0;
  scoreBoosterLevel = 0;
  energyRefinerLevel = 0;
  energyPurifierLevel = 0;
  echoHelpLevel = 0;
  vitalExpanderLevel = 0;
  energyResonanceLevel = 0;
  energyRefinerLevelBonus = 0;
  shieldDefeatLevelBonus = 0;
  enemyTrailTimer = 0;
  this.previousShipPosition = null;
  this.echoAttackTarget = null;
  this.echoReturningHome = false;
  resetEchoPersonality(this);
  if (this.echoCompanion) this.echoCompanion.clearTint();
  setEchoEyeAttacking(this, false);
  clearShipTrail(this);
  this.nextRedWaveEligibleAt = 0;
  this.nextAsteroidWaveEligibleAt = 0;
  this.obreraSpawnsUnlocked = false;
  this.scissorSpawnsUnlocked = false;
  this.droneSpawnsUnlocked = false;
  this.giroDroneSpawnsUnlocked = false;
  this.asteroidSpawnsUnlocked = false;
  this.plasmaSpawnsUnlocked = false;
  this.redNeedleSpawnsUnlocked = false;
  this.replicatorSpawnsUnlocked = false;
  this.crystallizedOrbSpawnsUnlocked = false;
  this.replicatorShipHistory = [];
  this.travelSentinelUnlocked = false;
  this.nextTravelSentinelEligibleAt = 0;
  this.pendingBossWave = null;
  this.pendingBossWaves = [];
  this.infiniteBossBag = [];
  this.bossOnlyBossNumber = 0;
  this.bossOnlyTypeRevealed = false;
  this.levelUpgradeSequenceActive = false;
  resetBossWave(this);
  updatePlayerLevelText(this);
  updateStreakText();
  updateSpeedTexts(this);
  updateUpgradeBar(this);
  updateUpgradeStatusIcons(this);
  updateLivesText(this);
  setShipTextureForCurrentState(this);
  updateEchoCompanion(this, 0);
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
    clearShipDamageFeedback(scene);
    setShipTextureForCurrentState(scene);
    refreshShipSize(scene);
    moveShipTo(scene, getGameWidth(scene) / 2, getShipY(scene));
  }
  if (scene.shipEyeGlow && scene.shipEyeCore) {
    scene.tweens.killTweensOf([scene.shipEyeGlow, scene.shipEyeCore]);
    scene.shipEyeGlow.setAlpha(0).setScale(1).setVisible(false);
    scene.shipEyeCore.setAlpha(0).setScale(1).setVisible(false);
    updateShipEyeGlow(scene);
  }

  if (scene.shieldBubble) scene.shieldBubble.setVisible(false);
  if (scene.echoCompanion) {
    scene.tweens.killTweensOf(scene.echoCompanion);
    scene.echoCompanion.clearTint();
    updateEchoCompanion(scene, 0);
  }
  hideXyBottomFriction(scene);
}

function updateLivesText(scene, options = {}) {
  const currentHud = initHud();
  if (!currentHud.lifeBar || !currentHud.lifeCount) return;

  currentHud.lifeBar.innerHTML = '';
  currentHud.lifeBar.style.setProperty('--life-slots', maxLives);
  currentHud.lifeCount.textContent = lives + '/' + maxLives;
  const activeColor = isShieldActive(scene) ? '#4da3ff' : '#ffd84d';
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
  pauseFallingObjects(scene);
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

function clearShipDamageFeedback(scene, stopDamageTween = true) {
  if (!scene || !scene.ship) return;

  if (scene.shipDamageClearEvent) {
    scene.shipDamageClearEvent.remove(false);
    scene.shipDamageClearEvent = null;
  }
  if (stopDamageTween && scene.shipDamageTween) {
    scene.shipDamageTween.stop();
  }
  scene.shipDamageTween = null;
  scene.ship.clearTint();
  scene.ship.setAlpha(1);
}

function flashPlayerShip(scene, damaged = false) {
  if (!scene.ship) return;

  if (scene.shipAbsorbTween) {
    scene.shipAbsorbTween.stop();
    scene.shipAbsorbTween = null;
    scene.ship.setAlpha(1);
  }
  if (scene.shipDamageTween) {
    clearShipDamageFeedback(scene);
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

  const damageFeedbackDuration = 85 * (4 + 1) * 2;
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
    onComplete: () => clearShipDamageFeedback(scene, false),
  });
  scene.shipDamageClearEvent = scene.time.delayedCall(damageFeedbackDuration + 40, () => {
    clearShipDamageFeedback(scene);
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

function expandVitalCapacity(scene) {
  const previousLives = lives;
  maxLives += VITAL_EXPANDER_LIFE_BONUS;
  lives = Math.min(maxLives, lives + VITAL_EXPANDER_LIFE_BONUS);
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
    ? (changeKind === 'heal' ? LIFE_INDICATOR_HEAL_COLOR : 0xff4f68)
    : (isFilledAfter ? LIFE_INDICATOR_FILL_COLOR : 0x10243a);
  const borderColor = isChanged
    ? (changeKind === 'heal' ? LIFE_INDICATOR_HEAL_BORDER_COLOR : 0xff9aaa)
    : (isFilledAfter ? LIFE_INDICATOR_BORDER_COLOR : 0x33506f);

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
  cell.frame.lineStyle(1, LIFE_INDICATOR_BORDER_COLOR, 0.88);
  cell.frame.strokePoints(cell.geometry.framePoints, true);
  cell.fill.clear();
  cell.fill.fillStyle(LIFE_INDICATOR_FILL_COLOR, 0.9);
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

  if (isBossOnlyGameMode() && !hasPendingBossWave(scene) && !hasActiveLevelBossEncounter(scene)) {
    queueNextBossOnlyWave(scene);
  }

  if (consumePendingBossWave(scene)) {
    return;
  }

  if (
    isBossOnlyGameMode() &&
    !scene.activeRedWave &&
    !scene.activeDroneWave &&
    !scene.activeAsteroidWave
  ) return;

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

function hasActiveLevelBossEncounter(scene) {
  return Boolean(
    scene.activeRedWave ||
    scene.activeDroneWave ||
    scene.activeAsteroidWave ||
    scene.activePlasmaWave ||
    (scene.activeBossWave && !scene.activeBossWave.isTravelEncounter)
  );
}

function queueNextBossOnlyWave(scene) {
  if (!scene || !isBossOnlyGameMode() || hasPendingBossWave(scene) || hasActiveLevelBossEncounter(scene)) return;
  const bossNumber = scene.bossOnlyBossNumber || 0;
  const bossKind = BOSS_ONLY_BOSS_KINDS[bossNumber % BOSS_ONLY_BOSS_KINDS.length];
  scene.bossOnlyBossNumber = bossNumber + 1;
  scene.bossOnlyTypeRevealed = false;
  queuePendingBossWave(scene, createBossConfig(bossKind));
  updateHud(scene);
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
    this.resumeSpawnDelay = getTimerEventRemaining(spawnEvent);
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  pauseFallingObjects(this);
  pauseTimedGameplay(this);
  showOverlayScreen(this, null);
  setPauseSettingsVisible(true);
}

function getTimerEventRemaining(event) {
  if (!event) return null;
  if (typeof event.getRemaining === 'function') {
    return Math.max(0, event.getRemaining());
  }
  return Math.max(0, (event.delay || 0) - (event.elapsed || 0));
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

  if (this.pendingLevelUpgradeChoice) {
    maybeOpenUpgradeChoice(this);
    return;
  }

  resumeFallingObjects(this);
  resumeTimedGameplay(this);
  releasePendingStreakRepairKit(this);

  if (this.pendingEchoWaveWarningKind) {
    const waveKind = this.pendingEchoWaveWarningKind;
    this.pendingEchoWaveWarningKind = null;
    this.waveStartEvent = this.time.addEvent({
      delay: ECHO_WAVE_WARNING_RESUME_DELAY,
      callback: () => startWaveCountdown(this, waveKind),
    });
  }

  resumeGameplaySpawning(
    this,
    this.resumeSpawnDelay !== null && this.resumeSpawnDelay !== undefined
      ? this.resumeSpawnDelay
      : null
  );
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

  [scene.waveStartEvent, scene.waveResumeEvent, scene.bossAttackEvent, scene.bossLaserEvent, scene.bossHorizontalLaserEvent, scene.bossLaserClearEvent, scene.bossEnemySpawnEvent, scene.redNeedleBossPassEvent, scene.plasmaSpawnEvent, scene.bossCueTween, scene.bossCueClearEvent].forEach((event) => {
    if (event) event.paused = true;
  });
  (scene.bossWarningAnimationEvents || []).forEach((event) => {
    if (event) event.paused = true;
  });
  (scene.bossLaserEffects || []).forEach((effect) => {
    if (effect && effect.redrawEvent) effect.redrawEvent.paused = true;
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

  [scene.waveStartEvent, scene.waveResumeEvent, scene.bossAttackEvent, scene.bossLaserEvent, scene.bossHorizontalLaserEvent, scene.bossLaserClearEvent, scene.bossEnemySpawnEvent, scene.redNeedleBossPassEvent, scene.plasmaSpawnEvent, scene.bossCueTween, scene.bossCueClearEvent].forEach((event) => {
    if (event) event.paused = false;
  });
  (scene.bossWarningAnimationEvents || []).forEach((event) => {
    if (event) event.paused = false;
  });
  (scene.bossLaserEffects || []).forEach((effect) => {
    if (effect && effect.redrawEvent) effect.redrawEvent.paused = false;
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
  if (countdown.pausedRemaining !== undefined) return;
  countdown.pausedRemaining = Math.max(0, countdown.endsAt - scene.time.now);
}

function resumeCountdown(scene, countdown) {
  if (!countdown || countdown.pausedRemaining === undefined) return;
  countdown.endsAt = scene.time.now + countdown.pausedRemaining;
  delete countdown.pausedRemaining;
}

function resetTimedBoosters(scene) {
  resetEnergyResonance(scene);
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
  if (scene.bossHorizontalLaserEvent) {
    scene.bossHorizontalLaserEvent.remove(false);
    scene.bossHorizontalLaserEvent = null;
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

function getEchoAttackChancePercent(level = echoHelpLevel) {
  return level > 0 ? Math.round(ECHO_ATTACK_CHANCE * 100) : 0;
}

function canDropLifeBooster() {
  return lifeBoosterLevel > 0 && lives < maxLives;
}

function getEnergyBallValue() {
  if (energyRefinerLevel <= 0) return 1;
  const maxLevelBonus = energyRefinerLevel >= MAX_UPGRADE_LEVEL ? energyRefinerLevelBonus : 0;
  return energyRefinerLevel + 1 + maxLevelBonus;
}

function getEnemyDefeatScore(baseScore) {
  const maxLevelBonus = shieldBoosterLevel >= MAX_UPGRADE_LEVEL ? shieldDefeatLevelBonus : 0;
  return baseScore + maxLevelBonus;
}

function awardEnemyDefeatScore(scene, baseScore, x, y, color) {
  addScore(scene, getEnemyDefeatScore(baseScore), true, { x, y, color });
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
  if (currentHud.score) {
    currentHud.score.textContent = isBossOnlyGameMode() ? getBossOnlyHudName(scene) : score;
  }
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

function showStreakPointPopup(scene, x, y, label, colors = STREAK_POINT_POPUP_COLORS) {
  if (!scene || !scene.add) return;
  const popupPosition = getPointPopupPosition(scene, x, y);
  const container = trackGameplayVisual(scene, scene.add.container(popupPosition.x, popupPosition.y));
  container.setDepth(UI_DEPTH + 5);
  container.setScale(0.62);
  container.setAlpha(0.84);

  const streakText = createStreakGradientText(scene, label, colors);
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

function createStreakGradientText(scene, label, colors = STREAK_POINT_POPUP_COLORS) {
  const textureKey = 'streakGradientText-' + streakGradientTextureId;
  streakGradientTextureId += 1;
  return createCanvasTextImage(scene, label, {
    fontSize: 22,
    fill: colors,
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
  const hasPreviousEmission = scene.shipTrailLastEmitX !== undefined && scene.shipTrailLastEmitY !== undefined;
  const hasMovedEnough = !hasPreviousEmission
    || Phaser.Math.Distance.Between(
      scene.shipTrailLastEmitX,
      scene.shipTrailLastEmitY,
      point.x,
      point.y
    ) >= SHIP_TRAIL_MIN_POINT_DISTANCE;
  const shouldAddIdlePoint = previousPoint
    && !hasMovedEnough
    && now - previousPoint.createdAt >= SHIP_TRAIL_IDLE_INTERVAL;
  if (previousPoint && !hasMovedEnough) {
    const idleDrift = SHIP_TRAIL_IDLE_SPEED * Math.min(delta || 16, SHIP_TRAIL_IDLE_MAX_DELTA);
    scene.shipTrailPoints.forEach((trailPoint) => {
      trailPoint.y += idleDrift;
    });
  }
  if (
    !previousPoint
    || hasMovedEnough
    || shouldAddIdlePoint
  ) {
    scene.shipTrailPoints.push(point);
    scene.shipTrailLastEmitX = point.x;
    scene.shipTrailLastEmitY = point.y;
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
  scene.shipTrailLastEmitX = undefined;
  scene.shipTrailLastEmitY = undefined;
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
    const alpha = SHIP_TRAIL_BASE_ALPHA + SHIP_TRAIL_ALPHA_RANGE * taper;
    const blueMix = Phaser.Math.Clamp((positionRatio - (1 - SHIP_TRAIL_BLUE_CORE_RATIO)) / SHIP_TRAIL_BLUE_CORE_RATIO, 0, 1);
    const haloColor = mixRgbColor(0xff9f1c, 0x1269d3, blueMix);
    const bodyColor = mixRgbColor(0xf08a2a, 0x1678c8, blueMix);
    const coreColor = mixRgbColor(0xffc14f, 0x44b8dc, blueMix);

    graphics.lineStyle(width * 1.25, haloColor, alpha * 0.28);
    graphics.lineBetween(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y);
    graphics.fillStyle(haloColor, alpha * 0.22);
    graphics.fillCircle(currentPoint.x, currentPoint.y, width * 0.58);
    graphics.lineStyle(width, bodyColor, alpha);
    graphics.lineBetween(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y);
    graphics.fillStyle(bodyColor, alpha * 0.58);
    graphics.fillCircle(currentPoint.x, currentPoint.y, width * 0.42);
    graphics.lineStyle(Math.max(0.7, width * 0.22), coreColor, alpha * SHIP_TRAIL_CORE_ALPHA_RATIO);
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
    if (enemy.getData('kind') === 'damageBooster' || isScissorKind(enemy.getData('kind'))) {
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
    resonanceCount: 0,
    isResonanceActive: false,
  };

  setShipTextureForCurrentState(scene);
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

  resetEnergyResonance(scene);
  scene.activeScoreBooster = null;
  scoreMultiplier = 1;
  clearScoreBoosterBallColor(scene);
  setShipTextureForCurrentState(scene);
  playBackgroundMusic(scene);
  setHudBoosterVisible(false);
  updateBoosterBar(scene, 0);
}

function applyScoreBoosterBallColor(scene) {
  if (!scene.balls) return;
  scene.balls.getChildren().forEach((ball) => {
    if (ball.active && ball.getData('kind') === 'ball') setBallEnergyColor(ball, getScoreBoosterOrbColor(scene));
  });
}

function clearScoreBoosterBallColor(scene) {
  if (!scene.balls) return;
  scene.balls.getChildren().forEach((ball) => {
    if (ball.active && ball.getData('kind') === 'ball') setBallEnergyColor(ball, false);
  });
}

function getScoreBoosterOrbColor(scene) {
  return isEnergyResonanceActive(scene) ? 'pink' : 'purple';
}

function isEnergyResonanceUnlocked() {
  return energyResonanceLevel > 0;
}

function isEnergyResonanceActive(scene) {
  return Boolean(scene && scene.activeScoreBooster && scene.activeScoreBooster.isResonanceActive);
}

function resetEnergyResonance(scene) {
  if (!scene || !scene.activeScoreBooster) return;
  scene.activeScoreBooster.resonanceCount = 0;
  scene.activeScoreBooster.isResonanceActive = false;
}

function activateEnergyResonance(scene) {
  if (!scene || !scene.activeScoreBooster || scene.activeScoreBooster.isResonanceActive) return;
  scene.activeScoreBooster.isResonanceActive = true;
  scoreMultiplier = 3;
  applyScoreBoosterBallColor(scene);
  playStreakSuccessSound(scene);
  if (scene.ship) {
    showStreakPointPopup(scene, scene.ship.x, scene.ship.y - 58, 'SINCRONÍA', ENERGY_RESONANCE_POPUP_COLORS);
  }
}

function registerScoreBoosterOrbCatch(scene) {
  const booster = scene && scene.activeScoreBooster;
  if (!booster || !isEnergyResonanceUnlocked()) return;
  if (booster.isResonanceActive) return;

  booster.resonanceCount = (booster.resonanceCount || 0) + 1;

  if (booster.resonanceCount >= ENERGY_RESONANCE_REQUIRED_ORBS) {
    activateEnergyResonance(scene);
  }
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
  setHudBoosterVisible(false);
  updateBoosterBar(scene, 0);
}

function activateRedWave(scene, bossConfig = createBossConfig('red')) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  const isScissorSwarm = bossConfig.kind === 'scissors';
  scene.activeRedWave = {
    endsAt: null,
    duration: bossConfig.duration || (isScissorSwarm ? SCISSOR_SWARM_DURATION : RED_WAVE_DURATION),
    isSpawningDamageBoosters: false,
    hasStarted: false,
    hasShownEchoWarning: false,
    isDraining: false,
    spawnKind: isScissorSwarm ? 'scissor' : 'damageBooster',
    bossKind: isScissorSwarm ? 'scissors' : 'red',
    bossName: bossConfig.name || (isScissorSwarm ? 'Enjambre de Escisoras' : 'Enjambre de Obreras'),
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

function activateReplicatorWave(scene, bossConfig = createBossConfig('replicators')) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activeRedWave = {
    endsAt: null,
    duration: bossConfig.duration || REPLICATOR_WAVE_DURATION,
    isSpawningDamageBoosters: false,
    hasStarted: false,
    hasShownEchoWarning: false,
    isDraining: false,
    spawnKind: 'replicator',
    bossKind: 'replicators',
    bossName: bossConfig.name || 'Replicadores',
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

function activateCrystallizedWave(scene, bossConfig = createBossConfig('crystallized')) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activeRedWave = {
    endsAt: null,
    duration: bossConfig.duration || CRYSTALLIZED_WAVE_DURATION,
    isSpawningDamageBoosters: false,
    hasStarted: false,
    hasShownEchoWarning: false,
    isDraining: false,
    spawnKind: 'crystallizedOrb',
    bossKind: 'crystallized',
    bossName: bossConfig.name || 'Tormenta Cristalizada',
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
    spawnKind: bossConfig.kind === 'girodrones' ? 'giroDrone' : 'spikeDrone',
    spawnDelay: bossConfig.kind === 'girodrones' ? GIRODRONE_WAVE_SPAWN_DELAY : DRONE_WAVE_SPAWN_DELAY,
    bossKind: bossConfig.kind || 'drones',
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

function activateAsteroidWave(scene, bossConfig = createBossConfig('asteroid')) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activeAsteroidWave = {
    endsAt: null,
    duration: bossConfig.duration || ASTEROID_WAVE_DURATION,
    isSpawningAsteroids: false,
    hasStarted: false,
    hasShownEchoWarning: false,
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

function activatePlasmaWave(scene, bossConfig = createBossConfig('plasma')) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activePlasmaWave = {
    endsAt: null,
    duration: bossConfig.duration || PLASMA_WAVE_DURATION,
    hasStarted: false,
    hasShownEchoWarning: false,
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

function activateBossWave(scene, bossConfig = createBossConfig('boss')) {
  resetTimedBoosters(scene);
  playBackgroundMusic(scene);
  scene.activeBossWave = {
    kind: 'boss',
    endsAt: null,
    duration: bossConfig.duration || BOSS_WAVE_DURATION,
    hasStarted: false,
    hasShownEchoWarning: false,
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
    hasShownEchoWarning: false,
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
  if (bossConfig.kind === 'red' || bossConfig.kind === 'scissors') {
    activateRedWave(scene, bossConfig);
  } else if (bossConfig.kind === 'drones' || bossConfig.kind === 'girodrones') {
    activateDroneWave(scene, bossConfig);
  } else if (bossConfig.kind === 'asteroid') {
    activateAsteroidWave(scene, bossConfig);
  } else if (bossConfig.kind === 'plasma') {
    activatePlasmaWave(scene, bossConfig);
  } else if (bossConfig.kind === 'redNeedleBoss') {
    activateRedNeedleBossWave(scene, bossConfig);
  } else if (bossConfig.kind === 'replicators') {
    activateReplicatorWave(scene, bossConfig);
  } else if (bossConfig.kind === 'crystallized') {
    activateCrystallizedWave(scene, bossConfig);
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

  updateSentinelEyeTracking(scene);
  updateBossElectricLaserEffects(scene);
  recoverStalledBossWave(scene, bossWave);
  if (scene.activeBossWave !== bossWave) return;

  if (
    (
      (scene.bossLaser && isLaserTouchingShip(scene, scene.bossLaser)) ||
      (scene.bossHorizontalLaser && isLaserTouchingShip(scene, scene.bossHorizontalLaser))
    ) &&
    !isShieldActive(scene)
  ) {
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
    scene.bossHorizontalLaserEvent ||
    scene.bossLaserClearEvent ||
    scene.bossLaser ||
    scene.bossHorizontalLaser
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

function createSentinelShip(scene) {
  const bottomLimit = getXyShipBottomLimit(scene);
  const armTop = -34;
  const armBottom = bottomLimit - SENTINEL_TARGET_Y;
  const armHeight = Math.max(BOSS_HEIGHT, armBottom - armTop);
  const armWidth = 34;
  const armRadius = 8;
  const sideInset = -22;
  const leftArmX = -getGameWidth(scene) / 2 + sideInset;
  const rightArmX = getGameWidth(scene) / 2 - sideInset - armWidth;
  const container = scene.add.container(getGameWidth(scene) / 2, getSentinelHiddenY(scene));
  const arms = scene.make.graphics({ x: 0, y: 0, add: false });

  arms.fillStyle(0x210815, 0.96);
  arms.fillRoundedRect(leftArmX, armTop, armWidth, armHeight, armRadius);
  arms.fillRoundedRect(rightArmX, armTop, armWidth, armHeight, armRadius);

  arms.fillStyle(0x8f172d, 0.96);
  arms.fillRoundedRect(leftArmX + 6, armTop + 12, armWidth - 12, armHeight - 24, 6);
  arms.fillRoundedRect(rightArmX + 6, armTop + 12, armWidth - 12, armHeight - 24, 6);

  arms.fillStyle(0x541020, 1);
  arms.fillRoundedRect(leftArmX + 13, armTop + 34, armWidth - 26, armHeight - 68, 4);
  arms.fillRoundedRect(rightArmX + 13, armTop + 34, armWidth - 26, armHeight - 68, 4);

  arms.fillStyle(0xff4058, 0.68);
  [70, 150, 230, 310, 390, 470].forEach((offset) => {
    if (armTop + offset > armBottom - 14) return;
    arms.fillCircle(leftArmX + armWidth / 2, armTop + offset, 7);
    arms.fillCircle(rightArmX + armWidth / 2, armTop + offset, 7);
  });

  arms.fillStyle(0xffd0d7, 0.58);
  [70, 230, 390].forEach((offset) => {
    if (armTop + offset > armBottom - 14) return;
    arms.fillCircle(leftArmX + armWidth / 2, armTop + offset, 2.5);
    arms.fillCircle(rightArmX + armWidth / 2, armTop + offset, 2.5);
  });

  arms.lineStyle(2, 0xff9aaa, 0.34);
  arms.strokeRoundedRect(leftArmX, armTop, armWidth, armHeight, armRadius);
  arms.strokeRoundedRect(rightArmX, armTop, armWidth, armHeight, armRadius);
  arms.lineStyle(1, 0xffd0d7, 0.22);
  arms.lineBetween(leftArmX + 8, armTop + 18, leftArmX + 8, armBottom - 12);
  arms.lineBetween(rightArmX + armWidth - 8, armTop + 18, rightArmX + armWidth - 8, armBottom - 12);

  const body = scene.add.image(0, 0, 'bossShip').setOrigin(0.5, 0.5);
  const eyeGlow = scene.add.circle(0, 27, 11, 0xffa7b4, 0.92)
    .setBlendMode(Phaser.BlendModes.ADD);
  const eyeCore = scene.add.circle(0, 27, 6, 0xffedf0, 0.98)
    .setBlendMode(Phaser.BlendModes.ADD);
  const eyeHighlight = scene.add.circle(-2, 25, 2.5, 0xffffff, 0.98)
    .setBlendMode(Phaser.BlendModes.ADD);
  container
    .add([arms, body, eyeGlow, eyeCore, eyeHighlight])
    .setDepth(FX_DEPTH + 1)
    .setData('sentinelHiddenY', getSentinelHiddenY(scene))
    .setData('sentinelEyeGlow', eyeGlow)
    .setData('sentinelEyeCore', eyeCore)
    .setData('sentinelEyeHighlight', eyeHighlight);

  return container;
}

function updateSentinelEyeTracking(scene) {
  const sentinel = scene.bossShip;
  if (!sentinel || !sentinel.getData || !scene.ship) return;

  const eyeGlow = sentinel.getData('sentinelEyeGlow');
  const eyeCore = sentinel.getData('sentinelEyeCore');
  const eyeHighlight = sentinel.getData('sentinelEyeHighlight');
  if (!eyeGlow || !eyeCore || !eyeHighlight) return;

  const eyeWorldX = sentinel.x;
  const eyeWorldY = sentinel.y + 27;
  const angle = Phaser.Math.Angle.Between(eyeWorldX, eyeWorldY, scene.ship.x, scene.ship.y);
  const distance = Phaser.Math.Distance.Between(eyeWorldX, eyeWorldY, scene.ship.x, scene.ship.y);
  const trackingStrength = Phaser.Math.Clamp(distance / 180, 0.35, 1);
  const targetX = Math.cos(angle) * 7 * trackingStrength;
  const targetY = Math.sin(angle) * 6 * trackingStrength;
  const nextX = Phaser.Math.Linear(eyeCore.x, targetX, 0.16);
  const nextY = Phaser.Math.Linear(eyeCore.y - 27, targetY, 0.16);

  eyeGlow.setPosition(nextX * 0.42, 27 + nextY * 0.42);
  eyeCore.setPosition(nextX, 27 + nextY);
  eyeHighlight.setPosition(nextX - 2, 27 + nextY - 2);
}

function getSentinelHiddenY(scene) {
  return -(getXyShipBottomLimit(scene) - SENTINEL_TARGET_Y + 70);
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

  scene.bossShip = createSentinelShip(scene);

  scene.bossEnterTween = scene.tweens.add({
    targets: scene.bossShip,
    y: SENTINEL_TARGET_Y,
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
  const laserY = getNextBossLaserY(scene, bossWave);
  bossWave.currentLaserX = laserX;
  bossWave.currentLaserY = laserY;
  showBossLaserWarning(scene, laserX);

  scene.bossLaserEvent = scene.time.addEvent({
    delay: BOSS_LASER_WARN_DURATION,
    callback: () => fireBossLaser(scene, laserX, laserY),
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

function getNextBossLaserY(scene, bossWave) {
  const min = getXyShipTopLimit(scene);
  const max = getXyShipBottomLimit(scene);
  const blockedY = bossWave.previousHorizontalLaserY;
  const playerY = scene.ship ? scene.ship.y : getShipY(scene);
  const requiredGap = BOSS_HORIZONTAL_LASER_MIN_Y_GAP;

  if (Phaser.Math.FloatBetween(0, 1) < BOSS_HORIZONTAL_LASER_TRACKING_CHANCE) {
    const trackedY = Phaser.Math.Clamp(
      playerY + Phaser.Math.Between(-BOSS_HORIZONTAL_LASER_TRACKING_JITTER, BOSS_HORIZONTAL_LASER_TRACKING_JITTER),
      min,
      max
    );
    if (blockedY === undefined || Math.abs(trackedY - blockedY) >= requiredGap) {
      return trackedY;
    }
  }

  const roomyCandidates = [];

  for (let attempt = 0; attempt < 30; attempt += 1) {
    const y = Phaser.Math.Between(min, max);
    const farFromPrevious = blockedY === undefined || Math.abs(y - blockedY) >= requiredGap;
    if (farFromPrevious) {
      roomyCandidates.push(y);
    }
  }

  if (roomyCandidates.length) {
    return Phaser.Utils.Array.GetRandom(roomyCandidates);
  }

  const anchorY = blockedY === undefined ? playerY : blockedY;
  const topY = Phaser.Math.Clamp(anchorY - requiredGap, min, max);
  const bottomY = Phaser.Math.Clamp(anchorY + requiredGap, min, max);
  return Math.abs(bottomY - playerY) > Math.abs(topY - playerY) ? bottomY : topY;
}

function showBossLaserWarning(scene, laserX) {
  clearBossWarningParticles(scene);
  const laserTop = getBossVerticalLaserTop(scene);
  const laserLength = getGameHeight(scene) - laserTop;
  createBossLaserWarningEffect(
    scene,
    laserX,
    laserTop + laserLength / 2,
    laserLength
  );
}

function getBossVerticalLaserTop(scene) {
  return Math.max(0, getXyShipTopLimit(scene) - BOSS_LASER_SENTINEL_OVERLAP);
}

function showBossHorizontalLaserWarning(scene, laserY) {
  createBossLaserWarningEffect(
    scene,
    getGameWidth(scene) / 2,
    laserY,
    getGameWidth(scene) - 32,
    true
  );
}

function createBossLaserWarningEffect(scene, centerX, centerY, length, horizontal = false) {
  scene.bossWarningParticles = scene.bossWarningParticles || [];
  scene.bossWarningAnimationEvents = scene.bossWarningAnimationEvents || [];
  const halfLength = length / 2;
  const startedAt = scene.time.now;
  const seed = Phaser.Math.Between(0, 9999);
  const graphics = scene.add.graphics()
    .setDepth(FX_DEPTH - 1)
    .setBlendMode(Phaser.BlendModes.ADD);
  const redrawWarning = () => {
    const elapsed = scene.time.now - startedAt;
    const progress = Phaser.Math.Clamp(elapsed / BOSS_LASER_WARN_DURATION, 0, 1);
    const charge = Phaser.Math.Easing.Cubic.In(progress);
    const pulse = 0.5 + Math.sin(elapsed * (0.012 + charge * 0.015)) * 0.5;
    const railOffset = Phaser.Math.Linear(27, 6, charge);
    const pointCount = Math.max(32, Math.floor(length / 11));
    const strokePath = (points, width, color, alpha) => {
      if (points.length < 2) return;
      graphics.lineStyle(width, color, alpha);
      graphics.beginPath();
      graphics.moveTo(points[0].x, points[0].y);
      points.slice(1).forEach((point) => graphics.lineTo(point.x, point.y));
      graphics.strokePath();
    };

    graphics.clear();

    graphics.lineStyle(24, 0xff0018, 0.025 + charge * 0.11);
    if (horizontal) {
      graphics.lineBetween(centerX - halfLength, centerY, centerX + halfLength, centerY);
    } else {
      graphics.lineBetween(centerX, centerY - halfLength, centerX, centerY + halfLength);
    }
    graphics.lineStyle(3 + charge * 3, 0xff1830, 0.18 + charge * 0.62);
    if (horizontal) {
      graphics.lineBetween(centerX - halfLength, centerY, centerX + halfLength, centerY);
    } else {
      graphics.lineBetween(centerX, centerY - halfLength, centerX, centerY + halfLength);
    }

    [-1, 1].forEach((side) => {
      const points = [];
      for (let point = 0; point <= pointCount; point += 1) {
        const pathProgress = point / pointCount;
        const distance = -halfLength + length * pathProgress;
        const offset = side * (
          railOffset +
          Math.sin(elapsed * 0.007 + seed + pathProgress * Math.PI * 13) * (4.5 - charge * 2)
        );
        points.push(horizontal
          ? { x: centerX + distance, y: centerY + offset }
          : { x: centerX + offset, y: centerY + distance });
      }
      strokePath(points, 5, 0xff001f, 0.08 + charge * 0.24);
      strokePath(points, 1.4, 0xff4a58, 0.34 + charge * 0.54);
    });

    graphics.lineStyle(1.5 + charge * 2.5, 0xffffff, charge * (0.16 + pulse * 0.34));
    if (horizontal) {
      graphics.lineBetween(centerX - halfLength, centerY, centerX + halfLength, centerY);
    } else {
      graphics.lineBetween(centerX, centerY - halfLength, centerX, centerY + halfLength);
    }
  };

  redrawWarning();
  const redrawEvent = scene.time.addEvent({
    delay: 16,
    loop: true,
    callback: redrawWarning,
  });
  scene.bossWarningAnimationEvents.push(redrawEvent);
  scene.bossWarningParticles.push(graphics);

  for (let index = 0; index < 64; index += 1) {
    const along = Phaser.Math.FloatBetween(-halfLength, halfLength);
    const side = Math.random() < 0.5 ? -1 : 1;
    const startOffset = side * Phaser.Math.Between(16, 38);
    const radius = Phaser.Math.FloatBetween(0.8, 2.1);
    const particle = scene.add.circle(
      horizontal ? centerX + along : centerX + startOffset,
      horizontal ? centerY + startOffset : centerY + along,
      radius,
      index % 7 === 0 ? 0xffffff : 0xff1028,
      Phaser.Math.FloatBetween(0.45, 0.9)
    )
      .setDepth(FX_DEPTH)
      .setBlendMode(Phaser.BlendModes.ADD);

    scene.tweens.add({
      targets: particle,
      x: horizontal ? centerX + along : centerX + side * Phaser.Math.Between(2, 6),
      y: horizontal ? centerY + side * Phaser.Math.Between(2, 6) : centerY + along,
      alpha: index % 7 === 0 ? 0.9 : 0.22,
      scale: Phaser.Math.FloatBetween(0.45, 0.8),
      duration: Phaser.Math.Between(620, BOSS_LASER_WARN_DURATION),
      delay: Phaser.Math.Between(0, 180),
      ease: 'Sine.easeIn',
    });
    scene.bossWarningParticles.push(particle);
  }
}

function createBossElectricLaserEffect(scene, centerX, centerY, length, horizontal = false) {
  const graphics = scene.add.graphics()
    .setDepth(FX_DEPTH)
    .setBlendMode(Phaser.BlendModes.ADD);
  scene.bossLaserEffects = scene.bossLaserEffects || [];
  const effect = {
    graphics,
    centerX,
    centerY,
    length,
    horizontal,
    seed: Phaser.Math.Between(0, 9999),
  };
  scene.bossLaserEffects.push(effect);
  drawBossElectricLaserEffect(effect, scene.time.now);
  return graphics;
}

function updateBossElectricLaserEffects(scene) {
  if (!scene.bossLaserEffects) return;
  scene.bossLaserEffects.forEach((effect) => {
    if (effect && effect.graphics && effect.graphics.active) {
      drawBossElectricLaserEffect(effect, scene.time.now);
    }
  });
}

function drawBossElectricLaserEffect(effect, time) {
  const { graphics, centerX, centerY, length, horizontal, seed } = effect;
  const halfLength = length / 2;
  const pulse = 0.5 + Math.sin(time * 0.016 + seed) * 0.5;
  const drawBeamRect = (thickness, color, alpha) => {
    graphics.fillStyle(color, alpha);
    if (horizontal) {
      graphics.fillRect(centerX - halfLength, centerY - thickness / 2, length, thickness);
    } else {
      graphics.fillRect(centerX - thickness / 2, centerY - halfLength, thickness, length);
    }
  };
  const strokePath = (points, width, color, alpha) => {
    if (points.length < 2) return;
    graphics.lineStyle(width, color, alpha);
    graphics.beginPath();
    graphics.moveTo(points[0].x, points[0].y);
    points.slice(1).forEach((point) => graphics.lineTo(point.x, point.y));
    graphics.strokePath();
  };

  graphics.clear();
  drawBeamRect(58, 0xff0018, 0.07 + pulse * 0.05);
  drawBeamRect(40, 0xff001f, 0.13 + pulse * 0.08);
  drawBeamRect(25, 0xff0828, 0.32 + pulse * 0.11);
  drawBeamRect(12, 0xff1830, 0.88 + pulse * 0.1);
  drawBeamRect(4.5 + pulse * 1.5, 0xffffff, 0.98);

  // Continuous edge arcs undulate smoothly instead of changing randomly.
  [-1, 1].forEach((side) => {
    const points = [];
    const pointCount = Math.max(36, Math.floor(length / 10));
    for (let point = 0; point <= pointCount; point += 1) {
      const progress = point / pointCount;
      const along = -halfLength + length * progress;
      const offset = side * (
        14 +
        Math.sin(time * 0.007 + seed + progress * Math.PI * 15) * 5 +
        Math.sin(time * 0.0035 + progress * Math.PI * 6) * 3
      );
      points.push(horizontal
        ? { x: centerX + along, y: centerY + offset }
        : { x: centerX + offset, y: centerY + along });
    }
    strokePath(points, 6, 0xff001f, 0.26);
    strokePath(points, 1.6, 0xff5b68, 0.92);
  });

  const particleCount = horizontal ? 48 : 72;
  for (let particle = 0; particle < particleCount; particle += 1) {
    const direction = particle % 3 === 0 ? -1 : 1;
    const travel = (
      time * (0.00018 + (particle % 5) * 0.000012) * direction +
      particle / particleCount +
      seed * 0.001
    ) % 1;
    const wrappedTravel = travel < 0 ? travel + 1 : travel;
    const along = -halfLength + length * wrappedTravel;
    const side = particle % 2 === 0 ? -1 : 1;
    const offset = side * (
      5 +
      (particle % 4) * 2.8 +
      Math.sin(time * 0.006 + seed + particle * 1.7) * 3
    );
    const radius = 0.7 + (particle % 4) * 0.32 + pulse * 0.25;
    const alpha = 0.28 + (particle % 5) * 0.09;
    const x = horizontal ? centerX + along : centerX + offset;
    const y = horizontal ? centerY + offset : centerY + along;

    graphics.fillStyle(particle % 9 === 0 ? 0xffffff : 0xff1830, alpha);
    graphics.fillCircle(x, y, radius);
    graphics.fillStyle(0xff001f, alpha * 0.18);
    graphics.fillCircle(x, y, radius * 2.4);
  }
}

function fireBossLaser(scene, laserX, laserY) {
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

  const laserTop = getBossVerticalLaserTop(scene);
  const laserHeight = getGameHeight(scene) - laserTop;
  const laserCenterY = laserTop + laserHeight / 2;
  scene.bossLaser = scene.add.rectangle(laserX, laserCenterY, BOSS_LASER_WIDTH, laserHeight, 0xff001f, 0.2)
    .setOrigin(0.5, 0.5)
    .setDepth(FX_DEPTH - 2);
  scene.bossLaserCore = scene.add.rectangle(laserX, laserCenterY, 5, laserHeight, 0xffffff, 0.96)
    .setOrigin(0.5, 0.5)
    .setDepth(FX_DEPTH - 1);
  createBossElectricLaserEffect(scene, laserX, laserCenterY, laserHeight);
  showBossHorizontalLaserWarning(scene, laserY);
  scene.bossHorizontalLaserEvent = scene.time.addEvent({
    delay: BOSS_LASER_WARN_DURATION,
    callback: () => fireBossHorizontalLaser(scene, laserY),
  });
  playBossLaserSound(scene);

  scene.bossLaserClearEvent = scene.time.addEvent({
    delay: BOSS_LASER_DURATION,
    callback: () => finishBossLaserAttack(scene),
  });

  if (bossWave.attacksDone < bossWave.attacksTotal) {
    scheduleBossAttack(scene, BOSS_ATTACK_GAP);
  }
}

function fireBossHorizontalLaser(scene, laserY) {
  const bossWave = scene.activeBossWave;
  if (!bossWave) return;

  scene.bossHorizontalLaserEvent = null;
  clearBossWarningParticles(scene);
  bossWave.previousHorizontalLaserY = laserY;

  const laserWidth = getGameWidth(scene);
  const laserCenterX = laserWidth / 2;
  scene.bossHorizontalLaser = scene.add.rectangle(laserCenterX, laserY, laserWidth, BOSS_HORIZONTAL_LASER_HEIGHT, 0xff001f, 0.2)
    .setOrigin(0.5, 0.5)
    .setDepth(FX_DEPTH - 2);
  scene.bossHorizontalLaserCore = scene.add.rectangle(laserCenterX, laserY, laserWidth, 5, 0xffffff, 0.96)
    .setOrigin(0.5, 0.5)
    .setDepth(FX_DEPTH - 1);
  createBossElectricLaserEffect(scene, laserCenterX, laserY, laserWidth, true);
  playBossLaserSound(scene);
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
  const retreatY = scene.bossShip && scene.bossShip.getData
    ? scene.bossShip.getData('sentinelHiddenY') || -BOSS_HEIGHT / 2
    : -BOSS_HEIGHT / 2;
  scene.bossExitTween = scene.tweens.add({
    targets: scene.bossShip,
    y: retreatY,
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
  if (
    waveKind === 'red' &&
    scene.activeRedWave &&
    scene.activeRedWave.bossKind === 'scissors' &&
    !scene.activeRedWave.hasShownEchoWarning
  ) {
    scene.activeRedWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_SCISSOR_SWARM_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'red' &&
    scene.activeRedWave &&
    scene.activeRedWave.bossKind === 'crystallized' &&
    !scene.activeRedWave.hasShownEchoWarning
  ) {
    scene.activeRedWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_CRYSTALLIZED_WAVE_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'red' &&
    scene.activeRedWave &&
    scene.activeRedWave.bossKind === 'replicators' &&
    !scene.activeRedWave.hasShownEchoWarning
  ) {
    scene.activeRedWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_REPLICATOR_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (waveKind === 'red' && scene.activeRedWave && !scene.activeRedWave.hasShownEchoWarning) {
    scene.activeRedWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_SWARM_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'drones' &&
    scene.activeDroneWave &&
    scene.activeDroneWave.bossKind === 'girodrones' &&
    !scene.activeDroneWave.hasShownEchoWarning
  ) {
    scene.activeDroneWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_GIRODRONE_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'drones' &&
    scene.activeDroneWave &&
    !scene.activeDroneWave.hasShownEchoWarning
  ) {
    scene.activeDroneWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_DRONE_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'asteroid' &&
    scene.activeAsteroidWave &&
    !scene.activeAsteroidWave.hasShownEchoWarning
  ) {
    scene.activeAsteroidWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_ASTEROID_BELT_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'plasma' &&
    scene.activePlasmaWave &&
    !scene.activePlasmaWave.hasShownEchoWarning
  ) {
    scene.activePlasmaWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_PLASMA_WAVE_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'boss' &&
    scene.activeBossWave &&
    scene.activeBossWave.kind === 'redNeedleBoss' &&
    !scene.activeBossWave.hasShownEchoWarning
  ) {
    scene.activeBossWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_RED_NEEDLE_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  if (
    waveKind === 'boss' &&
    scene.activeBossWave &&
    scene.activeBossWave.kind === 'boss' &&
    !scene.activeBossWave.hasShownEchoWarning
  ) {
    scene.activeBossWave.hasShownEchoWarning = true;
    startEchoDialog(scene, ECHO_SENTINEL_WARNING_LINES, () => pauseBeforeEchoWaveWarning(scene, waveKind));
    return;
  }
  showBossCueBand(scene, waveKind, 'warning', () => startWaveAfterCue(scene, waveKind));
}

function pauseBeforeEchoWaveWarning(scene, waveKind) {
  if (!scene) return;

  if (isBossOnlyGameMode()) {
    scene.bossOnlyTypeRevealed = true;
    updateHud(scene);
  }
  state = 'paused';
  isDraggingShip = false;
  scene.pendingEchoWaveWarningKind = waveKind;
  scene.resumeSpawnDelay = null;
  setPauseOverlayMode(scene, 'normal');
  setXyControlActive(scene, false);
  prepareControlPauseResume(scene);
  showOverlayScreen(scene, null);
  setPauseSettingsVisible(true);
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
  if (waveKind === 'red' && scene.activeRedWave) return scene.activeRedWave.bossName || 'Enjambre de Obreras';
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
    if (currentWave.bossKind === 'replicators') {
      scene.replicatorSpawnsUnlocked = true;
    } else if (currentWave.bossKind === 'red') {
      scene.obreraSpawnsUnlocked = true;
    } else if (currentWave.bossKind === 'scissors') {
      scene.scissorSpawnsUnlocked = true;
    } else if (currentWave.bossKind === 'crystallized') {
      scene.crystallizedOrbSpawnsUnlocked = true;
    }
    scene.activeRedWave = null;
  } else if (waveKind === 'drones') {
    if (currentWave.bossKind === 'girodrones') {
      scene.giroDroneSpawnsUnlocked = true;
    } else {
      scene.droneSpawnsUnlocked = true;
    }
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
    if (currentWave.kind === 'boss') {
      scene.travelSentinelUnlocked = true;
    }
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
  if (scene.bossWarningAnimationEvents) {
    scene.bossWarningAnimationEvents.forEach((event) => {
      if (event) event.remove(false);
    });
    scene.bossWarningAnimationEvents = [];
  }
  if (!scene.bossWarningParticles) return;
  scene.bossWarningParticles.forEach((particle) => {
    if (!particle) return;
    scene.tweens.killTweensOf(particle);
    if (particle.active) particle.destroy();
  });
  scene.bossWarningParticles = [];
}

function clearBossLaser(scene) {
  stopBossLaserSound(scene);
  if (scene.bossLaserEffects) {
    scene.bossLaserEffects.forEach((effect) => {
      if (!effect) return;
      if (effect.redrawEvent) effect.redrawEvent.remove(false);
      const graphics = effect.graphics || effect;
      scene.tweens.killTweensOf(graphics);
      if (graphics.active) graphics.destroy();
    });
    scene.bossLaserEffects = [];
  }
  if (scene.bossLaser) {
    scene.bossLaser.destroy();
    scene.bossLaser = null;
  }
  if (scene.bossLaserCore) {
    scene.bossLaserCore.destroy();
    scene.bossLaserCore = null;
  }
  if (scene.bossHorizontalLaser) {
    scene.bossHorizontalLaser.destroy();
    scene.bossHorizontalLaser = null;
  }
  if (scene.bossHorizontalLaserCore) {
    scene.bossHorizontalLaserCore.destroy();
    scene.bossHorizontalLaserCore = null;
  }
}

function isLaserTouchingShip(scene, laser) {
  const width = laser.displayWidth || laser.width || BOSS_LASER_WIDTH;
  const height = laser.displayHeight || laser.height || getGameHeight(scene);
  return isRectOverlappingShip(scene, laser.x, laser.y, width, height);
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
  if (isBossOnlyGameMode()) return;
  if (state !== 'playing' && state !== 'leveling') return;
  const hasPendingLevelUpgradeChoice = Boolean(scene.pendingLevelUpgradeChoice);
  if (!hasPendingLevelUpgradeChoice && levelProgressScore < nextUpgradeScore) return;

  if (!hasPendingLevelUpgradeChoice) {
    playLevelUpSound(scene);
    advancePlayerLevel(scene);

    while (levelProgressScore >= nextUpgradeScore && !hasAvailableUpgrades()) {
      advancePlayerLevel(scene);
      updateUpgradeBar(scene);
    }

    if (!hasAvailableUpgrades()) {
      scene.levelUpgradeSequenceActive = false;
      state = 'playing';
      updateUpgradeBar(scene);
      resumeFallingObjects(scene);
      resumeTimedGameplay(scene);
      releasePendingStreakRepairKit(scene);
      if (!consumePendingBossWave(scene)) recoverGameplaySpawning(scene);
      return;
    }

    if (!scene.levelUpgradeSequenceActive) {
      scene.levelUpgradeSequenceActive = true;
      triggerEchoLevelCelebration(scene);
    }

    scene.pendingLevelUpgradeChoice = true;
  }

  pauseGameplayForPendingUpgradeChoice(scene);

  const echoLevelUpgradeDelay = getEchoLevelUpgradeDelay(scene);
  if (echoLevelUpgradeDelay > 0 && !scene.deferUpgradeChoiceUntil) {
    scene.deferUpgradeChoiceUntil = scene.time.now + echoLevelUpgradeDelay;
  }
  if (scene.deferUpgradeChoiceUntil && scene.time.now < scene.deferUpgradeChoiceUntil) {
    scheduleDeferredUpgradeChoice(scene);
    return;
  }
  scene.deferUpgradeChoiceUntil = 0;
  if (scene.upgradeChoiceOpening) return;

  scene.upgradeChoiceOpening = true;
  scene.upgradeChoiceOpenEvent = scene.time.delayedCall(UPGRADE_BAR_TWEEN_DURATION, () => {
    scene.upgradeChoiceOpenEvent = null;
    scene.upgradeChoiceOpening = false;
    if (state !== 'playing' && state !== 'leveling') return;

    scene.pendingLevelUpgradeChoice = false;
    state = 'upgrading';
    isDraggingShip = false;
    scene.input.setDefaultCursor('default');
    setXyControlActive(scene, false);
    if (isXyGameMode()) updateXyControlFromShip(scene);

    if (spawnEvent) {
      spawnEvent.remove(false);
      spawnEvent = null;
    }

    pauseFallingObjects(scene);
    pauseTimedGameplay(scene);
    scene.availableUpgradeChoices = getRandomUpgradeChoices();
    updateUpgradeButtons(scene);
    showOverlayScreen(scene, 'upgrade');
  });
}

function pauseGameplayForPendingUpgradeChoice(scene) {
  if (!scene || state !== 'playing') return;
  state = 'leveling';
  isDraggingShip = false;
  if (scene.input) scene.input.setDefaultCursor('default');
  setXyControlActive(scene, false);
  if (isXyGameMode()) updateXyControlFromShip(scene);

  if (spawnEvent) {
    spawnEvent.remove(false);
    spawnEvent = null;
  }

  pauseFallingObjects(scene);
  pauseTimedGameplay(scene);
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
  if (shieldBoosterLevel >= MAX_UPGRADE_LEVEL) {
    shieldDefeatLevelBonus += 1;
  }
  nextUpgradeScore = getLevelRequirement(playerLevel);
  queuePendingBossWave(scene, getBossConfigForLevel(completedLevel, scene));
  increaseDifficulty(scene);
  updatePlayerLevelText(scene);
}

function queuePendingBossWave(scene, bossConfig) {
  if (!scene || !bossConfig) return;
  if (!scene.pendingBossWave) {
    scene.pendingBossWave = bossConfig;
    return;
  }
  if (!scene.pendingBossWaves) scene.pendingBossWaves = [];
  scene.pendingBossWaves.push(bossConfig);
}

function getAvailableUpgradeKinds() {
  return ['lifeBooster', 'shieldBooster', 'scoreBooster', 'energyResonance', 'energyRefiner', 'energyPurifier', 'echoHelp', 'vitalExpander']
    .filter((upgradeKind) => canChooseUpgradeKind(upgradeKind));
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
        level >= MAX_UPGRADE_LEVEL ? 'Por cada nivel que superes, los enemigos derrotados proporcionan +1 punto.' : '',
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
  if (upgradeKind === 'energyResonance') {
    return {
      label: 'Resonancia energética',
      getDescription: () => getUpgradeDescriptionLines([
        'Tras recoger 3 orbes multiplicados con el catalizador, activa Sincronía.',
        'Durante la Sincronía los orbes rosas suman un multiplicador adicional.',
      ]),
      color: ENERGY_RESONANCE_COLOR,
      maxLevel: 1,
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
  if (upgradeKind === 'energyPurifier') {
    return {
      label: 'Purificador de energía',
      getDescription: () => 'Los orbes contaminados dejan de aparecer.',
      color: ENERGY_PURIFIER_COLOR,
      maxLevel: 1,
    };
  }
  if (upgradeKind === 'echoHelp') {
    return {
      label: 'Ayuda de Echo',
      getDescription: (level) => getUpgradeDescriptionLines([
        'Echo atacará a algunos enemigos que se acerquen a ti, con una probabilidad del ' + getEchoAttackChancePercent(level) + '%.',
      ]),
      color: ECHO_HELP_COLOR,
      maxLevel: 1,
    };
  }
  if (upgradeKind === 'vitalExpander') {
    return {
      label: 'Expansor vital',
      getDescription: () => 'Aumenta en +' + VITAL_EXPANDER_LIFE_BONUS + ' la capacidad de vida de la nave.',
      color: VITAL_EXPANDER_COLOR,
      maxLevel: 1,
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

function canChooseUpgradeKind(upgradeKind) {
  if (upgradeKind === 'energyPurifier' && energyRefinerLevel < MAX_UPGRADE_LEVEL) return false;
  if (upgradeKind === 'echoHelp' && shieldBoosterLevel < MAX_UPGRADE_LEVEL) return false;
  if (upgradeKind === 'vitalExpander' && lifeBoosterLevel < MAX_UPGRADE_LEVEL) return false;
  if (upgradeKind === 'energyResonance' && scoreBoosterLevel < MAX_UPGRADE_LEVEL) return false;
  return getUpgradeLevel(upgradeKind) < getUpgradeMaxLevel(upgradeKind);
}

function getUpgradeMaxLevel(upgradeKind) {
  const config = getUpgradeConfig(upgradeKind);
  return config.maxLevel || MAX_UPGRADE_LEVEL;
}

function chooseUpgrade(scene, upgradeKind) {
  if (state !== 'upgrading') return;
  if (!upgradeKind) return;
  if (!canChooseUpgradeKind(upgradeKind)) return;

  if (upgradeKind === 'lifeBooster') {
    lifeBoosterLevel += 1;
    updateLivesText(scene);
  } else if (upgradeKind === 'shieldBooster') {
    shieldBoosterLevel += 1;
  } else if (upgradeKind === 'scoreBooster') {
    scoreBoosterLevel += 1;
  } else if (upgradeKind === 'energyResonance') {
    energyResonanceLevel += 1;
  } else if (upgradeKind === 'energyRefiner') {
    energyRefinerLevel += 1;
  } else if (upgradeKind === 'energyPurifier') {
    energyPurifierLevel += 1;
  } else if (upgradeKind === 'echoHelp') {
    echoHelpLevel += 1;
    updateEchoCompanion(scene, 0);
  } else if (upgradeKind === 'vitalExpander') {
    vitalExpanderLevel += 1;
    expandVitalCapacity(scene);
  }

  updateUpgradeBar(scene);
  updateUpgradeStatusIcons(scene);
  setShipTextureForCurrentState(scene);
  showOverlayScreen(scene, null);
  scene.availableUpgradeChoices = null;

  if (levelProgressScore >= nextUpgradeScore) {
    state = 'leveling';
    maybeOpenUpgradeChoice(scene);
    return;
  }

  scene.levelUpgradeSequenceActive = false;

  if (hasPendingBossWave(scene)) {
    state = 'paused';
    scene.resumeSpawnDelay = null;
    setPauseOverlayMode(scene, 'normal');
    setXyControlActive(scene, false);
    prepareControlPauseResume(scene);
    showOverlayScreen(scene, null);
    setPauseSettingsVisible(true);
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
  if (upgradeKind === 'energyResonance') return energyResonanceLevel;
  if (upgradeKind === 'energyRefiner') return energyRefinerLevel;
  if (upgradeKind === 'energyPurifier') return energyPurifierLevel;
  if (upgradeKind === 'echoHelp') return echoHelpLevel;
  if (upgradeKind === 'vitalExpander') return vitalExpanderLevel;
  return 0;
}

function consumePendingBossWave(scene) {
  if (!scene || !hasPendingBossWave(scene) || state !== 'playing') return false;
  if (scene.pendingLevelUpgradeChoice) return false;
  if (
    getActiveTimedBooster(scene) ||
    getActiveWaveCountdown(scene) ||
    scene.waveStartEvent ||
    scene.waveResumeEvent ||
    scene.bossCueTween ||
    hasFallingObjects(scene) ||
    hasActivePlasmaBars(scene)
  ) return false;
  const bossConfig = scene.pendingBossWave || scene.pendingBossWaves.shift();
  scene.pendingBossWave = scene.pendingBossWaves && scene.pendingBossWaves.length
    ? scene.pendingBossWaves.shift()
    : null;
  releasePendingStreakRepairKit(scene);
  activateLevelBoss(scene, bossConfig);
  return true;
}

function hasPendingBossWave(scene) {
  return Boolean(scene && (scene.pendingBossWave || (scene.pendingBossWaves && scene.pendingBossWaves.length)));
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
  scene.pendingLevelUpgradeChoice = false;
  scene.levelUpgradeSequenceActive = false;
  scene.upgradeChoiceOpening = false;
  scene.pendingStreakRepairKit = false;
  if (scene.upgradeChoiceOpenEvent) {
    scene.upgradeChoiceOpenEvent.remove(false);
    scene.upgradeChoiceOpenEvent = null;
  }
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
  [
    ['energyRefiner', 'energyPurifier'],
    ['scoreBooster', 'energyResonance'],
    ['shieldBooster', 'echoHelp'],
    ['lifeBooster', 'vitalExpander'],
  ].forEach((upgradePair) => {
    const pairElement = document.createElement('span');
    pairElement.className = 'hud-upgrade-pair';
    currentHud.upgrades.appendChild(pairElement);

    upgradePair.forEach((upgradeKind) => {
      const config = getUpgradeConfig(upgradeKind);
      addUpgradeStatusIcon(scene, upgradeKind, getUpgradeLevel(upgradeKind), config.color, config.label, {
        locked: isUpgradeLockedForHud(upgradeKind),
        lockLabel: getUpgradeLockLabel(upgradeKind),
        lockColor: getUpgradeLockColor(upgradeKind),
        maxLevel: getUpgradeMaxLevel(upgradeKind),
        parent: pairElement,
      });
    });
  });
}

function isUpgradeLockedForHud(upgradeKind) {
  if (upgradeKind === 'energyPurifier') return energyRefinerLevel < MAX_UPGRADE_LEVEL;
  if (upgradeKind === 'echoHelp') return shieldBoosterLevel < MAX_UPGRADE_LEVEL;
  if (upgradeKind === 'vitalExpander') return lifeBoosterLevel < MAX_UPGRADE_LEVEL;
  if (upgradeKind === 'energyResonance') return scoreBoosterLevel < MAX_UPGRADE_LEVEL;
  return false;
}

function getUpgradeLockLabel(upgradeKind) {
  if (upgradeKind === 'energyPurifier') return 'requiere Refinador de energía nivel ' + MAX_UPGRADE_LEVEL;
  if (upgradeKind === 'echoHelp') return 'requiere Barrera protectora nivel ' + MAX_UPGRADE_LEVEL;
  if (upgradeKind === 'vitalExpander') return 'requiere Kit de reparación nivel ' + MAX_UPGRADE_LEVEL;
  if (upgradeKind === 'energyResonance') return 'requiere Catalizador de energía nivel ' + MAX_UPGRADE_LEVEL;
  return 'bloqueada';
}

function getUpgradeLockColor(upgradeKind) {
  if (upgradeKind === 'echoHelp') return 'rgba(77, 163, 255, 0.31)';
  if (upgradeKind === 'vitalExpander') return VITAL_EXPANDER_LOCK_COLOR;
  if (upgradeKind === 'energyResonance') return 'rgba(155, 92, 255, 0.31)';
  return 'rgba(255, 216, 77, 0.31)';
}

function addUpgradeStatusIcon(scene, upgradeKind, level, color, label, options = {}) {
  const currentHud = initHud();
  if (!currentHud.upgrades) return;
  const parent = options.parent || currentHud.upgrades;

  const isLocked = Boolean(options.locked);
  const chip = document.createElement('span');
  chip.className = 'hud-upgrade-chip';
  chip.classList.toggle('is-empty', level <= 0);
  chip.classList.toggle('is-locked', isLocked);
  chip.style.setProperty('--chip-color', color);
  if (options.lockColor) chip.style.setProperty('--lock-color', options.lockColor);
  const isMaxed = level > 0 && level >= (options.maxLevel || MAX_UPGRADE_LEVEL);
  const statusLabel = isMaxed ? 'nivel máximo' : (level > 0 ? 'nivel ' + level : 'sin desbloquear');
  chip.setAttribute('aria-label', label + ': ' + (isLocked ? options.lockLabel : statusLabel));
  chip.setAttribute('role', 'button');
  chip.setAttribute('tabindex', currentHud.root && currentHud.root.classList.contains('is-paused-upgrades-readable') ? '0' : '-1');
  chip.dataset.upgradeKind = upgradeKind;
  chip.textContent = isMaxed ? 'MAX' : (level > 0 ? 'Nv.' + level : '');
  ['pointerdown', 'pointerup', 'touchstart', 'touchend'].forEach((eventName) => {
    chip.addEventListener(eventName, (event) => {
      if (state !== 'paused') return;
      event.stopPropagation();
    }, { passive: true });
  });
  chip.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (state !== 'paused') return;
    playButtonSound(scene);
    showPausedUpgradeDetails(scene, upgradeKind);
  });
  chip.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    event.stopPropagation();
    if (state !== 'paused') return;
    playButtonSound(scene);
    showPausedUpgradeDetails(scene, upgradeKind);
  });
  parent.appendChild(chip);
}

function getPausedUpgradeDescription(upgradeKind, config = getUpgradeConfig(upgradeKind)) {
  const level = getUpgradeLevel(upgradeKind);
  const maxLevel = getUpgradeMaxLevel(upgradeKind);
  const isLocked = isUpgradeLockedForHud(upgradeKind);
  const nextLevel = Math.min(maxLevel, level + 1);
  const lines = [];

  if (isLocked) {
    lines.push('Bloqueada: ' + getUpgradeLockLabel(upgradeKind) + '.');
    lines.push('Cuando se desbloquee: ' + config.getDescription(1));
    return getUpgradeDescriptionLines(lines);
  }

  if (level <= 0) {
    lines.push('Sin desbloquear.');
    lines.push('Próxima mejora: ' + config.getDescription(1));
    return getUpgradeDescriptionLines(lines);
  }

  lines.push('Nivel actual ' + level + '/' + maxLevel + '.');
  lines.push(config.getDescription(level));
  if (level >= maxLevel) {
    lines.push('Mejora al nivel máximo.');
  } else {
    lines.push('Siguiente nivel: ' + config.getDescription(nextLevel));
  }
  return getUpgradeDescriptionLines(lines);
}

function isEnergyPurifierActive() {
  return energyPurifierLevel > 0;
}

function setUpgradeButtonState(button, config, level) {
  const maxLevel = config.maxLevel || MAX_UPGRADE_LEVEL;
  const isMaxed = level >= maxLevel;
  const nextLevel = Math.min(maxLevel, level + 1);
  const title = config.label + (isMaxed ? ' MAX' : maxLevel === 1 ? '' : ' ' + nextLevel);
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
    if (ball.getData('pausedAngularVelocity') === undefined) {
      ball.setData('pausedAngularVelocity', ball.body.angularVelocity || 0);
      ball.setAngularVelocity(0);
    }
    ball.body.setVelocityX(0);
    ball.body.setVelocityY(0);
  });
}

function resumeFallingObjects(scene) {
  scene.balls.getChildren().forEach((ball) => {
    if (!ball.active) return;
    const kind = ball.getData('kind');
    const pausedAngularVelocity = ball.getData('pausedAngularVelocity');
    if (pausedAngularVelocity !== undefined) {
      ball.setAngularVelocity(pausedAngularVelocity);
      ball.setData('pausedAngularVelocity', undefined);
    }
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
  if (object.getData('kind') === 'giroDrone') return isGiroDroneOverlappingShip(scene, object);
  if (object.getData('kind') === 'redNeedle') return isRedNeedleOverlappingShip(scene, object);
  if (object.getData('kind') === 'redNeedleLaser') return isRedNeedleLaserOverlappingShip(scene, object);
  if (object.getData('kind') === 'damageBooster') return isDamageBoosterOverlappingShip(scene, object);
  if (isScissorKind(object.getData('kind'))) return isScissorOverlappingShip(scene, object);
  if (object.getData('kind') === 'replicator') {
    return isRectOverlappingShip(scene, object.x, object.y, REPLICATOR_HITBOX_WIDTH, REPLICATOR_HITBOX_HEIGHT);
  }

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

function isDamageBoosterOverlappingShip(scene, enemy) {
  return isRectOverlappingShip(scene, enemy.x, enemy.y, RED_ENEMY_HITBOX_WIDTH, RED_ENEMY_HITBOX_HEIGHT);
}

function isScissorOverlappingShip(scene, enemy) {
  return isRectOverlappingShip(
    scene,
    enemy.x,
    enemy.y,
    isScissorHalfKind(enemy.getData('kind')) ? SCISSOR_HALF_HITBOX_WIDTH : SCISSOR_HITBOX_WIDTH,
    isScissorHalfKind(enemy.getData('kind')) ? SCISSOR_HALF_HITBOX_HEIGHT : SCISSOR_HITBOX_HEIGHT
  );
}

function isGiroDroneOverlappingShip(scene, giroDrone) {
  if (giroDrone.getData('spikeState') === 'disabled') return false;
  const giroState = giroDrone.getData('spikeState');
  if (
    isGiroDroneCoreOverlappingShip(scene, giroDrone) &&
    (isGiroDroneGreenState(giroState) || isGiroDroneOrangeState(giroState))
  ) {
    return true;
  }
  if (giroState === 'expanded' && isGiroDroneDamageHaloOverlappingShip(scene, giroDrone)) return true;

  const satellite = giroDrone.getData('orbitSatellite');
  if (!satellite || satellite.active === false) return false;
  return isGiroDroneDamageHaloOverlappingShip(scene, satellite);
}

function isGiroDroneDamageHaloOverlappingShip(scene, object) {
  if (isShieldActive(scene)) {
    const distance = Phaser.Math.Distance.Between(scene.ship.x, scene.ship.y, object.x, object.y);
    return distance <= SHIELD_BUBBLE_RADIUS + GIRODRONE_DAMAGE_HALO_RADIUS;
  }

  return getDistanceToShipHitbox(scene, object) <= GIRODRONE_DAMAGE_HALO_RADIUS;
}

function isGiroDroneCoreOverlappingShip(scene, giroDrone) {
  if (isShieldActive(scene)) {
    return getDistanceToShieldCenter(scene, giroDrone) <= SHIELD_BUBBLE_RADIUS + GIRODRONE_CORE_RADIUS;
  }

  return getDistanceToShipHitbox(scene, giroDrone) <= GIRODRONE_CORE_RADIUS;
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
  if (kind === 'damageBooster') return RED_ENEMY_SHIELD_RADIUS;
  if (kind === 'scissor') return SCISSOR_HITBOX_HEIGHT / 2;
  if (isScissorHalfKind(kind)) return SCISSOR_HALF_HITBOX_HEIGHT / 2;
  if (kind === 'replicator') return REPLICATOR_HITBOX_WIDTH / 2;
  if (kind === 'spikeDrone') return object.getData('collisionRadius') || SPIKE_DRONE_FOLDED_RADIUS;
  if (kind === 'giroDrone') return GIRODRONE_ORBIT_RADIUS + GIRODRONE_SATELLITE_RADIUS;
  if (kind === 'bigAsteroid') return 34;
  if (kind === 'asteroid') return 18;
  if (kind === 'crystallizedOrb') return CRYSTALLIZED_ORB_RADIUS;
  if (isEnergyOrbSpeedKind(kind)) return 16;
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
  if (
    isBlockingBossWave(scene) ||
    (hasPendingBossWave(scene) && !getActiveTimedBooster(scene))
  ) return;

  if (shouldStartTravelSentinel(scene)) {
    activateTravelSentinel(scene);
    return;
  }

  const kinds = getNextSpawnKinds(scene);
  if (!kinds.length) return;

  const spawnedObjects = [];
  kinds.forEach((kind) => {
    if (!kind) return;
    if (kind === 'plasmaBar') {
      spawnPlasmaBar(scene);
      return;
    }
    if (kind === 'redNeedle') {
      spawnRedNeedle(scene);
      return;
    }
    if (!canSpawnFallingKindNow(scene, kind)) return;

    const forcedX = spawnedObjects.length > 0 && isEnergyOrbSpeedKind(kind)
      ? findSpawnXAwayFrom(scene, spawnedObjects, PAIRED_SPAWN_MIN_SPACING)
      : null;
    const object = spawnFallingKind(scene, kind, forcedX);
    if (object) spawnedObjects.push(object);
  });
}

function spawnForcedFallingKind(scene, kind, x = null) {
  if (!scene || !scene.balls) return null;
  if (kind === 'lifeBooster' && !canDropLifeBooster()) return null;
  if (!canSpawnFallingKindNow(scene, kind)) return null;
  return spawnFallingKind(scene, kind, x);
}

function canSpawnFallingKindNow(scene, kind) {
  if (!isSpawnLimitedHostileKind(kind)) return true;
  const hostileObjects = getActiveSpawnLimitedHostiles(scene);
  if (hostileObjects.length >= MAX_ACTIVE_HOSTILE_SPAWNS) return false;
  const topHostiles = hostileObjects.filter((object) => object.y < TOP_HOSTILE_SPAWN_ZONE_HEIGHT);
  return topHostiles.length < MAX_ACTIVE_TOP_HOSTILE_SPAWNS;
}

function getActiveSpawnLimitedHostiles(scene) {
  if (!scene || !scene.balls) return [];
  return scene.balls.getChildren().filter((object) => (
    object.active &&
    object.getData &&
    isSpawnLimitedHostileKind(object.getData('kind'))
  ));
}

function isSpawnLimitedHostileKind(kind) {
  return kind === 'damageBooster' ||
    isScissorKind(kind) ||
    kind === 'replicator' ||
    kind === 'spikeDrone' ||
    kind === 'giroDrone' ||
    kind === 'crystallizedOrb' ||
    isAsteroidKind(kind);
}

function spawnFallingKind(scene, kind, forcedX = null) {
  const isBooster = isBoosterKind(kind);
  const x = forcedX !== null ? forcedX : isAsteroidKind(kind)
    ? findAsteroidSpawnX(scene)
    : kind === 'damageBooster' || kind === 'scissor'
    ? findRedWaveEnemySpawnX(scene)
    : kind === 'replicator' && scene.activeRedWave && scene.activeRedWave.bossKind === 'replicators'
      ? findReplicatorWaveSpawnX(scene)
    : kind === 'giroDrone'
      ? findGiroDroneSpawnX(scene)
    : isBooster
      ? findBoosterSpawnX(scene)
      : findSpawnX(scene);
  const texture = getTextureForKind(kind);
  const spawnY = kind === 'bigAsteroid'
    ? -54
    : kind === 'replicator'
      ? -SHIP_HEIGHT
      : kind === 'scissor'
        ? -SCISSOR_TEXTURE_HEIGHT / 2
        : -20;

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
    setBallEnergyColor(ball, scene.activeScoreBooster ? getScoreBoosterOrbColor(scene) : 'gold');
    attachEnergyOrbOverlay(scene, ball, getEnergyOrbWispPalette(kind));
  } else if (kind === 'contaminatedOrb') {
    attachEnergyOrbOverlay(scene, ball, getEnergyOrbWispPalette(kind));
  } else if (kind === 'crystallizedOrb') {
    setBallEnergyColorData(ball, 'gold');
    attachEnergyOrbOverlay(scene, ball, getEnergyOrbWispPalette(kind, getEnergyOrbColor(ball)));
  } else if (isAsteroidKind(kind)) {
    ball.setAngularVelocity(Phaser.Math.Between(-110, 110));
  } else if (kind === 'damageBooster' || kind === 'scissor') {
    setupRedEnemySway(ball);
    if (kind === 'scissor') {
      ball.setData('displayName', 'Escisora');
      ball.setData('splitY', getGameHeight(scene) * SCISSOR_SPLIT_Y_RATIO);
    }
  } else if (kind === 'replicator') {
    setupReplicator(scene, ball);
  } else if (kind === 'spikeDrone') {
    setupSpikeDrone(scene, ball);
  } else if (kind === 'giroDrone') {
    setupGiroDrone(scene, ball);
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

function updateScissors(scene) {
  if (!scene.balls) return;

  scene.balls.getChildren().forEach((scissor) => {
    if (!scissor.active || !scissor.body) return;
    const kind = scissor.getData('kind');

    if (kind === 'scissor') {
      scissor.body.setVelocityY(getFallingVelocity('scissor', scene, scissor));
      if (scissor.y >= (scissor.getData('splitY') || getGameHeight(scene) * SCISSOR_SPLIT_Y_RATIO)) {
        splitScissor(scene, scissor);
      }
      return;
    }

    if (!isScissorHalfKind(kind)) return;
    const horizontalVelocity = scissor.getData('horizontalVelocity') || (kind === 'scissorLeft' ? -SCISSOR_HALF_HORIZONTAL_SPEED : SCISSOR_HALF_HORIZONTAL_SPEED);
    scissor.body.setVelocityX(horizontalVelocity);
    scissor.body.setVelocityY(getFallingVelocity(kind, scene, scissor));
    scissor.setRotation(0);

    const margin = SCISSOR_HALF_TEXTURE_WIDTH;
    if (
      scissor.x < -margin ||
      scissor.x > getGameWidth(scene) + margin ||
      scissor.y > getGameHeight(scene) + SCISSOR_TEXTURE_HEIGHT
    ) {
      scissor.destroy();
    }
  });
}

function splitScissor(scene, scissor) {
  if (!scissor || !scissor.active || scissor.getData('hasSplit')) return;

  const x = scissor.x;
  const y = scissor.y;
  const velocityY = getFallingVelocity('scissor', scene, scissor);
  scissor.setData('hasSplit', true);
  createScissorHalf(scene, 'scissorLeft', x - SCISSOR_HALF_TEXTURE_WIDTH / 2, y, -SCISSOR_HALF_HORIZONTAL_SPEED, velocityY);
  createScissorHalf(scene, 'scissorRight', x + SCISSOR_HALF_TEXTURE_WIDTH / 2, y, SCISSOR_HALF_HORIZONTAL_SPEED, velocityY);
  emitScissorSplitBurst(scene, x, y);
  scissor.destroy();
}

function createScissorHalf(scene, kind, x, y, velocityX, velocityY) {
  const half = scene.balls.create(x, y, getTextureForKind(kind));
  half.setData('kind', kind);
  half.setData('displayName', 'Escisora');
  half.setData('horizontalVelocity', velocityX);
  half.setData('fallVelocity', velocityY);
  half.setOrigin(0.5);
  half.setDepth(FALLING_OBJECT_DEPTH);
  half.setRotation(0);
  setFallingObjectBody(half, kind);
  half.body.setBounce(0, 0);
  half.body.setAllowGravity(false);
  half.body.setCollideWorldBounds(false);
  half.body.setVelocityX(velocityX);
  half.body.setVelocityY(velocityY);
  return half;
}

function emitScissorSplitBurst(scene, x, y) {
  for (let i = 0; i < 18; i += 1) {
    const side = i % 2 === 0 ? -1 : 1;
    const particle = trackGameplayVisual(scene, scene.add.image(
      x + Phaser.Math.Between(-3, 3),
      y + Phaser.Math.Between(-20, 20),
      'goldTrailParticle'
    ));
    particle
      .setDepth(FX_DEPTH)
      .setTint(i % 4 === 0 ? 0xffd7df : i % 3 === 0 ? 0xff8a9a : 0xff263c)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setScale(Phaser.Math.FloatBetween(0.35, 0.75))
      .setAlpha(0.92);

    scene.tweens.add({
      targets: particle,
      x: particle.x + side * Phaser.Math.Between(12, 42),
      y: particle.y + Phaser.Math.Between(-18, 18),
      scale: 0.08,
      alpha: 0,
      duration: Phaser.Math.Between(120, 260),
      ease: 'Sine.easeOut',
      onComplete: () => particle.destroy(),
    });
  }
}

function setupRedEnemySway(enemy) {
  enemy.setData('swayPhase', Phaser.Math.FloatBetween(0, Math.PI * 2));
  enemy.setData('swaySpeed', Phaser.Math.FloatBetween(RED_ENEMY_SWAY_SPEED * 0.85, RED_ENEMY_SWAY_SPEED * 1.15));
  enemy.setData('swayVelocity', Phaser.Math.FloatBetween(RED_ENEMY_SWAY_MAX_VELOCITY * 0.65, RED_ENEMY_SWAY_MAX_VELOCITY));
}

function setupReplicator(scene, replicator) {
  const isReplicatorWave = Boolean(scene.activeRedWave && scene.activeRedWave.bossKind === 'replicators');
  const previousReplicator = isReplicatorWave
    ? getLastActiveReplicator(scene, replicator)
    : null;
  replicator
    .setScale(REPLICATOR_SCALE)
    .setFlipY(true)
    .setAlpha(0.9)
    .setTint(0xdffcff);
  replicator.setData('displayName', 'Replicador');
  replicator.setData(
    'followDelay',
    isReplicatorWave
      ? REPLICATOR_CHAIN_FOLLOW_DELAY
      : Phaser.Math.Between(REPLICATOR_FOLLOW_DELAY_MIN, REPLICATOR_FOLLOW_DELAY_MAX)
  );
  replicator.setData('nextGlitchAt', 0);
  replicator.setData('followTarget', previousReplicator);
  replicator.setData('lastFollowTargetX', previousReplicator ? previousReplicator.x : scene.ship.x);
  replicator.setData('movementHistory', []);

  const chromaticGhosts = [
    scene.add.image(replicator.x, replicator.y, 'ship')
      .setOrigin(0.5)
      .setScale(REPLICATOR_SCALE)
      .setFlipY(true)
      .setTint(0xff00b8)
      .setAlpha(0.3)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setDepth(FALLING_OBJECT_DEPTH - 1),
    scene.add.image(replicator.x, replicator.y, 'ship')
      .setOrigin(0.5)
      .setScale(REPLICATOR_SCALE)
      .setFlipY(true)
      .setTint(0x00f5ff)
      .setAlpha(0.3)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setDepth(FALLING_OBJECT_DEPTH - 1),
  ];

  const sliceColors = [0xff00b8, 0x00f5ff, 0x78ff00];
  const glitchSlices = Array.from({ length: REPLICATOR_GLITCH_SLICE_COUNT }, (_, index) => {
    const sliceHeight = Phaser.Math.Between(3, 8);
    const sliceY = Phaser.Math.Between(0, SHIP_TEXTURE_HEIGHT - sliceHeight);
    return scene.add.image(replicator.x, replicator.y, 'ship')
      .setOrigin(0.5)
      .setScale(REPLICATOR_SCALE)
      .setFlipY(true)
      .setCrop(0, sliceY, SHIP_TEXTURE_WIDTH, sliceHeight)
      .setTint(sliceColors[index % sliceColors.length])
      .setAlpha(0)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setDepth(FALLING_OBJECT_DEPTH + 1);
  });

  const glitchPixels = Array.from({ length: REPLICATOR_GLITCH_PIXEL_COUNT }, (_, index) => (
    scene.add.rectangle(replicator.x, replicator.y, 4, 2, sliceColors[index % sliceColors.length], 0)
      .setOrigin(0.5)
      .setBlendMode(Phaser.BlendModes.ADD)
      .setDepth(FALLING_OBJECT_DEPTH + 1)
  ));

  const glitchParts = [...chromaticGhosts, ...glitchSlices, ...glitchPixels];
  const trail = scene.add.graphics()
    .setDepth(FALLING_OBJECT_DEPTH - 2)
    .setBlendMode(Phaser.BlendModes.ADD);
  replicator.setData('chromaticGhosts', chromaticGhosts);
  replicator.setData('glitchSlices', glitchSlices);
  replicator.setData('glitchPixels', glitchPixels);
  replicator.setData('trail', trail);
  replicator.setData('trailPoints', []);
  replicator.once('destroy', () => {
    glitchParts.forEach((part) => part.destroy());
    trail.destroy();
  });
}

function findReplicatorWaveSpawnX(scene) {
  const previousReplicator = getLastActiveReplicator(scene);
  return previousReplicator ? previousReplicator.x : findSpawnX(scene);
}

function getLastActiveReplicator(scene, excludedReplicator = null) {
  const replicators = scene.balls.getChildren().filter((object) => (
    object !== excludedReplicator &&
    object.active &&
    object.getData('kind') === 'replicator'
  ));
  return replicators[replicators.length - 1] || null;
}

function updateReplicators(scene, time, delta) {
  if (!scene.ship || !scene.balls) return;
  if (!scene.replicatorShipHistory) scene.replicatorShipHistory = [];
  scene.replicatorShipHistory.push({ time, x: scene.ship.x });
  scene.replicatorShipHistory = scene.replicatorShipHistory.filter((sample) => time - sample.time <= REPLICATOR_FOLLOW_DELAY_MAX + 100);

  const replicators = scene.balls.getChildren().filter((object) => (
    object.active &&
    object.getData('kind') === 'replicator' &&
    object.body
  ));
  replicators.forEach((replicator) => {
    const history = replicator.getData('movementHistory') || [];
    history.push({ time, x: replicator.x });
    replicator.setData(
      'movementHistory',
      history.filter((sample) => time - sample.time <= REPLICATOR_FOLLOW_DELAY_MAX + 100)
    );
  });

  replicators.forEach((replicator) => {
    const delay = replicator.getData('followDelay') || REPLICATOR_FOLLOW_DELAY_MIN;
    const targetTime = time - delay;
    const followTarget = replicator.getData('followTarget');
    const isFollowingReplicator = Boolean(followTarget);
    const sourceHistory = isFollowingReplicator && followTarget.active
      ? followTarget.getData('movementHistory') || []
      : scene.replicatorShipHistory;
    const sampledX = getReplicatorHistoryX(sourceHistory, targetTime);
    const targetX = Number.isFinite(sampledX) ? sampledX : scene.ship.x;
    if (Number.isFinite(targetX)) replicator.setData('lastFollowTargetX', targetX);
    const distanceX = targetX - replicator.x;
    const maxVelocity = Math.min(REPLICATOR_FOLLOW_SPEED, Math.abs(distanceX) * 4.2);
    replicator.body.setVelocityX(Math.sign(distanceX) * maxVelocity);
    replicator.body.setVelocityY(getFallingVelocity('replicator', scene, replicator));

    if (time >= (replicator.getData('nextGlitchAt') || 0)) {
      replicator.setData('nextGlitchAt', time + Phaser.Math.Between(REPLICATOR_GLITCH_INTERVAL, REPLICATOR_GLITCH_INTERVAL + 55));
      refreshReplicatorGlitch(replicator);
    }

    positionReplicatorGlitch(replicator);
    updateReplicatorTrail(scene, replicator, time, delta);
  });
}

function getReplicatorHistoryX(history, targetTime) {
  if (!history.length) return null;
  if (targetTime <= history[0].time) return history[0].x;

  for (let index = 1; index < history.length; index += 1) {
    const currentSample = history[index];
    if (currentSample.time < targetTime) continue;
    const previousSample = history[index - 1];
    const duration = Math.max(1, currentSample.time - previousSample.time);
    const progress = Phaser.Math.Clamp((targetTime - previousSample.time) / duration, 0, 1);
    return Phaser.Math.Linear(previousSample.x, currentSample.x, progress);
  }

  return history[history.length - 1].x;
}

function updateReplicatorTrail(scene, replicator, time, delta) {
  const trail = replicator.getData('trail');
  if (!trail) return;

  const targetX = replicator.x;
  const targetY = replicator.y - 14;
  const anchorX = replicator.getData('trailAnchorX');
  const anchorY = replicator.getData('trailAnchorY');
  const smoothedX = anchorX === undefined
    ? targetX
    : Phaser.Math.Linear(anchorX, targetX, SHIP_TRAIL_POSITION_SMOOTHING);
  const smoothedY = anchorY === undefined
    ? targetY
    : Phaser.Math.Linear(anchorY, targetY, SHIP_TRAIL_POSITION_SMOOTHING);
  replicator.setData('trailAnchorX', smoothedX);
  replicator.setData('trailAnchorY', smoothedY);

  let points = replicator.getData('trailPoints') || [];
  const previousPoint = points[points.length - 1];
  const movedEnough = !previousPoint || Phaser.Math.Distance.Between(
    previousPoint.x,
    previousPoint.y,
    smoothedX,
    smoothedY
  ) >= SHIP_TRAIL_MIN_POINT_DISTANCE;

  if (movedEnough || !previousPoint || time - previousPoint.createdAt >= SHIP_TRAIL_IDLE_INTERVAL) {
    points.push({ x: smoothedX, y: smoothedY, createdAt: time });
  } else {
    const fallRatio = getFallingVelocity('replicator', scene, replicator) / BASE_GRAVITY;
    const drift = fallRatio * SHIP_TRAIL_IDLE_SPEED * Math.min(delta || 16, SHIP_TRAIL_IDLE_MAX_DELTA);
    points.forEach((point) => {
      point.y -= drift;
    });
  }

  points = points
    .filter((point) => time - point.createdAt <= REPLICATOR_TRAIL_DURATION)
    .slice(-REPLICATOR_TRAIL_MAX_POINTS);
  replicator.setData('trailPoints', points);
  drawReplicatorTrail(trail, points, time);
}

function drawReplicatorTrail(graphics, trailPoints, time) {
  const points = smoothShipTrailPoints(trailPoints);
  graphics.clear();
  if (points.length < 2) return;

  for (let i = 1; i < points.length; i += 1) {
    const previousPoint = points[i - 1];
    const currentPoint = points[i];
    const age = time - currentPoint.createdAt;
    const freshness = Phaser.Math.Clamp(1 - age / REPLICATOR_TRAIL_DURATION, 0, 1);
    const positionRatio = i / (points.length - 1);
    const taper = Math.pow(Math.min(freshness, positionRatio), 1.18);
    const width = Math.max(0.8, SHIP_TRAIL_WIDTH * REPLICATOR_SCALE * taper);
    const alpha = SHIP_TRAIL_BASE_ALPHA + SHIP_TRAIL_ALPHA_RANGE * taper;
    const blueMix = Phaser.Math.Clamp((positionRatio - (1 - SHIP_TRAIL_BLUE_CORE_RATIO)) / SHIP_TRAIL_BLUE_CORE_RATIO, 0, 1);
    const haloColor = mixRgbColor(0xff9f1c, 0x1269d3, blueMix);
    const bodyColor = mixRgbColor(0xf08a2a, 0x1678c8, blueMix);
    const coreColor = mixRgbColor(0xffc14f, 0x44b8dc, blueMix);

    graphics.lineStyle(width * 1.25, haloColor, alpha * 0.28);
    graphics.lineBetween(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y);
    graphics.lineStyle(width, bodyColor, alpha);
    graphics.lineBetween(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y);
    graphics.lineStyle(Math.max(0.6, width * 0.22), coreColor, alpha * SHIP_TRAIL_CORE_ALPHA_RATIO);
    graphics.lineBetween(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y);
  }
}

function refreshReplicatorGlitch(replicator) {
  replicator.setAlpha(Phaser.Math.FloatBetween(0.82, 0.96));

  const chromaticGhosts = replicator.getData('chromaticGhosts') || [];
  chromaticGhosts.forEach((ghost, index) => {
    const direction = index === 0 ? -1 : 1;
    ghost.setData('glitchOffsetX', direction * Phaser.Math.Between(3, 8));
    ghost.setData('glitchOffsetY', Phaser.Math.Between(-2, 2));
    ghost.setAlpha(Phaser.Math.FloatBetween(0.18, 0.38));
  });

  const glitchSlices = replicator.getData('glitchSlices') || [];
  glitchSlices.forEach((slice) => {
    const sliceHeight = Phaser.Math.Between(2, 7);
    const sliceY = Phaser.Math.Between(0, SHIP_TEXTURE_HEIGHT - sliceHeight);
    slice.setCrop(0, sliceY, SHIP_TEXTURE_WIDTH, sliceHeight);
    slice.setData('glitchOffsetX', Phaser.Math.Between(-18, 18));
    slice.setData('glitchOffsetY', 0);
    slice.setAlpha(Math.random() < 0.78 ? Phaser.Math.FloatBetween(0.24, 0.62) : 0);
  });

  const glitchPixels = replicator.getData('glitchPixels') || [];
  glitchPixels.forEach((pixel) => {
    const side = Math.random() < 0.5 ? -1 : 1;
    pixel.setData('glitchOffsetX', side * Phaser.Math.Between(28, 72));
    pixel.setData('glitchOffsetY', Phaser.Math.Between(-22, 22));
    pixel.setDisplaySize(Phaser.Math.Between(2, 12), Phaser.Math.Between(1, 3));
    pixel.setAlpha(Math.random() < 0.65 ? Phaser.Math.FloatBetween(0.28, 0.8) : 0);
  });
}

function positionReplicatorGlitch(replicator) {
  const chromaticGhosts = replicator.getData('chromaticGhosts') || [];
  const glitchSlices = replicator.getData('glitchSlices') || [];
  const glitchPixels = replicator.getData('glitchPixels') || [];
  [...chromaticGhosts, ...glitchSlices, ...glitchPixels].forEach((part) => {
    part.setPosition(
      replicator.x + (part.getData('glitchOffsetX') || 0),
      replicator.y + (part.getData('glitchOffsetY') || 0)
    );
  });
}

function updateRedEnemySway(scene, time) {
  const min = 34;
  const max = Math.max(min, getGameWidth(scene) - 34);
  scene.balls.getChildren().forEach((enemy) => {
    const kind = enemy.getData('kind');
    if (!enemy.active || (kind !== 'damageBooster' && kind !== 'scissor')) return;
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
    enemy.body.setVelocityY(getFallingVelocity(kind, scene, enemy));
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

function setupGiroDrone(scene, giroDrone) {
  const direction = Math.random() < 0.5 ? -1 : 1;
  const phase = Phaser.Math.Between(0, SPIKE_DRONE_FOLDED_DURATION + SPIKE_DRONE_WARNING_DURATION + SPIKE_DRONE_EXPANDED_DURATION);
  const stateConfig = getSpikeDroneStateFromPhase(phase);
  const coreEnergy = trackGameplayVisual(scene, scene.add.graphics().setDepth(FALLING_OBJECT_DEPTH + 2));
  const energy = trackGameplayVisual(scene, scene.add.graphics().setDepth(FALLING_OBJECT_DEPTH + 2));
  const satellite = trackGameplayVisual(scene, scene.add.image(giroDrone.x, giroDrone.y, 'giroDroneSatelliteRed'))
    .setOrigin(0.5)
    .setDepth(FALLING_OBJECT_DEPTH + 1)
    .setScale(GIRODRONE_SCALE);

  giroDrone.setScale(GIRODRONE_SCALE);
  giroDrone.setAngularVelocity(0);
  giroDrone.setData('displayName', 'Girodron');
  giroDrone.setData('collisionRadius', GIRODRONE_CORE_RADIUS);
  giroDrone.setData('coreEnergy', coreEnergy);
  giroDrone.setData('orbitSatellite', satellite);
  giroDrone.setData('orbitEnergy', energy);
  giroDrone.setData('orbitAngle', Phaser.Math.FloatBetween(0, Math.PI * 2));
  giroDrone.setData('orbitDirection', direction);
  giroDrone.setData('orbitRadius', GIRODRONE_ORBIT_RADIUS);
  applyGiroDroneCoreState(giroDrone, stateConfig.state, scene);
  giroDrone.setData('nextSpikeStateAt', scene.time.now + stateConfig.remaining);
  setFallingObjectBody(giroDrone, 'giroDrone');
  updateGiroDroneVisuals(giroDrone, scene.time.now);

  giroDrone.once('destroy', () => {
    if (satellite && satellite.active !== false) satellite.destroy();
    if (energy && energy.active !== false) energy.destroy();
    if (coreEnergy && coreEnergy.active !== false) coreEnergy.destroy();
  });
}

function updateGiroDrones(scene, delta) {
  scene.balls.getChildren().forEach((giroDrone) => {
    if (!giroDrone.active || giroDrone.getData('kind') !== 'giroDrone') return;
    if (!giroDrone.body) return;

    giroDrone.body.setVelocityX(0);
    giroDrone.body.setVelocityY(getFallingVelocity('giroDrone', scene, giroDrone));

    const stateName = giroDrone.getData('spikeState') || 'folded';
    if (stateName !== 'disabled') {
      const angle = (giroDrone.getData('orbitAngle') || 0) +
        (delta || 16) * GIRODRONE_ORBIT_SPEED * (giroDrone.getData('orbitDirection') || 1);
      giroDrone.setData('orbitAngle', angle);
    }

    const nextStateAt = giroDrone.getData('nextSpikeStateAt') || 0;
    if (stateName !== 'disabled' && scene.time.now >= nextStateAt) {
      if (stateName === 'folded') {
        applyGiroDroneCoreState(giroDrone, 'warningGreen', scene);
        giroDrone.setData('nextSpikeStateAt', scene.time.now + SPIKE_DRONE_WARNING_GREEN_DURATION);
      } else if (stateName === 'warningGreen') {
        applyGiroDroneCoreState(giroDrone, 'warningRed', scene);
        giroDrone.setData('nextSpikeStateAt', scene.time.now + SPIKE_DRONE_WARNING_RED_DURATION);
      } else if (stateName === 'warningRed') {
        applyGiroDroneCoreState(giroDrone, 'expanded', scene);
        playSpikeDroneSound(scene);
        giroDrone.setData('nextSpikeStateAt', scene.time.now + SPIKE_DRONE_EXPANDED_DURATION);
      } else {
        applyGiroDroneCoreState(giroDrone, 'folded', scene);
        giroDrone.setData('nextSpikeStateAt', scene.time.now + SPIKE_DRONE_FOLDED_DURATION);
      }
    }

    updateGiroDroneVisuals(giroDrone, scene.time.now);
  });
}

function updateGiroDroneVisuals(giroDrone, time = 0) {
  updateGiroDroneCoreEnergy(giroDrone, time);
  updateGiroDroneSatellite(giroDrone, time);
}

function updateGiroDroneCoreEnergy(giroDrone, time = 0) {
  const energy = giroDrone.getData('coreEnergy');
  if (!energy || energy.active === false) return;
  energy.clear();
  if (giroDrone.getData('spikeState') !== 'expanded') return;
  drawGiroDroneRedEnergy(energy, giroDrone.x, giroDrone.y, time, GIRODRONE_DAMAGE_HALO_RADIUS, GIRODRONE_CORE_ENERGY_PARTICLE_COUNT);
}

function updateGiroDroneSatellite(giroDrone, time = 0) {
  const satellite = giroDrone.getData('orbitSatellite');
  if (!satellite || satellite.active === false) return;

  const energy = giroDrone.getData('orbitEnergy');
  const disabled = giroDrone.getData('spikeState') === 'disabled';
  const angle = giroDrone.getData('orbitAngle') || 0;
  const radius = giroDrone.getData('orbitRadius') || GIRODRONE_ORBIT_RADIUS;
  giroDrone.setAngle(0);
  satellite
    .setTexture(disabled ? 'giroDroneDisabled' : 'giroDroneSatelliteRed')
    .setAlpha(1)
    .setScale(GIRODRONE_SCALE)
    .setAngle(0)
    .setPosition(
      giroDrone.x + Math.cos(angle) * radius,
      giroDrone.y + Math.sin(angle) * radius
    );

  if (!energy || energy.active === false) return;
  energy.clear();
  if (disabled) return;
  drawGiroDroneRedEnergy(energy, satellite.x, satellite.y, time, GIRODRONE_DAMAGE_HALO_RADIUS, GIRODRONE_ENERGY_PARTICLE_COUNT);
}

function drawGiroDroneRedEnergy(graphics, x, y, time = 0, haloRadius = GIRODRONE_DAMAGE_HALO_RADIUS, particleCount = GIRODRONE_ENERGY_PARTICLE_COUNT) {
  const pulse = (Math.sin(time * 0.006) + 1) / 2;
  graphics.fillStyle(0xff3045, 0.07 + pulse * 0.05);
  graphics.fillCircle(x, y, haloRadius + pulse * 3);
  graphics.lineStyle(1.5, 0xff3045, 0.18 + pulse * 0.16);
  graphics.strokeCircle(x, y, haloRadius - 3 + pulse * 2);

  for (let i = 0; i < particleCount; i += 1) {
    const phase = time * 0.0026 + i * ((Math.PI * 2) / particleCount);
    const orbit = haloRadius - 4 + ((i % 3) * 3) + Math.sin(time * 0.004 + i) * 2;
    const particleX = x + Math.cos(phase) * orbit;
    const particleY = y + Math.sin(phase * 1.17) * orbit;
    const alpha = 0.42 + 0.26 * Math.sin(time * 0.005 + i);
    graphics.fillStyle(i % 3 === 0 ? 0xffc1c8 : 0xff3045, Phaser.Math.Clamp(alpha, 0.18, 0.72));
    graphics.fillCircle(particleX, particleY, i % 3 === 0 ? 2.2 : 1.5);
  }
}

function applyGiroDroneCoreState(giroDrone, stateName, scene) {
  giroDrone.setData('spikeState', stateName);
  if (stateName === 'warningGreen') {
    giroDrone.setTexture('giroDroneCoreOrange');
  } else if (stateName === 'warningRed') {
    giroDrone.setTexture('giroDroneCoreRedWarning');
  } else if (stateName === 'expanded') {
    giroDrone.setTexture('giroDroneCoreRed');
  } else if (stateName === 'disabled') {
    giroDrone.setTexture('giroDroneDisabled');
  } else {
    giroDrone.setTexture('giroDroneCoreGreen');
  }
  giroDrone.setScale(GIRODRONE_SCALE);
  giroDrone.setData('collisionRadius', GIRODRONE_CORE_RADIUS);
  setFallingObjectBody(giroDrone, 'giroDrone');
  if (giroDrone.body && scene) {
    giroDrone.body.setVelocityX(0);
    giroDrone.body.setVelocityY(getFallingVelocity('giroDrone', scene, giroDrone));
  }
}

function isGiroDroneGreenState(stateName) {
  return stateName === 'folded';
}

function isGiroDroneOrangeState(stateName) {
  return stateName === 'warningGreen';
}

function isGiroDroneRedState(stateName) {
  return stateName === 'warningRed' || stateName === 'expanded';
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
  const shouldReward = !drone.getData('disableRewardGranted');
  drone.setData('disableRewardGranted', true);
  applySpikeDroneState(drone, 'disabled', scene);
  drone.setData('nextSpikeStateAt', undefined);
  drone.setData('pausedSpikeRemaining', undefined);
  drone.setAngularVelocity(0);
  playSpikeDroneDisableSound(scene);
  if (shouldReward) {
    awardEnemyDefeatScore(scene, SPIKE_DRONE_DISABLE_SCORE, drone.x, drone.y, '#ffd84d');
  }
}

function disableGiroDrone(scene, giroDrone) {
  const shouldReward = !giroDrone.getData('disableRewardGranted');
  giroDrone.setData('disableRewardGranted', true);
  applyGiroDroneCoreState(giroDrone, 'disabled', scene);
  giroDrone.setData('collisionRadius', GIRODRONE_CORE_RADIUS);
  giroDrone.setData('nextSpikeStateAt', undefined);
  giroDrone.setData('pausedSpikeRemaining', undefined);
  giroDrone.setAngularVelocity(0);
  updateGiroDroneVisuals(giroDrone, scene.time.now);
  playSpikeDroneDisableSound(scene);
  if (shouldReward) {
    awardEnemyDefeatScore(scene, GIRODRONE_DISABLE_SCORE, giroDrone.x, giroDrone.y, '#ffd84d');
  }
}

function isSpikeDroneGreenState(stateName) {
  return stateName === 'folded';
}

function pauseSpikeDrones(scene) {
  if (!scene.balls) return;
  scene.balls.getChildren().forEach((drone) => {
    if (!drone.active || (drone.getData('kind') !== 'spikeDrone' && drone.getData('kind') !== 'giroDrone')) return;
    const nextStateAt = drone.getData('nextSpikeStateAt');
    if (nextStateAt === undefined) return;
    drone.setData('pausedSpikeRemaining', Math.max(0, nextStateAt - scene.time.now));
  });
}

function resumeSpikeDrones(scene) {
  if (!scene.balls) return;
  scene.balls.getChildren().forEach((drone) => {
    if (!drone.active || (drone.getData('kind') !== 'spikeDrone' && drone.getData('kind') !== 'giroDrone')) return;
    const remaining = drone.getData('pausedSpikeRemaining');
    if (remaining === undefined) return;
    drone.setData('nextSpikeStateAt', scene.time.now + remaining);
    drone.setData('pausedSpikeRemaining', undefined);
  });
}

function setBallEnergyColor(ball, isPurple) {
  ball.clearTint();
  const color = normalizeEnergyOrbColor(isPurple);
  const texture = color === 'pink' ? 'pinkBall' : color === 'purple' ? 'purpleBall' : 'goldBall';
  ball.setTexture(texture);
  ball.setData('energyColor', color);
  ball.setData('isPurpleEnergy', color !== 'gold');
  ball.setData('isPinkEnergy', color === 'pink');
}

function setBallEnergyColorData(ball, color) {
  const normalizedColor = normalizeEnergyOrbColor(color);
  ball.setData('energyColor', normalizedColor);
  ball.setData('isPurpleEnergy', normalizedColor !== 'gold');
  ball.setData('isPinkEnergy', normalizedColor === 'pink');
}

function normalizeEnergyOrbColor(color) {
  if (color === 'pink' || color === 'purple' || color === 'gold') return color;
  return color ? 'purple' : 'gold';
}

function getEnergyOrbColor(orb) {
  if (!orb || !orb.getData) return 'gold';
  return normalizeEnergyOrbColor(orb.getData('energyColor') || (orb.getData('isPurpleEnergy') ? 'purple' : 'gold'));
}

function setFallingObjectBody(object, kind) {
  if (kind === 'replicator') {
    object.body.setSize(REPLICATOR_HITBOX_WIDTH, REPLICATOR_HITBOX_HEIGHT, true);
    return;
  }

  if (kind === 'redNeedle') {
    object.body.setSize(RED_NEEDLE_WIDTH - 12, RED_NEEDLE_HEIGHT - 6, true);
    return;
  }

  if (kind === 'redNeedleLaser') {
    object.body.setSize(RED_NEEDLE_LASER_WIDTH, RED_NEEDLE_LASER_HEIGHT, true);
    return;
  }

  if (kind === 'damageBooster') {
    object.body.setSize(RED_ENEMY_HITBOX_WIDTH, RED_ENEMY_HITBOX_HEIGHT, true);
    return;
  }

  if (kind === 'scissor') {
    object.body.setSize(SCISSOR_HITBOX_WIDTH, SCISSOR_HITBOX_HEIGHT, true);
    return;
  }

  if (isScissorHalfKind(kind)) {
    object.body.setSize(SCISSOR_HALF_HITBOX_WIDTH, SCISSOR_HALF_HITBOX_HEIGHT, true);
    return;
  }

  if (kind === 'spikeDrone') {
    const radius = object.getData('collisionRadius') || SPIKE_DRONE_FOLDED_RADIUS;
    const offset = SPIKE_DRONE_TEXTURE_SIZE / 2 - radius;
    object.body.setCircle(radius, offset, offset);
    return;
  }

  if (kind === 'giroDrone') {
    const radius = GIRODRONE_ORBIT_RADIUS + GIRODRONE_SATELLITE_RADIUS;
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

  if (kind === 'crystallizedOrb') {
    object.body.setCircle(CRYSTALLIZED_ORB_RADIUS, 2, 2);
    return;
  }

  object.body.setCircle(isEnergyOrbSpeedKind(kind) ? 16 : 15, isEnergyOrbSpeedKind(kind) ? 6 : 3, isEnergyOrbSpeedKind(kind) ? 6 : 3);
}

function getNextSpawnKinds(scene) {
  // Durante Marea de Plasma no debe caer ningun orbe/booster.
  // Las barras de plasma se gestionan con su propio scheduler.
  if (scene.activePlasmaWave && scene.activePlasmaWave.isSpawningPlasma) return [];

  if (scene.activeRedWave && scene.activeRedWave.isSpawningDamageBoosters) {
    return [scene.activeRedWave.spawnKind || 'damageBooster'];
  }
  if (scene.activeDroneWave && scene.activeDroneWave.isSpawningDrones) return [scene.activeDroneWave.spawnKind || 'spikeDrone'];
  if (scene.activeBossWave && scene.activeBossWave.isSpawningEnemies) return ['damageBooster'];
  if (scene.activeAsteroidWave && scene.activeAsteroidWave.isSpawningAsteroids) {
    return [Math.random() < ASTEROID_WAVE_BIG_ASTEROID_CHANCE ? 'bigAsteroid' : 'asteroid'];
  }

  if (scene.activeBossWave && scene.activeBossWave.isTravelEncounter) {
    const boosterKind = getNextBoosterKind(scene);
    return boosterKind ? [boosterKind] : [];
  }

  const kinds = [];
  const supplementalKind = getNextSupplementalSpawnKind(scene);
  if (supplementalKind) kinds.push(supplementalKind);
  kinds.push(getNextEnergyOrbKind(scene));
  return kinds;
}

function getNextEnergyOrbKind(scene) {
  if (scene.crystallizedOrbSpawnsUnlocked && Math.random() < CRYSTALLIZED_ORB_CHANCE) {
    return 'crystallizedOrb';
  }
  if (isEnergyPurifierActive()) return 'ball';
  return Math.random() < CONTAMINATED_ORB_CHANCE ? 'contaminatedOrb' : 'ball';
}

function getNextSupplementalSpawnKind(scene) {
  const candidates = [
    { kind: getNextTravelThreatKind(scene), weight: TRAVEL_THREAT_POOL_WEIGHT },
    { kind: getNextPlasmaKind(scene), weight: TRAVEL_HAZARD_POOL_WEIGHT },
    { kind: getNextAsteroidKind(scene), weight: TRAVEL_HAZARD_POOL_WEIGHT },
    { kind: getNextBoosterKind(scene), weight: TRAVEL_BOOSTER_POOL_WEIGHT },
  ].filter((candidate) => candidate.kind);

  return chooseWeightedSpawnCandidate(candidates);
}

function getNextTravelThreatKind(scene) {
  const isLevelBossActive = scene.activeBossWave && !scene.activeBossWave.isTravelEncounter;
  if ((!scene.obreraSpawnsUnlocked && !scene.scissorSpawnsUnlocked && !scene.droneSpawnsUnlocked && !scene.giroDroneSpawnsUnlocked && !scene.redNeedleSpawnsUnlocked && !scene.replicatorSpawnsUnlocked) || scene.activeRedWave || scene.activeDroneWave || scene.activeAsteroidWave || scene.activePlasmaWave || isLevelBossActive) return null;

  return chooseRolledSpawnOption([
    { kind: 'replicator', chance: !isSentinelActive(scene) && scene.replicatorSpawnsUnlocked ? REPLICATOR_SPAWN_CHANCE : 0 },
    { kind: 'redNeedle', chance: scene.redNeedleSpawnsUnlocked && !hasActiveRedNeedle(scene) ? RED_NEEDLE_SPAWN_CHANCE : 0 },
    { kind: 'giroDrone', chance: scene.giroDroneSpawnsUnlocked ? GIRODRONE_SPAWN_CHANCE : 0 },
    { kind: 'spikeDrone', chance: scene.droneSpawnsUnlocked ? SPIKE_DRONE_SPAWN_CHANCE : 0 },
    { kind: 'scissor', chance: scene.scissorSpawnsUnlocked ? SCISSOR_SPAWN_CHANCE : 0 },
    { kind: 'damageBooster', chance: scene.obreraSpawnsUnlocked ? OBRERA_SPAWN_CHANCE : 0 },
  ]);
}

function isSentinelActive(scene) {
  return Boolean(scene.activeBossWave && scene.activeBossWave.kind === 'boss');
}

function shouldStartTravelSentinel(scene) {
  if (!scene.travelSentinelUnlocked || scene.activeBossWave || scene.activeRedWave || scene.activeDroneWave || scene.activeAsteroidWave || scene.activePlasmaWave) return false;
  if (hasPendingBossWave(scene) || getActiveTimedBooster(scene) || hasFallingScoreBooster(scene) || hasActivePlasmaBars(scene)) return false;
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
  return chooseRolledSpawnOption([
    { kind: 'scoreBooster', chance: timedBoosterActive || isSentinelActive(scene) || scoreBoosterLevel <= 0 ? 0 : getBoosterChanceForLevel(scoreBoosterLevel) },
    { kind: 'shieldBooster', chance: timedBoosterActive || shieldBoosterLevel <= 0 ? 0 : getBoosterChanceForLevel(shieldBoosterLevel) },
    { kind: 'lifeBooster', chance: canDropLifeBooster() ? getLifeBoosterChance() : 0 },
  ]);
}

function chooseRolledSpawnOption(options) {
  const candidates = options
    .filter((option) => option.chance > 0 && Math.random() < option.chance)
    .map((option) => ({ kind: option.kind, weight: option.chance }));

  return chooseWeightedSpawnCandidate(candidates);
}

function chooseWeightedSpawnCandidate(candidates) {
  const totalWeight = candidates.reduce((sum, candidate) => sum + candidate.weight, 0);
  if (totalWeight <= 0) return null;

  let roll = Math.random() * totalWeight;
  for (const candidate of candidates) {
    if (roll < candidate.weight) return candidate.kind;
    roll -= candidate.weight;
  }

  return candidates[candidates.length - 1].kind;
}

function hasFallingBooster(scene) {
  return scene.balls
    .getChildren()
    .some((ball) => ball.active && isHelpfulBoosterKind(ball.getData('kind')));
}

function hasFallingScoreBooster(scene) {
  return scene.balls
    .getChildren()
    .some((ball) => ball.active && ball.getData('kind') === 'scoreBooster');
}

function hasFallingAsteroid(scene) {
  return scene.balls
    .getChildren()
    .some((ball) => ball.active && isAsteroidKind(ball.getData('kind')));
}

function countActiveHostileFallingObjects(scene) {
  return scene.balls
    .getChildren()
    .filter((ball) => ball.active && isHostileContactKind(ball.getData('kind')))
    .length;
}

function hasActiveRedNeedle(scene) {
  return scene.balls
    .getChildren()
    .some((ball) => ball.active && ball.getData('kind') === 'redNeedle');
}

function getTextureForKind(kind) {
  if (kind === 'replicator') return 'ship';
  if (kind === 'redNeedle') return 'redNeedleShip';
  if (kind === 'redNeedleLaser') return 'redNeedleLaser';
  if (kind === 'bigAsteroid') return 'bigAsteroid';
  if (isAsteroidKind(kind)) return 'asteroid';
  if (kind === 'damageBooster') return 'enemyShipSmall';
  if (kind === 'scissor') return 'scissorShip';
  if (kind === 'scissorLeft') return 'scissorShipLeft';
  if (kind === 'scissorRight') return 'scissorShipRight';
  if (kind === 'spikeDrone') return 'spikeDrone';
  if (kind === 'giroDrone') return 'spikeDrone';
  if (kind === 'lifeBooster') return 'lifeBooster';
  if (kind === 'scoreBooster') return 'scoreBooster';
  if (kind === 'shieldBooster') return 'shieldBooster';
  if (kind === 'contaminatedOrb') return 'contaminatedBall';
  if (kind === 'crystallizedOrb') return 'crystallizedOrb';
  return 'goldBall';
}

function isBoosterKind(kind) {
  return kind === 'damageBooster' || kind === 'scissor' || isScissorHalfKind(kind) || kind === 'lifeBooster' || kind === 'scoreBooster' || kind === 'shieldBooster';
}

function isHelpfulBoosterKind(kind) {
  return kind === 'lifeBooster' || kind === 'scoreBooster' || kind === 'shieldBooster';
}

function isCollectibleBallKind(kind) {
  return kind === 'ball' || kind === 'crystallizedOrb';
}

function isEnergyOrbSpeedKind(kind) {
  return kind === 'ball' || kind === 'contaminatedOrb' || kind === 'crystallizedOrb';
}

function isAsteroidKind(kind) {
  return kind === 'asteroid' || kind === 'bigAsteroid';
}

function isScissorHalfKind(kind) {
  return kind === 'scissorLeft' || kind === 'scissorRight';
}

function isScissorKind(kind) {
  return kind === 'scissor' || isScissorHalfKind(kind);
}

function isShieldBlockedKind(kind) {
  return kind === 'damageBooster' || isScissorKind(kind) || kind === 'replicator' || kind === 'spikeDrone' || kind === 'giroDrone' || kind === 'redNeedle' || kind === 'redNeedleLaser' || kind === 'crystallizedOrb' || isAsteroidKind(kind);
}

function isHostileContactKind(kind) {
  return kind === 'contaminatedOrb' || isShieldBlockedKind(kind);
}

function findSpawnX(scene) {
  const min = 40;
  const max = Math.max(min, getGameWidth(scene) - 40);
  return Phaser.Math.Between(min, max);
}

function findSpawnXAwayFrom(scene, objects, minSpacing) {
  const min = 40;
  const max = Math.max(min, getGameWidth(scene) - 40);
  const activeObjects = objects.filter((object) => object && object.active);

  if (!activeObjects.length) return Phaser.Math.Between(min, max);

  for (let attempt = 0; attempt < 10; attempt += 1) {
    const x = Phaser.Math.Between(min, max);
    if (activeObjects.every((object) => Math.abs(object.x - x) >= minSpacing)) return x;
  }

  const candidates = [min, Math.round((min + max) / 2), max];
  return candidates.reduce((bestX, x) => (
    getClosestSpawnDistance(x, activeObjects) > getClosestSpawnDistance(bestX, activeObjects) ? x : bestX
  ), candidates[0]);
}

function getClosestSpawnDistance(x, objects) {
  return objects.reduce((closest, object) => Math.min(closest, Math.abs(object.x - x)), Infinity);
}

function findBoosterSpawnX(scene) {
  const min = 28;
  const max = Math.max(min, getGameWidth(scene) - 28);
  return Phaser.Math.Between(min, max);
}

function findGiroDroneSpawnX(scene) {
  const margin = Math.min(GIRODRONE_ORBIT_RADIUS + GIRODRONE_SATELLITE_RADIUS + 10, getGameWidth(scene) / 2 - 20);
  const min = margin;
  const max = Math.max(min, getGameWidth(scene) - margin);
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
  const margin = 34;
  const min = margin;
  const max = Math.max(min, getGameWidth(scene) - margin);
  const center = getGameWidth(scene) / 2;
  const recentEnemies = scene.balls
    .getChildren()
    .filter((ball) => (
      ball.active &&
      (ball.getData('kind') === 'damageBooster' || ball.getData('kind') === 'scissor') &&
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
  currentBoosterGravity = getBoosterGravityForCurrentSpeed();

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

function getBoosterGravityForCurrentSpeed() {
  return Math.min(MAX_BOOSTER_GRAVITY, Math.round(currentGravity * BOOSTER_GRAVITY_RATIO));
}

function resetGameSpeed(scene) {
  currentGravity = BASE_GRAVITY;
  currentBoosterGravity = getBoosterGravityForCurrentSpeed();
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
  if (currentHud.level) {
    currentHud.level.textContent = isBossOnlyGameMode()
      ? Math.max(1, (scene && scene.bossOnlyBossNumber) || 1)
      : playerLevel;
  }
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
  if (kind === 'replicator') {
    if (scene.activeRedWave && scene.activeRedWave.bossKind === 'replicators') {
      return getFallingVelocity('damageBooster', scene);
    }
    return Math.round(currentGravity * TRAVEL_REPLICATOR_GRAVITY_RATIO);
  }

  if (kind === 'spikeDrone' || kind === 'giroDrone') {
    return Math.round(currentBoosterGravity * SPIKE_DRONE_GRAVITY_RATIO);
  }

  if ((kind === 'damageBooster' || isScissorKind(kind)) && scene.activeRedWave) {
    return Math.round(currentGravity * RED_WAVE_ENEMY_GRAVITY_RATIO);
  }

  if (isAsteroidKind(kind)) {
    const normalRatio = scene.activeAsteroidWave ? ASTEROID_WAVE_GRAVITY_RATIO : ASTEROID_GRAVITY_RATIO;
    const ratio = kind === 'bigAsteroid' ? BIG_ASTEROID_GRAVITY_RATIO : normalRatio;
    return Math.round(currentBoosterGravity * ratio);
  }

  return isEnergyOrbSpeedKind(kind) ? currentGravity : currentBoosterGravity;
}

function getHorizontalVelocity(kind, scene, object = null) {
  if (kind === 'redNeedle') {
    return object && object.getData('horizontalVelocity') ? object.getData('horizontalVelocity') : RED_NEEDLE_SPEED;
  }

  if (kind === 'redNeedleLaser') return 0;

  if (isScissorHalfKind(kind)) {
    return object && object.getData('horizontalVelocity') ? object.getData('horizontalVelocity') : (kind === 'scissorLeft' ? -SCISSOR_HALF_HORIZONTAL_SPEED : SCISSOR_HALF_HORIZONTAL_SPEED);
  }

  if (!isAsteroidKind(kind)) return 0;

  const storedDirection = object && object.getData('horizontalDirection');
  const storedVelocity = object && object.getData('horizontalVelocity');
  const direction = storedDirection || (storedVelocity ? Math.sign(storedVelocity) : (Math.random() < 0.5 ? -1 : 1));
  const normalRatio = scene.activeAsteroidWave ? ASTEROID_WAVE_HORIZONTAL_SPEED_RATIO : ASTEROID_HORIZONTAL_SPEED_RATIO;
  const ratio = kind === 'bigAsteroid' ? BIG_ASTEROID_HORIZONTAL_SPEED_RATIO : normalRatio;
  const velocity = Math.round(currentBoosterGravity * ratio) * direction;
  if (object) {
    object.setData('horizontalDirection', direction);
    object.setData('horizontalVelocity', velocity);
  }
  return velocity;
}

function getCurrentSpawnDelay(scene) {
  if (scene.activePlasmaWave) return PLASMA_WAVE_SPAWN_DELAY;
  if (scene.activeDroneWave) return getWaveSpawnDelay(scene, scene.activeDroneWave.spawnDelay || DRONE_WAVE_SPAWN_DELAY, scene.activeDroneWave.spawnKind || 'spikeDrone');
  if (scene.activeAsteroidWave) return getWaveSpawnDelay(scene, ASTEROID_WAVE_SPAWN_DELAY, 'asteroid');
  if (scene.activeRedWave) {
    const spawnKind = scene.activeRedWave.spawnKind || 'damageBooster';
    if (scene.activeRedWave.bossKind === 'replicators') return getWaveSpawnDelay(scene, REPLICATOR_WAVE_SPAWN_DELAY, spawnKind);
    if (scene.activeRedWave.bossKind === 'crystallized') return getWaveSpawnDelay(scene, CRYSTALLIZED_WAVE_SPAWN_DELAY, spawnKind);
    if (scene.activeRedWave.bossKind === 'scissors') return getWaveSpawnDelay(scene, SCISSOR_WAVE_SPAWN_DELAY, spawnKind);
    return getWaveSpawnDelay(scene, RED_WAVE_SPAWN_DELAY, spawnKind);
  }
  return currentSpawnDelay;
}

function getWaveSpawnDelay(scene, baseDelay, kind) {
  const velocity = Math.max(1, Math.abs(getFallingVelocity(kind, scene)));
  const spacingDelay = Math.ceil((WAVE_MIN_VERTICAL_SPAWN_SPACING / velocity) * 1000);
  return Math.max(baseDelay, spacingDelay);
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
  const energyOrbColor = getEnergyOrbColor(ball);
  const isPurpleEnergy = energyOrbColor !== 'gold';
  const isPurifiedContaminatedOrb = kind === 'contaminatedOrb' && isEnergyPurifierActive();
  let hitFeedbackShown = false;
  let crystallizedOrbCollected = false;
  if (kind === 'spikeDrone') {
    const spikeState = ball.getData('spikeState');
    if (!isShieldActive(scene) && isSpikeDroneGreenState(spikeState)) {
      disableSpikeDrone(scene, ball);
      return;
    }
    if (spikeState !== 'expanded' && !isShieldActive(scene)) return;
  }
  if (kind === 'giroDrone') {
    const giroState = ball.getData('spikeState');
    if (giroState === 'disabled') return;
    if (!isShieldActive(scene) && isGiroDroneCoreOverlappingShip(scene, ball)) {
      if (isGiroDroneGreenState(giroState)) {
        disableGiroDrone(scene, ball);
        return;
      }
      if (isGiroDroneOrangeState(giroState)) {
        return;
      }
    }
  }

  if (kind === 'crystallizedOrb') {
    if (isCrystallizedOrbDangerousContact(scene, ball)) {
      handleHostileShipContact(scene, ball, x, y, kind, energyOrbColor);
      hitFeedbackShown = true;
    } else {
      collectEnergyOrb(scene, ball, x, y, energyOrbColor);
      crystallizedOrbCollected = true;
    }
  } else if (isPurifiedContaminatedOrb) {
    ball.destroy();
    rewardEnergyOrbCatch(scene, x, y, '#ffd84d', false);
  } else if (isHostileContactKind(kind)) {
    handleHostileShipContact(scene, ball, x, y, kind, energyOrbColor);
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
    const feedbackColor = energyOrbColor === 'pink' ? ENERGY_RESONANCE_COLOR : isPurpleEnergy ? '#d7a8ff' : '#ffd84d';
    rewardEnergyOrbCatch(scene, x, y, feedbackColor);
  }

  if (state !== 'playing') return;

  if (!hitFeedbackShown) {
    if (isHostileContactKind(kind) && kind !== 'crystallizedOrb' && !isPurifiedContaminatedOrb) {
      playBadSound(scene);
    } else if (isBoosterKind(kind)) {
      playBoosterSound(scene);
    } else {
      playCatchSound(scene);
    }
  }
  if (!hitFeedbackShown) {
    showAbsorbEffect(scene, x, y, isPurifiedContaminatedOrb ? 'ball' : kind, energyOrbColor);
  }

  if (kind === 'ball' || crystallizedOrbCollected || isPurifiedContaminatedOrb) {
    maybeOpenUpgradeChoice(scene);
  }
}

function isCrystallizedOrbDangerousContact(scene, orb) {
  if (isCrystallizedOrbSafeTopApproach(scene, orb)) return false;

  const crystalPolygon = CRYSTALLIZED_ORB_CRYSTAL_SHAPE.map(([offsetX, offsetY]) => ({
    x: orb.x + offsetX,
    y: orb.y + offsetY,
  }));
  return arePolygonsOverlapping(getShipHitboxPolygon(scene), crystalPolygon);
}

function isCrystallizedOrbSafeTopApproach(scene, orb) {
  if (scene.ship.y <= orb.y) return true;

  const previousPosition = scene.previousShipPosition;
  if (!previousPosition) return false;
  const now = scene.time ? scene.time.now : previousPosition.at;
  if (now - previousPosition.at > CRYSTALLIZED_ORB_SAFE_APPROACH_MEMORY) return false;

  const previousOrbY = orb.body && orb.body.prev
    ? orb.body.prev.y + orb.body.halfHeight
    : orb.y;
  return previousPosition.y <= previousOrbY;
}

function arePolygonsOverlapping(firstPolygon, secondPolygon) {
  if (firstPolygon.some((point) => isPointInPolygon(point.x, point.y, secondPolygon))) return true;
  if (secondPolygon.some((point) => isPointInPolygon(point.x, point.y, firstPolygon))) return true;

  return firstPolygon.some((firstPoint, firstIndex) => {
    const firstNextPoint = firstPolygon[(firstIndex + 1) % firstPolygon.length];
    return secondPolygon.some((secondPoint, secondIndex) => {
      const secondNextPoint = secondPolygon[(secondIndex + 1) % secondPolygon.length];
      return areLineSegmentsIntersecting(firstPoint, firstNextPoint, secondPoint, secondNextPoint);
    });
  });
}

function areLineSegmentsIntersecting(firstStart, firstEnd, secondStart, secondEnd) {
  const firstDirectionX = firstEnd.x - firstStart.x;
  const firstDirectionY = firstEnd.y - firstStart.y;
  const secondDirectionX = secondEnd.x - secondStart.x;
  const secondDirectionY = secondEnd.y - secondStart.y;
  const denominator = firstDirectionX * secondDirectionY - firstDirectionY * secondDirectionX;
  if (denominator === 0) return false;

  const startDifferenceX = secondStart.x - firstStart.x;
  const startDifferenceY = secondStart.y - firstStart.y;
  const firstDistance = (startDifferenceX * secondDirectionY - startDifferenceY * secondDirectionX) / denominator;
  const secondDistance = (startDifferenceX * firstDirectionY - startDifferenceY * firstDirectionX) / denominator;
  return firstDistance >= 0 && firstDistance <= 1 && secondDistance >= 0 && secondDistance <= 1;
}

function collectEnergyOrb(scene, orb, x, y, energyOrbColor) {
  orb.destroy();
  const isPurpleEnergy = energyOrbColor !== 'gold';
  const feedbackColor = energyOrbColor === 'pink' ? ENERGY_RESONANCE_COLOR : isPurpleEnergy ? '#d7a8ff' : '#ffd84d';
  rewardEnergyOrbCatch(scene, x, y, feedbackColor);
}

function rewardEnergyOrbCatch(scene, x, y, feedbackColor, registerBoosterCatch = true) {
  if (isBossOnlyGameMode()) return;
  const points = getEnergyBallValue() * scoreMultiplier;
  addScore(scene, points, true, { x, y, color: feedbackColor });
  ballsCaught += 1;
  increaseEnergyStreak(scene);
  if (registerBoosterCatch) registerScoreBoosterOrbCatch(scene);
}

function handleHostileShipContact(scene, hostile, x, y, kind, energyOrbColor = 'gold') {
  const isDangerousEnergyOrb = kind === 'contaminatedOrb' || kind === 'crystallizedOrb';
  if (!isShieldActive(scene) && isShipDamageInvulnerable(scene)) {
    if (isDangerousEnergyOrb && hostile && hostile.active) hostile.destroy();
    return;
  }
  if (isShieldActive(scene) && hostile && hostile.getData('hasBeenShieldBlocked')) return;

  const absorbKind = isDangerousEnergyOrb ? 'ball' : kind;
  const absorbEnergyColor = kind === 'contaminatedOrb' ? 'gold' : energyOrbColor;
  showAbsorbEffect(scene, x, y, absorbKind, absorbEnergyColor);
  if (!isShieldActive(scene) || kind === 'contaminatedOrb') {
    takeDirectDamage(scene);
    if (isDangerousEnergyOrb && hostile && hostile.active) hostile.destroy();
    return;
  }

  if (hostile) hostile.setData('hasBeenShieldBlocked', true);
  playShieldBlockSound(scene);
  flashPlayerShip(scene);
  awardEnemyDefeatScore(scene, SHIELD_BLOCK_SCORE, x, y, '#4da3ff');
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
  ].forEach((audioKey) => {
    const audio = scene[audioKey];
    if (audio) audio.volume = getSoundEffectVolume(audio.baseVolume || 1);
  });

  ['spikeDroneAudios', 'spikeDroneDisableAudios', 'redNeedleShotAudios'].forEach((collectionKey) => {
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
