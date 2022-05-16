import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageAboutUsPage } from './home-page-about-us.page';

const routes: Routes = [
  {
    path: '',
    component: HomePageAboutUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageAboutUsPageRoutingModule {}
