require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const webhook = require('./routes/webhook');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/webhook', webhook);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
