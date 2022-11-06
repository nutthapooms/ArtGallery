import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { imageArray} from './model'
@Injectable()
export class ApiCallService {
  constructor(
    // Angular Modules
    private http: HttpClient
  ) {}
  public get(url: string, options?: any) {
    return this.http.get<imageArray>(url, {
      responseType: 'json'
    });
  }
 
}
