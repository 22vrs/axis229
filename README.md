# Horizonte Infinito

Juego arcade vertical hecho con HTML, CSS, JavaScript y Phaser 3. Controlas una nave, recoges orbes de energia, encadenas rachas, eliges mejoras y sobrevives a oleadas de amenazas cada vez mas agresivas.

Ultima revision del README: 2026-06-07.

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
- Evita enemigos, asteroides, lasers, cometas, drones y barras de plasma.
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

En modo infinito, el primer jefe es `Lluvia de estrellas`; despues los jefes se eligen aleatoriamente entre la rotacion disponible.

## Progresion

- La partida empieza con `3` vidas.
- Cada `10` puntos de progreso se sube de nivel al inicio.
- Cada subida de nivel permite elegir entre `2` mejoras si quedan mejoras disponibles.
- Cada mejora puede subir hasta nivel `5`.
- Hay un jefe cada `3` niveles.
- La gravedad base de los orbes es `220`.
- La velocidad escala hasta `2.00x`.
- El intervalo de aparicion empieza en `1500 ms` y baja hasta `600 ms`.
- Al encadenar `50` orbes de energia sin recibir dano se concede una recompensa de racha.
- La recompensa base de racha es de `50` puntos y crece con cada bloque de `50`.

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
- El intervalo de aparicion normal baja de `1500 ms` a `600 ms` usando una curva suavizada (`SPAWN_DELAY_EASING = 1.8`), asi que el salto intermedio no es lineal.
- Los boosters que caen usan el `80%` de la velocidad principal (`BOOSTER_GRAVITY_RATIO = 0.8`), por eso el HUD muestra tambien `BOOST`.
- Al cambiar la velocidad, los objetos que ya estan cayendo actualizan su velocidad para adaptarse al nuevo ritmo.
- Las oleadas y jefes pueden usar sus propios intervalos fijos, por ejemplo Enjambre cada `400 ms`, Drones cada `680 ms`, Asteroides cada `760 ms`, Cometas cada `520 ms` y Plasma cada `2100 ms`.
- Algunas amenazas no escalan con la velocidad principal y usan ratios o valores propios, como asteroides, drones, cometas, lasers y barras de plasma.

## Mejoras

| Mejora | Efecto |
| --- | --- |
| Kit de reparacion | Desbloquea kits verdes. Cada kit cura `1` vida y su probabilidad aumenta `2` puntos porcentuales por nivel. |
| Barrera protectora | Desbloquea escudos azules temporales. Bloquea amenazas y suma puntos al destruirlas por contacto. Su probabilidad aumenta `2` puntos porcentuales por nivel. |
| Catalizador de energia | Desbloquea boosters morados temporales. Duplica los puntos obtenidos por orbes mientras esta activo. Su probabilidad aumenta `2` puntos porcentuales por nivel. |
| Refinador de energia | Aumenta el valor de cada orbe. Al nivel maximo suma `+1` extra por cada nivel superado. |

Los boosters temporales duran `10 s`.

## Boosters

Las probabilidades son por intento de aparicion. Solo puede haber un booster cayendo a la vez.

| Booster | Probabilidad | Condicion | Efecto |
| --- | ---: | --- | --- |
| Catalizador de energia | `2%` por nivel, hasta `10%` | Mejora desbloqueada y sin otro booster temporal activo. | Duplica los puntos de los orbes durante `10 s`. |
| Barrera protectora | `2%` por nivel, hasta `10%` | Mejora desbloqueada y sin otro booster temporal activo. | Activa un escudo durante `10 s`. |
| Kit de reparacion | `2%` por nivel, hasta `10%` | Mejora desbloqueada y nave por debajo del maximo de vidas. | Cura `1` vida. |

Si los tres boosters pueden aparecer, la probabilidad total por intento va de `6%` con los tres a nivel 1 hasta `30%` con los tres a nivel 5.

## Jefes

Hay un jefe cada 3 niveles en modo normal. Despues del nivel 21, la rotacion se repite cada 21 niveles.

| Nivel | Jefe | Patron principal | Desbloquea despues |
| ---: | --- | --- | --- |
| 3 | Enjambre | Enemigos rojos cada `400 ms`. | Obreras en viaje normal. |
| 6 | Centinela | Laser vertical con aviso y laser horizontal encadenado. | Centinela viajero. |
| 9 | Cinturon | Asteroides normales y grandes cada `760 ms`. | Asteroides en viaje normal. |
| 12 | Marea de Plasma | Barras horizontales con hueco movil cada `2100 ms`. | Barras de plasma en viaje normal. |
| 15 | Drones | Drones de pinchos cada `680 ms`. | Drones en viaje normal. |
| 18 | Aguja Roja | `6` pasadas horizontales con disparos laser. | Aguja Roja en viaje normal. |
| 21 | Lluvia de estrellas | Cometas diagonales cada `520 ms`. | Cometas en viaje normal. |

