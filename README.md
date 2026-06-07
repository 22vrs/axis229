# Horizonte Infinito

Juego arcade hecho con HTML, CSS, JavaScript y Phaser 3. Controlas una nave en una pantalla vertical, recoges orbes de energia, encadenas rachas, eliges mejoras y sobrevives a oleadas de amenazas cada vez mas agresivas.

## Como jugar

Abre `index.html` en el navegador o sirve la carpeta con un servidor local sencillo.

```powershell
python -m http.server 8000
```

Despues entra en `http://localhost:8000`.

El juego carga Phaser y Supabase desde CDN, asi que hace falta conexion a internet para jugar con todas las funciones. Los sonidos y la musica estan en `assets/`.

Musica de fondo esperada:

- `assets/menu-music.mp3`: menu principal, ranking y pantalla de fin de partida.
- `assets/game-music.mp3`: musica durante la partida.

## Controles

- Arrastra la nave para moverla libremente en X-Y dentro de la pantalla.
- Recoge orbes amarillos para sumar puntos y llenar la barra de progreso.
- Evita enemigos, asteroides, lasers y barras de plasma.
- Usa el boton de pausa del HUD para pausar, rendirte o abrir opciones.
- En opciones puedes activar o desactivar efectos y musica, y ajustar su volumen por separado. La preferencia se guarda en `localStorage`.

## Modos

| Modo | Descripcion | Ranking |
| --- | --- | --- |
| `JUGAR` | Partida normal con progresion, jefes cada 3 niveles y ranking. | Si |
| `MODO INFINITO` | Partida libre con amenazas desbloqueadas y jefes aleatorios. | No |

En modo infinito, el primer jefe es `Lluvia de estrellas`; despues los jefes se eligen aleatoriamente entre la rotacion disponible.

## Progresion

- La partida empieza con 3 vidas.
- La dificultad sube con el nivel: la gravedad de los orbes escala desde `1.00x` hasta `2.00x`.
- El intervalo entre apariciones empieza en `1500 ms` y baja hasta `600 ms`.
- Cada vez que llenas la barra de progreso subes de nivel y, si hay mejoras disponibles, eliges entre 2 opciones.
- Hay un jefe cada 3 niveles.
- Al encadenar 50 orbes de energia sin recibir dano se concede una recompensa de racha. La recompensa base es de 50 puntos y crece con cada bloque de 50 de racha.

## Mejoras

Cada mejora puede subir hasta nivel 5.

| Mejora | Efecto |
| --- | --- |
| Kit de reparacion | Desbloquea kits verdes. Cada kit cura 1 vida y su probabilidad aumenta 2 puntos porcentuales por nivel. |
| Barrera protectora | Desbloquea escudos azules temporales. Bloquea amenazas y suma puntos al destruirlas por contacto. Su probabilidad aumenta 2 puntos porcentuales por nivel. |
| Catalizador de energia | Desbloquea boosters morados temporales. Duplica los puntos obtenidos por orbes mientras esta activo. Su probabilidad aumenta 2 puntos porcentuales por nivel. |
| Refinador de energia | Aumenta el valor de cada orbe. Al nivel maximo suma +1 extra por cada nivel superado. |

Los boosters temporales duran siempre `10 s`.

## Boosters y probabilidades

Las probabilidades son por intento de aparicion y se comprueban despues de las amenazas viajeras, barras de plasma, cometas y asteroides. Solo puede haber un booster cayendo a la vez.

| Booster | Probabilidad | Cuando puede aparecer | Efecto |
| --- | ---: | --- | --- |
| Catalizador de energia | 2% por nivel (`2%`, `4%`, `6%`, `8%`, `10%`) | Si la mejora esta desbloqueada y no hay otro booster temporal activo. | Duplica los puntos de los orbes durante `10 s`. |
| Barrera protectora | 2% por nivel (`2%`, `4%`, `6%`, `8%`, `10%`) | Si la mejora esta desbloqueada y no hay otro booster temporal activo. | Activa un escudo durante `10 s`. |
| Kit de reparacion | 2% por nivel (`2%`, `4%`, `6%`, `8%`, `10%`) | Si la mejora esta desbloqueada y la nave no esta al maximo de vidas. | Cura 1 vida. |

Si los tres boosters pueden aparecer, la probabilidad total de que el intento genere un booster depende de sus niveles: desde `6%` con los tres a nivel 1 hasta `30%` con los tres a nivel 5.

## Jefes del modo normal

Hay un jefe cada 3 niveles. La rotacion normal es:

| Nivel | Jefe | Ataque principal | Desbloquea despues |
| ---: | --- | --- | --- |
| 3 | Enjambre | Obreras / enemigos rojos con caida frecuente | Obreras en el viaje |
| 6 | Centinela | Laser vertical con aviso previo y laser horizontal encadenado | Centinela viajero |
| 9 | Cinturon | Asteroides normales y grandes | Asteroides en el viaje |
| 12 | Marea de Plasma | Barras horizontales con hueco movil | Barras de plasma en el viaje |
| 15 | Drones | Drones de pinchos que alternan estados | Drones en el viaje |
| 18 | Aguja Roja | Pasadas horizontales con disparos laser | Aguja Roja en el viaje |
| 21 | Lluvia de estrellas | Cometas diagonales con estela visual | Cometas en el viaje |

