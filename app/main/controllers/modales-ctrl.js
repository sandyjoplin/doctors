'use strict';
angular.module('main')
.controller('ModalesCtrl', function ($log) {

  $log.log('Hello from your Controller: ModalesCtrl in module main:. This is your controller:', this);

     // Get the modal
        var modal = document.getElementById('modalModales');

        // Get the button that opens the modal
        var btn = document.getElementById("btnModales");


        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal 
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    
});
