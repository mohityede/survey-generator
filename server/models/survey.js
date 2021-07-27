import mongoose from "mongoose";

const reqString = {
    type: String,
    required: true
}

const QuestionSchema = new mongoose.Schema(
    {
        question: reqString,
        isRequired: {
            type: Boolean,
            required: true
        },
        type: reqString,
        options: {
            type: Array,
            default: [{ value: null }],
        }
    }
)

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
        questions: [QuestionSchema]
    },
    { timestamps: true }
);

const Survey = mongoose.model("Survey", SurveySchema);

export default Survey;