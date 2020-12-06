import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-fir-page',
  templateUrl: './fir-page.component.html',
  styleUrls: ['./fir-page.component.scss']
})
export class FirPageComponent implements OnInit {


  @Input() rusEng;
  clicked = false;
  constructor() { }
  ngOnInit(): void {
  }
  setBlink(): void {
    // tslint:disable-next-line:no-conditional-assignment
   this.clicked = !this.clicked;
  }
}
