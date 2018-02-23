const express = require('express');
/*se usa como enrutador*/
const router = express.Router(); //retorna un obj .js donde se almacen las rutas
const indexController = require("../controllers/index.js");


/*cuando el servidor tenga la ruta inicial / responde con esto:*/
// req info que da el navegador y res info que da el servidor
// router.get('/', (req, res) => {
// 	// res.end('hello word');
// 	res.render('index',{
// 		title: 'My webStore'
// 	});
// } );
/*aqui pasamos la funcionalidad al controller e importamos el archivo que contiene su funcionalidad*/
router.get('/', indexController.index);

router.get('/products', indexController.ListofProducts);

router.post('/new-product',indexController.newProduct);
// router.post('/new-product',(req, res, next)=> {
// 	// console.log(req.body); verifico que llega del navegador
// 	const newItem = req.body.newItem;
// 	items.push({
// 		id: items.length + 1,
// 		name: newItem
// 	})

// 	/*para que no se quede cargando le decimos que debe de hacer despues de agregarlo*/
// 	res.redirect('/products');
// });

/*se importa vacio*/
module.exports = router;
