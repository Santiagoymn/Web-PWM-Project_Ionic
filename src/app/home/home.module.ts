import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {HomePageCategoriesPageModule} from '../home-page-categories/home-page-categories.module';
import {CarruselPage} from '../carrusel/carrusel.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HomePageCategoriesPageModule
  ],
  exports: [
    HomePage
  ],
  declarations: [HomePage, CarruselPage]
})
export class HomePageModule {}
