
// VARIABLES
const encriptar = document.querySelector('#btn-encriptar');  // boton para encriptar el mensaje
const desencriptar = document.querySelector('#btn-desencriptar');  // boton para desencriptar
const texto = document.querySelector('#texto-encriptar') // Texto para encriptar  
const card = document.querySelector('.card--contenedor'); // contenedor del texto ya encriptado
const cardMensaje = document.querySelector('.card--mensaje'); // texto encriptado
const cardTitulo = document.querySelector('.card--titulo');  // titulo del contenedor sin texto a encriptar
const copiar = document.querySelector('#btn-copiar') // botón copiar texto encriptado
const textoCopiar = document.querySelector('#texto-copiar');  // texto para el mensaje de copiar
const img = document.querySelector('#img-buscar'); // selector de la imagen al inicio de la app
const mensajeError = document.querySelector('.error'); // mensaje de error 


//  Función click encriptar 
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
        cardMensaje.textContent = encriptarMensaje( texto.value );
        texto.value = "";
    }
    
    
})

// Botón para desencriptar mensajes

desencriptar.addEventListener('click', function(){
    
    if( texto.value == '' ) {
        mensajeError.textContent = 'Error: No puedes desencriptar un elemento vacío'
        setTimeout(() => {
            mensajeError.textContent = '';
        }, 2000);
    }else {
        agregarClase(cardTitulo, 'hide--item');
        agregarClase(img, 'hide--item');
        removerClase(img, 'mostrar');
        removerClase(copiar, 'hide--item');
        cardMensaje.textContent = desencriptarMensaje( texto.value );;
        texto.value = "";
        
    }
})


// copiar texto encriptado

copiar.addEventListener('click', function() {
    let text = cardMensaje.textContent;

    navigator.clipboard.writeText(text)
    .then(() => {
        copiar.innerHTML = '¡copiado!'
    }, err => {
        mensajeError.textoContent = "Lo sentimos, algo no funcionó correctamente"
    });
})


// Función para agregar clase css a los estilos 

function agregarClase(nombre,clase) {

    return nombre.classList.add(`${clase}`)
}

// función para remover las clases css a los estilos

function removerClase(nombre,clase){
    
    return nombre.classList.remove(`${clase}`);
}

// Función para encriptar el mensaje

function encriptarMensaje( mensaje ) {
   let resultado = '';
   for (const letras of mensaje ){
       resultado += codificar(letras);
   }
   return resultado
}

// función para desencriptar el mensaje
function desencriptarMensaje( mensaje ) {
    
    
    let resultado = ''
    for (let i = 0; i < mensaje.length; i++) {
        switch( mensaje[i] ){
            case 'a': 
            if (mensaje[i + 1] === 'i') { resultado += 'a'; i += 1; }
            else { return false; }
            break;
            case 'e': 
            if (mensaje[i + 4] === 'r') { resultado += 'e'; i += 4; }
            else { return false; }
            break;
            case 'i': 
            if (mensaje[i + 3] === 's') { resultado += 'i'; i += 3; }
            else { return false; }
            break;
            case 'o': 
            if (mensaje[i + 3] === 'r') { resultado += 'o'; i += 3; }
            else { return false; }
            break;
            case 'u': 
            if (mensaje[i + 3] === 't') { resultado += 'u'; i += 3; }
            else { return false; }
            break;
            default:
            resultado += mensaje[i];
        }
    }
    return resultado;
}
    

// función para codificar el mensaje según nuestros parametros
function codificar( mensaje ) {
   switch( mensaje ) {
       case 'a' : return 'ai';
       case 'e' : return 'enter';
       case 'i' : return 'imes';
       case 'o' : return 'ober';
       case 'u' : return 'ufat';
       default  : return mensaje;
   }
}

