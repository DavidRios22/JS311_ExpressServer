console.log("loading main.js");

let express = require("express")

let app = express()
let PORT = 8080

app.get("/hello", (req, res) => {
    res.send("hello from the hello route")
})

app.get("/hello/:name", (req, res) => {
    let name = req.params.name
    let message = "hello " + name
    let message2 = `hello ${name}`
    res.send(message2)
})

app.get("/bye", (req, res) => {
    let name = req.query.name
    if (name) {
        res.send(`See you later ${name}`)
    } else {
        res.send("See you later")
    }
})

app.listen(PORT, () => {console.log("Application is listening on PORT",PORT);})