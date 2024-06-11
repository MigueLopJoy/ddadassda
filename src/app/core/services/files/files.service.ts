import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  URL = '/assets/info/municipalities_provinces.json';

  get(fileUrl: string): Observable<{}[]> {
    return this.httpClient.get(fileUrl) as Observable<{}[]>;
  }
}
