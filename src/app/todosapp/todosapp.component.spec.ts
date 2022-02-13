import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosappComponent } from './todosapp.component';

describe('TodosappComponent', () => {
  let component: TodosappComponent;
  let fixture: ComponentFixture<TodosappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
