import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private _baseUri = 'https://my-json-server.typicode.com/Bosken85/angular-training/images';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<IImage>> {
    return this.http.get<Array<IImage>>(this._baseUri);
  }
}

export interface IImage {
  id: number;
  url: string;
  title: string;
}
