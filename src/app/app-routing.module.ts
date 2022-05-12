import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'register-form',
    loadChildren: () => import('./register-form/register-form.module').then( m => m.RegisterFormPageModule)
  },
  {
    path: 'category-page-actividades',
    loadChildren: () => import('./category-page-actividades/category-page-actividades').then(m => m.ActividadesPageActividadesPageModule)
  },
  {
    path: 'carrusel',
    loadChildren: () => import('./carrusel/carrusel.module').then( m => m.CarruselPageModule)
  },
  {
    path: 'home-page-categories',
    loadChildren: () => import('./home-page-categories/home-page-categories.module').then( m => m.HomePageCategoriesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
