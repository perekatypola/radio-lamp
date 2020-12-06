import { Injectable } from '@angular/core';
import {TEMPLATE} from './template';
import {ENGLISHTEMPLATE} from './translated';
import {Text} from './header-footer-text';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  rusEng = false;
  constructor() { }
  setLanguageFlag(val: boolean): void{
    this.rusEng = val;
  }
  getLanguageFlag(): boolean {
    return this.rusEng;
  }
  getLocale(rusEng?: boolean): any {
    rusEng = rusEng === null ? this.rusEng : rusEng;
    return this.rusEng === true ? ENGLISHTEMPLATE : TEMPLATE;
  }
  getHeaderLocale(headOrFoot: boolean, rusEng?: boolean ): any {
    rusEng = rusEng === null ? this.rusEng : rusEng;
    if (this.rusEng === true && headOrFoot === true) {return Text[1].text; }
    if (this.rusEng === true && headOrFoot === false) {return Text[3].text; }
    if (this.rusEng === false && headOrFoot === true) {return Text[0].text; }
    if (this.rusEng === false && headOrFoot === false) {return Text[2].text; }
  }
}

