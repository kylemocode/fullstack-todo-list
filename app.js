const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

//router
app.use('/todos', require('./routes/todo'));


app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})
