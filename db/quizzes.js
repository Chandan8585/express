const { v4: uuid } = require("uuid")

const quizzes = {
    data: [
        // 1st Quiz Card --> will have title, category, description, quiz,
        {
            id: uuid(),
            category: "DSA",
            image: "https://media.geeksforgeeks.org/img-practice/Problemofthedaynewcopy-1637640589.png",
            title: "Problem Of The Day",
            description: "Become a more consistent coder by solving one question every day and stand a chance to win exciting prizes. The questions will cover different topics based on Data Structures and Algorithms and you will have 24 hours to channel your inner Geek and solve the challenge.",
            quiz: [
                {
                    id: uuid(),
                    question: "In order traversal of binary search tree will produce −",
                    options: [
                        { id: uuid(), option: "unsorted list", isCorrect: false },
                        { id: uuid(), option: "reverse of input", isCorrect: false },
                        { id: uuid(), option: "sorted list", isCorrect: true },
                        { id: uuid(), option: "none of the above", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What data structure can be used to check if a syntax has balanced parentheses?",
                    options: [
                        { id: uuid(), option: "queue", isCorrect: false },
                        { id: uuid(), option: "tree", isCorrect: false },
                        { id: uuid(), option: "list", isCorrect: false },
                        { id: uuid(), option: "stack", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "Quick sort algorithm is an example of",
                    options: [
                        { id: uuid(), option: "Greedy approach", isCorrect: false },
                        { id: uuid(), option: "Improved binary search", isCorrect: false },
                        { id: uuid(), option: "Dynamic Programming", isCorrect: false },
                        { id: uuid(), option: "Divide and conquer", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is not true about insertion sort?",
                    options: [
                        { id: uuid(), option: "Exhibits the worst case performance when the initial array is sorted in reverse order.", isCorrect: false },
                        { id: uuid(), option: "Worst case and average case performance is Ο(n2)", isCorrect: false },
                        { id: uuid(), option: "Can be compared to the way a card player arranges his card from a card deck.", isCorrect: false },
                        { id: uuid(), option: "None of the above!", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "Apriori algorithm analysis does not include −",
                    options: [
                        { id: uuid(), option: "Time Complexity", isCorrect: false },
                        { id: uuid(), option: "Space Complexity", isCorrect: false },
                        { id: uuid(), option: "Program Complexity", isCorrect: true },
                        { id: uuid(), option: "None of the above!", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "The number of binary trees with 3 nodes which when traversed in post order gives the sequence A, B, C is?",
                    options: [
                        { id: uuid(), option: "3", isCorrect: false },
                        { id: uuid(), option: "4", isCorrect: false },
                        { id: uuid(), option: "5", isCorrect: true },
                        { id: uuid(), option: "6", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which of the following uses memoization?",
                    options: [
                        { id: uuid(), option: "Greedy approach", isCorrect: false },
                        { id: uuid(), option: "Divide and conquer approach", isCorrect: false },
                        { id: uuid(), option: "Dynamic programming approach", isCorrect: true },
                        { id: uuid(), option: "None of the above!", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Heap is an example of",
                    options: [
                        { id: uuid(), option: "complete binary tree", isCorrect: true },
                        { id: uuid(), option: "spanning tree", isCorrect: false },
                        { id: uuid(), option: "sparse tree", isCorrect: false },
                        { id: uuid(), option: "binary search tree", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "From a complete graph, by removing maximum _______________ edges, we can construct a spanning tree.",
                    options: [
                        { id: uuid(), option: "e-n+1", isCorrect: true },
                        { id: uuid(), option: "n-e+1", isCorrect: false },
                        { id: uuid(), option: "n+e-1", isCorrect: false },
                        { id: uuid(), option: "e-n-1", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Aposterior analysis are more accurate than apriori analysis because −",
                    options: [
                        { id: uuid(), option: "it contains the real data.", isCorrect: false },
                        { id: uuid(), option: "it assumes all other factors to be dynamic.", isCorrect: true },
                        { id: uuid(), option: "it assumes all other factors to be constant.", isCorrect: false },
                        { id: uuid(), option: "it is a result of reverse-engineering.", isCorrect: false }
                    ]
                }
            ],
            lecture: [ 
                {heading : "POTD",
                tutorials : [
                    {
                    img:
                "https://i.ytimg.com/vi/0PfTU9JI6Lg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBDx0FPXyl9asnEXeJeQRjcNOh6bQ",
                    link:
                "https://www.youtube.com/embed/0PfTU9JI6Lg?list=PLM68oyaqFM7TCNz4d5J_hxfFg8w41jTYJ",
                    title: "GFG POTD 1",
                    description: "We will learn DFS of Graph in this problem",
                select: false },
                {
                    img:
                "https://i.ytimg.com/vi/MxnpwpQA4I4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDtUunWidfJK9vnjZIBTg9AwWI6KA",
                    link:
                "https://www.youtube.com/embed/MxnpwpQA4I4?list=PLM68oyaqFM7TCNz4d5J_hxfFg8w41jTYJ",
                    title: "GFG POTD 2",
                    description: "We will learn Shortest Source Path in this problem",
                select: false },
                {
                    img:
                "https://i.ytimg.com/vi/OzWNBHxUYO0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCtPuRpTYFI24y71-DYiPaHcBmFfQ",
                    link:
                "https://www.youtube.com/embed/OzWNBHxUYO0?list=PLM68oyaqFM7TCNz4d5J_hxfFg8w41jTYJ",
                    title: "GFG POTD 3",
                    description: "We will learn Shortest Path in this problem 3",
                select: false },
                {
                    img:
                "https://i.ytimg.com/vi/X05eictbWIg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC0L4vTEifv_Rd1g4uSmOERQB3BsQ",
                    link:
                "https://www.youtube.com/embed/X05eictbWIg?list=PLM68oyaqFM7TCNz4d5J_hxfFg8w41jTYJ",
                    title: "GFG POTD 4",
                    description: "We will learn Reverse Stack in this problem",
                select: false },
                {
                    img:
                "https://i.ytimg.com/vi/T3sWA_ha1-w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAB2JYkK6qTJFba5fUayiUyoyuNXg",
                    link:
                "https://www.youtube.com/embed/T3sWA_ha1-w?list=PLM68oyaqFM7TCNz4d5J_hxfFg8w41jTYJ",
                    title: "GFG POTD 5",
                    description: "We will learn Chocolate Distribution in this problem",
                select: false },
                {
                    img:
                "https://i.ytimg.com/vi/9SSIbuQPamk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAdV3kVTVr-htccC52e_j6ydhdJkA",
                    link:
                "https://www.youtube.com/embed/9SSIbuQPamk?list=PLM68oyaqFM7TCNz4d5J_hxfFg8w41jTYJ",
                    title: "GFG POTD 6",
                    description: "We will learn String Permutation in this problem",
                select: false },
                {
                    img:
                "https://i.ytimg.com/vi/E5Fz4-ylZ3E/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLALcFccFfnJhyjUqaqTs1ihK6sc9Q",
                    link:
                "https://www.youtube.com/embed/E5Fz4-ylZ3E?list=PLM68oyaqFM7TCNz4d5J_hxfFg8w41jTYJ",
                    title: "GFG POTD 7",
                    description: "We will learn Solving Sudoku in this problem",
                select: false },
                {
                    img:
                "https://i.ytimg.com/vi/dz_tDiMo_eA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD9tGVL8i8BzyQ4TT4DpcAxRNNTMA",
                    link:
                "https://www.youtube.com/embed/dz_tDiMo_eA?list=PLM68oyaqFM7TCNz4d5J_hxfFg8w41jTYJ",
                    title: "GFG POTD 8",
                    description: "We will learn Fraction Pairs in this problem",
                select: false } ]
                }
                    
                ]
        },
        //2nd quiz
        {
            id: uuid(),
            category: "JAVASCRIPT",
            image: "https://www.computerhope.com/jargon/j/javascript.png",
            title: "Basic Javascript Concepts",
            description: "Master JavaScript with this course now and you will be able to create a website easily after watching this. This tutorial series is for all those people who want to build a career in the Web",
            quiz: [
                {
                    id: uuid(),
                    question: "Which company developed JavaScript?",
                    options: [
                        { id: uuid(), option: "Netscape", isCorrect: true },
                        { id: uuid(), option: "Bell Labs", isCorrect: false },
                        { id: uuid(), option: "Sun Microsystems", isCorrect: false },
                        { id: uuid(), option: "IBM", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Inside which HTML element do we put the JavaScript?",
                    options: [
                        { id: uuid(), option: "<script>", isCorrect: true },
                        { id: uuid(), option: "<head>", isCorrect: false },
                        { id: uuid(), option: "<meta>", isCorrect: false },
                        { id: uuid(), option: "<style>", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which of the following is correct about features of JavaScript?",
                    options: [
                        { id: uuid(), option: "It cannot Handling dates and time.", isCorrect: false },
                        { id: uuid(), option: "JavaScript is a object-based scripting language.", isCorrect: true },
                        { id: uuid(), option: "JavaScript is not an interpreter-based scripting language.", isCorrect: false },
                        { id: uuid(), option: "All of the above", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Choose the correct JavaScript syntax to change the content of the following HTML code.",
                    options: [
                        { id: uuid(), option: "document.getElement(\"letsfindcourse\").innerHTML = \"I am a letsfindcourse\";", isCorrect: false },
                        { id: uuid(), option: "document.getElementById(\"letsfindcourse\").innerHTML = \"I am a letsfindcourse\";", isCorrect: true },
                        { id: uuid(), option: "document.getId(\"letsfindcourse\") = \"I am a letsfindcourse\";", isCorrect: false },
                        { id: uuid(), option: "document.getElementById(\"letsfindcourse\").innerHTML = I am a letsfindcourse;", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which of the following are advantages of JavaScript?",
                    options: [
                        { id: uuid(), option: "Less server interaction", isCorrect: true },
                        { id: uuid(), option: "Increased interactivity", isCorrect: true },
                        { id: uuid(), option: "Richer interfaces", isCorrect: true },
                        { id: uuid(), option: "All of the above", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which of the following is true about Javascript?",
                    options: [
                        { id: uuid(), option: "Client-side JavaScript does not allow the reading or writing of files", isCorrect: false },
                        { id: uuid(), option: "JavaScript cannot be used for networking applications", isCorrect: false },
                        { id: uuid(), option: "JavaScript doesn't have any multi-threading or multiprocessor capabilities", isCorrect: false },
                        { id: uuid(), option: "All of the above", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "Microsoft has developed a popular HTML editor called?",
                    options: [
                        { id: uuid(), option: "Dreamweaver", isCorrect: false },
                        { id: uuid(), option: "FrontPage", isCorrect: true },
                        { id: uuid(), option: "HomeSite", isCorrect: false },
                        { id: uuid(), option: "Macromedia", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "HomeSite 5 is a well-liked HTML and JavaScript editor from Macromedia.",
                    options: [
                        { id: uuid(), option: "True", isCorrect: true },
                        { id: uuid(), option: "False", isCorrect: false },
                        { id: uuid(), option: "Can be true or false", isCorrect: false },
                        { id: uuid(), option: "Can not say", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "JavaScript ignores?",
                    options: [
                        { id: uuid(), option: "spaces", isCorrect: false },
                        { id: uuid(), option: "tabs", isCorrect: false },
                        { id: uuid(), option: "newlines", isCorrect: false },
                        { id: uuid(), option: "All of the above", isCorrect: true }
                    ]
                }
            ],
            lecture :[
                {heading : "Basic Javascript",
                 subHeading: "Javascript Lecture by Code With Harry",
                tutorials : [
                    {
                    img: "https://img.youtube.com/vi/ER9SspLe4Hg/default.jpg",
                    link: "https://www.youtube.com/embed/ER9SspLe4Hg?si=HxwXRAKBvXAKr93s",
                    title: "Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi #1",
                    description: "This Javascript tutorial in Hindi course is designed for beginners with an aim to take JavaScript/ES6 and its concepts to an advanced level. Master JavaScript with this course now and you will be able to create a website easily after watching this. This tutorial series is for all those people who want to build a career in the Web development industry.",
                select: false },
                {
                    img: "https://img.youtube.com/vi/Q4p8vRQX8uY/default.jpg",
                    link:"https://www.youtube.com/embed/Q4p8vRQX8uY?si=o_9aBZBTzxTe8Hmw",
                    title: "Variables in JavaScript | JavaScript Tutorial in Hindi #2",
                    description: "This Javascript tutorial in Hindi course is designed for beginners with an aim to take JavaScript/ES6 and its concepts to an advanced level. Master JavaScript with this course now and you will be able to create a website easily after watching this. This tutorial series is for all those people who want to build a career in the Web development industry.",
                select: false },
                {
                    img:"https://img.youtube.com/vi/Icev9Oxf0WA/default.jpg",
                    link: "https://www.youtube.com/embed/Icev9Oxf0WA?si=2PqeHuVyDyRDMUUo",
                    title: "const, let and var in JavaScript | JavaScript Tutorial in Hindi #3",
                    description: "This Javascript tutorial in Hindi course is designed for beginners with an aim to take JavaScript/ES6 and its concepts to an advanced level. Master JavaScript with this course now and you will be able to create a website easily after watching this. This tutorial series is for all those people who want to build a career in the Web development industry",
                select: false },
                {
                    img: "https://img.youtube.com/vi/qpU3WIqRz9I/default.jpg",
                    link: "https://www.youtube.com/embed/qpU3WIqRz9I?si=0SYSr_54Vd2Zvkeg",
                    title: "Primitives and Objects in JavaScript | JavaScript Tutorial in Hindi #4",
                    description: "This Javascript tutorial in Hindi course is designed for beginners with an aim to take JavaScript/ES6 and its concepts to an advanced level. Master JavaScript with this course now and you will be able to create a website easily after watching this. This tutorial series is for all those people who want to build a career in the Web development industry",
                select: false },
                {
                    img:"https://img.youtube.com/vi/vA-AAeqkpxM/default.jpg",
                        link:"https://www.youtube.com/embed/vA-AAeqkpxM?si=-bbQtF3r9t_5k-vM",
                    title: "JavaScript Chapter 1 - Practice Set | JavaScript Tutorial in Hindi #5",
                    description: "This Javascript tutorial in Hindi course is designed for beginners with an aim to take JavaScript/ES6 and its concepts to an advanced level. Master JavaScript with this course now and you will be able to create a website easily after watching this. This tutorial series is for all those people who want to build a career in the Web development industry",
                select: false },
                {
                    img: "https://img.youtube.com/vi/lsV8JQgSW1s/default.jpg",
                    link:
                "https://www.youtube.com/embed/lsV8JQgSW1s?si=G4AjVF9_POr-zmQ9",
                    title: "JavaScript Operators and Expressions | JavaScript Tutorial in Hindi #6",
                    description: "This Javascript tutorial in Hindi course is designed for beginners with an aim to take JavaScript/ES6 and its concepts to an advanced level. Master JavaScript with this course now and you will be able to create a website easily after watching this. This tutorial series is for all those people who want to build a career in the Web development industry",
                select: false },
                {
                    img: "https://img.youtube.com/vi/s5Lu4QTjeL0/default.jpg",
                    link: "https://www.youtube.com/embed/s5Lu4QTjeL0?si=mQb5cxxto-kxL98w",
                    title: "Conditional expressions in JavaScript | JavaScript Tutorial in Hindi #7",
                    description: "This Javascript tutorial in Hindi course is designed for beginners with an aim to take JavaScript/ES6 and its concepts to an advanced level. Master JavaScript with this course now and you will be able to create a website easily after watching this. This tutorial series is for all those people who want to build a career in the Web development industry",
                select: false },
                {
                    img: "https://img.youtube.com/vi/W77qmqrhCcA/default.jpg",
                    link: "https://www.youtube.com/embed/W77qmqrhCcA?si=wBxw3-ChvI_PpduM",
                    title: "JavaScript Chapter 2 - Practice Set on Operators and Conditionals | JavaScript Tutorial in Hindi #8",
                    description: "This Javascript tutorial in Hindi course is designed for beginners with an aim to take JavaScript/ES6 and its concepts to an advanced level. Master JavaScript with this course now and you will be able to create a website easily after watching this. This tutorial series is for all those people who want to build a career in the Web development industry",
                select: false } ]
                }
                    
                ]
        },

    ]
}

module.exports = quizzes;