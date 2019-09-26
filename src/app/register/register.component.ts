import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public myAngularxQrCode: string = null;
  public generateCode : string = null
  registerForm: FormGroup;
  formSubmit = false;
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string = 'FirstName : Muthuvel, Email';
  constructor(private formBuilder: FormBuilder) {
    this.myAngularxQrCode = 'Your QR code data string';
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

  public makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  

  registerFormSubmit() {
    if(this.registerForm.invalid) return;
    const formValues = this.registerForm.value;
    this.formSubmit = true;
    this.generateCode = this.makeid(5);
    // this.pwaService.login(formValues.username, formValues.password).subscribe(
    //   data => {
    //     if (data.token)
    //       this.router.navigate(['/kendoListing']);
    //   },
    //   error => {
    //     alert('Login UnSuccessful');
    //   });
  };

}
