//grabbing the input tag
var input_field = document.getElementById('input_field')

//grabbing display_bar section
const display_bar_section = document.getElementById('display_bar_section')

//grabbing pop_up div
const pop_up = document.getElementById('pop_up')

//grabbing the select div
const select_option = document.getElementById('algos')

const btn = document.getElementsByClassName('button')

var values_to_be_sorted = []


//adding bars to the display section
btn[0].addEventListener('click', () => {

	var display_bar = document.createElement('div')
	display_bar.setAttribute('class', 'display_bar')

	var values = input_field.value
	display_bar.innerHTML = values

	display_bar.style.height = values + 'px'
	display_bar.style.backgroundColor = "rgb(23,65,111)"

	//appending the it to the display bar
	display_bar_section.appendChild(display_bar)
	console.log(values) 

	if(values != "")
	values_to_be_sorted.push(parseInt(values))
	input_field.value = ""

})

//function to sort the array using bubble sort	
async function swap_bubble(j,i,array_length){
	return new Promise(res => {

		display_bar_section.innerHTML = " "
						values_to_be_sorted.forEach(elm => {

						var display_bar = document.createElement('div')
						display_bar.setAttribute('class', 'display_bar')

						var values = elm
						display_bar.innerHTML = values
						display_bar.style.height = values + 'px'

						if(elm === values_to_be_sorted[j+1])
							display_bar.style.backgroundColor = "rgb(23,167,111)"

						else if(elm === values_to_be_sorted[j])
							display_bar.style.backgroundColor = "rgb(50,123,111)"

						else if(values_to_be_sorted.indexOf(elm) > array_length - i -1 )
							display_bar.style.backgroundColor = "rgb(77,200,11)"

						else
							display_bar.style.backgroundColor = "rgb(23,65,111)"

						//appending the it to the display bar
						display_bar_section.appendChild(display_bar)

					})
				// console.log("after sorting ",values_to_be_sorted)
					
				if(values_to_be_sorted[j] > values_to_be_sorted[j+1]){

					let temp = values_to_be_sorted[j]
					values_to_be_sorted[j] = values_to_be_sorted[j+1]
					values_to_be_sorted[j+1] = temp
					//displaying the sorted array
	
			 }

			 setTimeout(() =>{
			 	res()
			 },5000)

	} )
}

//bubble sorting algorithm	
async function bubble_sort(){

	var bar_elements = document.getElementsByClassName('display_bar')
	console.log("before sorting ",values_to_be_sorted)
	let array_length = values_to_be_sorted.length

	for(let i = 0; i < array_length ; i++){

		for(let j = 0; j < array_length - i - 1 ; j++){


			await swap_bubble(j,i,array_length)
	
		}



		console.log("after sorting ",values_to_be_sorted)

	}


	display_bar_section.innerHTML = " "
	values_to_be_sorted.forEach(elm => {


			var display_bar = document.createElement('div')
			display_bar.setAttribute('class', 'display_bar')

			var values = elm
			display_bar.innerHTML = values
			display_bar.style.height = values + 'px'

			display_bar.style.backgroundColor = "rgb(77,200,11)"
			//appending the it to the display bar
			display_bar_section.appendChild(display_bar)


	})



}



btn[1].addEventListener('click',async () => {

	var sorting = select_option.value

	if(sorting === "bubble")
		await bubble_sort()


})



