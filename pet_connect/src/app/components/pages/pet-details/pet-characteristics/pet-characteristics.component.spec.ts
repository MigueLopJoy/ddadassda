import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCharacteristicsComponent } from './pet-characteristics.component';

describe('PetCharacteristicsComponent', () => {
  let component: PetCharacteristicsComponent;
  let fixture: ComponentFixture<PetCharacteristicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetCharacteristicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
