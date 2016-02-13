# angular-socket-io [![Build Status](https://travis-ci.org/btford/angular-socket-io.svg)](https://travis-ci.org/btford/angular-socket-io)

Bower Component for using AngularJS with [Socket.IO](http://socket.io/),
based on [this](http://briantford.com/blog/angular-socket-io.html).


## Install

1. `bower install angular-socket-io` or [download the zip](https://github.com/btford/angular-socket-io/archive/master.zip).
2. Make sure the Socket.IO client lib is loaded. It's often served at `/socket.io/socket.io.js`.
3. Include the `socket.js` script provided by this component into your app.
4. Add `btford.socket-io` as a module dependency to your app.


## Usage

This module exposes a `socketFactory`, which is an API for instantiating
sockets that are integrated with Angular's digest cycle.


### Making a Socket Instance

```javascript
// in the top-level module of the app
angular.module('myApp', [
  'btford.socket-io',
  'myApp.MyCtrl'
]).
factory('mySocket', function (socketFactory) {
  return socketFactory();
});
```

With that, you can inject your `mySocket` service into controllers and
other serivices within your application!

### Using Your Socket Instance

Building on the example above:

```javascript
// in the top-level module of the app
angular.module('myApp', [
  'btford.socket-io',
  'myApp.MyCtrl'
]).
factory('mySocket', function (socketFactory) {
  return socketFactory();
}).
controller('MyCtrl', function (mySocket) {
  // ...
});
```


## API

For the most part, this component works exactly like you would expect.
The only API addition is `socket.forward`, which makes it easier to add/remove listeners in a way that works with [AngularJS's scope](http://docs.angularjs.org/api/ng.$rootScope.Scope).

### `socket.on` / `socket.addListener`
Takes an event name and callback.
Works just like the method of the same name from Socket.IO.

### `socket.removeListener`
Takes an event name and callback.
Works just like the method of the same name from Socket.IO.

### `socket.removeAllListeners`
Takes an event name.
Works just like the method of the same name from Socket.IO.

### `socket.emit`
Sends a message to the server.
Optionally takes a callback.

Works just like the method of the same name from Socket.IO.

### `socket.forward`

`socket.forward` allows you to forward the events received by Socket.IO's socket to AngularJS's event system.
You can then listen to the event with `$scope.$on`.
By default, socket-forwarded events are namespaced with `socket:`.

The first argument is a string or array of strings listing the event names to be forwarded.
The second argument is optional, and is the scope on which the events are to be broadcast.
If an argument is not provided, it defaults to `$rootScope`.
As a reminder, broadcasted events are propagated down to descendant scopes.

#### Examples

An easy way to make socket error events available across your app:

```javascript
// in the top-level module of the app
angular.module('myApp', [
  'btford.socket-io',
  'myApp.MyCtrl'
]).
factory('mySocket', function (socketFactory) {
  var mySocket = socketFactory();
  mySocket.forward('error');
  return mySocket;
});

// in one of your controllers
angular.module('myApp.MyCtrl', []).
  controller('MyCtrl', function ($scope) {
    $scope.$on('socket:error', function (ev, data) {

    });
  });
```

Avoid duplicating event handlers when a user navigates back and forth between routes:

```javascript
angular.module('myMod', ['btford.socket-io']).
  controller('MyCtrl', function ($scope, socket) {
    socket.forward('someEvent', $scope);
    $scope.$on('socket:someEvent', function (ev, data) {
      $scope.theData = data;
    });
  });
```


### `socketFactory({ ioSocket: }}`

This option allows you to provide the `socket` service with a `Socket.IO socket` object to be used internally.
This is useful if you want to connect on a different path, or need to hold a reference to the `Socket.IO socket` object for use elsewhere.

```javascript
angular.module('myApp', [
  'btford.socket-io'
]).
factory('mySocket', function (socketFactory) {
  var myIoSocket = io.connect('/some/path');

  mySocket = socketFactory({
    ioSocket: myIoSocket
  });

  return mySocket;
});
```

### `socketFactory({ scope: })`

This option allows you to set the scope on which `$broadcast` is forwarded to when using the `forward` method.
It defaults to `$rootScope`.


### `socketFactory({ prefix: })`

The default prefix is `socket:`.


#### Example

To remove the prefix:

```javascript
angular.module('myApp', [
  'btford.socket-io'
]).
config(function (socketProvider) {
  socketProvider.prefix('');
});
```



## Migrating from 0.2 to 0.3

`angular-socket-io` version `0.3` changes X to make fewer assumptions
about the lifecycle of the socket. Previously, the assumption was that your
application has a single socket created at config time. While this holds
for most apps I've seen, there's no reason you shouldn't be able to
lazily create sockets, or have multiple connections.

In `0.2`, `angular-socket-io` exposed a `socket` service. In `0.3`, it
instead exposes a `socketFactory` service which returns socket instances.
Thus, getting the old API is as simple as making your own `socket` service
with `socketFactory`. The examples below demonstrate how to do this.

### Simple Example

In most cases, adding the following to your app should suffice:

```javascript
// ...
factory('socket', function (socketFactory) {
  return socketFactory();
});
// ...
```

### Example with Configuration

Before:

```javascript
angular.module('myApp', [
  'btford.socket-io'
]).
config(function (socketProvider) {
  socketProvider.prefix('foo~');
  socketProvider.ioSocket(io.connect('/some/path'));
}).
controller('MyCtrl', function (socket) {
  socket.on('foo~bar', function () {
    $scope.bar = true;
  });
});
```

After:

```javascript
angular.module('myApp', [
  'btford.socket-io'
]).
factory('socket', function (socketFactory) {
  return socketFactory({
    prefix: 'foo~',
    ioSocket: io.connect('/some/path')
  });
}).
controller('MyCtrl', function (socket) {
  socket.on('foo~bar', function () {
    $scope.bar = true;
  });
});
```


## FAQ

[Closed issues labelled `FAQ`](https://github.com/btford/angular-socket-io/issues?labels=faq&page=1&state=closed) might have the answer to your question.


## See Also

* [ngSocket](https://github.com/jeffbcross/ngSocket)
* [angular-socket.io-mock](https://github.com/nullivex/angular-socket.io-mock)


## License
MIT
