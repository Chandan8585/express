
const jwt = require("jsonwebtoken");
const { v4: uuid } = require('uuid'); // Import the uuid function from the uuid library
const user = require('../db/user');
const SECRET_TOKEN = "f2ff2bdfbe0ac4fb930735c3da2bc9beb01f31acae072b8250556f5cd1da9929a06ba4308437af236c442506a1ff74a38ff72e55eaad04048a90489bd2cf47fe"
const signUpHandler = (req, res) => {
    const { userName, password } = req.body;
    const isPresent = user.data.some(user => user.userName === userName);
    if (isPresent) {
        res.status(422).json({ message: "User Already Exists" });
    } else {
        const id = uuid(); // Generate a unique ID
        const newUser = { id, userName, password };
        user.data = [...user.data, newUser];
        const token = jwt.sign({ id: userName }, SECRET_TOKEN); // Make sure SECRET_TOKEN is set in the environment variable
      
        res.json({ message: `Created new user ${userName}:: ${token}` });
    }
};

const loginHandler = (req, res) => {
    const { userName, password } = req.body;
    const isUserVerified = user.data.some(user => user.userName === userName && user.password === password);
    if (isUserVerified) {
        // Use the same token generated during sign-up instead of creating a new one
        const token = jwt.sign({ id: userName }, SECRET_TOKEN, { expiresIn: '300s' });
        res.json({
            token,
            userName,
            password,
            message: "Moj kardi bhai"
        });
    } else {
        res.status(401).json({ message: "Invalid Credentials" });
    }
}

const authverify = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized - No token provided" });
    }
    try {
        const decodedToken = jwt.verify(token, SECRET_TOKEN);
        req.user = { userId: decodedToken.id };
        return next();
    } catch (err) {
        console.log(`Error from server: ${JSON.stringify(err)}`);
        return res.status(403).json({ message: "Invalid Token" });
    }
};

module.exports = { signUpHandler, loginHandler, authverify };
