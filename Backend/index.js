import mongoConnect from "./Config/dbConnect.js";
import router from "./Route/authRoute.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dashboardRouter from "./Route/dashboardRoute.js";
const app=express();
app.use(cors());
app.use(express.json());
dotenv.config();
//connect db
mongoConnect();
//middleware
//router

app.use("/api/auth",router);


app.use("/api/dashboard", dashboardRouter);

const port=process.env.PORT || 4001
app.listen(port,()=>{
    console.log(`port is working on ${port}`);
})
