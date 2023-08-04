
const express = require("express");
const quizzes = require("./db/quizzes");
const app = express();
const port = 8080;



app.get("/", (req, res) => res.send("Hello Geeks"));

app.get("/quiz", (req, res)=> {
    res.send(quizzes)
})

// const server =
 app.listen(port, () => {console.log(`Example app listening on port ${port}!`)});

// server.keepAliveTimeout = 120 * 1000;
// server.headersTimeout = 120 * 1000;
