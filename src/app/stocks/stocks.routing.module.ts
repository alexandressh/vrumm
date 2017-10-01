import { StocksComponent } from './stocks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const stocksRoutes: Routes = [
    {path: 'stocks', component: StocksComponent}
];

@NgModule({
    imports: [RouterModule.forChild(stocksRoutes)],
    exports: [RouterModule]
})
export class StocksRouting {}
