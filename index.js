const { PrismaClient } = require("@prisma/client");
const express = require("express");

const app = express();
const port = 3000;

const prisma = new PrismaClient();

app.use(express.json());

// Get routes
app.get("/posts", async (req, res) => {
    const allPosts = await prisma.posts.findMany({
        include: {
            user: true,
            categories: true,
        },
    });
    res.send(allPosts);
});

app.get("/post/:pid", async (req, res) => {
    const pid = parseInt(req.params.pid);
    const post = await prisma.posts.findUnique({
        where: {
            id: pid,
        },
        include: {
            user: true,
            categories: true,
        },
    });
    res.send(post);
});

app.get("/categories", async (req, res) => {
    const allCategories = await prisma.categories.findMany();
    res.send(allCategories);
});

app.get("/users", async (req, res) => {
    const allUsers = await prisma.users.findMany();
    res.send(allUsers);
});

// Post routes
app.post("/post", async (req, res) => {
    const { title, excerpt, body, category_id, user_id } = req.body;
    const post = await prisma.posts.create({
        data: {
            title,
            excerpt,
            body,
            category_id,
            user_id,
            created_at: new Date(),
        },
    });
    res.send(post);
});

app.post("/user", async (req, res) => {
    const { name, email, password, username, title } = req.body;
    const user = await prisma.users.create({
        data: {
            name,
            email,
            password,
            username,
            title,
            created_at: new Date(),
        },
    });
    res.send(user);
});

app.post("/category", async (req, res) => {
    const { name, slug } = req.body;
    const cateogry = await prisma.categories.create({
        data: {
            name,
            slug,
        },
    });
    res.send(cateogry);
});

app.get("/category/:cid", async (req, res) => {
    const cid = parseInt(req.params.cid);
    const category = await prisma.categories.findUnique({
        where: {
            id: cid,
        },
        include: {
            posts: true,
        },
    });
    res.send(category);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
