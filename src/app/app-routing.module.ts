import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FadeInComponent } from './fade-in/fade-in.component';
import { ImgAnimationComponent } from './img-animation/img-animation.component';
import { ImgAnimation2Component } from './img-animation2/img-animation2.component';
import { StackedImgComponent } from './stacked-img/stacked-img.component';

const routes: Routes = [
  { path: 'fade', component: FadeInComponent },
  { path: 'animation1', component: ImgAnimationComponent },
  { path: 'animation2', component: ImgAnimation2Component },
  { path: 'stack', component: StackedImgComponent },
  { path: '', redirectTo:'/fade', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
