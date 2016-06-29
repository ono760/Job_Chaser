/**
 * Created by Nikhil on 6/29/16.
 */
$(function () {
    "use strict";

    $('#sign-up-button').on('submit', function (e) {
        e.preventDefault();
        console.log('hi');
        if ($('#password').val() != $('#confirm_password').val()) {
            $('.blank_warning').text('Passwords Do Not Match').css('color', 'red');
            $('.blank_warning').show();
        }
    });
});

//# sourceMappingURL=password-verification-compiled.js.map