import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimateService {
  private _routeChange:BehaviorSubject<boolean> = new BehaviorSubject(false);
  routeChange = this._routeChange.asObservable();

  constructor() { }

  setRouteChange(change:boolean){
    this._routeChange.next(change);
  }
}
