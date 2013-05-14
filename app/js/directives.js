'use strict';

/* Directives */


/*angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);*/

  angular.module('myApp.directives', [])
  .directive('hcPie', function () {

  return {
    restrict: 'C',
    replace: true,
    scope: {
      items: '='
    },
    controller: function ($scope, $element, $attrs) {

    },
    template: '<div id="container" style="margin: 0 auto">not working</div>',
    link: function (scope, element, attrs) {
      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'container',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
          text: 'Poisson Results'
        },
        tooltip: {
                formatter: function() {
                    var point = this.point,
                        s = this.x +' => <b>'+ this.y +'%</b><br/>';
                   
                    return s;
                }
            },
        plotOptions: {
          column: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              color: '#000000',
              connectorColor: '#000000',
              formatter: function () {
                 return this.y +'%';
              }
            }
          }
        },
        xAxis:{
        	allowDecimals:false
        },
        series: [{
          type: 'column',
          name: 'Discrete Outcomes',
          data: scope.items
        }]
      });
      scope.$watch("items", function (newValue) {
        chart.series[0].setData(newValue, true);
      }, true);
      
    }
  }
});
