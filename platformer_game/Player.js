//klasa za iscrtavanje igraca koja se moze menjati po potrebi
class Player {
    constructor(position) {
        this.position = position
        this.speed = {
            x: 0,
            y: 1
        }
        this.height = 100
    }

    draw() { //metoda
        c.fillStyle = 'gray'
        c.fillRect(this.position.x, this.position.y, 100, 100)
    }

    update() { //stavljena ovde u slucaju menjanja playera
        this.draw()

        this.position.x += this.speed.x
        this.position.y += this.speed.y //gravitacija

        if (this.position.y + this.height + this.speed.y < canvas.height) 
            this.speed.y += gravity
        else this.speed.y = 0 //efekat blagog udaranja o pod
    }

    goLeft (){
        this.speed.x = -5
    }

    goRight (){
        this.speed.x = 5
    }

    stop (){
        this.speed.x = 0
    }

    goUp (){
        this.speed.y = -8
    }
}
