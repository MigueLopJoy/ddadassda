import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MunicipalitiesInfo } from '../../model/municipalitiesInfo';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  URL = '/assets/info/municipalities_info.json';

  get(fileUrl: string): Observable<MunicipalitiesInfo> {
    return this.httpClient.get(fileUrl) as Observable<MunicipalitiesInfo>;
  }
}
