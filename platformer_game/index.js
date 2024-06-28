// definisanje instance klase canvas koriscenjem querySelector metode globalnog HTML objekta document (predstavlja celu html stranicu ucitanu u web pregledac)
const canvas = document.querySelector('canvas') // vraca prvi element unutar dokumenta koji odgovara zadatom CSS selektoru
// const c je objekat, tj instanca klase canvas, nakon dobijanja 2d konteksta pomocu fje getContext ta vrednost se dodeljuje objektu c (ista logika kao a=3*7)
const c = canvas.getContext ('2d')

// dodela vrednosti poljima height i width objekta canvas
canvas.width = 675
canvas.height = 1200

const gravity = 0.1 // definisanje konstante gravity

// definisanje instance klase Player pozivanjem konstruktora
const player = new Player( {
	x: 0,
	y: 0,
})

// definisanje instance klase Platform
const platformSpawner = new PlatformSpawner()

// definisanje konstante keys (tipa objekat) pomocu objekata tj polja a i d tipa boolean
const keys = { //objekat keys koji je jednak instanci neimenovane klase 
	d : { //objekat pressed koji je jednak instanci neimenovane klase i sadrzi polje pressed, tipa boolean
		pressed: false,
	},
	a : {
		pressed: false,
	},
}

//EventListener reaguje na kljucne reci keyup i keydown i izvrsava anonimnu fju (event)
//dok je sam event objekat koji sadrzi informacije o dogadjaju
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

// definisanje funkcije animate i sta ona obavlja u {}, poziva se u svakom render ciklusu ->63
function animate() {

	 // ova funkcija tj metoda poziva izvrsavanje fje animate koja ce se izvrsiti 
	 //pred crtanje sledeceg frejma animacije (sledeceg osvezavanja pretrazivaca)
	window.requestAnimationFrame(animate) 

	// definisanje boje polja tj atributa fillStyle objekta c
	c.fillStyle = 'white' 
	// prosledjuju se parametri metodi fillRect objekta c
	c.fillRect (0, 0, canvas.width, canvas.height) 

	player.update() //pozivanje metode update iz instance klase/nad novonapravljenim objektom player
	platformSpawner.update() //pozivanje metode update iz objekta platform

	if (keys.d.pressed) player.goRight() //fja kaze da ukoliko je ispunjen uslov da je detektovan pritisak tastera d, to poziva na izvrsavanje metodu goRight iz klase player
	else if (keys.a.pressed) player.goLeft() //ukoliko je izvrsen sledeci uslov poziva se metoda goLeft iz klase player
	else player.stop() //ukoliko nije ispunjen ni jedan uslov funkcija poziva metodu stop iz klase player
}

animate() // pozivanje fje animate
