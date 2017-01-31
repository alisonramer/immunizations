'use strict';
var openWindow;

var stylesArray = [
  {
    featureType: 'all',
    stylers: [
      { hue: '#00ffe6' },
      { saturation: -20 }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      { lightness: 100 },
      { visibility: 'simplified' }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      { visibility: 'off' }
    ]
  }
];

var mapOptions = {
  zoom: 6,
  styles: stylesArray,
  center: new google.maps.LatLng(47.015177, -119.790176),
  mapTypeId: google.maps.MapTypeId.STREET,
  zoomControl: true,
  zoomControlOptions: {
    position: google.maps.ControlPosition.RIGHT_TOP
  }
}

var map = new google.maps.Map(document.getElementById('map'), mapOptions);

google.maps.event.addDomListener(window, 'resize', function() {
  var center = {lat: 47.015177, lng: -119.790176};
  google.maps.event.trigger(map, 'resize');
  map.setCenter(center);
});

latlongs.forEach((val,i) => {
  var marker = new google.maps.Marker({
    position: {lat: val[1], lng: val[0]},
    map: map,
  });

// address:0,
// city:1,
// county:2,
// esd:3,
// grade_levels:4,
// has_6thgrade:5,
// has_kindergarten:6,
// number_complete_for_all_immunizations:7,
// number_conditional:8,
// number_incomplete_for_diphtheria_tetanus:9,
// number_incomplete_for_hepatitisb:10,
// number_incomplete_for_measles_mumps_rubella:11,
// number_incomplete_for_pertussis:12,
// number_incomplete_for_polio:13,
// number_incomplete_for_varicella:14,
// number_out_of_compliance:15,
// number_with_any_exemption:16,
// number_with_medical_exemption:17,
// number_with_personal_exemption:18,
// number_with_religious_exemption:19,
// number_with_religious_membership_exemption:20,
// percent_complete_for_all_immunizations:21,
// percent_complete_for_diphtheria_tetanus:22,
// percent_complete_for_hepatitisb:23,
// percent_complete_for_measles_mumps_rubella:24,
// percent_complete_for_pertussis:25,
// percent_complete_for_polio:26,
// percent_complete_for_varicella:27,
// percent_conditional:28,
// percent_out_of_compliance:29,
// percent_with_any_exemption:30,
// percent_with_medical_exemption:31,
// percent_with_personal_exemption:32,
// percent_with_religious_exemption:33,
// percent_with_religious_membership_exemption:34,
// reported:35,
// reported_enrollment:36,
// school_district:37 ,
// school_name:38,
// school_type:39,
// school_year:40}
  var infowindow = new google.maps.InfoWindow({ //38 - school name, 1 - city, 2 - county, 4 - grades, 37 - school district 39 - public or private
    content: `<dl><dt>School: </dt><dd> ${schools[i][38]}, ${schools[i][1]}</dd><dt>Grades:</dt> <dd>${schools[i][4]}</dd><dt>Number of students:</dt><dd>${schools[i][36]}</dd><dt>% of students with all immunizations:</dt> <dd>${schools[i][21]*100}</dd><dt>% with medical exemption: </dt> <dd>${schools[i][31]*100}</dd><dt>% with other exemption:</dt> <dd>${(schools[i][32]+schools[i][33]+schools[i][34])*100}</dd></dl>`,
    maxWidth: 500
  });
  marker.addListener('click', function() {
    if (openWindow) openWindow.close();
    infowindow.open(map, marker);
    openWindow = infowindow;
  });
})
