import { Component, Input, ViewChild } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { InputComponent } from '../../components/input/input.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DadosService } from '../../service/dados.service';
import { LoginService } from '../../service/login.service';
import { HttpClientModule } from '@angular/common/http';

interface loginForm {
  email: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginLayoutComponent, InputComponent, ReactiveFormsModule, HttpClientModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup<loginForm>;

  

  constructor(
    private route: Router,
    private loginservice: LoginService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    this.loginservice.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

  navigate() {
    this.route.navigate(['cadastro']);
  }
  passwordVisible() {
    
  }
}