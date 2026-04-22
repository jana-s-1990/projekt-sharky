class CollectableObject extends DrawableObject {
    type;
    width = 55;
    height = 55;
    images = [];
    offset = {
        top: 8,
        right: 8,
        bottom: 8,
        left: 8
    };

    COIN_IMAGES = [
        "img/4. Marcadores/1. Coins/1.png",
        "img/4. Marcadores/1. Coins/2.png",
        "img/4. Marcadores/1. Coins/3.png",
        "img/4. Marcadores/1. Coins/4.png",
    ];

    POISON_IMAGES = [
        "img/4. Marcadores/Posión/Animada/1.png",
        "img/4. Marcadores/Posión/Animada/2.png",
        "img/4. Marcadores/Posión/Animada/3.png",
        "img/4. Marcadores/Posión/Animada/4.png",
        "img/4. Marcadores/Posión/Animada/5.png",
        "img/4. Marcadores/Posión/Animada/6.png",
        "img/4. Marcadores/Posión/Animada/7.png",
        "img/4. Marcadores/Posión/Animada/8.png",
    ];


    

    constructor(type, x, y) {
        super();
        this.type = type;
        this.x = x;
        this.y = y;
        this.getCoinSize();
        this.images = this.getObjectImages();
        this.loadImages(this.images);
        this.startAnimation();
    }

    getCoinSize() {
        if(this.type == "coin"){
            this.width = 30;
            this.height = 30;
        }
    }

    getObjectImages() {
        if(this.type == "coin"){
            return this.COIN_IMAGES;
        } else {
            return this.POISON_IMAGES;
        }
    }

    startAnimation() {
        setInterval(() => {
            this.playAnimation(this.images);
        }, 150);
    }

    static createRandomCollectibles(type, amount, minX, maxX, minY, maxY) {
        const collectibles = [];

        for (let i = 0; i < amount; i++) {
            const x = minX + Math.random() * (maxX - minX);
            const y = minY + Math.random() * (maxY - minY);
            collectibles.push(new CollectableObject(type, x, y));
        }

        return collectibles;
    }
}
