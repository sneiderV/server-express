const express = require('express');
const path = require('path'); /*modulo de node.js*/
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index');



//settings - configuraciones de express
app.set('port', process.env.PORT || 3000);
/*le decimos a express donde estan las vistas*/
app.set('views', path.join(__dirname,'views'));
/*le decimos el motor de plantilla que usamos*/
app.set('view engine','ejs');


//middlewares - procesar URLs cada vez que el navegador envia solicitudes
app.use((req, res, next)=> {
	console.log(`${req.url} -${req.method}`);
	next();
});
/*el navegador envia info en JSON entonces con esto podemos entender que info llega*/
app.use(bodyParser.json());
/*como no envia fotos ni nada complicado solo un formulario-> extended false*/
app.use(bodyParser.urlencoded({extended: false}));


//routes - ejecutar las rutas
/*como esta en otro lado lo requerimos en el top como conts y le decimos al app que lo use */
app.use(routes);


//static files - le decimos a express donde se almacen los datos relacionados al front-end
/*le decimos al app que use uno de los modulos de express-> static*/
app.use(express.static(path.join(__dirname,'public')));




//start the server
/*inicializamos y lo ponemos a escuchar por el port 3000*/
app.listen(app.get('port'), ()=> {
	console.log('Server on port', app.get('port'))
});