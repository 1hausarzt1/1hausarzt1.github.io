     function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center:  {lat: 53.5573, lng: 9.97165},
          zoom: 18.5,
          
		  
		 styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.7}]},
		  {"featureType":"administrative.locality","elementType":"geometry","stylers":[{"visibility":"off"}]},
		  {"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"on"}]},
		  {"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"visibility":"on"}]},
		  {"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},
		  {"featureType":"administrative.locality","elementType":"labels.icon","stylers":[{"visibility":"on"}]},
		  {"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},
		  {"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"visibility":"on"}]},
		  {"featureType":"landscape.natural","elementType":"geometry","stylers":[{"visibility":"on"}]},
		  {"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"visibility":"on"}]},
		  {"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"on"}]},
		  {"featureType":"poi.attraction","elementType":"geometry","stylers":[{"visibility":"on"}]},
		  {"featureType":"transit.station.rail","elementType":"geometry","stylers":[{"visibility":"on"},{"hue":"#ff3900"},{"saturation":"0"}]},
		  {"featureType":"transit.station.rail","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},
		  
		  {"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"color":"#d0b78d"}]},
		  
		  
		  {"featureType":"poi.government","elementType":"geometry.fill","stylers":[{"color":"#d0b78d"}]},
		  {"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#d0b78d"}]},
		  {"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#d0b78d"}]},
		  {"featureType":"poi.place_of_worship","elementType":"geometry.fill","stylers":[{"color":"#d0b78d"}]},
		  {"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#d0b78d"}]},
		  
		  
		  {"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"color":"#dfceb1"}]},
		  {"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#c0c0c0"},{"saturation":"0"}]},
		  {"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#dfceb1"}]},
		  {"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},
		  {"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"simplified"}]},
		  
		  {"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#dfceb1"}]},
		  {"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#d0b78d"}]},
		  {"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#d0b78d"}]},
		  
		  {"featureType":"transit.station.bus","elementType":"geometry.fill","stylers":[{"color":"#d0b78d"}]},
		  {"featureType":"transit.station.rail","elementType":"geometry.fill","stylers":[{"color":"#d0b78d"}]},
		  {"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#eee5d5"}]},
		  {"featureType":"transit.station.rail","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]}]

	   });
     
 	// Создаем маркер на карте
   var marker = new google.maps.Marker({

    // Определяем позицию маркера
    position: {lat: 53.5573, lng: 9.97165},

     

     // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
 
              
                // Укажем свою иконку для маркера
                icon: 'images/1fff.png'
 	});
     // Создаем наполнение для информационного окна
    var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading"><font  color="#606060">Dr. med. JOACHIM GOTTBERG</font></h4>'+
          '<div id="bodyContent">'+
          '<p><font color="#606060">HAUSARZTPRAXIS</font></p>' +
          ' <h6><font color="#606060">Adresse:Feldstraße 44, 20357 Hamburg</font></h6>' +
			
          '</div>'+
          '</div>';

    // Создаем информационное окно
    var infowindow = new google.maps.InfoWindow({
       content: contentString,

	   maxWidth: 400
       
	});

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

	 }
