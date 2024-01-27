const input = document.querySelector('#text-input');

const encriptLetters = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' }
const decriptLetters = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' }

function handleEncript() {

    let encriptedText = input.value.split('').map((letter) => {
        return encriptLetters[letter] ? encriptLetters[letter] : letter;

    }).join('');

    console.log(encriptedText)
}

function handleDecript() {
    let decriptedText = input.value;
    for (let word in decriptLetters) {
        if (decriptedText.search(word) !== -1) {
            decriptedText = decriptedText.replace(word, decriptLetters[word]);
        }
    }
    console.log(decriptedText);
}