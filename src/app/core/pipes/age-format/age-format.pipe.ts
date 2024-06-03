import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageFormat',
  standalone: true
})
export class AgeFormatPipe implements PipeTransform {

  transform(birth: string): string {
    const [day, month, year] = birth.split('/').map(Number),
      birthDate: Date = new Date(year, month - 1, day),
      currentDate: Date = new Date(),
      birthMonth: number = birthDate.getMonth(),
      birthYear: number = birthDate.getFullYear(),
      currentMonth: number = currentDate.getMonth(),
      currentYear: number = currentDate.getFullYear();

    let yearsDiff: number = currentYear - birthYear,
      monthsDiff: number = currentMonth - birthMonth;

    if (monthsDiff < 0) {
      yearsDiff--;
      monthsDiff += 12;
    }

    if (yearsDiff > 0) {
      return yearsDiff === 1 ? `${yearsDiff} año` : `${yearsDiff} años`;
    } else {
      return monthsDiff === 1 ? `${monthsDiff} mes` : `${monthsDiff} meses`;
    }
  }

}
