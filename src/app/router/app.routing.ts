import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from '../components/welcome/welcome.component';
import { AddGeoCacheComponent } from '../components/add-geo-cache/add-geo-cache.component';
import { ViewAllCachesComponent } from '../components/view-all-caches/view-all-caches.component';
import { ViewDetailComponent } from '../components/view-detail/view-detail.component';
import { AboutComponent } from '../components/about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'add',
    component: AddGeoCacheComponent
  },
  {
    path: 'viewall',
    component: ViewAllCachesComponent
  },
  {
    path: 'view/:id',
    component: ViewDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
