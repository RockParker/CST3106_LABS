const express = require('express');
const app = express();
const diceRouter = require('./routes/dice');

app.listen(3000);


app.use('/dice', diceRouter);