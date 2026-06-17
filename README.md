# Horizonte Infinito

Juego arcade vertical hecho con HTML, CSS, JavaScript y Phaser 3. Controlas una nave, recoges orbes de energia, encadenas rachas, eliges mejoras y sobrevives a oleadas de amenazas cada vez mas agresivas.

Ultima revision del README: 2026-06-17.

## Estado actual

- Proyecto web estatico: no requiere instalacion, bundler ni compilacion.
- Resolucion base del juego: `390 x 700`.
- Motor: Phaser `3.60.0` cargado desde CDN.
- Ranking online: Supabase JS v2 cargado desde CDN.
- Audio e imagenes locales: carpeta `assets/`.
- El juego puede abrirse directamente con `index.html`, aunque se recomienda usar un servidor local.

## Como ejecutar

Desde la carpeta del proyecto:

```powershell
python -m http.server 8000
```

Despues abre:

```text
http://localhost:8000
```

Tambien puedes abrir `index.html` directamente en el navegador. Para jugar con ranking y librerias externas hace falta conexion a internet porque Phaser, Supabase y las fuentes de Google se cargan desde CDN.

## Controles

- Arrastra la nave para moverla libremente en X-Y dentro de la pantalla.
- Recoge orbes amarillos para sumar puntos y llenar la barra de progreso.
- Evita enemigos, escisoras, asteroides, lasers, drones, girodrones, barras de plasma, orbes contaminados y la costra inferior de los orbes cristalizados.
- Usa el boton de pausa del HUD para volver, rendirte o abrir opciones.
- En opciones puedes activar/desactivar efectos y musica y ajustar sus volumenes por separado.
- Las preferencias de audio se guardan en `localStorage`.

Claves usadas en `localStorage`:

| Clave | Uso |
| --- | --- |
| `jueguito_sfx_enabled` | Efectos activados o desactivados. |
| `jueguito_music_enabled` | Musica activada o desactivada. |
| `jueguito_sfx_volume` | Volumen de efectos, de `0` a `1`. |
| `jueguito_music_volume` | Volumen de musica, de `0` a `1`. |

## Modos de juego

| Modo | Boton | Descripcion | Ranking |
| --- | --- | --- | --- |
| Normal | `JUGAR` | Partida con progresion, mejoras, jefes cada 3 niveles y ranking. | Si |
| Infinito | `MODO INFINITO` | Partida libre con amenazas desbloqueadas y jefes aleatorios. | No |
| Solo Jefes | `SOLO JEFES` | Modo de prueba que encadena los jefes de historia sin viajes normales, niveles ni mejoras. | No |

En modo infinito, el primer jefe es `Replicadores`; despues los jefes se eligen aleatoriamente entre la rotacion disponible, incluyendo `Enjambre de Escisoras`.

En Solo Jefes, `Enjambre de Escisoras` es el primer jefe. Despues continua la rotacion con `Girodrones`, `Centinela`, `Tormenta Cristalizada` y el resto de jefes; tras `Aguja Roja`, la sucesion vuelve a empezar.
La partida comienza pausada sobre el control azul; el primer dialogo de jefe solo se activa despues de pulsarlo.

## Progresion

- La partida empieza con `3` vidas.
- El primer nivel requiere `10` puntos de progreso; despues el requisito crece con `getLevelRequirement(level)`.
- Cada subida de nivel permite elegir entre `2` mejoras si quedan mejoras disponibles.
- Las mejoras base pueden subir hasta nivel `5`.
- Algunas mejoras avanzadas tienen un solo nivel y se desbloquean al maximizar su mejora base.
- Hay un jefe cada `3` niveles.
- La gravedad base de los orbes es `220`.
- La velocidad escala hasta `2.00x`.
- El intervalo de aparicion empieza en `1500 ms` y baja hasta `600 ms`.
- Al encadenar `50` orbes de energia sin recibir dano se concede una recompensa de racha.
- La recompensa base de racha es de `50` puntos y crece con cada bloque de `50`.
- Si puedes recibir kits de reparacion, una recompensa de racha tambien puede forzar la caida de un kit.

## Velocidad del juego

La velocidad principal depende del nivel del jugador y se recalcula al subir de nivel:

| Nivel | Multiplicador | Gravedad de orbes | Intervalo normal |
| ---: | ---: | ---: | ---: |
| 1 | `1.00x` | `220` | `1500 ms` |
| 2 | `1.50x` | `330` | `~829 ms` |
| 3+ | `2.00x` | `440` | `600 ms` |

