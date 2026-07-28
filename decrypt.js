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


// Finds the decrypt button
const decryptButton = document.querySelector("#decrypt-btn");

// Finds the user's message input
const messageInput = document.querySelector("#message");

// Finds the code word input
const codeWordInput = document.querySelector("#codeword");


// When decrypt button is clicked
decryptButton.addEventListener("click", function () {

    // Gets encrypted message
    const encryptedMessage = messageInput.value.toUpperCase();

    // Gets code word
    const codeWord = codeWordInput.value.toUpperCase();


    // Repeats code word
    let repeatedCodeWord = codeWord;


    while (repeatedCodeWord.length < encryptedMessage.length) {
        repeatedCodeWord += codeWord;
    }


    // Makes sure it is not longer than message
    repeatedCodeWord = repeatedCodeWord.slice(0, encryptedMessage.length);


    // Stores decrypted message
    let decryptedMessage = "";


    // Goes through each letter
    for (let i = 0; i < encryptedMessage.length; i++) {

        const encryptedChar = encryptedMessage[i];
        const codeWordChar = repeatedCodeWord[i];


        // Checks if both are letters
        if (alphabet[encryptedChar] && alphabet[codeWordChar]) {


            // Converts letters into numbers
            const encryptedPosition = alphabet[encryptedChar];
            const codeWordPosition = alphabet[codeWordChar];


            // Vigenere decrypt math
            const decryptedPosition =
                (encryptedPosition - codeWordPosition + 26 - 1) % 26 + 1;


            // Converts number back into letter
            const decryptedChar = Object.keys(alphabet)
                .find(key => alphabet[key] === decryptedPosition);


            // Adds decrypted letter
            decryptedMessage += decryptedChar;


        } else {

            // Keeps spaces/symbols
            decryptedMessage += encryptedChar;

        }
    }


    // Shows decrypted message
    messageInput.value = decryptedMessage;

});
