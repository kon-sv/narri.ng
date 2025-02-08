import { Injectable } from '@angular/core';
import * as jmdictJson from '../../../public/JMdict_e.json';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() {

  }


  getData() {
    return of(jmdictJson);
  }


}
