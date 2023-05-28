const text_area = document.querySelector("#text-area")
const output = document.querySelector("#output")

//MANEJO PARA LA PERDIDA Y ENTRADA DE FOCO PARA EL TEXT AREA
text_area.addEventListener("focus", function () {
   text_area.style.backgroundImage = "none";
 
})

text_area.addEventListener('blur', function () {
  if (text_area.value === '') {
    text_area.style.backgroundImage = "url('../img/fondo_input.png')";
  }
}
)


//logica para el encriptador y desencriptador

const substitutionMap = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
};

// Función para encriptar texto
function encriptar(texto) {
  return [...texto].reduce((textoEncriptado, caracter) => {
    const caracterEncriptado = substitutionMap[caracter.toLowerCase()] || caracter;
    return textoEncriptado + caracterEncriptado;
  }, '');
}

// Función para desencriptar texto
function desencriptar(textoEncriptado) {
  const reverseSubstitutionMap = Object.fromEntries(
    Object.entries(substitutionMap).map(([key, value]) => [value, key])
  );

  return textoEncriptado.replace(/enter|imes|ai|ober|ufat/gi, match => reverseSubstitutionMap[match]);
}


const encriptar_button = document.querySelector("#encriptar")
encriptar_button.addEventListener("click",show_message_encript)

function get_message(){
  return text_area.value
}


function show_message_encript(){
  let message=get_message()
  mensaje_encriptado = encriptar(message)

  if(text_area.value != ""){

  
  output.style.backgroundImage="none"
  output.textContent = mensaje_encriptado
  }

}

desencriptar_button = document.querySelector("#desencriptar")
desencriptar_button.addEventListener("click",show_message_desencript)

function show_message_desencript(){
  let message=get_message()
  mensaje_desencriptado = desencriptar(message)

  if(text_area.value != ""){

  output.style.backgroundImage="none"
  output.textContent = mensaje_desencriptado
  }
}
