import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'blog',    
    loadChildren: () => import('./modules/blog/blog.module').then((m) => m.BlogModule)
  },
  {
    path: 'bookForm',    
    loadChildren: () => import('./modules/book/book.module').then((m) => m.BookModule)
  },
  {
    path: 'profile',    
    loadChildren: () => import('./modules/profile/profile.module').then((m) => m.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
