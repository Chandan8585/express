const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { loginRouter, signupRouter } = require('./router/authRouter');
const quizRouter = require('./router/quizRouter');
const categoryRouter = require('./router/categoryRouter');
const quizDataAddedToDBRouter = require('./router/dataimportRouter') 
const connectDB = require('./config/dbconfig');
const app = express();

app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON data

// Connect to MongoDB using the connectDB function
connectDB();

// Define your routes
app.use("/auth/login", loginRouter);
app.use("/auth/signup", signupRouter);
app.use("/category", categoryRouter);
app.use("/quizData", quizDataAddedToDBRouter)
app.use("/quiz", quizRouter);

const PORT = 8080;

mongoose.connection.once("open", ()=>{
console.log("Connected to DB");
app.listen( process.env.PORT ||PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
})



// Start the server

