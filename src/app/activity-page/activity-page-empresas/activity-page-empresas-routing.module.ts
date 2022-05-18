import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityPageEmpresasPage } from './activity-page-empresas.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityPageEmpresasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityPageEmpresasPageRoutingModule {}
