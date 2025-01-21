import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from "../../components/default-login-layout/default-login-layout.component";
import { InputComponent } from "../../components/input/input.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DadosService } from '../../service/dados.service';

interface CadastroForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [DefaultLoginLayoutComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cadastroForm!: FormGroup<CadastroForm>;


  constructor(private route: Router,
    private localStorage: DadosService) {
    this.cadastroForm = new FormGroup<CadastroForm>({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit() {
    if (this.cadastroForm.valid) {
      const { name, email, password, confirmPassword } = this.cadastroForm.value;
      if (password === confirmPassword) {
        this.localStorage.setItem('cadastro', { name, email, password, confirmPassword });
        alert('Cadastro realizado com sucesso!');
      }
      else {
        alert('Preencha todos os campos corretamente!' + '\n' + 'As senhas não são iguais!');
      }
    }
  }
  navigate() {
    this.route.navigate(['login']);
  }
}
