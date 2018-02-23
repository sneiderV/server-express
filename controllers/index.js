const items = [
	{id:1, name: 'product1'},
	{id:2, name: 'product2'},
	{id:3, name: 'product3'}
];

const index = (req, res) => {
	// res.end('hello word');
	res.render('index',{
		title: 'My webStore'
	})
}

const ListofProducts = (req, res, next)=>{
	//renderizamos la vista products con un titulo
	res.render('products',{
		title: 'list of products',
		items: items
	})
}

const newProduct = (req, res, next)=> {
	// console.log(req.body); verifico que llega del navegador
	const newItem = req.body.newItem;
	items.push({
		id: items.length + 1,
		name: newItem
	})

	/*para que no se quede cargando le decimos que debe de hacer despues de agregarlo*/
	res.redirect('/products')
}


/*exportamos la funcion para usarla afuera de este archivo*/
module.exports = {
	index,
	ListofProducts,
	newProduct
}