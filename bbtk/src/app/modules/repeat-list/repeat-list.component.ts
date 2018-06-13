import { AfterContentInit, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { RepeatListItemDirective } from './repeat-list-item.directive';

@Component({
  selector: 'app-repeat-list',
  templateUrl: './repeat-list.component.html',
  styleUrls: ['./repeat-list.component.css']
})
export class RepeatListComponent implements OnInit, AfterContentInit {

  @Input()
  items: Array<any>;

  @ContentChild(RepeatListItemDirective, {read: TemplateRef})
  cardTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

}
