import { Component, OnInit } from '@angular/core';
import { Abstraction } from '../abstraction';
import { AddWidget } from "app/add-widget";

@Component({
  selector: 'app-widget4',
  templateUrl: './widget4.component.html',
  styleUrls: ['./widget4.component.css']
})
export class Widget4Component extends Abstraction implements OnInit {
  public message:string;
  constructor() {            
    super("Widget4");
  }

  myFunc(input : string) : string {
    return "hello => " + input;
  };

  ngOnInit() {
    this.message = super.test("messgae is = ");
  }

}
