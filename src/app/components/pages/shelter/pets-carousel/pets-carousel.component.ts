import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { PetCardComponent } from '../../../shared/pet-card/pet-card.component';

@Component({
  selector: 'app-pets-carousel',
  standalone: true,
  imports: [NgClass, PetCardComponent],
  templateUrl: './pets-carousel.component.html',
  styleUrl: './pets-carousel.component.css'
})
export class PetsCarouselComponent {


  pets = [
    { src: 'assets/imgs/pets/pet2.png', alt: 'Pet 2' },
    { src: 'assets/imgs/pets/pet3.png', alt: 'Pet 3' },
    { src: 'assets/imgs/pets/pet4.png', alt: 'Pet 4' },
    { src: 'assets/imgs/pets/pet5.png', alt: 'Pet 5' },
    { src: 'assets/imgs/pets/pet6.png', alt: 'Pet 6' }
  ];
  currentIndex: number = 0;
  intervalId: any;

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.onNext();
    }, 3000);
  }

  clearAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  onChange(slide: number) {
    this.currentIndex = slide;
    this.clearAutoSlide();
    this.startAutoSlide();
  }

  onNext() {
    this.currentIndex = (this.currentIndex + 1) % this.pets.length;
  }

  onPrev() {
    this.currentIndex = (this.currentIndex - 1 + this.pets.length) % this.pets.length;
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.clearAutoSlide();
  }
}
