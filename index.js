const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const router = require('./router');

const port = process.env.PORT || 8000;

const app = express();


// app.use(express.static(__dirname + '/public'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.listen(port, () => {
    console.log("server running on port: " + port)
})