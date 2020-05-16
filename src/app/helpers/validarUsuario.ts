import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';
import { AuthService } from '../auth.service';


export const ValidarUsuario: ValidatorFn = (control: FormGroup): ValidationErrors | null => 
{
    const usuario = control.get('usuario');
    var user;

    this.authService.validarUsuario(usuario).subscribe(
        data=>{
            // console.log(data);
            user = data["usuario"];
            // return false;
        }
    )
    
    return user ? { 'errorPass': true } : null;
    // return pass && passRepeat && pass.value != passRepeat.value ? { 'errorPass': true } : null;
};




// import { FormGroup } from '@angular/forms';
// import { AuthService } from '../auth.service';


// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn 
// {
//     return (control: AbstractControl): {[key: string]: any} | null => {
//       const forbidden = nameRe.test(control.value);
//       return forbidden ? {'forbiddenName': {value: control.value}} : null;
//     };
//   }


// // custom validator to check that two fields match
// export function ValidarUsuario(controlName: string) 
// {
//     var authService:AuthService;
//     var user;

//     debugger;
//     return (formGroup: FormGroup) => 
//     {   
//         this.authService.validarUsuario(controlName).subscribe(
//             data=>{
//                 console.log(data);
//                 this.user = data["usuario"];
//                 return false;
//             }
//         )
        
//         const control = formGroup.controls[controlName];
//         // control.setErrors({ userExists: true });
//         return user ? {'errorUser':true} : null;

//         // return pass && passRepeat && pass.value != passRepeat.value ? { 'errorUser': true } : null;
//         // const control = formGroup.controls[controlName];
//         // const matchingControl = formGroup.controls[matchingControlName];
        
//         // if (matchingControl.errors && !matchingControl.errors.mustMatch) 
//         // {
//         //     // return if another validator has already found an error on the matchingControl
//         //     return;
//         // }

//         // // set error on matchingControl if validation fails
//         // if (control.value !== matchingControl.value) {
//         //     matchingControl.setErrors({ mustMatch: true });
//         // } else {
//         //     matchingControl.setErrors(null);
//         // }
//     }
// }

