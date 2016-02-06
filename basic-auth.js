Meteor.startup(function () {
    if (process.env.RESTRICT_ENV) {
        // Ensure credentials are provided
        if (!Meteor.settings.basicAuth) {
            throw new Error("[talos:basic-auth] No credentials were found in your meteor settings");
        }

        // Add connect handler at the top of the stack
        WebApp.connectHandlers.stack.splice(0, 0, {
            handle: function (req, res, next) {
                var auth = require("basic-auth"),
                    valid = Meteor.settings.basicAuth,
                    user = auth(req);

                if (!user || user.name !== valid.name || user.pass !== valid.pass) {
                    res.statusCode = 401;
                    res.end('Access denied');
                } else {
                    res.end('Access granted');
                    next();
                }
            }
        });
    }
});