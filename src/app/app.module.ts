import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FadeInComponent } from './fade-in/fade-in.component';
import { ImgAnimationComponent } from './img-animation/img-animation.component';
import { ImgAnimation2Component } from './img-animation2/img-animation2.component';
import { StackedImgComponent } from './stacked-img/stacked-img.component';

@NgModule({
  declarations: [
    AppComponent,
    FadeInComponent,
    ImgAnimationComponent,
    ImgAnimation2Component,
    StackedImgComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
