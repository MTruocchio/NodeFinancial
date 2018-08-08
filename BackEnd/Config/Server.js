const port = 3003
const bodyParser = require("body-parser")
const express = require("express")
const server = express()

server.use(bodyParser.urlencoded({
    extended: true,
    //useNewUrlParser: true
}))

server.use(bodyParser.json())

server.listen(port, function(){
  console.log(`Backend is running on port ${port}`)
})

//server.use(function(req, res, next){
//  res.send("ok")
//})

module.exports = server
