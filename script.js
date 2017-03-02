var map;
var center = {
    lat: 50.075760,
    lng: 8.606346
}
var lygten = {
    lat: 55.706398,
    lng: 12.539141
};
var lyon = {
    lat: 45.774535,
    lng: 4.848811
};
var alcudia = {
    lat: 39.840828,
    lng: 3.127730
};


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 5
    });

    var marker = new google.maps.Marker({
        position: lyon,
        map: map,
        title: 'Lyon!'
    })

    var marker = new google.maps.Marker({
        position: lygten,
        map: map,
        title: 'Lygten!'
    })

    var marker = new google.maps.Marker({
        position: alcudia,
        map: map,
        title: 'Alcudia!'
    })
}
