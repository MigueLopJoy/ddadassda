import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { AnimalType } from '../../../core/model/pets/animalTypes';
import { NgClass } from '@angular/common';
import { Sex } from '../../../core/model/pets/sex';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-input-radio',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input-radio.component.html',
  styleUrl: './input-radio.component.css'
})
export class InputRadioComponent {

  constructor(
    private sanitizer: DomSanitizer,
    private renderer: Renderer2
  ) {}

  @Input() inputValue!: AnimalType | Sex;
  @Input() labelContent!: string;
  @Input() checked: boolean = false;
  @Output() inputValueChange: EventEmitter<AnimalType | Sex> = new EventEmitter<AnimalType | Sex>();
  @ViewChild('container', { static: true }) container!: ElementRef;
  labelContentHTML!: SafeHtml;

  onChange() {
    this.checked = !this.checked;
    this.inputValueChange.emit(this.inputValue);
    this.updateFillColor();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['labelContent']) {
      this.labelContentHTML = this.sanitizer.bypassSecurityTrustHtml(this.labelContent);
    }
  }

  changeColor() {
    const svg = this.container.nativeElement.querySelector('svg path');
    if (svg) {
      svg.setAttribute('fill', '#e2e8f0');
    }
  }

  updateFillColor() {
    const svgElement = this.container.nativeElement.querySelector('svg path');
    if (svgElement) {
      const fillColor = this.checked ? 'white' : 'rgb(2, 132, 199)';
      this.renderer.setAttribute(svgElement, 'fill', fillColor);
    }
  }

  ngOnInit() {
    this.labelContentHTML = this.sanitizer.bypassSecurityTrustHtml(this.labelContent);
  }
}
