import { Stock } from './../models/stocks';
import { Http } from '@angular/http';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    stocksChart: any;
    symbolList: any;
    rangeOptions: any;
    stockForm : FormGroup;

    constructor(private http: Http,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.http.get("//api.iextrading.com/1.0/ref-data/symbols")
        .map( data => data.json().splice(0, 10))
        .subscribe(data => {
            this.symbolList = data;
        });

        this.rangeOptions = [
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
                display: "Three month",
                value: "3m"
            }, {
                display: "One month",
                value: "1m"
            }];

        this.createForm();
        this.formChanged();
    }

    createForm() {
        this.stockForm = this.fb.group({
            symbolDropdown: 'Select',
            range: this.rangeOptions[0].value
        });
    }

    formChanged() {
        const rangeControl = this.stockForm.get("range");
        const symbolDropdownControl = this.stockForm.get("symbolDropdown");

        rangeControl.valueChanges.forEach(
            value => this.getChartValues()
        );

        symbolDropdownControl.valueChanges.forEach(
            value => this.getChartValues()
        );
    }

    updateSymbol(symbol) {
        this.stockForm.patchValue({
            symbolDropdown: symbol.symbol
        });
    }

    updateRange(range) {
        this.stockForm.patchValue({
            range: range.value
        });
    }

    isRangeActive(range) {
        return this.stockForm.get('range').value === range.value;
    }

    getChartValues() {
        this.http.get(`//api.iextrading.com/1.0/stock/${this.stockForm.get('symbolDropdown').value}/chart/${this.stockForm.get('range').value}`).
        map(data => data.json()).
        subscribe(data => {
            let dateArr = data[0].date.split("-");
            let date = Date.UTC(dateArr[0], dateArr[1], dateArr[2]);
            this.stocksChart = this.buildChart(data, date);
        });
    }

    buildChart(data: any, date) {
        return new Chart({
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
        });
    }

}
