import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageAboutUsPageRoutingModule } from './home-page-about-us-routing.module';

import { HomePageAboutUsPage } from './home-page-about-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageAboutUsPageRoutingModule
  ],
  exports: [
    HomePageAboutUsPage
  ],
  declarations: [HomePageAboutUsPage]
})
export class HomePageAboutUsPageModule {}
