function processMessage() {
  var inputBox = document.getElementById("inputBox");
  var responseBox = document.getElementById("responseBox");
  var encryptRadio = document.getElementById("encryptRadio");
  var decryptRadio = document.getElementById("decryptRadio");

  var message = inputBox.value;
  var processedMessage = "";

  if (encryptRadio.checked) {
    processedMessage = encryptText(message); // Función de cifrado (debe implementarse)
  } else if (decryptRadio.checked) {
    processedMessage = decryptText(message); // Función de descifrado (debe implementarse)
  }

  inputBox.value = "";
  responseBox.innerHTML =
    "<p class='response-text'>" + processedMessage + "</p>";
}

function copyResponse() {
  var responseBox = document.getElementById("responseBox");
  var responseText = responseBox.innerText;

  responseBox.value = "";
  if (responseText) {
    navigator.clipboard.writeText(responseText);
    alert("Respuesta copiada al portapapeles");
  }
}

function encryptText(text) {
  // Implementa aquí tu lógica de cifrado
  // Retorna el texto cifrado

  /*
  La letra "e" es convertida para "enter"
  La letra "i" es convertida para "imes"
  La letra "a" es convertida para "ai"
  La letra "o" es convertida para "ober"
  La letra "u" es convertida para "ufat"
          */
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  text = text.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (text.includes(matrizCodigo[i][0])) {
      text = text.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return text;
  //return text.split("").reverse().join("");
}

function decryptText(text) {
  // Implementa aquí tu lógica de descifrado
  // Retorna el texto descifrado
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  text = text.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (text.includes(matrizCodigo[i][1])) {
      text = text.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return text;

  //return text.split("").reverse().join("");
}
