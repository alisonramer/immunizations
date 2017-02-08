'use strict';

(function(mod) {
  const mapping = {};
  mapping.markerArray = [];

  mapping.initBaseMap = function() {
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
      zoom: 6,
      styles: stylesArray,
      center: new google.maps.LatLng(47.2718, -120.6738),
      mapTypeId: google.maps.MapTypeId.STREET,
      mapTypeControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
      }
    }

    mapping.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    google.maps.event.addDomListener(window, 'resize', function() {
      var center = {lat:  47.2718, lng: -120.6738};
      google.maps.event.trigger(mapping.map, 'resize');
      mapping.map.setCenter(center);
    });
  }
  mapping.initBaseMap();

  mapping.countymap = function () {
    mapping.layer = new google.maps.FusionTablesLayer({
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
    mapping.layer.setMap(mapping.map);

    const iconsCounty = {
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
    const countyHeader = '2015 pertussis incidence per 100,000 persons';
    mapping.appendLegend(iconsCounty, countyHeader);
  }

  mapping.schoolsmap = function () {
    var totalPubStudents = 0;
    var totalPrivStudents = 0;
    var totalVaccinatedPubStudents = 0;
    var totalVaccinatedPrivStudents = 0;


    schools.forEach(val => {
      if (val[35] === 'Y' && val[36] !== 0) {
        if (val[39] === 'PUBLIC SCHOOL') {
          totalVaccinatedPubStudents += val[7];
          totalPubStudents += val[36];
        }
        else {
          totalVaccinatedPrivStudents += val[7];
          totalPrivStudents += val[36];
        }
      }
    });

    var totalStudents = totalPrivStudents + totalPubStudents;
    var totalStudentsWithVaccinations = totalVaccinatedPubStudents + totalVaccinatedPrivStudents;
    var totalPercentVaccinated = parseFloat((totalStudentsWithVaccinations/totalStudents*100).toFixed(2));

    const washCoords = [
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

    mapping.washShape = new google.maps.Polygon({
      paths: washCoords,
      strokeColor: '#595959',
      strokeOpacity: 0,
      strokeWeight: 0,
      fillColor: '#595959',
      fillOpacity: 0.3,
      cursor: 'grab'
    });

    mapping.openWindow;

    mapping.washShape.setMap(mapping.map);
    mapping.chooseContent = function (i) {
      var no6thContent = `<dl><dt>School: </dt><dd> ${schools[i][38]}, ${schools[i][1]}</dd><dt>Status:</dt> <dd>No 6th graders enrolled this year at this school.</dd></dl>`;
      var winContent = `<dl><dt>School: </dt><dd> ${schools[i][38]}, ${schools[i][1]}</dd><dt>Type:</dt> <dd>${schools[i][39]}</dd><dt>Grades:</dt> <dd>${schools[i][4]}</dd><dt>Number of 6th grade students:</dt><dd>${schools[i][36]}</dd><dt>% of students with all immunizations at this school:</dt> <dd>${(schools[i][21]*100).toFixed(2)}</dd><dt>% of students with all immunizations in Washington:</dt> <dd>${totalPercentVaccinated}</dd><dt>% with medical exemption: </dt> <dd>${(schools[i][17]/schools[i][36]*100).toFixed(2)}</dd><dt>% with other exemption:</dt> <dd>${(((schools[i][18]+schools[i][19]+schools[i][20])/schools[i][36])*100).toFixed(2)}</dd></dl>`;
      var noRepContent = `<dl><dt>School: </dt><dd> ${schools[i][38]}, ${schools[i][1]}</dd><dt>Status:</dt> <dd>Did not report vaccination information.</dd></dl>`;
      if (schools[i][35] === 'Y' && schools[i][36] === 0) return no6thContent; else if (schools[i][35] === 'N') return noRepContent; else return winContent;
    }

    latlongs.forEach((val,i) => {
      var marker = new google.maps.Marker({
        position: {lat: val[1], lng: val[0]},
        icon: 'dark_green.png',
        map: mapping.map,
      });
      var infowindow = new google.maps.InfoWindow ({ //38 - school name, 1 - city, 2 - county, 4 - grades, 37 - school district 39 - public or private
        content: mapping.chooseContent(i),
        maxWidth: 500
      });

      if (schools[i][35] === 'Y' && schools[i][36] === 0) marker.icon = 'gray.png';
      else if (schools[i][35] === 'Y' && schools[i][21] === 1) marker.icon = 'dark_green.png';
      else if (schools[i][35] === 'Y' && schools[i][21] >= 0.9) marker.icon = 'purple.png';
      else if (schools[i][35] === 'Y' && schools[i][21] >= 0.8) marker.icon = 'dark_orange.png';
      else if (schools[i][35] === 'Y' && schools[i][21] >= 0.7) marker.icon = 'blue.png';
      else if (schools[i][35] === 'Y') marker.icon = 'brown.png';
      else marker.icon = 'grey_poupon.png';

      mapping.markerArray.push(marker);
      marker.addListener('click', function() {
        if (mapping.openWindow) mapping.openWindow.close();
        infowindow.open(mapping.map, marker);
        mapping.openWindow = infowindow;
      });

    });
    var iconsSchools = {
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
    const schoolsHeader = '2015-2016 vaccination compliance';
    mapping.appendLegend(iconsSchools, schoolsHeader);
  }

  mapping.appendLegend = function(icons, headerText) {
    var legend = document.createElement('div');
    legend.setAttribute('id', 'legend');
    var h3El = document.createElement('h3');
    h3El.innerHTML = headerText;
    legend.appendChild(h3El);
    for (var key in icons) {
      let type = icons[key];
      let name = type.name;
      let icon = type.icon;
      let div = document.createElement('div');
      div.innerHTML = '<img src="' + icon + '"> ' + name;
      legend.appendChild(div);
    }
    mapping.map.controls[google.maps.ControlPosition.LEFT].push(legend);
  }

  mapping.clearMarkers = function() {
    mapping.markerArray.forEach(marker => marker.setMap());
  }

  mod.mapping = mapping;
})(window);
