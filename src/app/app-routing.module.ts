import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FadeInComponent } from './fade-in/fade-in.component';
import { ImgAnimationComponent } from './img-animation/img-animation.component';

const routes: Routes = [
  { path: 'fade', component: FadeInComponent },
  { path: 'animation1', component: ImgAnimationComponent },
  { path: '', redirectTo:'/fade', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
