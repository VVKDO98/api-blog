const express = require("express");

require("dotenv").config();

const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT;

app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send({ Hello: "world" });
});

const routesPath = path.join(__dirname, "./routes");
const routesDir = fs.readdirSync(routesPath);

routesDir.forEach((route) => {
    require(path.join(routesPath, route))(app);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
