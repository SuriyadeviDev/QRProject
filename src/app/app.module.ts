import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { PwaServiceService } from './pwa-service.service';
import { KendoListingComponent } from './kendo-listing/kendo-listing.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatDialogModule} from '@angular/material'
import { from } from 'rxjs';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { RegisterComponent } from './register/register.component';
import { ScanQRComponent } from './scan-qr/scan-qr.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';


@NgModule({
  declarations: [
    AppComponent,
    KendoListingComponent,
    AlertDialogComponent,
    RegisterComponent,
    ScanQRComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule,
    InputsModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    ZXingScannerModule
  ],
  providers: [PwaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
