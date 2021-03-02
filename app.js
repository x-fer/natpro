const express = require('express')

const PORT = process.env.PORT || 7070

const app = express()

//static serve
app.use(express.static(__dirname + '/website/build'))

//hangle SPA
app.get(/.*/, (req, res) => 
    res.sendFile(__dirname + '/website/build/index.html'))


app.listen(PORT)
console.log("Server started!")
