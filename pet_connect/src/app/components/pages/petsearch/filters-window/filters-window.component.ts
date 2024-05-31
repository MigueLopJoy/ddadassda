import { Component, EventEmitter, Output } from '@angular/core';
import { FiltersFormComponent } from './filters-form/filters-form.component';

@Component({
  selector: 'app-filters-window',
  standalone: true,
  imports: [FiltersFormComponent],
  templateUrl: './filters-window.component.html',
  styleUrl: './filters-window.component.css'
})
export class FiltersWindowComponent {

  @Output() closeWindowEmitter: EventEmitter<void> = new EventEmitter<void>;

  closeWindow() {
    this.closeWindowEmitter.emit();
  }
}
