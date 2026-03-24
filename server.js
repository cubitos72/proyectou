const express = require("express");
const app = express();

app.use(express.json());

app.post("/datos", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(3000);
