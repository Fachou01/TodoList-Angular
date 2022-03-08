import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentGeneralDetailsComponent } from './agent-general-details.component';

describe('AgentGeneralDetailsComponent', () => {
  let component: AgentGeneralDetailsComponent;
  let fixture: ComponentFixture<AgentGeneralDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentGeneralDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentGeneralDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
