import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-param-test',
  templateUrl: './param-test.component.html',
  styleUrls: ['./param-test.component.css']
})
export class ParamTestComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('id = ' + this.activeRoute.snapshot.params["id"]);
    console.log('queryParamMap = ' + this.activeRoute.snapshot.queryParamMap.get("test"));
    console.log('queryParams = ' + this.activeRoute.snapshot.queryParams["test"]);
  }

  launchWindow() {
    window.location.href = window.location.href + "?test=_adding more characters";
  }
}
