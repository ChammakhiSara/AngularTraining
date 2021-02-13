import { FormGroup } from "@angular/forms";

export function checkPasswords(gp: FormGroup) { // here we have the 'passwords' group

const password = gp.get('password').value;
const confirmPassword = gp.get('confirmPassword').value;

return password === confirmPassword ? null : { notSame: true }     
}