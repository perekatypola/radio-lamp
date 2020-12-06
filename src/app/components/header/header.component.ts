import {Component, Input, OnInit} from '@angular/core';
import {LanguageService} from 'src/app/services/language/language.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() rusEng;
  constructor(public translator: LanguageService) { }
  setFlag(val: boolean): void {
    this.translator.setLanguageFlag(val);
  }
  ngOnInit(): void {
    }
}
