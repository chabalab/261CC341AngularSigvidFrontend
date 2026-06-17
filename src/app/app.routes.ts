import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Catalogo } from './components/catalogo/catalogo';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'catalogo', component: Catalogo },
];