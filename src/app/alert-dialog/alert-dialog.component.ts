import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export enum AlertTypes {
  ALERT = "alert",
  SUCCESS = "success",
  CONFIRM = "confirm",
  INFO = "info",
  WARN = "warn"
}

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {

  public types: typeof AlertTypes = AlertTypes;

  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  // On Click Close
  onClickClose() {
    this.dialogRef.close();
  }

  // On Click Okay
  onClickOk() {
    this.dialogRef.close(true);
  }

}
