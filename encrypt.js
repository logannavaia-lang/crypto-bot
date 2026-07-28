alert("Encrypt JS is working!");

const words = [
    "APPLE",
    "BANANA",
    "DRAGON",
    "FOREST",
    "MOUNTAIN",
    "OCEAN",
    "THUNDER",
    "SHADOW",
    "PHOENIX",
    "GALAXY",
    "LAPRAS",
    "COMET",
    "CASTLE",
    "TIGER",
    "EAGLE",
    "WIZARD",
    "ROCKET",
    "CRYSTAL",
    "VOLCANO",
    "PENGUIN",
    "SUNFLOWER",
    "HORIZON",
    "DIAMOND",
    "RIVER",
    "TORNADO",
    "JUNGLE",
    "LIGHTNING",
    "ANCHOR",
    "CANYON",
    "BLOSSOM",
    "PANTHER",
    "FALCON",
    "TEMPLE",
    "CIRCUIT",
    "METEOR",
    "NEBULA",
    "ORCHID",
    "SAPPHIRE",
    "WHISPER",
    "VORTEX",
    "HAMMER",
    "COMPASS",
    "COBRA",
    "LANTERN",
    "BREEZE",
    "EVEREST",
    "SPARROW",
    "EMBER",
    "AURORA",
    "CIPHER"
];

const alphabet = {
    "A": 1,
    "B": 2,
    "C": 3,
    "D": 4,
    "E": 5,
    "F": 6,
    "G": 7,
    "H": 8,
    "I": 9,
    "J": 10,
    "K": 11,
    "L": 12,
    "M": 13,
    "N": 14,
    "O": 15,
    "P": 16,
    "Q": 17,
    "R": 18,
    "S": 19,
    "T": 20,
    "U": 21,
    "V": 22,
    "W": 23,
    "X": 24,
    "Y": 25,
    "Z": 26
};

const generateButton = document.querySelector(".generate-word-btn");
const wordTitle = document.querySelector(".word-title");
const encryptButton = document.querySelector("#encrypt-btn");
const messageInput = document.querySelector("#message");
const output = document.querySelector("#encrypted-output");

let codeWord = "";


// Generate code word
generateButton.addEventListener("click", function () {

    const randomIndex = Math.floor(Math.random() * words.length);

    codeWord = words[randomIndex];

    wordTitle.textContent = "Code Word: " + codeWord;

});


// Encrypt message
encryptButton.addEventListener("click", function () {

    alert("Encrypt button clicked!");

    if (codeWord === "") {

        alert("Please generate a code word first!");
        return;

    }

    const message = messageInput.value.toUpperCase();

    alert("Message: " + message);

    let repeatedCodeWord = codeWord;

    while (repeatedCodeWord.length < message.length) {

        repeatedCodeWord += codeWord;

    }

    repeatedCodeWord = repeatedCodeWord.slice(0, message.length);

    let encryptedMessage = "";

    for (let i = 0; i < message.length; i++) {

        const messageChar = message[i];
        const codeWordChar = repeatedCodeWord[i];

        if (alphabet[messageChar] && alphabet[codeWordChar]) {

            const messagePosition = alphabet[messageChar];
            const codeWordPosition = alphabet[codeWordChar];

            const encryptedPosition =
                (messagePosition + codeWordPosition - 1) % 26 + 1;

            const encryptedChar = Object.keys(alphabet)
                .find(letter => alphabet[letter] === encryptedPosition);

            encryptedMessage += encryptedChar;

        } else {

            encryptedMessage += messageChar;

        }

    }

    alert("Final encrypted text: " + encryptedMessage);

output.textContent = encryptedMessage;
});
