import { Component, OnInit } from '@angular/core';
import { Widget1Component } from "app/widget1/widget1.component";
import { Widget2Component } from "app/widget2/widget2.component";
import { TestComponent } from "app/test/test.component";
import { SteveWidgetComponent } from "app/steve-widget/steve-widget.component";
// import { WidgetBaseComponent } from "app/widget-base/widget-base.component";
import { AddWidget } from "app/add-widget";
import { Widget3Component } from "app/widget3/widget3.component";
import { Widget4Component } from "app/widget4/widget4.component";
import { DemoWidgetComponent } from "app/demo-widget/demo-widget.component";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//widgets: Widget1Component[];
widgets: AddWidget[];

  constructor() { }

  ngOnInit() {
    this.widgets = this.getWidgets();
  }

  getWidgets() {
    //let widget = new WidgetBaseComponent(Widget1Component);
  
    return [ 
      new AddWidget(Widget1Component),
      new AddWidget(Widget2Component),
      new AddWidget(TestComponent),
      new AddWidget(SteveWidgetComponent),
      new AddWidget(Widget3Component),
      new AddWidget(Widget4Component),
      new AddWidget(DemoWidgetComponent)
    ];
  }
}
