
const express = require('express');
const app = express();
// ... routes များ ...
module.exports = app;



const app = require('./app');
app.listen(3000, () => console.log('Server running...'));


