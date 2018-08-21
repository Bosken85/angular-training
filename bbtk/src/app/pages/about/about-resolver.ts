import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IMember, MembersService } from '../../services/members.service';

@Injectable({
    providedIn: 'root'
  })
export class AboutResolver implements Resolve<Observable<Array<IMember>>> {
  constructor(private memberService: MembersService) {}

  resolve() {
    return this.memberService.getAll();
  }
}
