import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DownloadService} from 'src/app/services/download/download.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent  {
  @ViewChild('audio') audio: ElementRef<HTMLAudioElement>;
  @ViewChild('load') save: ElementRef<HTMLAnchorElement>;
  @Input() trackPath: string;
  progressBar = 0;
  constructor(private downloads: DownloadService) { }
  play(): void {
    this.audio.nativeElement.play();
  }
  pause(): void {
    this.audio.nativeElement.pause();
  }
  progress(): void {
    this.progressBar = (this.audio.nativeElement.currentTime / this.audio.nativeElement.duration * 100);
  }
  download(): void {
      this.downloads
        .download(this.trackPath)
        .subscribe(blob => {
          const a = document.createElement('a');
          const objectUrl = URL.createObjectURL(blob);
          a.href = objectUrl;
          a.download = this.trackPath ;
          a.click();
          URL.revokeObjectURL(objectUrl);
        });
    }


}
