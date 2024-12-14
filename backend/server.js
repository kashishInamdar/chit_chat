import express from 'express';
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from './db/connectToMongoDB.js';


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parese the incoming requests with JSON payloads (from req.body).
app.use("/api/auth", authRoutes);

// app.get("/",(req , res)=>{
//     res.send("Hello Server")
// })

app.listen(PORT , ()=>{
    console.log(`server Running 🏃‍♀️ on ${PORT} port.`)
    connectToMongoDB();
})
