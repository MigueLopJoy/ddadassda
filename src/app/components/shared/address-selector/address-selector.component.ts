import { Component, EventEmitter, Output } from '@angular/core';
import { FilesService } from '../../../core/services/files/files.service';
import { SelectInputComponent } from '../select-input/select-input.component';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Address } from '../../../core/model/address';
import { isIncluded } from '../../../core/validators/isIncludedValidator';
import { MunicipalitiesInfo, Municipality, PostalCodes, Provinces } from '../../../core/model/municipalitiesInfo';

@Component({
  selector: 'app-address-selector',
  standalone: true,
  imports: [SelectInputComponent, FormsModule, NgClass],
  templateUrl: './address-selector.component.html',
  styleUrl: './address-selector.component.css'
})
export class AddressSelectorComponent {

  public constructor(
    private filesService: FilesService,
    private formBuilder: FormBuilder
  ) {}

  @Output() addressInfo: EventEmitter<Address> = new EventEmitter<Address>();
  municipalitiesInfo!: MunicipalitiesInfo;
  provincesInfo!: Provinces;
  postalCodesInfo!: PostalCodes;
  postalCodes!: string[];
  provinces!: string[];
  municipalities!: string[];
  municipalityPostalCodes!: string[] | undefined;
  postalCode!: string;
  province!: string;
  municipality!: string;
  postalCodeSearchText: string = "";

  addressForm = this.formBuilder.group(
    {
      postalCode: ["", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
        Validators.pattern('^[0-9]{5}$'),
        isIncluded(this.postalCodes),
        isIncluded(this.municipalityPostalCodes),
      ]],
      municipality: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z]$')
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
        Validators.pattern('^[0-9]+[a-zA-Z]?$'),
        isIncluded(this.municipalities)
      ]]
    }
  )

  searchPostalCode(searchText: string = "") {
    if (searchText) this.postalCodeSearchText = searchText;
    if (this.postalCode && this.postalCode !== this.postalCodeSearchText) {
      this.resetSearch();
    } else {
      if (this.postalCodeSearchText.length === 5) {
        let postalCodeInfo = this.postalCodesInfo[this.postalCodeSearchText];
        if (postalCodeInfo) {
          console.log(postalCodeInfo)
          this.postalCode = this.postalCodeSearchText;
          this.onProvinceChosen(postalCodeInfo.province);
          this.municipality = postalCodeInfo.municipality;
          console.log(this.municipality)
        }
      }
    }
  }

  transformData(data: any): any {
    const newProvinces: any = {};
    const newPostalCodes: any = {};

    // Transform provinces
    for (const province in data.provinces) {
      if (data.provinces.hasOwnProperty(province)) {
        newProvinces[province] = data.provinces[province].map((municipio: any) => ({
          municipality: municipio.municipio,
          postalCodes: municipio.codigosPostales
        }));
      }
    }

    // Transform postal codes
    for (const postalCode in data.postalCodes) {
      if (data.postalCodes.hasOwnProperty(postalCode)) {
        const info = data.postalCodes[postalCode];
        newPostalCodes[postalCode] = {
          municipality: info.municipio,
          province: info.provincia
        };
      }
    }

    console.log({
      provinces: newProvinces,
      postalCodes: newPostalCodes
    });
  }

  onPostalCodeChosen(postalCode: string) {
    this.postalCodeSearchText = postalCode;
    this.searchPostalCode();
  }

  onProvinceChosen(province: string) {
    console.log(province)
    this.province = province;
    this.municipalities = this.getMunicipalityNames(this.provincesInfo[province]);
    if (this.municipality) {
      this.municipality = "";
    }
  }

  onMunicipalityChosen(municipality: string) {
    this.municipality = municipality;
    this.resetPostalCodeInfo();
    this.municipalityPostalCodes = this.getMunicipalityPostalCodes();
    if (this.municipalityPostalCodes && this.municipalityPostalCodes.length === 1) {
      let singlePostalCode = this.municipalityPostalCodes[0];
      this.postalCodeSearchText = singlePostalCode;
      this.postalCode = singlePostalCode;
    }
  }

  resetSearch() {
    this.province = "";
    this.municipality = "";
    this.postalCode = "";
    this.municipalityPostalCodes = [];
  }

  resetPostalCodeInfo() {
    this.postalCode = "";
    this.postalCodeSearchText = "";
    this.municipalityPostalCodes = [];
  }

  getMunicipalityPostalCodes(): string[] | undefined {
    return this.provincesInfo[this.province].find(
      (m: Municipality) => m.name === this.municipality
    )?.postalCodes;
  }

  getMunicipalityNames(municipalities: Municipality[]) {
    console.log(municipalities)
    return municipalities.map((m: Municipality) => m.name);
  }

  getMunicipalities() {
    this.filesService.get(this.filesService.URL)
    .subscribe({
      next: (municipalities: any) => {
        this.municipalitiesInfo = municipalities;
        this.provincesInfo = municipalities['provinces'];
        this.postalCodesInfo = municipalities['postalCodes'];
        this.provinces = this.getObjectKeys(this.provincesInfo);
        this.postalCodes = this.getObjectKeys(this.postalCodesInfo);
        this.transformData(this.municipalitiesInfo)
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
