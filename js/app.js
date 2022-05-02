
const encriptar = document.querySelector('.btn--activo');
const desencriptar = document.querySelector('#btn-desencriptar');
const texto = document.querySelector('#texto-encriptar')
const card = document.querySelector('.card--contenedor');
const cardMensaje = document.querySelector('.card--mensaje');
const cardTitulo = document.querySelector('.card--titulo');
const copiar = document.querySelector('#btn-copiar')
const textoCopiar = document.querySelector('#texto-copiar');
const img = document.querySelector('#img-buscar');
const mensajeError = document.querySelector('.error');

// Cambio de vocales
const a = 'ai';
const e = 'enter';
const i = 'imes';
const o = 'ober';
const u = 'ufat';
// Cambio de encriptamiento
const ai = 'a';
const enter = 'e';
const imes = 'i';
const ober = 'o';
const ufat = 'u';


encriptar.addEventListener('click', function() {

    if( texto.value == "" ){
        mensajeError.textContent = 'Error: No puedes encriptar un elemento vacío'
        setTimeout(() => {
            mensajeError.textContent = '';
        }, 2000);
    }else {
        agregarClase(card, 'flex--vertical');
        agregarClase(cardTitulo, 'hide--item');
        agregarClase(img, 'hide--item');
        removerClase(img, 'mostrar');
        removerClase(copiar, 'hide--item');
        encriptarMensaje( texto.value );
    }
    
    
})

desencriptar.addEventListener('click', function(){
    
    if( texto.value == '' ) {
        mensajeError.textContent = 'Error: No puedes desencriptar un elemento vacío'
        setTimeout(() => {
            mensajeError.textContent = '';
        }, 2000);
    }else {
        agregarClase(cardTitulo, 'hide--item');
        desencriptarMensaje( texto.value );
        agregarClase(img, 'hide--item');
        removerClase(img, 'mostrar');
        removerClase(copiar, 'hide--item');
    }
})



copiar.addEventListener('click', function() {
    let text = cardMensaje.textContent;

    navigator.clipboard.writeText(text)
    .then(() => {
        copiar.innerHTML = '¡copiado!'
    }, err => {
        mensajeError.textoContent = "Lo sentimos, algo no funcionó correctamente"
    });



    
})

function agregarClase(nombre,clase) {

    return nombre.classList.add(`${clase}`)
}

function removerClase(nombre,clase){
    
    return nombre.classList.remove(`${clase}`);
}
function encriptarMensaje( mensaje ) {
    mensaje = mensaje.replace(/a/g, a);
    mensaje = mensaje.replace(/e/g, e);
    mensaje = mensaje.replace(/i/g, i);
    mensaje = mensaje.replace(/o/g, o);
    mensaje = mensaje.replace(/u/g, u);
    cardMensaje.textContent = mensaje;
    texto.value = "";
}

function desencriptarMensaje( mensaje ) {

    mensaje = mensaje.replace(/ai/g, ai);
    mensaje = mensaje.replace(/enter/g, enter);
    mensaje = mensaje.replace(/imes/g, imes);
    mensaje = mensaje.replace(/ober/g, ober);
    mensaje = mensaje.replace(/ufat/g, ufat);
    cardMensaje.textContent = mensaje;
    texto.value = "";
}



