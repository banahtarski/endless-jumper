	const canvas = document.querySelector('canvas')
	const c = canvas.getContext ('2d')

	// pozadina setup
	canvas.width = 675
	canvas.height = 1200

	const gravity = 0.5

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
			c.fillStyle = 'red'
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
	}

	const player = new Player( {
		x: 0,
		y: 0,
	})
	const player2 = new Player( {
		x: 300,
		y: 100,
	})

	const keys = {
		d : {
			pressed: false,
		},
		a : {
			pressed: false,
		},
	}

	// animation loop funkcija, potrebna je gravitacija za padanje karaktera i kretanje
	function animate() {
		window.requestAnimationFrame(animate)  // ova funkcija ce se pozivati i raditi u loop-u

		// ovde stoji zbog nepromenljivosti izgleda karaktera; sprecava da se karakter produzava po y osi
		c.fillStyle = 'white' //boja pozadine
		c.fillRect (0, 0, canvas.width, canvas.height) //pozicioniranje pozadine 
	
		player.update()
		player2.update()

		player.velocity.x = 0
		if (keys.d.pressed) player.velocity.x = 5
		else if (keys.a.pressed) player.velocity.x = -5
	}

	animate()

	//detekcija pritiskanja tastera na tastaturi za kretanje karaktera
	window.addEventListener('keydown', (event) => {
		switch (event.key) {
			case 'd':
				keys.d.pressed = true
				break
			case 'a':
				keys.a.pressed = true
				break
			case 'w':
				player.velocity.y = -15
				break
		}
	})

	window.addEventListener('keyup', (event) => {
		switch (event.key) {
			case 'd':
				keys.d.pressed = false
				break
			case 'a':
				keys.a.pressed = false
				break
			case 'w':
				player.velocity.y = -15
				break
		}
	})