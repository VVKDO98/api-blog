const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = (app) => {
    app.get("/categories", async (req, res) => {
        const allCategories = await prisma.categories.findMany();
        res.send(allCategories);
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
};
