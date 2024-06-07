import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoAPIComponent } from './geo-api.component';

describe('GeoAPIComponent', () => {
  let component: GeoAPIComponent;
  let fixture: ComponentFixture<GeoAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoAPIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeoAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
