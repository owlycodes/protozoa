var schools = {};

schools['up-diliman'] = {
    center: new google.maps.LatLng(14.5833, 120.9667),
    title: "UP Diliman",
    population: 34
};
schools['ue-manila'] = {
    center: new google.maps.LatLng(14.6020, 120.9895),
    title: "UE Manila",
    population: 24
};
schools['feu-manila'] = {
    center: new google.maps.LatLng(14.6040, 120.9869),
    title: "FEU Manila",
    population: 18
};
schools['pup-manila'] = {
    center: new google.maps.LatLng(14.5972, 121.0108),
    title: "PUP Manila",
    population: 5
};
schools['mmsu'] = {
    center: new google.maps.LatLng(18.074062, 120.549438),
    title: "MMSU",
    population: 30
};
schools['csu-tuguegarao'] = {
    center: new google.maps.LatLng(17.659102, 121.752997),
    title: "CSU-Tuguegarao",
    population: 20
};
schools['up-baguio'] = {
    center: new google.maps.LatLng(16.405633, 120.598081),
    title: "UP Baguio",
    population: 6
};
schools['up-lb'] = {
    center: new google.maps.LatLng(14.1650, 121.2415),
    title: "UP Los banos",
    population: 6
};
schools['ateneo-naga'] = {
    center: new google.maps.LatLng(13.6167, 123.1667),
    title: "Ateneo de Naga",
    population: 1
};
schools['umak'] = {
    center: new google.maps.LatLng(14.564062, 121.055859),
    title: "University of Makati",
    population: 1
};
schools['aup'] = {
    center: new google.maps.LatLng(14.218377, 121.040141),
    title: "Adventist University of the Philippines",
    population: 14
};
schools['dlsl'] = {
    center: new google.maps.LatLng(13.942398, 121.14765),
    title: "De La Salle Lipa",
    population: 12
};
schools['meup'] = {
    center: new google.maps.LatLng(13.930589, 121.431261),
    title: "Manuel S. Enverga University Foundation",
    population: 4
};
schools['ksbf'] = {
    center: new google.maps.LatLng(16.022345, 120.325665),
    title: "Kingfisher School of Business and Finance",
    population: 4
};
schools['mabini_colleges'] = {
    center: new google.maps.LatLng(14.11406, 122.961038),
    title: "Mabini Colleges",
    population: 4
};
schools['st_vincent_ferrer'] = {
    center: new google.maps.LatLng(14.762713, 121.059142),
    title: "St. Vincent de Ferrer College of Camarin",
    population: 4
};
schools['catanduanes_state_university'] = {
    center: new google.maps.LatLng(13.584497, 124.210877),
    title: "Catanduanes State University",
    population: 4
};
schools['gordon_colleges'] = {
    center: new google.maps.LatLng(14.836019, 120.283662),
    title: "Gordon Colleges",
    population: 4
};
schools['st_louis_university'] = {
    center: new google.maps.LatLng(16.413877, 120.598745),
    title: "St. Louis University",
    population: 4
};
schools['Batangas State University'] = {
    center: new google.maps.LatLng(13.755153, 121.053091),
    title: "Batangas State University",
    population: 4
};
schools['Manila Central University'] = {
    center: new google.maps.LatLng(14.65915, 120.986304),
    title: "Batangas State University",
    population: 4
};
schools['University of Santo Tomas'] = {
    center: new google.maps.LatLng(14.609924,120.989394),
    title: "University of Santo Tomas",
    population: 4
};


function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(14.5833, 120.9667),
        zoom: 7,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

    for (var school in schools) {
        var marker = new google.maps.Marker({
            position: schools[school].center,
            map: map,
            title: schools[school].title
        })
        
        google.maps.event.addListener(marker, 'click', function(){
            alert(marker.title)
//            console.log(marker)
        })

        var populationOptions = {
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            
            center: schools[school].center,
            radius: schools[school].population * 500
        };
        // Add the circle for this city to the map.
        cityCircle = new google.maps.Circle(populationOptions);
    }

}
google.maps.event.addDomListener(window, 'load', initialize);