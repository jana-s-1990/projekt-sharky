class JellyFish extends Creature {
  width = 100;
  height = 100;
  offset = {
    top: 10,
    right: 10,
    bottom: 8,
    left: 10,
  };
  movingUp = true;
  topLimit = 20;
  bottmLimit = 350;

  constructor() {
    super();
    this.y = 300 + Math.random() * 80;
    this.x = 400 + Math.random() * 1000;
    this.speed = 0.15 + Math.random() * 0.4;
  }

  startAnimation(images) {
    setInterval(() => {
      this.startMoveingVertical();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(images);
    }, 180);
  }

  startMoveingVertical() {
    if (this.movingUp) {
      this.startMovingTop();
      if (this.canMoveUp()) this.movingUp = false;
    } else {
      this.startMovingBottom();
      if (this.canMoveDown()) this.movingUp = true;
    }
  }

  startMovingTop() {
    this.y -= this.speed;
  }

  canMoveUp() {
    return this.y <= this.topLimit;
  }

  startMovingBottom() {
    this.y += this.speed;
  }

  canMoveDown() {
    return this.y >= this.bottmLimit;
  }
}
