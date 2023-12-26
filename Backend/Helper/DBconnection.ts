import mongoose from "mongoose";

const URL:string=process.env.MONGODB_URL || 'mongodb+srv://sanyam:0721@cluster0.cuvuh8j.mongodb.net/SneakerStroll?retryWrites=true&w=majority';

export const connection=async():Promise<undefined>=>{
    await mongoose.connect(URL).then(()=>{
        console.log("MongoDB Database Connected");
    }).catch((error)=>{
        console.log("Error",error.message);
    })
}
