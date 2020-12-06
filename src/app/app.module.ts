import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FirPageComponent } from './components/fir-page/fir-page.component';
import { PageComponent } from './components/page/page.component';
import {CommonModule} from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PlayerComponent } from './components/player/player.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { LastPageComponent } from './components/last-page/last-page.component';
import { FooterComponent } from './components/footer/footer.component';
import {LanguageService} from './services/language/language.service';
import { DescriptionComponent } from './components/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirPageComponent,
    PageComponent,
    PlayerComponent,
    ProgressBarComponent,
    LastPageComponent,
    FooterComponent,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
