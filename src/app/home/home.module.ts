import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {AppModule} from '../app.module';
import {HomePageCategoriesPageModule} from '../home-page-categories/home-page-categories.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AppModule,
    HomePageCategoriesPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
