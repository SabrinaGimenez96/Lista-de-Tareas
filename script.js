const datoNumero = document.getElementById('datoNumero');
const datoDia = document.getElementById('datoDia');
const contenedorTareas = document.getElementById("contenedorTareas");

const obtenerDatos = () => {
    const dato = new Date();
    datoNumero.textContent = dato.toLocaleString('es', { day: 'numeric' });
    datoDia.textContent = dato.toLocaleString('es', { weekday: 'long' });
    
};

const agregarNuevaTarea = event => {
    event.preventDefault();
    const {value} = event.target.nombreTarea;
    if(!value) return;
    const tarea = document.createElement('div');
    tarea.classList.add('tarea');
    tarea.addEventListener('click', cambiarEstadoTarea)
    tarea.textContent = value;
    contenedorTareas.prepend(tarea);
    event.target.reset();
}

const cambiarEstadoTarea = event => {
    event.target.classList.toggle('done');
};

const ordenar = () => {
    const done = [];
    const toDo = [];
    contenedorTareas.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const tareasOrdenadas = () => {
    ordenar().forEach(el => contenedorTareas.appendChild(el))
}

obtenerDatos();

