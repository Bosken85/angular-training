import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { GamesService, IGame } from '../../services/games.service';

@Injectable()
export class GameResolverService implements Resolve<IGame> {

  constructor(private gameService: GamesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGame> {
    const id = Number.parseInt(route.paramMap.get('id'));
    return this.gameService.get(id);
  }
}
