import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  game: any;

  constructor(private actr: ActivatedRoute) { }

  ngOnInit() {
    this.actr.data.subscribe(data => {
      this.game = data.game;
    });
  }

}
