# Meteor Basic Auth

Restrict Meteor deployments with HTTP Basic Auth

### Installation

```console
meteor add talos:basic-auth
```

### Usage

1. Start Meteor with an environment variable, ```RESTRICT_ENV``` set to 1
2. Provide credentials in your Meteor settings
```javascript
// settings.json
{
  "basicAuth": {
    "name": "foo",
    "pass": "bar"
  }
}
```

### License

[MIT](LICENSE)