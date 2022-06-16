// Módulos
const express = require('express');
const app = express();
const path = require('path');

// Acá falta uno... 😇
const mainRouter = require('./routes/mainRouter');

// Configuración
app.use(express.static( path.join(__dirname, '../public')));

// Acá falta el template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));


// Rutas, unicamente se va utilizar esta ruta
app.use('/', mainRouter);


// Acá falta el archivo de rutas y después las vistas de EJS
app.get('/', (req, res) => {
    res.send('Servidor funcionando, el resto te toca a vos 😋')
});

// Servidor en escucha
app.listen(3000, () => { 
    console.log('Servidor arriba en el puerto 3000 🤓👌');
})