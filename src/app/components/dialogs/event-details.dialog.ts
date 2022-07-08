import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'event-details-dialog',
  templateUrl: './event-details-dialog.html',
})
export class DialogEventDetailsDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogEventDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public event: any
  ) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
