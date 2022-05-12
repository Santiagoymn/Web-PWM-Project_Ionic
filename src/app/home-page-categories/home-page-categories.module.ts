import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageCategoriesPageRoutingModule } from './home-page-categories-routing.module';

import { HomePageCategoriesPage } from './home-page-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageCategoriesPageRoutingModule
  ],
  exports: [
    HomePageCategoriesPage
  ],
  declarations: [HomePageCategoriesPage]
})
export class HomePageCategoriesPageModule {}
