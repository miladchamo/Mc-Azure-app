import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IManualAsset } from "app/imanual-asset";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TestService {
  imanualAssets: IManualAsset[];
  companyName: string;

  constructor(private _http: Http) { }

  getManualAssetTypes(): Observable<IManualAsset[]> {
    let headers = new Headers({ Accept: "application/json;V=1, text/javascript" });
    let options = new RequestOptions({ headers: headers });

    return this._http      
      .get('url', options)
      // Call map on the response observable to get the parsed people object
      .map((response: Response) => {
        console.log('response.json = ' + response.json());
        this.imanualAssets = <IManualAsset[]>response.json();
        console.log('imanualAssets = ' + this.imanualAssets);

        return this.imanualAssets;

      });

  }

  getAdvisorCompanyName(): Observable<string> {
    const defaultError = 'There was an error fetching name';

      return this._http
      .get('url')
      .map((response: Response) => {
        return this.companyName = response.json();
      })            
      .catch(this.handleError);      
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
