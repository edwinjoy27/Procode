const express = require("express")
const route = express.Router()


//home
route.get("/",(req,res) => {

	res.render("home")
})

//algorithm page
route.get("/algorithm",(req,res) => {
	
	res.render("algorithm")

} )

//regex page
route.get("/regex",(req,res) => {
	
	res.render("regex")

} )

//ascii page
route.get("/ascii",(req,res) => {
	
	res.render("ascii")

} )

//gradient suggestion
route.get("/gradient" , (req,res) => {

		res.render("gradient")
})

//art_generator
route.get("/generator",(req,res) => {

	res.render("art_generator")
})

module.exports = route 