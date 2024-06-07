import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { FilesService } from '../core/services/files/files.service';

@Component({
  selector: 'app-geo-api',
  standalone: true,
  imports: [],
  templateUrl: './geo-api.component.html',
  styleUrl: './geo-api.component.css'
})
export class GeoAPIComponent {

  public constructor(
    private filesService: FilesService
  ) {}

  municipalitiesProvince!: any;
  municipalitiesPostalCode!: object;
  isProvincesInputFocused: boolean = false;

  onFocusProvincesInput() {
    this.isProvincesInputFocused = true;
    this.getMunicipalitiesProvince();
  }

  getMunicipalitiesProvince(): void {
    this.filesService.get(this.filesService.municipalities_provinces_URL)
    .subscribe({
      next: (municipalitiesProvince: object) => {
        this.municipalitiesProvince = municipalitiesProvince;
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

  getEntries(object: object) {
    return Object.entries(object);
  }

  ngOnInit() {
    this.getMunicipalitiesProvince();
  }
}
