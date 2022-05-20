import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityPageInformationPageRoutingModule } from './activity-page-information-routing.module';

import { ActivityPageInformationPage } from './activity-page-information.page';
import {ActivityPageEmpresasPageModule} from '../activity-page-empresas/activity-page-empresas.module';
import {HeaderPageModule} from '../../header/header.module';
import {FooterPageModule} from '../../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityPageInformationPageRoutingModule,
    ActivityPageEmpresasPageModule,
    HeaderPageModule,
    FooterPageModule
  ],
  declarations: [ActivityPageInformationPage]
})
export class ActivityPageInformationPageModule {}
