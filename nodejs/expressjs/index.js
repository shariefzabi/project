let express = require('express');
let app = express();
app.use(express.json())


app.get("/", function (req, res) {
    let { body, params, query } = req;
    console.log("path:", req.url)
    console.log("params:", params);
    console.log("params:", body);
    console.log("params:", query);
    res.send("Welcome to my home page")
})



const PORT = process.env.PORT || 5005;
app.listen(PORT, function (err, res) {
    if (err) throw err;
    console.log(`Application is started successfully and running on : ${PORT}...`);
})

