class AudioManager {
    startGameSound = new Audio("img/9.Sounds/start_screen/startSound.mp3");
    startGameButtonSound = new Audio("img/9.Sounds/start_screen/clickEffect.mp3");
    gameMusic = new Audio("img/9.Sounds/game/gameSound.mp3");
    coinSound = new Audio("img/9.Sounds/game/coin/coin.mp3");
    bottleSound = new Audio("img/9.Sounds/game/poison/bottle.mp3");
    snoozeSound = new Audio("img/9.Sounds/game/snooze/snooze.mp3");
    swimSound = new Audio("img/9.Sounds/game/swim/swim.mp3");
    hurtSound = new Audio("img/9.Sounds/game/hurt/hurt.mp3");
    deadSound = new Audio("img/9.Sounds/game/dead/dead.mp3");
    attackFlosseSound = new Audio("img/9.Sounds/game/attack/attack_hiaflosse.mp3");
    attackBubbleSound = new Audio("img/9.Sounds/game/attack/attack-bubbels.mp3");

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
            this.gameMusic,
        ].forEach(sound => this.stopMusic(sound));
    }

    stopAllEffects(){
        [
            this.startGameButtonSound,
            this.coinSound,
            this.bottleSound,
            this.snoozeSound,
            this.swimSound,
            this.hurtSound,
            this.deadSound,
            this.attackFlosseSound,
            this.attackBubbleSound
        ].forEach(sound => this.stopMusic(sound));

        this.activeEffects.forEach(effect => this.stopMusic(effect));
        this.activeEffects = [];
    }

    playSounds(sound){
        if(this.playSound){
            this.stopAllMusic();
            this.isMusicMuted = true;
            this.playSound = false;
            return;
        }
        this.isMusicMuted = false;
        this.playMusicLoop(sound);
        this.playMusic(sound);
        this.playSound = true;
    }

    startScreenMusic(){
        this.startGameSound.volume = 0.2;
        this.playSounds(this.startGameSound);
    }

    stopStartScreenMusic(){
        this.stopMusic(this.startGameSound);
    }

    startGameMusic(){
        this.gameMusic.volume = 1;
        this.playMusicLoop(this.gameMusic);
        this.playMusic(this.gameMusic);
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
        this.playEffect(this.startGameButtonSound, false);
    }

}
