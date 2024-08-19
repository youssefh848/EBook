import { model, Schema, Types } from "mongoose";


//schema
const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    bio: String,
    birthDate: Date,
    books: [{
        type: Types.ObjectId,
        ref: 'Book',
    }]
    
},{
    timestamps: true,
    versionKey: false
})



//model
export const Author = model('Author', schema);