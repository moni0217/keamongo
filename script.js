  var map;

  function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
          center: {
              lat: 55.706398,
              lng: 12.539141
          },
          zoom: 14
      });
  }
