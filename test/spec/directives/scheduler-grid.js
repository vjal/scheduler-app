'use strict';

describe('Directive: schedulerGrid', function () {

  // load the directive's module
  beforeEach(module('schedulerGridApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scheduler-grid></scheduler-grid>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the schedulerGrid directive');
  }));
});
