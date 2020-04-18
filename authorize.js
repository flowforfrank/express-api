const jwt = require('jsonwebtoken');

module.exports = callback => {
    return (request, response) => {
        jwt.verify(request.headers.token, process.env.SECRET, (error, payload) => {
            if (error) {
                response.sendStatus(403);
            } else {
                callback(request, response);
            }
        });
    };
}