$(function(){
    "use strict";
    $('.job-li').click(function(e){
        e.preventDefault();
        $.ajax({
            url: ''
        })
        $('.modalH4').html('ModalHeader');
        $('.modalP').html('bunch of text');
    });
//     var html =`<div id="modal1" class="modal">
//     <div class="modal-content">
//     <h4>Modal Header</h4>
// <p>A bunch of text</p>
// </div>
// <div class="modal-footer">
//     <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
//     </div>
//     </div>`;
    $('.modal-trigger').leanModal();
});

