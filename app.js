const express = require('express');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const user = require("./db/user");
const { loginRouter, signupRouter } = require('./router/authRouter');
const quizRouter = require('./router/quizRouter');
const app = express();


// app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON data

app.use("/auth/login", loginRouter);
app.use("/auth/signup", signupRouter);
// Start the server
// const port = 8080;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
















// const quizRouter = require("./router/quizRouter");
// const userdata = require("./db/user");

// const app = express(); //Creating a server
// app.use(cors());
// app.use(express.json());

const PORT = 8080;

// app.get("/", (req, res) => {
//     res.send("hello geeks");
// })

app.use("/quiz", quizRouter);

// app.post("/auth/login", (req, res) => {
//     const { userName, password } = req.body;
//     const isUserVerified = userdata.data.some(user => user.userName === userName && user.password === password);
//     if(isUserVerified){
//         const token = jwt.sign({id: userName}, process.env.SECRET_TOKEN)
//         res.json({userName, token, message: "User Verfied"})
//     }else{
//         res.status(401).json({message: "Invalid Credentials"})
//     }
// })

app.listen(process.env.PORT || PORT, () => {
    console.log("server started....");
})

