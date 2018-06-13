import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.images = [
      {
        url: 'http://placehold.it/1200x350',
        title: 'image 1'
      },
      {
        url: 'http://placehold.it/1200x350',
        title: 'image 2'
      },
      {
        url: 'http://placehold.it/1200x350',
        title: 'image 3'
      }
    ];
  }
}
