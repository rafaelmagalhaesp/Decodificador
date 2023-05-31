window.onload = function() {
  var textarea = document.getElementById("campo");
  textarea.focus();
}

function substituirVogais(texto) {
  var novoTexto = "";
  for (var i = 0; i < texto.length; i++) {
    var letra = texto[i];
    switch (letra) {
      case "a":
        novoTexto += "ai";
        break;
      case "e":
        novoTexto += "enter";
        break;
      case "i":
        novoTexto += "imes";
        break;
      case "o":
        novoTexto += "ober";
        break;
      case "u":
        novoTexto += "ufat";
        break;
      default:
        novoTexto += letra;
        break;
      
    }
  }
  return novoTexto;
}

function criptografar() {
  var campo = document.getElementById("campo").value;
  var saida = document.getElementById("saida");
  var imagem = document.getElementById("imagem");
  var nenhumaMsg = document.querySelector(".msg");
  var botaoCopiar = document.querySelector(".botao-copiar");

  imagem.style.display = "none";
  saida.style.display = "block";
  saida.style.textTransform = "lowercase";
  nenhumaMsg.style.display = "none";
  saida.value = substituirVogais(campo);

  botaoCopiar.style.display = "block";
}

function descriptografar() {
  var campo = document.getElementById("campo").value;
  var saida = document.getElementById("saida");
  var imagem = document.getElementById("imagem");
  var nenhumaMsg = document.querySelector(".msg");
  var botaoCopiar = document.querySelector(".botao-copiar");

  var textoCriptografado = saida.value || campo;

  var textoDescriptografado = textoCriptografado.replace(/ufat/g, "u");
  textoDescriptografado = textoDescriptografado.replace(/ober/g, "o");
  textoDescriptografado = textoDescriptografado.replace(/imes/g, "i");
  textoDescriptografado = textoDescriptografado.replace(/enter/g, "e");
  textoDescriptografado = textoDescriptografado.replace(/ai/g, "a");
  

  if (saida) {
    imagem.style.display = "none";
    saida.style.display = "block";
    nenhumaMsg.style.display = "none";
    saida.value = textoDescriptografado;
    botaoCopiar.style.display = "block";
  }
}

function copiarTexto() {
  var saida = document.getElementById("saida");
  saida.select();
  document.execCommand("copy");
}
  

  