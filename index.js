let express = require('express');
let app = express();

app.get("/", function (req, res) {
    let { body, params, query } = req;
    console.log("path:", req.url)
    console.log("params:", params);
    console.log("body:", body);
    console.log("query:", query);
    res.send("Welcome to Home page")
})


const PORT = 5005;
app.listen(PORT, function (err, res) {
    if (err) throw err;
    console.log(`Application is started successfully and running on : ${PORT}...`);
})

