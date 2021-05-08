import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removehtml',
})
export class RemovehtmlPipe implements PipeTransform {
  transform(value: String) {
    if (value) {
      var result = value.toLowerCase().replace(/<\/?[^>]+>/gi, '');
      return result;
    } else {
    }
  }
}
