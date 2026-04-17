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
    swimAcceleration = 0.4;
    waterDrag = 0.9;
    moveLeftInterval = null;
    energy = 100;
    lastHitTime = 0;

    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(imagePaths) {
        imagePaths.forEach((path) => {
            const img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Fish) {
            const hitboxX = -this.width / 2 + this.offset.left;
            const hitboxY = -this.height / 2 + this.offset.top;
            const hitboxWidth = this.width - this.offset.left - this.offset.right;
            const hitboxHeight = this.height - this.offset.top - this.offset.bottom;

            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "blue";
            ctx.rect(hitboxX, hitboxY, hitboxWidth, hitboxHeight);
        }
    }

    isColliding(object) {
        return this.x + this.width - this.offset.right > object.x + object.offset.left &&
            this.y + this.height - this.offset.bottom > object.y + object.offset.top &&
            this.x + this.offset.left < object.x + object.width - object.offset.right &&
            this.y + this.offset.top < object.y + object.height - object.offset.bottom;
    }

    playAnimation(images) {
        const i = this.currentImage % images.length;
        const path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    startMovingLeft() {
        if (this.moveLeftInterval) {
            return;
        }

        this.moveLeftInterval = setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    hit(){
        this.energy -= 5;
        if(this.energy < 0){
            this.energy = 0;
        } else {
            this.lastHitTime = new Date().getTime();
        }
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHitTime;
        timepassed = timepassed / 1000;
        return timepassed < 1; 
    }

    isDead(){
        return this.energy == 0;
    }
}
