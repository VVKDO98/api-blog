const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = (app) => {
    app.delete("/category/:cid", async (req, res) => {
        const cid = parseInt(req.params.cid);
        const deleteCategory = await prisma.categories.delete({
            where: {
                id: cid,
            },
        });
        res.send(deleteCategory);
    });
};
