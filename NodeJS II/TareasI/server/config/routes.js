var usuarios = require('../controllers/usuarios');	
var tareas = require('../controllers/tareas');
var passport = require('./passport');

module.exports = function(app){

	app.get('/partials/*', function(req, res) {
	  	res.render('../../public/app/' + req.params['0']);
	});

	app.post('/registro', usuarios.registro);

	app.post('/login', usuarios.login);

	app.post('/logout', usuarios.logout);

	app.get('/session', usuarios.userAuthenticated);

	app.get('/auth/twitter',passport.authenticate('twitter'));

	app.get('/auth/twitter/callback', passport.authenticate('twitter', { successRedirect: '/',failureRedirect: '/login' }));

	app.post('/tareas', tareas.guardar);

	app.get('/tareas', tareas.getTareas);

	app.post('/tareas/finalizadas', tareas.guardarFinalizadas);


	app.get('*', function(req, res) {
	  	res.render('index');
	});
};