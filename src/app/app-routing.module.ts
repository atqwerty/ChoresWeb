import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/authGuardService/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main/main.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/logreg', pathMatch: 'full' },
  // { path: 'logreg', redirectTo: '/logreg', pathMatch: 'full' },
  // { path: 'main', redirectTo: '/main', pathMatch: 'full' },
  { path: '404', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
