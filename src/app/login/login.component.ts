import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    pwd: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  });

  loginSubmitted() {
    this.authService.loginUser(this.loginForm.value).subscribe(
      res => {
        console.log(res);
        // Redirect to another page after successful login
        // For example, navigate to the CV generation page
        this.router.navigate(['/cv-generation']);
      },
      err => {
        console.error(err);
        // Handle login error
      }
    );
  }
  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get PWD(): FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }

  ngOnInit(): void {}
}
