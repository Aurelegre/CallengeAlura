function encriptar(){
    let parrafo = document.getElementById("texto").value;
    let salida = document.querySelector("#encriptado")
    let textoCifrado = parrafo.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    salida.innerHTML = textoCifrado;
}

function desencriptar(){
    let parrafo = document.getElementById("texto").value;
    let salida = document.querySelector("#encriptado");
    var textoCifrado = parrafo.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    salida.innerHTML = textoCifrado;
}
 
function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }
