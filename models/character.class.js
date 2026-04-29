class Character extends Creature {
    MAX_VERTICAL_SPEED = 5;
    TILT_THRESHOLD = 0.2;
    TILT_ANGLE = 0.2;

    height = 180;
    width = 180;
    world;
    speed = 3;
    tiltAngle = 0;
    coins = 0;
    poison = 0;
    audioManager = new AudioManager();
    deadSoundPlayed = false;
    isAttacking = false;
    isBubbleAttacking = false;
    attackId = 0;
    attackDuration = 600;
    bubbleAttackDuration = 700;

    offset = {
        top: 90,
        right:35,
        bottom: 40,
        left: 35
    };

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
    ];

    IMAGES_FIN_SLAP = [
        "img/1.Sharkie/4.Attack/Fin slap/1.png",
        "img/1.Sharkie/4.Attack/Fin slap/4.png",
        "img/1.Sharkie/4.Attack/Fin slap/5.png",
        "img/1.Sharkie/4.Attack/Fin slap/6.png",
        "img/1.Sharkie/4.Attack/Fin slap/7.png",
        "img/1.Sharkie/4.Attack/Fin slap/8.png"
    ];

    IMAGES_BUBBLE_ATTACK = [
        "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png",
        "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png",
        "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png",
        "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png",
        "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png",
        "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png",
        "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png",
    ];

    constructor() {
        super();
        this.loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_FIN_SLAP);
        this.loadImages(this.IMAGES_BUBBLE_ATTACK);
    }

    startAnimation() {
        setInterval(() => {
            this.updateMovement();
        }, 1000 / 60);

        setInterval(() => {
            this.updateAnimation();
        }, 100);
    }

    updateMovement() {
        this.handleHorizontalMovement();
        this.handleVerticalMovement();
        this.handleAttack();
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

    handleAttack() {
        if (this.world.keyboard.SPACE) {
            this.attackFinSlap();
            this.world.keyboard.SPACE = false;
        }
    }

    attackFinSlap() {
        if (this.isAttacking || this.isBubbleAttacking || this.isDead()) {
            return;
        }

        this.isAttacking = true;
        this.attackId++;
        this.currentImage = 0;

        setTimeout(() => {
            this.isAttacking = false;
        }, this.attackDuration);
    }

    attackBubble() {
        if (this.isAttacking || this.isBubbleAttacking || this.isDead()) {
            return false;
        }

        this.isBubbleAttacking = true;
        this.currentImage = 0;

        setTimeout(() => {
            this.isBubbleAttacking = false;
        }, this.bubbleAttackDuration);

        return true;
    }

    getFinSlapHitbox() {
        if (this.otherDirection) {
            return {
                x: this.x + 10,
                y: this.y + 85,
                width: 75,
                height: 60
            };
        }

        return {
            x: this.x + this.width - 85,
            y: this.y + 85,
            width: 75,
            height: 60
        };
    }

    updateAnimation() { 
        if (this.isDead()){
            this.playAnimation(this.IMAGES_DEAD);
            if(!this.deadSoundPlayed){
                this.audioManager.playEffect(this.audioManager.deadSound, false);
                this.deadSoundPlayed = true;
            }
            return;
        }
        if (this.isAttacking) {
            this.playAnimation(this.IMAGES_FIN_SLAP);
            return;
        }
        if (this.isBubbleAttacking) {
            this.playAnimation(this.IMAGES_BUBBLE_ATTACK);
            return;
        }
        if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            this.audioManager.playEffect(this.audioManager.hurtSound, false);
            return;
        }
        if (this.isMoving()) {
            this.audioManager.playEffect(this.audioManager.swimSound, false);
            this.playAnimation(this.IMAGES_SWIMMING);
            return;
        }
        if (this.isLongIdle()){
            this.playAnimation(this.IMAGES_LONG_IDLE);
            this.audioManager.playEffect(this.audioManager.snoozeSound, false);
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
        this.world.cameraX = -this.x + 150;
    }
}
