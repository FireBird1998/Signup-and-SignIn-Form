


const test = (req, res) => {
    res.json('test is Working');
}

const registerUser = (req, res) => {
    try{
        const { name, email, password } = req.body;
        // checks
        if(!name || !email || !password){
            return res.status(400).json({ msg: "Please fill all fields" });     
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server Error" });  
    }
}

module.exports = {
    test,
    registerUser
}