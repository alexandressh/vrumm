import { Injectable } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Http } from '@angular/http';
import * as _ from "lodash";

@Injectable()
export class StocksService {

  constructor(private http: Http) { }

  getStocksSymbols() {
    return this.http.get("//api.iextrading.com/1.0/ref-data/symbols")
      .map(data => data.json().splice(0, 10))
  }

  getChartValues(symbol, range) {
    return this.http.get(`//api.iextrading.com/1.0/stock/${symbol}/chart/${range}`).
      map(data => data.json());
  }

  getCompanyNews(symbol) {
    return this.http.get(`//api.iextrading.com/1.0/stock/${symbol}/news`).
      map(data => data.json());
  }

  getCompanyInfo(symbol) {
    return this.http.get(`//api.iextrading.com/1.0/stock/${symbol}/company`).
      map(data => {
        data = data.json();
        data = _.mapValues(data, value => (value === "null")? null : value);
        console.log(data);
        return data;
      });
  }

  getChartInitialDate(date: string) {
    let dateArr = date.split("-").map(val => Number(val));
    return Date.UTC(dateArr[0], dateArr[1], dateArr[2]);;
  }

  getRangeOptions() {
    return [
      {
        display: "2 years",
        value: "2y"
      }, {
        display: "1 year",
        value: "1y"
      }, {
        display: "Six months",
        value: "6m"
      }, {
        display: "Three months",
        value: "3m"
      }, {
        display: "One month",
        value: "1m"
      }];
  }

  getChartObject(data: Array<any>, date: number) {
    let chart = {
      chart: {
        backgroundColor: 'transparent',
        type: 'line'
      },
      title: {
        text: ''
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
          pointStart: date,
          pointInterval: 24 * 3600 * 1000 // one day
        }
      },
      series: [{
        data: data.map(day => {
          day.y = day.open;
          return day;
        })
      }]
    };

    return chart;
  }

}
