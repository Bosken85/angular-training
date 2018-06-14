import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private _baseUri = 'https://my-json-server.typicode.com/Bosken85/angular-training/games';

  constructor(private http: HttpClient) { }

  getAll(featured = false): Observable<Array<any>> {
    const params = {};
    if (featured) {
      params['featured'] = true;
    }
    return this.http.get<Array<IGame>>(this._baseUri, {
      params: params
    });
  }

  get(id: number): Observable<IGame> {
    return this.http.get<any>(`${this._baseUri}/${id}`);
  }

  add(game: IGame) {
    const game2 = new Game(game.id, game.title, game.price);
    game2.image = '';
  }
}

export interface IGame {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  featured: boolean;
}

export class Game implements IGame {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  featured: boolean;

  constructor(id: number, title: string, price: number) {
    this.id = id;
    this.title = title;
    this.price = price;
  }
}
