import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ProfileRoutingModule, SharedModule
  ]
})
export class ProfileModule { }

