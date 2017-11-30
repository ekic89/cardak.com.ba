    function initialize() {
	var isDraggable = $(document).width() > 480 ? true : false;
        var mapCanvas = document.getElementById('map_canvas');
        var mapOptions = {
	  draggable: isDraggable,
	  scrollwheel: false,
          center: new google.maps.LatLng(44.969956, 15.944163),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)

	
	var marker = new google.maps.Marker({
	    position: {lat: 44.969956, lng: 15.944163},
	    map: map,
	    title: 'Dobro došli u restoran ČARDAK'
	  });
      }
      google.maps.event.addDomListener(window, 'load', initialize);

