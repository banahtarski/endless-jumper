class PlatformSpawner {
    constructor(height) {
        this.height = height
        this.numberOfPlatforms = Math.floor(height/240)
        this.platforms = []

        for (let i=0; i<this.numberOfPlatforms; i++) {
            let yInitial = 250*i
            this.platforms.push(new Platform(yInitial))
        }
    }

    update (){
        for (let i = 0; i < this.numberOfPlatforms; i++) {
            this.platforms[i].update();
        }
        if (this.platforms[this.platforms.length - 1].position.y > this.height) {
            this.platforms.pop();
            this.platforms.unshift(new Platform(0));
        }
    }
}