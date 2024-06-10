import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputOptionService {

  constructor() { }

  private toggleInputSource: Subject<string> = new Subject<string>();
  public optionChanged: Observable<string> = this.toggleInputSource.asObservable();

  public notifyChange(option: string) {
    this.toggleInputSource.next(option);
  }
}
