import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { BookFormComponent } from './modules/book/pages/book-form/book-form.component';
import { BookListComponent } from './modules/book/pages/book-list/book-list.component';
import { SharedModule } from './shared/shared.module';
import { ProfileComponent } from './modules/profile/pages/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    // ProfileComponent,
    // BookFormComponent,
    // BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
