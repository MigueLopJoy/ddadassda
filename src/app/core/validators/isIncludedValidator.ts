import { AbstractControl, ValidatorFn } from "@angular/forms";

export function isIncluded(provinces: string[] | undefined): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        if (provinces) {
            const isValid = provinces.includes(control.value);
            return isValid ? null : {'isNotIncluded': {value: control.value}};
        }
        return null;
    }
}