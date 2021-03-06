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


        var random = '1';
        // Add your key here..
        var apikey = '';
 
            // execute the AJAX request
            $.ajax({
                async: true,
                url: 'https://evolutiondb-a4d8.restdb.io/rest/quotes',
                crossDomain: true,
                dataType: 'json',
                method: "GET",
                headers: {
                    'x-apikey': apikey,
                    'content-type': 'application/json'
                }
            })

            .done(successFunction)
            .fail(failFunction)
            .always(alwaysFunction);
 
        // success function
        function successFunction(data) {
            if (data.length > 0) {


                // onödig funktion tror jag..
                var randomSetting = "";
                    if (random == '1') {
                        // random is on;
                        for (var i = 0; i < data.length; i++) {
                            var randNum = Math.floor(Math.random() * data.length);
                                $('.quote').text(data[randNum].quote);
                                $('.author').text(data[randNum].author);
                                $('.rand').text(randomSetting);
                        }
                    }

                    else {
                        // randomSetting = '0';
                        for (var i = 0; i < data.length; i++) {
                            $('.quote').text(data[i].quote);
                            $('.author').text(data[i].author);
                            $('.rand').text(randomSetting);
                        }
                    }


            }
        }
   
        // fail function
        function failFunction(request, textStatus, errorThrown) {
            $('.quote').html("Please make sure to add a valid API key, its free.." + "<a href='https://restdb.io/signup/' target='_blank'>" + "https://restdb.io/signup/" + "</a>");
        }

        // always function
        function alwaysFunction() {
        }

    })(jQuery);
