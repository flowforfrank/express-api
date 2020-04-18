const authorize = require('../authorize');

const routes = (app) => {
    const todo  = require('../controllers/Todo');
    const login = require('../controllers/Login');

    app.route('/login')
        .post(login.authenticate);

    // Todo Route
    app.route('/todo/:id?/')
        .get(authorize(todo.get))
        .post(todo.create)
        .put(todo.update)
        .delete(todo.delete);
};

module.exports = routes;
