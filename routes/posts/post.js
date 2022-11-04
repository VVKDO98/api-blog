const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = (app) => {
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
};
