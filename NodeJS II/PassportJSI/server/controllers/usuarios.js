var Usuario = require('../models/usuarios');
var passport = require('../config/passport');

exports.registro = function(req, res, next){
	var usuario = new Usuario(req.body);
	usuario.save(function (err, usuario){
		if (err) {
			res.send({success : false, message : err});
		}else{
			req.logIn(usuario, function (err){
				if (!err) {
					res.send({logged: true, success: true, usuario : req.session.passport});
				}else{
					console.log(err);
					res.send({logged: false, success: true, usuario : usuario});
				}
			});
		}
	});

};