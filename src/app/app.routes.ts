import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/heroes/pages/layout/layout.component').then(m => m.LayoutComponent)
      },
      {
        path: 'hero',
        loadComponent: () => import('./pages/heroes/pages/hero/hero.component').then(m => m.HeroComponent)
      },
      {
        path: 'new',
        loadComponent: () => import('./pages/heroes/pages/new/new.component').then(m => m.NewComponent)
      },
      {
        path: 'list',
        loadComponent: () => import('./pages/heroes/pages/list/list.component').then(m => m.ListComponent)
      },
      {
        path: 'search',
        loadComponent: () => import('./pages/heroes/pages/search/search.component').then(m => m.SearchComponent)
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
  },
];
