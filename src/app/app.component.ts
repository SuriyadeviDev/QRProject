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
  constructor(updates: SwUpdate, private pwaService: PwaServiceService, private formBuilder: FormBuilder, public router: Router) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    })
  }
  // SuriyaDev
  // Suriya@12345
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['eve.holt@reqres.in', Validators.required],
      password: ['cityslicka@12345', Validators.required]
    });
  }

  get fc() {
    return this.loginForm.controls;
  }
  onSubmit() {
    const formValues = this.loginForm.value;
    this.formSubmit = true;
    // formValues.username, formValues.password
    this.pwaService.login(formValues).subscribe(
      data => {
        if (data.token)
          this.router.navigate(['/kendoListing']);
      },
      error => {
        alert('Login UnSuccessful');
      });
  }
}
