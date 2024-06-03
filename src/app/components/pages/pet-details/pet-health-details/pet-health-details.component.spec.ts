import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetHealthDetailsComponent } from './pet-health-details.component';

describe('PetHealthDetailsComponent', () => {
  let component: PetHealthDetailsComponent;
  let fixture: ComponentFixture<PetHealthDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetHealthDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetHealthDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
