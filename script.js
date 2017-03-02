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
var rom = {
    lat: 41.891587,
    lng: 12.478313
};
var london = {
    lat: 51.520181,
    lng: -0.125696
};
var malaga = {
    lat: 36.721274,
    lng: -4.421399
};




function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 4
    });



    var marker1 = new google.maps.Marker({
        position: lyon,
        map: map,
        title: 'Lyon!',
        icon: "img/mario.png",
        draggable: true,
        animation: google.maps.Animation.DROP,
    })



    var marker2 = new google.maps.Marker({
        position: lygten,
        map: map,
        title: 'Lygten!',
        icon: "img/mario.png",
        draggable: true,
        animation: google.maps.Animation.DROP,
    })


    var marker3 = new google.maps.Marker({
        position: alcudia,
        map: map,
        title: 'Alcudia!',
        icon: "img/mario.png",
        draggable: true,
        animation: google.maps.Animation.DROP,
    })


    var marker4 = new google.maps.Marker({
        position: rom,
        map: map,
        title: 'Rom!',
        icon: "img/mario.png",
        draggable: true,
        animation: google.maps.Animation.DROP,
    })

    var marker5 = new google.maps.Marker({
        position: london,
        map: map,
        title: 'London!',
        icon: "img/mario.png",
        draggable: true,
        animation: google.maps.Animation.DROP,
    })

    var marker6 = new google.maps.Marker({
        position: malaga,
        map: map,
        title: 'Malaga!',
        icon: "img/mario.png",
        draggable: true,
        animation: google.maps.Animation.DROP,
    })

    var infowindow = new google.maps.InfoWindow({
        content: document.querySelector("#h1_lyon"),
        position: lyon
    });

    infowindow.open(map, marker1);


    var markerArr = [marker1, marker2, marker3, marker4, marker5, marker6];


    markerArr.forEach(oneOfTheMarkers => oneOfTheMarkers.addListener('click', function () {
        if (oneOfTheMarkers.getAnimation() !== null) {
            oneOfTheMarkers.setAnimation(null);
        } else {
            mapClick();
            oneOfTheMarkers.setAnimation(google.maps.Animation.BOUNCE);
        }
    }));
    map.addListener("click", mapClick);

    function mapClick() {
        console.log("mappet er klikket på");
        markerArr.forEach(oneOfTheMarkers => oneOfTheMarkers.setAnimation(null));
    }
}
