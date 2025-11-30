import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRouter from "./routers/userRouter.js"; 
import employeeRouter from "./routers/employeeRouter.js";
import { connectDb } from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: "https://101490785-comp3123-assignment2-fron.vercel.app",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.type('html').send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>COMP3123 Assignment 2 Backend</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <h1>COMP3123 Assignment 2 Backend</h1>
        <h2>Max Tran</h2>
        <h2>101490785</h2>
      </body>
    </html>
  `)
})

app.use("/api/v1/user", userRouter);

app.use("/api/v1/emp", employeeRouter);

await connectDb();

export default app;
