const express = require('express')
const app = express() 

app.use(express.static(__dirname+'/public'))
const PORT = process.env.PORT || 8080

app.set('view engine', 'ejs')


//home
app.get("/",(req,res) => {

	res.send("home")
})

//algorithm page
app.get("/algorithm",(req,res) => {
	res.render('algorithm')

	res.render('algorithm')

} )



app.listen(PORT, () => {
	console.log("running on port 8080")
})