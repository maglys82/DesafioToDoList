const express = require('express')
const app = express()
const { query } = require("express");
const format = require("pg-format");
const { obtenerJoyas, obtenerJoyasFiltro } = require('./consulta')
app.listen(3000, console.log('Server ON'))

function agregarTarea(){
  const elementoTarea= document.getElementById("id1");
  const tarea= elementoTarea.value;
  const elementoUl = document.getElementById("lisTarea")
  elementoUl.innerHTML+= `<li>${tarea}</li>`
}


//Funcion para lectura de Archico Html
app.get('/', (req, res) => {

  fs.readFile('index.html', 'utf8', (err, contenido) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.send(contenido);
  });
});
