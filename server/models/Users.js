const mongoose = require("mongoose");

// Setup of schema of database
const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

// access or creates collection with specified name and specified schema
const UserModel = mongoose.model("users", UsersSchema)
// to get access to this model outside of file
module.exports = UserModel