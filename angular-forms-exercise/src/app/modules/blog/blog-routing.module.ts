import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogModule } from './blog.module';
import { BlogListComponent } from './pages/blog-list/blog-list.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'blog',
    // pathMatch: 'full'
    component: BlogListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
