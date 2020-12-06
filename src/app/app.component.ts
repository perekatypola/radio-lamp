import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {LanguageService} from 'src/app/services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  rusEng;
  title = 'radio-lampa';
  ngDoCheck(): void {
    this.rusEng = this.translator.getLanguageFlag();
    console.log(this.rusEng);
  }
  constructor(private translator: LanguageService) {
  }
}
