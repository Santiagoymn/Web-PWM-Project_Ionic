import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserNotLoggedMessagePage } from './user-not-logged-message.page';

const routes: Routes = [
  {
    path: '',
    component: UserNotLoggedMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserNotLoggedMessagePageRoutingModule {}
