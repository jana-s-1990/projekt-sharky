class PoisonBar extends StatusBar{
    static POISONBAR_IMAGES = [
        "img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png",
        "img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png",
        "img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png",
        "img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png",
        "img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png",
        "img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png",
    ];

    constructor(x, y, width, height){
        super(x, y, width, height, PoisonBar.POISONBAR_IMAGES, 0);
    }
}

