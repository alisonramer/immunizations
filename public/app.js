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
          'color': '#212121'
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
          'color': '#808B96'
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
          'color': '#373737'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#373737'
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
          'color': '#3c3c3c'
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#3c3c3c'
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
          'color': '#808B96'
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

var map = new google.maps.Map(document.getElementById('map'), mapOptions);

google.maps.event.addDomListener(window, 'resize', function() {
  var center = {lat: 47.015177, lng: -119.790176};
  google.maps.event.trigger(map, 'resize');
  map.setCenter(center);
});

setPertussisLayer();
function setPertussisLayer() {
  var layer = new google.maps.FusionTablesLayer({
    query: {
      select: 'geometry',
      from: '1_ykcTd2xatWVOZnnAPC5zYCbQPuDDHLxbaw25oA4'
    },
    options: {
      styleId: 2,
      templateId: 2
    },
    styles: [
      {
        where: 'pert < 1',
        polygonOptions: {
          fillColor: '#000000',
          fillOpacity: 0.05,
          strokeOpacity: 1
        }
      },
      {
      where: 'pert > 80',
      polygonOptions: {
        fillColor: '#ff4000',
        fillOpacity: 0.7,
        strokeOpacity: 1
      }
    }
    ]
  });
  layer.setMap(map);
  var icons = {
    noInfo: {
      name: 'no report',
      icon: 'graySq.png',
    },
    less: {
      name: 'less than 14',
      icon: 'greenSq.png'
    },
    fourteen: {
      name: '14-27',
      icon: 'maroonSq.png'
    },
    twentySeven: {
      name: '27-40',
      icon: 'mustardSq.png',
    },
    forty: {
      name: '40-53',
      icon: 'brownSq.png',
    },
    fiftyThree: {
      name: '53-67',
      icon: 'tealSq.png',
    },
    sixtySeven: {
      name: '67-80',
      icon: 'purpleSq.png'
    },
    eighty: {
      name: 'more than 80',
      icon: 'orangeSq.png'
    }
  };

  var legend = document.getElementById('legend');
  for (var key in icons) {
    var type = icons[key];
    var name = type.name;
    var icon = type.icon;
    var div = document.createElement('div');
    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
  }
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(legend);

}

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
  if (val[35] === 'Y' && val[36] !== 0) {
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

// populateSchoolMap();

function populateSchoolMap() {

  var washCoords = [
    {lat: 49.0037, lng: -123.3215},
    {lat: 49.0037, lng: -117.0346},
    {lat: 46.4038, lng: -117.0401},
    {lat: 46.3488, lng: -117.0621},
    {lat: 46.2445, lng: -116.955},
    {lat: 46.2046, lng: -116.9632},
    {lat: 46.1608, lng: -116.9193},
    {lat: 46.0847, lng: -116.9824},
    {lat: 45.9989, lng: -116.9165},
    {lat: 46.0008, lng: -118.9737},
    {lat: 45.9282, lng: -119.1385},
    {lat: 45.9397, lng: -119.2676},
    {lat: 45.9015, lng: -119.4818},
    {lat: 45.9263, lng: -119.5944},
    {lat: 45.8613, lng: -119.6658},
    {lat: 45.7733, lng: -120.1547},
    {lat: 45.6966, lng: -120.4871},
    {lat: 45.7522, lng: -120.6107},
    {lat: 45.6525, lng: -120.9128},
    {lat: 45.6525, lng: -121.0831},
    {lat: 45.6025, lng: -121.1792},
    {lat: 45.6659, lng: -121.2176},
    {lat: 45.7004, lng: -121.344},
    {lat: 45.7062, lng: -121.8137},
    {lat: 45.5429, lng: -122.3108},
    {lat: 45.6371, lng: -122.753},
    {lat: 46.0828, lng: -122.904},
    {lat: 46.1836, lng: -123.1567},
    {lat: 46.1418, lng: -123.305},
    {lat: 46.271, lng: -123.4918},
    {lat: 46.235, lng: -123.8763},
    {lat: 46.2672, lng: -124.0878},
    {lat: 46.8752, lng: -124.1455},
    {lat: 47.2681, lng: -124.2224},
    {lat: 47.3686, lng: -124.3268},
    {lat: 47.7209, lng: -124.4257},
    {lat: 47.8279, lng: -124.5135},
    {lat: 47.9053, lng: -124.6454},
    {lat: 48.1771, lng: -124.7388,},
    {lat: 48.4984, lng: -124.7827},
    {lat: 48.4966, lng: -124.7292},
    {lat: 48.296, lng: -124.0137},
    {lat: 48.2247, lng: -123.5426},
    {lat: 48.285, lng: -123.246},
    {lat: 48.4237, lng: -123.1142},
    {lat: 48.4538, lng: -123.1595},
    {lat: 48.5493, lng: -123.2185},
    {lat: 48.6955, lng: -123.2666},
    {lat: 48.7671, lng: -123.0098},
    {lat: 48.8331, lng: -123.0084},
    {lat: 49.0037, lng: -123.3215}
  ];

  var washShape = new google.maps.Polygon({
    paths: washCoords,
    strokeColor: '#595959',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#595959',
    fillOpacity: 0.5,
    cursor: 'grab'
  });

  washShape.setMap(map);

  latlongs.forEach((val,i) => {
    if (schools[i][35] === 'Y' && schools[i][36] === 0) {
      totalNo6thGraders += 1;
      var marker = new google.maps.Marker({
        position: {lat: val[1], lng: val[0]},
        icon: 'gray.png',
        map: map,
      });
      var infowindow = new google.maps.InfoWindow ({ //38 - school name, 1 - city, 2 - county, 4 - grades, 37 - school district 39 - public or private
        content: `<dl><dt>School: </dt><dd> ${schools[i][38]}, ${schools[i][1]}</dd><dt>Status:</dt> <dd>No 6th graders enrolled this year at this school.</dd></dl>`,
        maxWidth: 500
      });
    } else
    if (schools[i][35] === 'Y' && schools[i][21] === 1) {
      total100complianceSchools += 1;
      var marker = new google.maps.Marker({
        position: {lat: val[1], lng: val[0]},
        icon: 'dark_green.png',
        map: map,
      });
      var infowindow = new google.maps.InfoWindow ({ //38 - school name, 1 - city, 2 - county, 4 - grades, 37 - school district 39 - public or private
        content: `<dl><dt>School: </dt><dd> ${schools[i][38]}, ${schools[i][1]}</dd><dt>Type:</dt> <dd>${schools[i][39]}</dd><dt>Grades:</dt> <dd>${schools[i][4]}</dd><dt>Number of 6th grade students:</dt><dd>${schools[i][36]}</dd><dt>% of students with all immunizations at this school:</dt> <dd>${(schools[i][21]*100).toFixed(2)}</dd><dt>% of students with all immunizations in Washington:</dt> <dd>${totalPercentVaccinated}</dd><dt>% with medical exemption: </dt> <dd>${(schools[i][17]/schools[i][36]*100).toFixed(2)}</dd><dt>% with other exemption:</dt> <dd>${(((schools[i][18]+schools[i][19]+schools[i][20])/schools[i][36])*100).toFixed(2)}</dd></dl>`,
        maxWidth: 500
      });
    } else if (schools[i][35] === 'Y' && schools[i][21] >= 0.9) {
      total90complianceSchools += 1;
      var marker = new google.maps.Marker({
        position: {lat: val[1], lng: val[0]},
        icon: 'purple.png',
        map: map,
      });
      var infowindow = new google.maps.InfoWindow ({ //38 - school name, 1 - city, 2 - county, 4 - grades, 37 - school district 39 - public or private
        content: `<dl><dt>School: </dt><dd> ${schools[i][38]}, ${schools[i][1]}</dd><dt>Type:</dt> <dd>${schools[i][39]}</dd><dt>Grades:</dt> <dd>${schools[i][4]}</dd><dt>Number of 6th grade students:</dt><dd>${schools[i][36]}</dd><dt>% of students with all immunizations at this school:</dt> <dd>${(schools[i][21]*100).toFixed(2)}</dd><dt>% of students with all immunizations in Washington:</dt> <dd>${totalPercentVaccinated}</dd><dt>% with medical exemption: </dt> <dd>${(schools[i][17]/schools[i][36]*100).toFixed(2)}</dd><dt>% with other exemption:</dt> <dd>${(((schools[i][18]+schools[i][19]+schools[i][20])/schools[i][36])*100).toFixed(2)}</dd></dl>`,
        maxWidth: 500
      });
    } else if (schools[i][35] === 'Y' && schools[i][21] >= 0.8) {
      total80complianceSchools += 1;
      var marker = new google.maps.Marker({
        position: {lat: val[1], lng: val[0]},
        icon: 'dark_orange.png',
        map: map,
      });
      var infowindow = new google.maps.InfoWindow ({ //38 - school name, 1 - city, 2 - county, 4 - grades, 37 - school district 39 - public or private
        content: `<dl><dt>School: </dt><dd> ${schools[i][38]}, ${schools[i][1]}</dd><dt>Type:</dt> <dd>${schools[i][39]}</dd><dt>Grades:</dt> <dd>${schools[i][4]}</dd><dt>Number of 6th grade students:</dt><dd>${schools[i][36]}</dd><dt>% of students with all immunizations at this school:</dt> <dd>${(schools[i][21]*100).toFixed(2)}</dd><dt>% of students with all immunizations in Washington:</dt> <dd>${totalPercentVaccinated}</dd><dt>% with medical exemption: </dt> <dd>${(schools[i][17]/schools[i][36]*100).toFixed(2)}</dd><dt>% with other exemption:</dt> <dd>${(((schools[i][18]+schools[i][19]+schools[i][20])/schools[i][36])*100).toFixed(2)}</dd></dl>`,
        maxWidth: 500
      });
    } else if (schools[i][35] === 'Y' && schools[i][21] >= 0.7) {
      total70complianceSchools += 1;
      var marker = new google.maps.Marker({
        position: {lat: val[1], lng: val[0]},
        icon: 'blue.png',
        map: map,
      });
      var infowindow = new google.maps.InfoWindow ({ //38 - school name, 1 - city, 2 - county, 4 - grades, 37 - school district 39 - public or private
        content: `<dl><dt>School: </dt><dd> ${schools[i][38]}, ${schools[i][1]}</dd><dt>Type:</dt> <dd>${schools[i][39]}</dd><dt>Grades:</dt> <dd>${schools[i][4]}</dd><dt>Number of 6th grade students:</dt><dd>${schools[i][36]}</dd><dt>% of students with all immunizations at this school:</dt> <dd>${(schools[i][21]*100).toFixed(2)}</dd><dt>% of students with all immunizations in Washington:</dt> <dd>${totalPercentVaccinated}</dd><dt>% with medical exemption: </dt> <dd>${(schools[i][17]/schools[i][36]*100).toFixed(2)}</dd><dt>% with other exemption:</dt> <dd>${(((schools[i][18]+schools[i][19]+schools[i][20])/schools[i][36])*100).toFixed(2)}</dd></dl>`,
        maxWidth: 500
      });
    } else if (schools[i][35] === 'Y') {
      totalbelow70complianceSchools += 1;
      var marker = new google.maps.Marker({
        position: {lat: val[1], lng: val[0]},
        icon: 'brown.png',
        map: map,
      });
      var infowindow = new google.maps.InfoWindow ({ //38 - school name, 1 - city, 2 - county, 4 - grades, 37 - school district 39 - public or private
        content: `<dl><dt>School: </dt><dd> ${schools[i][38]}, ${schools[i][1]}</dd><dt>Type:</dt> <dd>${schools[i][39]}</dd><dt>Grades:</dt> <dd>${schools[i][4]}</dd><dt>Number of 6th grade students:</dt><dd>${schools[i][36]}</dd><dt>% of students with all immunizations at this school:</dt> <dd>${(schools[i][21]*100).toFixed(2)}</dd><dt>% of students with all immunizations in Washington:</dt> <dd>${totalPercentVaccinated}</dd><dt>% with medical exemption: </dt> <dd>${(schools[i][17]/schools[i][36]*100).toFixed(2)}</dd><dt>% with other exemption:</dt> <dd>${(((schools[i][18]+schools[i][19]+schools[i][20])/schools[i][36])*100).toFixed(2)}</dd></dl>`,
        maxWidth: 500
      });
    } else {
      var marker = new google.maps.Marker({
        position: {lat: val[1], lng: val[0]},
        icon: 'grey_poupon.png',
        map: map,
      });
      var infowindow = new google.maps.InfoWindow ({ //38 - school name, 1 - city, 2 - county, 4 - grades, 37 - school district 39 - public or private
        content: `<dl><dt>School: </dt><dd> ${schools[i][38]}, ${schools[i][1]}</dd><dt>Status:</dt> <dd>Did not report vaccination information.</dd></dl>`,
        maxWidth: 500
      });
    }
    marker.addListener('click', function() {
      if (openWindow) openWindow.close();
      infowindow.open(map, marker);
      openWindow = infowindow;
    });
  });

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
      name: 'not reported',
      icon: 'grey_poupon.png'
    }
  };

  var legend = document.getElementById('legend');
  for (var key in icons) {
    var type = icons[key];
    var name = type.name;
    var icon = type.icon;
    var div = document.createElement('div');
    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
  }
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(legend);
}

