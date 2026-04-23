class Level{
    enemies;
    lights;
    backgroundObjects;
    coins;
    poisonBottles;
    levelEndX = 2200;
    levelEndY = 300;

    constructor(enemies, lights, backgroundObjects, coins, poisonBottles) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.poisonBottles = poisonBottles;
    }   
}
