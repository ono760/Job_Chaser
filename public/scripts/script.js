$(function(){
    "use strict";
    $('.job-li').click(function(e){
        e.preventDefault();
        $.ajax({
            // url: 'http://api.indeed.com/ads/apisearch?publisher=4710753624090411&sort=&radius=&st=&jt=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json&q=java&l=san+jose&start=',
            url: 'http://api.indeed.com/ads/apisearch?publisher=4710753624090411&q=java&l=san%20francisco%2C+ca&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json',
            method: "GET",
            dataType: "json",
            // Headers: { "HeaderName": process.env },
            success: function (data){
              if (!data.Error) {
                console.log(JSON.stringify(data));
                $('.modalH4').html('ModalHeader');
                $('.modalP').html('bunch of text');
              } else {
                  alert('Movie not found');
              }
            }
        });
    });
    $('.modal-trigger').leanModal();
});
