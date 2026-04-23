class CoinBar extends StatusBar {
    static COINBAR_IMAGES = [
        "img/4. Marcadores/Purple/0_ _1.png",
        "img/4. Marcadores/Purple/20_ .png",
        "img/4. Marcadores/Purple/40_ _1.png",
        "img/4. Marcadores/Purple/60_ _1.png",
        "img/4. Marcadores/Purple/80_ _1.png",
        "img/4. Marcadores/Purple/100__1.png",
    ];

    constructor(x, y, width, height){
        super(x, y, width, height, CoinBar.COINBAR_IMAGES, 0);
    }
}
