import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) {}

  onLogin() {
    if (this.email && this.password) {
      this.userService.login(this.email, this.password).subscribe(
        (response) => {
          
          localStorage.setItem('userName', response.userName || this.email);
          alert('Login exitoso');
          this.router.navigate(['/dashboard']);
          
        },
        (error) => {
          alert('Credenciales incorrectas. Intenta de nuevo.');
        }
      );
    } else {
      alert('Por favor completa todos los campos.');
    }
  }
}