var percentCompliance = schools.filter(school => school[36] !== 0).map(school => school[21]).filter(val => !isNaN(val));
var numberOfStudents = schools.filter(school => school[36] !== 0).map(school => school[36]).filter(val => !isNaN(val));

function makeChart(xValue) {
  var ctx = document.getElementById('scatter').getContext('2d');
  var scatterChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          data: [{x: 77, y: 0}],
          borderColor: 'yellow',
          pointRadius: 2,
          pointStyle: ['line'],
          borderWidth: 20
        },
        {
          data: [{x: xValue, y: 0}],
          borderColor: 'fuchsia',
          pointRadius: 2,
          pointStyle: ['line'],
          borderWidth: 20
        },
        {
          data: scatterPoints,
          borderColor: 'gray',
          pointRadius: 0,
          borderWidth: 20
        }
      ]
    },
    options: {
      padding: 0,
      legend: {
        display: false
      },
      responsive: false,
      backgroundColor: 'beige',
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          ticks: {
            fontSize: 13,
            min: 0,
            max: 100,
            fixedStepSize: 20
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          scaleLabel: {
            display: false,
            labelString: '% of students in WA with all required immunizations',
            fontSize: 15
          }
        }],
        yAxes: [{
          padding: 0,
          gridLines: {
            display: false,
            drawBorder: false
          },
          scaleLabel: {
            display: false
          },
          ticks: {
            display: false,
            beginAtZero: true,
            min: 0,
            max: 0.1,
            fixedStepSize: 0.1,
            maxTicksLimit: 0
          }
        }]
      }
    }
  });
}

