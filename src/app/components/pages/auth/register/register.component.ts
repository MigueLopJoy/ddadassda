import { Component } from '@angular/core';
import { ShelterRegisterComponent } from './shelter-register/shelter-register.component';
import { PersonRegisterComponent } from './person-register/person-register.component';
import { UserTypeSelectionComponent } from './user-type-selection/user-type-selection.component';
import { Shelter } from '../../../../core/model/shelter/shelter';
import { Person } from '../../../../core/model/person/person';
import { RouterLink } from '@angular/router';
import { AuthDataService } from '../../../../core/services/data-sharing/auth-data/auth-data.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, UserTypeSelectionComponent, ShelterRegisterComponent, PersonRegisterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(
    private authDataSerive: AuthDataService
  ) {}

  userType!: 'person' | 'shelter';
  shelter!: Shelter;
  person!: Person;
  pageTitle: string = "Crear cuenta nueva";

  emitPageTitle() {
    this.authDataSerive.emitPageTitle(this.pageTitle);
  }

  selectUserType(userType: 'person' | 'shelter') {
    this.userType = userType;
  }

  ngOnInit() {
    this.emitPageTitle();
  }
  
}
