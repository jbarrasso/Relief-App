App = {
  web3Provider: null,
  contracts: {},

  initMap: function() {
    var mapOptions = {center: [25.7858, -82.401], zoom: 3};
    var earth = L.Wrld.map("map", "1478b53ea2358cfc89237bd62f4cf803", mapOptions);

    $.getJSON('../causes.json', function(data) {   

      for (i = 0; i < data.length; i ++) {
        var firefoxIcon = L.icon({iconUrl: 'https://i.imgur.com/RrBppjs.png', iconSize: [38, 45],});
        var newMarker = L.marker([], {icon: firefoxIcon, keepInView: true});
        var popup = L.popup();
        var popupMain = $('<div class="popupMainDiv"></div>')[0];
        var popupText = $('<div class="popupTextDiv"><h2>' + data[i].event + '</h2></div>')[0];
        var popuplearnMoreButton = $('<div class="learnMoreButtonDiv"></div>')[0];
        var popupShowQR = $('<div class="showQRDiv" onclick="showQR()">Show QR Code</div>')[0];
        var popupQRCode = $('<div class="QRCodeDiv"></div>')[0];

        popupMain.append(popupText, popuplearnMoreButton, popupShowQR, popupQRCode);
        popup.setContent(popupMain);
        newMarker.setLatLng(data[i].mapCoord);
        newMarker.addTo(earth); 
        newMarker.bindPopup(popup);
                                  /*(data[i].event) + "<br>\
                                  Location: " + data[i].location + "<br>\
                                  Affected: " + data[i].numberAffected + "<br>\
                                  Supplies Needed: " + data[i].suppliesNeeded + " <br> <br>\
                                  <b><u><a href='donate.html'>Learn more</a></u></b> ",
                                  {maxWidth: 150, closeButton: true}); */
        newMarker.id = data[i].mapCoord;
        markerClicked(newMarker);
      }
    });

    function showQR() {

    };

    function markerClicked(marker) {
      marker.on('click', function() {
        earth.setView(marker.id, 3, {animate: true, durationSeconds: 1.75});
      });
    };

    function learnMoreButtonClicked(button) {
      button.on('click', function() {
        //href = "google.com"
      });
    };
  }
};

//   createGlobe: function() {
//         //Instantiates new globe object and places markers.
//         var options = {sky: true, maxAltitude: 15000000, zoom: 0};
//         var earth = new WE.map('earth_div', options);
//         WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);
        

//         //Fetches causes.json data and pushes in into markers created within loop.
//         $.getJSON('../causes.json', function(data) {   

//           for (i = 0; i < data.length; i ++) {
            
//             var newMarker = WE.marker([])
//             //Create empty div and place it on marker
//             /*var newMarker = document.createElement('div');
//             newMarker.id = data[i].mapCoord;
//             document.body.appendChild(newMarker); */
//             newMarker.setLatLng(data[i].mapCoord);
//             newMarker.addTo(earth); 
//             newMarker.bindPopup((data[i].event) + "<br>\
//                                   Location: " + data[i].location + "<br>\
//                                   Affected: " + data[i].numberAffected + "<br>\
//                                   Supplies Needed: " + data[i].suppliesNeeded + " <br> <br>\
//                                   <b><u><a href='donate.html'>Learn more</a></u></b> ",
//                                   {maxWidth: 150, closeButton: true});
//             newMarker.id = data[i].mapCoord;
//             //Test that clicks works
//             /*placeMarker.on('click', function() {
//               alert(placeMarker.id);
//             });*/
//           }
//         });
//         //Find marker in html
//         /*
//         $('#earth_div'.find('.we-pm-icon')).on('click', function() {
//               alert('hi');
//             }); */
//         //Set onload view the center of US
//         earth.setView([40.3461, -94.8725], 4); 
//   },

//   testF: function() {
//     $(window).on('click', '#earth_div', App.handleMarkerClick);
//   },

//   handleMarkerClick: function() {
//     //event.preventDefault();

//     //var markerCoord = parseInt($(event.target).data('mapCoord'));

//     alert(earth.getZoom());

//     //earth.panTo(markerCoord);
//   } */
// };
/*
$(function() {
  $(window).load(function() {
    App.init();
  });
});
*/
