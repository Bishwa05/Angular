import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

/**
 * ng generate module app-routing --flat --module=app
 * 
 * First, AppRoutingModule imports RouterModule and Routes so the app can have routing functionality. 
 * The next import, HeroesComponent, will give the Router somewhere to go once you configure the routes.
 * 
 */

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

/**
 * The method is called forRoot() because you configure the router at the application's root level. 
 * The forRoot() method supplies the service providers and directives needed for routing, 
 * and performs the initial navigation based on the current browser URL.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }