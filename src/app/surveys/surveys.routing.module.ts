import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../guards/auth.guard';
import { SurveysComponent } from './surveys.component';
import { SurveyComponent } from './survey/survey.component';

const surveyRoutes: Routes = [
    {path: 'surveys', component: SurveysComponent, canActivate: [AuthGuard]},
    {path: 'surveys/survey', component: SurveyComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(surveyRoutes)],
    exports: [RouterModule]
})
export class SurveysRoutingModule {

}