Como funciona:

- La gravedad base es `220` y solo los orbes normales usan directamente la velocidad principal.
- El multiplicador sube de `1.00x` a `2.00x` entre los niveles `1` y `3`; desde el nivel `3` queda en el maximo.
- El intervalo de aparicion normal baja de `1500 ms` a `600 ms` usando una curva suavizada (`SPAWN_DELAY_EASING = 1.8`).
- Los boosters que caen usan el `80%` de la velocidad principal (`BOOSTER_GRAVITY_RATIO = 0.8`), por eso el HUD muestra tambien `BOOST`.
- Al cambiar la velocidad, los objetos que ya estan cayendo actualizan su velocidad para adaptarse al nuevo ritmo.
- Las oleadas y jefes pueden usar sus propios intervalos fijos, por ejemplo Enjambre de Obreras cada `400 ms`, Enjambre de Escisoras cada `650 ms`, Drones cada `680 ms`, Girodrones cada `920 ms`, Asteroides cada `760 ms` y Plasma cada `2100 ms`.
- Algunas amenazas no escalan con la velocidad principal y usan ratios o valores propios, como asteroides, drones, lasers y barras de plasma.

## Orbes

| Orbe | Condicion | Efecto |
| --- | --- | --- |
| Energia | Aparicion normal. | Suma puntos segun el valor actual del Refinador y aumenta la racha. |
| Energia morada | Durante el Catalizador de energia. | Usa el multiplicador de puntos activo. |
| Energia rosa | Durante Sincronia, si tienes Resonancia energetica. | Usa el multiplicador mejorado de Sincronia. |
| Contaminado | `20%` del pool de orbes normales si no tienes Purificador. | Hace dano y rompe la racha. |
| Cristalizado | `5%` del pool de orbes durante el viaje normal tras superar Tormenta Cristalizada. | Se recoge por la cara superior; la costra inferior hace dano. Si cae fuera de pantalla, se pierde una vida. |

El pool de orbes se resuelve por separado de amenazas, asteroides, plasma y boosters. En viaje normal cada intento periodico conserva su orbe aunque aparezca tambien un elemento suplementario; asi anadir amenazas nuevas no reduce la frecuencia base de orbes.

El Purificador de energia elimina los orbes contaminados de la rotacion normal, pero no afecta a los cristalizados.

## Mejoras

| Mejora | Niveles | Requisito | Efecto |
| --- | ---: | --- | --- |
| Kit de reparacion | `5` | Ninguno | Desbloquea kits verdes. Cada kit cura `1` vida y su probabilidad aumenta `2` puntos porcentuales por nivel. |
| Barrera protectora | `5` | Ninguno | Desbloquea escudos azules temporales. Bloquea amenazas y suma puntos al destruirlas por contacto. Su probabilidad aumenta `2` puntos porcentuales por nivel. Al nivel maximo, cada nivel superado añade `+1` a cualquier recompensa por derrotar enemigos. |
| Catalizador de energia | `5` | Ninguno | Desbloquea boosters morados temporales. Duplica los puntos obtenidos por orbes mientras esta activo. Su probabilidad aumenta `2` puntos porcentuales por nivel. |
| Refinador de energia | `5` | Ninguno | Aumenta el valor de cada orbe. Al nivel maximo suma `+1` extra por cada nivel superado. |
| Resonancia energetica | `1` | Catalizador de energia nivel `5` | Tras recoger `3` orbes con el catalizador, activa Sincronia y sube el multiplicador a `3x`. |
| Purificador de energia | `1` | Refinador de energia nivel `5` | Los orbes contaminados dejan de aparecer. |
| Ayuda de Echo | `1` | Barrera protectora nivel `5` | Echo ataca amenazas cercanas con una probabilidad del `30%`. |
| Expansor vital | `1` | Kit de reparacion nivel `5` | Aumenta la capacidad maxima en `+2` vidas y tambien cura `+2`. |

Los boosters temporales duran `10 s`.

Si queda un jefe pendiente mientras hay un booster temporal activo, los elementos normales siguen apareciendo hasta que termina el efecto. Entonces se vacia la pantalla y comienza el jefe.

## Echo

Echo es el acompanante de la nave. Esta presente desde el inicio como apoyo visual y gana utilidad jugable con la mejora `Ayuda de Echo`.

