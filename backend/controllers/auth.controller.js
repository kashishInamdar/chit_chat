import bcrypt from "bcryptjs"
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async(req ,res)=>{
   try{
        const {profilePic ,gender , password, confirmPassword, userName, fullName } = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error : "Password don't match "});
        }

        const user = await User.findOne({userName});

        if(user){
            return res.status(400).json({error: "Username alrady exists"})
        }

        // HASH PASSWORD HEAR
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password , salt);

        // https://avatar-placeholder.iran.liara.run/document
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;

        const newUser = new User({
            fullName,
            userName,
            password : hashedPassword,
            gender,
            profilePic : gender === "male"? boyProfilePic : girlProfilePic,
        })

        if(newUser){
            // Generate JWT token hear ; 
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                gender: newUser.gender,
                profilePic : newUser.profilePic

            })
        }else{
            res.status(400).json({error : "Invalid User data"})
        }
   }catch(error){
    console.log("Error on signup controller", error.message);
    res.status(500).json({ error : "Internal Server Error"});
   }
};

export const login = async(req ,res)=>{
    try{
        const {userName , password} = req.body;

        // Fetch user from database
        const user = await User.findOne({userName});
        const isPasswordCorrect = await bcrypt.compare(password , user?.password || "");
    
        // Check if user exists and password is correct
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error : "Invalid username or password"});
        }
        
        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id : user._id,
            fullName : user.fullName,
            userName : user.userName,
            profilePic : user.profilePic,
        })
        
    }catch(error){
    console.log("Error on Login controller", error.message);
    res.status(500).json({ error : "Internal Server Error"});
   }
}

export const logout =  async (req ,res)=>{
    try{
        res.cookie("jwt", "", {maxAge : 0});
        res.status(200).json({message : "Logged out successfully"});
    }catch(error){
        console.log("Error in Logout controller" , error.massage );
        res.status(200).json({error : "Internal SERVER Error"});
    }
}
