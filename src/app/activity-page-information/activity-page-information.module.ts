import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityPageInformationPageRoutingModule } from './activity-page-information-routing.module';

import { ActivityPageInformationPage } from './activity-page-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityPageInformationPageRoutingModule
  ],
  declarations: [ActivityPageInformationPage]
})
export class ActivityPageInformationPageModule {}
