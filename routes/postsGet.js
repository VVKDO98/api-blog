const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = (app) => {
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
};
