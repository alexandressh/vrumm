import { Component, OnInit } from '@angular/core';

import { Survey } from './survey';
import { SurveysService } from './surveys.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {
  surveys : any;
  newSurvey : Survey = new Survey();

  constructor(private surveysService : SurveysService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.surveysService.getSurveys().subscribe(
      data => {
        this.surveys = data
        console.log(this.surveys);
      }
    );
  }

  addItem() {
    this.surveysService.addSurvey(this.newSurvey);

    this.newSurvey = new Survey();

  }

  deleteQuestion(id) {
      this.surveysService.deleteSurvey(id).subscribe(
        data => this.getItems()
      );
  }

}
