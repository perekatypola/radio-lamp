import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  // tslint:disable-next-line:variable-name
  _progress: number;
  @Input()  set progress(value: number) {this._progress = value;
  }

}