var counties = {
  adams: schools.filter(school => school[2] === 'ADAMS' && school[36] !== 0 && !isNaN(school[36])).length,
  asotin: schools.filter(school => school[2] === 'ASOTIN' && school[36] !== 0 && !isNaN(school[36])).length,
  benton: schools.filter(school => school[2] === 'BENTON' && school[36] !== 0 && !isNaN(school[36])).length,
  chelan: schools.filter(school => school[2] === 'CHELAN' && school[36] !== 0 && !isNaN(school[36])).length,
  clallam: schools.filter(school => school[2] === 'CLALLAM' && school[36] !== 0 && !isNaN(school[36])).length,
  clark: schools.filter(school => school[2] === 'CLARK' && school[36] !== 0 && !isNaN(school[36])).length,
  cowlitz: schools.filter(school => school[2] === 'COWLITZ' && school[36] !== 0 && !isNaN(school[36])).length,
  douglas: schools.filter(school => school[2] === 'DOUGLAS' && school[36] !== 0 && !isNaN(school[36])).length,
  ferry: schools.filter(school => school[2] === 'FERRY' && school[36] !== 0 && !isNaN(school[36])).length,
  franklin: schools.filter(school => school[2] === 'FRANKLIN' && school[36] !== 0 && !isNaN(school[36])).length,
  garfield: schools.filter(school => school[2] === 'GARFIELD' && school[36] !== 0 && !isNaN(school[36])).length,
  grant: schools.filter(school => school[2] === 'GRANT' && school[36] !== 0 && !isNaN(school[36])).length,
  graysharbor: schools.filter(school => school[2] === 'GRAYS HARBOR' && school[36] !== 0 && !isNaN(school[36])).length,
  island: schools.filter(school => school[2] === 'ISLAND' && school[36] !== 0 && !isNaN(school[36])).length,
  jefferson: schools.filter(school => school[2] === 'JEFFERSON' && school[36] !== 0 && !isNaN(school[36])).length,
  king: schools.filter(school => school[2] === 'KING' && school[36] !== 0 && !isNaN(school[36])).length,
  kitsap: schools.filter(school => school[2] === 'KITSAP' && school[36] !== 0 && !isNaN(school[36])).length,
  kittitas: schools.filter(school => school[2] === 'KITTITAS' && school[36] !== 0 && !isNaN(school[36])).length,
  klickitat: schools.filter(school => school[2] === 'KLICKITAT' && school[36] !== 0 && !isNaN(school[36])).length,
  lewis: schools.filter(school => school[2] === 'LEWIS' && school[36] !== 0 && !isNaN(school[36])).length,
  lincoln: schools.filter(school => school[2] === 'LINCOLN' && school[36] !== 0 && !isNaN(school[36])).length,
  mason: schools.filter(school => school[2] === 'MASON' && school[36] !== 0 && !isNaN(school[36])).length,
  okanogan: schools.filter(school => school[2] === 'OKANOGAN' && school[36] !== 0 && !isNaN(school[36])).length,
  pacific: schools.filter(school => school[2] === 'PACIFIC' && school[36] !== 0 && !isNaN(school[36])).length,
  pendoreille: schools.filter(school => school[2] === 'PEND OREILLE' && school[36] !== 0 && !isNaN(school[36])).length,
  pierce: schools.filter(school => school[2] === 'PIERCE' && school[36] !== 0 && !isNaN(school[36])).length,
  sanjuan: schools.filter(school => school[2] === 'SAN JUAN' && school[36] !== 0 && !isNaN(school[36])).length,
  skagit: schools.filter(school => school[2] === 'SKAGIT' && school[36] !== 0 && !isNaN(school[36])).length,
  skamania: schools.filter(school => school[2] === 'SKAMANIA' && school[36] !== 0 && !isNaN(school[36])).length,
  snoho: schools.filter(school => school[2] === 'SNOHOMISH' && school[36] !== 0 && !isNaN(school[36])).length,
  spokane: schools.filter(school => school[2] === 'SPOKANE' && school[36] !== 0 && !isNaN(school[36])).length,
  stevens: schools.filter(school => school[2] === 'STEVENS' && school[36] !== 0 && !isNaN(school[36])).length,
  thurston: schools.filter(school => school[2] === 'THURSTON' && school[36] !== 0 && !isNaN(school[36])).length,
  wahkiakum: schools.filter(school => school[2] === 'WAHKIAKUM' && school[36] !== 0 && !isNaN(school[36])).length,
  wallawalla: schools.filter(school => school[2] === 'WALLA WALLA' && school[36] !== 0 && !isNaN(school[36])).length,
  whatcom: schools.filter(school => school[2] === 'WHATCOM' && school[36] !== 0 && !isNaN(school[36])).length,
  whitman: schools.filter(school => school[2] === 'WHITMAN' && school[36] !== 0 && !isNaN(school[36])).length,
  yakima: schools.filter(school => school[2] === 'YAKIMA' && school[36] !== 0 && !isNaN(school[36])).length
}

