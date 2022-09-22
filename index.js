const express = require('express');
const port = 8080;
const app = express();

//Route constants
const dictionaryRoute = require('./routes/dictionary.route');
const storyRoute = require('./routes/story.route');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/dictionary', dictionaryRoute);
app.use('/story', storyRoute);

app.get('/', (req, res) => {
    res.send("API-Server");
})

app.listen(port, () => {
    console.log(`Server running at port ` + port);
});

module.exports = app;