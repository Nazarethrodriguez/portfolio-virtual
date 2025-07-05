// olcultarProyecto();

// document.getElementById('calculadora').style.display = 'block'

function showProject(IdProyecto){
    const elementoVisible = document.querySelector('.proyectoVisible')
    if (elementoVisible) {
        elementoVisible.classList.replace('proyectoVisible','proyectoInvisible')
    }
    document.getElementById(IdProyecto).classList.replace('proyectoInvisible','proyectoVisible');
}




















        
        const header = document.querySelector("header")
        const main = document.querySelector("#sobre-mí > div");
        let ultimaPosicionScroll = window.scrollY;
        let headerOculto = false;
        let punto = main.offsetTop + main.offsetHeight; 
   

        window.addEventListener("scroll", () => {
            
            const posicionActual = window.scrollY;
            const bajarScroll = posicionActual > ultimaPosicionScroll;
            const colorFondoInicio = [255, 255, 255]; // blanco
            const colorFondoFinal = [219, 93, 173];   // mismo que el header
            const colorTextoInicio = [0, 0, 0];       // texto negro
            const colorTextoFinal = [219, 93, 173];  // texto blanco
            const rangoInicio = punto - 300; // más gradual
            const rangoFin = punto - 142;

            let progreso = 0;

            if (posicionActual >= rangoInicio && posicionActual <= rangoFin) {
                progreso = (posicionActual - rangoInicio) / (rangoFin - rangoInicio);
            } else if (posicionActual > rangoFin) {
                progreso = 1;
            } else {
                progreso = 0;
            }

            const fondoInterpolado = colorFondoInicio.map((c, i) =>
                Math.round(c + (colorFondoFinal[i] - c) * progreso)
            );

            main.style.backgroundColor = 'rgb(' + fondoInterpolado.join(',') + ')';
            const textoInterpolado = colorTextoInicio.map((c, i) =>
                Math.round(c + (colorTextoFinal[i] - c) * progreso)
            );
            const colorTexto = 'rgb(' + textoInterpolado.join(',') + ')';

            main.querySelectorAll("*:not(img)").forEach(el => {
                el.style.color = colorTexto;
            });

            const boton = main.querySelector(".boton-pdf");
            if (boton) {
                boton.style.borderColor = colorTexto;
                boton.style.backgroundColor = `rgba(${textoInterpolado.join(",")}, ${0.1 + 0.4 * progreso});`
            }

            const opacidad = 1 - Math.min((scrollY-210) / 550, 1); // Ajusta 500 para cambiar la velocidad
            document.querySelector('.git-hub').style.opacity = opacidad;
               
            ultimaPosicionScroll = posicionActual;
        });