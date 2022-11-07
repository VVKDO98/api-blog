const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = (app) => {
    app.put("/user/:uid", async (req, res) => {
        const uid = parseInt(req.params.uid);
        const updateUser = await prisma.users.update({
            where: {
                id: uid,
            },
            data: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                username: req.body.username,
                title: req.body.title,
            },
        });
        res.send(updateUser);
    });
};
