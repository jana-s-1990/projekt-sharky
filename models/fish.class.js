class Fish extends MovableObject {
    y = 310;
    IMAGES_SWIMM = [
            "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
            "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
            "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
            "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
            "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png",
    ];

    constructor() {
        super().loadImage("img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png");
        this.loadImages(this.IMAGES_SWIMM);
        this.animate();
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;
        this.moveLeft();
    }

    animate() {
        setInterval(() => {
            this.playAnnimation(this.IMAGES_SWIMM);
        }, 100);
    }
}