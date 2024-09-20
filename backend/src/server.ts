import express, { Application } from "express";
import cors from "cors";
import { router as MainRouter } from "./routes/Feed";
import { connectDB } from "./db/connector";
import bodyParser from "body-parser";

require("dotenv").config();

const app: Application = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1/news", MainRouter);

const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
