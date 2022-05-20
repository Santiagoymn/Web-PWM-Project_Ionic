import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RegisterFormPageModule} from './register-form/register-form.module'; // plugins
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../environments/environment';
import {AngularFireAnalyticsModule} from '@angular/fire/compat/analytics';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {CategoryPageActividadesPageModule} from './category-page-actividades/category-page-actividades';
import {FooterPageModule} from './footer/footer.module';
import {CarruselPage} from './home/carrusel/carrusel.page';
import {HomePageCategoriesPageModule} from './home/home-page-categories/home-page-categories.module';
import {HomePageAboutUsPageModule} from './home/home-page-about-us/home-page-about-us.module';
import {HeaderPageModule} from './header/header.module';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@NgModule({
  declarations: [AppComponent, CarruselPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RegisterFormPageModule,
    CategoryPageActividadesPageModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment),
    FooterPageModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HomePageCategoriesPageModule,
    HomePageAboutUsPageModule,
    HeaderPageModule,
  ],
  providers: [SQLite, {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
  exports: [
    CarruselPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
