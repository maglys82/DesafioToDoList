const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors');
const {pool} = require('./consulta')

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

//Funcion para lectura de Archico Html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Funcion guardar Tarea
 const guardarTarea = async(tarea)=>{
    const consulta = "INSERT INTO tareas values (DEFAULT,$1)";
    const values= [tarea];
    const result = await pool.query(consulta,values)
    
}

//Funcion Crear una Tarea
app.post('/tareas',async(req,res)=>{
 const {tarea}= req.body
//  const resultado = req.body
//  const tarea = resultado.tarea
  try{
    await guardarTarea(tarea)
    res.status(201).json('Recurso agregado con Exito')
  }catch (error){
    console.error(error)
    console.log('Error al Agregar Tarea')
  }
})


app.listen(3000, console.log('Server ON'))