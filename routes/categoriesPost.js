const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = (app) => {
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
};
