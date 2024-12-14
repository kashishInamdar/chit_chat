import mongoose from "mongoose";

const connectToMongoDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB);
        console.log("MongoDB connected ❤️");
    }catch(err){
        console.log("Error Connecting to MongoDB 💔",err.message)
    }
};

export default connectToMongoDB ;
