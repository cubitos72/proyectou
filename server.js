const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/datos", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(3000);
