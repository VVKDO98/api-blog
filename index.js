const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

// Routes
require("./routes/categories/get")(app);
require("./routes/categories/post")(app);
require("./routes/categories/put")(app);
require("./routes/categories/delete")(app);
require("./routes/posts/get")(app);
require("./routes/posts/post")(app);
require("./routes/posts/put")(app);
require("./routes/posts/delete")(app);
require("./routes/users/get")(app);
require("./routes/users/post")(app);
require("./routes/users/put")(app);
require("./routes/users/delete")(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
