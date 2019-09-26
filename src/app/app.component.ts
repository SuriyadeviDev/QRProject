import { Component } from '@angular/core';
import { PwaServiceService } from './pwa-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwUpdate } from '@angular/service-worker';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login Page';
  loginForm: FormGroup;
  formSubmit = false;
  constructor(updates: SwUpdate, private pwaService:PwaServiceService, private formBuilder: FormBuilder, public router: Router){
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    })
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['SuriyaDev', Validators.required],
      password: ['Suriya@12345', Validators.required]
    });
  }

  get fc() {
    return this.loginForm.controls;
  }
  onSubmit() {
    const formValues = this.loginForm.value;
    this.formSubmit = true;
    this.pwaService.login(formValues.username, formValues.password).subscribe(
      data => {
        if (data)
          this.router.navigate(['/kendoListing']);
      },
      error => {
        alert('Login UnSuccessful');
      });
  }
}
