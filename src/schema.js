const { Schema, model } = require("mongoose")

const nameSchema = new Schema({
    name: String
})

module.exports = model("name", nameSchema)