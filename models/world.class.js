class World{
    character = new Character();
    level = level1;
    canvas;
    keyboard;
    ctx;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.lights);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemys);
        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(() => this.draw());

    }
    addToMap(object){
        if(object.otherDirection){
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * -1;
        }

        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);

        if(object.otherDirection){
            object.x = object.x * -1;
            this.ctx.restore();
        }
    }

    addObjectsToMap(objects){
        objects.forEach(object => {
            this.addToMap(object);
        }); 
    }
}