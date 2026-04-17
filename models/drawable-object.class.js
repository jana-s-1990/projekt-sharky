class DrawableObject {
    x = 10;
    y = 230;
    img;
    height = 80;
    width = 80;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(imagePaths) {
        imagePaths.forEach((path) => {
            const img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Fish) {
            const hitboxX = -this.width / 2 + this.offset.left;
            const hitboxY = -this.height / 2 + this.offset.top;
            const hitboxWidth = this.width - this.offset.left - this.offset.right;
            const hitboxHeight = this.height - this.offset.top - this.offset.bottom;

            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "blue";
            ctx.rect(hitboxX, hitboxY, hitboxWidth, hitboxHeight);
        }
    }
}