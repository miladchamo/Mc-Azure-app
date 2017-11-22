import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentSearchComponent } from './document-search/document-search.component';

const routes: Routes = [  
      { path: '', redirectTo: 'document-list', pathMatch: 'full' },      
      { path: 'document-list', component: DocumentListComponent },
      { path: 'document-search', component: DocumentSearchComponent }
    ]
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
