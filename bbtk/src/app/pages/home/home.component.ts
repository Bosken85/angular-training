import { Component, OnInit } from '@angular/core';
import { IImage, ImageService } from '../../services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: Array<IImage> = [];

  constructor(private imageSvc: ImageService) { }

  ngOnInit() {
    this.imageSvc.getAll().subscribe(images => {
      this.images = images;
    }, error => {
      console.log(error);
      this.images = [];
    });
  }
}
