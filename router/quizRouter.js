const express = require("express");
const quizRouter = express.Router();
const quiz = require("../model/quiz.model");
const verifyUser = require("../middleWare/VerifyUser");


quizRouter.route("/").get(
    verifyUser,
     async(req, res) => {
    try {
        const quizzes = await quiz.find({});
        quizzes ? res.json(quizzes) : res.status(404).json({message : "No data found"})
    } catch (error) {
        console.log(error);
    }
  
});

module.exports = quizRouter;