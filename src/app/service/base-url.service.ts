import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseURLService {

  constructor() { }
  public BASE_URL = window["cfgApiBaseUrl"]+"/api";
}
