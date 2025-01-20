import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from "../../components/default-login-layout/default-login-layout.component";
import { InputComponent } from "../../components/input/input.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

interface CadastroForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [DefaultLoginLayoutComponent, InputComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cadastroForm!: FormGroup<CadastroForm>;


  constructor(private route: Router){
    this.cadastroForm = new FormGroup<CadastroForm>({
      name: new FormControl('',[Validators.required, Validators.minLength(5)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('',[Validators.required, Validators.minLength(6)]),
    })
  }

  submit(){
    if(this.cadastroForm.valid){
      const {name, email, password, confirmPassword} = this.cadastroForm.value;
      alert("Cadastro realizado com sucesso!"
        + "Nome " + name
        + "Email " + email
        + "Senha " + password
      );
    }
  }
  navigate(){
    this.route.navigate(['login']);
  }
}
