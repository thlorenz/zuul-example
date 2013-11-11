# zuul-example [![build status](https://secure.travis-ci.org/thlorenz/zuul-example.png)](http://travis-ci.org/thlorenz/zuul-example)

An example of using the zuul test runner to execute your tests locally and remotely including custom server and browserify setup.

## Automated test script

The `test` script in the [package.json](https://github.com/thlorenz/zuul-example/blob/master/package.json) together with
the [run-test](https://github.com/thlorenz/zuul-example/blob/master/run-test) script allows you to run tests
automatically via `npm test` which works even on travis.ci (see badge).

The `test-dev` script launches the zuul test server via `npm run test-dev` so you can continuously run your tests in the
browser while applying changes to your code.

For more info please review [this wiki page](https://github.com/defunctzombie/zuul/wiki/Phantom-js).

Both scripts automatically pick up settings specified inside
[.zuul.yml](https://github.com/thlorenz/zuul-example/blob/master/.zuul.yml)

## Exposing global libraries

Although via are loading jquery via a [script tag](https://github.com/thlorenz/zuul-example/blob/master/.zuul.yml#L4) we
want to use it in a [common-js way](https://github.com/thlorenz/zuul-example/blob/master/test/main.js#L4).

Two steps are needed to allow this:

1. create a script to [expose jquery from the window](https://github.com/thlorenz/zuul-example/blob/master/expose/jquery.js)
2. tell browserify (used by zuul under the hood to bundle your code) that we want to use this expose file whenever
   someone asks for `jquery` via this simple addition to the [browser field in the package.json](https://github.com/thlorenz/zuul-example/blob/5d5f01fe1fcb0d6213266c63b5c8b9842cdd5164/package.json#L10-L12)

## Adding extra routes via custom server

1. we created a [custom server](https://github.com/thlorenz/zuul-example/blob/master/test/support/server.js) which adds [`/routes`](http://localhost:3100/routes).
2. tell zuul to [initialize this server](https://github.com/thlorenz/zuul-example/blob/master/.zuul.yml#L2)

## License

MIT
