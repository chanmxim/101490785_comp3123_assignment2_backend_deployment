import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRouter from "../routers/userRouter.js"; 
import employeeRouter from "../routers/employeeRouter.js";
import { connectDb } from "../config/db.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: "https://101490785-comp3123-assignment2-fron.vercel.app",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/user", userRouter);

app.use("/api/v1/emp", employeeRouter);

await connectDb();

export default app;
