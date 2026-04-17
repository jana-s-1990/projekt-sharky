class BackgroundObject extends MovableObject {
    CANVAS_HEIGHT = 480;

    x = 0;
    y = 0;
    width = 720;
    height = 480;

    constructor(imagePath, height, x) {
        super().loadImage(imagePath);
        this.height = height;
        this.y = this.CANVAS_HEIGHT - this.height;
        this.x = x;
    }
}
