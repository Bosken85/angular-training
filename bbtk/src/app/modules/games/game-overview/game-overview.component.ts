import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../services/games.service';

@Component({
  selector: 'app-game-overview',
  templateUrl: './game-overview.component.html',
  styleUrls: ['./game-overview.component.css']
})
export class GameOverviewComponent implements OnInit {
  games: Array<any> = [];

  constructor(private gameService: GamesService) { }

  ngOnInit() {
    this.gameService.getAll().subscribe(games => {
      this.games = games;
    }, error => {
      console.log(error);
      this.games = [];
    });
  }



}
