window.onload = function () {

var mymap = L.map('mapid').setView([33.75, -84.38], 10);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic3Bpbm96aXN0IiwiYSI6ImNqMTJnNXEwejA2MzgzNHBlb2tsYWN2b2oifQ.YFeJxLzYtIs0ATq7AnUpyw'
}).addTo(mymap);

};