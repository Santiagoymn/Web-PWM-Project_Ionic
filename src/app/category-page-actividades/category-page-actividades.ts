import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadesPageActividadesPageRoutingModule } from './category-page-actividades-routing.module';

import { CategoryPageActividadesPage } from './category-page-actividades.page';
import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadesPageActividadesPageRoutingModule,
    HeaderPageModule,
    FooterPageModule
  ],
  exports: [
    CategoryPageActividadesPage
  ],
  declarations: [CategoryPageActividadesPage]
})
export class CategoryPageActividadesPageModule {}
