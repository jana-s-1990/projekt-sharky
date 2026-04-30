class BackgroundObject extends DrawableObject {
    CANVAS_HEIGHT = 480;
    
    x = 0;
    y = 0;
    width = 720;
    height = 480;
    parallaxFactor = 1;

    constructor(imagePath, height, x, parallaxFactor = 1) {
        super();
        this.loadImage(imagePath);
        this.height = height;
        this.y = this.CANVAS_HEIGHT - this.height;
        this.x = x;
        this.parallaxFactor = parallaxFactor;
    }
}
