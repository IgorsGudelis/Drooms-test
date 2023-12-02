import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idFromUrl',
})
export class IdFromUrlPipe implements PipeTransform {
  transform(value: string): string {
    const urlSplitted = value.split('/');

    return urlSplitted[urlSplitted.length - 2];
  }
}
