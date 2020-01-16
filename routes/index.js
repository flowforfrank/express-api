'use strict';

const routes = (app) => {
    const todo = require('../controllers/Todo');

    // Todo Route
    app.route('/todo/:id?/')
        .get(todo.get)
        .post(todo.create)
        .put(todo.update)
        .delete(todo.delete);
};

module.exports = routes;
