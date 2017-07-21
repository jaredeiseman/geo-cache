import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from '../components/welcome/welcome.component';
import { AddGeoCacheComponent } from '../components/add-geo-cache/add-geo-cache.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'add',
    component: AddGeoCacheComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
