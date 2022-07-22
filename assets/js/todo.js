let tareas = document.querySelector('#tareas');
let btn = document.querySelector('#agregar');
let listaTareas = document.querySelector('#lista');
let cuenta = document.querySelector('#cuenta-tareas')
let id = 1
/*Función de rellenar con tareas*/
let tarea = [];
btn.addEventListener("click", () => {
    
    const nuevaTarea = tareas.value
    tarea.push({id: id++, tarea: nuevaTarea, estado: false})
    tareas.value = "";
    //Contador total suma
    total.innerHTML= tarea.length
    renderTareas()

})

function renderTareas() {
    realizadas.innerHTML = ""
    let contador = 0    
   
    let html = ""
    for (todo of tarea) {
    html += `
    <tr>
    <td>${todo.id}</td>
    <td>${todo.tarea}</td>
    <td><input type="checkbox" onclick="cambiarEstado(${todo.id})" ${ todo.estado ? 'checked' : '' }><button class="btn btn-danger btn-sm" style="margin: 4%;" onclick="borrar(${tareas.id})">X</button></td>
    </tr>
    `;
    
  if(todo.estado){contador ++}   
    }
    realizadas.innerHTML= contador; 
    listaTareas.innerHTML = html;
    }


function borrar(id){
    const index = tarea.findIndex((ele) => ele.id == id)
    tarea.splice(index, 1)
    renderTareas()
    //Contador total resta
    total.innerHTML= tarea.length
         
}   

   let cambiarEstado =  (id) => {  
    tarea.map((ele) => { 
     if (ele.id == id) {ele.estado = !ele.estado}
        })

    renderTareas()
    
    }
    