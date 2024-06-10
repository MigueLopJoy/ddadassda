import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputOptionService } from '../../../core/services/input-option/input-option.service';

@Component({
  selector: 'app-input-option',
  standalone: true,
  imports: [],
  templateUrl: './input-option.component.html',
  styleUrl: './input-option.component.css'
})
export class InputOptionComponent {

  constructor(
    private inputOptionService: InputOptionService
  ) {}

  @Input() labelText!: string;
  @Input() checked: boolean = false;
  @Output() checkChange: EventEmitter<boolean> = new EventEmitter<boolean>;

  onCheckBoxChange() {
    this.checked = !this.checked;
    this.checkChange.emit(this.checked);
    if (this.checked) {
      this.inputOptionService.notifyChange(this.labelText);
    }
  }

  listenForOptionChanges() {
    this.inputOptionService
    .optionChanged
    .subscribe({
      next: (option: string) => {
        this.checked = this.labelText === option
      }
    })
  }

  ngOnInit() {
    this.listenForOptionChanges();
  }

}
