const express = require('express')
const app = express() 
const route = require('./pages/collection')
const favicon = require('serve-favicon')

app.use(express.static(__dirname+'/public'))
app.use(favicon(__dirname+'/public/css/favicon.png'))

const PORT = process.env.PORT || 8080

app.set('view engine', 'ejs')

app.use("/",route)

app.listen(PORT, () => {
	console.log("running on port 8080")
})