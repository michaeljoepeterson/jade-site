import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomePageComponent, data:{animation:'leftSwipe'} },
  { path: 'products', component: DetailsPageComponent,data:{animation:'rightSwipe'} },
  { path: 'logos', component: DetailsPageComponent,data:{animation:'rightSwipe'} },
  { path: 'posters', component: DetailsPageComponent,data:{animation:'rightSwipe'} },
  { path: 'illustrations', component: DetailsPageComponent,data:{animation:'rightSwipe'} },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }