import { Component, Input } from '@angular/core';
import { AgeFormatPipe } from '../../../core/pipes/age-format/age-format.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [AgeFormatPipe],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {

  constructor(
    private router: Router
  ) {}

  @Input() pet!: any;

  showPetPage() {
    this.router.navigate(["/mascotas/mascota"])
  }
}
