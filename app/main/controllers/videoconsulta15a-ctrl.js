'use strict';
angular.module('main')
.controller('Videoconsulta15aCtrl', function ($log) {

 
    mobiscroll.scroller('#inline2', {
    display: 'inline',
    layout: 'liquid',
    wheels: [
        [ {
            label: 'Especialidad',
            data: [{
                value: 0,
                display: '5 min'
            }, {
                value: 1,
                display: '10 min'
            }, {
                value: 2,
                display: '15 min'
            }, {
                value: 3,
                display: 'Reagendar'
            }]
        }]
    ]
});

});
