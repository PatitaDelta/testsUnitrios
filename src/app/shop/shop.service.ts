import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

type Item = {
  id: string
  name: string
}

@Injectable({
  providedIn: 'root'
})

export class ShopService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<[Item]> {
    const items = new Subject<[Item]>();
    items.next([{ id: '1A', name: 'Item 1', }]);
    return items.asObservable();
  }
}
