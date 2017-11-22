import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { HhAdminComponent } from './hh-admin/hh-admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [UserAdminComponent, HhAdminComponent],
  exports: [UserAdminComponent, HhAdminComponent]
})
export class AdminModule { }
