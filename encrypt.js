// 50 possible words for the code word generator
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
// Alphabet for converting letters into positions
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

// Finds the Generate Word button
const button = document.querySelector(".generate-word-btn");

// Finds where the generated word appears
const title = document.querySelector(".word-title");

// Stores the generated code word
let codeWord = "";


// When the Generate Word button is clicked
button.addEventListener("click", function () {

    // Picks a random position in the word list
    const randomIndex = Math.floor(Math.random() * words.length);

    // Saves the chosen word
    codeWord = words[randomIndex];

    // Displays the word on the page
    title.textContent = codeWord;
});

// Finds the Encrypt button
const encryptButton = document.querySelector("#encrypt-btn");

// Finds the user's message input
const messageInput = document.querySelector("#message");


// When the Encrypt button is clicked
encryptButton.addEventListener("click", function () {

    // Gets the user's message
    const message = messageInput.value.toUpperCase();

    // Starts the repeated code word
    let repeatedCodeWord = codeWord;

    // Repeats the code word until it matches the message length
    while (repeatedCodeWord.length < message.length) {
        repeatedCodeWord += codeWord;
    }

    // Makes sure the code word is not longer than the message
    repeatedCodeWord = repeatedCodeWord.slice(0, message.length);


    // Stores the encrypted message
    let encryptedMessage = "";


    // Goes through each letter in the message
    for (let i = 0; i < message.length; i++) {

        const messageChar = message[i];
        const codeWordChar = repeatedCodeWord[i];


        // Checks if both characters are letters
        if (alphabet[messageChar] && alphabet[codeWordChar]) {

            // Converts letters into numbers
            const messagePosition = alphabet[messageChar];
            const codeWordPosition = alphabet[codeWordChar];


            // Vigenere cipher math
            const encryptedPosition =
                (messagePosition + codeWordPosition - 1) % 26 + 1;


            // Converts number back into a letter
            const encryptedChar = Object.keys(alphabet)
                .find(key => alphabet[key] === encryptedPosition);


            // Adds encrypted letter
            encryptedMessage += encryptedChar;

        } else {

            // Keeps spaces or symbols
            encryptedMessage += messageChar;
        }
    }


    // Shows the encrypted message
    messageInput.value = encryptedMessage;

});

    

