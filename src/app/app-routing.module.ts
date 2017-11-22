import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from 'app/test/test.component';
import { Test2Component } from 'app/test2/test2.component';
import { ParamTestComponent } from 'app/param-test/param-test.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';


const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'test2', component: Test2Component},
  {path: 'test2/:id', component: ParamTestComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'documents', loadChildren:'app/documents/documents.module#DocumentsModule'},  
  {path: 'admin', loadChildren:'app/admin/admin.module#AdminModule'},  
  {path: '', redirectTo: '/test',  pathMatch: 'full'}
  // {    
  //   path: '',
  //   children: []
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
