import { Injectable } from '@angular/core';

@Injectable()
export class DocsService {

  constructor() { 

  }

  getMessage() : string {
    return "this is a message from an angular service";
  }

}
