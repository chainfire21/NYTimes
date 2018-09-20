var searchQuery;
var startDate;
var endDate;

    $("#submit").on("click", function(){
        
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "77b2df4c2d3244018dd444947fef304f",
            'q': searchQUery,
            
        });
        
        $.ajax({ url: url, method: "GET" }).then(function (res) {
            console.log(res);
        });
    });