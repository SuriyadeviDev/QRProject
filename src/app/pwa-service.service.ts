import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { KendoListingComponent } from './kendo-listing/kendo-listing.component'
@Injectable({
  providedIn: 'root'
})
export class PwaServiceService {

  constructor(public http: HttpClient, public dialog: MatDialog) { }
  login(data) {
    return this.http.post<any>(`http://localhost:3000/userVal`, (data));
  }


  kendoListing() {
    return this.http.get<any>(`http://localhost:3000/getTodos`)
  }

  RegisterSerive(data) {
    // const data= 
      // {"FirstName":"Suriya","LastName":"Devi","CarNo":"TN-5678","CarModel":"Audi","Gender":"F","terms":true,"Email":"Suriya@gmail.com","QRCode":"WpOtR"}
     return this.http.post<any>(`http://localhost:3000/postTodos`, (data));
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
