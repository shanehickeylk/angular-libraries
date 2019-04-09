import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHtmlTags'
})

export class RemoveHtmlTagsPipe implements PipeTransform {

  // This pipe removes all HTML tags from a text string
  // Used for sanitizing input so that html tags are not shown
  transform(value: string): string {
    return value.replace(/<\/?[^>]+>/gi, '');
  }

}
