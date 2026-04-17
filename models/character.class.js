class Character extends MovableObject{
    height = 180;
    width = 180;

    IMAGES_IDLE = [
            "img/1.Sharkie/1.IDLE/1.png",
            "img/1.Sharkie/1.IDLE/2.png",   
            "img/1.Sharkie/1.IDLE/3.png",
            "img/1.Sharkie/1.IDLE/4.png",
            "img/1.Sharkie/1.IDLE/5.png",
            "img/1.Sharkie/1.IDLE/6.png",
            "img/1.Sharkie/1.IDLE/7.png",
            "img/1.Sharkie/1.IDLE/8.png",   
            "img/1.Sharkie/1.IDLE/9.png",
            "img/1.Sharkie/1.IDLE/10.png",
            "img/1.Sharkie/1.IDLE/11.png",
            "img/1.Sharkie/1.IDLE/12.png",
            "img/1.Sharkie/1.IDLE/13.png",
            "img/1.Sharkie/1.IDLE/14.png",   
            "img/1.Sharkie/1.IDLE/15.png",
            "img/1.Sharkie/1.IDLE/16.png",
            "img/1.Sharkie/1.IDLE/17.png",
            "img/1.Sharkie/1.IDLE/18.png",
    ];

    IMAGES_SWIMM = [
            "img/1.Sharkie/3.Swim/1.png",
            "img/1.Sharkie/3.Swim/2.png",
            "img/1.Sharkie/3.Swim/3.png",
            "img/1.Sharkie/3.Swim/4.png", 
            "img/1.Sharkie/3.Swim/5.png",
            "img/1.Sharkie/3.Swim/6.png",  
    ];
    world;
    speed = 10;
    tiltAngle = 0;

    constructor() {
        super().loadImage("img/1.Sharkie/1.IDLE/1.png");
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIMM);
        this.animate();
    }

    animate() {
       
        setInterval(() => {
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
                this.x += this.speed;
                this.otherDirection = false;
            }

            if(this.world.keyboard.LEFT && this.x > 0){
                this.x -= this.speed;
                this.otherDirection = true;
            }

            if (this.world.keyboard.UP) {
                this.speedY -= this.swimmAcceleration;
            }

            if (this.world.keyboard.DOWN) {
                this.speedY += this.swimmAcceleration;
            }

            this.speedY *= this.waterDrag;
            this.speedY = Math.max(-5, Math.min(5, this.speedY));
            this.y += this.speedY;
            this.y = Math.max(0, Math.min(this.world.level.level_end_y, this.y));

            if (this.y === 0 || this.y === this.world.level.level_end_y) {
                this.speedY = 0;
            }

            this.setTiltAngle();

            this.world.camera_x = -this.x  + 50;
        }, 1000/60);

        setInterval(() => {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN){
                this.playAnnimation(this.IMAGES_SWIMM);
            } else {
                this.playAnnimation(this.IMAGES_IDLE);
            }
        }, 100);
    }

    setTiltAngle(){
        if (this.speedY < -0.2) {
            this.tiltAngle = -0.2;
        } else if (this.speedY > 0.2) {
            this.tiltAngle = 0.2;
        } else {
            this.tiltAngle = 0;
        }
    }

    jump(){

    }
}
