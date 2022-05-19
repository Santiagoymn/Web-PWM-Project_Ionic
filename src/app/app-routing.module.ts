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
    loadChildren: () => import('./carrusel/carrusel.module').then( m => m.CarruselPageModule)
  },
  {
    path: 'home-page-categories',
    loadChildren: () => import('./home-page-categories/home-page-categories.module').then( m => m.HomePageCategoriesPageModule)
  },
  {
    path: 'home-page-about-us',
    loadChildren: () => import('./home-page-about-us/home-page-about-us.module').then( m => m.HomePageAboutUsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registered-succesful',
    loadChildren: () => import('./register-message/register-message.module').then( m => m.RegisterMessagePageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module')
      .then( m => m.UserProfilePageModule)
  },
  {
    path: 'actividad',
    loadChildren: () => import('./activity-page/activity-page-information/activity-page-information.module')
      .then( m => m.ActivityPageInformationPageModule)
  },
  {
    path: 'user-not-logged-message',
    loadChildren: () => import('./user-not-logged-message/user-not-logged-message.module').then( m => m.UserNotLoggedMessagePageModule)
  },
  {
    path: 'activity-page-empresas',
    // eslint-disable-next-line max-len
    loadChildren: () => import('./activity-page/activity-page-empresas/activity-page-empresas.module').then(m => m.ActivityPageEmpresasPageModule)
  },
  {
    path: 'user-edit-profile',
    loadChildren: () => import('./user-edit-profile/user-edit-profile.module').then( m => m.UserEditProfilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
