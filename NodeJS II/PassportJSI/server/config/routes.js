var usuarios = require('../controllers/usuarios');	

module.exports = function(app){

	app.get('/partials/*', function(req, res) {
	  	res.render('../../public/app/' + req.params['0']);
	});

	app.post('/registro', usuarios.registro);

	app.get('*', function(req, res) {
	  	res.render('index');
	});
};