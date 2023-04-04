import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskColumnHeaderComponent } from './task-column-header.component';

describe('TaskColumnHeaderComponent', () => {
  let component: TaskColumnHeaderComponent;
  let fixture: ComponentFixture<TaskColumnHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskColumnHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskColumnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
