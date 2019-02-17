import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdministrationComponent } from './administration/administration.component';
import { HomeComponent } from './home/home.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { HeaderAdmComponent } from './header-adm/header-adm.component';
import { FooterHomeComponent } from './footer-home/footer-home.component';
import { FooterAdmComponent } from './footer-adm/footer-adm.component';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';
import { NavigationAdmComponent } from './navigation-adm/navigation-adm.component';
import { CanteenMenuComponent } from './canteen-menu/canteen-menu.component';

/*** Services */
import { ApiService } from './_services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ConnexionComponent,
    AdministrationComponent,
    HomeComponent,
    HeaderHomeComponent,
    HeaderAdmComponent,
    FooterHomeComponent,
    FooterAdmComponent,
    NavigationHomeComponent,
    NavigationAdmComponent,
    CanteenMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
