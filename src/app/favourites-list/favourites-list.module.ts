import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouritesListPageRoutingModule } from './favourites-list-routing.module';

import { FavouritesListPage } from './favourites-list.page';
import {FooterPageModule} from '../footer/footer.module';
import {HeaderPageModule} from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouritesListPageRoutingModule,
    FooterPageModule,
    HeaderPageModule
  ],
  declarations: [FavouritesListPage]
})
export class FavouritesListPageModule {}
