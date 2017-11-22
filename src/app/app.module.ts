import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

/* App Root */
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestService } from 'app/test.service';
import { Test2Component } from "app/test2/test2.component";
import { ParamTestComponent } from './param-test/param-test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetBaseComponent } from './widget-base/widget-base.component';
import { Widget1Component } from './widget1/widget1.component';
import { WidgetDirectiveDirective } from './widget-directive.directive';
import { Widget2Component } from './widget2/widget2.component';
import { SteveWidgetComponent } from './steve-widget/steve-widget.component';
import { Widget3Component } from './widget3/widget3.component';
import { Widget4Component } from './widget4/widget4.component';
import { DemoWidgetComponent } from './demo-widget/demo-widget.component';

/* Feature Modules */
//import { DocumentsModule } from 'app/documents/documents.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    ParamTestComponent,
    DashboardComponent,
    WidgetBaseComponent,
    Widget1Component,
    WidgetDirectiveDirective,
    Widget2Component,
    SteveWidgetComponent,
    Widget3Component,
    Widget4Component,
    DemoWidgetComponent
  ],
  entryComponents: [TestComponent, Widget1Component, Widget2Component, 
    SteveWidgetComponent, Widget3Component, Widget4Component, DemoWidgetComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //DocumentsModule,
    AppRoutingModule
  ],  
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
