

const entradaTareas = document.querySelector('#entrada-tarea');
const tareas = document.querySelector('#tareas');
const botonAnadir =  document.querySelector('#btn-enviar');
const lista =  document.querySelector('.lista');
const btnConsejo =  document.querySelector('#btnConsejo');
const mensaje =  document.querySelector('#mensaje');

console.log({entradaTareas});


function agregarTarea(){
    
    if(entradaTareas.value.trim().length < 1){
        alert('Debes introducir alguna Tarea');
    }else{
        const tipoTarea = tareas.value;
        const tareaLista = document.createElement('LI');
        tareaLista.textContent = `${entradaTareas.value} - ${tipoTarea}`;
        const btnEliminar = document.createElement('BUTTON');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('btn-eliminar');

        tareaLista.appendChild(btnEliminar);
        lista.appendChild(tareaLista);

        entradaTareas.value = '';

        btnEliminar.addEventListener('click', ()=>{
            
            lista.removeChild(tareaLista);
        })

        tareaLista.addEventListener('click', ()=>{
            tareaLista.classList.add('tachada');
        })
    }
    
}

botonAnadir.addEventListener('click', agregarTarea);
