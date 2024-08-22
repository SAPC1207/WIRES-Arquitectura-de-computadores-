function mostrarBiografia() {
    ocultarSecciones();
    document.getElementById('biografia').classList.add('visible');
}

function mostrarPracticas() {
    ocultarSecciones();
    document.getElementById('practicas').classList.add('visible');
}

function mostrarTrabajoFinal() {
    ocultarSecciones();
    document.getElementById('trabajo-final').classList.add('visible');
}

function ocultarSecciones() {
    var secciones = document.getElementsByClassName('seccion');
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].classList.remove('visible');
    }
}
