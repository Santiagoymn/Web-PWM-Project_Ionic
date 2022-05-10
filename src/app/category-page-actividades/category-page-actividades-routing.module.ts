import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryPageActividadesPage } from './category-page-actividades.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryPageActividadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadesPageActividadesPageRoutingModule {}
