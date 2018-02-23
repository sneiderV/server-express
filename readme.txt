(Proyecto con estructura MVC)
1. npm init --yes (crea un json con todos los metadatos del proyecto {titulo, dependencias})
2. dependencia a expess npm i express
3. creo estructura [ routes-lleva las urls del servidor; 
views-todas las vistas html; 
public-contiene el front end; 
crontollers-donde recibe las peticiones del servidor manejador de peticiones con funciones]
4.creo archivo principal app.js
5. instalar dependencias adicional a express --> motor de plantillas ejs y body-parser
	npm i ejs = 
	npm i body-parser = permite que el servidor entienda las peticiones POST
npm i ejs body-parser
6. en PACKAGE.JSON agrego un script START --> ejecuta el app.js con node.js 
			  un script DEV --> evita reiniciar el servidor; NODEMON
	para ejecutarlos uso npm start o directamente puedo usar node app.js pero evitar problemas y tener que reiniciar el servidor
	ejecutamos npm run dev (ejecuta el script dev)
7. agregamos el modulo de NODEMON npm i nodemon -D (la D es para que lo agregue como "dependencia" de desarrollo)

