import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { FilesService } from '../../../core/services/files/files.service';
import { SelectInputComponent } from '../select-input/select-input.component';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Address } from '../../../core/model/address';
import { isIncluded } from '../../../core/validators/isIncludedValidator';
import { MunicipalitiesInfo, Municipality, PostalCodes, Provinces } from '../../../core/model/municipalitiesInfo';

@Component({
  selector: 'app-address-selector',
  standalone: true,
  imports: [SelectInputComponent, FormsModule, NgClass, ReactiveFormsModule],
  templateUrl: './address-selector.component.html',
  styleUrl: './address-selector.component.css'
})
export class AddressSelectorComponent {

  public constructor(
    private filesService: FilesService,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  @Output() addressInfo: EventEmitter<Address> = new EventEmitter<Address>();
  municipalitiesInfo!: MunicipalitiesInfo;
  provincesInfo!: Provinces;
  postalCodesInfo!: PostalCodes;
  postalCodes!: string[];
  provinces!: string[];
  municipalities!: string[];
  municipalityPostalCodes!: string[] | undefined;
  province!: string;
  municipality!: string;
  postalCode!: string;


  addressForm: FormGroup = this.formBuilder.group(
    {
      postalCode: ["", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
        Validators.pattern('^[0-9]+$'),
      ]],
      municipality: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z\s]$'),
        isIncluded(this.municipalities)
      ]],
      province: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z]$'),
        isIncluded(this.provinces)
      ]],
      address: ["", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
        Validators.pattern('^[a-zA-Z0-9\s\\-,/.ª]+$'),
      ]]
    }
  );

  get af(): { [key: string]: AbstractControl } {
    return this.addressForm.controls;
  }

  setPostalCodeValidators(list: string[]) {
    this.addressForm.get('postalCode')?.setValidators([
      isIncluded(list)
    ])
  }

  setFormValues() {
    let addressFormProperties = this.addressForm.value;
    addressFormProperties.municipality = this.municipality;
    addressFormProperties.province = this.province;
    console.log(this.addressForm.value)
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
    }
  }

  isFieldinvalid(field: string): boolean {
    return this.af[field] && this.af[field].errors ? true : false;
  }

  isPostalCodeInvalid(field: string): boolean {
    return (this.postalCode && (this.postalCode.length === 5)) && this.isFieldinvalid(field) ? true : false;
  }

  searchPostalCode(searchText: string = "") {
    if (searchText) this.addressForm.patchValue({ postalCode: searchText }, { emitEvent: false });
    let formPostalCode = this.addressForm.value.postalCode;
    console.log(formPostalCode)
    console.log(this.postalCode)
    if (this.postalCode && formPostalCode !== this.postalCode) {
      this.resetSearch();
    } else {
      this.postalCode = formPostalCode && formPostalCode.length === 5 ? formPostalCode : "";
      console.log(this.postalCode)
      let postalCodeInfo = this.postalCodesInfo[this.postalCode];
      if (postalCodeInfo) {
        this.province = postalCodeInfo.province;
        this.municipalities = this.getMunicipalityNames(this.provincesInfo[this.province]);
        this.municipality = postalCodeInfo.municipality;
        this.submitFormIfValid();
      }
      console.log(this.af['postalCode'].errors)
    }
  }

  onProvinceChosen(province: string) {
    this.province = province;
    this.resetPostalCodeInfo();
    this.municipality = "";
    this.municipalities = this.getMunicipalityNames(this.provincesInfo[province]);
  }

  onMunicipalityChosen(municipality: string) {
    this.municipality = municipality;
    this.resetPostalCodeInfo();
    this.municipalityPostalCodes = this.getMunicipalityPostalCodes();
    if (this.municipalityPostalCodes) this.setPostalCodeValidators(this.municipalityPostalCodes);
    if (this.municipalityPostalCodes && this.municipalityPostalCodes.length === 1) {
      let singlePostalCode = this.municipalityPostalCodes[0];
      this.addressForm.patchValue({ postalCode: singlePostalCode }, { emitEvent: false });
      this.postalCode = singlePostalCode;
      this.submitFormIfValid();
    }
  }

  resetSearch() {
    this.province = "";
    this.municipality = "";
    this.postalCode = "";
    this.municipalityPostalCodes = [];
    this.cdr.detectChanges()
  }

  resetPostalCodeInfo() {
    this.addressForm.value.postalCode = "";
    this.postalCode = "";
    this.municipalityPostalCodes = [];
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
        this.postalCodes = this.getObjectKeys(this.postalCodesInfo);
        this.setPostalCodeValidators(this.postalCodes);
      }
    })
  }

  getObjectKeys(object: object) {
    return Object.keys(object);
  }

  ngOnInit() {
    this.getMunicipalities();
  }
}
