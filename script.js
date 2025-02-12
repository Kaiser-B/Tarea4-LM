

const entradaTareas = document.querySelector('#entrada-tarea');
const tareas = document.querySelector('#tareas');
const botonAnadir =  document.querySelector('#enviar-tarea');
const lista =  document.querySelector('.lista');
const btnConsejo =  document.querySelector('#btnConsejo');
const mensaje =  document.querySelector('#mensaje');

console.log({entradaTareas});


function agregarTarea(){
    
    if(entradaTareas.value.trim().length < 1){
        console.log('No puede estar vacío');
    }else{
        const tipoTarea = tareas.value;
        const tareaLista = document.createElement('LI');
        tareaLista.textContent = `${entradaTareas.value} - ${tipoTarea}`;
        const btnEliminar = document.createElement('BUTTON');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('eliminarLista');

        tareaLista.appendChild(btnEliminar);
        lista.appendChild(tareaLista);

    }
    
}

botonAnadir.addEventListener('click', agregarTarea);
