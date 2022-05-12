import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLite } from '@ionic-native/sqlite/ngx';
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
import {ActividadesPageActividadesPageModule} from './category-page-actividades/category-page-actividades';
import {FooterPageModule} from './footer/footer.module';
import {CarruselPage} from "./carrusel/carrusel.page";
import {HomePageCategoriesPageModule} from "./home-page-categories/home-page-categories.module";

@NgModule({
    declarations: [AppComponent, CarruselPage],
  entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        RegisterFormPageModule,
        ActividadesPageActividadesPageModule,
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment),
        FooterPageModule,
        AngularFireAnalyticsModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        HomePageCategoriesPageModule
    ],
  providers: [SQLite, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule {}

/*@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AlertModule,
    AngularFireAuthModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],

})*/
