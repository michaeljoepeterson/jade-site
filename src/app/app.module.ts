import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JadedButtonComponent } from './components/jaded-button/jaded-button.component';
import { JadedDragCardComponent } from './components/jaded-drag-card/jaded-drag-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { JadedIconButtonComponent } from './components/jaded-icon-button/jaded-icon-button.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { PostersComponent } from './pages/posters/posters.component';
import { IllustrationsComponent } from './pages/illustrations/illustrations.component';
import { LogosComponent } from './pages/logos/logos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    JadedButtonComponent,
    JadedDragCardComponent,
    NavbarComponent,
    FooterComponent,
    JadedIconButtonComponent,
    DetailsPageComponent,
    ProductsComponent,
    PostersComponent,
    IllustrationsComponent,
    LogosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
