import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNodeComponent } from './server-node.component';

describe('ServerNodeComponent', () => {
  let component: ServerNodeComponent;
  let fixture: ComponentFixture<ServerNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerNodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServerNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
