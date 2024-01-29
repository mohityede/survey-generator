import mongoose from "mongoose";
import QuestionSchema from "./question";

const reqString = {
    type: String,
    required: true
}

const SurveySchema = new mongoose.Schema(
    {
        creatorName: reqString,
        email: reqString,
        title: reqString,
        subTitle: {
            type: String,
        },
        description: {
            type: String,
        },
        questions: [QuestionSchema],
        users: [reqString]
    },
    { timestamps: true }
);

const Survey = mongoose.model("Survey", SurveySchema);

export default Survey;