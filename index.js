const express = require('express')
const app = express()
const path = require('path');
const {pool} = require('./consulta')

app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

//Funcion para lectura de Archico Html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



// 1.-Funcion insertar en la tabla Tarea la nueva tarea
 const guardarTarea = async(tarea)=>{
    const consulta = "INSERT INTO tareas values (DEFAULT,$1)";
    const values= [tarea];
    const result = await pool.query(consulta,values)
    
}

//2.-Funcion Crear  una  nueva Tarea  en el servidor. 
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
//________________________________________________________________
//Funcion Obtener todas las Tareas 
const obtenerTareas = async()=>{
  const consulta = 'Select * from tareas'
  const {rows} = await pool.query(consulta)
  return rows
}

//funcion  Obtener información o recursos del servidor. para obtener la lista de tareas
app.get('/tareas',async(req,res)=>{
  const tareas = await obtenerTareas()
  res.json(tareas)
})


//funcion modificar tarea
const modificarTarea = async(tarea,id)=>{ 
const consulta =  'UPDATE tareas SET tarea =$1 WHERE id=$2';                  
const value= [tarea,id];
const result = await pool.query(consulta,value);
return result; 
}

app.put("/tareas/:id", async(req,res)=>{
  try {
    const id= req.params.id;
    const tarea=req.query.tarea;
    const result = await modificarTarea(tarea,id);
    if(result.rowCount ==1){
      res.status(201).json({mensaje: 'Tarea actualizada con exito'})
    }else{
      res.status(404).json({mensaje: 'No se encontro tarea para actualizar'})
    }
    
  }catch(error) {
    console.error("Error al modificar regitro". error)
    res.status(500).json({mensaje: "Error interno del Servidos"})
  }
})

app.listen(3000, console.log('Server ON'))