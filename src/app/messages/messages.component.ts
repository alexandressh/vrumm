import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: Array<any>;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.messages = [];

    this.messages.push({
      name: "John Doe",
      picture: "http://api.adorable.io/avatars/250",
      date: "Sep 17",
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur"
      ]
    });

    this.messages.push({
      name: "Rafael Henrique",
      picture: "http://api.adorable.io/avatars/249",
      date: "Sep 17",
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur"
      ]
    });

    this.messages.push({
      name: "Henrique Alexandre",
      picture: "http://api.adorable.io/avatars/248",
      date: "Sep 17",
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur"
      ]
    });
    this.messages.push({
      name: "John Doe",
      picture: "http://api.adorable.io/avatars/247",
      date: "Sep 17",
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur"
      ]
    });

    this.messages.push({
      name: "Rafael Henrique",
      picture: "http://api.adorable.io/avatars/248",
      date: "Sep 17",
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur"
      ]
    });

    this.messages.push({
      name: "Rafa Henrique",
      picture: "http://api.adorable.io/avatars/245",
      date: "Sep 17",
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit libero. Donec euismod ultricies ex, a ornare nisi malesuada eu. Nulla a nibh efficitur"
      ]
    });

    this.messages.forEach(msg => {
      msg.pictureSafe = this.sanitizer.bypassSecurityTrustStyle(msg.picture);
      console.log(msg.pictureSafe);
    });
  }

}
