import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {HomePageCategoriesPageModule} from '../home-page-categories/home-page-categories.module';
import {HomePageAboutUsPageModule} from '../home-page-about-us/home-page-about-us.module';
import {CarruselPage} from '../carrusel/carrusel.page';
import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        HomePageCategoriesPageModule,
        HomePageAboutUsPageModule,
        HeaderPageModule,
        FooterPageModule
    ],
  declarations: [HomePage, CarruselPage]
})
export class HomePageModule {}
