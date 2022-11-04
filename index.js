const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

// Routes
require("./routes/categories/get")(app);
require("./routes/categories/post")(app);
require("./routes/posts/get")(app);
require("./routes/posts/post")(app);
require("./routes/users/get")(app);
require("./routes/users/post")(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
