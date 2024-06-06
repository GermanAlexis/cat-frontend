import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
  ],
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
          alert('Sos el mejor');
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
