import mongoose from "mongoose";

const reqString = {
    type: String,
    required: true
}

const QuestionSchema = new mongoose.Schema(
    {
        question: reqString,
        options: [{
            option: reqString,
            voteCounts: {
                type: Number,
                default: 0
            }
        }]
    }
)

const Question = mongoose.model("Question", QuestionSchema);

export default Question;