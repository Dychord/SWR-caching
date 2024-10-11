const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const userModel = require('../model/userModel')
const bcrypt = require('bcrypt')

router.post('/register', async (req,res)=>{
    const {name, username, password} = req.body;
    try {
        const user = await userModel.findOne({username})

        if(user) return res.json({success: false, message: "User already exists! Please try logging in!"})
        
        if(!name || !username || !password) return res.json({success: false, message: "No feild can be left empty!"})
            const hash = bcrypt.hashSync(password, 11)
            const newUser = await userModel.create({
                username,
                name,
                password: hash
            })
        
        return res.json({success: true, message: "User created successfully", createdUser: newUser})

    } catch (error) {
        return res.json({success: false, message: error.message})
    }
})



router.post('/login', async (req,res)=>{
    const {username, password} = req.body;
    try {
        const user = await userModel.findOne({username})

        if(!user) return res.json({success: false, message: "Please register!"})
        if(!username || !password) return res.json({success: false, message: "Both fields are required!"})
        
        const comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) return res.json({success: false, message: "Username or Password Invalid!"})

        const accessToken = jwt.sign({username:user.username}, process.env.ACCESS_TOKEN)
        return res.json({success: true, message: "Logged in successfully!", token: accessToken})

    } catch (error) {
        console.log("Error from backend during Logging in ", error.message);
    }
})


const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    // Check if token is provided
    if (!token) {
        return res.status(401).json({ success: false, message: 'Token does not exist!' });
    }

    // Verify the token
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) {
            return res.status(403).json({ success: false, message: 'Token is invalid!' });
        }

        // Attach user information to the request object
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
    });
};


router.get('/logout', authMiddleware ,async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.json({ success: false, message: "Token does not exist!" });

    try {
        // Decode the token to get the username (do not verify it)
        const decodedToken = jwt.decode(token);
        const username = decodedToken?.username; // Adjust based on your token structure

        // Check if username exists
        const user = await userModel.findOne({ username });
        if (!user) return res.json({ success: false, message: "User not found!" });

        // Push the token to the blacklist
        const tokenPushed = await userModel.updateOne(
            { username },
            { $push: { blackList: token } }
        );

        if (tokenPushed.modifiedCount > 0) {
            return res.json({ success: true, message: "Logged out successfully!" });
        } else {
            return res.json({ success: false, message: "Error logging you out!" });
        }
    } catch (error) {
        console.error("Error logging out:", error.message);
        return res.json({ success: false, message: "Error logging you out!" });
    }
});


module.exports = router;