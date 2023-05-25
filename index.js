
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
  
  // Ejemplo de uso
  const textoOriginal = 'Hola, esto es un ejemplo';
  const textoEncriptado = encriptar(textoOriginal);
  console.log('Texto encriptado:', textoEncriptado);
  
  const textoDesencriptado = desencriptar('fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!');
  console.log('Texto desencriptado:', textoDesencriptado);





const m_encriptar = document.querySelector(".encriptar")
m_encriptar.addEventListener("click",mostrar_mensaje_encriptado)

const denencriptar = document.querySelector(".denencriptar")
denencriptar.addEventListener("click",mostrar_mensaje_desencriptado)


function mostrar_mensaje_encriptado(){
  const mensaje = document.querySelector("#mensaje")
  let mensaje_encriptado = encriptar(mensaje.value)
  const mensaje_encr = document.querySelector("#m-desencriptar")

  mensaje_encr.value = mensaje_encriptado

}

function mostrar_mensaje_desencriptado(){
  const mensaje = document.querySelector("#mensaje")
  const mensaje_encr = document.querySelector("#m-desencriptar")
  let mensaje_encriptado = desencriptar(mensaje.value)

  mensaje_encr.value=mensaje_encriptado
  mensaje.value = mensaje_encr.value

}
