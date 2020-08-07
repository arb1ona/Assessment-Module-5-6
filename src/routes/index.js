const express = require("express")
const nameSchema = require("../schema")
const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const newUser = new nameSchema(req.body)
        const response = await newUser.save()
        res.send(response)

    } catch (error) { }
})


router.get("/", async (req, res) => {
    const users = await nameSchema.find()
    const num = Math.floor(Math.random() * (users.length - 1));
   // const num = Math.floor(Math.random() * ((users.length - 1) - 0)) + 0;
    await nameSchema.findByIdAndDelete(users[num]._id)
    res.send(users[num])


})

module.exports = router
