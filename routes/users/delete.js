const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = (app) => {
    app.delete("/user/:uid", async (req, res) => {
        const uid = parseInt(req.params.uid);
        const deleteUser = await prisma.users.delete({
            where: {
                id: uid,
            },
        });
        res.send(deleteUser);
    });
};
