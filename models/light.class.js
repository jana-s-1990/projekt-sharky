class Light extends MovableObject {
    width = 600;
    height = 480;
    y = 0;

    constructor(imagePath, minX) {
        super().loadImage(imagePath);
        this.x = minX;
        this.animate();
    }

    animate() {
        this.startMovingLeft();          
    }   
}
