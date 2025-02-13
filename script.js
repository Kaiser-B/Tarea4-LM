

const entradaTareas = document.querySelector('#entrada-tarea');
const tareas = document.querySelector('#tareas');
const botonAnadir =  document.querySelector('#btn-enviar');
const lista =  document.querySelector('.lista');
const btnConsejo =  document.querySelector('#btn-consejo');
const mensaje =  document.querySelector('#mensaje');
const modalLoader = document.createElement('DIV');
const textoLoader = document.createElement('P');
const imgLoader = document.createElement('IMG');
const contenedor = document.querySelector('.contenedor');

modalLoader.classList.add('modal');
imgLoader.classList.add('imgLoader');
textoLoader.classList.add('textoLoader');

textoLoader.textContent = 'Añadiendo Tarea...';
imgLoader.setAttribute('src', 'loader.svg');

modalLoader.appendChild(textoLoader);
modalLoader.appendChild(imgLoader);


function agregarTarea(){
    
    if(entradaTareas.value.trim().length < 1){
        alert('Debes introducir alguna Tarea');
    }else{
        contenedor.appendChild(modalLoader);
        const tipoTarea = tareas.value;
        const tareaLista = document.createElement('LI');
        tareaLista.textContent = `${entradaTareas.value} - ${tipoTarea}`;
        const btnEliminar = document.createElement('BUTTON');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('btn-eliminar');

        
        setTimeout(() => {
            tareaLista.appendChild(btnEliminar);
            lista.appendChild(tareaLista);
            contenedor.removeChild(modalLoader);
        }, 1500);

        entradaTareas.value = '';

        btnEliminar.addEventListener('click', ()=>{
            
            lista.removeChild(tareaLista);
        })

        tareaLista.addEventListener('click', ()=>{
            tareaLista.classList.add('tachada');
        })
    }
    
}

function consejoMotivacional(){

    fetch('https://api.adviceslip.com/advice')
    .then(respuesta=> respuesta.json())
    .then(consejo => {
        mensaje.textContent = consejo.slip.advice;})
    .catch((error)=>{
        console.error("Error", error)
    });

}

botonAnadir.addEventListener('click', agregarTarea);
btnConsejo.addEventListener('click', consejoMotivacional);
