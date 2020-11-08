import {AbstractControl} from "@angular/forms";

export const emailValidator = (control: AbstractControl): Record<string, boolean> | null => {
    const validEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!validEmailRegex.test(control.value))
        return {emailValidator: true};
    return null;
}
