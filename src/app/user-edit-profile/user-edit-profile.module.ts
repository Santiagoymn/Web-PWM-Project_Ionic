import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEditProfilePageRoutingModule } from './user-edit-profile-routing.module';

import { UserEditProfilePage } from './user-edit-profile.page';
import {HeaderPageModule} from '../header/header.module';
import {FooterPageModule} from '../footer/footer.module';
import {UserNotLoggedMessagePageModule} from '../user-not-logged-message/user-not-logged-message.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserEditProfilePageRoutingModule,
        HeaderPageModule,
        FooterPageModule,
        ReactiveFormsModule,
        UserNotLoggedMessagePageModule
    ],
  declarations: [UserEditProfilePage]
})
export class UserEditProfilePageModule {}
