import { ChartModule } from 'angular-highcharts';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StocksRouting } from './stocks.routing.module';
import { StocksService } from './stocks.service';
import { StocksComponent } from './stocks.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StocksRouting,
    ChartModule,
  ],
  declarations: [
    StocksComponent
  ],
  providers: [
    StocksService
  ]
})
export class StocksModule { }
