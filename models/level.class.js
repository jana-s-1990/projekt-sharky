class Level{
    enemys;
    lights;
    backgroundObjects;
    level_end_x = 2200;
    level_end_y = 300;

    constructor(enemys, lights, backgroundObjects) {
        this.enemys = enemys;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
    }   
}