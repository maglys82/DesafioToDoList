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
   .then(response => obtenerTareas())

  }

//funcion pintar lista de tareas- get
  function obtenerTareas(){
    const elementoTarea = document.getElementById("lisTarea");
    fetch('/tareas')
   .then(response => response.json())
   .then(json => {
    elementoTarea.innerHTML= ''
    //Recorre el arreglo json
    json.forEach(({tarea}) => {
        elementoTarea.innerHTML += `<li>${tarea}</li>`    
    });
   })
   }
//Se ejecuta por primera vez cuando llama al sitio
  obtenerTareas()