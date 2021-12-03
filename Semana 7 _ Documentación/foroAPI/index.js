const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3006;

const users = require('./routes/users');
app.use('/', users);


const topics = require('./routes/topics');
app.use('/', topics);

const comments = require('./routes/comments');
app.use('/', comments);


app.listen(port, function () {
    console.log(`Server listening on port http://localhost:${port}`);
});


