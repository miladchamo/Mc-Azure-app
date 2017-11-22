import { Component, OnInit } from '@angular/core';
import { DocsService } from '../docs.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  constructor(private _docService: DocsService) { }
  
  message = 'hello';

  ngOnInit() {
    //this.message = 'Welcome to the Document List!!!';
    this.message = this._docService.getMessage();
  }

}
