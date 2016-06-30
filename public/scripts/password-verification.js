$(function() {
    "use strict";
    $('#sign-up-button').on('submit', function(e) {
        if ($('#password').val() != $('#confirm_password').val()) {
            $('.blank_warning').text('Passwords Do Not Match').css('color', 'red');
            $('.blank_warning').show();
            e.preventDefault();
        }
    })

});
