import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input()
  images: Array<IImage> = [];

  constructor() { }

  ngOnInit() {
  }

  getIsActive(index: number): any {
    return {
      active: index === 0
    };
  }

}

export interface IImage {
  url: string;
  title: string;
}
