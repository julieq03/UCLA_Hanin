const express = require("express");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json: req.body will be json input automatically now
app.use(bodyParser.json());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// this is a route to test connection
app.get("/express_backend_test", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

//all task apis
app.use("/api/tasks", require("./routes/api/tasks"));

//all firebase related calls
app.use("api/database", require("./routes/api/database"));

//all signup, login, user auth
app.use("api/user", require("./routes/api/user"));

//all third party calls: stripe, google places, twilio, etc
app.use("api/lib", require("./routes/api/lib"));
