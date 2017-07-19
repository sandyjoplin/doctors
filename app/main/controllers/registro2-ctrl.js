'use strict';
angular.module('main')
.controller('Registro2Ctrl', function ($log) {

    mobiscroll.scroller('#inline2', {
    display: 'inline',
    layout: 'liquid',
    wheels: [
        [ {
            label: 'Especialidad',
            data: [{
                value: 0,
                display: 'Especilidad 1'
            }, {
                value: 1,
                display: 'Especialidad 2'
            }, {
                value: 2,
                display: 'Especialidad 3'
            }, {
                value: 3,
                display: 'Especialidad 4'
            }]
        }]
    ]
});

});
