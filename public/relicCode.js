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
