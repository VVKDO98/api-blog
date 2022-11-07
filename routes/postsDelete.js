const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = (app) => {
    app.delete("/post/:pid", async (req, res) => {
        const pid = parseInt(req.params.pid);
        const deletePost = await prisma.posts.delete({
            where: {
                id: pid,
            },
        });
        res.send(deletePost);
    });
};
