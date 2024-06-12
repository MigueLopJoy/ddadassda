import { AbstractControl, ValidatorFn } from "@angular/forms";

export function isIncluded(list: string[] | undefined): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        console.log(list)
        if (list) {
            console.log(list.includes(control.value))
            const isValid = list.includes(control.value);
            return isValid ? null : {'isNotIncluded': {value: control.value}};
        }
        return null;
    }
}