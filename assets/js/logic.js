var searchQuery;
var startDate;
var endDate;
var recordNum;

    $("#submit").on("click", function(){

        searchQuery = $("#search-term").val();
        startDate = $("#s-year").val();
        endDate = $("#e-year").val();
        recordNum = $("#records").val();

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "77b2df4c2d3244018dd444947fef304f",
            'q': searchQuery,
            'begin_date': startDate,
            'end_date': endDate,
            'page': recordNum
        });
        
        $.ajax({ url: url, method: "GET" }).then(function (res) {
            console.log(res);
        });
    });