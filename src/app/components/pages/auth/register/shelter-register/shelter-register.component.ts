import { Component, Output } from '@angular/core';
import { AddressSelectorComponent } from '../../../../shared/address-selector/address-selector.component';
import { FormBuilder } from '@angular/forms';
import { shelterRegisterRequest } from '../../../../../core/model/shelter/shelterRegisterRequest';
import { Address } from '../../../../../core/model/address';

@Component({
  selector: 'app-shelter-register',
  standalone: true,
  imports: [AddressSelectorComponent],
  templateUrl: './shelter-register.component.html',
  styleUrl: './shelter-register.component.css'
})
export class ShelterRegisterComponent {
  constructor(
    private formBuilder: FormBuilder
  ) {}

  @Output() registerRequest!: shelterRegisterRequest;
  submitted: boolean = false;

  registerForm = this.formBuilder.group(
    {
      name: "",
      email: "",
      phoneNumber: "",
      address: undefined,
      password: "",
      confirmPassword: "",      
    }
  )

  setAddressInfo(address: Address) {
    console.log(address);
  }
}
