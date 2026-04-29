class Bubble extends MovableObject {
    width = 40;
    height = 40;
    speed = 7;
    damage = 10;
    isPoisonBubble = false;
    removeFromWorld = false;

    offset = {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
    };

    IMAGES_BUBBLE = [
        "img/1.Sharkie/4.Attack/Bubble trap/Bubble.png"
    ];

    IMAGES_POISON_BUBBLE = [
        "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png"
    ];

    constructor(character, isPoisonBubble = false) {
        super();
        this.otherDirection = character.otherDirection;
        this.isPoisonBubble = isPoisonBubble;
        this.damage = isPoisonBubble ? 25 : 10;
        this.x = this.otherDirection ? character.x + 15 : character.x + character.width - 55;
        this.y = character.y + 85;
        this.loadImages(this.IMAGES_BUBBLE);
        this.loadImages(this.IMAGES_POISON_BUBBLE);
        this.loadImage(this.getBubbleImage());
        this.startAnimation();
    }

    getBubbleImage() {
        return this.isPoisonBubble ? this.IMAGES_POISON_BUBBLE[0] : this.IMAGES_BUBBLE[0];
    }

    startAnimation() {
        setInterval(() => {
            this.x += this.otherDirection ? -this.speed : this.speed;
        }, 1000 / 60);
    }

    isColliding(object) {
        return this.x + this.width - this.offset.right > object.x + object.offset.left &&
            this.y + this.height - this.offset.bottom > object.y + object.offset.top &&
            this.x + this.offset.left < object.x + object.width - object.offset.right &&
            this.y + this.offset.top < object.y + object.height - object.offset.bottom;
    }
}
