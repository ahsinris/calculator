const bodyParser = require("body-parser")

const express = require("express")

const app = express()


app.use(bodyParser.json())

// // basic api

app.get('/like', (req, res) => {

    res.send("she deserves a poem not a pickup line")

    console.log(req)

})

//input data via path variables

app.get('/story/:name/:password', (req, res) => {

    res.send("ulagil kanum alaganavai anaithirukum avalin sayal")

    console.log(req.params)

})

// input data via query

app.get('/post', (req, res) => {

    res.send("her eyes are yet to tell me where they are from ")

    console.log(req.query)

})

//input data via body

app.get('/edit', (req, res) => {

    res.send("she was talking fast but all i could see was a slowmotion picture of my princess")

    console.log(req.body)
})

app.listen(3010, () => {
    console.log("server connected")
})
