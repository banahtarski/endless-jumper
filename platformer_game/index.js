	const canvas = document.querySelector('canvas')
	const c = canvas.getContext ('2d')

	// pozadina setup
	canvas.width = 675
	canvas.height = 1200

	const gravity = 0.1

	const player = new Player( {
		x: 0,
		y: 0,
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

		if (keys.d.pressed) player.goRight()
		else if (keys.a.pressed) player.goLeft()
		else player.stop()
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
				player.goUp()
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
		}
	})