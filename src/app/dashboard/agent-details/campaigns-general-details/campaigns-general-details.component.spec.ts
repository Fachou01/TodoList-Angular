import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsGeneralDetailsComponent } from './campaigns-general-details.component';

describe('CampaignsGeneralDetailsComponent', () => {
  let component: CampaignsGeneralDetailsComponent;
  let fixture: ComponentFixture<CampaignsGeneralDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignsGeneralDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsGeneralDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
