import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showMenu : boolean = true;
  title = 'app';

  constructor(private authService : AuthService,
              private http: Http) {}

  ngOnInit() {
    this.authService.showMenuEmmiter.subscribe(
        show => {
          this.showMenu = show;
          console.log("Show Menu");
        }
    );
  }
}
