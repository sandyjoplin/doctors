'use strict';

describe('module: main, controller: TusNuevosCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var TusNuevosCtrl;
  beforeEach(inject(function ($controller) {
    TusNuevosCtrl = $controller('TusNuevosCtrl');
  }));

  it('should do something', function () {
    expect(!!TusNuevosCtrl).toBe(true);
  });

});
