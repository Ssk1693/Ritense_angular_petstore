import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  constructor() { }
  getStatus():Observable<Status[]>{
    return of([
    {status:'available',isDefault:true},
    {status:'pending',isDefault:false},
    {status:'sold',isDefault:false},
    
    ]);
       }
}
