import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FadeInComponent } from './fade-in/fade-in.component';

const routes: Routes = [
  { path: 'fade', component: FadeInComponent },
  { path: '', redirectTo:'/fade', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
