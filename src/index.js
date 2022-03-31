

const express = require("express");
const connect = require("./configs/db");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const userController = require("./controllers/user.controller")
const {register,login} = require("../src/controllers/signup.constrollers")

app.use("/users", userController)

app.post("/register", register)

app.post("/login", login)

app.listen(3000, async () => {
    try{
        await connect();
        console.log("listening on port 3000")
    }
    catch(err){
        console.log(err.message);
    }
});