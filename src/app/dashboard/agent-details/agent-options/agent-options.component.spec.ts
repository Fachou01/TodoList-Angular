import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentOptionsComponent } from './agent-options.component';

describe('AgentOptionsComponent', () => {
  let component: AgentOptionsComponent;
  let fixture: ComponentFixture<AgentOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
