const User = require('../models/user')
const {hashPassword, comparePassword} = require('../helpers/auth');


const test = (req, res) => {
    res.json('test is Working');
}

//Login User
const loginUser = async(req, res) => {
    try {
        const { email, password } = req.body;

        //check if user exists 
        const user = await User.findOne({ email })
        if(!user) {
            return res.status(400).json({ error: "User does not exist" });
        }

        //check if password is correct
        const isMatch = await comparePassword(password, user.password);
        if(!isMatch) {
            return res.status(400).json({ error: "Incorrect Password" });
        }else {
            res.json('passwords match');
        }
    } catch (error) {
        console.log(error);
    }
}



//Register User
const registerUser = async(req, res) => {
    try{
        const { name, email, password } = req.body;

        // check if the name is entered
        if(!name) {
            res.status(400).json({ error: "Please enter your name" });
            return res;
        }

        //Checking for password and length 
        if(!password || password.length < 6) {
            return res.status(400).json({ error: "Password is requred and should be at least 6 characters long" });
        }

        // Check for email 
        if(!email) {
            return res.status(400).json({ error: "Email is required" });
        }

        //checking in mongo db if the email is already taken
        const userExist = await User.findOne({ email });

        if(userExist) {
            return res.status(400).json({ error: "Email is already taken" });
        
        }

        //hashing the password 
        const hashedPassword = await hashPassword(password);


        //Creating user in mongo db 
        const user = await User.create({ name, email, password: hashedPassword });

        return res.json(user);
       
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server Error" });  
    }
}

module.exports = {
    test,
    registerUser,
    loginUser
}