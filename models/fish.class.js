class Fish extends MovableObject {
    y = 310;
    IMAGES_SWIMMING = [
            "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
            "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
            "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
            "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
            "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png",
    ];

    offset = {
        top: 5,
        right:5,
        bottom: 25,
        left: 5
    };

    constructor() {
        super().loadImage("img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png");
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;
        this.startAnimation();
    }

    startAnimation() {
        this.startMovingLeft();

        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);
        }, 100);
    }
}
