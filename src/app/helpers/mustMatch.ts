import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';



export const MustMatch: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const pass = control.get('pass');
    const passRepeat = control.get('passrepeat');

    return pass && passRepeat && pass.value != passRepeat.value ? { 'errorPass': true } : null;
  };