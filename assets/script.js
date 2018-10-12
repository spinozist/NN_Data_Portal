window.onload = function () {

    var countyGA = [
        "-Select County-",
        "Appling County",
        "Atkinson County",
        "Bacon County",
        "Baker County",
        "Baldwin County",
        "Banks County",
        "Barrow County",
        "Bartow County",
        "Ben Hill County",
        "Berrien County",
        "Bibb County",
        "Bleckley County",
        "Brantley County",
        "Brooks County",
        "Bryan County",
        "Bulloch County",
        "Burke County",
        "Butts County",
        "Calhoun County",
        "Camden County",
        "Candler County",
        "Carroll County",
        "Catoosa County",
        "Charlton County",
        "Chatham County",
        "Chattahoochee County",
        "Chattooga County",
        "Cherokee County",
        "Clarke County",
        "Clay County",
        "Clayton County",
        "Clinch County",
        "Cobb County",
        "Coffee County",
        "Colquitt County",
        "Columbia County",
        "Cook County",
        "Coweta County",
        "Crawford County",
        "Crisp County",
        "Dade County",
        "Dawson County",
        "Decatur County",
        "DeKalb County",
        "Dodge County",
        "Dooly County",
        "Dougherty County",
        "Douglas County",
        "Early County",
        "Echols County",
        "Effingham County",
        "Elbert County",
        "Emanuel County",
        "Evans County",
        "Fannin County",
        "Fayette County",
        "Floyd County",
        "Forsyth County",
        "Franklin County",
        "Fulton County",
        "Gilmer County",
        "Glascock County",
        "Glynn County",
        "Gordon County",
        "Grady County",
        "Greene County",
        "Gwinnett County",
        "Habersham County",
        "Hall County",
        "Hancock County",
        "Haralson County",
        "Harris County",
        "Hart County",
        "Heard County",
        "Henry County",
        "Houston County",
        "Irwin County",
        "Jackson County",
        "Jasper County",
        "Jeff Davis County",
        "Jefferson County",
        "Jenkins County",
        "Johnson County",
        "Jones County",
        "Lamar County",
        "Lanier County",
        "Laurens County",
        "Lee County",
        "Liberty County",
        "Lincoln County",
        "Long County",
        "Lowndes County",
        "Lumpkin County",
        "McDuffie County",
        "McIntosh County",
        "Macon County",
        "Madison County",
        "Marion County",
        "Meriwether County",
        "Miller County",
        "Mitchell County",
        "Monroe County",
        "Montgomery County",
        "Morgan County",
        "Murray County",
        "Muscogee County",
        "Newton County",
        "Oconee County",
        "Oglethorpe County",
        "Paulding County",
        "Peach County",
        "Pickens County",
        "Pierce County",
        "Pike County",
        "Polk County",
        "Pulaski County",
        "Putnam County",
        "Quitman County",
        "Rabun County",
        "Randolph County",
        "Richmond County",
        "Rockdale County",
        "Schley County",
        "Screven County",
        "Seminole County",
        "Spalding County",
        "Stephens County",
        "Stewart County",
        "Sumter County",
        "Talbot County",
        "Taliaferro County",
        "Tattnall County",
        "Taylor County",
        "Telfair County",
        "Terrell County",
        "Thomas County",
        "Tift County",
        "Toombs County",
        "Towns County",
        "Treutlen County",
        "Troup County",
        "Turner County",
        "Twiggs County",
        "Union County",
        "Upson County",
        "Walker County",
        "Walton County",
        "Ware County",
        "Warren County",
        "Washington County",
        "Wayne County",
        "Webster County",
        "Wheeler County",
        "White County",
        "Whitfield County",
        "Wilcox County",
        "Wilkes County",
        "Wilkinson County",
        "Worth County"];

    var countyFIPS = [
        null,
        "001",
        "003",
        "005",
        "007",
        "009",
        "011",
        "013",
        "015",
        "017",
        "019",
        "021",
        "023",
        "025",
        "027",
        "029",
        "031",
        "033",
        "035",
        "037",
        "039",
        "043",
        "045",
        "047",
        "049",
        "051",
        "053",
        "055",
        "057",
        "059",
        "061",
        "063",
        "065",
        "067",
        "069",
        "071",
        "073",
        "075",
        "077",
        "079",
        "081",
        "083",
        "085",
        "087",
        "089",
        "091",
        "093",
        "095",
        "097",
        "099",
        "101",
        "103",
        "105",
        "107",
        "109",
        "111",
        "113",
        "115",
        "117",
        "119",
        "121",
        "123",
        "125",
        "127",
        "129",
        "131",
        "133",
        "135",
        "137",
        "139",
        "141",
        "143",
        "145",
        "147",
        "149",
        "151",
        "153",
        "155",
        "157",
        "159",
        "161",
        "163",
        "165",
        "167",
        "169",
        "171",
        "173",
        "175",
        "177",
        "179",
        "181",
        "183",
        "185",
        "187",
        "189",
        "191",
        "193",
        "195",
        "197",
        "199",
        "201",
        "205",
        "207",
        "209",
        "211",
        "213",
        "215",
        "217",
        "219",
        "221",
        "223",
        "225",
        "227",
        "229",
        "231",
        "233",
        "235",
        "237",
        "239",
        "241",
        "243",
        "245",
        "247",
        "249",
        "251",
        "253",
        "255",
        "257",
        "259",
        "261",
        "263",
        "265",
        "267",
        "269",
        "271",
        "273",
        "275",
        "277",
        "279",
        "281",
        "283",
        "285",
        "287",
        "289",
        "291",
        "293",
        "295",
        "297",
        "299",
        "301",
        "303",
        "305",
        "307",
        "309",
        "311",
        "313",
        "315",
        "317",
        "319",
        "321"];

    var yearArray = [
        "-Select Year-",
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017];

    var selectYear = $(`#year-selector`);
    var selectCounty = $(`#county-selector`);

    for (var i = 0; i < countyGA.length; i++) {
        var opt = countyGA[i];
        var el = $(`<option>`);
        el.text(opt);
        el.attr(`value`, opt);
        selectCounty.append(el);
    };

    for (var i = 0; i < yearArray.length; i++) {
        var opt = yearArray[i];
        var el = $(`<option>`);
        el.text(opt);
        el.attr(`value`, opt);
        selectYear.append(el);
    };

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

        var input = $(`#county-selector option:selected`).val();

        var year = $(`#year-selector option:selected`).val();

        // var popArray = [];

        var countyID = countyFIPS[countyGA.indexOf(input)]
        // var inputID = stateFIPS[stateNames.indexOf(input)];

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

        var queryURL = `https://api.census.gov/data/${year}/acs/acs1?get=NAME,B01001_001E&for=county:${countyID}&in=state:13`;

        var queryURL2 = `https://api.census.gov/data/${year}/acs/acs1?get=NAME,B19013_001E&for=county:${countyID}&in=state:13`;

        var queryURL3 = `https://api.census.gov/data/${year}/acs/acs1/subject?get=NAME,S2301_C04_001E&for=county:${countyID}&in=state:13`;


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