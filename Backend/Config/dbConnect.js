import mongoose from "mongoose";

const mongoConnect = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected Successfully");
    }
    catch(error){
        console.log("Error to Connect with Mongodb",error.message);
    }

}

export default mongoConnect;