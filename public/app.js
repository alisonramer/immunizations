'use strict';
var openWindow;

var stylesArray =
  [
    {
      'featureType': 'all',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#212121'
        },
        { 'visibility': 'on'}
      ]
    },
    {
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#212121'
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'featureType': 'administrative.country',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#9e9e9e'
        }
      ]
    },
    {
      'featureType': 'administrative.land_parcel',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#bdbdbd'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geography',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#2c2c2c'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#8a8a8a'
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#373737'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#3c3c3c'
        }
      ]
    },
    {
      'featureType': 'road.highway.controlled_access',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#4e4e4e'
        }
      ]
    },
    {
      'featureType': 'road.local',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#616161'
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#3d3d3d'
        }
      ]
    },
    {
      'featureType': 'landscape',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#212121'
        },
        { 'visibility': 'on'}
      ]
    }
  ];

var mapOptions = {
  zoom: 7,
  styles: stylesArray,
  center: new google.maps.LatLng(47.015177, -119.790176),
  mapTypeId: google.maps.MapTypeId.STREET,
  zoomControl: true,
  zoomControlOptions: {
    position: google.maps.ControlPosition.RIGHT_TOP
  }
}

// var map = new google.maps.Map(document.getElementById('map'), mapOptions);

// google.maps.event.addDomListener(window, 'resize', function() {
//   var center = {lat: 47.015177, lng: -119.790176};
//   google.maps.event.trigger(map, 'resize');
//   map.setCenter(center);
// });

var totalPubStudents = 0;
var totalPrivStudents = 0;
var totalPrivateSchools = 0;
var totalPublicSchools = 0;
var totalVaccinatedPubStudents = 0;
var totalVaccinatedPrivStudents = 0;
var totalPubDt = 0; //9
var totalPubPolio = 0; //13
var totalPubVaricella = 0; //14
var totalPubMMR = 0; //11
var totalPubHepB = 0; //10
var totalPubPertussis = 0; //12
var totalPrivDt = 0; //9
var totalPrivPolio = 0; //13
var totalPrivVaricella = 0; //14
var totalPrivMMR = 0; //11
var totalPrivHepB = 0; //10
var totalPrivPertussis = 0; //12
var totalPubExemptions = 0; //16
var totalPrivExemptions = 0; //16


schools.forEach(val => {
  if (val[35] === 'Y') {
    if (val[39] === 'PUBLIC SCHOOL') {
      totalVaccinatedPubStudents += val[7];
      totalPubStudents += val[36];
      totalPubDt += parseFloat(val[9]);
      totalPubPolio += val[13];
      totalPubVaricella += val[14];
      totalPubMMR += val[11];
      totalPubHepB += val[10];
      totalPubPertussis += val[12];
      totalPubExemptions += val[16];
      totalPublicSchools += 1;
    }
    else {
      totalVaccinatedPrivStudents += val[7];
      totalPrivStudents += val[36];
      totalPrivDt += val[9];
      totalPrivPolio += val[13];
      totalPrivVaricella+= val[14];
      totalPrivMMR += val[11];
      totalPrivHepB += val[10];
      totalPrivPertussis += val[12];
      totalPrivExemptions += val[16];
      totalPrivateSchools += 1;
    }
  }
});

var totalDt = totalPubDt + totalPrivDt;
var totalPolio = totalPubPolio + totalPrivPolio;
var totalVaricella = totalPubVaricella + totalPrivVaricella;
var totalMMR = totalPubMMR + totalPrivMMR;
var totalHepB = totalPubHepB + totalPrivHepB;
var totalPertussis = totalPubPertussis + totalPrivPertussis;
var totalReportedSchools = totalPublicSchools + totalPrivateSchools;
var totalStudents = totalPrivStudents + totalPubStudents;
var totalStudentsWithVaccinations = totalVaccinatedPubStudents + totalVaccinatedPrivStudents;
var percentPubVaccinated = parseFloat((totalVaccinatedPubStudents/totalPubStudents*100).toFixed(2));
var percentPrivVaccinated = parseFloat((totalVaccinatedPrivStudents/totalPrivStudents*100).toFixed(2));
var totalUnreportedSchools = schools.length - totalReportedSchools;
var totalPercentVaccinated = parseFloat((totalStudentsWithVaccinations/totalStudents*100).toFixed(2));

