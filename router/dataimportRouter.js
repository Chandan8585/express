const express = require('express');
const Quiz = require("../model/quiz.model");
const quizzes = require("../db/quizzes");

const router = express.Router();

router.route("/")
     .post(async (req, res) => {
        try {
            // Delete all existing quizzes
            await Quiz.deleteMany();
            
            // Insert new quizzes from the quizzes.db array
            const QuizzesInDB = await Quiz.insertMany(quizzes.data);
            res.json(QuizzesInDB);
        } catch (error) {
            console.log(error);
            res.json({ message: "Could not add to DB" });
        }
     });

module.exports = router;
