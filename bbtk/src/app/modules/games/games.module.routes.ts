import { Routes } from '@angular/router';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameOverviewComponent } from './game-overview/game-overview.component';
import { GameResolverService } from './game-resolver.service';
import { GamesComponent } from './games.component';

export const routes: Routes = [
    {
        path: '', component: GamesComponent,
        children: [
            { path: '', component: GameOverviewComponent },
            { path: ':id', component: GameDetailComponent, resolve: { game: GameResolverService } },
            { path: '', pathMatch: 'full', redirectTo: '' }
        ]
    }
];
