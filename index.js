const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

//Funcion para lectura de Archico Html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Funcion guardar Tarea
 const guardarTarea = async(tarea)=>{
    const consulta = "INSERT INTO tareas values (DEFAULT,$1)";
    const values= [tarea];
    const result = await Pool.query(consulta,values)
}



app.listen(3000, console.log('Server ON'))