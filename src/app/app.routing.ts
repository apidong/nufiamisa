import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Import Containers
import { CommonModule } from '@angular/common';
import { P404Component } from './views/errors/p404/p404.component';
import { P500Component } from './views/errors/p500/p500.component';
import { DefaultLayoutComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'prefix',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
      },

    ]
  },
  { path: '**', component: P404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true }), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
