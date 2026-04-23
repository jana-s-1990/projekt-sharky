const level1 = new Level(
    [
        new FishPink(),
        new FishOrange(),
        new FishGreen(),
        new JellyFishLila(),
        new JellyFishYellow(),
        new Endboss()
    ],
    [
        new Light("img/3. Background/Layers/1. Light/1.png", 0, 500),
        new Light("img/3. Background/Layers/1. Light/2.png", 600, 1000),
        new Light("img/3. Background/Layers/1. Light/1.png", 1200, 1500),
        new Light("img/3. Background/Layers/1. Light/2.png", 1700, 2800)
    ],
    [
        new BackgroundObject("img/3. Background/Layers/5. Water/D2.png", 480, -719),
        new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D2.png", 480, -719), 
        new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D2.png", 480, -719),
        new BackgroundObject("img/3. Background/Layers/2. Floor/D2.png", 480, -719),

        new BackgroundObject("img/3. Background/Layers/5. Water/D1.png", 480, 0),
        new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D1.png", 480, 0), 
        new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D1.png", 480, 0),
        new BackgroundObject("img/3. Background/Layers/2. Floor/D1.png", 480, 0),

        new BackgroundObject("img/3. Background/Layers/5. Water/D2.png", 480, 719),
        new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D2.png", 480, 719), 
        new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D2.png", 480, 719),
        new BackgroundObject("img/3. Background/Layers/2. Floor/D2.png", 480, 719),

        new BackgroundObject("img/3. Background/Layers/5. Water/D1.png", 480, 719 * 2),
        new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D1.png", 480, 719 * 2), 
        new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D1.png", 480, 719 * 2),
        new BackgroundObject("img/3. Background/Layers/2. Floor/D1.png", 480, 719 * 2),

        new BackgroundObject("img/3. Background/Layers/5. Water/D2.png", 480, 719 * 3),
        new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D2.png", 480, 719 * 3), 
        new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D2.png", 480, 719 * 3),
        new BackgroundObject("img/3. Background/Layers/2. Floor/D2.png", 480, 719 * 3),
    ],
    [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
    ],
    [
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison()
    ]
);
