import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {

  constructor() { }

  private titleSource: Subject<string> = new Subject<string>();
  public pageTitle: Observable<string> = this.titleSource.asObservable();

  public emitPageTitle(pageTitle: string) {
    this.titleSource.next(pageTitle);
  }
}