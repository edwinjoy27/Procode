const color_display = document.getElementById('color_display')
const slide_btn = document.getElementById('slide_btn')
function random_number(){
	return Math.floor(Math.random()*(256-30) + 0)
}


function rgb(){
	return `rgb(${random_number()},${random_number()},${random_number()})`
}

// console.log(random_number())
// console.log(random_number())


color_display.style.backgroundImage = `linear-gradient(to right,${rgb()},${rgb()})`

slide_btn.addEventListener('click',() => {
	console.log("triggered")
	console.log(rgb())

	color_display.style.backgroundImage = `linear-gradient(to right,${rgb()},${rgb()})`
	// color_display.style.backgroundColor = `rgb(${random_number()},${random_number()},${random_number()})`
})