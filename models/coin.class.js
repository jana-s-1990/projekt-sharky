class Coin extends CollectableObject {
    width = 30;
    height = 30;
    y = 300;

    COIN_IMAGES = [
        "img/4. Marcadores/1. Coins/1.png",
        "img/4. Marcadores/1. Coins/2.png",
        "img/4. Marcadores/1. Coins/3.png",
        "img/4. Marcadores/1. Coins/4.png",
    ];

    constructor() {
        super();
        this.y = 90 + Math.random() * 210;
        this.loadImage(this.COIN_IMAGES[0]);
        this.loadImages(this.COIN_IMAGES);
        this.startAnimation(this.COIN_IMAGES);
    }
}