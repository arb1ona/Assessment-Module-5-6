const express = require("express");
const listEndpoints = require("express-list-endpoints");
const mongoose = require("mongoose")
const router = require("./routes")

const server = express();

const port = process.env.PORT

// server.get("/", (req, res) => {
//     console.log("master of hello world")
//     res.send("the server is running")
// })
server.use(express.json())
server.use("/names", router)

console.log(listEndpoints(server))

mongoose
    .connect("mongodb://localhost:27017/assesment", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        server.listen(port, () => {
            console.log("This is my port ", port)
        })
    )
    .catch((err) => console.log(err))