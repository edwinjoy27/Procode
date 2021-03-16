var canvas = document.getElementById('canvas')
// canvas.style.backgroundColor = "rgb(21,43,55)"
// canvas.style.backgroundColor = "rgb(25,100,55)"
var ctx = canvas.getContext('2d')
console.log("hy")
var download = document.getElementById('download')
ctx.fillStyle = "rgb(21,43,55)"
ctx.fillRect(0,0,canvas.width,canvas.height)
//(x-axis, y-axis, radius, sangle thing, eangle)
function random_number(max,min){
	return Math.floor(Math.random()*(max-min) + min)
}


function rectanle_generator(){
	ctx.lineWidth = 8
	var axis = {
		x : random_number(980,10),
		y :  random_number(380,10),
		width : random_number(300,200),
		height : random_number(250,150) 
		} 


	ctx.strokeStyle = "rgb(0, 110, 13)"
	ctx.beginPath()
	ctx.rect(axis.x, axis.y, axis.width, axis.height)
	ctx.stroke()
	ctx.closePath()
}

// ctx.beginPath()
function circle_generator(){
	ctx.lineWidth = 5
ctx.strokeStyle = "rgb(234,56,23)"
let x = random_number(980,10)
let y = random_number(380,10)
let size = random_number(60,30)

ctx.beginPath()

ctx.arc(x, y, size - 20, 0, 2 * Math.PI);
ctx.stroke()
ctx.closePath()

}


for(var i = 0; i <= 15; i ++){
	circle_generator()
	if(i < 3)
		rectanle_generator()
}


download.addEventListener('click',() => {
	var image = canvas.toDataURL("image/jpg") 
	download.href = image
})

// function draw() {
//     ctx.beginPath();
//     ctx.strokeStyle = "rgb(234,56,23)"
//     ctx.moveTo(20,70);
//     ctx.lineTo(200,70);
//     ctx.lineTo(100,25);
//     ctx.stroke();
        
//      }
    

// draw();