// Esperamos a que todo el HTML cargue primero
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleccionamos el botón usando su ID
    const boton = document.getElementById('btnExplorar');

    // Verificamos que el botón exista en la página actual para evitar errores
    if (boton) {
        // 2. Le decimos que escuche cada vez que alguien haga "clic"
        boton.addEventListener('click', function(evento) {
            
            // Calculamos en qué parte exacta del botón hizo clic el usuario
            let x = evento.clientX - evento.target.getBoundingClientRect().left;
            let y = evento.clientY - evento.target.getBoundingClientRect().top;

            // Creamos un elemento <span> que será nuestra "onda"
            let onda = document.createElement('span');
            onda.style.left = x + 'px';
            onda.style.top = y + 'px';
            onda.classList.add('onda'); // Usamos la clase CSS que ya creaste

            // Metemos la onda dentro del botón
            this.appendChild(onda);

            // Borramos la onda después de 800 milisegundos
            setTimeout(() => {
                onda.remove();
            }, 800);
        });
    }
});