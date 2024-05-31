import { Component, Input } from '@angular/core';
import { AgeFormatPipe } from '../../../core/pipes/age-format/age-format.pipe';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [AgeFormatPipe],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {
  @Input() pet!: any;
}
