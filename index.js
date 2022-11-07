const express = require("express");

require("dotenv").config();

const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT;

app.use(express.json());

// ----- Routes
app.get("/", (req, res) => {
    res.send({
        routes: {
            get: {
                users: "https://api-blog-janh.onrender.com/users",
                categories: "https://api-blog-janh.onrender.com/categories",
                categoryByID: "https://api-blog-janh.onrender.com/category/:id",
                posts: "https://api-blog-janh.onrender.com/posts",
                postByID: "https://api-blog-janh.onrender.com/post/:id",
            },
        },
    });
});

const routesPath = path.join(__dirname, "./routes");
const routesDir = fs.readdirSync(routesPath);

routesDir.forEach((route) => {
    require(path.join(routesPath, route))(app);
});
// ----- End Routes

// ----- Error 404
app.use((req, res, next) => {
    res.status(404).send({ Error: { Code: 404, Message: "404 not found" } });
});
// ----- End error 404

app.listen(port, () => {
    console.log(`Server start on port : ${port}`);
});
