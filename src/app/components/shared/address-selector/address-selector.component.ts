import { Component } from '@angular/core';
import { FilesService } from '../../../core/services/files/files.service';
import { SelectInputComponent } from '../select-input/select-input.component';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-address-selector',
  standalone: true,
  imports: [SelectInputComponent, FormsModule, NgClass],
  templateUrl: './address-selector.component.html',
  styleUrl: './address-selector.component.css'
})
export class AddressSelectorComponent {

  public constructor(
    private filesService: FilesService
  ) {}

  municipalitiesInfo!: any;
  provinces!: string[];
  municipalities!: string[];
  province!: string;
  municipality!: string;
  postalCode!: string;
  postalCodeSearchText: string = "";
  municipalityPostalCodes!: string[];

  getMunicipalities() {
    this.filesService.get(this.filesService.URL)
    .subscribe({
      next: (municipalities: any) => {
        this.municipalitiesInfo = municipalities;
        this.provinces = this.getObjectKeys(this.municipalitiesInfo['provincias']);
      }
    })
  }

  searchPostalCode(searchText: string = "") {
    if (searchText) this.postalCodeSearchText = searchText;
    if (this.postalCode && this.postalCode !== this.postalCodeSearchText) {
      this.resetSearch();
    } else {
      if (this.postalCodeSearchText.length === 5) {
        let municipality = this.municipalitiesInfo['codigosPostales'][this.postalCodeSearchText];
        if (municipality) {
          this.postalCode = this.postalCodeSearchText;
          this.onProvinceChosen(municipality.provincia);
          this.municipality = municipality.municipio;
        }
      }
    }
  }

  onPostalCodeChosen(postalCode: string) {
    this.postalCodeSearchText = postalCode;
    this.searchPostalCode();
  }

  onProvinceChosen(province: string) {
    this.province = province;
    this.municipalities = this.getMunicipalityNames(this.municipalitiesInfo['provincias'][province]);
    if (this.municipality) {
      this.municipality = "";
    }
  }

  onMunicipalityChosen(municipality: string) {
    this.municipality = municipality;
    this.resetPostalCodeInfo();
    this.municipalityPostalCodes = this.getMunicipalityPostalCodes();
    if (this.municipalityPostalCodes.length === 1) {
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

  getMunicipalityPostalCodes() {
    return this.municipalitiesInfo['provincias'][this.province].find(
      (m: any) => m.municipio === this.municipality
    ).codigosPostales;
  }

  getMunicipalityNames(municipalities: {municipio: string; codigosPostales: string[]}[]) {
    return municipalities.map((m: {municipio: string; codigosPostales: string[]}) => m.municipio);
  }

  getObjectKeys(object: object) {
    return Object.keys(object);
  }

  ngOnInit() {
    this.getMunicipalities();
  }
}
