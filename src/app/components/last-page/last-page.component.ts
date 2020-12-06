import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.scss']
})
export class LastPageComponent {

  @Input() rusEng;

}
