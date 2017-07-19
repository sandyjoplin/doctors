'use strict';
angular.module('main')
.controller('Comunidad8Ctrl', function ($log) {

  $log.log('Hello from your Controller: Comunidad8Ctrl in module main:. This is your controller:', this);

  mobiscroll.scroller('#inline2', {
    display: 'inline',
    layout: 'liquid',
    wheels: [
        [ {
            label: 'Condición',
            data: [{
                value: 0,
                display: 'Obesidad'
            }, {
                value: 1,
                display: 'Asma'
            }, {
                value: 2,
                display: 'Diabetes'
            }, {
                value: 3,
                display: 'Cáncer'
            }]
        }]
    ]
});

});
