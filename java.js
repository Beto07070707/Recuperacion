document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. LÓGICA DEL MENÚ HAMBURGUESA (Celulares)
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Si existen estos elementos en la página, activamos el clic
    if(menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            // Esto le pone y le quita la clase "activo" para que el menú entre y salga
            navMenu.classList.toggle('activo'); 
        });
    }

    // ==========================================
    // 2. EFECTO ONDA (RIPPLE) DEL BOTÓN DORADO
    // ==========================================
    const boton = document.getElementById('btnExplorar');

    // Verificamos si el botón existe (porque solo está en el index.html)
    if (boton) {
        boton.addEventListener('click', function(evento) {
            
            // Calculamos dónde hizo clic el usuario
            let x = evento.clientX - evento.target.getBoundingClientRect().left;
            let y = evento.clientY - evento.target.getBoundingClientRect().top;

            // Creamos la "onda"
            let onda = document.createElement('span');
            onda.style.left = x + 'px';
            onda.style.top = y + 'px';
            onda.classList.add('onda'); 

            // Metemos la onda al botón
            this.appendChild(onda);

            // Borramos la onda después de casi 1 segundo para no acumular basura en el código
            setTimeout(() => {
                onda.remove();
            }, 800);
        });
    }

});