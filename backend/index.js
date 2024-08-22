
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
const app=express();
import userroute from "./route/user.route.js";

dotenv.config();

app.use(cors({
    origin:"https://bookstore-nsjq.onrender.com",
    credentials: true,
    secure: false  // change to true when deploying to production
}));
app.use(express.json());

const PORT =process.env.PORT || 4000;
const URL= process.env.MongoDBURL;

// connection for db
try {
    mongoose.connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("coonnected to mongodb");
} catch (error) {
    console.log("error ",error);
}

// defini
app.use("/book",bookRoute);
app.use("/user",userroute);

app.get('/test', (req, res)=>{
    res.json('Up and Running')
})

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})
