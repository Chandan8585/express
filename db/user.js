const {v4 : uuid} = require("uuid");

const user = {
    "data" : [
        {
            id: uuid(),
            userName : "Prakash",
            password : "pass",
            emailId : "pka@gmail.com"
        },
        {
            id: uuid(),
            userName : "Chandan",
            password : "Password",
            emailId : "chandan@gmail.com"
        },
    ]
}

module.exports = user

// const { v4: uuid } = require("uuid");

// const users = [
//     {
//         id: uuid(),
//         userName: "Prakash",
//         password: "pass",
//         emailId: "pka@gmail.com",
//     },
//     {
//         id: uuid(),
//         userName: "Chandan",
//         password: "Password",
//         emailId: "chandan@gmail.com",
//     },
// ];

// module.exports = users;

