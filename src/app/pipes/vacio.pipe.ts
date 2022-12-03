import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vacio'
})
export class VacioPipe implements PipeTransform {

  transform(value: any): any {
    if (value === undefined || value === null || value === '') {
      return 'Sin valor';
    }
    return value;
  }

}
