import mongoose from "mongoose"

const connectDB = async (req,res)=>{
    try {
        const conn= await mongoose.connect(process.env.MONGODB_URI);
        console.log(`mongoDB connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.error(`error: ${error.message}`);
        process.exit(1);
    }

};

export default connectDB;