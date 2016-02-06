Meteor.startup(function () {
    var stack;

    if (process.env.RESTRICT_ENV) {
        // Ensure credentials are provided
        if (!Meteor.settings.basicAuth) {
            throw new Error("[talos:basic-auth] No credentials were found in your meteor settings");
        }

        // Add handler
        WebApp.connectHandlers.use(function (req, res, next) {
            var auth = Npm.require("basic-auth"),
                valid = Meteor.settings.basicAuth,
                user = auth(req);

            if (!user || user.name !== valid.name || user.pass !== valid.pass) {
                res.statusCode = 401;
                res.end('Access denied');
            } else {
                next();
            }
        });

        // Move handler to the top of the stack
        stack = WebApp.connectHandlers.stack;
        stack.unshift(stack.pop());
    }
});