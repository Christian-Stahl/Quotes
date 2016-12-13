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

// store app web URL
// in the aspx page, load this files to be able to get _spPageContextInfo
// sp.runtime.js 
// sp.js
// var appWebUrl = 'https://ecusolna-95dc25dd6da6a6.sharepoint.com/sites/christiandevsite/Quotes/'


$(document).ready(function () {
    var appWebUrl = window.location.protocol + "//" + window.location.host + _spPageContextInfo.webServerRelativeUrl;

    var request = $.ajax({
        url: appWebUrl + "/_api/web/lists/getbytitle('Quotes')/items?$select=QuoteText,QuoteAuthor",
            type: "GET",
            headers: { "Accept": "application/json;odata=verbose" },
            cache: false,
        })


    request.done(function (data) {

        var numberOfItems = data.d.results.length;
        var randItem = Math.floor(Math.random() * numberOfItems);
 
            var randText = data.d.results[randItem].QuoteText;
            var randAuthor = data.d.results[randItem].QuoteAuthor;

                $('.quoteText').html(randText);
                $('.quoteAuthor').html(randAuthor);

    });




    request.fail(function (jqXHR, textStatus) {
        console.log('syntax error!' + textStatus);
    });


});




