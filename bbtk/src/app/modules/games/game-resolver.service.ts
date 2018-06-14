import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { GamesService } from '../../services/games.service';

@Injectable({
  providedIn: 'root'
})
export class GameResolverService implements Resolve<any> {

  constructor(private gameService: GamesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = Number.parseInt(route.paramMap.get('id'));
    return this.gameService.get(id);
  }
}
