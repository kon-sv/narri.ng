import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BaseDataService } from './abstract/base.data.service';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService extends BaseDataService<any> {

  constructor() {
    super('dictionary');
  }

  // public override getData(endpoint?: string): Observable<any> {
  //   return super.getData('index')
  // }


  /**
   * getIndexData
   */
  public getIndexData() {
    return this.getData('index').pipe(
      map((data) => data.data)
    );

  }




}
