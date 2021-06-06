import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoPresencialComponent } from './torneo-presencial.component';

describe('TorneoPresencialComponent', () => {
  let component: TorneoPresencialComponent;
  let fixture: ComponentFixture<TorneoPresencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorneoPresencialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneoPresencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
