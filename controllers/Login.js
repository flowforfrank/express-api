const jwt = require('jsonwebtoken');

const getUser = () => {
    return {
        id: 10
    };
}

module.exports = {
    authenticate(request, response) {
        if (request.body.email && request.body.password) {
            // Fetch user's data and verify credentials
            const user = getUser(request.body.email);

            jwt.sign(user, process.env.SECRET, (error, token) => {
                response.json({
                    id: user.id,
                    token: token
                });
            });

        } else {
            response.json({
                error: 'We\'ve couldn\'t sign you in 😔'
            });
        }

    }
};
