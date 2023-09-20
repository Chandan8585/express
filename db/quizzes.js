const { v4: uuid } = require("uuid");

const quizzes = {
  data: [
    // 1st Quiz Card --> will have title, category, description, quiz,
    {
      id: uuid(),
      category: "DSA",
      itemCategory: "Computer Science",
      image: "https://subtle-cannoli-e50648.netlify.app/image/algorithm.svg",
      title: "Problem Of The Day",
      description:
        "Become a more consistent coder by solving one question every day and stand a chance to win exciting prizes. The questions will cover different topics based on Data Structures and Algorithms",
      quiz: [
        {
          id: uuid(),
          question: "In order traversal of binary search tree will produce −",
          options: [
            { id: uuid(), option: "unsorted list", isCorrect: false },
            { id: uuid(), option: "reverse of input", isCorrect: false },
            { id: uuid(), option: "sorted list", isCorrect: true },
            { id: uuid(), option: "none of the above", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question:
            "What data structure can be used to check if a syntax has balanced parentheses?",
          options: [
            { id: uuid(), option: "queue", isCorrect: false },
            { id: uuid(), option: "tree", isCorrect: false },
            { id: uuid(), option: "list", isCorrect: false },
            { id: uuid(), option: "stack", isCorrect: true },
          ],
        },
        {
          id: uuid(),
          question: "Quick sort algorithm is an example of",
          options: [
            { id: uuid(), option: "Greedy approach", isCorrect: false },
            { id: uuid(), option: "Improved binary search", isCorrect: false },
            { id: uuid(), option: "Dynamic Programming", isCorrect: false },
            { id: uuid(), option: "Divide and conquer", isCorrect: true },
          ],
        },
        {
          id: uuid(),
          question: "What is not true about insertion sort?",
          options: [
            {
              id: uuid(),
              option:
                "Exhibits the worst case performance when the initial array is sorted in reverse order.",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "Worst case and average case performance is Ο(n2)",
              isCorrect: false,
            },
            {
              id: uuid(),
              option:
                "Can be compared to the way a card player arranges his card from a card deck.",
              isCorrect: false,
            },
            { id: uuid(), option: "None of the above!", isCorrect: true },
          ],
        },
        {
          id: uuid(),
          question: "Apriori algorithm analysis does not include −",
          options: [
            { id: uuid(), option: "Time Complexity", isCorrect: false },
            { id: uuid(), option: "Space Complexity", isCorrect: false },
            { id: uuid(), option: "Program Complexity", isCorrect: true },
            { id: uuid(), option: "None of the above!", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question:
            "The number of binary trees with 3 nodes which when traversed in post order gives the sequence A, B, C is?",
          options: [
            { id: uuid(), option: "3", isCorrect: false },
            { id: uuid(), option: "4", isCorrect: false },
            { id: uuid(), option: "5", isCorrect: true },
            { id: uuid(), option: "6", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Which of the following uses memoization?",
          options: [
            { id: uuid(), option: "Greedy approach", isCorrect: false },
            {
              id: uuid(),
              option: "Divide and conquer approach",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "Dynamic programming approach",
              isCorrect: true,
            },
            { id: uuid(), option: "None of the above!", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Heap is an example of",
          options: [
            { id: uuid(), option: "complete binary tree", isCorrect: true },
            { id: uuid(), option: "spanning tree", isCorrect: false },
            { id: uuid(), option: "sparse tree", isCorrect: false },
            { id: uuid(), option: "binary search tree", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question:
            "From a complete graph, by removing maximum _______________ edges, we can construct a spanning tree.",
          options: [
            { id: uuid(), option: "e-n+1", isCorrect: true },
            { id: uuid(), option: "n-e+1", isCorrect: false },
            { id: uuid(), option: "n+e-1", isCorrect: false },
            { id: uuid(), option: "e-n-1", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question:
            "Aposterior analysis are more accurate than apriori analysis because −",
          options: [
            {
              id: uuid(),
              option: "it contains the real data.",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "it assumes all other factors to be dynamic.",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "it assumes all other factors to be constant.",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "it is a result of reverse-engineering.",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    //2nd quiz
    {
      id: uuid(),
      category: "JAVASCRIPT",
      itemCategory: "Frontend Development",
      image: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736401_1280.png",
      title: "Basic Javascript Concepts",
      description:
        "Master JavaScript with this course now and you will be able to create a website easily after watching this. This tutorial series is for all those people who want to build a career in the Web",
      quiz: [
        {
          id: uuid(),
          question: "Which company developed JavaScript?",
          options: [
            { id: uuid(), option: "Netscape", isCorrect: true },
            { id: uuid(), option: "Bell Labs", isCorrect: false },
            { id: uuid(), option: "Sun Microsystems", isCorrect: false },
            { id: uuid(), option: "IBM", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Inside which HTML element do we put the JavaScript?",
          options: [
            { id: uuid(), option: "<script>", isCorrect: true },
            { id: uuid(), option: "<head>", isCorrect: false },
            { id: uuid(), option: "<meta>", isCorrect: false },
            { id: uuid(), option: "<style>", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question:
            "Which of the following is correct about features of JavaScript?",
          options: [
            {
              id: uuid(),
              option: "It cannot Handling dates and time.",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "JavaScript is a object-based scripting language.",
              isCorrect: true,
            },
            {
              id: uuid(),
              option:
                "JavaScript is not an interpreter-based scripting language.",
              isCorrect: false,
            },
            { id: uuid(), option: "All of the above", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question:
            "Choose the correct JavaScript syntax to change the content of the following HTML code.",
          options: [
            {
              id: uuid(),
              option:
                'document.getElement("letsfindcourse").innerHTML = "I am a letsfindcourse";',
              isCorrect: false,
            },
            {
              id: uuid(),
              option:
                'document.getElementById("letsfindcourse").innerHTML = "I am a letsfindcourse";',
              isCorrect: true,
            },
            {
              id: uuid(),
              option:
                'document.getId("letsfindcourse") = "I am a letsfindcourse";',
              isCorrect: false,
            },
            {
              id: uuid(),
              option:
                'document.getElementById("letsfindcourse").innerHTML = I am a letsfindcourse;',
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question: "Which of the following are advantages of JavaScript?",
          options: [
            { id: uuid(), option: "Less server interaction", isCorrect: true },
            { id: uuid(), option: "Increased interactivity", isCorrect: true },
            { id: uuid(), option: "Richer interfaces", isCorrect: true },
            { id: uuid(), option: "All of the above", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Which of the following is true about Javascript?",
          options: [
            {
              id: uuid(),
              option:
                "Client-side JavaScript does not allow the reading or writing of files",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "JavaScript cannot be used for networking applications",
              isCorrect: false,
            },
            {
              id: uuid(),
              option:
                "JavaScript doesn't have any multi-threading or multiprocessor capabilities",
              isCorrect: false,
            },
            { id: uuid(), option: "All of the above", isCorrect: true },
          ],
        },
        {
          id: uuid(),
          question: "Microsoft has developed a popular HTML editor called?",
          options: [
            { id: uuid(), option: "Dreamweaver", isCorrect: false },
            { id: uuid(), option: "FrontPage", isCorrect: true },
            { id: uuid(), option: "HomeSite", isCorrect: false },
            { id: uuid(), option: "Macromedia", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question:
            "HomeSite 5 is a well-liked HTML and JavaScript editor from Macromedia.",
          options: [
            { id: uuid(), option: "True", isCorrect: true },
            { id: uuid(), option: "False", isCorrect: false },
            { id: uuid(), option: "Can be true or false", isCorrect: false },
            { id: uuid(), option: "Can not say", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "JavaScript ignores?",
          options: [
            { id: uuid(), option: "spaces", isCorrect: false },
            { id: uuid(), option: "tabs", isCorrect: false },
            { id: uuid(), option: "newlines", isCorrect: false },
            { id: uuid(), option: "All of the above", isCorrect: true },
          ],
        },
      ],
    },
    {
      id: uuid(),
      category: "HTML",
      itemCategory: "Frontend Development",
      image: "https://subtle-cannoli-e50648.netlify.app/image/HTML.svg",
      title: "HTML Concepts",
      description:
        "Are you passionate about web development or just getting started on your coding journey? Test your HTML knowledge with our interactive HTML quiz! HTML",

      quiz: [
        {
          id: uuid(),
          question: "What does HTML stand for?",
          options: [
            {
              id: uuid(),
              option: "Hyper Transfer Markup Language",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "Hyper Text Markup Language",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "High-Level Text Markup Language",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "Hyperlink and Text Markup Language",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question: "Which HTML element is used to define an unordered list?",
          options: [
            { id: uuid(), option: "<ul>", isCorrect: true },
            { id: uuid(), option: "<ol>", isCorrect: false },
            { id: uuid(), option: "<li>", isCorrect: false },
            { id: uuid(), option: "<dl>", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is the correct HTML for creating a hyperlink?",
          options: [
            {
              id: uuid(),
              option: "<a href='https://www.example.com'>Example</a>",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "<link url='https://www.example.com'>Example</link>",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "<hyperlink>https://www.example.com</hyperlink>",
              isCorrect: false,
            },
            {
              id: uuid(),
              option:
                "<web-link src='https://www.example.com'>Example</web-link>",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question: "Which HTML tag is used for creating a table?",
          options: [
            { id: uuid(), option: "<table>", isCorrect: true },
            { id: uuid(), option: "<tr>", isCorrect: false },
            { id: uuid(), option: "<td>", isCorrect: false },
            { id: uuid(), option: "<th>", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is the purpose of the HTML <meta> element?",
          options: [
            {
              id: uuid(),
              option: "To define a section in a web page",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "To specify the character encoding for the document",
              isCorrect: true,
            },
            { id: uuid(), option: "To create a hyperlink", isCorrect: false },
            {
              id: uuid(),
              option: "To define a table of data",
              isCorrect: false,
            },
          ],
        },
      ],
    },

    {
      id: uuid(),
      category: "CSS",
      itemCategory: "Frontend Development",
      image: "https://subtle-cannoli-e50648.netlify.app/image/CSS.svg",
      title: "CSS Concepts",
      description:
        "Are you passionate about web development or just getting started on your coding journey? Test your CSS knowledge with our interactive CSS quiz! CSS is a crucial part of web styling, and this quiz will help you understand its core concepts.",
      quiz: [
        {
          id: uuid(),
          question: "What does CSS stand for?",
          options: [
            { id: uuid(), option: "Cascading Style Sheets", isCorrect: true },
            { id: uuid(), option: "Computer Style Sheets", isCorrect: false },
            { id: uuid(), option: "Creative Style Sheets", isCorrect: false },
            { id: uuid(), option: "Colorful Style Sheets", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question:
            "Which CSS property is used to change the text color of an element?",
          options: [
            { id: uuid(), option: "text-color", isCorrect: false },
            { id: uuid(), option: "font-color", isCorrect: false },
            { id: uuid(), option: "color", isCorrect: true },
            { id: uuid(), option: "text-style", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question:
            "What is the correct CSS syntax for making all paragraphs have a font size of 16px?",
          options: [
            { id: uuid(), option: "p {font-size: 16px;}", isCorrect: true },
            {
              id: uuid(),
              option: "paragraph {size: 16px;}",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "all.p {font-size: 16px;}",
              isCorrect: false,
            },
            { id: uuid(), option: "font-size: 16px; {p}", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question:
            "Which CSS property is used to control the spacing between elements?",
          options: [
            { id: uuid(), option: "margin", isCorrect: true },
            { id: uuid(), option: "padding", isCorrect: false },
            { id: uuid(), option: "border", isCorrect: false },
            { id: uuid(), option: "spacing", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What does the 'Cascading' in CSS refer to?",
          options: [
            {
              id: uuid(),
              option:
                "The ability to apply multiple styles to the same element",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "The process of converting HTML to CSS",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "The order in which styles are written in a CSS file",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "The ability to style web pages with waterfalls",
              isCorrect: false,
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      category: "Node.js",
      itemCategory: "Backend Development",
      image: "https://subtle-cannoli-e50648.netlify.app/image/Nodejs.svg",
      title: "Node.js Basics",
      description:
        "Are you interested in server-side JavaScript development? Test your Node.js knowledge with our interactive quiz! Node.js is a powerful runtime that allows you to build server-side applications using JavaScript.",
      quiz: [
        {
          id: uuid(),
          question: "What is Node.js?",
          options: [
            {
              id: uuid(),
              option: "A JavaScript library for building web applications",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "A programming language",
              isCorrect: false,
            },
            {
              id: uuid(),
              option:
                "A runtime environment for executing JavaScript on the server",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "A text editor for writing JavaScript code",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question:
            "Which core module in Node.js is used for file system operations?",
          options: [
            { id: uuid(), option: "http", isCorrect: false },
            { id: uuid(), option: "fs", isCorrect: true },
            { id: uuid(), option: "path", isCorrect: false },
            { id: uuid(), option: "util", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is the package manager for Node.js?",
          options: [
            {
              id: uuid(),
              option: "NPM (Node Package Manager)",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "Node.js Package Manager",
              isCorrect: false,
            },
            { id: uuid(), option: "Node Package Manager", isCorrect: false },
            {
              id: uuid(),
              option: "NVM (Node Version Manager)",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question:
            "Which event-driven architecture is commonly used in Node.js?",
          options: [
            { id: uuid(), option: "Observer pattern", isCorrect: false },
            { id: uuid(), option: "Callback pattern", isCorrect: true },
            { id: uuid(), option: "Singleton pattern", isCorrect: false },
            { id: uuid(), option: "MVC pattern", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What does 'npm init' command do in Node.js?",
          options: [
            {
              id: uuid(),
              option: "Installs Node.js modules globally",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "Initializes a new Node.js project",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "Upgrades Node.js to the latest version",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "Starts a Node.js server",
              isCorrect: false,
            },
          ],
        },
      ],
    },

    {
      id: uuid(),
      category: "MongoDB",
      itemCategory: "Backend Development",
      image: "https://subtle-cannoli-e50648.netlify.app/image/MongoDb.svg",
      title: "MongoDB Fundamentals",
      description:
        "Are you interested in NoSQL databases and MongoDB? Test your MongoDB knowledge with our interactive quiz! MongoDB is a popular document-based NoSQL database.",
      quiz: [
        {
          id: uuid(),
          question: "What type of database is MongoDB?",
          options: [
            { id: uuid(), option: "Relational database", isCorrect: false },
            { id: uuid(), option: "Key-value database", isCorrect: false },
            {
              id: uuid(),
              option: "Document-based NoSQL database",
              isCorrect: true,
            },
            { id: uuid(), option: "Graph database", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "In MongoDB, what is a document?",
          options: [
            {
              id: uuid(),
              option: "A collection of related tables",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "A record in a relational database",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "A unit of data in a collection",
              isCorrect: true,
            },
            { id: uuid(), option: "A database schema", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What query language is used in MongoDB?",
          options: [
            {
              id: uuid(),
              option: "SQL (Structured Query Language)",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "No query language is used",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "MongoDB Query Language (MQL)",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "CQL (Cassandra Query Language)",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question: "What is the primary use case for MongoDB?",
          options: [
            {
              id: uuid(),
              option: "Storing only structured data",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "Real-time data processing",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "Managing unstructured or semi-structured data",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "Handling complex transactions",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question:
            "Which of the following is NOT a type of index available in MongoDB?",
          options: [
            { id: uuid(), option: "Single-field index", isCorrect: false },
            { id: uuid(), option: "Compound index", isCorrect: false },
            { id: uuid(), option: "Text index", isCorrect: false },
            { id: uuid(), option: "Foreign key index", isCorrect: true },
          ],
        },
      ],
    },

    {
      id: uuid(),
      category: "Express.js",
      itemCategory: "FrameWork",
      image: "https://subtle-cannoli-e50648.netlify.app/image/express.svg",
      title: "Express.js Fundamentals",
      description:
        "Are you interested in web development with Node.js and Express.js? Test your Express.js knowledge with our interactive quiz! Express.js is a popular web application framework for Node.js.",
      quiz: [
        {
          id: uuid(),
          question: "What is Express.js?",
          options: [
            {
              id: uuid(),
              option: "A database management system",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "A front-end JavaScript library",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "A web application framework for Node.js",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "A version control system",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question:
            "Which HTTP method is used to retrieve data from a server in Express.js?",
          options: [
            { id: uuid(), option: "GET", isCorrect: true },
            { id: uuid(), option: "POST", isCorrect: false },
            { id: uuid(), option: "PUT", isCorrect: false },
            { id: uuid(), option: "DELETE", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is middleware in Express.js?",
          options: [
            { id: uuid(), option: "A type of routing", isCorrect: false },
            {
              id: uuid(),
              option: "A database management system",
              isCorrect: false,
            },
            {
              id: uuid(),
              option:
                "Functions that execute during the request-response cycle",
              isCorrect: true,
            },
            { id: uuid(), option: "A front-end framework", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question:
            "Which package manager is commonly used to manage Express.js dependencies?",
          options: [
            {
              id: uuid(),
              option: "npm (Node Package Manager)",
              isCorrect: true,
            },
            { id: uuid(), option: "Yarn", isCorrect: false },
            { id: uuid(), option: "Bower", isCorrect: false },
            { id: uuid(), option: "Pip", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is the purpose of routing in Express.js?",
          options: [
            {
              id: uuid(),
              option: "Managing database connections",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "Defining the structure of a web page",
              isCorrect: false,
            },
            {
              id: uuid(),
              option:
                "Handling HTTP requests and defining application endpoints",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "Executing client-side scripts",
              isCorrect: false,
            },
          ],
        },
      ],
    },

    {
      id: uuid(),
      category: "React.js",
      itemCategory: "FrameWork",
      image: "https://subtle-cannoli-e50648.netlify.app/image/React.svg",
      title: "React.js Fundamentals",
      description:
        "Test your knowledge of React.js, a popular JavaScript library for building user interfaces. React.js is widely used in modern web development.",
      quiz: [
        {
          id: uuid(),
          question: "What is React.js?",
          options: [
            {
              id: uuid(),
              option: "A back-end web framework",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "A JavaScript library for building user interfaces",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "A database management system",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "A version control system",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question: "What is JSX in React.js?",
          options: [
            { id: uuid(), option: "A package manager", isCorrect: false },
            {
              id: uuid(),
              option: "A JavaScript syntax extension",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "A state management tool",
              isCorrect: false,
            },
            { id: uuid(), option: "A routing library", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is a component in React.js?",
          options: [
            {
              id: uuid(),
              option: "A server in a client-server architecture",
              isCorrect: false,
            },
            {
              id: uuid(),
              option:
                "A reusable piece of code that defines a part of a user interface",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "A RESTful API endpoint",
              isCorrect: false,
            },
            { id: uuid(), option: "A database table", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question:
            "What function is used to update the state of a component in React.js?",
          options: [
            { id: uuid(), option: "setState()", isCorrect: true },
            { id: uuid(), option: "updateState()", isCorrect: false },
            { id: uuid(), option: "modifyState()", isCorrect: false },
            { id: uuid(), option: "changeState()", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question:
            "Which lifecycle method is called when a component is inserted into the DOM in React.js?",
          options: [
            { id: uuid(), option: "componentWillUnmount", isCorrect: false },
            { id: uuid(), option: "componentDidMount", isCorrect: true },
            { id: uuid(), option: "componentDidUpdate", isCorrect: false },
            { id: uuid(), option: "componentWillMount", isCorrect: false },
          ],
        },
      ],
    },

    {
      id: uuid(),
      category: "DBMS",
      itemCategory: "Computer Science",
      image: "https://subtle-cannoli-e50648.netlify.app/image/DBMS.svg",
      title: "DBMS Concepts",
      description:
        "Test your knowledge of Database Management Systems (DBMS), a critical component of modern software applications and data management.",
      quiz: [
        {
          id: uuid(),
          question: "What does DBMS stand for?",
          options: [
            {
              id: uuid(),
              option: "Database Management Server",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "Data-Based Management System",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "Database Management System",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "Data Backup and Management System",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question: "Which of the following is not a type of DBMS?",
          options: [
            { id: uuid(), option: "Relational DBMS", isCorrect: false },
            { id: uuid(), option: "NoSQL DBMS", isCorrect: false },
            { id: uuid(), option: "Programming Language", isCorrect: true },
            { id: uuid(), option: "Object-Oriented DBMS", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is the primary function of a DBMS?",
          options: [
            {
              id: uuid(),
              option: "Managing hardware resources",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "Creating user interfaces",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "Storing, retrieving, and managing data",
              isCorrect: true,
            },
            { id: uuid(), option: "Running web servers", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question:
            "Which DBMS model is based on tables with rows and columns?",
          options: [
            { id: uuid(), option: "Object-Oriented DBMS", isCorrect: false },
            { id: uuid(), option: "Graph DBMS", isCorrect: false },
            { id: uuid(), option: "Relational DBMS", isCorrect: true },
            {
              id: uuid(),
              option: "Document-Oriented DBMS",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question: "What is ACID in the context of DBMS?",
          options: [
            {
              id: uuid(),
              option: "A database programming language",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "A data format for storage",
              isCorrect: false,
            },
            {
              id: uuid(),
              option:
                "A set of properties that guarantee reliable processing of database transactions",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "An algorithm for sorting data",
              isCorrect: false,
            },
          ],
        },
      ],
    },

    {
      id: uuid(),
      category: "Operating System",
      itemCategory: "Computer Science",
      image: "https://subtle-cannoli-e50648.netlify.app/image/Operatingsystem.svg",
      title: "Operating System Concepts",
      description:
        "Test your knowledge of Operating Systems, a crucial component of computer science and software development.",
      quiz: [
        {
          id: uuid(),
          question: "What is the primary function of an operating system?",
          options: [
            { id: uuid(), option: "Running applications", isCorrect: false },
            {
              id: uuid(),
              option: "Managing hardware resources",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "Creating user interfaces",
              isCorrect: false,
            },
            { id: uuid(), option: "Storing data", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question:
            "Which of the following is not an example of an operating system?",
          options: [
            { id: uuid(), option: "Windows", isCorrect: false },
            { id: uuid(), option: "Microsoft Office", isCorrect: true },
            { id: uuid(), option: "Linux", isCorrect: false },
            { id: uuid(), option: "macOS", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is the kernel of an operating system?",
          options: [
            {
              id: uuid(),
              option: "The outer layer of the OS",
              isCorrect: false,
            },
            { id: uuid(), option: "The user interface", isCorrect: false },
            {
              id: uuid(),
              option: "The core component that manages hardware resources",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "The system's file explorer",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question: "What does CPU scheduling refer to in an OS?",
          options: [
            {
              id: uuid(),
              option: "Scheduling tasks for the operating system itself",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "Scheduling tasks for peripheral devices",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "Scheduling tasks for user applications",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "Scheduling disk maintenance tasks",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question: "What is virtual memory in an operating system?",
          options: [
            {
              id: uuid(),
              option: "A memory storage device",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "An external storage device",
              isCorrect: false,
            },
            {
              id: uuid(),
              option:
                "A memory management technique that uses disk space as an extension of RAM",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "A type of cache memory",
              isCorrect: false,
            },
          ],
        },
      ],
    },

    {
      id: uuid(),
      category: "GitHub",
      itemCategory: "Version Control",
      image: "https://subtle-cannoli-e50648.netlify.app/image/github.webp",
      title: "GitHub Concepts",
      description:
        "Test your knowledge of GitHub, a widely used version control platform for software development.",
      quiz: [
        {
          id: uuid(),
          question: "What is Git?",
          options: [
            {
              id: uuid(),
              option: "A version control system",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "A programming language",
              isCorrect: false,
            },
            { id: uuid(), option: "A code editor", isCorrect: false },
            {
              id: uuid(),
              option: "A web development framework",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question: "What is the purpose of GitHub?",
          options: [
            { id: uuid(), option: "To write and run code", isCorrect: false },
            { id: uuid(), option: "To host websites", isCorrect: false },
            {
              id: uuid(),
              option: "To collaborate on and manage source code",
              isCorrect: true,
            },
            { id: uuid(), option: "To play video games", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is a repository in GitHub?",
          options: [
            {
              id: uuid(),
              option: "A storage unit for physical files",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "A place to store code and project files",
              isCorrect: true,
            },
            { id: uuid(), option: "A bug tracking system", isCorrect: false },
            {
              id: uuid(),
              option: "A cloud-based database",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question: "What is a pull request?",
          options: [
            {
              id: uuid(),
              option: "A request to merge changes into a repository",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "A request for tech support",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "A request to delete a repository",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "A request to host a coding competition",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question: "What is a branch in Git?",
          options: [
            { id: uuid(), option: "A tree branch", isCorrect: false },
            {
              id: uuid(),
              option: "A parallel line of development",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "A branch of mathematics",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "A type of computer virus",
              isCorrect: false,
            },
          ],
        },
      ],
    },

    {
      id: uuid(),
      category: "JIRA",
      itemCategory: "Project Management",
      title: "JIRA Concepts",
      image: "https://subtle-cannoli-e50648.netlify.app/image/JIRA.png",
      description:
        "Test your knowledge of JIRA, a popular project management and issue tracking tool.",
      quiz: [
        {
          id: uuid(),
          question: "What is JIRA?",
          options: [
            { id: uuid(), option: "A type of coffee", isCorrect: false },
            {
              id: uuid(),
              option: "A project management and issue tracking tool",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "A programming language",
              isCorrect: false,
            },
            { id: uuid(), option: "An operating system", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is an issue in JIRA?",
          options: [
            {
              id: uuid(),
              option: "A magazine subscription",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "A problem or task that needs to be tracked and managed",
              isCorrect: true,
            },
            { id: uuid(), option: "A type of currency", isCorrect: false },
            { id: uuid(), option: "A musical instrument", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What are JIRA boards used for?",
          options: [
            { id: uuid(), option: "Surfing the internet", isCorrect: false },
            {
              id: uuid(),
              option: "Managing projects and issues",
              isCorrect: true,
            },
            { id: uuid(), option: "Playing video games", isCorrect: false },
            { id: uuid(), option: "Cooking recipes", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is a workflow in JIRA?",
          options: [
            { id: uuid(), option: "A type of dance", isCorrect: false },
            {
              id: uuid(),
              option: "A sequence of steps that an issue goes through",
              isCorrect: true,
            },
            {
              id: uuid(),
              option: "A scientific experiment",
              isCorrect: false,
            },
            {
              id: uuid(),
              option: "A mode of transportation",
              isCorrect: false,
            },
          ],
        },
        {
          id: uuid(),
          question: "What is an epic in JIRA?",
          options: [
            { id: uuid(), option: "A long narrative poem", isCorrect: false },
            {
              id: uuid(),
              option: "A large and high-priority issue",
              isCorrect: true,
            },
            { id: uuid(), option: "A type of bird", isCorrect: false },
            { id: uuid(), option: "A historical artifact", isCorrect: false },
          ],
        },
      ],
    },
  ],
};

module.exports = quizzes;
