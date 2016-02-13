/*
 * angular-socket-io v0.4.1
 * (c) 2014 Brian Ford http://briantford.com
 * License: MIT
 */

'use strict';


describe('socketFactory', function () {

  beforeEach(module('btford.socket-io'));

  var socket,
      scope,
      $timeout,
      $browser,
      mockIoSocket,
      spy;

  beforeEach(inject(function (socketFactory, _$browser_, $rootScope, _$timeout_) {
    $browser = _$browser_;
    $timeout = _$timeout_;
    scope = $rootScope.$new();
    spy = jasmine.createSpy('emitSpy');
    mockIoSocket = io.connect();
    socket = socketFactory({
      ioSocket: mockIoSocket,
      scope: scope
    });
  }));


  describe('#on', function () {

    it('should apply asynchronously', function () {
      socket.on('event', spy);

      mockIoSocket.emit('event');

      expect(spy).not.toHaveBeenCalled();
      $timeout.flush();

      expect(spy).toHaveBeenCalled();
    });

  });


  describe('#disconnect', function () {

    it('should call the underlying socket.disconnect', function () {
      mockIoSocket.disconnect = spy;
      socket.disconnect();
      expect(spy).toHaveBeenCalled();
    });

  });

  describe('#connect', function () {

    it('should call the underlying socket.connect', function () {
      mockIoSocket.connect = spy;
      socket.connect();
      expect(spy).toHaveBeenCalled();
    });

  });


  describe('#once', function () {

    it('should apply asynchronously', function () {
      socket.once('event', spy);

      mockIoSocket.emit('event');

      expect(spy).not.toHaveBeenCalled();
      $timeout.flush();

      expect(spy).toHaveBeenCalled();
    });

    it('should only run once', function () {
      var counter = 0;
      socket.once('event', function () {
        counter += 1;
      });

      mockIoSocket.emit('event');
      mockIoSocket.emit('event');
      $timeout.flush();

      expect(counter).toBe(1);
    });

  });


  describe('#emit', function () {

    it('should call the delegate socket\'s emit', function () {
      spyOn(mockIoSocket, 'emit');

      socket.emit('event', {foo: 'bar'});

      expect(mockIoSocket.emit).toHaveBeenCalled();
    });

    it('should allow multiple data arguments', function () {
      spyOn(mockIoSocket, 'emit');
      socket.emit('event', 'x', 'y');
      expect(mockIoSocket.emit).toHaveBeenCalledWith('event', 'x', 'y');
    });

    it('should wrap the callback with multiple data arguments', function () {
      spyOn(mockIoSocket, 'emit');
      socket.emit('event', 'x', 'y', spy);
      expect(mockIoSocket.emit.mostRecentCall.args[3]).toNotBe(spy);

      mockIoSocket.emit.mostRecentCall.args[3]();
      expect(spy).not.toHaveBeenCalled();
      $timeout.flush();

      expect(spy).toHaveBeenCalled();
    });

  });


  describe('#removeListener', function () {

    it('should not call after removing an event', function () {
      socket.on('event', spy);
      socket.removeListener('event', spy);

      mockIoSocket.emit('event');

      expect($browser.deferredFns.length).toBe(0);
    });

  });


  describe('#removeAllListeners', function () {

    it('should not call after removing listeners for an event', function () {
      socket.on('event', spy);
      socket.removeAllListeners('event');

      mockIoSocket.emit('event');

      expect($browser.deferredFns.length).toBe(0);
    });

    it('should not call after removing all listeners', function () {
      socket.on('event', spy);
      socket.on('event2', spy);
      socket.removeAllListeners();

      mockIoSocket.emit('event');
      mockIoSocket.emit('event2');

      expect($browser.deferredFns.length).toBe(0);
    });

  });


  describe('#forward', function () {

    it('should forward events', function () {
      socket.forward('event');

      scope.$on('socket:event', spy);
      mockIoSocket.emit('event');
      $timeout.flush();

      expect(spy).toHaveBeenCalled();
    });

    it('should forward an array of events', function () {
      socket.forward(['e1', 'e2']);

      scope.$on('socket:e1', spy);
      scope.$on('socket:e2', spy);

      mockIoSocket.emit('e1');
      mockIoSocket.emit('e2');
      $timeout.flush();
      expect(spy.callCount).toBe(2);
    });

    it('should remove watchers when the scope is removed', function () {

      socket.forward('event');
      scope.$on('socket:event', spy);
      mockIoSocket.emit('event');
      $timeout.flush();

      expect(spy).toHaveBeenCalled();

      scope.$destroy();
      spy.reset();
      mockIoSocket.emit('event');
      expect(spy).not.toHaveBeenCalled();
    });

    it('should use the specified prefix', inject(function (socketFactory) {
      var socket = socketFactory({
        ioSocket: mockIoSocket,
        scope: scope,
        prefix: 'custom:'
      });

      socket.forward('event');

      scope.$on('custom:event', spy);
      mockIoSocket.emit('event');
      $timeout.flush();

      expect(spy).toHaveBeenCalled();
    }));

    it('should use an empty prefix if specified', inject(function (socketFactory) {
      var socket = socketFactory({
        ioSocket: mockIoSocket,
        scope: scope,
        prefix: ''
      });

      socket.forward('event');

      scope.$on('event', spy);
      mockIoSocket.emit('event');
      $timeout.flush();

      expect(spy).toHaveBeenCalled();
    }));

    it('should forward to the specified scope when one is provided', function () {
      var child = scope.$new();
      spyOn(child, '$broadcast');
      socket.forward('event', child);

      scope.$on('socket:event', spy);
      mockIoSocket.emit('event');
      $timeout.flush();

      expect(child.$broadcast).toHaveBeenCalled();
    });

    it('should pass all arguments to scope.$on', function () {
      socket.forward('event');
      scope.$on('socket:event', spy);
      mockIoSocket.emit('event', 1, 2, 3);
      $timeout.flush();

      expect(spy.calls[0].args.slice(1)).toEqual([1, 2, 3]);
    });
  });

});
