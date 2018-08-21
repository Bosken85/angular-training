import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  game: any;

  constructor(private actr: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.actr.data.subscribe(data => {
      this.game = data.game;
    });
  }

  returnToSender($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();

    this.router.navigate(['..'], { relativeTo: this.actr });
  }
}
