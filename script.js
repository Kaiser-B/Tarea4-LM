

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
            btnConsejo.setAttribute('disabled', "true");
            btnConsejo.classList.add('deshabilitado');
            setTimeout(() => {
                btnConsejo.classList.remove('deshabilitado')
                btnConsejo.removeAttribute('disabled')
                mensaje.textContent = consejo.slip.advice;
            }, 1500)
        })
        .catch((error)=>{
            mensaje.classList.add('error-consejo');
            mensaje.textContent = "No se pudo obtener un consejo, inténtalo de nuevo";
        });
 }

/*  Quería probar si recordaba hacerlo con la función asíncrona ya que lo aprendí así,
    lo hacía así de forma automática pero de no practicar lo había olvidado.

async function consejoMotivacional() {
    
     try {
         const respuesta = await fetch('https://api.adviceslip.com/advice');
         const consejo = await respuesta.json();
         btnConsejo.setAttribute('disabled', "true");
         btnConsejo.classList.add('deshabilitado');
         setTimeout(() => {
             btnConsejo.classList.remove('deshabilitado')
             btnConsejo.removeAttribute('disabled')
             mensaje.textContent = consejo.slip.advice;
         }, 1500)
     } catch (error) {
        mensaje.classList.add('error-consejo');
        mensaje.textContent = "No se pudo obtener un consejo, inténtalo de nuevo";
     }

 }*/

botonAnadir.addEventListener('click', agregarTarea);
btnConsejo.addEventListener('click', consejoMotivacional);
