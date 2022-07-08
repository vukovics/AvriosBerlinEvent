import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventList } from '../models/EventList.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private httpClient: HttpClient) {}

  allEventUrl: string =
    'https://www.berlin.de/sen/web/service/maerkte-feste/strassen-volksfeste/index.php/index/all.json?q=';

  getEvents(): Observable<EventList> {
    return this.httpClient.get<EventList>(this.allEventUrl);
  }
}
