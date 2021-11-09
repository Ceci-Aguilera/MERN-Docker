const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
path = require('path');


// For Production
const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

// For Production
app.use(express.static(CLIENT_BUILD_PATH));

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});

// For Production
app.get("/", function(req, res) {
  res.sendFile(path.join(CLIENT_BUILD_PATH , "index.html"));
});

require('./src/database');

// Routes
const testRouter = require('./src/routes/test.router');


app.use('/tests', testRouter);
