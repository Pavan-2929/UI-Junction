import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRouter from "./routes/contact.routes.js";
import dotenv from 'dotenv'
dotenv.config()
const app = express();
app.use(cors())
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log("Server connected");
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongoose connected"))
  .catch((error) => console.log(error));

app.use("/api/contact", contactRouter)