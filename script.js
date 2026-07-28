//words for generatorx50
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
//// Finds the Generate Word button so JavaScript can detect clicks
const button = document.querySelector(".generate-word-btn");
// Finds the text area where the generated word will appear
const title = document.querySelector(".word-title");
//when you click the button it selects a word/goes to a position
button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * words.length);
    title.textContent = words[randomIndex];
});
let codeWord = "";
const encryptButton = document.querySelector("#encrypt-btn");
const messageInput = document.querySelector("#message");
codeWord = words[randomIndex];
title.textContent = codeWord;