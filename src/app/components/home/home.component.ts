import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  eventList$?: Observable<any>;
  searchText: string = '';

  constructor(private eventService: EventService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.eventList$ = this.eventService.getEvents();
  }
}
