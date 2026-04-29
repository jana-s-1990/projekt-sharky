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
  isDying = false;
  removeFromWorld = false;
  isAttackAnimating = false;

  constructor() {
    super();
    this.y = 300 + Math.random() * 80;
    this.x = 400 + Math.random() * 1000;
    this.speed = 0.15 + Math.random() * 0.4;
  }

  startAnimation(images) {
    setInterval(() => {
      if (this.isDying) {
        this.floatAwayDead();
        return;
      }

      this.startMoveingVertical();
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDying) {
        this.playAnimation(this.IMAGES_DEAD);
        return;
      }
      if (this.isAttackAnimating) {
        this.playAnimation(this.IMAGES_ATTACK);
        return;
      }

      this.playAnimation(images);
    }, 180);
  }

  hitByFinSlap(character) {
    if (this.isDying || this.removeFromWorld) {
      return;
    }

    this.playAttackAnimation();
    character.hitElectro();
  }

  hitByBubble(damage) {
    if (this.isDying || this.removeFromWorld) {
      return;
    }

    this.energy = 0;
    this.startDying();
  }

  startDying() {
    this.isDying = true;
    this.isAttackAnimating = false;
    this.currentImage = 0;
    this.speed = 1.8;
  }

  playAttackAnimation() {
    if (this.isAttackAnimating) {
      return;
    }

    this.isAttackAnimating = true;
    this.currentImage = 0;

    setTimeout(() => {
      this.isAttackAnimating = false;
    }, 720);
  }

  floatAwayDead() {
    this.y -= this.speed;
    this.x += Math.sin(Date.now() / 150) * 0.8;
    this.tiltAngle += 0.02;

    if (this.y + this.height < 0) {
      this.removeFromWorld = true;
    }
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
