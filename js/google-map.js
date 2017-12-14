//    google map start
    (function($) {
        "use strict";

        google.maps.event.addDomListener(window, 'load', init);

        var map;

        function init() {
            var mapOptions = {
                center: new google.maps.LatLng(38.5262785,114.9746185),
                zoom: 15,
                zoomControl: false,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.DEFAULT,
                },
                panControl: false,
                disableDoubleClickZoom: false,
                mapTypeControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                },
                scaleControl: true,
                scrollwheel: false,
                streetViewControl: false,
                draggable : true,
                overviewMapControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
//                styles: [ 
//                    { featureType: "administrative", elementType: "all", stylers: [ { visibility: "on" }, { saturation: -100 }, { lightness: 20 } ] },
//                    { featureType: "road", elementType: "all", stylers: [ { visibility: "on" }, { saturation: -100 }, { lightness: 40 } ] },
//                    { featureType: "water", elementType: "all", stylers: [ { visibility: "on" }, { saturation: -10 }, { lightness: 30 } ] },
//                    { featureType: "landscape.man_made", elementType: "all", stylers: [ { visibility: "simplified" }, { saturation: -60 }, { lightness: 10 } ] },
//                    { featureType: "landscape.natural", elementType: "all", stylers: [ { visibility: "simplified" }, { saturation: -60 }, { lightness: 60 } ] },
//                    { featureType: "poi", elementType: "all", stylers: [ { visibility: "off" }, { saturation: -100 }, { lightness: 60 } ] }, 
//                    { featureType: "transit", elementType: "all", stylers: [ { visibility: "off" }, { saturation: -100 }, { lightness: 60 } ] }
//                ]

            }

            var mapElement = document.getElementById('mapBox');
            var map = new google.maps.Map(mapElement, mapOptions);
            
            var locations = [
                ['', 38.5262785,114.9746185]
            ];
            for (var i = 0; i < locations.length; i++) {
                var marker = new google.maps.Marker({
                    icon: 'images/map-marker.png',
//                    animation: google.maps.Animation.BOUNCE,
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                });
            }
            
            var contentString = 
                '<div id="content">'+
                    '<div class="mapInfoWindowRowInner">'+
                        '<h5>Hongyue Wire Mesh</h5>'+
                        '<p>South Shahe Bridg Dingzhou City Hebei China.</p>'+
                    '</div>'+
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            
            
//            google.maps.event.addListener(marker, 'click', function() {
//                infowindow.open(map,marker);
//            });
            
            infowindow.open(map,marker);
        }    
    })(jQuery);
//    google map end