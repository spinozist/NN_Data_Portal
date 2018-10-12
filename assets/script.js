window.onload = function () {

    $(`#submit-button`).on(`click`, function () {

        console.log(`button clicked`);

        var stateNames = [
            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "District of Columbia",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming",
        ];

        var stateFIPS = [
            "01",
            "02",
            "04",
            "05",
            "06",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31",
            "32",
            "33",
            "34",
            "35",
            "36",
            "37",
            "38",
            "39",
            "40",
            "41",
            "42",
            "44",
            "45",
            "46",
            "47",
            "48",
            "49",
            "50",
            "51",
            "53",
            "54",
            "55",
            "56",
        ];

        var input = $(`#state-input`).val();

        var year = $(`#year-input`).val();

        // var popArray = [];

        // var yearArray = [2010,2011,2012,2013,2014,2015,2016,2017];

        var inputID = stateFIPS[stateNames.indexOf(input)];

        var topDataLabel = [
            "Population",
            "Median Household Income",
            "Unemployment Rate",
        ];

        function writePop(response) {
            var population = numeral(response[1][1]).format('0,0');
            $("#year").html(`<p>${year}</p>`);
            $("#geo-name").html(`<h1>${response[1][0]}</h1>`);
            $("#population").html(`<p>${topDataLabel[0]}</p><h2>${population}<h2>`);

            console.log(response);
        };


        function writeInc(response) {
            var income = numeral(response[1][1]).format('$0,0');
            $("#income").html(`<p>${topDataLabel[1]}</p><h2>${income}<h2>`);
            console.log(response);
        };

        function writeUnEmp(response) {
            var unemp = numeral((response[1][1]) / 100).format('0.0%');
            $("#unemployment").html(`<p>${topDataLabel[2]}</p><h2>${unemp}<h2>`);

            console.log(response);
        };

        // function pushPop (response) {

        //     var pop = Number(response[1][1]);

        //     console.log(pop);
        //     popArray.push(pop);
        //     var chartData = {
        //         type: 'bar',  // Specify your chart type here.
        //         title: {
        //           text: 'Population' // Adds a title to your chart
        //         },
        //         scaleX: {values: yearArray},                // legend: {}, // Creates an interactive legend
        //         series: [{values: popArray}],
        //       };
        //       zingchart.render({ // Render Method[3]
        //         id: 'chartDiv',
        //         data: chartData,
        //         // height: 400,
        //         // width: 600
        //       });
        // }

        // var chartData = {
        //     type: 'line',  // Specify your chart type here.
        //     title: {
        //       text: 'Population' // Adds a title to your chart
        //     },
        //     scaleX: {values: yearArray},
        //     // legend: {}, // Creates an interactive legend
        //     series: [{values: popArray}],
        //   };

        var queryURL = `https://api.census.gov/data/${year}/acs/acs1?get=NAME,B01001_001E&for=state:${inputID}`;

        var queryURL2 = `https://api.census.gov/data/${year}/acs/acs1?get=NAME,B19013_001E&for=state:${inputID}`;

        var queryURL3 = `https://api.census.gov/data/${year}/acs/acs1/subject?get=NAME,S2301_C04_001E&for=state:${inputID}`;


        // for (i = 0; i < yearArray.length; i++) {
        //     var queryURL4 = `https://api.census.gov/data/${yearArray[i]}/acs/acs1?get=NAME,B01001_001E&for=state:${inputID}`;
        //     $.ajax({
        //         url: queryURL4,
        //         method: "GET"
        //     }).done(pushPop)       
        // };

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(writePop);

        $.ajax({
            url: queryURL2,
            method: "GET"
        }).done(writeInc);

        $.ajax({
            url: queryURL3,
            method: "GET"
        }).done(writeUnEmp);



        // zingchart.render({ // Render Method[3]
        //     id: 'chartDiv',
        //     data: chartData,
        //     // height: 400,
        //     // width: 600
        //   });
    });


}