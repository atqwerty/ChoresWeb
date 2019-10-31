import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/authGuardService/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/logreg', pathMatch: 'prefix' },
  { path: 'main', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
