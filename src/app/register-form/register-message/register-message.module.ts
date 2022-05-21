import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterMessagePageRoutingModule } from './register-message-routing.module';

import { RegisterMessagePage } from './register-message.page';
import {HeaderPageModule} from "../../header/header.module";
import {FooterPageModule} from "../../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterMessagePageRoutingModule,
    HeaderPageModule,
    FooterPageModule
  ],
  declarations: [RegisterMessagePage]
})
export class RegisterMessagePageModule {}
