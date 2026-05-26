# Jueguito - Probabilidades de aparicion

Este documento resume las probabilidades de caida de enemigos y boosters definidas en `game.js`.

Las probabilidades son por cada intento de aparicion, no por segundo. En partida normal el tiempo entre intentos empieza en `1500 ms` y baja hasta `600 ms` con la dificultad. En jefes algunos patrones usan su propio intervalo.

## Enemigos y amenazas

| Amenaza | Probabilidad | Cuando puede aparecer | Notas |
| --- | ---: | --- | --- |
| Obrera / enemigo rojo (`damageBooster`) | 17% | Viaje normal, despues de desbloquear obreras | Baja a 16% cuando la velocidad ya esta al maximo. No aparece si ya hay 3 amenazas activas. |
| Asteroide | 9,5% | Viaje normal, despues de desbloquear asteroides | Sube a 10% con velocidad maxima. No aparece si ya hay otro asteroide o 3 amenazas activas. |
| Asteroide grande | 24% de los asteroides | Viaje normal | En probabilidad total equivale aprox. a 2,28% por intento antes de velocidad maxima y 2,4% con velocidad maxima, si se llega a tirar asteroide. |
| Barra de plasma | 4,5% | Viaje normal, despues de desbloquear plasma | Sube a 5% con velocidad maxima. No aparece durante jefes ni si ya hay una barra activa. |
| Centinela viajero | 1,8% | Viaje normal, despues de desbloquearlo | Solo si no hay jefe, booster temporal activo, jefe pendiente ni barra de plasma. Tiene cooldown de `26000 ms`. |

## Jefes

| Jefe | Amenaza | Probabilidad | Intervalo |
| --- | --- | ---: | ---: |
| Enjambre | Obrera / enemigo rojo | 100% | `480 ms` |
| Cinturon | Asteroide normal | 84% | `760 ms` |
| Cinturon | Asteroide grande | 16% | `760 ms` |
| Marea de Plasma | Barra de plasma | 100% | `2100 ms` |
| Centinela | Laser | Ataques fijos | `5` ataques por jefe normal, `2` en encuentro viajero |

En Enjambre, los enemigos intentan mantener una separacion horizontal minima de `SHIP_WIDTH + 56`, para dejar huecos algo mayores que la nave.

## Boosters

| Booster | Probabilidad | Condicion |
| --- | ---: | --- |
| Catalizador de energia (`scoreBooster`) | 7% | Solo si la mejora esta desbloqueada y no hay otro booster temporal activo. |
| Barrera protectora (`shieldBooster`) | 7% | Solo si la mejora esta desbloqueada y no hay otro booster temporal activo. |
| Kit de reparacion (`lifeBooster`) | 2,5% | Solo si la mejora esta desbloqueada y la vida actual esta por debajo del maximo. |

Solo puede haber un booster util cayendo a la vez. Si ya hay un `lifeBooster`, `scoreBooster` o `shieldBooster` activo en pantalla, no se genera otro.

## Orden de decision

En viaje normal, el juego decide la siguiente aparicion en este orden:

1. Obrera / enemigo rojo.
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
| `RED_WAVE_SPAWN_DELAY` | `480 ms` |
| `ASTEROID_WAVE_SPAWN_DELAY` | `760 ms` |
| `PLASMA_WAVE_SPAWN_DELAY` | `2100 ms` |
| `SCORE_BOOSTER_CHANCE` | `0.07` |
| `SHIELD_BOOSTER_CHANCE` | `0.07` |
| `LIFE_BOOSTER_CHANCE` | `0.025` |
