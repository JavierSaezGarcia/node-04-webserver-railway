const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT;

// *******************    CONTROLLERS   ***************************

// Middleware:
//PARA SERVIR CONTENIDO ESTATICO NECESITAMOS UN MIDDELWARE QUE LE DIGA A EXPRESS QUE ESTOS ARCHIVOS ESTAN EN LA CARPETA PUBLIC
app.use(express.static('public'));
// Si esta ejecutando el middelware no ejecuta la siguiente linea
// app.get('/', (req, res) => {
//     res.send('Home page');
// });
// app.get('/hola-mundo', (req, res) => {
//     res.send('Hola Mundo en su respectiva ruta');
// });
// app.get('*', (req, res) => { 
//     res.send('404 | Page Not Found');
// });


// Ejemplo roadtrip web statica con importacion de path para hacer un join de ruta
// app.get('/', (req, res) => { 
//     res.sendFile(path.join(__dirname,'public'));
// });

// Handlerbars
// Implementar handlebars
app.set('view engine','hbs');
// seteamos el dir de la carpeta views
app.set('views',path.join(__dirname, 'public/views'));
// para poder usarla como home
app.get('/', (req, res) => { 
    res.render('home', {
        nombre: 'Xavier S. García',
        titulo: 'Curso de Node.js'
    });
});

app.get('/elements', (req, res) => { 
    res.render('elements', {
        nombre: 'Xavier S. García',
        titulo: 'Curso de Node.js'
    });
});
app.get('/generic', (req, res) => { 
    res.render('generic', {
        nombre: 'Xavier S. García',
        titulo: 'Curso de Node.js'
    });
});
// crear parciales o bloques de codigo reutilizables en handlebars
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/public/views/partials/');

app.get('/index', (req, res) => { 
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/generic', (req, res) => { 
    res.sendFile(__dirname + '/public/generic.html');
});
app.get('/elements', (req, res) => { 
    res.sendFile(__dirname + '/public/elements.html');
});

// ejemplo para que sirva el 404 personalizado
app.get('*', (req, res) => { 
    res.sendFile(__dirname + '/public/404.html');
});
app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}!`);
});



