import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityPageInformationPage } from './activity-page-information.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityPageInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityPageInformationPageRoutingModule {}
