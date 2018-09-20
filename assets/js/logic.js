var searchQuery;
var startDate;
var endDate;
var recordNum;

    $("#submit").on("click", function(event){
        event.preventDefault();
        searchQuery = $("#search-term").val();
        console.log(searchQuery);
        startDate = $("#s-year").val();
        endDate = $("#e-year").val();
        recordNum = $("#records").val();

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "77b2df4c2d3244018dd444947fef304f",
            'q': searchQuery,
            // 'begin_date': startDate,
            // 'end_date': endDate,
            // 'page': recordNum
        });
        
        $.ajax({ url: url, method: "GET" }).then(function (res) {
            console.log(res);
            $("#resultId").append("<div class='row'>" + "test" + "</div>");
        });
    });