var total100complianceSchools = 0;
var total90complianceSchools = 0;
var total80complianceSchools = 0;
var total70complianceSchools = 0;
var totalbelow70complianceSchools = 0;
var totalNo6thGraders = 0;

// latlongs.forEach((val,i) => {
    // if (schools[i][35] === 'Y' && schools[i][36] === 0) {
      //     totalNo6thGraders += 1;
      //     var marker = new google.maps.Marker({
      //       position: {lat: val[1], lng: val[0]},
      //       icon: 'gray.png',
      //       map: map,
      //     });
    // } else
//   if (schools[i][35] === 'Y' && schools[i][21] === 1) {
//     total100complianceSchools += 1;
//     var marker = new google.maps.Marker({
//       position: {lat: val[1], lng: val[0]},
//       icon: 'dark_green.png',
//       map: map,
//     });
//   } else if (schools[i][35] === 'Y' && schools[i][21] >= 0.9) {
//     total90complianceSchools += 1;
//     var marker = new google.maps.Marker({
//       position: {lat: val[1], lng: val[0]},
//       icon: 'purple.png',
//       map: map,
//     });
//   } else if (schools[i][35] === 'Y' && schools[i][21] >= 0.8) {
//     total80complianceSchools += 1;
//     var marker = new google.maps.Marker({
//       position: {lat: val[1], lng: val[0]},
//       icon: 'dark_orange.png',
//       map: map,
//     });
//   } else if (schools[i][35] === 'Y' && schools[i][21] >= 0.7) {
//     total70complianceSchools += 1;
//     var marker = new google.maps.Marker({
//       position: {lat: val[1], lng: val[0]},
//       icon: 'blue.png',
//       map: map,
//     });
//   } else if (schools[i][35] === 'Y') {
//     totalbelow70complianceSchools += 1;
//     var marker = new google.maps.Marker({
//       position: {lat: val[1], lng: val[0]},
//       icon: 'brown.png',
//       map: map,
//     });
//   } else {
//     var marker = new google.maps.Marker({
//       position: {lat: val[1], lng: val[0]},
//       icon: 'grey_poupon.png',
//       map: map,
//     });
//   }

//   if (schools[i][35] === 'N') {
//       var marker = new google.maps.Marker({
//         position: {lat: val[1], lng: val[0]},
//         icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
//         map: map,
//       });
//       var infowindow = new google.maps.InfoWindow ({ //38 - school name, 1 - city, 2 - county, 4 - grades, 37 - school district 39 - public or private
//         content: `<dl><dt>School: </dt><dd> ${schools[i][38]}, ${schools[i][1]}</dd><dt>Status:</dt> <dd>Did not report vaccination information.</dd></dl>`,
//         maxWidth: 500
//       });
//   } else if (schools[i][39] === 'PUBLIC SCHOOL') {
//     var marker = new google.maps.Marker({
//       position: {lat: val[1], lng: val[0]},
//       icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
//       map: map,
//     });
//     var infowindow = new google.maps.InfoWindow ({ //38 - school name, 1 - city, 2 - county, 4 - grades, 37 - school district 39 - public or private
//       content: `<dl><dt>School: </dt><dd> ${schools[i][38]}, ${schools[i][1]}</dd><dt>Grades:</dt> <dd>${schools[i][4]}</dd><dt>Number of students:</dt><dd>${schools[i][36]}</dd><dt>% of students with all immunizations:</dt> <dd>${(schools[i][21]*100).toFixed(2)}</dd><dt>% with medical exemption: </dt> <dd>${(schools[i][17]/schools[i][36]*100).toFixed(2)}</dd><dt>% with other exemption:</dt> <dd>${(((schools[i][18]+schools[i][19]+schools[i][20])/schools[i][36])*100).toFixed(2)}</dd></dl>`,
//       maxWidth: 500
//     });
//   }
//   else {
//     var marker = new google.maps.Marker({
//       position: {lat: val[1], lng: val[0]},
//       icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
//       map: map,
//     });
//     var infowindow = new google.maps.InfoWindow ({ //38 - school name, 1 - city, 2 - county, 4 - grades, 37 - school district 39 - public or private
//       content: `<dl><dt>School: </dt><dd> ${schools[i][38]}, ${schools[i][1]}</dd><dt>Grades:</dt> <dd>${schools[i][4]}</dd><dt>Number of students:</dt><dd>${schools[i][36]}</dd><dt>% of students with all immunizations:</dt> <dd>${(schools[i][21]*100).toFixed(2)}</dd><dt>% with medical exemption: </dt> <dd>${(schools[i][17]/schools[i][36]*100).toFixed(2)}</dd><dt>% with other exemption:</dt> <dd>${(((schools[i][18]+schools[i][19]+schools[i][20])/schools[i][36])*100).toFixed(2)}</dd></dl>`,
//       maxWidth: 500
//     });
//   }
//
//     marker.addListener('click', function() {
//       if (openWindow) openWindow.close();
//       infowindow.open(map, marker);
//       openWindow = infowindow;
//     });
// });

