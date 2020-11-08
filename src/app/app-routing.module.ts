import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {SearchComponent} from "./pages/search/search.component";
import {WishlistComponent} from "./pages/wishlist/wishlist.component";


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'wishlist', component: WishlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
