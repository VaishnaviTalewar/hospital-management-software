import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import ConnectDb from "./utility/connectDB.js";
dotenv.config();
let PORT = process.env.PORT || 8000;
let DATABASE_URL = process.env.DATABASE_URL;
let server = express();

//connecting server to db
ConnectDb(DATABASE_URL);

server.get("/", (req, res) => {
    res.send("Welcome to Backend of Hospital Management Software ")
})

server.listen(PORT, () => {
    console.log(`server is running at 'http://localhost:${PORT}'`)
});

//MVC :
//Model : database me data organize krta h
//view : frontend ko represent krta h . joh display hota h 
//controller : req res ko control krta h.