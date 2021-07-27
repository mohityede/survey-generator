import express from "express";
const router = express.Router();

import Survey from '../models/survey.js'

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
router.put('/:id/question', async (req, res) => {
    const { id } = req.params;
    const ques = req.body;
    try {
        const survey = await Survey.findByIdAndUpdate(id, { $push: { questions: ques } }, { new: true });
        res.status(200).json(survey);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get all surveys
router.get('/survey/all', async (req, res) => {
    try {
        const surveys = await Survey.find();
        res.status(200).json(surveys);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get survey by id
router.get('/:id/survey', async (req, res) => {
    const { id } = req.params;
    try {
        const survey = await Survey.findById(id);
        res.status(200).json(survey);
    } catch (err) {
        res.status(500).json(err);
    }
})

export default router;