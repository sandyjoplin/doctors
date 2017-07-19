'use strict';
angular.module('main')
.controller('AgendaCtrl', function ($log) {

  $log.log('Hello from your Controller: AgendaCtrl in module main:. This is your controller:', this);
  var dateInstance,
    calendarInstance;

calendarInstance = mobiscroll.calendar('#agenda', {
    theme: 'mobiscroll',
    lang: 'es',
    display: 'inline',
    layout: 'liquid',
    events: [{
        d: new Date(),
        text: 'First Event'
    }]
});

});
