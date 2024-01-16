module.exports = app => {
    const users = require('../controller/users.controller');
    const route = require('express').Router();

    route.get("/", users.findAll);
    route.post("/email", users.findByEmail);
    route.get("/:id", users.find);
    route.post("/create", users.create);
    route.post("/login", users.login);
    route.put("/:id", users.update);
    route.delete("/:id", users.delete);

    app.use("/users", route)
}