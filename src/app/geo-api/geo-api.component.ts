import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-geo-api',
  standalone: true,
  imports: [],
  templateUrl: './geo-api.component.html',
  styleUrl: './geo-api.component.css'
})
export class GeoAPIComponent {

  public constructor(
    private httpClient: HttpClient
  ) {}


  get(fileUrl: string): Observable<string> {
    return this.httpClient.get(fileUrl) as Observable<string>;
  }

  getFile(): string {
    const file: string = "";
    this.get('/assets/info/municipios.csv')
    .subscribe({
      next: (file: string) => {
        console.log(file)
      }
    })
    return file;
  }

  // readFile(file: string): void {
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const text = reader.result as string;
  //       console.log(text);
  //     };
  //     reader.onerror = (e) => {
  //       console.error("Error reading CSV file: "), e;
  //     };
  //     reader.readAsText(file);
  //   }
  // }



  // csvToJson(csv: string): any[] {
  //   const lines = csv.split('\n');
  //   const headers = lines[0].split(',');
  //   const data = lines.slice(1).map(line => {
  //     const values = line.split(',');
  //     const obj: any = {};
  //     headers.forEach((header, index) => {
  //       obj[header.trim()] = values[index].trim();
  //     });
  //     return obj;
  //   });
  //   return data;
  // }

  ngOnInit() {
    this.getFile();
  }
}
