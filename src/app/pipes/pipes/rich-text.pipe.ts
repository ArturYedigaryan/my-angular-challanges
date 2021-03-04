import {Pipe, PipeTransform} from '@angular/core';
import {htmlRegex} from '../../components/rich-text-viewer/html-regex.data';

@Pipe({
  name: 'richText'
})
export class RichTextPipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    const html = this.parseNonEmptyHtml(value);
    const isValidHtml = htmlRegex.test(html);
    console.log(html);
    return isValidHtml ? html : '';
  }

  parseNonEmptyHtml(html: string): string {
    const htmlTags: RegExp = /<[^]*?>/g;
    const hasContent = html.replace(htmlTags, '').trim().length > 0;

    return hasContent ? html : '';
  }
}
