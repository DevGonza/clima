# clima

APP para visualizar el clima.

En home se puede obervar las ciudades, sus temperaturas max y min, fechas, las imagenes representativas del clima. A su vez cuenta con un boton para ver el detalle diario con su respectivo pronostico por hora.
Posee un buscador de ciudades.
En su vertice superior derecho hay un acceso a la sección settings.

En la sección settings podremos encontrar habilitadas dos opciones:

1- Modificar el clima por ciudad
    -Seteado por ciudad (seleccion de ciudad)
    -Permite modificar de forma diaria la temperatura max y min
    -Permite modificar de forma diaria la imagen del pronostico

2- Modificar el detalle diario del clima
    -Seteado por ciudad y por dia a modificar (debe ser igual al día modificado previamente en la ciudad ej: si en clima por ciudad di de alta el lunes 03/10/2022, para setear dicha temperatura, se debe ingresar al modulo detalle diario y seleccionar "monda" y "03/10/2022")
    -Permite modificar por hora temp max y minima
    -permite modificar por hora la descripción del clima
    -Permite modificar la imagen representativa del clima

La APP esta sincronizada mediante metodos PUT para sus UPDATE (panel settings) y metodos GET para visualizar el front al usuario.
La APP fue desarrollada con React JS.
La API fue desarrollada con Express y se encuentra Hosteada en Heroku.

PROXIMOS LANZAMIENTOS Y MEJORAS:

- Seccion SETTINGS acceso unico para usuarios ADMIN (se creara un inicio de sesion y se sumaran COOKIES).
- Seccion SETTINGS lanzar metodo POST para cargar nuevas ciudades.
- Se deberá integrar en el Backend consumo de bases no relacionales para una mejor escalabilidad.
- CRON-JOB y SSE
- Mejoras en la visualización, imagenes y responsive 100%. 
