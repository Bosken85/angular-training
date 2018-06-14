import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from '../../components/card/card.module';
import { RepeatListModule } from '../../components/repeat-list/repeat-list.module';
import { CorePipesModule } from '../../pipes/core-pipes.module';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameOverviewComponent } from './game-overview/game-overview.component';
import { GamesComponent } from './games.component';
import { routes } from './games.module.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    RepeatListModule,
    CorePipesModule
  ],
  declarations: [GamesComponent, GameDetailComponent, GameOverviewComponent]
})
export class GamesModule { }
