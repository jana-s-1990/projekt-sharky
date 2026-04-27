class AudioManager {
    startGameSound = new Audio("img/9.Sounds/start_screen/tunetank-cinematic-epic-logo-484237.mp3");
    startGameBGSound = new Audio("img/9.Sounds/start_screen/dragon-studio-underwater-ambience-376890.mp3");
    startGameButtonSound = new Audio("img/9.Sounds/start_screen/dragon-studio-cinematic-dive-underwater-467471.mp3");
    startGameButtonBGSound = new Audio("img/9.Sounds/start_screen/dragon-studio-water-splash-effect-443133.mp3");
    gameMusicBG = new Audio("img/9.Sounds/game/dragon-studio-deep-sea-underwater-ambience-482888.mp3");
    gameMusic = new Audio("img/9.Sounds/game/freesound_community-8bit-sample-69080.mp3");
    coinSound = new Audio("img/9.Sounds/game/coin/driken5482-retro-hurt-1-236672.mp3");
    bottleSound = new Audio("img/9.Sounds/game/poison/driken5482-retro-hurt-1-236672.mp3");
    snoozeSound = new Audio("img/9.Sounds/game/snooze/freesound_community-pug-roncando-95042.mp3");
    hurtSound = new Audio("img/9.Sounds/game/hurt/driken5482-retro-hurt-1-236672.mp3");
    deadSound = new Audio("img/9.Sounds/game/dead/driken5482-retro-hurt-1-236672.mp3");

    playSound = false;

    playMusic(sound){
        sound.play();
    }

    playMusicLoop(sound){
        sound.loop = true;
    }

    stopMusic(sound){
        sound.pause();
        sound.currentTime = 0;
    }

    playSounds(sound, bgSound){
        if(this.playSound){
            this.stopMusic(sound);
            this.stopMusic(bgSound);
            this.playSound = false;
            return;
        }
        this.playMusicLoop(sound);
        this.playMusic(sound);
        this.playMusic(bgSound);
        this.playMusicLoop(bgSound);
        this.playSound = true;
    }

    startScreenMusic(){
        this.startGameSound.volume = 0.2;
        this.startGameBGSound.volume = 0.5;
        this.playSounds(this.startGameSound, this.startGameBGSound);
    }

    stopStartScreenMusic(){
        this.stopMusic(this.startGameSound);
        this.stopMusic(this.startGameBGSound);
    }

    startGameMusic(){
        this.gameMusic.volume = 0.15;
        this.gameMusicBG.volume = 0.5;
        this.playMusicLoop(this.gameMusic);
        this.playMusicLoop(this.gameMusicBG);
        this.playMusic(this.gameMusic);
        this.playMusic(this.gameMusicBG);
        this.playSound = true;
    }

    toggleGameMusic(){
        if(this.playSound){
            this.stopMusic(this.gameMusic);
            this.stopMusic(this.gameMusicBG);
            this.playSound = false;
            return;
        }
        this.startGameMusic();
    }

    startClickSound(){
        this.startGameButtonSound.volume = 0.5;
        this.startGameButtonBGSound.volume = 0.2;
        this.playMusic(this.startGameButtonSound);
        this.playMusic(this.startGameButtonBGSound);
    }

}
