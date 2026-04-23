class Poison extends CollectableObject {
    width = 50;
    height = 50;
    offset = {
        top: 8,
        right: 8,
        bottom: 0,
        left: 8
    };
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

    constructor() {
        super();
        this.y = 350 + Math.random() * 30;
        this.loadImages(this.POISON_IMAGES);
        this.startAnimation(this.POISON_IMAGES);
    }
}