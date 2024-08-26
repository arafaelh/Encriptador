function encriptar() {
    let texto = document.getElementById("input-text").value.toLowerCase();
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    let texto = document.getElementById("input-text").value.toLowerCase();
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(resultado) {
    let outputSection = document.querySelector(".output-section");
    let outputPlaceholder = document.querySelector(".output-placeholder");
    let outputText = document.getElementById("output-text");

    if (resultado) {
        outputPlaceholder.style.display = "none";
        outputText.style.display = "block";
        outputText.value = resultado;
    } else {
        outputPlaceholder.style.display = "block";
        outputText.style.display = "none";
    }
}

function copiarTexto() {
    let texto = document.getElementById("output-text");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
