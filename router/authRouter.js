// const express = require('express');
// const jwt = require("jsonwebtoken");
// const loginRouter = express.Router();
// const user = require("../db/user");
// loginRouter.post("/auth/login", (req, res)=> {
//         const {userName, password} = req.body;
//         const isUserVerified = userdata.datasome(user => user.userName === userName && user.password === password);
//         if(isUserVerified){
//             // const token = jwt.sign({id: userName}, process.env.SECRET_TOKEN, (err, token)=> {
//             //     res.json({
//             //         token
//             //     })
//                 jwt.sign({user}, process.env.SECRET_TOKEN , {expiresIn: '300s'}, (err , token)=> {
//                     res.json({
//                        token
//                     })
//               });
//             // res.json({userName, token, message: "User Verified"});
//         } else {
//             res.status(401).json({message: "Invalid Credentials"});
//         }
//      })

//      module.exports = loginRouter



// loginRouter.use(express.json()); 
// const SECRET_TOKEN = "abhcnanda";
// loginRouter.post("/auth/login", (req, res) => {
//     const { userName, password } = req.body;
//     const isUserVerified = user.data.some(user => user.userName === userName && user.password === password);
//     if (isUserVerified) {
//         jwt.sign({ userName }, SECRET_TOKEN, { expiresIn: '300s' }, (err, token) => {
//             if (err) {
//                 res.status(500).json({ message: "Internal Server Error" });
//             } else {
//                 res.json({
//                     token,
//                     userName,
//                     password,
//                     message: "Moj kardi bhai"
//                 });
//             }
//         });
//     } else {
//         res.status(401).json({ message: "Invalid Credentials" });
//     }
// });


// function verifyToken(req, res, next){
//     const bearerHeader = req.headers["Authorization"];
//     if(typeof bearerHeader != 'undefined'){
//         const bearer = bearerHeader.split(" ");
//         const token = bearer[1];
//         req.token = token;
//         next()
//     }
//     else{
//         res.send({
//             result: "Token is not valid"
//         })
//     }
// }




// module.exports = loginRouter;


const express = require('express');
const { loginHandler, signUpHandler, authverify } = require('../authController/AuthController');


const loginRouter = express.Router();
const signupRouter = express.Router();
const authRouter = express.Router();
loginRouter.route("/").post(loginHandler);
signupRouter.route("/").post(signUpHandler);
authRouter.route("/").post(authverify);

module.exports = {loginRouter, signupRouter, authRouter};
