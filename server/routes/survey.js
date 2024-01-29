import express from "express";
const router = express.Router();

import Survey from '../models/survey.js'
import Question from "../models/question.js";

// create survey
router.post('/create/survey', async (req, res) => {
    const newSurvey = new Survey(req.body);
    try {
        const savedSurvey = await newSurvey.save();
        res.status(200).json(savedSurvey);
    } catch (err) {
        res.status(500).json(err);
    }
})


// add question in survey
router.post('/:id/question', async (req, res) => {
    const { id } = req.params;
    const ques = req.body;
    try {
        const newQuestion = await new Question(ques);
        const savedQuestion = await newQuestion.save();
        const survey = await Survey.findByIdAndUpdate(id, { $push: { questions: savedQuestion._id } }, { new: true });
        res.status(200).json(survey);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get all surveys
router.get('/survey/all', async (req, res) => {
    try {
        const surveys = await Survey.find().sort({ 'updatedAt': -1 });
        res.status(200).json(surveys);
    } catch (err) {
        res.status(500).json(err);
    }
})

// response to question
router.patch('/response', async (req, res) => {
    const { questionId, optionId } = req.body;
    try {
        const updatedQues = await Question.findOneAndUpdate(
            { _id: questionId, 'options._id': optionId },
            { $inc: { 'options.$.voteCounts': 1 } }, { new: true });
        res.status(200).json(updatedQues);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get survey by id
router.get('/:id/survey', async (req, res) => {
    const { id } = req.params;
    try {
        const survey = await Survey.findById(id).populate('questions');
        res.status(200).json(survey);
    } catch (err) {
        res.status(500).json(err);
    }
})

export default router;