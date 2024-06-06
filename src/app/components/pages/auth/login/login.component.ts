import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthDataService } from '../../../../core/services/data-sharing/auth-data/auth-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private authDataSerive: AuthDataService
  ) {}

  pageTitle: string = "Accede a tu cuenta";

  emitPageTitle() {
    this.authDataSerive.emitPageTitle(this.pageTitle);
  }

  ngOnInit() {
    this.emitPageTitle();
  }
}
