import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: any;

  constructor(private actr: ActivatedRoute) { }

  ngOnInit() {
    this.actr.data.subscribe(data => {
      this.form = data.form;
    });
  }

}
