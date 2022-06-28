import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContacts'
})
export class FilterContactsPipe implements PipeTransform {

  transform<T>(items: T[], itemProp: string, term: string): T[] {
    const regExp = new RegExp(term, 'i')
    console.log('FilterContactsPipe - regExp', items)
    return items.filter(item => regExp.test((item as any)[itemProp]))
  }

}
