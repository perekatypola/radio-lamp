import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirPageComponent } from './fir-page.component';

describe('FirPageComponent', () => {
  let component: FirPageComponent;
  let fixture: ComponentFixture<FirPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
