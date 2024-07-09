import {Component, inject} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink} from "@angular/router";
import {TitleCasePipe} from "@angular/common";
import {AuthService} from "../../../services/auth.service";
import {UserInterface} from "../../../interfaces/user.interface";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatIcon,
    RouterLink,
    TitleCasePipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router: Router = inject(Router);
  auth: AuthService = inject(AuthService);

  login() {
    this.auth.login('default.hero@heroesapp.com', '12345678')
      .subscribe((user: UserInterface | undefined) => {
        this.router.navigateByUrl('heroes')
      })
  }
}
