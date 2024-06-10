import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; // Asegúrate de importar 'tap' aquí
import { FilesService } from '../core/services/files/files.service';
import { SelectInputComponent } from '../components/shared/select-input/select-input.component';

@Component({
  selector: 'app-geo-api',
  standalone: true,
  imports: [SelectInputComponent],
  templateUrl: './geo-api.component.html',
  styleUrl: './geo-api.component.css'
})
export class GeoAPIComponent {

  public constructor(
    private filesService: FilesService
  ) {}

  municipalitiesProvince!: any;
  municipalitiesPostalCode!: object;
  provinces!: string[];
  selectedProvince!: string;
  selectedMunicipality!: string;
  isProvinceSelected: boolean = false;

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

  onProvinceChosen(province: string) {
    this.selectedProvince = province;
    this.isProvinceSelected = true;
  }

  onMunicipalityChosen(municipality: string) {
    console.log(municipality)
    this.selectedMunicipality = municipality;
  }

  getObjectKeys(object: object) {
    return Object.keys(object);
  }

  ngOnInit() {
    this.getMunicipalitiesProvince();
  }
}