Duraciones principales:

| Oleada | Duracion |
| --- | ---: |
| Enjambre | `15000 ms` |
| Cinturon | `15000 ms` |
| Marea de Plasma | `15000 ms` |
| Drones | `15000 ms` |
| Lluvia de estrellas | `15000 ms` |
| Centinela / Aguja Roja | `30000 ms` |

## Amenazas de viaje

Las probabilidades son por intento de aparicion. Algunas solo se desbloquean tras vencer a su jefe.

| Amenaza | Probabilidad | Condicion | Notas |
| --- | ---: | --- | --- |
| Obrera / enemigo rojo | `20%` | Tras vencer a Enjambre. | Puede aparecer durante el centinela viajero. |
| Drone de pinchos | `10%` | Tras vencer a Drones. | Solo dana cuando esta expandido, salvo contacto con escudo. |
| Aguja Roja | `5%` | Tras vencer a Aguja Roja. | Solo puede haber una activa. |
| Cometa | `15%` | Tras vencer a Lluvia de estrellas. | Entra desde arriba con deriva diagonal y estela. |
| Asteroide | `15%` | Tras vencer a Cinturon. | Puede aparecer como normal o grande. |
| Asteroide grande | `24%` de los asteroides de viaje | Si aparece asteroide. | Aproximadamente `3.6%` por intento total. |
| Barra de plasma | `5%` | Tras vencer a Marea de Plasma. | No aparece durante jefes de nivel. |
| Centinela viajero | `2%` | Tras vencer a Centinela. | Cooldown de `26000 ms`; no aparece con jefe, booster temporal, jefe pendiente ni plasma activo. |

Orden de decision en viaje normal:

1. Centinela viajero, si cumple condiciones.
2. Amenaza viajera: Aguja Roja, drone de pinchos u obrera.
3. Barra de plasma.
4. Cometa.
5. Asteroide.
6. Booster.
7. Orbe normal, si nada anterior aparece.

Esto hace que varias probabilidades sean condicionales: se comprueban solo si las decisiones anteriores no generaron nada.

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

Si Supabase no esta disponible o no esta configurado, el juego muestra un aviso y permite seguir jugando sin guardar ranking.

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
| `assets/shield-block.mp3` | Bloqueo con escudo. |
| `assets/spike-drone.mp3` | Drone de pinchos. |
| `assets/spike-drone-disable.mp3` | Drone desactivado. |
| `assets/spike-drone-beep.mp3` | Aviso del drone. |
| `assets/red-needle-shot.mp3` | Disparo de Aguja Roja. |
| `assets/streak-success.mp3` | Recompensa de racha. |
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
| `TIMED_BOOSTER_DURATION` | `10000 ms` |
| `BOOSTER_CHANCE_PER_LEVEL` | `0.02` |
| `BOSS_WAVE_ATTACKS` | `7` |
| `TRAVEL_SENTINEL_ATTACKS` | `2` |
| `TRAVEL_SENTINEL_CHANCE` | `0.018` |
| `TRAVEL_SENTINEL_COOLDOWN` | `26000 ms` |
| `OBRERA_SPAWN_CHANCE` | `0.16` |
| `SPIKE_DRONE_SPAWN_CHANCE` | `0.05` |
| `RED_NEEDLE_SPAWN_CHANCE` | `0.05` |
| `TRAVEL_ASTEROID_CHANCE` | `0.1` |
| `TRAVEL_COMET_CHANCE` | `0.2` |
| `TRAVEL_PLASMA_CHANCE` | `0.05` |

## Notas de mantenimiento

- El titulo visible del menu es `HORIZONTE INFINITO`.
- El `<title>` del documento aun dice `Juego de recoger bolas`; conviene cambiarlo si quieres que la pestana del navegador coincida con el nombre del juego.
- Si se cambia el nombre de columnas de Supabase, tambien hay que actualizar las constantes `SUPABASE_SCORE_COLUMN` y `SUPABASE_STREAK_COLUMN` en `game.js`.
- Si se anade `assets/purple-booster.mp3`, el README ya contempla esa pista como musica del booster morado.
