import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { KendoListingComponent } from './kendo-listing/kendo-listing.component'
@Injectable({
  providedIn: 'root'
})
export class PwaServiceService {

  constructor(public http: HttpClient, public dialog: MatDialog) { }
  // login(username: string, password: string) {
  //   return this.http.get<any>(`http://localhost:52457/api/login?username=`+ username +`&password=`+ password)
  // }
  login(data) {
    return this.http.post<any>(`https://reqres.in/api/login`, (data));
  }


  kendoListing() {
    return this.http.get<any>(`https://reqres.in/api/users`)
  }

  RegisterSerive() {
    const data= 
      {"FirstName":"Suriya","LastName":"Devi","CarNo":"TN-5678","CarModel":"Audi","Gender":"F","terms":true,"Email":"Suriya@gmail.com","QRCode":"WpOtR"}
    return this.http.post<any>(`http://localhost:52457/api/Register`, (data));
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
