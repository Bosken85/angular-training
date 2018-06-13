import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private _baseUri = 'https://my-json-server.typicode.com/Bosken85/angular-training/games';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this._baseUri);
  }

  get(id: number): Observable<any> {
    return this.http.get<any>(`${this._baseUri}/${id}`);
  }
}
