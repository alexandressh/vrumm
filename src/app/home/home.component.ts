import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    columnChart = new Chart({
        chart: {
            backgroundColor: 'transparent',
            type: 'column'
        },
        title: {
            text: ''
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            column: {
                cursor: 'pointer',
                color: '#4ECDC4',
                showInLegend: false,
                dataLabels: {
                    enabled: false,
                    format: ''
                }
            }
        },
        xAxis: {
            title: '',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mar', 'Jun', 'Jul']
        },
        yAxis: {
            title: '',
            labels: {
                format: '{value}'
            }
        },
        series: [{
            data: [8000, 5000, 9000, 7000, 6000, 8000]
        }]
    });


    pieChart = new Chart({
        chart: {
            backgroundColor: 'transparent',
            plotBackgroundColor: 'transparent',
            plotBorderWidth: null,
            plotShadow: false,
            spacingLeft: 50,
            spacingRight: 50,
            spacingTop: 0,
            spacingBottom: 0,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: ''
                }
            }
        },
        series: [{
            data: [{
                y: 56.33
            }, {
                y: 24.03
            }, {
                y: 10.38
            }, {
                y: 4.77
            }, {
                y: 0.91
            }, {
                y: 0.2
            }]
        }]
    });


    areaChart = new Chart({
        chart: {
            type: 'area'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + '';
                }
            }
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                showInLegend: false,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'USA',
            data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
        }, {
            name: 'USSR/Russia',
            data: [null, null, null, null, null, null, null, null, null, null,
                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                21000, 20000, 19000, 18000, 18000, 17000, 16000]
        }]
    });

    stocks: any;
    symbols: any;

    constructor(private http: Http) {
    }

    ngOnInit() {
        this.http.get('//api.iextrading.com/1.0/stock/aapl/chart/1y').
        map(data => data.json()).
        subscribe(data => {
            this.stocks = this.buildChart(data);
        });


        this.http.get("//api.iextrading.com/1.0/ref-data/symbols")
        .map( data => data.json)
        .subscribe(data => {
            this.symbols = data;
        });
    }

    buildChart(data: any) {
        return new Chart({
            chart: {
                backgroundColor: 'transparent',
                type: 'line'
            },
            title: {
                text: 'AAPL'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: '',
                labels: {
                    format: '{value}'
                }
            },
            plotOptions: {
                line: {
                    showInLegend: false
                },
                series: {
                    pointStart: Date.UTC(2016, 9, 29),
                    pointInterval: 24 * 3600 * 1000 // one day
                }
            },
            series: [{
                data: data.map(day => {
                    day.y = day.open;
                    return day;
                })
            }]
        });
    }

}
