//grabbing the input tag
var input_field = document.getElementById('input_field')

//grabbing display_bar section
const display_bar_section = document.getElementById('display_bar_section')

//grabbing pop_up div
const pop_up = document.getElementById('pop_up')

//grabbing the select div
const select_option = document.getElementById('algos')

const btn = document.getElementsByClassName('button')

//for altering description that needs to be written at 
// the bottom

const pivot = document.getElementById('pivot') 
const main = document.getElementById('main') 
const swap_bar = document.getElementById('swap') 

//button that genertes random data
const random_btn = document.getElementById('random_btn')

// pivot.style.display = "none"
// main.style.display = "none"
// swap_bar.style.display = "none"

function trigger(val){
	btn[0].disabled = val
	random_btn.disabled = val
	btn[1].disabled = val
}

var values_to_be_sorted = []


function final_sorted(){

	
 	display_bar_section.innerHTML = " "
 	values_to_be_sorted.forEach(elm => {


		var display_bar = document.createElement('div')
		display_bar.setAttribute('class', 'display_bar')

		var values = elm
		// display_bar.innerHTML = values
		display_bar.style.height = values + 'px'

		display_bar.style.backgroundColor = "rgb(23,65,111)"
		display_bar_section.appendChild(display_bar)

 	})

}




//adding bars to the display section
btn[0].addEventListener('click', () => {

	var display_bar = document.createElement('div')
	display_bar.setAttribute('class', 'display_bar')

	var values = input_field.value

	if(values != "" && parseInt(values) > 0  &&  parseInt(values) < 500){
		values_to_be_sorted.push(parseInt(values))
		// display_bar.innerHTML = values

		display_bar.style.height = values + 'px'
		display_bar.style.backgroundColor = "rgb(23,65,111)"

		//appending the it to the display bar
		display_bar_section.appendChild(display_bar)
	}
	input_field.value = ""

})

function swap(j,i){
	var temp = values_to_be_sorted[j]
	values_to_be_sorted[j] = values_to_be_sorted[i]
	values_to_be_sorted[i] = temp
}

//function to sort the array using bubble sort	
async function swap_bubble(j,i,array_length){
	return new Promise(res => {

						display_bar_section.innerHTML = " "
						values_to_be_sorted.forEach(elm => {

						var display_bar = document.createElement('div')
						display_bar.setAttribute('class', 'display_bar')

						var values = elm
						// display_bar.innerHTML = values
						display_bar.style.height = values + 'px'

						if(elm === values_to_be_sorted[j+1])
							display_bar.style.backgroundColor = "rgb(23,167,111)" //off green

						else if(elm === values_to_be_sorted[j])
							display_bar.style.backgroundColor = "rgb(50,123,111)" //dark - green

						// else if(values_to_be_sorted.indexOf(elm) > array_length - i -1 )
						// 	display_bar.style.backgroundColor = "#db8c84"

						else
							display_bar.style.backgroundColor = "rgb(23,65,111)"

						//appending the it to the display bar
						display_bar_section.appendChild(display_bar)

					})
				// console.log("after sorting ",values_to_be_sorted)
					
				if(values_to_be_sorted[j] > values_to_be_sorted[j+1]){


						swap(j,j+1)
							
					//displaying the sorted array
	
			 }

			 setTimeout(() =>{
			 	res()
			 },90)

	} )
}

//bubble sorting algorithm	
async function bubble_sort(array_length){

	var bar_elements = document.getElementsByClassName('display_bar')
	console.log("before sorting ",values_to_be_sorted)

	for(let i = 0; i < values_to_be_sorted.length ; i++){

		for(let j = 0; j < array_length - i - 1 ; j++){


			await swap_bubble(j,i,array_length)
	
		}



	}


	final_sorted()

	trigger(false)

}

//swapping condition
async function selection_sort_condition(min,i){
	return new Promise(res => {
		swap(min, i)

		setTimeout(() =>{
			res()
		},500)

	})
}

//function to perform selection sort

async function selection_sort(array_length){

 	console.log("before sorting : ",values_to_be_sorted)	

 	for(let i = 0; i < values_to_be_sorted.length ; i++){

 		let min = i

 		for(let j = i+1; j < array_length; j++){

 			

 			if(values_to_be_sorted[j] < values_to_be_sorted[min])

 				min = j
 		}

 		//for displaying the bars
 			display_bar_section.innerHTML = " "
 			values_to_be_sorted.forEach(elm => {

				var display_bar = document.createElement('div')
				display_bar.setAttribute('class', 'display_bar')

				var values = elm
				// display_bar.innerHTML = values
				display_bar.style.height = values + 'px'

				if(values_to_be_sorted.indexOf(elm) === values_to_be_sorted.indexOf(values_to_be_sorted[min]))
				display_bar.style.backgroundColor = "rgb(23,167,111)"

				else if(values_to_be_sorted.indexOf(elm) === values_to_be_sorted.indexOf(values_to_be_sorted[i]))
					display_bar.style.backgroundColor = "rgb(50,123,111)"

				else
					display_bar.style.backgroundColor = "rgb(23,65,111)"

				//appending the it to the display bar
				display_bar_section.appendChild(display_bar)

 			})
 			




 		await selection_sort_condition(min,i)

 	} 	


 	final_sorted()
	trigger(false)

}

