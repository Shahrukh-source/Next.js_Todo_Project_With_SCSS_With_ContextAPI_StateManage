import mongoose from "mongoose"

export const connectDB = async()=>{
  const {connection} = await mongoose.connect(process.env.MONGODB_URI,{
    dbName:"next13"
  });
  console.log(`Database Connected on ${connection.host}`);
}

