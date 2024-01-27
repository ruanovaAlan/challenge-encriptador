const input = document.querySelector('#text-input');
const output = document.getElementById('output');


const encriptLetters = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' }
const decriptLetters = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' }

function handleEncript() {
    if (input.value == '') {
        showToast('📝 Input vacío, ingresa un mensaje', '🔴');
    } else {
        let encriptedText = input.value.split('').map((letter) => {
            return encriptLetters[letter] ? encriptLetters[letter] : letter;

        }).join('');
        input.value = '';
        setOutput(encriptedText)
        showToast('🔒 Mensaje encriptado', '🟢')
    }
}

function handleDecript() {
    if (input.value == '') {
        showToast('📝 Input vacío, ingresa un mensaje', '🔴');
    } else {
        let encriptedWordsArray = input.value.split(' ');

        function replaceKeys(word) {
            let replaced = false;
            for (let key in decriptLetters) {
                if (word.includes(key)) {
                    word = word.replace(key, decriptLetters[key]);
                    replaced = true;
                }
            }
            return replaced ? replaceKeys(word) : word;
        }

        let decriptedText = encriptedWordsArray.map(replaceKeys).join(' ');

        input.value = '';
        setOutput(decriptedText)
        showToast('🔓 Mensaje desencriptado', '🟢')
    }
}

function setOutput(message = '') {

    let emptyOutput = `<p class="fw-bold opacity-75 m-0">Ningún mensaje fue encontrado</p>
    <p class="opacity-50">Ingresa el texto que desees encriptar o desencriptar</p>`

    let outputMessage = `<p class="fw-bold opacity-75 m-0">${message}</p>`

    output.innerHTML = `
        <div class="p-4">
            ${output.innerText == '' ? emptyOutput : outputMessage}
        </div>
        `
}

setOutput();


