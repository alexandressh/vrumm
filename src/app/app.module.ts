import { AvatarsService } from './shared/avatars/avatars.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ChartModule } from 'angular-highcharts';

import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { SurveysModule } from './surveys/surveys.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    SettingsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SurveysModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [
    AuthService,
    AvatarsService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
