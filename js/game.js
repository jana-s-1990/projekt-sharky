let canvas;
let world;
let startbutton = document.getElementById("start-button");
let startMusicButton = document.getElementById("play-music");
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
        audioManager.toggleGameSound();
    } else {
        audioManager.startScreenMusic();
    }
    updateSoundButtonIcon();
}

function updateSoundButtonIcon(){
    let isSoundMuted = startgame
        ? audioManager.isMusicMuted && audioManager.areEffectsMuted
        : audioManager.isMusicMuted;

    if(isSoundMuted){
        startMusicButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
        startMusicButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }
}

function startGame(){
    let shouldPlayGameMusic = !audioManager.isMusicMuted;
    audioManager.areEffectsMuted = audioManager.isMusicMuted;

    audioManager.startClickSound();
    audioManager.stopStartScreenMusic();
    startgame = true;
    if(shouldPlayGameMusic){
        audioManager.startGameMusic();
    }

    document.getElementById("bubble-bg-startscreen").style.display = "none";
    document.getElementById("start-screen").style.display = "none"; 
    document.body.classList.add("no-light-animation");
    updateSoundButtonIcon();
    canvas = document.getElementById("canvas");
    canvas.style.display = "block";  
    init();
}

startMusicButton.addEventListener("click", toggleStartScreenMusic);    
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
