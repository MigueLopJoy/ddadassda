import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsCarouselComponent } from './pets-carousel.component';

describe('PetsCarouselComponent', () => {
  let component: PetsCarouselComponent;
  let fixture: ComponentFixture<PetsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetsCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
