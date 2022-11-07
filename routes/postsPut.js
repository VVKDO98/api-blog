const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = (app) => {
    app.put("/post/:pid", async (req, res) => {
        const pid = parseInt(req.params.pid);
        const updatePost = await prisma.posts.update({
            where: {
                id: pid,
            },
            data: {
                title: req.body.title,
                excerpt: req.body.excerpt,
                body: req.body.body,
                category_id: req.body.category_id,
                user_id: req.body.user_id,
            },
        });
        res.send(updatePost);
    });
};
