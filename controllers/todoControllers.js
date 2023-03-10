const postTodo = (req, res) => {
    console.log("POST /todos/")
    let newItem = {};
    newItem.id = getRandomInt();
    newItem.description = req.body.description;
    newItem.completed = false;

    database.push(newItem);

    res.json(newItem)
}

const getAllTodos = (req, res) => {
    console.log("GET /todos");

    res.json(database)
}

const getTodoByID = (req, res) => {
    console.log("GET /todos/:id");

    let myId = req.params.id

    let matchingItem = database.find((item, index) => {
        return item.id == myId
    })

    if (matchingItem) {
        res.json(matchingItem)
    } else {
        res.send("Invalid ID")
    }
}

const deleteTodo = (req, res) => {
    console.log("DELETE /todos/:id");

    let myId = req.params.id

    let matchingIndex = database.find((item, index) => {
        return item.id == myId
    })

    if (matchingIndex) {
        let deletedItem = database.splice(matchingIndex, 1)
        res.json(deletedItem)
    } else {
        res.send("Invalid ID")
    }

}

const updateTodo = (req, res) => {
    console.log("PUT /todos/:id");

    let myId = req.params.id
    let description = req.body.description
    let completed = req.body.completed == true

    let matchingItem = database.find((item, index) => {
        return item.id == myId
    })

    if (matchingItem) {
        matchingItem.description = description;
        matchingItem.completed = completed;
        res.json(matchingItem)

    } else {
        res.send("Invalid ID")
    }
}

// not exporting them all because we just did the postTodo in class

module.exports = { postTodo, getAllTodos, getTodoByID, deleteTodo, updateTodo }
