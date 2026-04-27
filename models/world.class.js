class World {
    character = new Character();
    level = level1;
    canvas;
    keyboard;
    ctx;
    cameraX = 0;
    audioManager = new AudioManager();
    lifeBar = new LifeBar(10, 10, 180, 50, 100);
    coinBar = new CoinBar(10, 50, 180, 48, 0);
    poisonBar = new PoisonBar(10, 90, 180, 50, 0);

    constructor(canvas, keyboard, audioManager) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.audioManager = audioManager || this.audioManager;
        this.setCharacterWorld();
        this.draw();
        this.run();
    }

    setCharacterWorld() {
        this.character.world = this;
        this.character.audioManager = this.audioManager;
        this.character.startAnimation();
    }

    run() {
        this.checkEnemyCollisions();
        this.checkCollectibleCollisions();
    }

    checkEnemyCollisions(){
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy)){
                    this.character.hit();
                    this.lifeBar.setPercentage(this.character.energy);
                }
            });
            
        }, 100);
    }

    checkCollectibleCollisions() {
        setInterval(() => {
            this.collectCoins();
            this.collectPoisonBottles();
        }, 100);
    }

    collectCoins() {
        this.level.coins = this.level.coins.filter((coin) => {
            if (!this.character.isColliding(coin)) {
                return true;
            }

            this.character.coins = Math.min(100, this.character.coins + 10);
            this.coinBar.setPercentage(this.character.coins);
            this.audioManager.playEffect(this.audioManager.coinSound);
            return false;
        });
    }

    collectPoisonBottles() {
        this.level.poisonBottles = this.level.poisonBottles.filter((poisonBottle) => {
            if (!this.character.isColliding(poisonBottle)) {
                return true;
            }

            this.character.poison = Math.min(100, this.character.poison + 20);
            this.poisonBar.setPercentage(this.character.poison);
            this.audioManager.playEffect(this.audioManager.bottleSound);
            return false;
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.drawObjects(this.level.backgroundObjects);
        this.drawObjects(this.level.lights);
        this.drawObjects(this.level.coins);
        this.drawObjects(this.level.poisonBottles);
        this.drawObject(this.character);
        this.drawObjects(this.level.enemies);
        this.ctx.translate(-this.cameraX, 0);

        this.drawObject(this.lifeBar);
        this.drawObject(this.coinBar);
        this.drawObject(this.poisonBar);

        requestAnimationFrame(() => this.draw());
    }

    drawObject(object) {
        this.ctx.save();
        this.ctx.translate(object.x + object.width / 2, object.y + object.height / 2);

        if (object.otherDirection) {
            this.ctx.scale(-1, 1);
        }

        if (object.tiltAngle) {
            this.ctx.rotate(object.tiltAngle);
        }
        object.draw(this.ctx);
        object.drawFrame(this.ctx);
        
        this.ctx.stroke();
        this.ctx.restore();
    }

    drawObjects(objects) {
        objects.forEach(object => {
            this.drawObject(object);
        });
    }
}
