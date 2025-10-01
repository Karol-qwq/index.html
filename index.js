function cipher() {
    const inputText = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shift").value);
    const result = caesarCipher(inputText, shift);
    document.getElementById("result").innerText = result;
}

function decipher() {
    const inputText = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shift").value);
    const result = caesarCipher(inputText, -shift);
    document.getElementById("result").innerText = result;
}

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            const base = (char >= 'a') ? 97 : 65;
            return String.fromCharCode(((code - base + shift + 26) % 26) + base);
        }
        return char;
    }).join('');
}
