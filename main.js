const express = require('express')
const app = express() 

app.use(express.static(__dirname+'public'))
const PORT = process.env.PORT || 8080

app.set('view engine', 'ejs')

//home
app.get("/",(req,res) => {
	res.render('home')
} )

app.listen(PORT, () => {
	console.log("running on port 8080")
})