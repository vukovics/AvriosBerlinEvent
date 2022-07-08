import { Component, OnInit } from '@angular/core';
import { EventList } from '../../models/EventList.model';
import { getFavoriteEvents } from '../../utils/storage';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favoriteEvents?: any;
  searchText: string = '';

  ngOnInit(): void {
    this.favoriteEvents = getFavoriteEvents();
  }

  removeFavEvent($event: EventList): void {
    this.favoriteEvents = $event;
  }
}