//function to delay quick sort
async function delay_swapping(pivot,j,i){


	return new Promise(res => {
			
 		display_bar_section.innerHTML = " "

		values_to_be_sorted.forEach(elm => {

			var display_bar = document.createElement('div')
			display_bar.setAttribute('class', 'display_bar')

			var values = elm
			// display_bar.innerHTML = values
			display_bar.style.height = values + 'px'

			if(values_to_be_sorted.indexOf(elm) === values_to_be_sorted.indexOf(values_to_be_sorted[pivot])){

		
				display_bar.style.backgroundColor = "#7b3e32" //maroonish
			}
			else if(values_to_be_sorted.indexOf(elm) === values_to_be_sorted.indexOf(values_to_be_sorted[i])){
				display_bar.style.backgroundColor = "rgb(23,167,111)" //yellow
			}
			else if(values_to_be_sorted.indexOf(elm) === values_to_be_sorted.indexOf(values_to_be_sorted[j])){
		
				display_bar.style.backgroundColor = "rgb(50,123,111)" //pink
			}
			else{
		
				display_bar.style.backgroundColor =  "rgb(23,65,111)"
			}


			display_bar_section.appendChild(display_bar)


		})

		// swap(pivot,j)

		setTimeout(() => {
			res()
		},600)

	})
}


async function quick_sort(first,last){

		let i 
		let j
		let pivot 

		// await delay_swapping(pivot,j)
		if(first<last){

			i = first
			j = last
			pivot = first
			
			while(j > i){
				while(values_to_be_sorted[i] <= values_to_be_sorted[pivot] && i<last)
					i++
				while(values_to_be_sorted[j] > values_to_be_sorted[pivot])
					j--
				// console.log(values_to_be_sorted)
				if(i<j){
					swap(i,j)
					// console.log(values_to_be_sorted)
				}				
				await delay_swapping(pivot,j,i)
			}
			swap(pivot,j)
			quick_sort(first, j-1)
			quick_sort(j+1,last)
		}

		final_sorted()
	}

btn[1].addEventListener('click',async () => {

	btn[0].disabled = true
	random_btn.disabled = true
	btn[1].disabled = true
	let array_length = values_to_be_sorted.length
	var sorting = select_option.value



	if(sorting === "bubble"){

		//displaying the information regarding the colors
		main.style.display = "block"
		swap_bar.style.display = "block"


		const swap_div = document.getElementById('swap_div')
		swap_div.style.backgroundColor = "rgb(50,123,111)"

		const main_div = document.getElementById('main_div')
		main_div.style.backgroundColor = "rgb(23,167,111)" 

		bubble_sort(array_length)
	}
	else if (sorting === "selection" ){
		
		//displaying the information regarding the colors
		main.style.display = "block"
		swap_bar.style.display = "block"
		const swap_div = document.getElementById('swap_div')
		swap_div.style.backgroundColor = "rgb(50,123,111)"

		const main_div = document.getElementById('main_div')
		main_div.style.backgroundColor = "rgb(23,167,111)" 

		selection_sort(array_length)
	}
	else if(sorting === "quick"){

		//displaying the information regarding the colors
		main.style.display = "block"
		swap_bar.style.display = "block"
		pivot.style.display = "block"

		const swap_div = document.getElementById('swap_div')
		swap_div.style.backgroundColor = "rgb(50,123,111)"

		const main_div = document.getElementById('main_div')
		main_div.style.backgroundColor = "rgb(23,167,111)" 

		const pivot_div = document.getElementById('pivot_div')
		pivot_div.style.backgroundColor = "#7b3e32"


		await quick_sort(0,array_length-1)
		trigger(false)
	}

})

var erase_btn = document.getElementsByClassName('erase_all')[0]

erase_btn.addEventListener('click',() => {
	// display_bar_section.innerHTML =" "
	// const dis = document.getElementById('description')
	// dis.style.display = "none"

		values_to_be_sorted = []
		window.location.reload()
	// else
	// 	values_to_be_sorted = []


})

function random_generator(){
	return Math.floor(Math.random()*(499-10) + 10)
}

random_btn.addEventListener('click', () => {

	values_to_be_sorted = []

	for(let i = 0; i < 50; i++){
		values_to_be_sorted.push(random_generator())
	}

	final_sorted()

})