class MovableObject {
    x = 10;
    y = 230;
    img;
    height = 80;
    width = 80;
    speed = 0.15;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;
    speedY = 0;
    swimmAcceleration = 0.4;
    waterDrag = 0.9;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnnimation(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        console.log("move right");
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}