- Detecta amenazas a `128 px` de la nave.
- Puede atacar obreras, escisoras, drones de pinchos y asteroides.
- Cada amenaza valida tira una vez una probabilidad del `30%`.
- Al bloquear una amenaza concede `10` puntos, igual que la barrera protectora, mas el bono de derrotas desbloqueado por esta al nivel `5`.
- Tambien celebra las recompensas de racha antes de abrir la pantalla de mejora si corresponde.

## Boosters

Las probabilidades son por intento de aparicion. Solo puede haber un booster cayendo a la vez.

| Booster | Probabilidad | Condicion | Efecto |
| --- | ---: | --- | --- |
| Catalizador de energia | `2%` por nivel, hasta `10%` | Mejora desbloqueada y sin otro booster temporal activo. | Duplica los puntos de los orbes durante `10 s`. |
| Barrera protectora | `2%` por nivel, hasta `10%` | Mejora desbloqueada y sin otro booster temporal activo. | Activa un escudo durante `10 s`. |
| Kit de reparacion | `2%` por nivel, hasta `10%` | Mejora desbloqueada y nave por debajo del maximo de vidas. | Cura `1` vida. |

Cada booster tira su probabilidad individual dentro del pool de boosters. Si mas de uno supera la tirada en el mismo intento, se elige uno ponderando por su probabilidad.

## Pools de aparicion

Durante el viaje normal, cada intento periodico de spawn se divide en pools independientes. Esto evita que ampliar una familia de amenazas reduzca la frecuencia base de orbes.

Orden general:

1. Casos especiales. Las oleadas y jefes activos usan sus propios schedulers y pueden bloquear el spawn normal. Marea de Plasma no deja caer orbes ni boosters normales mientras esta activa.
2. Centinela viajero. Si cumple condiciones y supera su tirada, inicia el encuentro y consume el intento.
3. Pool suplementario. Amenazas viajeras, plasma, asteroides y boosters tiran por separado. Si varios pools generan candidato a la vez, se elige uno con pesos de tension.
4. Pool de orbes. Siempre se resuelve un orbe en viaje normal, aunque tambien haya salido un elemento suplementario.

Pesos del pool suplementario:

| Pool | Peso | Que controla |
| --- | ---: | --- |
| Amenazas viajeras | `1.00` | Obreras, escisoras, drones, girodrones, Aguja Roja y Replicadores. |
| Peligros de entorno | `0.90` | Plasma y asteroides; cada familia tira por separado pero comparte peso de tension. |
| Boosters | `0.72` | Catalizador, barrera y kit de reparacion. |

Estos pesos no son probabilidades directas. Primero cada pool tira sus propias probabilidades internas; el peso solo decide cual aparece cuando coinciden varios candidatos suplementarios en el mismo intento.

Tiradas internas:

- Pool de orbes: si los cristalizados estan desbloqueados, tienen una tirada del `5%`. Si no sale cristalizado, el Purificador fuerza orbe normal; sin Purificador, el contaminado tira al `20%` y si falla cae un orbe normal.
- Pool de amenazas viajeras: cada amenaza desbloqueada tira su probabilidad individual. Si pasan varias amenazas a la vez, se elige una ponderando por su propia probabilidad.
- Pool de asteroides: el asteroide tira al `10%`; si sale, tiene un `24%` de ser grande.
- Pool de plasma: la barra de plasma tira al `4%`.
- Pool de boosters: cada booster disponible tira su probabilidad individual. Si pasan varios boosters a la vez, se elige uno ponderando por su propia probabilidad. Solo puede haber un booster cayendo a la vez.

Para ajustar balance, las constantes principales estan al inicio de `game.js`: `*_SPAWN_CHANCE`, `TRAVEL_ASTEROID_CHANCE`, `TRAVEL_PLASMA_CHANCE`, `CRYSTALLIZED_ORB_CHANCE`, `CONTAMINATED_ORB_CHANCE`, `BOOSTER_CHANCE_PER_LEVEL` y los pesos `TRAVEL_*_POOL_WEIGHT`.

## Jefes

Hay un jefe cada 3 niveles en modo normal. Despues del nivel 30, la rotacion se repite cada 30 niveles.

