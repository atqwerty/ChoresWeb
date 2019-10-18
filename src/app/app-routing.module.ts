import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module')
      .then(mod => mod.MainModule)
  },
  {
    path: 'logreg',
    loadChildren: () => import('./auth/auth.module')
    .then(mod => mod.AuthModule)
  },
  {
    path: '',
    redirectTo: '/logreg',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
