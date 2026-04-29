class Fish extends Creature {
  isDying = false;
  removeFromWorld = false;
  flySpeedX = 0;
  flySpeedY = 0;
  flyRotation = 0;

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
      if (this.isDying) {
        this.updateDeadMovement();
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDying) {
        this.playAnimation(this.IMAGES_DEAD);
        return;
      }

      this.playAnimation(images);
    }, 100);
  }

  hitByFinSlap(character) {
    if (this.isDying || this.removeFromWorld) {
      return;
    }

    const attackDirection = character.otherDirection ? -1 : 1;

    this.isDying = true;
    this.speed = 0;
    this.flySpeedX = attackDirection * 5;
    this.flySpeedY = -4;
    this.flyRotation = attackDirection * 0.08;
    this.currentImage = 0;
  }

  updateDeadMovement() {
    this.x += this.flySpeedX;
    this.y += this.flySpeedY;
    this.flySpeedY += 0.15;
    this.tiltAngle += this.flyRotation;
  }
}
