const express = require("express");
const quizRouter = express.Router();
const quizzes = require("../db/quizzes");
const { authverify } = require("../authController/AuthController");

quizRouter.route("/").get(authverify, (req, res) => {
    res.json(quizzes);
});

module.exports = quizRouter;