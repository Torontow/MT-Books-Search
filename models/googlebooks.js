const mongooose = require("mongoose");
const Schema = mongoose.Schema;

const googlebooksSchema = new Schema ({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    imageUrl: String,
    link: String
})

const GoogleBooks = mongoose.model("googlebooks", googlebooksSchema)

module.exports = GoogleBooks