import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as _ from 'lodash';
import { PwaServiceService } from '../pwa-service.service';
@Component({
  selector: 'app-kendo-listing',
  templateUrl: './kendo-listing.component.html',
  styleUrls: ['./kendo-listing.component.css']
})
export class KendoListingComponent implements OnInit {

  currentURL: any
  sampleGrid: any;
  kendoForm: FormGroup;
  editedRowIndex: any;
  add: boolean;
  public tasks: any;
  public form: FormGroup;
  result: any;


  constructor(public router: Router, public fb: FormBuilder, public pwaService: PwaServiceService) { }

  ngOnInit() {
    this.currentURL = this.router.url;
    this.pwaService.kendoListing().subscribe(
      result => {
        if (result) {
          this.sampleGrid = result;
          this.sampleGrid.forEach((value, index) => {
            value.id = index + 1;
          });
        }
      },
      error => {
        alert('No Datas Found');
      });//*/
  }
  initForm(data?) {
    this.kendoForm = this.fb.group({
      'first_name': [(data) ? data.first_name : ''],
      'last_name': [(data) ? data.last_name : ''],
      'comments': [(data) ? data.comments : ''],
      'eta': [(data) ? data.eta : ''],
    })
  }
 
  public addHandler({ sender }) {
    this.add = true;
    this.closeEditor(sender);
    this.initForm();
    sender.addRow(this.kendoForm);
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);
    this.initForm(dataItem);
    this.editedRowIndex = rowIndex;
    sender.editRow(rowIndex, this.kendoForm);
  }
  public saveHandler({ sender, rowIndex, formGroup }) {
    const obj = {
      first_name: formGroup.value.first_name,
      last_name: formGroup.value.last_name,
      email: formGroup.value.email,
      id: formGroup.value.id,
    }
    const sampleGrid = localStorage.getItem('kendoList');
    this.sampleGrid = JSON.parse(sampleGrid);
    if (this.add == true) {
      this.sampleGrid.push(obj);
      this.add = !this.add;
    } else {
      const indexVal = _.findIndex(this.sampleGrid, { id: obj.id });
      this.sampleGrid[indexVal] = obj;
    }
    this.setLocalStorage();
    sender.closeRow(rowIndex);
  }

  public setLocalStorage() {
    const listing = JSON.stringify(this.result);
    localStorage.setItem('kendoList', listing);
  }
  public removeHandler({ dataItem }) {
    const indexVal = _.findIndex(this.sampleGrid, { id: dataItem.id });
    this.sampleGrid.splice(indexVal, 1);
    this.setLocalStorage();
  }

  closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.kendoForm = undefined;
  }
}
