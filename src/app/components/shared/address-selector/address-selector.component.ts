import { ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FilesService } from '../../../core/services/files/files.service';
import { SelectInputComponent } from '../select-input/select-input.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Address } from '../../../core/model/address';
import { isIncluded } from '../../../core/validators/isIncludedValidator';
import { MunicipalitiesInfo, Municipality, PostalCodes, Provinces } from '../../../core/model/municipalitiesInfo';
import { PostalCodeSelectorComponent } from './postal-code-selector/postal-code-selector.component';

@Component({
  selector: 'app-address-selector',
  standalone: true,
  imports: [SelectInputComponent, FormsModule, NgClass, ReactiveFormsModule, PostalCodeSelectorComponent],
  templateUrl: './address-selector.component.html',
  styleUrl: './address-selector.component.css'
})
export class AddressSelectorComponent {

  public constructor(
    private filesService: FilesService,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  @Input() submitted: boolean = false; 
  @Output() addressInfo: EventEmitter<Address> = new EventEmitter<Address>();
  municipalitiesInfo!: MunicipalitiesInfo;
  provincesInfo!: Provinces;
  postalCodesInfo!: PostalCodes;
  postalCodes!: string[];
  provinces!: string[];
  municipalities!: string[] | undefined;
  municipalityPostalCodes!: string[] | undefined;
  province!: string;
  municipality!: string;
  postalCode: string = "";
  provinceFirstTimeChosen: boolean = false;
  municipalityFirstTimeChosen: boolean = false;
  addressForm!: FormGroup;

  createAddresForm() {
    this.addressForm = this.formBuilder.group(
      {
        postalCode: ["", []],
        municipality: ["", []],
        province: ["", []],
        address: ["", []]
      }
    );
    this.setMunicipalityValidators();
    this.setProvinceValidators();
    this.setAddressValidators();
  }

  get af(): { [key: string]: AbstractControl } {
    return this.addressForm.controls;
  }

  setMunicipalityValidators(list: string[] = []) {
    const control: AbstractControl | null = this.addressForm.get('municipality');
    if (control) {
      control.clearValidators();
      control?.setValidators([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z\s]$'),
        isIncluded(list)
      ]);
      control.updateValueAndValidity();
    }
  }

