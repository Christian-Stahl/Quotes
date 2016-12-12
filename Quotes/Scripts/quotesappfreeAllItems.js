'use strict';

function getQueryStringParameter(urlParameterKey) {
    var params = document.URL.split('?')[1].split('&');
    var strParams = '';
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split('=');
        if (singleParam[0] == urlParameterKey)
            return decodeURIComponent(singleParam[1]);
    }
}


jQuery.noConflict();
    (function ($) {

        // $(document).ready(function() {

        'use strict';

            // execute the AJAX request
            $.ajax({
                  url: 'https://quotesappfree.herokuapp.com/quotes.json',
                
                dataType: 'json',
                beforeSend: function () {
                    // $loader.show();
                }
            })
            .done(successFunction)
            .fail(failFunction)
            .always(alwaysFunction);
 

        // success function
        function successFunction(data) {
            // if data exists
            if (data.length > 0) {
                // loop through them - exemples 
                // for (var i = 0; i < data.length; i++) {
                // for (var i = 0; i < 8; i++) {

                var items = [];
                items.push("<ul>");

                    for (var i = 0; i < data.length; i++) {
                        var randNum = Math.floor(Math.random() * data.length);

                        items.push('<li>' +
                        data[randNum].id +
                            
                            //$('.id').text(data[randNum].id);
                            //$('.quote').text(data[randNum].quote);
                            //$('.author').text(data[randNum].author);

                           '</li>');
                    }

                    items.push("</ul");
                    $(".listResult").html(items.join(''))
                   

                }
            } 
   

        // fail function
        function failFunction(request, textStatus, errorThrown) {
            // hide the list and show the corresponding message
            $list.hide();
            $message.text('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
        }

        // always function
        function alwaysFunction() {
        // try this later
        }



    })(jQuery);




