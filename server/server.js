//server.js

require("dotenv").config();
const express =require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const app = express();

const PORT= process.env.PORT;

app.use(bodyParser.json());

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});
app.use(morgan('dev'));


app.listen(PORT, ()=>{
    console.log(`server is listening  on ${PORT}`);
});

module.exports = app;