class Character extends MovableObject {
    MOVEMENT_FRAME_TIME = 1000 / 60;
    ANIMATION_FRAME_TIME = 100;
    MAX_VERTICAL_SPEED = 5;
    TILT_THRESHOLD = 0.2;
    TILT_ANGLE = 0.2;
    CAMERA_OFFSET_X = 50;

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

    IMAGES_LONG_IDLE = [
            "img/1.Sharkie/2.Long_IDLE/i1.png",
            "img/1.Sharkie/2.Long_IDLE/I2.png",   
            "img/1.Sharkie/2.Long_IDLE/I3.png",
            "img/1.Sharkie/2.Long_IDLE/I4.png",
            "img/1.Sharkie/2.Long_IDLE/I5.png",
            "img/1.Sharkie/2.Long_IDLE/I6.png",
            "img/1.Sharkie/2.Long_IDLE/I7.png",
            "img/1.Sharkie/2.Long_IDLE/I8.png",   
            "img/1.Sharkie/2.Long_IDLE/I9.png",
            "img/1.Sharkie/2.Long_IDLE/I10.png",
            "img/1.Sharkie/2.Long_IDLE/I11.png",
            "img/1.Sharkie/2.Long_IDLE/I12.png",
            "img/1.Sharkie/2.Long_IDLE/I13.png",
            "img/1.Sharkie/2.Long_IDLE/I14.png",   
    ];

    IMAGES_SWIMMING = [
            "img/1.Sharkie/3.Swim/1.png",
            "img/1.Sharkie/3.Swim/2.png",
            "img/1.Sharkie/3.Swim/3.png",
            "img/1.Sharkie/3.Swim/4.png", 
            "img/1.Sharkie/3.Swim/5.png",
            "img/1.Sharkie/3.Swim/6.png",  
    ];

    IMAGES_DEAD = [
            "img/1.Sharkie/6.dead/1.Poisoned/1.png",
            "img/1.Sharkie/6.dead/1.Poisoned/2.png",
            "img/1.Sharkie/6.dead/1.Poisoned/3.png",
            "img/1.Sharkie/6.dead/1.Poisoned/4.png",
            "img/1.Sharkie/6.dead/1.Poisoned/5.png",
            "img/1.Sharkie/6.dead/1.Poisoned/6.png",
            "img/1.Sharkie/6.dead/1.Poisoned/7.png",
            "img/1.Sharkie/6.dead/1.Poisoned/8.png",
            "img/1.Sharkie/6.dead/1.Poisoned/9.png",
            "img/1.Sharkie/6.dead/1.Poisoned/10.png",
            "img/1.Sharkie/6.dead/1.Poisoned/11.png",
            "img/1.Sharkie/6.dead/1.Poisoned/12.png",
    ];

    IMAGES_HURT = [
            "img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
            "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
            "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
            "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
            "img/1.Sharkie/5.Hurt/1.Poisoned/5.png",
    ]

    world;
    speed = 5;
    tiltAngle = 0;
    coins = 0;
    poison = 0;

    offset = {
        top: 90,
        right:35,
        bottom: 40,
        left: 35
    };

    constructor() {
        super();
        this.loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
    }

    startAnimation() {
        setInterval(() => {
            this.updateMovement();
        }, this.MOVEMENT_FRAME_TIME);

        setInterval(() => {
            this.updateAnimation();
        }, this.ANIMATION_FRAME_TIME);
    }

    updateMovement() {
        this.handleHorizontalMovement();
        this.handleVerticalMovement();
        this.updateTiltAngle();
        this.updateCameraPosition();
    }

    handleHorizontalMovement() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
            this.x += this.speed;
            this.otherDirection = false;
        }

        if (this.world.keyboard.LEFT && this.x > 0) {
            this.x -= this.speed;
            this.otherDirection = true;
        }
    }

    handleVerticalMovement() {
        if (this.world.keyboard.UP) {
            this.speedY -= this.swimAcceleration;
        }

        if (this.world.keyboard.DOWN) {
            this.speedY += this.swimAcceleration;
        }

        this.speedY *= this.waterDrag;
        this.speedY = Math.max(-this.MAX_VERTICAL_SPEED, Math.min(this.MAX_VERTICAL_SPEED, this.speedY));
        this.y += this.speedY;
        this.limitVerticalPosition();
    }

    limitVerticalPosition() {
        this.y = Math.max(0, Math.min(this.world.level.levelEndY, this.y));

        if (this.y === 0 || this.y === this.world.level.levelEndY) {
            this.speedY = 0;
        }
    }

    updateAnimation() { 
        if (this.isDead()){
            this.playAnimation(this.IMAGES_DEAD);
            return;
        }
        if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            return;
        }
        if (this.isMoving()) {
            this.playAnimation(this.IMAGES_SWIMMING);
            return;
        }
        if (this.isLongIdle()){
            this.playAnimation(this.IMAGES_LONG_IDLE);
            return;
        }

        this.playAnimation(this.IMAGES_IDLE);
    }

    isLongIdle(){
        return Date.now() - this.world.keyboard.lastKeyPress > 15000;
    }

    isMoving() {
        return this.world.keyboard.RIGHT ||
            this.world.keyboard.LEFT ||
            this.world.keyboard.UP ||
            this.world.keyboard.DOWN;
    }

    updateTiltAngle() {
        if (this.speedY < -this.TILT_THRESHOLD) {
            this.tiltAngle = -this.TILT_ANGLE;
        } else if (this.speedY > this.TILT_THRESHOLD) {
            this.tiltAngle = this.TILT_ANGLE;
        } else {
            this.tiltAngle = 0;
        }
    }

    updateCameraPosition() {
        this.world.cameraX = -this.x + this.CAMERA_OFFSET_X;
    }
}
