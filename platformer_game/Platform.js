class Platform {
    constructor(yInitial) {
        this.position = {
            x: Math.floor(Math.random() * 400),
            y: yInitial
        }
        this.platformSpeed = 1
        this.height = 30
        this.width = 200
    }

    draw() {
        c.fillStyle = 'black'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.y += this.platformSpeed 
    }

    speedUp (){
        this.platformSpeed += 0.1
    }

}
