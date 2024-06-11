import { Component } from '@angular/core';
import { AddressSelectorComponent } from '../../../../shared/address-selector/address-selector.component';
import { FormBuilder } from '@angular/forms';

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
}
