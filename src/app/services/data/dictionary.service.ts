import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { BaseDataService } from '../abstract/base.data.service';
import { PopupService } from '../notification/popup.service';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService extends BaseDataService<any> {

  constructor(private popupService: PopupService) {
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
      map((data) => data.data),
      catchError((err, caught) => {
        this.popupService.notifyError("Failed to receive response from simpleserver. Check if it's runnning");
        return [];
      })
    );

  }




}
