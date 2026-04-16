class Light extends MovableObject {
    width = 600;
    height = 480;
    y = 0;

    constructor(imagePath) {
        super().loadImage(imagePath);
        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();          
    }   
}