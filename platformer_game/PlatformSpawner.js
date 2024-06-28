class PlatformSpawner {
    constructor() {
        this.platformDistance = 200
        this.spawnTime = 2 
        this.platform =  new Platform ()
    }

    draw (){
        this.platform.draw()
    }

    update (){
        this.platform.update()
    }
}