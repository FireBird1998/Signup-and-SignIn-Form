
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose');
const app = express();

// Data base connection 
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

// middleWare
app.use(express.json());





app.use('/', require('./routes/authRoute'));


const port = 8000;
app.listen(port, () => {console.log(`Server is running on port ${port}`)})