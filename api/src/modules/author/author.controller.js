import { Author } from "../../../DataBase/models/author.model.js"
import { Book } from "../../../DataBase/models/book.model.js"


//creat author
const createAuthor = async (req, res, next) => {
    const { name, bio, birthDate, Books } = req.body
    //check author exist by name
    const authorExist = await Author.findOne({ name })
    if (authorExist) {
        return res.status(404).json({ message: "Author aleardy exists" })
    }
    const author = await Author.insertMany(req.body)
    res.status(201).json({ message: "Author created successfully", author })

}

//getAllAuthor
const getAllAuthor = async (req, res, next) => {
    const authors = await Author.find().populate("books")
    res.status(200).json({ message: "Authors fetched successfully", authors })
}

// getAutorById
const getAutorById = async (req, res, next) => {
    const id = req.params.id
    // check author exist 
    const exist = await Author.findById(id)
    if (!exist) {
        return res.status(404).json({ message: "Author not found" })
        }
        const author = await Author.findById(id)
        res.status(200).json({ message: "Author fetched successfully", author })

}

// updateAuthor
const updateAuthor = async (req, res, next) => {
    const id = req.params.id
     // check author exist 
     const exist = await Author.findById(id)
     if (!exist) {
         return res.status(404).json({ message: "Author not found" })
         }
         const author = await Author.findByIdAndUpdate(id, req.body, { new: true })
         res.status(200).json({ message: "Author updated successfully", author })
    
}

// deleteAuthor
const deleteAuthor = async (req, res, next) => {
    const id = req.params.id
     // check author exist 
     const exist = await Author.findById(id)
     if (!exist) {
         return res.status(404).json({ message: "Author not found" })
         }
         await Author.findByIdAndDelete(id)
         res.status(200).json({ message: "Author deleted successfully" })

}

// search author by name or bio
const searchAuthor = async (req, res, next) => {
    const query = req.query.q
    const authors = await Author.find({ $or: [{ name: { $regex: query,
        $options: 'i' } }, { bio: { $regex: query, $options
            : 'i' } }] })
            res.status(200).json({ message: "Authors fetched successfully", authors })
}

export {
    createAuthor,
    getAllAuthor,
    getAutorById,
    updateAuthor,
    deleteAuthor,
    searchAuthor
} 