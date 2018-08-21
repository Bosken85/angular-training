import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { genderValidator } from '../gender.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  name: FormControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.name = this.fb.control('', Validators.required);
    this.form = this.fb.group({
      name: this.name,
      gender: this.fb.control({value: null, disabled: false}, [Validators.required, genderValidator]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      phone: this.fb.control(''),
      question: this.fb.control('', Validators.required),
      acceptConditions: this.fb.control(false, Validators.required)
    });
  }

  onSubmit() {
  }

}
