class LifeBar extends StatusBar {
    static LIFEBAR_IMAGES = [
        "img/4. Marcadores/Purple/0_ .png",
        "img/4. Marcadores/Purple/20__1.png",
        "img/4. Marcadores/Purple/40_ .png",
        "img/4. Marcadores/Purple/60_ .png",
        "img/4. Marcadores/Purple/80_ .png",
        "img/4. Marcadores/Purple/100_ .png",
    ];

    constructor(x, y, width, height){
        super(x, y, width, height, LifeBar.LIFEBAR_IMAGES, 100);
    }
}
