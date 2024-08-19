import { Router } from "express";
import { createAuthor, deleteAuthor, getAllAuthor, getAutorById, searchAuthor, updateAuthor } from "./author.controller.js";


const authorRouter = Router()

authorRouter.route('/').post(createAuthor).get(getAllAuthor)
authorRouter.get('/search',searchAuthor)
authorRouter.route('/:id').get(getAutorById).patch(updateAuthor).delete(deleteAuthor)



export default authorRouter;