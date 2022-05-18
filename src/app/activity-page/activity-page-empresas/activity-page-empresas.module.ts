import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityPageEmpresasPageRoutingModule } from './activity-page-empresas-routing.module';

import { ActivityPageEmpresasPage } from './activity-page-empresas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityPageEmpresasPageRoutingModule
  ],
  exports: [
    ActivityPageEmpresasPage
  ],
  declarations: [ActivityPageEmpresasPage]
})
export class ActivityPageEmpresasPageModule {}
