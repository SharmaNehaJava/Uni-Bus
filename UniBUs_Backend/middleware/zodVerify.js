const {z}=require("zod")

 const userSignup=z.object({
    username:z
    .string({required_error:"SystemId is required"})
    .min(10,{message:"InValid SystemID"}),

    email:z.string().email({required_error:"Email is required"}),
    
    password:z.string({required_error:"password is required"})
    .min(4,{messgae:"Minimum length of password should be 4"})
})

 const userSignin=z.object({
    username:z
    .string({required_error:"SystemId is required"})
    .min(10,{message:"InValid SystemID"}),

    password:z.string({required_error:"password is required"})
    .min(4,{messgae:"Minimum length of password should be 4"})
})

module.exports={
    userSignup,userSignin
}