import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KendoListingComponent } from './kendo-listing/kendo-listing.component';
import { RegisterComponent } from './register/register.component';
import { ScanQRComponent } from './scan-qr/scan-qr.component';


const routes: Routes = [
  {path: 'kendoListing', component:KendoListingComponent},
  {path: 'registerForm', component:RegisterComponent},
  {path: 'scanQR', component:ScanQRComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
