import { model, Schema } from "mongoose";


//schema
const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        default: Date.now
    }
},{
    versionKey: false
}
)


//model
export const Book = model('Book', schema)