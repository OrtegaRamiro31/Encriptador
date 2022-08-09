/* Constantes DOM*/
const texto = document.querySelector(".entrada-texto");
const btnEncriptar = document.querySelector(".boton-encriptar");
const btnDesencriptar = document.querySelector(".boton-desencriptar");
const btnCopiar = document.querySelector(".boton-copy");
const contenedorResultado = document.querySelector(".encriptacion");
const textoObtenido = document.querySelector(".texto-obtenido");
const mensajeVacio = document.querySelector(".mensajevacio");

/* Variables */
let elementosVacios = document.querySelector(".texto-vacio");
let textoEncriptado = "";
let textoDesencriptado = "";

/* Por ca click en el body buscamos un elemento con la clase texto-obtenido */
/* Fue colocado para hacer uso del párrafo encriptado/desencriptado y agregarle
 ** también la función de copiar. Esto para poder copiar ya sea desde el botón
 ** con dicha función o clickeando simplemente el párrafo.
 */
document.querySelector("body").addEventListener("click", function (e) {
  if (e.target.classList == "texto-obtenido") {
    copiarTexto();
  }
});
/* Eventos para botones de encriptar y desencriptar */
btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiarTexto);

btnCopiar.style.visibility = "hidden";

/*************************** Función de desencriptación ***************************/
function desencriptar() {
  /* Reseteamos el boton de copiar con la palabra Copiar */
  btnCopiar.innerHTML = "Copiar";
  if ((btnCopiar.style.visibility = "hidden")) {
    btnCopiar.style.visibility = "visible";
  }
  elementosVacios = document.querySelector(".texto-vacio");
  mensajeVacio.innerHTML = "";
  textoDesencriptado = "";

  /* Reemplazamos las letras con las que encriptamos las vocales */
  textoDesencriptado = texto.value
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  /* Mostramos el texto desencriptado en el lugar correspondiente */
  mensajeVacio.innerHTML = mostrarContenido(textoDesencriptado);
}

/*************************** Función de encriptación ***************************/
function encriptar() {
  /* Reseteamos el boton de copiar con la palabra Copiar */
  btnCopiar.innerHTML = "Copiar";
  if ((btnCopiar.style.visibility = "hidden")) {
    btnCopiar.style.visibility = "visible";
  }

  /* Obtenemos el elemento del DOM */
  elementosVacios = document.querySelector(".texto-vacio");

  /* Reseteamos el textoEncriptado  */
  textoEncriptado = "";

  /* Obtenemos el contenido del textarea */
  let contenidoTexto = Array.from(texto.value);

  /* Creamos ciclo for para recorrer la cadena ingresada por el usuario. */
  for (let i = 0; i < contenidoTexto.length; i++) {
    /* Cada letra que corresponde a una voocal se sustituye por una palabra correspondiente para la encriptación */
    textoEncriptado += encriptarLetra(contenidoTexto[i]);
  }
  /* Mostramos el texto encriptado en el lugar correspondiente */
  mensajeVacio.innerHTML = mostrarContenido(textoEncriptado);
}

/* Función que retorna un string que contiene un elemento párrafo con la estructura HTML.
 ** Pasamos el un argumento, puede ser el texto encriptado o desencriptado.
 */
function mostrarContenido(texto) {
  return `<p class="texto-obtenido">${texto}</p>`;
}

/* Función que contiene un Switch y usa una letra como parámetro.
 ** Es usada en la encriptación para el momento en el que se recorre la cadena del usuario.
 ** Cada coincidencia de una letra se reemplaza con una palabra, por ejemplo, la letra "a" se reemplaza con "ai".
 */

function encriptarLetra(letra) {
  switch (letra) {
    case "a":
      return "ai";
    case "e":
      return "enter";
    case "i":
      return "imes";
    case "o":
      return "ober";
    case "u":
      return "ufat";
    default:
      return letra;
  }
}

/* Función para copiar el texto del section de resultado de encriptación/desencriptación */
function copiarTexto() {
  /* Seleccionamos del DOM el texto obtenido */
  const text = document.querySelector(".texto-obtenido").innerHTML;

  /* Copiamos el texto al portapapeles */
  navigator.clipboard.writeText(text);

  /* Cambiamos el texto del botón de "Copiar" a "Copiado" */
  btnCopiar.innerHTML = "Copiado";

  /* Regresamos el texto del botón a "Copiar" después de 3 segundos */
  setTimeout(() => (btnCopiar.innerHTML = "Copiar"), 3000);
}
