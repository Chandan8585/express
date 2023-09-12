const express = require('express');
const cors = require('cors');
// const jwt = require("jsonwebtoken");
// const user = require("./db/user");
const { loginRouter, signupRouter } = require('./router/authRouter');
const quizRouter = require('./router/quizRouter');
const categoryRouter = require('./router/categoryRouter');

const app = express();


app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON data

app.use("/auth/login", loginRouter);
app.use("/auth/signup", signupRouter);

const PORT = 8080;

app.use("/category", categoryRouter);
app.use("/quiz", quizRouter);

app.listen(process.env.PORT || PORT, () => {
    console.log("server started....");
})

