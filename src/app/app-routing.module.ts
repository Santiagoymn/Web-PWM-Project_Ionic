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
    path: 'register',
    loadChildren: () => import('./register-form/register-form.module').then( m => m.RegisterFormPageModule)
  },
  {
    path: 'category-page-actividades',
    loadChildren: () => import('./category-page-actividades/category-page-actividades').then(m => m.CategoryPageActividadesPageModule)
  },
  {
    path: 'carrusel',
    loadChildren: () => import('./home/carrusel/carrusel.module').then(m => m.CarruselPageModule)
  },
  {
    path: 'home-page-categories',
    loadChildren: () => import('./home/home-page-categories/home-page-categories.module').then(m => m.HomePageCategoriesPageModule)
  },
  {
    path: 'home-page-about-us',
    loadChildren: () => import('./home/home-page-about-us/home-page-about-us.module').then(m => m.HomePageAboutUsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registered-succesful',
    loadChildren: () => import('./register-form/register-message/register-message.module').then(m => m.RegisterMessagePageModule)
  },
  {
    path: 'actividad',
    loadChildren: () => import('./activity-page/activity-page-information/activity-page-information.module')
      .then( m => m.ActivityPageInformationPageModule)
  },
    {
    path: 'user-edit-profile',
    loadChildren: () => import('./user-edit-profile/user-edit-profile.module').then( m => m.UserEditProfilePageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'favourites-list',
    loadChildren: () => import('./favourites-list/favourites-list.module').then( m => m.FavouritesListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
