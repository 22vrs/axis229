// Constantes globales del juego: medidas, duraciones, rutas de assets, colores y tablas de balance.
// Mantener estos valores centralizados evita numeros magicos repartidos por la logica.

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
const REGISTER_PICKUP_SOUND_PATH = 'assets/register-pickup.mp3';
const REGISTER_SPAWN_SOUND_PATH = 'assets/register-spawn.mp3';
const REGISTER_COLLISION_RADIUS = 16;
const REGISTER_REWARD_SPAWN_DELAY = 1000;
const REGISTER_REWARD_SPAWN_STAGGER = 500;
const REGISTER_MIN_SPAWN_DISTANCE_FROM_SHIP = 150;
const REGISTER_MIN_SPAWN_DISTANCE_BETWEEN_REGISTERS = 74;
const BOSS_REVIVE_REGISTER_COST = 10;
const MENU_MUSIC_PATH = 'assets/menu-music.mp3';
const GAMEPLAY_MUSIC_PATH = 'assets/game-music.mp3';
const PURPLE_BOOSTER_MUSIC_PATH = null;
const PLAYER_SHIP_IMAGE_PATH = 'assets/images/player-ship.svg';
const REGISTER_IMAGE_PATH = 'assets/images/register.svg?v=registers-8';
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
const INITIAL_SPAWN_DELAY = 760;
const MIN_SPAWN_DELAY = 760;
const PAIRED_SPAWN_MIN_SPACING = 96;
const BASE_GRAVITY = 220;
const MAX_SPEED_MULTIPLIER = 1.7;
const DISPLAY_MAX_SPEED_MULTIPLIER = 2;
const MAX_BALL_GRAVITY = BASE_GRAVITY * MAX_SPEED_MULTIPLIER;
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
const TRAVEL_REPLICATOR_GRAVITY_RATIO = 0.45;
const WAVE_REPLICATOR_GRAVITY_RATIO = 0.6;
const REPLICATOR_SCALE = SHIP_SCALE * 0.72;
const REPLICATOR_FOLLOW_DELAY_MIN = 70;
const REPLICATOR_FOLLOW_DELAY_MAX = 120;
const REPLICATOR_CHAIN_FOLLOW_DELAY = 90;
const REPLICATOR_FOLLOW_SPEED = 160;
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
const GIRODRONE_SCALE = 1;
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
const BOSS_LASER_TRACK_SPEED = 34;
const BOSS_HORIZONTAL_LASER_TRACK_SPEED = 28;
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
const VITAL_EXPANDER_LIFE_BONUS = 1;
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
