import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {

  @Input() labelText!: string;
  @Input() checked: boolean = false;
  @Output() checkChange: EventEmitter<boolean> = new EventEmitter<boolean>;

  onCheckBoxChange() {
    this.checked = !this.checked;
    this.checkChange.emit(this.checked);
  }

} 
