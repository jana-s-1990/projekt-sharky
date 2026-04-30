class World {
    character = new Character();
    level = level1;
    canvas;
    keyboard;
    ctx;
    cameraX = 0;
    audioManager = new AudioManager();
    bubbles = [];
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
        this.checkAttackCollisions();
        this.checkBubbleShots();
        this.checkBubbleCollisions();
        this.checkCollectibleCollisions();
    }

    checkEnemyCollisions(){
        setInterval(() => {
            if(this.character.isElectroHurt){
                return;
            }

            this.level.enemies.forEach((enemy) => {
                if(!enemy.isDying && !enemy.removeFromWorld && this.character.isColliding(enemy)){
                    this.character.hit();
                    this.lifeBar.setPercentage(this.character.energy);
                }
            });
            
        }, 100);
    }

    checkAttackCollisions(){
        setInterval(() => {
            if(!this.character.isAttacking){
                this.removeDeadEnemies();
                return;
            }

            this.level.enemies.forEach((enemy) => {
                if(this.canBeHitByFinSlap(enemy)){
                    enemy.lastFinSlapHitId = this.character.attackId;
                    enemy.hitByFinSlap(this.character);
                    this.lifeBar.setPercentage(this.character.energy);
                }
            });

            this.removeDeadEnemies();
        }, 100);
    }

    canBeHitByFinSlap(enemy) {
        return typeof enemy.hitByFinSlap === "function" &&
            this.isHitByFinSlap(enemy) &&
            enemy.lastFinSlapHitId !== this.character.attackId;
    }

    isHitByFinSlap(enemy) {
        let attack = this.character.getFinSlapHitbox();

        return attack.x + attack.width > enemy.x + enemy.offset.left &&
            attack.y + attack.height > enemy.y + enemy.offset.top &&
            attack.x < enemy.x + enemy.width - enemy.offset.right &&
            attack.y < enemy.y + enemy.height - enemy.offset.bottom;
    }

    removeDeadEnemies() {
        this.level.enemies = this.level.enemies.filter(enemy => !enemy.removeFromWorld);
    }

    checkBubbleShots() {
        setInterval(() => {
            if(this.keyboard.D){
                this.shootBubble();
                this.keyboard.D = false;
            }
        }, 1000 / 60);
    }

    shootBubble() {
        if(!this.character.attackBubble()){
            return;
        }

        let isPoisonBubble = this.character.poison >= 20;

        if(isPoisonBubble){
            this.character.poison -= 20;
            this.poisonBar.setPercentage(this.character.poison);
        }

        setTimeout(() => {
            this.bubbles.push(new Bubble(this.character, isPoisonBubble));
        }, 250);
    }

    checkBubbleCollisions() {
        setInterval(() => {
            this.bubbles.forEach((bubble) => {
                const threatenedFish = this.getThreatenedFish(bubble);

                if(threatenedFish){
                    threatenedFish.reactToBubbleThreat();
                }

                this.level.enemies.forEach((enemy) => {
                    if(this.canBeHitByBubble(bubble, enemy)){
                        enemy.hitByBubble(bubble.damage);
                        bubble.burst();
                    }
                });
            });

            this.removeUsedBubbles();
            this.removeDeadEnemies();
        }, 100);
    }

    canBeHitByBubble(bubble, enemy) {
        return !bubble.removeFromWorld &&
            !bubble.isBursting &&
            !enemy.isDying &&
            !enemy.removeFromWorld &&
            typeof enemy.hitByBubble === "function" &&
            bubble.isColliding(enemy);
    }

    getThreatenedFish(bubble) {
        return this.level.enemies
            .filter(enemy => this.canReactToApproachingBubble(bubble, enemy))
            .sort((a, b) => this.getHorizontalDistanceToBubble(bubble, a) - this.getHorizontalDistanceToBubble(bubble, b))[0];
    }

    canReactToApproachingBubble(bubble, fish) {
        return fish instanceof Fish &&
            !bubble.removeFromWorld &&
            !bubble.isBursting &&
            !fish.isDying &&
            !fish.removeFromWorld &&
            typeof fish.reactToBubbleThreat === "function" &&
            this.isBubbleApproachingEnemy(bubble, fish);
    }

    isBubbleApproachingEnemy(bubble, enemy) {
        const bubbleCenterX = bubble.x + bubble.width / 2;
        const bubbleCenterY = bubble.y + bubble.height / 2;
        const enemyCenterX = enemy.x + enemy.width / 2;
        const enemyCenterY = enemy.y + enemy.height / 2;
        const horizontalDistance = Math.abs(enemyCenterX - bubbleCenterX);
        const verticalDistance = Math.abs(enemyCenterY - bubbleCenterY);
        const bubbleMovesTowardEnemy = bubble.otherDirection
            ? enemyCenterX < bubbleCenterX
            : enemyCenterX > bubbleCenterX;

        return bubbleMovesTowardEnemy &&
            horizontalDistance < 650 &&
            verticalDistance < 120;
    }

    getHorizontalDistanceToBubble(bubble, enemy) {
        const bubbleCenterX = bubble.x + bubble.width / 2;
        const enemyCenterX = enemy.x + enemy.width / 2;

        return Math.abs(enemyCenterX - bubbleCenterX);
    }

    removeUsedBubbles() {
        this.bubbles = this.bubbles.filter((bubble) => {
            let isOutOfLevel = bubble.x < 0 || bubble.x > this.level.levelEndX + this.canvas.width;
            return !bubble.removeFromWorld && !isOutOfLevel;
        });
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
        this.drawParallaxObjects(this.level.backgroundObjects);

        this.ctx.translate(this.cameraX, 0);
        this.drawObjects(this.level.lights);
        this.drawObjects(this.level.coins);
        this.drawObjects(this.level.poisonBottles);
        this.drawObject(this.character);
        this.drawObjects(this.bubbles);
        this.drawObjects(this.level.enemies);
        this.ctx.translate(-this.cameraX, 0);

        this.drawObject(this.lifeBar);
        this.drawObject(this.coinBar);
        this.drawObject(this.poisonBar);

        requestAnimationFrame(() => this.draw());
    }

    drawParallaxObjects(objects) {
        const objectsByDepth = [...objects].sort((a, b) => a.parallaxFactor - b.parallaxFactor);

        objectsByDepth.forEach(object => {
            this.ctx.save();
            this.ctx.translate(this.cameraX * object.parallaxFactor, 0);
            this.drawObject(object);
            this.ctx.restore();
        });
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
