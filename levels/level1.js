let level1;

function initLevel() {
  const PARALLAX_WATER = 0.2;
  const PARALLAX_FONDO_2 = 0.4;
  const PARALLAX_FONDO_1 = 0.65;
  const PARALLAX_FLOOR = 1;

  level1 = new Level(
    [
      new FishPink(),
      new FishOrange(),
      new FishGreen(),
      new JellyFishLila(),
      new JellyFishYellow(),
      new Endboss(),
    ],
    [
      new Light("img/3. Background/Layers/1. Light/1.png", 0, 500),
      new Light("img/3. Background/Layers/1. Light/2.png", 600, 1000),
      new Light("img/3. Background/Layers/1. Light/1.png", 1200, 1500),
      new Light("img/3. Background/Layers/1. Light/2.png", 1800, 2800),
    ],
    [
      new BackgroundObject(
        "img/3. Background/Layers/5. Water/D2.png",
        480,
        -719,
        PARALLAX_WATER,
      ),
      new BackgroundObject(
        "img/3. Background/Layers/4.Fondo 2/D2.png",
        480,
        -719,
        PARALLAX_FONDO_2,
      ),
      new BackgroundObject(
        "img/3. Background/Layers/3.Fondo 1/D2.png",
        480,
        -719,
        PARALLAX_FONDO_1,
      ),
      new BackgroundObject(
        "img/3. Background/Layers/2. Floor/D2.png",
        480,
        -719,
        PARALLAX_FLOOR,
      ),

      new BackgroundObject("img/3. Background/Layers/5. Water/D1.png", 480, 0, PARALLAX_WATER),
      new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D1.png", 480, 0, PARALLAX_FONDO_2),
      new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D1.png", 480, 0, PARALLAX_FONDO_1),
      new BackgroundObject("img/3. Background/Layers/2. Floor/D1.png", 480, 0, PARALLAX_FLOOR),

      new BackgroundObject(
        "img/3. Background/Layers/5. Water/D2.png",
        480,
        719,
        PARALLAX_WATER,
      ),
      new BackgroundObject(
        "img/3. Background/Layers/4.Fondo 2/D2.png",
        480,
        719,
        PARALLAX_FONDO_2,
      ),
      new BackgroundObject(
        "img/3. Background/Layers/3.Fondo 1/D2.png",
        480,
        719,
        PARALLAX_FONDO_1,
      ),
      new BackgroundObject(
        "img/3. Background/Layers/2. Floor/D2.png",
        480,
        719,
        PARALLAX_FLOOR,
      ),

      new BackgroundObject(
        "img/3. Background/Layers/5. Water/D1.png",
        480,
        719 * 2,
        PARALLAX_WATER,
      ),
      new BackgroundObject(
        "img/3. Background/Layers/4.Fondo 2/D1.png",
        480,
        719 * 2,
        PARALLAX_FONDO_2,
      ),
      new BackgroundObject(
        "img/3. Background/Layers/3.Fondo 1/D1.png",
        480,
        719 * 2,
        PARALLAX_FONDO_1,
      ),
      new BackgroundObject(
        "img/3. Background/Layers/2. Floor/D1.png",
        480,
        719 * 2,
        PARALLAX_FLOOR,
      ),

      new BackgroundObject(
        "img/3. Background/Layers/5. Water/D2.png",
        480,
        719 * 3,
        PARALLAX_WATER,
      ),
      new BackgroundObject(
        "img/3. Background/Layers/4.Fondo 2/D2.png",
        480,
        719 * 3,
        PARALLAX_FONDO_2,
      ),
      new BackgroundObject(
        "img/3. Background/Layers/3.Fondo 1/D2.png",
        480,
        719 * 3,
        PARALLAX_FONDO_1,
      ),
      new BackgroundObject(
        "img/3. Background/Layers/2. Floor/D2.png",
        480,
        719 * 3,
        PARALLAX_FLOOR,
      ),
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
    [new Poison(), new Poison(), new Poison(), new Poison(), new Poison()],
  );
}
