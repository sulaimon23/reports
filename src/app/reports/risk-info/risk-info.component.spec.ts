import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskInfoComponent } from './risk-info.component';

describe('RiskInfoComponent', () => {
  let component: RiskInfoComponent;
  let fixture: ComponentFixture<RiskInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RiskInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
