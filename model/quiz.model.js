const mongoose = require('mongoose');
const quizSchema = new mongoose.Schema({
    
        id: {type: String, required: true},
        category: {type: String, required: true},
        itemCategory: {type: String, required: true},
        image: {type: String, required: true},
        title: {type: String, required: true},
        description: {type: String, required: true},
        quiz: {type: Array, required: true},
       
    
})

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz