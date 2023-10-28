# ReadConnect Front

¡Hola! Este es el frontend del proyecto ReadConnect. Esta desarrollado en Next.js. Esta alojado en Amplify de Amazon, pero se puede servir localmente con el .env que se haya en el repositorio.

## El proyecto

La única página funcional del proyecto es [/books](https://github.com/stixbunny/readconnect_front/blob/master/src/app/books/page.jsx) la cual carga todos los libros desde el backend. Al ser GraphQl, de páginación hay un botón al final para cargar mas libros. Si bien la api soporta filtración por casi todos los campos, no esta incluido aquí.

## Para correr el proyecto de forma local

Hay que seguir los pasos para la mayoria de los proyectos en node:

- Instalar las dependencias con `npm install`
- Correr el entorno de desarrollo con `npm run dev`

## Finalmente

La app se encuentra en https://master.d3uni35qh1dii9.amplifyapp.com/books pero como se mencionó no funciona correctamente debido a que el backend esta en http y no https.
