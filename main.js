const express = require('express')
const app = express() 

app.use(express.static(__dirname+'/public'))
const PORT = process.env.PORT || 8080

app.set('view engine', 'ejs')


//home
app.get("/",(req,res) => {

	res.render("home")
})

//algorithm page
app.get("/algorithm",(req,res) => {
	
	res.render('algorithm')

} )

//regex page
app.get("/regex",(req,res) => {
	
	res.render('regex')

} )

//ascii page
app.get("/ascii",(req,res) => {
	
	res.render('ascii')

} )

app.listen(PORT, () => {
	console.log("running on port 8080")
})