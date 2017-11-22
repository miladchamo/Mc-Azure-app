import { Component, OnInit, Input } from '@angular/core';
import { WidgetDirectiveDirective } from "app/widget-directive.directive";
import { AddWidget } from "app/add-widget";

@Component({
  selector: 'app-widget-base',
  templateUrl: './widget-base.component.html',
  styleUrls: ['./widget-base.component.css']
})
export class WidgetBaseComponent implements OnInit {  
  
  @Input() component: AddWidget;

  constructor() {
  }

  ngOnInit() {
  }

}
