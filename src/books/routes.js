const { Router } = require("express")
const bookRouter = Router();
const Book = require("./model")

const {addBook} = require("./controllers");
const {changeAuthor} = require("./controllers");
const {getByTitle} = require("./controllers");
const {getAll} = require("./controllers");
const {deleteByTitle} = require("./controllers");
const {deleteAll} = require("./controllers");
const {dynamicUpdate} = require("./controllers");
const {dynamicUpdateExample2} = require("./controllers");
const {bookFindByURL} = require("./controllers");

bookRouter.post("/books/addbook", addBook);
bookRouter.put("/books/changeauthor", changeAuthor);
bookRouter.get("/books/getbytitle", getByTitle);
bookRouter.get("/books/getall", getAll);
bookRouter.delete("/books/deletebytitle", deleteByTitle);
bookRouter.delete("/books/deleteall", deleteAll);
bookRouter.put("/books/dynamicupdate", dynamicUpdate);
bookRouter.put("/books/dynamicupdatetwo", dynamicUpdateExample2);
bookRouter.get("/books/:bookName", bookFindByURL);

module.exports = bookRouter;