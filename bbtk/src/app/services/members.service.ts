import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private _baseUri = 'api/members';

  constructor(private http: HttpClient) { }

  getAll(featured = false): Observable<Array<IMember>> {
    const params = {};
    if (featured) {
      params['featured'] = true;
    }
    return this.http.get<Array<IMember>>(this._baseUri, { params: params }).pipe(
      catchError((error, o) => {
        console.log(error);
        return [];
      })
    );
  }
}

export interface IMember {
  id: number;
  firstName: string;
  lastName: string;
  jobTitel: string;
  picture: string;
}
