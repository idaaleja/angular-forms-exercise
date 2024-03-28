import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookFormComponent } from './pages/book-form/book-form.component';
// import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    BookListComponent,
    BookFormComponent  ],
  imports: [
    CommonModule,
    // BookRoutingModule,
    SharedModule
  ]
})
export class BookModule { }


