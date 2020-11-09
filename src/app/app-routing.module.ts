import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {SearchComponent} from "./pages/search/search.component";
import {WishlistComponent} from "./pages/wishlist/wishlist.component";
import {AuthGuardService} from "./services/auth-guard.service";


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuardService] },
  { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
