
export const signup = async(req ,res)=>{
   try{
        const {fullName, password , confirmPassword , gender } = req.body;

   }catch(err){

   }
}

export const login = (req ,res)=>{
    console.log("Login User");
}

export const logout = (req , res)=>{
    console.log("Logout User");
}
