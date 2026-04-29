class AudioManager {
    startGameSound = new Audio("img/9.Sounds/start_screen/tunetank-cinematic-epic-logo-484237.mp3");
    startGameBGSound = new Audio("img/9.Sounds/start_screen/dragon-studio-underwater-ambience-376890.mp3");
    startGameButtonSound = new Audio("img/9.Sounds/start_screen/dragon-studio-cinematic-dive-underwater-467471.mp3");
    startGameButtonBGSound = new Audio("img/9.Sounds/start_screen/dragon-studio-water-splash-effect-443133.mp3");
    gameMusicBG = new Audio("img/9.Sounds/game/dragon-studio-deep-sea-underwater-ambience-482888.mp3");
    gameMusic = new Audio("img/9.Sounds/game/freesound_community-8bit-sample-69080.mp3");
    coinSound = new Audio("img/9.Sounds/game/coin/yusuf_sfx-retro-video-game-coin-collect-496611.mp3");
    bottleSound = new Audio("img/9.Sounds/game/poison/freesound_community-bottle-clink-101000.mp3");
    snoozeSound = new Audio("img/9.Sounds/game/snooze/freesound_community-pug-roncando-95042.mp3");
    swimSound = new Audio("img/9.Sounds/game/swim/freesound_community-swim-44183.mp3");
    hurtSound = new Audio("img/9.Sounds/game/hurt/driken5482-retro-hurt-1-236672.mp3");
    deadSound = new Audio("img/9.Sounds/game/dead/freesound_community-dead-8bit-41400.mp3");

    playSound = false;
    isMusicMuted = false;
    areEffectsMuted = false;
    activeEffects = [];

    playMusic(sound){
        if (this.isMusicMuted) {
            return;
        }
        sound.play();
    }

    playEffect(sound, cloneSound = true){
        if (this.areEffectsMuted) {
            return;
        }
        if (!cloneSound) {
            sound.play();
            return;
        }
        let effect = sound.cloneNode();
        this.activeEffects.push(effect);
        effect.addEventListener("ended", () => {
            this.activeEffects = this.activeEffects.filter(activeEffect => activeEffect !== effect);
        });
        effect.play();
    }

    playMusicLoop(sound){
        sound.loop = true;
    }

    stopMusic(sound){
        sound.pause();
        sound.currentTime = 0;
    }

    stopAllMusic(){
        [
            this.startGameSound,
            this.startGameBGSound,
            this.gameMusic,
            this.gameMusicBG
        ].forEach(sound => this.stopMusic(sound));
    }

    stopAllEffects(){
        [
            this.startGameButtonSound,
            this.startGameButtonBGSound,
            this.coinSound,
            this.bottleSound,
            this.snoozeSound,
            this.swimSound,
            this.hurtSound,
            this.deadSound
        ].forEach(sound => this.stopMusic(sound));

        this.activeEffects.forEach(effect => this.stopMusic(effect));
        this.activeEffects = [];
    }

    playSounds(sound, bgSound){
        if(this.playSound){
            this.stopAllMusic();
            this.isMusicMuted = true;
            this.playSound = false;
            return;
        }
        this.isMusicMuted = false;
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
        this.gameMusic.volume = 1;
        this.gameMusicBG.volume = 0.5;
        this.playMusicLoop(this.gameMusic);
        this.playMusicLoop(this.gameMusicBG);
        this.playMusic(this.gameMusic);
        this.playMusic(this.gameMusicBG);
        this.playSound = true;
    }

    toggleGameMusic(){
        if(!this.isMusicMuted){
            this.stopAllMusic();
            this.isMusicMuted = true;
            this.playSound = false;
            return;
        }
        this.isMusicMuted = false;
        this.startGameMusic();
    }

    toggleGameSound(){
        if(!this.isMusicMuted || !this.areEffectsMuted){
            this.stopAllMusic();
            this.stopAllEffects();
            this.isMusicMuted = true;
            this.areEffectsMuted = true;
            this.playSound = false;
            return;
        }
        this.isMusicMuted = false;
        this.areEffectsMuted = false;
        this.startGameMusic();
    }

    toggleEffects(){
        if(!this.areEffectsMuted){
            this.stopAllEffects();
            this.areEffectsMuted = true;
            return;
        }
        this.areEffectsMuted = false;
    }

    startClickSound(){
        this.startGameButtonSound.volume = 0.5;
        this.startGameButtonBGSound.volume = 0.2;
        this.playEffect(this.startGameButtonSound, false);
        this.playEffect(this.startGameButtonBGSound, false);
    }

}
