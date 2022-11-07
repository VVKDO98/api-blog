const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = (app) => {
    app.get("/users", async (req, res) => {
        const allUsers = await prisma.users.findMany();
        res.send(allUsers);
    });
};
