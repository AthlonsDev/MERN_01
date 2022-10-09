// init express dependiency
const express = require("express");
// to use express things like telling api to start
const app = express();

const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const userModel = require("./models/Users");

//app is looking for an object but it gets a json, so express parce it automatically
app.use(express.json);

// connect back-end to font-end
const cors = require("cors");
app.use(cors());


// represents connection to cluster
mongoose.connect("mongodb+srv://userTest:password123456@cluster0.n8pbs9v.mongodb.net/Tutorial_01");

// Express method to get
// app.get()
//  Exoress method to post
// app.post()

// API Request sends request and gets a response
app.get("/getUsers", (req, res) => {
    // method to get data from database with complation handler
    userModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});
// needs to be async
app.post("/createUser", async (req, res) => {
    // pass the body of the obj from front end
    // data passed from fontend
    const user = req.body;
    const newUser = new UserModel(user);

    await newUser.save();

    res.json(user);
})

app.listen(3001, () => {
    console.log("Server runs perfectly");
    // Control C stops the server running
    // nodemon is setup to start server in package.json
})