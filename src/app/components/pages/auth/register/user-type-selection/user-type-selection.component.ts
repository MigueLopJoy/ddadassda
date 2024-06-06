import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-type-selection',
  standalone: true,
  imports: [],
  templateUrl: './user-type-selection.component.html',
  styleUrl: './user-type-selection.component.css'
})
export class UserTypeSelectionComponent {

  @Output() userType: EventEmitter<'person' | 'shelter'> = new EventEmitter<'person' | 'shelter'>;

  selectUserType(userType: 'person' | 'shelter') {
    this.userType.emit(userType);
  }
}
