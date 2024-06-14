import { ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectInputComponent } from '../../select-input/select-input.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-postal-code-selector',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, FormsModule, SelectInputComponent],
  templateUrl: './postal-code-selector.component.html',
  styleUrl: './postal-code-selector.component.css'
})
export class PostalCodeSelectorComponent {

  constructor() {}

  @Input() submitted!: boolean; 
  @Input() postalCode!: string;
  @Input() municipalityPostalCodes!: string[] | undefined;
  @Input() postalCodes!: string[];
  @Output() postalCodeChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() resetSearch: EventEmitter<void> = new EventEmitter<void>();
  firstTimeWriten: boolean = false;

  submitIfValid() {
    if (this.postalCode.length === 5 && !this.isPostalCodeInvalid()) {
      this.postalCodeChange.emit(this.postalCode);      
    }
  }

  searchPostalCode(searchText: string = "") {
    if (searchText) this.postalCode = searchText;
    if (!this.firstTimeWriten) this.firstTimeWriten = (this.postalCode.length === 5);
    if (this.firstTimeWriten && this.postalCode.length !== 5) {
      this.resetSearch.emit();
    } else {
      if (this.notNull()) {
        this.submitIfValid();
      }
    }
  }

  notNull(): boolean {
    return (this.postalCode !== undefined) && (this.postalCode.length > 0);
  }

  submittedOrFirstTimeWritten(): boolean {
    return this.submitted || this.firstTimeWriten;
  }
 
  requiredError(): boolean {
    return (this.submittedOrFirstTimeWritten() && !this.notNull());
  }

  lengthError(): boolean {
    return (this.submittedOrFirstTimeWritten() && this.notNull() && (this.postalCode.length !== 5));
  }

  patternError(): boolean {
  return this.notNull() && !(/^[0-9]+$/.test(this.postalCode));
  }

  isNotIncluded(): boolean {
    return (this.municipalityPostalCodes !== undefined) ? !this.municipalityPostalCodes.includes(this.postalCode) : !this.postalCodes.includes(this.postalCode);
  }

  notFoundError(): boolean {
    return (this.notNull() && this.postalCode.length === 5) && 
      this.submittedOrFirstTimeWritten() && 
      this.isNotIncluded();
  }

  isPostalCodeInvalid(): boolean {
    return this.requiredError() || 
      this.lengthError() || 
      this.patternError() || 
      this.notFoundError();
  }

  getObjectKeys(object: object): string[] {
    return Object.keys(object);
  }

}
