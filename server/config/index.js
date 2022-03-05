//Import Express
import  express  from 'express';//const express = require('express');

// Import Routes
import route from '../../routes/routes.js'

//Import DB
import db from './db.js';

//Create app
const app = express();

//Conect db
db.authenticate()
    .then( () => console.log('db conected'))
    .catch(error=> console.log(error))

//Define server host and port
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 5000;

//Habilitar PUG -- Template Engine
app.set('view engine','pug');

//Obtener el año Actual
app.use((req, res, next) => {
    const year = new Date()
    res.locals.fecha = year.getFullYear(); //next or return next(): para pasar al siguiente middleware
    res.locals.siteName = "Agencia de Viajes"
    return next();

})
//Body Parser: Permite leer los datos del formualrio
app.use(express.urlencoded( { extended:true } ) )

//Define Static folder
app.use(express.static('public'));

//Asing routes
app.use('/',route);

app.listen(port,host,()=>{
    console.log(`El servidor se esta ejecutando`)
})
