import { Component, OnInit, Input } from '@angular/core';
import { TestService } from "app/test.service";
import { IManualAsset } from "app/imanual-asset";
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  assets: IManualAsset[];
  advisorCompanyName: string;
  @Input() message: string = 'testimg';

  constructor(private _testSvc: TestService) { }

  ngOnInit() {
  }

  getManualAssetTypes() {
    alert('hello');
    this._testSvc.getManualAssetTypes().subscribe(
      result => {
        console.log(result);
        this.assets = result;
        console.log(this.assets);
      });
    alert('bye');
  }

  getAdvisorCompanyName() {    
    this._testSvc.getAdvisorCompanyName()
    .subscribe(      
      result => {     
        this.advisorCompanyName = result;
      },
      // display error
      e => this.advisorCompanyName = "there was a " + e,
    );    
  }  
}
