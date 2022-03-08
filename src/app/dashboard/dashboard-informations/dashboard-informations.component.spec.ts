import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInformationsComponent } from './dashboard-informations.component';

describe('DashboardInformationsComponent', () => {
  let component: DashboardInformationsComponent;
  let fixture: ComponentFixture<DashboardInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
