import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as jsPDF from 'jspdf';
import { PwaServiceService } from '../pwa-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('content', { static: true }) content: ElementRef;
  public generateCode: string = null
  registerForm: FormGroup;
  formSubmit = false;
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string = 'FirstName : Muthuvel, Email';
  fileName: string;
  filePreview: string;
  sanitizer: any;
  addArray: any;
  constructor(private formBuilder: FormBuilder, public pwaService: PwaServiceService, public router: Router) {
  }

  get Rc() {
    return this.registerForm.controls;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      carno: ['', Validators.required],
      carmodel: ['', Validators.required],
      gender: ['', Validators.required],
      terms: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  public makeid(length: any) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  registerFormSubmit() {
    this.formSubmit = true;
    if (this.registerForm.invalid)
      return;
    const formValues = this.registerForm.value;
    this.generateCode = this.makeid(5);
    this.addArray.push(formValues);
    localStorage.setItem('registerUser', JSON.stringify(this.addArray));
     alert('Registerd Successfully');
    // this.pwaService.RegisterSerive().subscribe( comment for cors error
    //   data => {
    //     if (data.token)
    //       console.log('test');
    //   },
    //   error => {
    //     alert('Login UnSuccessful');
    //   });
  };


  convertPDF() {
    let doc = new jsPDF();
    let cont = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': cont
    })
    doc.save('test.pdf');
  }

}
