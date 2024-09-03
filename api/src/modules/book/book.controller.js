import { Author } from "../../../DataBase/models/author.model.js";
import { Book } from "../../../DataBase/models/book.model.js";



// add book
const addBook = async (req, res, next) => {
    const { title, content, author } = req.body;
    // Create a new book
    const book = await Book.create({ title, content, author });
    // Update the author to include the new book's ID
    await Author.findByIdAndUpdate(author, { $push: { books: book._id } });
    res.status(201).json({ message: "Book created sucessfully", book });

}

//getAllbooks
const getAllBooks = async (req, res, next) => {
    const books = await Book.find();
    res.status(200).json({ message: "success", books });
}

//getById 
const getBookById = async (req, res, next) => {
    const id = req.params.id
    // cheak if Book exist
    const isExist = await Book.findById(id)
    if (!isExist) {
        return res.status(404).json({ message: "book not found" });
    }
    const book = await Book.findById(id);
    res.status(200).json({ message: "success", book });
}

//updateById
const updateBook = async (req, res, next) => {
    const id = req.params.id
    // cheak if Book exist
    const isExist = await Book.findById(id)
    if (!isExist) {
        return res.status(404).json({ message: "book not found" });
    }
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true }); //to return new book after update { new: true}
    res.status(200).json({ message: "success", book });
}

//deleteBook
const deleteBook = async (req, res, next) => {
    const { bookId, authorId } = req.params;
    // cheak if Book exist
    const book = await Book.findById(bookId)
    if (!book) {
        return res.status(404).json({ message: "book not found" });
    }
    // Remove the book from the author's books array
    await Author.findByIdAndUpdate(authorId, { $pull: { books: bookId } });
    await Book.findByIdAndDelete(bookId);
    res.status(200).json({ message: "Book deleted successfully" });
} 

//Implement search functionality to filter books by title or author
const searchBook = async (req, res, next) => {
    const search = req.query.q;
    const books = await Book.find({
        $or: [
            { title: { $regex: search, $options: 'i' } },
            { author: { $regex: search, $options: 'i' } }
        ]
    });
    res.status(200).json({ message: "success", books });
}



export {
    addBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
    searchBook
}