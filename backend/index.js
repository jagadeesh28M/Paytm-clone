const express = require("express");
const app = express();
const port = 3000;
const mainRouter = require('./routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())
app.use('/api/v1',mainRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
