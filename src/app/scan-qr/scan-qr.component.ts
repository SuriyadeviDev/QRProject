import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.component.html',
  styleUrls: ['./scan-qr.component.css']
})
export class ScanQRComponent implements OnInit {
  @ViewChild('scanner', { static: true })
  scanner: ZXingScannerComponent;
  hasCameras = false;
  hasPermission: boolean;
  qrResultString: string;
  availableDevices: MediaDeviceInfo[];
  selectedDevice: MediaDeviceInfo;
  scanQR: boolean;

  constructor() { }

  ngOnInit() {

  }


  ScanQR() {
    this.scanQR = true;
    setTimeout(() => {
      this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
        this.hasCameras = true;
        console.log('Devices: ', devices);
        this.availableDevices = devices;
      });

      this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
        console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
      });

      this.scanner.permissionResponse.subscribe((answer: boolean) => {
        this.hasPermission = answer;
      });
    }, 2000);
  };

  handleQrCodeResult(resultString: string) {
    console.log('Result: ', resultString);
    this.qrResultString = resultString;
  };

  onDeviceSelectChange(selectedValue: string) {
    console.log('Selection changed: ', selectedValue);
  };

}
