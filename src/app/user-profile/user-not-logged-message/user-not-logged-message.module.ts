import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserNotLoggedMessagePageRoutingModule } from './user-not-logged-message-routing.module';

import { UserNotLoggedMessagePage } from './user-not-logged-message.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserNotLoggedMessagePageRoutingModule
    ],
    exports: [
        UserNotLoggedMessagePage
    ],
    declarations: [UserNotLoggedMessagePage]
})
export class UserNotLoggedMessagePageModule {}
