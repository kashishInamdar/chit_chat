import express from 'express';
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js"
dotenv.config();

const app = express();


app.get("/",(req , res)=>{
    res.send("Hello Server I am Kashish form Soneki chidya")
})

app.use("/api/auth", authroutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log(`server Running 🏃‍♀️ on ${PORT} port.`)
    console.log(process.env.PORT)
})