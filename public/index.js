function agregarTarea(){
    const elementoTarea= document.getElementById("id1");
    const tarea= elementoTarea.value;
    fetch('/tareas', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"tarea":tarea})
})
   .then(response => console.log(response.status))
  }
  
  function obtenerTareas(){
    
  }