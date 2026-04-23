class Fish extends Creature {
  offset = {
    top: 5,
    right: 5,
    bottom: 25,
    left: 5,
  };

  constructor() {
    super();
    this.y = 150 + Math.random() * 150;
    this.x = 200 + Math.random() * 1000;
    this.speed = 0.15 + Math.random() * 0.5;
  }

  startAnimation(images) {
    this.startMovingLeft();
    setInterval(() => {
      this.playAnimation(images);
    }, 100);
  }
}
