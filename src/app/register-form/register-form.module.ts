import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormPageRoutingModule } from './register-form-routing.module';

import { RegisterFormPage } from './register-form.page';
import {AngularFireDatabase} from '@angular/fire/compat/database';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormPageRoutingModule,
    ReactiveFormsModule
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
