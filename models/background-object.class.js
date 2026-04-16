class BackgroundObject extends MovableObject {
    x = 0;
    y = 0;
    width = 720;
    height = 480;
    constructor(imagePath, height, x) {
        super().loadImage(imagePath);
        this.height = height;
        this.y = 480 - this.height;
        this.x = x;
    }
}