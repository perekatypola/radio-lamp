import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {TEMPLATE} from 'src/app/services/language/template' ;
import {LanguageService} from 'src/app/services/language/language.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  @Input() rusEng;
  constructor(public translator: LanguageService) { }
}
