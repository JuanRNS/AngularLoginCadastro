import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from "../../components/default-login-layout/default-login-layout.component";
import { InputComponent } from "../../components/input/input.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { cadastroService } from '../../service/cadastros.service';
import { HttpClientModule } from '@angular/common/http';


interface CadastroForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [DefaultLoginLayoutComponent, InputComponent, ReactiveFormsModule,HttpClientModule],
  providers: [cadastroService],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cadastroForm!: FormGroup<CadastroForm>;


  constructor(private route: Router,
    private cadastroService: cadastroService) {

    this.cadastroForm = new FormGroup<CadastroForm>({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit() {
    this.cadastroService.cadastro(this.cadastroForm.value.name, this.cadastroForm.value.email, this.cadastroForm.value.password)
    .subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  
    this.route.navigate(['login']);
  }
  navigate() {
    this.route.navigate(['login']);
  }
}
