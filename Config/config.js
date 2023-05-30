//* Guardará las clases y constantes de clusters en la nube, variables de entorno, entre otras.

//! Conexion a la base de datos
'use strict'

const mongoose = require('mongoose');
//Permite que la aplicacion slaga y haga peticiones a treves de un servidor
const app = require('../Server/index.js');

//Puerto donde se desea correr
const port = 3900;

//Generar promesa globa
mongoose.Promise = global.Promise;

//Hacer conexion a la base de datos
mongoose.connect('urlDataBase', {useNewUrlParser: true})
    .then(() => {
        console.log('Connection successfully');

        //Escuchar el puerto del server
        app.listen(port, () => {
            console.log(`Database listening in the port: ${port}`);

        });
    })

    .catch((error) =>{
        console.log("error to connect: " + error)
    });