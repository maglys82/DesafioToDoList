function agregarTarea(){
  const elementoTarea= document.getElementById("id1");
  const tarea= elementoTarea.value;
  const elementoUl = document.getElementById("lisTarea")
  elementoUl.innerHTML+= `<li>${tarea}</li>`
}

