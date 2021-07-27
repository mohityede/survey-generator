import express from "express";
const app = express();

import mongoose from "mongoose";
import morgan from "morgan";
import cors from 'cors';
import bodyParser from 'body-parser';

import surveyRoute from "./routes/survey.js";

// @ts-ignore
mongoose.connect('mongodb://localhost:27017/serveydb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .then(() => console.log("Connected to local MongoDB database successfully..."))
    .catch((err) => console.log("error to connect with Database :", err))

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", surveyRoute);

const PORT = 7700;

app.listen(PORT, () => {
    console.log(`Backend server is running at port ${PORT}...`);
})