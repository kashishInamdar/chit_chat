import mongoose, { Schema , model } from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants : [
        {
            type : Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    messages: [
        {
            type : Schema.Types.ObjectId,
            ref : "Message",
            default : [],
        },
    ],
}, {timestamps : true});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation ;