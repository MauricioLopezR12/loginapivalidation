import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Aquí iría tu lógica de validación
    if (this.email === 'test@mail.com' && this.password === '12345') {
      alert('Login exitoso');
      this.router.navigate(['/menu']); // Redirige al menú
    } else {
      alert('Credenciales inválidas');
    }
  }
}
