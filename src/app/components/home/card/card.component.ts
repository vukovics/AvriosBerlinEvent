import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SingleEvent } from '../../../models/EventList.model';
import { addNewEvent, removeEvent } from '../../../utils/storage';
import { DialogEventDetailsDialog } from '../../dialogs/event-details.dialog';
import { NotificationComponent } from '../../shared/notification/notification.component';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() event?: any;
  @Input() isFavorites?: boolean;
  @Output() removeFavEventEmitter = new EventEmitter();
  durationInSeconds: number = 5;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(NotificationComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  saveFavEvent(event: SingleEvent): void {
    addNewEvent(event);
    this.openSnackBar();
  }

  removeFavEvent(event: SingleEvent): void {
    const events = removeEvent(event);
    this.removeFavEventEmitter.emit(events);
  }

  openDialog(event: any): void {
    this.dialog.open(DialogEventDetailsDialog, {
      data: event,
      width: '25rem',
    });
  }
}
