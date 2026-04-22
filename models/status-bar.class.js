class StatusBar extends DrawableObject {
    static LIFE_IMAGES = [
        "img/4. Marcadores/Purple/0_ .png",
        "img/4. Marcadores/Purple/20__1.png",
        "img/4. Marcadores/Purple/40_ .png",
        "img/4. Marcadores/Purple/60_ .png",
        "img/4. Marcadores/Purple/80_ .png",
        "img/4. Marcadores/Purple/100_ .png",
    ];

    static COIN_IMAGES = [
        "img/4. Marcadores/Purple/0_ _1.png",
        "img/4. Marcadores/Purple/20_ .png",
        "img/4. Marcadores/Purple/40_ _1.png",
        "img/4. Marcadores/Purple/60_ _1.png",
        "img/4. Marcadores/Purple/80_ _1.png",
        "img/4. Marcadores/Purple/100__1.png",
    ];

    static POISON_IMAGES = [
        "img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png",
        "img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png",
        "img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png",
        "img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png",
        "img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png",
        "img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png",
    ];

    images = [];

    percentage = 100;

    constructor(images, x, y, width, height, percentage){
        super();
        this.images = images || StatusBar.LIFE_IMAGES;
        this.loadImages(this.images);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.percentage = percentage;
        this.setPercentage(this.percentage);
    }

    setPercentage(percentage){
        this.percentage = percentage;
        let imagePath = this.images[this.resolveImageIndex()];
        this.img = this.imageCache[imagePath];
    }

    resolveImageIndex(){
        if(this.percentage == 100){
            return 5;
        } else if(this.percentage > 80){
            return 4;
        }  else if(this.percentage > 60){
            return 3;
        }  else if(this.percentage > 40){
            return 2;
        } else if(this.percentage > 20){
            return 1;
        } else {
            return 0;
        }
    }
}