| Nivel | Jefe | Patron principal | Desbloquea despues |
| ---: | --- | --- | --- |
| 3 | Enjambre de Obreras | Enemigos rojos cada `400 ms`. | Obreras en viaje normal. |
| 6 | Enjambre de Escisoras | Escisoras cada `650 ms`: bajan a velocidad de obrera, se dividen a media pantalla y continuan como dos mitades en diagonal. | Escisoras en viaje normal. |
| 9 | Centinela | Laser vertical con aviso y laser horizontal encadenado. | Centinela viajero. |
| 12 | Cinturon | Asteroides normales y grandes cada `760 ms`. | Asteroides en viaje normal. |
| 15 | Marea de Plasma | Barras horizontales con hueco movil cada `2100 ms`. | Barras de plasma en viaje normal. |
| 18 | Replicadores | Formación serpenteante cada `900 ms`: cada copia recorre la trayectoria anterior y vuelve a seguir horizontalmente a Axis si pierde su eslabón. | Replicadores en viaje normal. |
| 21 | Drones | Drones de pinchos cada `680 ms`. | Drones en viaje normal. |
| 24 | Girodrones | Girodrones cada `920 ms`: un nucleo con ciclo verde/naranja/rojo y un dron rojo orbitando con halo de energia. | Girodrones en viaje normal. |
| 27 | Aguja Roja | `6` pasadas horizontales con disparos laser. | Aguja Roja en viaje normal. |
| 30 | Tormenta Cristalizada | Sucesion de orbes cristalizados cada `850 ms`: se recogen por arriba y causan dano por la costra inferior. | Desbloquea los orbes cristalizados durante el viaje normal. |

Duraciones principales:

| Oleada | Duracion |
| --- | ---: |
| Enjambre de Obreras | `15000 ms` |
| Enjambre de Escisoras | `15000 ms` |
| Cinturon | `15000 ms` |
| Marea de Plasma | `15000 ms` |
| Drones | `15000 ms` |
| Girodrones | `15000 ms` |
| Replicadores | `15000 ms` |
| Tormenta Cristalizada | `15000 ms` |
| Centinela / Aguja Roja | `30000 ms` |

## Amenazas de viaje

Las probabilidades son por intento de aparicion dentro de su pool. Algunas solo se desbloquean tras vencer a su jefe.

| Amenaza | Probabilidad | Condicion | Notas |
| --- | ---: | --- | --- |
| Obrera / enemigo rojo | `14%` | Tras vencer a Enjambre de Obreras. | Puede aparecer durante el centinela viajero. |
| Escisora | `5%` | Tras vencer a Enjambre de Escisoras. | Cae como una obrera, se divide arriba de la pantalla y sus mitades continuan en diagonal. |
| Drone de pinchos | `7%` | Tras vencer a Drones. | Solo dana cuando esta expandido; si esta verde se puede desactivar al tocarlo. |
| Girodron | `5%` | Tras vencer a Girodrones. | El nucleo verde desactiva ambos drones, el naranja no hace nada y el rojo expandido dana con su halo. El dron rojo exterior tambien dana con su halo. |
| Aguja Roja | `4%` | Tras vencer a Aguja Roja. | Solo puede haber una activa. |
| Asteroide | `10%` | Tras vencer a Cinturon. | Puede aparecer como normal o grande. |
| Asteroide grande | `24%` de los asteroides de viaje | Si aparece asteroide. | Aproximadamente `2.4%` por intento total. |
| Barra de plasma | `4%` | Tras vencer a Marea de Plasma. | No aparece durante jefes de nivel. |
| Centinela viajero | `1.5%` | Tras vencer a Centinela. | Cooldown de `26000 ms`; no aparece con jefe, booster temporal, jefe pendiente ni plasma activo. Mientras ataca no aparecen Replicadores ni boosters morados. |
| Replicador | `2%` | Tras vencer a Replicadores. | Copia invertida de Axis con estela corta y glitch RGB; imita el eje horizontal con `70-120 ms` de retraso y cae al `56%` de la velocidad actual. No aparece mientras hay un Centinela activo. |
| Orbe cristalizado | `5%` | Tras superar Tormenta Cristalizada. | La cara superior limpia se puede recoger. La costra inferior causa dano. Si se pierde, también se pierde una vida porque su energía sigue siendo válida. |

## Ranking

El ranking usa Supabase.

Configuracion actual en `game.js`:

| Dato | Valor |
| --- | --- |
| Tabla | `ranking` |
| Columna de puntos | `puntos` |
| Columna de racha | `racha` |
| Nombre por defecto | `Anónimo` |

Datos guardados:

- Nombre del jugador.
- Puntos.
- Nivel alcanzado.
- Racha maxima.

Si Supabase no esta disponible o no esta configurado, el juego muestra un aviso y permite seguir jugando sin guardar ranking. El modo infinito es sin ranking.

## Estructura del proyecto

