import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAdminComponent } from "./user-admin/user-admin.component";
import { HhAdminComponent } from "./hh-admin/hh-admin.component";

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'user-admin', component: UserAdminComponent },
  { path: 'hh-admin', component: HhAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
