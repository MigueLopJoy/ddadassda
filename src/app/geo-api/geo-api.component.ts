import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; // Asegúrate de importar 'tap' aquí
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

  municipalitiesProvince!: object;
  municipalitiesPostalCode!: object;
  isProvincesInputFocused: boolean = false;
  isProvinceSelected: boolean = false;

  onFocusProvincesInput() {
    if (!this.municipalitiesProvince) {
      this.getMunicipalitiesProvince()
      .subscribe({
        next: () => {
          this.isProvincesInputFocused = true;
        }
      })
    }
  }

  getMunicipalitiesProvince(): Observable<object> {
    return this.filesService.get(this.filesService.municipalities_provinces_URL)
    .pipe(
      tap((municipalitiesProvince: object) => {
        this.municipalitiesProvince = municipalitiesProvince;
      })
    )
  }

  getMunicipalitiesPostalCode(): void {
    this.filesService.get(this.filesService.municipalities_postalCode_URL)
    .subscribe({
      next: (municipalitiesPostalCode: object) => {
        this.municipalitiesPostalCode = municipalitiesPostalCode;
      }
    })
  }

  isChosen(data: any) {
    console.log(data.srcElement.value)
  }

  getEntries(object: object) {
    console.log(object)
    return Object.entries(object);
  }

  getObjectKeys(object: object) {
    return Object.keys(object);
  }

  construirNuevoObjeto(data: any): any {
    const nuevoObjeto: any = {};
  }
}
