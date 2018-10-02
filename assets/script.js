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

var input = prompt(`Enter State Name`);

var inputID = stateFIPS[stateNames.indexOf(input)];

var topDataLabel = [
    "Total Population",
    "Median Household Income",
    "Unemployment Rate",
];

var year = "2017";

function writePop(response) {
    var population = numeral(response[1][1]).format('0,0');
    $("#year").append(`<p>${year}</p>`);
    $("#geo-name").append(`<h1>${response[1][0]}</h1>`);
    $("#population").append(`<p>${topDataLabel[0]}</p><h2>${population}<h2>`);

    console.log(response);
}


function writeInc(response) {
    var income = numeral(response[1][1]).format('$0,0');
    $("#income").append(`<p>${topDataLabel[1]}</p><h2>${income}<h2>`);
    console.log(response);
}

function writeUnEmp(response) {
    var unemp = numeral((response[1][1]) / 100).format('0.0%');
    $("#unemployment").append(`<p>${topDataLabel[2]}</p><h2>${unemp}<h2>`);

    console.log(response);
}

var queryURL = `https://api.census.gov/data/2017/acs/acs1?get=NAME,B01001_001E&for=state:${inputID}`;

var queryURL2 = `https://api.census.gov/data/2017/acs/acs1?get=NAME,B19013_001E&for=state:${inputID}`;

var queryURL3 = `https://api.census.gov/data/2017/acs/acs1/subject?get=NAME,S2301_C04_001E&for=state:${inputID}`;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(writePop);

$.ajax({
    url: queryURL2,
    method: "GET"
}).then(writeInc);

$.ajax({
    url: queryURL3,
    method: "GET"
}).then(writeUnEmp);