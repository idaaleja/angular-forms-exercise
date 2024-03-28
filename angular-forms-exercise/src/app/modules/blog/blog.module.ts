import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  // declarations: [BlogListComponent, BlogFormComponent],
  declarations:[BlogListComponent, BlogFormComponent],
  imports: [
    CommonModule, BlogRoutingModule, SharedModule
  ]
})
export class BlogModule { }
