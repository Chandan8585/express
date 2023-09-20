const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const quizRouter = require('./router/quizRouter');
const categoryRouter = require('./router/categoryRouter');
const quizDataAddedToDBRouter = require('./router/dataimportRouter') 
const authRouter = require('./router/authRouter');
const connectDB = require('./config/dbconfig');
const app = express();

app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON data


connectDB();


app.use("/category", categoryRouter);
app.use("/quizData", quizDataAddedToDBRouter)
app.use("/quiz", quizRouter);
app.use("/auth", authRouter);
const PORT = 8080;

mongoose.connection.once("open", ()=>{
console.log("Connected to DB");
app.listen( process.env.PORT ||PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
})




