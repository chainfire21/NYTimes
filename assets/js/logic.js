var searchQuery = "";
var startDate = "";
var endDate = "";
var recordNum = "";
var queries = "";

    $("#submit").on("click", function(event){
        event.preventDefault();
         searchQuery = $("#search-term").val();
        // console.log(searchQuery);
        startDate = $("#s-year").val();
        console.log(startDate);
        // endDate = "&end_date=" + $("#e-year").val();
        // recordNum = $("#records").val();
        if ($("#search-term").val() !== ""){
            queries+= "&q=" + searchQuery
        }
        if ($("#s-year").val() !== "") {
            queries+= "&begin_date=" + startDate;
        }
        if ($("#e-year").val() !== "") {
            queries += "&end_date=" + endDate;
        }

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=77b2df4c2d3244018dd444947fef304f" + queries;
        // url += '?' + $.param({
        //     'api-key': "77b2df4c2d3244018dd444947fef304f",
        //     'q': searchQuery,
        //     // 'begin_date': startDate,
        //     // 'end_date': endDate,
        //     // 'page': recordNum
        // });
        console.log("queries is " + queries);
        console.log(url);
        $.ajax({ url: url, method: "GET" }).then(function (res) {
            queries = "";
            console.log(res);
                $("#resultID").empty();
            for (var i = 0; i < res.response.docs.length; i++) {
                $("#resultID").append("<div class='row text-center'><a href ='" + res.response.docs[i].web_url + "'>" + res.response.docs[i].headline.main + "</a></div");
            }
        });
    });