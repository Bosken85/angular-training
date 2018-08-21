import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMember } from '../../services/members.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  teamMembers: Array<IMember> = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.teamMembers = this.route.snapshot.data.members;
  }
}
