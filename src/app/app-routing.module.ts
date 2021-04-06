import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { IllustrationsComponent } from './pages/illustrations/illustrations.component';
import { PostersComponent } from './pages/posters/posters.component';
import { LogosComponent } from './pages/logos/logos.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomePageComponent, data:{animation:'leftSwipe'} },
  { path: 'products', component: ProductsComponent,data:{animation:'rightSwipe'} },
  { path: 'logos', component: LogosComponent,data:{animation:'rightSwipe'} },
  { path: 'posters', component: PostersComponent,data:{animation:'rightSwipe'} },
  { path: 'illustrations', component: IllustrationsComponent,data:{animation:'rightSwipe'} },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }