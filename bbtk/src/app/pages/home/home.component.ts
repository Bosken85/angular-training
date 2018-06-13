import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { IImage, ImageService } from '../../services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: Array<IImage> = [];
  games: Array<any> = [];
  price = 23.5;

  constructor(private imageSvc: ImageService, private gameService: GamesService) { }

  ngOnInit() {
    this.imageSvc.getAll().subscribe(images => {
      this.images = images;
    }, error => {
      console.log(error);
      this.images = [];
    });

    this.gameService.getAll(true).subscribe(games => {
      this.games = games;
    }, error => {
      console.log(error);
      this.games = [];
    });
  }
}
