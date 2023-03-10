console.log("loading app.js")

let express = require("express")

let PORT = 8080

let app = express()

app.use(express.json())

const toDos = require('./routes/router');

app.use(toDos)

let database = []

// app.get("/todos", (req, res) => {
//     console.log("GET /todos");

//     res.json(database)
// })

// app.get("/todos/:id", (req, res) => {
//     console.log("GET /todos/:id");

//     let myId = req.params.id

//     let matchingItem = database.find((item, index) => {
//         return item.id == myId
//     })

//     if (matchingItem) {
//         res.json(matchingItem)
//     } else {
//         res.send("Invalid ID")
//     }
// })

// app.delete("/todos/:id", (req, res) => {
//     console.log("DELETE /todos/:id");

//     let myId = req.params.id

//     let matchingIndex = database.find((item, index) => {
//         return item.id == myId
//     })

//     if (matchingIndex) {
//         let deletedItem = database.splice(matchingIndex, 1)
//         res.json(deletedItem)
//     } else {
//         res.send("Invalid ID")
//     }

// })

// app.post("/todos", (req, res) => {
//     console.log("POST /todos");

//     let newItem = {}
//     newItem.id = getRandomInt();
//     newItem.description = req.body.description;
//     newItem.completed = false;

//     database.push(newItem)

//     res.json(newItem)
// })

// app.put("/todos/:id", (req, res) => {
//     console.log("PUT /todos/:id");

//     let myId = req.params.id
//     let description = req.body.description
//     let completed = req.body.completed == true

//     let matchingItem = database.find((item, index) => {
//         return item.id == myId
//     })

//     if (matchingItem) {
//         matchingItem.description = description;
//         matchingItem.completed = completed;
//         res.json(matchingItem)

//     } else {
//         res.send("Invalid ID")
//     }
// })

// const getRandomInt = () => {
//     let randomFloat = Math.random();
//     let bigRandomFloat = randomFloat * 100000;
//     let randomInt = Math.floor(bigRandomFloat);

//     return randomInt;
// }


app.listen(PORT, () => { console.log("Application is listening on port", PORT) })

