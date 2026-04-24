let canvas;
let world;
let startbutton = document.getElementById("start-button");

let keyboard = new Keyboard();

function init(){
    initLevel();
    canvas = document.getElementById("canvas");
    world = new World(canvas ,keyboard);
}

startbutton.addEventListener("click", () => {
    document.getElementById("start-screen").style.display = "none"; 
    canvas = document.getElementById("canvas");
    canvas.style.display = "block";  
    init();
});

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