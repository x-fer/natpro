const express = require('express')

const PORT = process.env.PORT || 7070

const app = express()

app.use(express.static(__dirname + '/website/build'))

app.get(/.*/, (req, res) => 
    res.sendFile(__dirname + '/website/build/index.html'))

app.listen(PORT)
console.log("Server started!")
