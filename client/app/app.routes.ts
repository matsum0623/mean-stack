import { Routes } from '@angular/router';
import { HomeComponent } from './home';
//import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
//  { path: 'users', loadChildren: './users#UsersModule' },
//  { path: 'posts', loadChildren: './posts#PostsModule' },
  { path: '**',    component: NoContentComponent },
];