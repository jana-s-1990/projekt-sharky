class MovableObject extends DrawableObject {
    speed = 0.15;
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

    isColliding(object) {
        return this.x + this.width - this.offset.right > object.x + object.offset.left &&
            this.y + this.height - this.offset.bottom > object.y + object.offset.top &&
            this.x + this.offset.left < object.x + object.width - object.offset.right &&
            this.y + this.offset.top < object.y + object.height - object.offset.bottom;
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
