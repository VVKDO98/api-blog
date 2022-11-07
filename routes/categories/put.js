const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = (app) => {
    app.put("/category/:cid", async (req, res) => {
        const cid = parseInt(req.params.cid);
        const updateCategory = await prisma.categories.update({
            where: {
                id: cid,
            },
            data: {
                name: req.body.name,
                slug: req.body.slug,
            },
        });
        res.send(updateCategory);
    });
};
