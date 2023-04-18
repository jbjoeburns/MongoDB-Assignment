const Book = require('./model')

//example of post to add book
const addBook = async (req, res) =>{
	try {
		const newBook = await Book.create({
			title: req.body.title,
			author: req.body.author,
			genre: req.body.genre,
		});
		const successResponse = {
			message: "success",
			newBook: newBook,
		}
		res.status(201).json(successResponse)
	} catch (error) {
		console.log(error)
	}
}

// example of put to change author by title
const changeAuthor = async (req, res) =>{
	const title = req.body.title
	const updatedAuthor = req.body.updatedAuthor
	console.log(title)
	console.log(updatedAuthor)
	try {
		const newBook = await Book.findOneAndUpdate(
			{title: title},
			{author: updatedAuthor},
			{new: true},
		)
		const successResponse = {
			message: "success",
			newBook: newBook,
		}
		res.status(201).json(successResponse)
	} catch (error) {
		console.log(error)
	}
};

//example of get function to find all books
const getAll = async (req, res) =>{
	try {
		const newBook = await Book.find()
		const successResponse = {
			message: "success",
			newBook: newBook,
		}
		res.status(201).json(successResponse)
	} catch (error) {
		console.log(error)
	}
}

//example of get to find book based on title searched
const getByTitle = async (req, res) =>{
	const findTitle = req.body.findTitle
	console.log(findTitle)
	try {
		const newBook = await Book.findOne(
			{title: findTitle}
		)
		const successResponse = {
			message: "success",
			newBook: newBook,
		}
		res.status(201).json(successResponse)
	} catch (error) {
		console.log(error)
	}
}

// example of delete to delete 1 book from db by title
const deleteByTitle = async (req, res) =>{
	const findTitle = req.body.findTitle
	console.log(findTitle)
	try {
		const newBook = await Book.deleteOne(
			{title: findTitle}
		)
		const successResponse = {
			message: "success",
			newBook: newBook,
		}
		res.status(201).json(successResponse)
	} catch (error) {
		console.log(error)
	}
};

// Deletes all books from db if body is left blank, but also just one if title is provided
const deleteAll = async (req, res) =>{
	const bodyContents = req.body
	console.log(bodyContents)
	try {
		const newBook = await Book.deleteMany(
			bodyContents
		)
		const successResponse = {
			message: "success",
			newBook: newBook,
		}
		res.status(201).json(successResponse)
	} catch (error) {
		console.log(error)
	}
};

// updates entry tied to title given, based on other parameters given (so if only given author, will only update author, but will update author and genre if given both)
const dynamicUpdate = async (req, res) =>{
	const title = req.body.title
	const toBeUpdated = req.body.tobeupdated
	console.log(title)
	console.log(toBeUpdated)
	try {
		const newBook = await Book.updateOne(
			{ title: title},
			{ $set:
				toBeUpdated
			}
		 )
		const successResponse = {
			message: "success",
			newBook: newBook,
		}
		res.status(201).json(successResponse)
	} catch (error) {
		console.log(error)
	}
};

// another way of dynamic updates, this time using variable key value pairs
const dynamicUpdateExample2 = async (req, res) =>{
	const title = req.body.title
	const whatToBeUpdated = req.body.key
    const howToBeUpdated = req.body.value
	console.log(title)
	console.log(whatToBeUpdated)
    console.log(howToBeUpdated)
	try {
		const newBook = await Book.findOneAndUpdate(
			{ title: title},
			{ [whatToBeUpdated]: howToBeUpdated },
			{new: true},
		 )
		const successResponse = {
			message: "success",
			newBook: newBook,
		}
		res.status(201).json(successResponse)
	} catch (error) {
		console.log(error)
	}
};

// can also find book by doing localhost:5001/books/<booknamehere>
const bookFindByURL = async (req, res) =>{
	const title = req.params['bookName']
	console.log(title)
	try {
		const newBook = await Book.findOne(
			{title: title}
		)
		const successResponse = {
			message: "success",
			newBook: newBook,
		}
		res.status(201).json(successResponse)
	} catch (error) {
		console.log(error)
	}
};


module.exports = {addBook, changeAuthor, getByTitle, getAll, deleteAll, deleteByTitle, dynamicUpdate, dynamicUpdateExample2, bookFindByURL}