  setProvinceValidators(list: string[] = []) {
    const control: AbstractControl | null = this.addressForm.get('province');
    if (control) {
      control.clearValidators();
      control?.setValidators([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z]$'),
        isIncluded(list)
      ]);
      control.updateValueAndValidity();
    }
  }

  setAddressValidators() {
    const control: AbstractControl | null = this.addressForm.get('address');
    if (control) {
      control.clearValidators();
      control.setValidators([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
        Validators.pattern('^[a-zA-Z0-9\s\\-,/.ª]+$')
      ]); 
      control.updateValueAndValidity();
    }
  }

  setFormValues() {
    let addressFormProperties = this.addressForm.value;
    addressFormProperties.municipality = this.municipality;
    addressFormProperties.province = this.province;
    this.addressForm.patchValue({ postalCode: this.postalCode }, { emitEvent: false })
  }

  isFormValid(): boolean {
    this.setFormValues();
    return !this.addressForm.invalid;
  }

  submitFormIfValid() {
    if (this.isFormValid()) {
      const {postalCode, municipality, province, address} = this.addressForm.value;

      this.addressInfo.emit({
        postalCode: postalCode || '',
        municipality: municipality || '',
        province: province || '',
        address: address || ''
      });

      console.log("SUBMITTED")
    }
  }

  onProvinceChosen(province: string) {
    this.province = province;
    this.provinceFirstTimeChosen = true;
    this.resetPostalCodeInfo();
    this.municipality = "";
    this.setProvinceMunicipalities();
  }

  onMunicipalityChosen(municipality: string) {
    this.municipalityFirstTimeChosen = true;
    this.resetPostalCodeInfo();
    this.setMunicipalityPostalCodes(municipality);
    if (this.municipalityPostalCodes !== undefined && this.municipalityPostalCodes.length === 1) {
      this.postalCode = this.municipalityPostalCodes[0];
      this.submitFormIfValid();
    }
  }

  resetSearch() {
    this.addressForm.patchValue({ postalCode: "" }, { emitEvent: false })
    this.province = "";
    this.municipality = "";
    this.municipalityPostalCodes = undefined;
    this.municipalities = undefined;
  }

  resetPostalCodeInfo() {
    this.addressForm.patchValue({ postalCode: "" }, { emitEvent: false })
    this.postalCode = "";
    this.municipalityPostalCodes = undefined;
  }

  setPostalCode(postalCode: string) {
    this.postalCode = postalCode;
    let postalCodeInfo = this.postalCodesInfo[this.postalCode];
    if (postalCodeInfo && (this.province !== postalCodeInfo.province) && (this.municipality !== postalCodeInfo.municipality)) {
      this.province = postalCodeInfo.province;
      this.setProvinceMunicipalities();
      this.setMunicipalityPostalCodes(postalCodeInfo.municipality);
      this.submitFormIfValid();
    }
    this.cdr.detectChanges();
  }

  setProvinceMunicipalities() {
    let province = this.provincesInfo[this.province];
    this.municipalities = this.getMunicipalityNames(province);
    this.setMunicipalityValidators();
  }

  setMunicipalityPostalCodes(municipality: string) {
    this.municipality = municipality;
    this.municipalityPostalCodes = this.getMunicipalityPostalCodes();
  }

  getMunicipalityPostalCodes(): string[] | undefined {
    return this.provincesInfo[this.province].find(
      (m: Municipality) => m.municipality === this.municipality
    )?.postalCodes;
  }

  getMunicipalityNames(municipalities: Municipality[]) {
    return municipalities.map((m: Municipality) => m.municipality);
  }

  getMunicipalities() {
    this.filesService.get(this.filesService.URL)
    .subscribe({
      next: (municipalities: MunicipalitiesInfo) => {
        this.municipalitiesInfo = municipalities;
        this.provincesInfo = municipalities['provinces'];
        this.postalCodesInfo = municipalities['postalCodes'];
        this.provinces = this.getObjectKeys(this.provincesInfo);
        this.setProvinceValidators(this.provinces);
        this.postalCodes = this.getObjectKeys(this.postalCodesInfo);
      }
    })
  }

  getObjectKeys(object: object) {
    return Object.keys(object);
  }

  provinceSubmittedOrFirstTimeChosen(): boolean {
    return this.submitted || this.provinceFirstTimeChosen;
  }

  provinceValidationError(error: string): boolean {
    return this.af['province'].errors && this.af['province'].errors[error];
  }

  provinceRequiredError(): boolean {
    return this.provinceSubmittedOrFirstTimeChosen() && this.provinceValidationError('required');
  }

  provinceLengthError(): boolean {
    return this.provinceSubmittedOrFirstTimeChosen() && this.provinceValidationError('minlegth') ||
      this.provinceSubmittedOrFirstTimeChosen() && this.provinceValidationError('maxlegth');
  }

  provincePatternError(): boolean {
    return this.provinceValidationError('pattern');
  }

  provinceIncludedError(): boolean {
    return this.provinceValidationError('isIncluded');
  }

  provinceError(): boolean {
    return this.provinceRequiredError() ||
      this.provinceLengthError() ||
      this.provincePatternError() ||
      this.provinceIncludedError();
  }

  municipalitySubmittedOrFirstTimeChosen(): boolean {
    return this.submitted || this.municipalityFirstTimeChosen;
  }

  municipalityValidationError(error: string): boolean {
    return this.af['municipality'].errors && this.af['municipality'].errors[error];
  }

  municipalityRequiredError(): boolean {
    return this.municipalitySubmittedOrFirstTimeChosen() && this.municipalityValidationError('required');
  }

  municipalityLengthError(): boolean {
    return this.municipalitySubmittedOrFirstTimeChosen() && this.municipalityValidationError('minlegth') ||
      this.municipalitySubmittedOrFirstTimeChosen() && this.municipalityValidationError('maxlegth');
  }

  municipalityPatternError(): boolean {
    return this.municipalityValidationError('pattern');
  }

  municipalityIncludedError(): boolean {
    return this.municipalityValidationError('isIncluded');
  }

  municipalityError(): boolean {
    return this.provinceRequiredError() ||
      this.municipalityLengthError() ||
      this.municipalityPatternError() ||
      this.municipalityIncludedError();
  }


  ngOnInit() {
    this.createAddresForm();
    this.getMunicipalities();
  }
}
