import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {

  @Input() labelText!: string;
  @Input() disabled: boolean = false;
  @Output() checkChange: EventEmitter<boolean> = new EventEmitter<boolean>;
  checked: boolean = false;

  onCheckBoxChange() {
    this.checked = !this.checked;
    this.checkChange.emit(this.checked);
  }

} 
