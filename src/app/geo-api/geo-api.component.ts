import { Component } from '@angular/core';
import { FilesService } from '../core/services/files/files.service';
import { SelectInputComponent } from '../components/shared/select-input/select-input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-geo-api',
  standalone: true,
  imports: [SelectInputComponent, FormsModule],
  templateUrl: './geo-api.component.html',
  styleUrl: './geo-api.component.css'
})
export class GeoAPIComponent {

  public constructor(
    private filesService: FilesService
  ) {}

  municipalitiesProvince!: any;
  municipalitiesPostalCode!: any;
  provinces!: string[];
  municipalities!: string[];
  selectedProvince!: string;
  selectedMunicipality!: string;
  postalCode!: string;
  postalCodeSearchText: string = "";

  getMunicipalitiesProvince() {
    this.filesService.get(this.filesService.municipalities_provinces_URL)
    .subscribe({
      next: (municipalities: any) => {
        this.municipalitiesProvince = municipalities;
        this.provinces = this.getObjectKeys(municipalities);
      }
    })
  }

  getMunicipalitiesPostalCode(): void {
    this.filesService.get(this.filesService.municipalities_postalCode_URL)
    .subscribe({
      next: (municipalitiesPostalCode: object) => {
        this.municipalitiesPostalCode = municipalitiesPostalCode;
      }
    })
  }

  searchPostalCode() {

    if (this.postalCode && this.postalCode !== this.postalCodeSearchText) {
      this.postalCode = "";
      this.selectedProvince = "";
      this.selectedMunicipality = "";
    } else {
      if (this.postalCodeSearchText.length === 5) {
        let municipality = this.municipalitiesPostalCode[this.postalCodeSearchText];
        if (municipality) {
          this.postalCode = this.postalCodeSearchText;
          this.onProvinceChosen(municipality.provincia);
          this.selectedMunicipality = municipality.municipio;
        }
      }
    }
  }

  onProvinceChosen(province: string) {
    this.selectedProvince = province;
    this.municipalities = this.getMunicipalityNames(this.municipalitiesProvince[province]);
    if (this.selectedMunicipality) {
      this.selectedMunicipality = "";
    }
  }

  onMunicipalityChosen(municipality: string) {
    this.selectedMunicipality = municipality;
    if (this.postalCode) {
      this.postalCode === "";
      this.postalCodeSearchText = "";
    }
  }

  getMunicipalityNames(municipalities: {municipio: string; codigosPostales: string[]}[]) {
    return municipalities.map((m: {municipio: string; codigosPostales: string[]}) => m.municipio);
  }

  getObjectKeys(object: object) {
    return Object.keys(object);
  }

  ngOnInit() {
    this.getMunicipalitiesProvince();
    this.getMunicipalitiesPostalCode();
  }
}
