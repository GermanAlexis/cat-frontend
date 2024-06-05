import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  async onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      console.log('email: ', email);
      const password = this.loginForm.value.password;
      console.log('password: ', password);
      (await this.authService.login({ email, password })).subscribe({
        next: (data) => {
          console.log('Datos recibidos:', data);
        },
        error: (error) => {
          console.error('Error al recibir datos:', error);
        },
        complete: () => {
          console.log('Observable completado');
        },
      });
    }
  }
}
