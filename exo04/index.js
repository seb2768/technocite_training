const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const root=process.cwd();

let hbs = exphbs.create({
	defaultLayout :'main',
	extname:'.hbs',
	helpers: {
		crie : function(){return new Date();},
		yell : function(str) {return str.toUpperCase()} 
	}
})

app.engine('hbs',hbs.engine);
app.set('view engine','hbs');
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.render('home',{data:{name:'gilles',title:'training'}});
});
app.get('/page', function (req, res) {
  res.render('page1',{layout:'pages'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
