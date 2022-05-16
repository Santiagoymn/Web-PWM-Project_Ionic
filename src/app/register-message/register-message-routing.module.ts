import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterMessagePage } from './register-message.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterMessagePageRoutingModule {}
