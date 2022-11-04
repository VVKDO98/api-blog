const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = (app) => {
    app.post("/user", async (req, res) => {
        const { name, email, password, username, title } = req.body;
        const user = await prisma.users.create({
            data: {
                name,
                email,
                password,
                username,
                title,
                created_at: new Date(),
            },
        });
        res.send(user);
    });
};
