const menuBtn = document.querySelector('.menu-btn');
const movil = document.querySelector('.menu-btn__movil');
//Menu
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

// Links
const navItems = document.querySelectorAll('.menu-nav__item');

let mostrarMenu = false;

menuBtn.addEventListener('click', alternarMenu);

function alternarMenu() {
    if (!mostrarMenu) {
        movil.classList.add('open');
        mostrarMenu = true; // Está abierto el menu

        // Menu
        nav.classList.add('open');
        menuNav.classList.add('open');

        //Items
        navItems.forEach(item => item.classList.add('open'));
    } else {
        movil.classList.remove('open');
        mostrarMenu = false;

        // Menu
        nav.classList.remove('open');
        menuNav.classList.remove('open');

        //Items
        navItems.forEach(item => item.classList.remove('open'));
    }
}

/************************************************************/
// Inicio, texto con parpadeo JavaScript / React / Angular
/************************************************************/

const textoSpan = document.querySelector(".texto");
//Para eliminar el parpadeo del cursor mientras escribimos
const cursorSpan = document.querySelector(".cursor");

// <!--"Diseño Web", "Desarrollo Web y App", "SEO", "Marketing Digital", "Wordpress"-->
const textoArray = ["JavaScript", "Diseño Web", "Angular", "SEO", "React", "Wordpress"];

const tiempoEscritura = 180; // Escribir letra
const tiempoBorrar = 150; // Borrar letra
const tiempoEspera = 1050; // Desde que escribe la palabra hasta que comienza a borrarla

let i = 0; // Indice del array, para saber la palabra por la que vamos
let c = 0; // Caracter de la palabra

/*function efectoMaquinaEscribir() {
    // Si el caracter es menor que los caracteres de la palabra, avanzamos
    if (c < textoArray[i].length) {
        if (!cursorSpan.classList.contains("parpadeo"))
            cursorSpan.classList.add("parpadear");
        textoSpan.textContent += textoArray[i].charAt(c);
        c++;
        setTimeout(efectoMaquinaEscribir, tiempoEscritura);
    } else {
        // Borrar
        cursorSpan.classList.remove("parpadeo");
        setTimeout(borrarCaracter, tiempoEspera);
    }
}

function borrarCaracter() {
    if (c > 0) { // Si sigue habiendo caracteres, seguimos borrando
        if (!cursorSpan.classList.contains("parpadeo"))
            cursorSpan.classList.add("parpadeo");
        textoSpan.textContent = textoArray[i].substring(0, c - 1);
        c--;
        setTimeout(borrarCaracter, tiempoBorrar);
    } else {
        cursorSpan.classList.remove("parpadeo");
        //efectoMaquinaEscribir
        i++; // Pasamos a la siguiente palabra
        if (i >= textoArray.length) // Si es mayor, o sea hemos llegado a la última, reiniciamos
            i = 0;
        setTimeout(efectoMaquinaEscribir, tiempoEscritura + 1100);
    }
}

// Llamamos a la función
document.addEventListener("DOMContentLoaded", function() {
    if (textoArray.length)
        setTimeout(efectoMaquinaEscribir, tiempoEspera);
});*/