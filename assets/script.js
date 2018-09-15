$("document").ready(function () {
    var geoType = "City";
    var geoName = "Atlanta";
    var topDataVal = [
        "550,600",
        "$67,939",
        "4.3%",
    ]

    var topDataLabel = [
        "Total Population",
        "Median Household Income",
        "Unemployment Rate",
    ]

    

    $("button").on("click", function () {
        var name = $("<h1>");
        var type = $("<h2>");
        var topData = $("<h3>");
        name.text(geoName);
        type.text(geoType);
        for (i = 0; i < topDataVal.length; i++) {
            topData.append("<p>" + topDataLabel[i] + "</p>" + topDataVal[i]);
        }
        topData.html()
        $("body").attr("class","background-image");
        $("#geo-type").html(type);
        $("#geo-name").html(name);
        $("#top-data").html(topData);
        $(".container").attr("id","main-container");
        $("button").attr("class","hidden");



    })









})