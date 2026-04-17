class World {
    character = new Character();
    level = level1;
    canvas;
    keyboard;
    ctx;
    cameraX = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setCharacterWorld();
        this.draw();
        this.checkCollisions();
    }

    setCharacterWorld() {
        this.character.world = this;
        this.character.startAnimation();
    }

    checkCollisions(){
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy)){
                    this.character.hit();
                    console.log("Collision with enemy, energy: " + this.character.energy);
                }
            });
            
        }, 1000);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.drawObjects(this.level.backgroundObjects);
        this.drawObjects(this.level.lights);
        this.drawObject(this.character);
        this.drawObjects(this.level.enemies);
        this.ctx.translate(-this.cameraX, 0);
        requestAnimationFrame(() => this.draw());
    }

    drawObject(object) {
        this.ctx.save();
        this.ctx.translate(object.x + object.width / 2, object.y + object.height / 2);

        if (object.otherDirection) {
            this.ctx.scale(-1, 1);
        }

        if (object.tiltAngle) {
            this.ctx.rotate(object.tiltAngle);
        }
        object.draw(this.ctx);
        object.drawFrame(this.ctx);
        
        this.ctx.stroke();
        this.ctx.restore();
    }

    drawObjects(objects) {
        objects.forEach(object => {
            this.drawObject(object);
        });
    }
}
