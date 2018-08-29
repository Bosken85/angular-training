import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit, OnDestroy {
  private paramsub: Subscription;
  game: any;
  id: any;

  constructor(private actr: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.paramsub = this.actr.paramMap.subscribe(params => this.id = params.get('id'));
    this.actr.data.subscribe(data => {
      this.game = data.game;
    });
  }

  returnToSender($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();

    this.router.navigate(['..'], { relativeTo: this.actr });
  }

  ngOnDestroy(): void {
    this.paramsub.unsubscribe();
  }
}
