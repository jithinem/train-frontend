import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraintimeComponent } from './traintime.component';

describe('TraintimeComponent', () => {
  let component: TraintimeComponent;
  let fixture: ComponentFixture<TraintimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraintimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraintimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
