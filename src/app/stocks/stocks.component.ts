import { StocksService } from './stocks.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  stocksChart: Chart;
  symbolList: any;
  rangeOptions: any;
  stockForm : FormGroup;
  companyNews : Array<any>;
  companyInfo: any;

  constructor(private fb: FormBuilder,
              private stocksService: StocksService) {
  }

  ngOnInit() {
      this.rangeOptions = this.stocksService.getRangeOptions();
      this.stocksService.getStocksSymbols().subscribe(values => {
          this.symbolList = values;
      });
      this.createForm();
      this.formOnChange();
  }

  createForm() {
      this.stockForm = this.fb.group({
          symbolDropdown: 'Select',
          range: this.rangeOptions[0].value
      });
  }

  formOnChange() {
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
    this.getCompanyNews(symbol.symbol);
    this.getCompanyInformation(symbol.symbol);
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

  getCompanyNews(symbol) {
    this.stocksService.getCompanyNews(symbol)
    .subscribe(data => {
          this.companyNews = data;
    });
  }

  getCompanyInformation(symbol) {
    this.stocksService.getCompanyInfo(symbol)
    .subscribe(data => {
          this.companyInfo = data;
    });
  }

  getChartValues() {
      let symbol = this.stockForm.get('symbolDropdown').value;
      let range = this.stockForm.get('range').value
      this.stocksService.getChartValues(symbol, range)
      .subscribe(data => {
          let date = this.stocksService.getChartInitialDate(data[0].date);
          this.stocksChart = this.buildChart(data, date);
      });
  }

  buildChart(data: Array<any>, date: number) {
      return new Chart(this.stocksService.getChartObject(data, date));
  }

}
