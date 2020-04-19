import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuStatusDisplayComponent } from './cpu-status-display.component';

describe('CpuStatusDisplayComponent', () => {
  let component: CpuStatusDisplayComponent;
  let fixture: ComponentFixture<CpuStatusDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuStatusDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuStatusDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