Despues del nivel 21 la rotacion se repite cada 21 niveles: nivel 24 Enjambre, nivel 27 Centinela, nivel 30 Cinturon, etc.

## Amenazas y probabilidades

Las probabilidades son por intento de aparicion, no por segundo. En partida normal el tiempo entre intentos depende de la dificultad. Durante jefes algunas amenazas usan su propio intervalo.

| Amenaza | Probabilidad | Cuando puede aparecer | Notas |
| --- | ---: | --- | --- |
| Obrera / enemigo rojo | 16% | Despues de vencer a Enjambre | Puede aparecer durante el centinela viajero. |
| Drone de pinchos | 5% | Despues de vencer a Drones | Solo dana cuando esta expandido, salvo contacto con escudo. |
| Aguja Roja | 5% | Despues de vencer a Aguja Roja | Amenaza horizontal. Solo puede haber una activa. |
| Cometa | 20% | Despues de vencer a Lluvia de estrellas | Entra desde arriba, cae con deriva diagonal y deja una estela visual temporal. |
| Asteroide | 10% | Despues de vencer a Cinturon | Puede solaparse con otros asteroides, barras de plasma y amenazas hostiles. |
| Asteroide grande | 24% de los asteroides de viaje | Viaje normal | Equivale aprox. a 2,4% por intento si se llega a tirar asteroide. |
| Barra de plasma | 5% | Despues de vencer a Marea de Plasma | No aparece durante jefes de nivel. Puede solaparse con otras barras y amenazas hostiles. |
| Centinela viajero | 1,8% | Despues de vencer a Centinela | Tiene cooldown de `26000 ms` y no aparece con jefe, booster temporal, jefe pendiente ni plasma activo. Durante este encuentro pueden caer amenazas de viaje. |

## Patrones de jefe

| Jefe | Patron |
| --- | --- |
| Enjambre | Spawns de enemigos rojos cada `400 ms`, intentando mantener separacion horizontal minima de `SHIP_WIDTH + 56`. |
| Centinela | `7` ataques laser en jefe normal y `2` en encuentro viajero. Cada ataque dispara un laser vertical y prepara uno horizontal dentro del rango de movimiento de la nave mientras el vertical sigue activo. |
| Cinturon | Asteroides cada `760 ms`; 84% normales y 16% grandes. |
| Marea de Plasma | Barras cada `2100 ms` con hueco movil. |
| Drones | Drones de pinchos cada `680 ms`. |
| Aguja Roja | `6` pasadas alternando izquierda/derecha; las primeras son repartidas y las siguientes usan patrones especiales. |
| Lluvia de estrellas | Cometas cada `520 ms`, con separacion horizontal minima para dejar huecos de esquiva. |

## Orden de aparicion

En viaje normal, el juego decide la siguiente aparicion en este orden:

1. Centinela viajero, si cumple condiciones.
2. Amenaza viajera: Aguja Roja, drone de pinchos u obrera.
3. Barra de plasma.
4. Cometa.
5. Asteroide.
6. Booster.
7. Orbe normal, si nada anterior aparece.

Esto significa que las probabilidades de plasma, asteroides y boosters son condicionales: solo se comprueban si las decisiones anteriores no generaron nada.

## Ranking

El ranking usa Supabase y guarda:

- nombre del jugador,
- puntos,
- nivel alcanzado,
- racha maxima.

La tabla configurada es `ranking`; las columnas principales usadas por el juego son `nombre`, `puntos`, `nivel` y `racha`.

## Estructura

| Archivo | Uso |
| --- | --- |
| `index.html` | Estructura del juego, HUD, overlays y carga de librerias. |
| `styles.css` | Estilos del HUD, menus, ranking, pausa, opciones y pantalla de mejoras. |
| `game.js` | Logica completa del juego, Phaser, progresion, jefes, spawns, audio y ranking. |
| `assets/` | Musica y efectos de sonido. |

## Constantes principales

| Constante | Valor |
| --- | ---: |
| `INITIAL_SPAWN_DELAY` | `1500 ms` |
| `MIN_SPAWN_DELAY` | `600 ms` |
| `MAX_SPEED_MULTIPLIER` | `2` |
| `UPGRADE_POINTS_REQUIRED` | `10` |
| `MAX_UPGRADE_LEVEL` | `5` |
| `ENERGY_STREAK_REWARD_TARGET` | `50` |
| `ENERGY_STREAK_REWARD_SCORE` | `50` |
| `DRONE_WAVE_SPAWN_DELAY` | `680 ms` |
| `RED_WAVE_SPAWN_DELAY` | `400 ms` |
| `ASTEROID_WAVE_SPAWN_DELAY` | `760 ms` |
| `COMET_WAVE_SPAWN_DELAY` | `520 ms` |
| `TRAVEL_COMET_CHANCE` | `0.2` |
| `PLASMA_WAVE_SPAWN_DELAY` | `2100 ms` |
| `RED_NEEDLE_SPAWN_CHANCE` | `0.05` |
| `SPIKE_DRONE_SPAWN_CHANCE` | `0.05` |
| `TIMED_BOOSTER_DURATION` | `10000 ms` |
| `BOOSTER_CHANCE_PER_LEVEL` | `0.02` |
