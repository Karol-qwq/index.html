document.getElementById("cifrarBtn").addEventListener("click", function() {
    const texto = document.getElementById("texto").value;
    const desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    const resultado = cifrarCesar(texto, desplazamiento);
    document.getElementById("resultado").innerText = resultado;
});

document.getElementById("descifrarBtn").addEventListener("click", function() {
    const texto = document.getElementById("texto").value;
    const desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    const resultado = cifrarCesar(texto, -desplazamiento);
    document.getElementById("resultado").innerText = resultado;
});

function cifrarCesar(str, desplazamiento) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            const base = (char >= 'a') ? 97 : 65;
            return String.fromCharCode(((code - base + desplazamiento + 26) % 26) + base);
        }
        return char;
    }).join('');
}
