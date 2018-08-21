import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-gender-select',
  templateUrl: './gender-select.component.html',
  styleUrls: ['./gender-select.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenderSelectComponent),
      multi: true
    }
  ]
})
export class GenderSelectComponent implements OnInit, ControlValueAccessor {
  // tslint:disable-next-line:no-input-rename
  // @Input('key')
  private _key: any;

  items: Array<any> = [
    { id: 1, value: 'male' },
    { id: 2, value: 'female' },
    { id: 3, value: 'other' }
  ];

  get key(): any {
    return this._key;
  }
  set key(val) {
    this._key = val;
    this.propagateChange(this._key);
  }

  disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.key = obj;
    }
  }

  propagateChange = (_: any) => { };
  propagateTouche = (_: any) => { };

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouche = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
