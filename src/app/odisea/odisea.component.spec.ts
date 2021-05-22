import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdiseaComponent } from './odisea.component';

describe('OdiseaComponent', () => {
  let component: OdiseaComponent;
  let fixture: ComponentFixture<OdiseaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdiseaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdiseaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
