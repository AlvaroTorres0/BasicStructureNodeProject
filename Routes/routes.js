//* La carpeta Routes va a contener los métodos GET, POST, PUT/PATCH, DELETE
const express= require('express');
const app =express();


app.use(require('./productos/routes_productos'));

module.exports=app;