import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'trust'
})

export class TrustPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(src: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(src);
  }

}
