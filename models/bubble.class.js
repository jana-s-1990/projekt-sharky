class Bubble extends MovableObject {
    width = 40;
    height = 40;
    speed = 7;
    damage = 10;
    isPoisonBubble = false;
    removeFromWorld = false;
    isBursting = false;
    burstStartedAt = 0;

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
            if (this.isBursting) {
                return;
            }

            this.x += this.otherDirection ? -this.speed : this.speed;
        }, 1000 / 60);
    }

    burst() {
        if (this.isBursting || this.removeFromWorld) {
            return;
        }

        this.isBursting = true;
        this.burstStartedAt = Date.now();

        setTimeout(() => {
            this.removeFromWorld = true;
        }, 180);
    }

    draw(ctx) {
        if (this.isBursting) {
            this.drawBurst(ctx);
            return;
        }

        super.draw(ctx);
    }

    drawBurst(ctx) {
        const progress = Math.min((Date.now() - this.burstStartedAt) / 180, 1);
        const alpha = 1 - progress;
        const radius = 8 + progress * 16;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = this.isPoisonBubble ? "#9cff00" : "#ffffff";
        ctx.lineWidth = 3;

        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI * 2 / 6) * i;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.stroke();
        }

        ctx.restore();
    }

    isColliding(object) {
        return this.x + this.width - this.offset.right > object.x + object.offset.left &&
            this.y + this.height - this.offset.bottom > object.y + object.offset.top &&
            this.x + this.offset.left < object.x + object.width - object.offset.right &&
            this.y + this.offset.top < object.y + object.height - object.offset.bottom;
    }
}
