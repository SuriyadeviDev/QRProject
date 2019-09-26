import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import {KendoListingComponent} from './kendo-listing/kendo-listing.component'
@Injectable({
  providedIn: 'root'
})
export class PwaServiceService {

  constructor(public http:HttpClient,  public dialog: MatDialog) { }
  login(username: string, password: string) {
    return this.http.get<any>(`http://localhost:52457/api/login?username=`+ username +`&password=`+ password)
  }
  kendoListing (){
    return this.http.get<any>(`https://reqres.in/api/users`)
  }

  showAlert(msg: string, type: string, header?: string, okBtn?: string, cancelBtn?: string) {
    const dialogRef = this.dialog.open(KendoListingComponent, {
      backdropClass: 'blureffect',
      panelClass: 'alert-dialog',
      disableClose: false,
      data: {
        msg,
        type,
        header,
        okBtn,
        cancelBtn
      }
    });
  }
}
