import { Component, Input, ViewChild } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { InputComponent } from '../../components/input/input.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DadosService } from '../../service/dados.service';

interface loginForm {
  email: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginLayoutComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup<loginForm>;

  

  constructor(
    private route: Router,
    private localStorage : DadosService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    const dados = this.localStorage.getItem<any>('cadastro');
    
    if (dados) {
      const {email, password} = this.loginForm.value;
      if (email === dados.email && password === dados.password) {
        alert('Login realizado com sucesso!' 
          + '\n'
          + dados.name 
          + '\n'
          + dados.email
          + '\n'
          + dados.password
        );
      } else {
        alert('Email ou senha incorretos!');
      }
    }

  }

  navigate() {
    this.route.navigate(['cadastro']);
  }
  passwordVisible() {
    
  }
}