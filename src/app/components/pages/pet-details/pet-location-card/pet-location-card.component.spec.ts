import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetLocationCardComponent } from './pet-location-card.component';

describe('PetLocationCardComponent', () => {
  let component: PetLocationCardComponent;
  let fixture: ComponentFixture<PetLocationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetLocationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetLocationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
