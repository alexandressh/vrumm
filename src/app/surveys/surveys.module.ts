import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SurveysService } from './surveys.service';
import { SurveysComponent } from './surveys.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveysRoutingModule } from './surveys.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SurveysRoutingModule
    ],
    exports: [],
    declarations: [
        SurveysComponent, 
        SurveyComponent
    ],
    providers: [SurveysService]
})
export class SurveysModule {}