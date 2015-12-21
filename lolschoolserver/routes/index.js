var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/service/', function(req, res, next) {
	var data = [];
	var persona = {};
	var persona2 = {};
	persona['nombre'] = 'jhon';
	persona['apellido'] = ' buendia';
	data.push(persona);
	persona2['nombre'] = 'pedro';
	persona2['apellido'] = ' perez';
	data.push(persona2);
  res.json(data);
});



module.exports = router;
