var express = require('express')
var home = require('../app/routes/home')
var loader = require('express-load')
var bodyParser = require('body-parser')

module.exports = function() {
	var app = express()

	app.use(express.static('./public'))
	app.use(bodyParser.urlencoded({extended:true}))
	app.use(bodyParser.json())
	app.use(require('method-override')())

	loader('models',{cwd:'app'})
		.then('controllers')
		.then('routes')
		.into(app)

	app.set('port',3000)
	app.set('view engine','ejs')
	app.set('views','app/views')

	return app
}