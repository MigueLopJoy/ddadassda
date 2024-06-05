import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectEntries',
  standalone: true
})
export class ObjectEntriesPipe implements PipeTransform {

  transform(value: Object): any[] {
    return Object.entries(value);
  }

}
