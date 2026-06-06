# Jueguito - Jefes, enemigos y probabilidades

Este documento resume los jefes, desbloqueos y probabilidades de aparicion definidas en `game.js`.

Las probabilidades son por cada intento de aparicion, no por segundo. En partida normal el tiempo entre intentos empieza en `1500 ms` y baja hasta `600 ms` con la dificultad. En jefes algunos patrones usan su propio intervalo.

## Jefes del modo normal

Hay un jefe cada 3 niveles. La rotacion normal es:

| Nivel | Jefe | Ataque principal | Desbloquea despues |
| ---: | --- | --- | --- |
| 3 | Enjambre | Obreras / enemigos rojos con caida frecuente | Obreras en el viaje |
| 6 | Centinela | Laser vertical con aviso previo | Centinela viajero |
| 9 | Cinturon | Asteroides normales y grandes | Asteroides en el viaje |
| 12 | Marea de Plasma | Barras horizontales con hueco movil | Barras de plasma en el viaje |
| 15 | Drones | Drones de pinchos que alternan estados y se expanden | Drones en el viaje |
| 18 | Aguja Roja | 6 pasadas horizontales con patrones de laser | Aguja Roja en el viaje |

Despues del nivel 18 la rotacion se repite cada 18 niveles: nivel 21 Enjambre, nivel 24 Centinela, nivel 27 Cinturon, etc.

En modo infinito, el primer jefe es `Aguja Roja` para facilitar pruebas. A partir de ahi los jefes se eligen aleatoriamente entre la rotacion disponible.

## Modos de juego

| Modo | Movimiento | Ranking |
| --- | --- | --- |
| Normal | Nave limitada al eje horizontal clasico. | Guarda puntuacion. |
| X-Y | Nave libre en ambos ejes dentro de la pantalla. | No guarda puntuacion en el ranking normal. |
| Infinito | Nave limitada al eje horizontal clasico, con amenazas desbloqueadas. | No guarda puntuacion. |

## Enemigos y amenazas

| Amenaza | Probabilidad | Cuando puede aparecer | Notas |
| --- | ---: | --- | --- |
| Obrera / enemigo rojo (`damageBooster`) | 16% | Viaje normal, despues de desbloquear obreras | No aparece si ya hay una barra de plasma o 3 amenazas activas. |
| Drone de pinchos (`spikeDrone`) | 5% | Viaje normal, despues de desbloquear drones | Solo hace dano cuando esta expandido, salvo que choque con el escudo. |
| Aguja Roja (`redNeedle`) | 5% | Viaje normal, despues de vencer al jefe Aguja Roja | Amenaza horizontal. No puede aparecer si ya hay otra Aguja Roja en pantalla. |
| Asteroide | 10% | Viaje normal, despues de desbloquear asteroides | No aparece si ya hay una barra de plasma, otro asteroide o 3 amenazas activas. |
| Asteroide grande | 24% de los asteroides | Viaje normal | En probabilidad total equivale aprox. a 2,4% por intento, si se llega a tirar asteroide. |
| Barra de plasma | 5% | Viaje normal, despues de desbloquear plasma | No aparece durante jefes, si ya hay una barra activa ni si hay amenazas hostiles activas. |
| Centinela viajero | 1,8% | Viaje normal, despues de desbloquearlo | Solo si no hay jefe, booster temporal activo, jefe pendiente ni barra de plasma. Tiene cooldown de `26000 ms`. |

## Jefes

| Jefe | Amenaza | Patron |
| --- | --- | --- |
| Drones | Drones de pinchos | Spawns cada `680 ms` durante la oleada. |
| Enjambre | Obrera / enemigo rojo | Spawns cada `400 ms`, con separacion horizontal minima. |
| Cinturon | Asteroides | 84% asteroide normal y 16% asteroide grande cada `760 ms`. |
| Centinela | Laser vertical | `5` ataques por jefe normal, `2` en encuentro viajero. |
| Marea de Plasma | Barra de plasma | Barras cada `2100 ms`, con hueco movil. |
| Aguja Roja | Laseres cortos rojos | `6` pasadas alternando izquierda/derecha. Las 2 primeras usan 4 disparos repartidos y las 4 siguientes usan patrones especiales. |

En Enjambre, los enemigos intentan mantener una separacion horizontal minima de `SHIP_WIDTH + 56`, para dejar huecos algo mayores que la nave.

## Boosters

| Booster | Probabilidad | Condicion |
| --- | ---: | --- |
| Catalizador de energia (`scoreBooster`) | 7% | Solo si la mejora esta desbloqueada y no hay otro booster temporal activo. |
| Barrera protectora (`shieldBooster`) | 5% | Solo si la mejora esta desbloqueada y no hay otro booster temporal activo. |
| Kit de reparacion (`lifeBooster`) | 3% | Solo si la mejora esta desbloqueada y la vida actual esta por debajo del maximo. |

Solo puede haber un booster util cayendo a la vez. Si ya hay un `lifeBooster`, `scoreBooster` o `shieldBooster` activo en pantalla, no se genera otro.

## Orden de decision

En viaje normal, el juego decide la siguiente aparicion en este orden:

1. Amenaza viajera: Aguja Roja, drone de pinchos u obrera/enemigo rojo.
2. Barra de plasma.
3. Asteroide.
4. Booster.
5. Orbe normal, si nada anterior aparece.

Esto significa que las probabilidades de plasma, asteroides y boosters son sus probabilidades cuando el juego llega a esa comprobacion. Si antes aparece una amenaza, las comprobaciones siguientes ya no se ejecutan en ese intento.

## Constantes principales

| Constante | Valor |
| --- | ---: |
| `INITIAL_SPAWN_DELAY` | `1500 ms` |
| `MIN_SPAWN_DELAY` | `600 ms` |
| `DRONE_WAVE_SPAWN_DELAY` | `680 ms` |
| `RED_WAVE_SPAWN_DELAY` | `400 ms` |
| `ASTEROID_WAVE_SPAWN_DELAY` | `760 ms` |
| `PLASMA_WAVE_SPAWN_DELAY` | `2100 ms` |
| `RED_NEEDLE_SPAWN_CHANCE` | `0.05` |
| `SPIKE_DRONE_SPAWN_CHANCE` | `0.05` |
| `SCORE_BOOSTER_CHANCE` | `0.07` |
| `SHIELD_BOOSTER_CHANCE` | `0.05` |
| `LIFE_BOOSTER_CHANCE` | `0.03` |
