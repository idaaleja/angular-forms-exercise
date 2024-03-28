import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  handleAction(actionType: string) {
    switch (actionType) {
      case 'add':
        // Handle Add Action
        break;
      case 'deleteAll':
        // Handle Delete All Action
        break;
      default:
        break;
    }
  }
  
}
