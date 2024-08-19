import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBookById, searchBook, updateBook } from "./book.controller.js";



const bookRouter = Router()

bookRouter.route('/').post(addBook).get(getAllBooks)
bookRouter.get('/search',searchBook)          //Cast to ObjectId failed
bookRouter.route('/:id').get(getBookById).patch(updateBook).delete(deleteBook)








export default bookRouter;  