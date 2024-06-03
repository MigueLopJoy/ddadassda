import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsearchComponent } from './petsearch.component';

describe('PetsearchComponent', () => {
  let component: PetsearchComponent;
  let fixture: ComponentFixture<PetsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetsearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
