'use strict';
angular.module('main')
.controller('Comunidad4cCtrl', function ($log) {

  var instance,
    now = new Date(),
    max = new Date(now.getFullYear() + 100, now.getMonth(), now.getDate());

instance = mobiscroll.calendar('#demo', {
	lang: 'es',
    theme: 'mobiscroll',
    display: 'inline',
    max: max
});



});
