import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { isIncluded } from '../../../../core/validators/isIncludedValidator';
import { SelectInputComponent } from '../../select-input/select-input.component';
import { NgClass } from '@angular/common';
import { PostalCodes } from '../../../../core/model/municipalitiesInfo';

@Component({
  selector: 'app-postal-code-selector',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, SelectInputComponent],
  templateUrl: './postal-code-selector.component.html',
  styleUrl: './postal-code-selector.component.css'
})
export class PostalCodeSelectorComponent {

  constructor(
    private formBuilder: FormBuilder
  ) {}

  @Input() submitted: boolean = false; 
  @Input() postalCode!: string;
  @Input() postalCodesInfo!: PostalCodes;
  @Input() municipalityPostalCodes!: string[] | undefined;
  @Output() postalCodeChange: EventEmitter<string> = new EventEmitter<string>();
  postalCodes!: string[];
  firstTimeWriten: boolean = false;
  postalCodeForm!: FormGroup;

  createPostalCodeForm() {
    this.postalCodeForm = this.formBuilder.group(
      {
        postalCode: ["", []]
      }
    );
    this.setPostalCodeValidators();
  }

  get pcf(): { [key: string]: AbstractControl } {
    return this.postalCodeForm.controls;
  }

  setPostalCodeValidators() {
    const control: AbstractControl | null = this.postalCodeForm.get('postalCode');
    if (control) {
      control.clearValidators();
      control?.setValidators([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
        Validators.pattern('^[0-9]+$'),
        isIncluded(this.postalCodes),
        isIncluded(this.municipalityPostalCodes)
      ]);
      control.updateValueAndValidity();
    }
  }

  submitFormIfValid() {
    if (this.isFormValid()) {
      const {postalCode} = this.postalCodeForm.value;

      this.addressInfo.emit({
        postalCode: postalCode || ''
      });
    }
  }

  submit() {
    this.postalCodeChange.emit(this.postalCode);
  }

  searchPostalCode(searchText: string = "") {
    if (searchText) this.postalCodeForm.patchValue({ postalCode: searchText }, { emitEvent: false });
    let formPostalCode = this.postalCodeForm.value.postalCode;
    if (!this.firstTimeWriten) this.firstTimeWriten = (formPostalCode.length === 5);
    if (this.firstTimeWriten && formPostalCode.length !== 5) {
      this.resetSearch();
    } else {
      this.postalCode = formPostalCode;
      let postalCodeInfo = this.postalCodesInfo[this.postalCode];
      if (postalCodeInfo) {
        this.province = postalCodeInfo.province;
        this.setProvinceMunicipalities();
        this.setMunicipalityPostalCodes(postalCodeInfo.municipality);
        this.submitFormIfValid();
      }
    }
  }

  postalCodeValidationError(error: string): boolean {
    return (this.pcf['postalCode'].errors && this.pcf['postalCode'].errors[error])
  }

  submittedOrFirstTimeWritten(): boolean {
    return (this.submitted || this.firstTimeWriten);
  }
 
  postalCodeRequiredError(): boolean {
    return (this.submittedOrFirstTimeWritten() && this.postalCodeValidationError('required'));
  }

  postalCodeLengthError(): boolean {
    return (this.submittedOrFirstTimeWritten() && this.postalCodeValidationError('minlength')) ||
      (this.submittedOrFirstTimeWritten() && this.postalCodeValidationError('maxlength'))     
  }

  postalCodePatternError(): boolean {
    return this.postalCodeValidationError('pattern');
  }

  postalCodeNotFoundError(): boolean {
    return this.postalCodeForm.value.postalCode === 5 && 
      this.submittedOrFirstTimeWritten() && 
      this.postalCodeValidationError('isNotIncluded');
  }

  isPostalCodeInvalid(): boolean {
    return this.postalCodeRequiredError() || 
      this.postalCodeLengthError() || 
      this.postalCodePatternError() || 
      this.postalCodeNotFoundError();
  }

  getObjectKeys(object: object) {
    return Object.keys(object);
  }

  ngOnChanges() {
    console.log("CHANGE");
    if (this.municipalityPostalCodes) this.setPostalCodeValidators();
    if (this.postalCodesInfo) this.postalCodes = this.getObjectKeys(this.postalCodesInfo);
  }

  ngOnInit() {
    this.createPostalCodeForm();
  }
}
