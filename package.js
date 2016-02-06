Package.describe({
  name: 'talos:basic-auth',
  version: '1.0.0',
  summary: 'Restrict Meteor deployments with HTTP Basic Auth',
  git: 'https://github.com/talos-code/meteor-basic-auth'
});

Npm.depends({
  'basic-auth': '1.0.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('basic-auth.js', 'server');
});