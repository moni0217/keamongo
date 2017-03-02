var map;
var lygten = {
    lat: 55.706398,
    lng: 12.539141
};


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: lygten,
        zoom: 14
    });
}
