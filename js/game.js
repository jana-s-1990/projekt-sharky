let canvas;
let world;
let startbutton = document.getElementById("start-button");
let startMusicButton = document.getElementById("play-music");
let effectsButton = document.getElementById("play-effects");
let audioManager = new AudioManager();
let keyboard = new Keyboard();
let startgame = false;

function init(){
    initLevel();
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard, audioManager);
}

function toggleStartScreenMusic(){
    if(startgame){
        audioManager.toggleGameMusic();
    } else {
        audioManager.startScreenMusic();
    }
    updateMusicButtonIcon();
}

function updateMusicButtonIcon(){
    if(audioManager.isMusicMuted){
        startMusicButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
        startMusicButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }
}

function toggleEffects(){
    audioManager.toggleEffects();
    updateEffectsButtonIcon();
}

function updateEffectsButtonIcon(){
    if(audioManager.areEffectsMuted){
        effectsButton.innerHTML = '<i class="fa-solid fa-wand-magic"></i>';
    } else {
        effectsButton.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i>';
    }
}

function startGame(){
    let shouldPlayGameMusic = audioManager.playSound;

    audioManager.startClickSound();
    audioManager.stopStartScreenMusic();
    startgame = true;
    if(shouldPlayGameMusic){
        audioManager.startGameMusic();
    }

    document.getElementById("bubble-bg-startscreen").style.display = "none";
    document.getElementById("start-screen").style.display = "none"; 
    document.body.classList.add("no-light-animation");
    effectsButton.classList.remove("hidden");
    canvas = document.getElementById("canvas");
    canvas.style.display = "block";  
    init();
}

startMusicButton.addEventListener("click", toggleStartScreenMusic);    
effectsButton.addEventListener("click", toggleEffects);    
startbutton.addEventListener("click", startGame);

window.addEventListener("keydown", (e) => {
    keyboard.lastKeyPress = Date.now();
    if(e.key == "ArrowRight"){
        keyboard.RIGHT = true;
    }
    if(e.key == "ArrowLeft"){
        keyboard.LEFT = true;
    }
    if(e.key == "ArrowUp"){
        keyboard.UP = true;
    }
    if(e.key == "ArrowDown"){
        keyboard.DOWN = true;
    }
    if(e.key == " "){
        keyboard.SPACE = true;
    }
})

window.addEventListener("keyup", (e) => {
    if(e.key == "ArrowRight"){
        keyboard.RIGHT = false;
    }
    if(e.key == "ArrowLeft"){
        keyboard.LEFT = false;
    }
    if(e.key == "ArrowUp"){
        keyboard.UP = false;
    }
    if(e.key == "ArrowDown"){
        keyboard.DOWN = false;
    }
    if(e.key == " "){
        keyboard.SPACE = false;
    }
})
