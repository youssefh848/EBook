import { mongoose } from "mongoose";


export const dbconnection = mongoose.connect('mongodb://127.0.0.1:27017/ebooks').then(() => {
    console.log('Connected to MongoDB')

}).catch((err) => {
    console.log({ message: "Faild connected Db ", err })
});
