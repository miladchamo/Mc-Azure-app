import { Component, OnInit, Directive, ViewContainerRef, ComponentFactoryResolver, ViewChild, ComponentRef } from '@angular/core';
import { TestComponent } from 'app/test/test.component';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
//@ViewChild(ComponentRef) widget: ComponentRef<Component>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {
  }


  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(TestComponent);
    
    // loads a component
    const ref = this.viewContainerRef.createComponent(factory);
    //this.widget.viewContainerRef.createComponent(factory);

    // sets change detection
    ref.changeDetectorRef.detectChanges();
    
    // sets a property on a dynamically loaded component
    ref.instance.message = "my test";
  }


}
