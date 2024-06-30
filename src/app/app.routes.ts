import {Routes} from '@angular/router';
import {LayoutComponent} from "./pages/heroes/pages/layout/layout.component";
import {LayoutComponent as authLayoutComponent} from "./pages/auth/layout/layout.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: LayoutComponent, // This is need to have a second router-outlet different to the login/register pages.
    children: [
      {
        path: 'hero',
        loadComponent: () => import('./pages/heroes/pages/hero/hero.component').then(m => m.HeroComponent)
      },
      {
        path: 'new',
        loadComponent: () => import('./pages/heroes/pages/new/new.component').then(m => m.NewComponent)
      },
      {
        path: 'edit/:id',
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
      {
        path: ':id',
        loadComponent: () => import('./pages/heroes/pages/hero/hero.component').then(m => m.HeroComponent)
      },
      {path: '**', redirectTo: 'list'}
    ]
  },
  {
    path: 'auth',
    component: authLayoutComponent,
    children: [
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
        redirectTo: 'register'
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
  },
];
