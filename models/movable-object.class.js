class MovableObject extends DrawableObject {
    speed = 0.15;

    startMovingLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}
