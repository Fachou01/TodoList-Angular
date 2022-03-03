import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaignsDetailsComponent } from './compaigns-details.component';

describe('CompaignsDetailsComponent', () => {
  let component: CompaignsDetailsComponent;
  let fixture: ComponentFixture<CompaignsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaignsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaignsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
