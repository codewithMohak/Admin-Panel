import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { User } from "./models/User.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

dotenv.config();
//MIDDLEWARE

app.use(cors());
app.use(bodyParser.json());

//ROUTES
app.use("/users", userRoutes);

mongoose.connect(process.env.MONGO_URI, {
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//START THE SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
