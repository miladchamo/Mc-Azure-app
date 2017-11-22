import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentSearchComponent } from './document-search/document-search.component';
import { DocsService } from './docs.service';

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule
  ],
  providers: [DocsService],
  declarations: [DocumentListComponent, DocumentSearchComponent],
  exports: [DocumentListComponent, DocumentSearchComponent],
})
export class DocumentsModule { }
export {DocumentListComponent, DocumentSearchComponent}