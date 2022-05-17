import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormPageRoutingModule } from './register-form-routing.module';

import { RegisterFormPage } from './register-form.page';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormPageRoutingModule,
    ReactiveFormsModule,
    HeaderPageModule,
    FooterPageModule
  ],
  exports: [
    RegisterFormPage
  ],
  declarations: [RegisterFormPage],
  providers: [
    AngularFireDatabase,
  ]
})
export class RegisterFormPageModule {}
