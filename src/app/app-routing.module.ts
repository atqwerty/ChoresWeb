import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/authGuardService/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main/main.component';


const routes: Routes = [
  // { path: '', redirectTo: '/logreg', pathMatch: 'full' },
  // { path: 'logreg', redirectTo: '/logreg', pathMatch: 'full' },
  // { path: 'main', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }