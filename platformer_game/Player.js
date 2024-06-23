	//klasa za iscrtavanje igraca koja se moze menjati po potrebi
	class Player {
		constructor(position) {
			this.position = position
			this.velocity = {
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

			this.position.x += this.velocity.x
			this.position.y += this.velocity.y //gravitacija

			if (this.position.y + this.height + this.velocity.y < canvas.height) 
				this.velocity.y += gravity
			else this.velocity.y = 0 //efekat blagog udaranja o pod
		}

        goLeft (){
            this.velocity.x = -5
        }

        goRight (){
            this.velocity.x = 5
        }

        stop (){
            this.velocity.x = 0
        }

        goUp (){
            this.velocity.y = -8
        }
	}