var icons = {
  hundred: {
    name: '100%',
    icon: 'dark_green.png',
  },
  ninety: {
    name: '90%-99.9%',
    icon: 'purple.png'
  },
  eighty: {
    name: '80%-89.9%',
    icon: 'dark_orange.png'
  },
  seventy: {
    name: '70%-79.9%',
    icon: 'blue.png',
  },
  less: {
    name: 'less than 70%',
    icon: 'brown.png',
  },
  no6th: {
    name: 'no 6th graders',
    icon: 'gray.png',
  },
  noInfo: {
    name: 'school did not report',
    icon: 'grey_poupon.png'
  }
};

// var legend = document.getElementById('legend');
// for (var key in icons) {
//   var type = icons[key];
//   var name = type.name;
//   var icon = type.icon;
//   var div = document.createElement('div');
//   div.innerHTML = '<img src="' + icon + '"> ' + name;
//   legend.appendChild(div);
// }
// map.controls[google.maps.ControlPosition.LEFT_TOP].push(legend);

var percentCompliance = schools.filter(school => school[36] !== 0).map(school => school[21]).filter(val => !isNaN(val));
var numberOfStudents = schools.filter(school => school[36] !== 0).map(school => school[36]).filter(val => !isNaN(val));

var barData = [];
for (var i = 0; i < 11; i++) barData[i] = 0;
var totalSchools = 0;
var aveCompliance = 0;

schools.forEach(val => {
  if (val[36] !== 0 && val[35] === 'Y') {
    totalSchools += 1;
    aveCompliance += val[21];
    if (val[21] === 1) barData[10] += 1;
    else if (val[21] > .899) barData[9] += 1;
    else if (val[21] > .799) barData[8] += 1;
    else if (val[21] > .699) barData[7] += 1;
    else if (val[21] > .599) barData[6] += 1;
    else if (val[21] > .499) barData[5] += 1;
    else if (val[21] > .399) barData[4] += 1;
    else if (val[21] > .299) barData[3] += 1;
    else if (val[21] > .1999) barData[2] += 1;
    else if (val[21] > .099) barData[1] += 1;
    else barData[0] += 1;
  }
});

var scatterPoints = [];
var count = 0;
for (var j = 0; j <= 100; j += 10) {
  scatterPoints[count] = { x: j, y: barData[count] };
  console.log(j);
  count += 1;
}

aveCompliance = aveCompliance/totalSchools;

var ctx = document.getElementById('scatter').getContext('2d');

var scatterChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: scatterPoints
        },
        {
            label: 'Scatter Dataset2',
            data: [{x: 77, y: 0}]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
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
