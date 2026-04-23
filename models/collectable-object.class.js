class CollectableObject extends DrawableObject {
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

    constructor() {
        super();
        this.x = 450 + Math.random() * 1150;
    }

    startAnimation(images) {
        setInterval(() => {
            this.playAnimation(images);
        }, 150);
    }
}
