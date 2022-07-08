import { Pipe, PipeTransform } from '@angular/core';
import { EventList } from '../models/EventList.model';

@Pipe({ name: 'eventFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: EventList[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it: any) => {
      return it.rss_titel.toLocaleLowerCase().includes(searchText);
    });
  }
}