// for (var key in counties) console.log(key, parseFloat((counties[key]*100).toFixed(1)));

// for (var key in counties) console.log(key, counties[key]);


// graphs: pertussis incidence vs vaccination rank: https://fusiontables.googleusercontent.com/embedviz?viz=GVIZ&t=LINE_AGGREGATE&containerId=googft-gviz-canvas&q=select+col0%3E%3E0,+col3%3E%3E0,+col4%3E%3E0+from+1_ykcTd2xatWVOZnnAPC5zYCbQPuDDHLxbaw25oA4+where+col2%3E%3E0+%3E+%270%27+and+col1%3E%3E0+%3E+%270%27&qrs=+and+col0%3E%3E0+%3E%3D+&qre=+and+col0%3E%3E0+%3C%3D+&qe=+order+by+col0%3E%3E0+asc+limit+32&width=800&height=400
// rank compliance vs sample size: https://fusiontables.google.com/embedviz?viz=GVIZ&t=LINE_AGGREGATE&containerId=googft-gviz-canvas&q=select+col0%3E%3E0%2C+col6%3E%3E2%2C+col18%3E%3E2%2C+col20%3E%3E2+from+1_ykcTd2xatWVOZnnAPC5zYCbQPuDDHLxbaw25oA4+where+col5%3E%3E2+%3E+'0'&qrs=+and+col0%3E%3E0+%3E%3D+&qre=+and+col0%3E%3E0+%3C%3D+&qe=+order+by+col0%3E%3E0+asc+limit+38&att=true&width=800&height=285
// 6 biggest counties: https://fusiontables.google.com/embedviz?viz=GVIZ&t=LINE_AGGREGATE&containerId=googft-gviz-canvas&q=select+col0%3E%3E0%2C+col3%3E%3E0%2C+col4%3E%3E0+from+1_ykcTd2xatWVOZnnAPC5zYCbQPuDDHLxbaw25oA4+where+col5%3E%3E2+%3E+'0'+and+col18%3E%3E2+%3C+'7'&qrs=+and+col0%3E%3E0+%3E%3D+&qre=+and+col0%3E%3E0+%3C%3D+&qe=+order+by+col0%3E%3E0+asc+limit+6&att=true&width=400&height=185


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


var pertussisByCounty = [ 5.2, 4.5,2.1, 6.7, 5.5, 71.3, 23.0, 2.5, 1.2, 14.9, 13.7, 21.1, 97.2, 10.2, 36.8, 16.4, 23.8, 20.9, 6.4, 47.2, 7.6, 18.9, 4.2, 8.8, 32.2, 9.8, 2.3, 12.0, 61.0, 29.1, 4.2, 4.0 ];
