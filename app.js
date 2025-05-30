let http = require('http'), 
express= require('express'),
path = require('path'),
app = express(),
produtos = require('./produto'),
hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));


app.get('/pato', (req,res) => {
res.render('pato', 
    {title: 'Página de pato', 
        p: 'Lorem', img: 'pato.jpg'
    }
);
});

app.get('/outra', (req,res) => {
res.end('Outra');
}); 

app.get('/loja', (req, res) => {
  res.render('loja', { title: 'Minha Loja', produtos: produtos });
});

app.listen(3000);
