import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortByKey'
})
export class SortByKeyPipe implements PipeTransform {

  transform(value: { [key: string]: string }[], key: string, isAscending = true): { [key: string]: string }[] {
    if (value === null || value === undefined) {
      return value;
    }

    if (!Array.isArray(value)) {
      throw new Error('Sort by key pipe requires an array.');
    }

    const values = [...value];

    return values.sort((a, b) => {
      const upperCase1 = a[key].toUpperCase();
      const upperCase2 = b[key].toUpperCase();

      if (upperCase1 < upperCase2) {
        return isAscending ? -1 : 1;
      }

      if (upperCase1 > upperCase2) {
        return !isAscending ? -1 : 1;
      }

      return 0;
    });
  }
}
