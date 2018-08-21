import { AbstractControl } from '@angular/forms';

export function genderValidator(control: AbstractControl) {
    const genderId = control.value;
    if (genderId > 1) {
        return null;
    }

    return {
        gender: genderId
    };
}
