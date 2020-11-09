import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialUIModule} from "./material-ui/material-ui.module";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { NamePipe } from './pipes/name.pipe'
import { BooksEffects } from './store/effects/books.effects';
import {HttpClientModule} from "@angular/common/http";
import { TruncateStringPipe } from './pipes/truncate-string.pipe';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { ModalComponent } from './components/modal/modal.component';
//Reducers
import * as auth from './store/reducers/auth.reducer';
import * as books from './store/reducers/books.reducer';
import * as wishlist from './store/reducers/wishlist.reducer';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    WishlistComponent,
    LoginFormComponent,
    NavbarComponent,
    NamePipe,
    SearchListComponent,
    BookCardComponent,
    TruncateStringPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUIModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      auth: auth.reducer,
      books: books.reducer,
      wishlist: wishlist.reducer
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([BooksEffects])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
