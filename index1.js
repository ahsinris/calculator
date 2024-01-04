// const express = require("express")

// const app = express()

// app.get('/', (req, res) => {

//     res.send("This is calling '/' api")

//     console.log(req)
// })

// app.get('/login/:name/:password', (req, res) => {

//     res.send("sucess")

//     console.log(req)
// })

// app.listen(8020, (req, res) => {

//     console.log("server connected")
// })

const os = require('os')

const freememory = os.freemem();

const totalmemory = os.totalmem()

console.log(freememory);

console.log(totalmemory);