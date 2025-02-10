import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../../app.config";
import { inject } from "@angular/core";
import { Observable } from "rxjs";

export abstract class BaseDataService<T> {
  protected baseUrl: string = inject(BASE_URL);
  protected http: HttpClient = inject(HttpClient);
  protected resouce?: string


  constructor(resource?: string) {
    this.resouce = resource;
  }


  private resourceUrl(path?: string) {
    const url = path ?? this.resouce;
    const resource = this.resouce ? `/${this.resouce}` : '';
    return `${this.baseUrl}${resource}/${url}`;
  }

  public getData(endpoint?: string): Observable<T> {
    return this.http.get<T>(this.resourceUrl(endpoint))
  }


}
