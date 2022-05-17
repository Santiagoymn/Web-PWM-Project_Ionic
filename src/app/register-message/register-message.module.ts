import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterMessagePageRoutingModule } from './register-message-routing.module';

import { RegisterMessagePage } from './register-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterMessagePageRoutingModule
  ],
  declarations: [RegisterMessagePage]
})
export class RegisterMessagePageModule {}