| Ruta | Uso |
| --- | --- |
| `index.html` | Estructura del juego, HUD, overlays, menus y carga de librerias. |
| `styles.css` | Estilos del HUD, menus, ranking, pausa, opciones, mejoras y responsive. |
| `game.js` | Logica completa: Phaser, progresion, jefes, spawns, audio, controles y ranking. |
| `assets/` | Musica, efectos de sonido e imagenes. |
| `assets/images/player-ship.svg` | Sprite SVG de la nave del jugador. |

## Assets actuales

| Asset | Uso |
| --- | --- |
| `assets/menu-music.mp3` | Musica del menu, ranking y fin de partida. |
| `assets/game-music.mp3` | Musica durante la partida. |
| `assets/catch.mp3` | Recoger orbes. |
| `assets/booster.mp3` | Recoger boosters. |
| `assets/bad.mp3` | Recibir dano. |
| `assets/button.mp3` | Botones del menu y overlays. |
| `assets/level-up.mp3` | Subida de nivel. |
| `assets/red-wave.mp3` | Entrada de oleada Enjambre. |
| `assets/boss-laser.mp3` | Laser del Centinela. |
| `assets/shield-block.mp3` | Bloqueo con escudo o Echo. |
| `assets/spike-drone.mp3` | Drone de pinchos. |
| `assets/spike-drone-disable.mp3` | Drone desactivado. |
| `assets/spike-drone-beep.mp3` | Aviso del drone. |
| `assets/red-needle-shot.mp3` | Disparo de Aguja Roja. |
| `assets/streak-success.mp3` | Recompensa de racha y Sincronia. |
| `assets/images/player-ship.svg` | Imagen de la nave. |

### Asset opcional

El catalizador de energia usa la musica de partida si no hay una pista propia configurada. Si se anade una pista dedicada para el booster morado, puede conectarse en `PURPLE_BOOSTER_MUSIC_PATH`.

## Dependencias externas

Se cargan desde `index.html`:

| Dependencia | Origen |
| --- | --- |
| Phaser `3.60.0` | `https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.min.js` |
| Supabase JS v2 | `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2` |
| Fuentes `Orbitron` y `Rajdhani` | Google Fonts |

## Constantes principales

| Constante | Valor |
| --- | ---: |
| `GAME_WIDTH` | `390` |
| `GAME_HEIGHT` | `700` |
| `INITIAL_HEART_CAPACITY` | `3` |
| `BASE_GRAVITY` | `220` |
| `INITIAL_SPAWN_DELAY` | `1500 ms` |
| `MIN_SPAWN_DELAY` | `600 ms` |
| `MAX_SPEED_MULTIPLIER` | `2` |
| `UPGRADE_POINTS_REQUIRED` | `10` |
| `MAX_UPGRADE_LEVEL` | `5` |
| `ENERGY_STREAK_REWARD_TARGET` | `50` |
| `ENERGY_STREAK_REWARD_SCORE` | `50` |
| `CONTAMINATED_ORB_CHANCE` | `0.2` |
| `ENERGY_RESONANCE_REQUIRED_ORBS` | `3` |
| `ECHO_ATTACK_CHANCE` | `0.3` |
| `ECHO_ATTACK_DETECTION_RADIUS` | `128` |
| `VITAL_EXPANDER_LIFE_BONUS` | `2` |
| `TIMED_BOOSTER_DURATION` | `10000 ms` |
| `BOOSTER_CHANCE_PER_LEVEL` | `0.02` |
| `BOSS_WAVE_ATTACKS` | `7` |
| `TRAVEL_SENTINEL_ATTACKS` | `2` |
| `TRAVEL_SENTINEL_CHANCE` | `0.015` |
| `TRAVEL_SENTINEL_COOLDOWN` | `26000 ms` |
| `OBRERA_SPAWN_CHANCE` | `0.14` |
| `SPIKE_DRONE_SPAWN_CHANCE` | `0.07` |
| `RED_NEEDLE_SPAWN_CHANCE` | `0.04` |
| `TRAVEL_ASTEROID_CHANCE` | `0.10` |
| `TRAVEL_PLASMA_CHANCE` | `0.04` |

## Notas de mantenimiento

- El titulo visible del menu es `HORIZONTE INFINITO`.
- El `<title>` del documento tambien es `Horizonte Infinito`.
- Si se cambia el nombre de columnas de Supabase, tambien hay que actualizar las constantes `SUPABASE_SCORE_COLUMN` y `SUPABASE_STREAK_COLUMN` en `game.js`.
- Si se anade `assets/purple-booster.mp3`, conecta la ruta en `PURPLE_BOOSTER_MUSIC_PATH`.
