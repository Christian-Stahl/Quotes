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

        'use strict';

            // execute the AJAX request
            $.ajax({
                // url: 'xxx',
                
                dataType: 'json',
                beforeSend: function () {
                }
            })
            .done(successFunction)
            .fail(failFunction)
            .always(alwaysFunction);
 

        // success function
        function successFunction(data) {
            // if data exists
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    var randNum = Math.floor(Math.random() * data.length);
  
                        // $('.quote').text(data[randNum].quote);

                }
            }
        }
   
        // fail function
        function failFunction(request, textStatus, errorThrown) {
            $message.text('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
        }

        // always function
        function alwaysFunction() {
        }


    })(jQuery);