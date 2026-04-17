class Level{
    enemies;
    lights;
    backgroundObjects;
    levelEndX = 2200;
    levelEndY = 300;

    constructor(enemies, lights, backgroundObjects) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
    }   
}
