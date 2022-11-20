import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: "home",
    component:HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: 'login',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'auth',
    component:AuthComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
