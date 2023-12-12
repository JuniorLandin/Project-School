import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsersMaterialModule } from 'src/app/shared/material/users-mat.module';
import { MyConquestsComponent } from './my-conquests/my-conquests.component';
import { MyDisciplinesComponent } from './my-disciplines/my-disciplines.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';


@NgModule({
  declarations: [
    UsersComponent,
    MyProfileComponent,
    MyConquestsComponent,
    MyDisciplinesComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UsersMaterialModule
  ]
})
export class UsersModule { }
