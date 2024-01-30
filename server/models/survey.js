import mongoose from "mongoose";

const { Schema } = mongoose;
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
        questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    },
    { timestamps: true }
);

const Survey = mongoose.model("Survey", SurveySchema);

export default Survey;