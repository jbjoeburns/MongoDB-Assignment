const express = require ("express");
const app = express();
app.use(express.json())
require("dotenv").config()
require("./db/connection")

// import model.js
const Book = require("./books/model");

const bookRouter= require ("./books/routes")
app.use(bookRouter)

app.listen(5001, () => console.log("Server is listening"))


// const myFunc = (key, value) => {
// 	return {
// 		[key]:value,
// 	}
// }

// bookKey = req.body.key
// title = req.body.title
// bookValue = req.body.value

// myFunc(bookKey, bookValue)

// // make it so it recognises the key (what you wanna change)
// // then the title (book u wanna change)
// // and value (what you're changing it to)


// refactor = optimise code by making it shorter