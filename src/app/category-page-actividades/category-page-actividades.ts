import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadesPageActividadesPageRoutingModule } from './category-page-actividades-routing.module';

import { CategoryPageActividadesPage } from './category-page-actividades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadesPageActividadesPageRoutingModule
  ],
  declarations: [CategoryPageActividadesPage]
})
export class ActividadesPageActividadesPageModule {}
